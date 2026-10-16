// Models: loading each object's glTF (low detail first, full detail when it's big enough on screen),
// preparing and flattening it, revealing it a few per frame, and the hologram look of planned missions.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { celestialMap } from './state.js';
import { camera, renderer } from './scene.js';
import { CLOSED_BODY_TYPES, HIGH_DETAIL_HIDE_PX, HIGH_DETAIL_SHOW_PX, MISSION_MODEL_SIZE, getEffectiveModel } from './config.js';
import { lazyGltfLoader, fixPath } from './assets.js';
import { prepareForGPU } from './gpu.js';
import { vertexReader } from './vertices.js';
import { relandLanders } from './landers.js';
import { getSystemRoot } from './orbits.js';

// Planned missions' hologram materials; the loop moves their shimmer on.
export const plannedMaterials = [];

export function createHologramMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x00ffff) } },
        vertexShader: `
            varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vNormal = normalize(mat3(modelMatrix) * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos; }
        `,
        fragmentShader: `
            uniform float uTime; uniform vec3 uColor; varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = dot(viewDir, vNormal); fresnel = 1.0 - abs(fresnel); fresnel = pow(fresnel, 2.0);
            float shimmer = sin(vWorldPosition.y * 0.5 + uTime * 2.0) * 0.5 + 0.5; 
            shimmer *= sin(vWorldPosition.z * 0.3 + uTime * 1.5) * 0.5 + 0.5; 
            vec3 finalColor = uColor + (fresnel * vec3(0.5, 0.8, 1.0)); 
            float alpha = 0.05 + (fresnel * 0.7) + (shimmer * 0.2); 
            gl_FragColor = vec4(finalColor, alpha); }
        `,
        transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
    });
}

const modelLoadQueue = [];
let activeModelLoads = 0;
const MAX_CONCURRENT_LOADS = 2;

function processModelLoadQueue() {
    if (activeModelLoads >= MAX_CONCURRENT_LOADS || modelLoadQueue.length === 0) return;

    const task = modelLoadQueue.shift();
    if (!task) return;

    activeModelLoads++;
    executeModelLoad(task.item, task.isPriority, () => {
        activeModelLoads--;
        processModelLoadQueue();
    });
}

export function loadModelForItem(item, isPriority = false) {
    if (!item) return;
    if (item.isModelLoaded || item.isModelLoading) return;
    if (item.isModelQueued) {
        // Already waiting: a priority request (e.g. a lander's body someone is flying to)
        // jumps it to the front of the queue.
        const queued = modelLoadQueue.findIndex(task => task.item === item);
        if (isPriority && queued > 0) modelLoadQueue.unshift(...modelLoadQueue.splice(queued, 1));
        return;
    }

    const effectiveModel = getEffectiveModel(item);
    if (!effectiveModel) {
        item.isModelLoaded = true;
        return;
    }

    item.isModelQueued = true;

    if (isPriority) {
        modelLoadQueue.unshift({ item, isPriority: true });
    } else {
        modelLoadQueue.push({ item, isPriority: false });
    }

    processModelLoadQueue();
}

// glTF clearcoat/specular/ior/sheen make MeshPhysicalMaterial, whose shaders are much larger
// and come in more variants to compile. At the size spacecraft appear, the standard material
// looks the same. Shared source materials stay shared.
function simplifyMaterial(material, cache) {
    if (!material || !material.isMeshPhysicalMaterial) return material;
    if (!cache.has(material)) {
        const standard = new THREE.MeshStandardMaterial();
        standard.copy(material); // MeshStandardMaterial.copy takes only the standard properties
        if (material.transmission > 0) {
            // Glass: transmission would also force a second full-scene render every frame.
            // Plain transparency reads the same at this scale.
            standard.transparent = true;
            standard.opacity = Math.min(material.opacity, 0.35);
            standard.depthWrite = false;
        }
        cache.set(material, standard);
    }
    return cache.get(material);
}

function processModelMeshes(item, sceneRoot) {
    const simplified = new Map();
    sceneRoot.traverse((child) => {
        if (child.isMesh) {
            child.material = Array.isArray(child.material)
                ? child.material.map(m => simplifyMaterial(m, simplified))
                : simplifyMaterial(child.material, simplified);
            child.userData = item;
            child.castShadow = true;
            child.receiveShadow = true;
            // Solid bodies cast from their back faces: a sunlit face is then tested against the
            // far side of the body, not itself, so coarse facets don't flicker in and out of their
            // own shadow as a comet or asteroid tumbles, while lobes and ridges still shadow each
            // other. Spacecraft keep front faces: their thin panels have no back to cast from.
            if (CLOSED_BODY_TYPES.has(item.type)) {
                (Array.isArray(child.material) ? child.material : [child.material]).forEach(m => { m.shadowSide = THREE.BackSide; });
            }
            if (child.material) {
                if (child.material.map) child.material.map.colorSpace = THREE.SRGBColorSpace;
                if (child.material.metalness !== undefined) {
                    child.material.metalness = Math.min(child.material.metalness, 0.4);
                    child.material.roughness = Math.max(child.material.roughness, 0.6);
                }
            }
            if (item.status === 'Planned') {
                const holoMat = createHologramMaterial();
                child.material = holoMat;
                plannedMaterials.push(holoMat);
                child.castShadow = false; child.receiveShadow = false;
            }
        }
    });
}

// Area-weighted centroid of a model's triangles, in its world space. Very dense meshes are
// sampled so this stays cheap while a model is swapped in: one triangle at a random spot in
// each of N equal blocks, since taking every Nth triangle can follow patterns in the
// triangle order and skew the result.
const CENTROID_MAX_TRIANGLES = 100000;
function getAreaCentroid(root) {
    root.updateMatrixWorld(true);
    let triangles = 0;
    root.traverse(m => { if (m.isMesh) triangles += (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3; });
    const step = Math.max(1, triangles / CENTROID_MAX_TRIANGLES);
    let seed = 1;
    const jitter = () => ((seed = (seed * 16807) % 2147483647) / 2147483647); // deterministic, so reloads match
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
    const sum = new THREE.Vector3();
    let totalArea = 0;
    root.traverse(m => {
        if (!m.isMesh) return;
        const pos = m.geometry.attributes.position, index = m.geometry.index;
        const count = (index ? index.count : pos.count) / 3;
        const corner = vertexReader(pos, m.matrixWorld);
        const ids = index ? index.array : null;
        for (let block = 0; block < count; block += step) {
            const i = Math.min(count - 1, Math.floor(block + (step > 1 ? jitter() * step : 0))) * 3;
            corner(a, ids ? ids[i] : i);
            corner(b, ids ? ids[i + 1] : i + 1);
            corner(c, ids ? ids[i + 2] : i + 2);
            const area = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() / 2;
            sum.addScaledVector(a.add(b).add(c), area / 3);
            totalArea += area;
        }
    });
    return totalArea > 0 ? sum.divideScalar(totalArea) : null;
}

// Every mesh costs a draw call in each pass (the view and up to two shadow maps), and on slower
// CPUs that per-object overhead is what limits the frame rate, not the GPU. Some models arrive as
// hundreds of meshes sharing a few dozen materials (Perseverance: 252 meshes, 47 materials,
// every one skinned though nothing animates them). Since models never move their parts, bake each
// into the model's own frame (skinned ones in the pose they're drawn in) and merge those that
// share a material. The result draws exactly as before, in a fraction of the calls.
const FLATTEN_SKIP_ATTRIBUTES = new Set(['skinIndex', 'skinWeight']);
export function flattenModel(model) {
    // Meshes can merge when they share a material, the flags that set how they're drawn, and the
    // same set of vertex attributes.
    const attributeSignature = geometry => Object.keys(geometry.attributes).filter(n => !FLATTEN_SKIP_ATTRIBUTES.has(n))
        .sort().map(n => n + geometry.attributes[n].itemSize).join();
    const mergeKey = (mesh, shown) => [mesh.material.uuid, mesh.castShadow, mesh.receiveShadow, mesh.renderOrder, shown,
        mesh.frustumCulled, mesh.layers.mask, attributeSignature(mesh.geometry)].join('|');
    let meshes = 0, skinned = false, unsupported = false;
    const keys = new Set();
    model.traverse(o => {
        if (o.isMesh) {
            meshes++;
            skinned ||= o.isSkinnedMesh;
            if (o.isInstancedMesh || o.isBatchedMesh || Array.isArray(o.material)
                || Object.keys(o.geometry.morphAttributes).length) unsupported = true;
            else keys.add(mergeKey(o, o.visible));
        } else if (o.isLight || o.isCamera || o.isLine || o.isPoints || o.isSprite) unsupported = true;
    });
    // Nothing to merge and nothing skinned (a model already flattened in its file, say): leave
    // it exactly as it came.
    if (unsupported || meshes < 2 || (keys.size === meshes && !skinned)) return;

    model.updateMatrixWorld(true);
    const toModel = new THREE.Matrix4().copy(model.matrixWorld).invert();
    const groups = new Map();
    const m = new THREE.Matrix4(), normalMatrix = new THREE.Matrix3();
    const skin = new THREE.Matrix4(), bone = new THREE.Matrix4(), v = new THREE.Vector3();
    model.traverse(mesh => {
        if (!mesh.isMesh) return;
        const src = mesh.geometry;
        const geometry = new THREE.BufferGeometry();
        for (const [name, attribute] of Object.entries(src.attributes)) {
            if (FLATTEN_SKIP_ATTRIBUTES.has(name)) continue;
            // Plain floats: merging needs matching array types, and some arrive quantised.
            const array = new Float32Array(attribute.count * attribute.itemSize);
            for (let i = 0; i < attribute.count; i++) {
                for (let c = 0; c < attribute.itemSize; c++) array[i * attribute.itemSize + c] = attribute.getComponent(i, c);
            }
            geometry.setAttribute(name, new THREE.BufferAttribute(array, attribute.itemSize));
        }
        const count = geometry.attributes.position.count;
        const index = src.index ? Array.from({ length: src.index.count }, (_, i) => src.index.getX(i))
            : Array.from({ length: count }, (_, i) => i);
        m.multiplyMatrices(toModel, mesh.matrixWorld);
        let shown = true;
        for (let p = mesh; p && p !== model; p = p.parent) shown &&= p.visible;

        if (mesh.isSkinnedMesh) {
            // As the vertex shader does: the skin matrix (bindMatrixInverse · Σ weight · bone ·
            // boneInverse · bindMatrix) moves positions, normals and tangents alike; then the
            // mesh's own transform (its normal matrix, for normals).
            const { bones, boneInverses } = mesh.skeleton;
            const skinIndex = src.attributes.skinIndex, skinWeight = src.attributes.skinWeight;
            const { position, normal, tangent } = geometry.attributes;
            normalMatrix.getNormalMatrix(m);
            for (let i = 0; i < count; i++) {
                skin.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                for (let k = 0; k < 4; k++) {
                    const w = skinWeight.getComponent(i, k);
                    if (!w) continue;
                    const b = skinIndex.getComponent(i, k);
                    bone.multiplyMatrices(bones[b].matrixWorld, boneInverses[b]);
                    for (let e = 0; e < 16; e++) skin.elements[e] += bone.elements[e] * w;
                }
                skin.premultiply(mesh.bindMatrixInverse).multiply(mesh.bindMatrix);
                v.fromBufferAttribute(position, i).applyMatrix4(skin).applyMatrix4(m);
                position.setXYZ(i, v.x, v.y, v.z);
                if (normal) {
                    v.fromBufferAttribute(normal, i).transformDirection(skin).applyMatrix3(normalMatrix).normalize();
                    normal.setXYZ(i, v.x, v.y, v.z);
                }
                if (tangent) {
                    v.set(tangent.getX(i), tangent.getY(i), tangent.getZ(i)).transformDirection(skin).transformDirection(m);
                    tangent.setXYZ(i, v.x, v.y, v.z);
                }
            }
        } else {
            geometry.applyMatrix4(m);
        }
        // A mirrored transform flips the triangles' winding; the renderer allows for it per
        // object, so once baked in the triangles have to be turned back.
        if (m.determinant() < 0) {
            for (let i = 0; i < index.length; i += 3) [index[i + 1], index[i + 2]] = [index[i + 2], index[i + 1]];
        }
        geometry.setIndex(index);

        const key = mergeKey(mesh, shown);
        if (!groups.has(key)) groups.set(key, { mesh, shown, geometries: [] });
        groups.get(key).geometries.push(geometry);
    });

    const merged = [];
    for (const { mesh, shown, geometries } of groups.values()) {
        const geometry = geometries.length > 1 ? mergeGeometries(geometries) : geometries[0];
        if (!geometry) return; // Incompatible after all: leave the model as it came
        const out = new THREE.Mesh(geometry, mesh.material);
        out.name = mesh.name;
        out.castShadow = mesh.castShadow; out.receiveShadow = mesh.receiveShadow;
        out.renderOrder = mesh.renderOrder; out.visible = shown;
        out.frustumCulled = mesh.frustumCulled; out.layers.mask = mesh.layers.mask;
        merged.push(out);
    }
    model.clear();
    merged.forEach(out => model.add(out));
}

// Centres a loaded glTF scene and scales it to unit size, ready to be one of the object's detail levels.
// It's centred on its area-weighted centroid, not its bounding box: a boom or panel on one side
// drags the box centre off the craft (Cassini's by 28% of its size), which left spacecraft and
// comets visibly off their orbit lines. Landers keep their base at the origin.
export function buildModelLevel(item, effectiveModel, model) {
    flattenModel(model);
    const wrapper = new THREE.Group();
    wrapper.add(model);

    const box = new THREE.Box3().setFromObject(model);
    const center = getAreaCentroid(model) || box.getCenter(new THREE.Vector3());
    model.position.x = -center.x; model.position.z = -center.z;
    if (item.orbit_type === 'landed') { model.position.y = -box.min.y; }
    else { model.position.y = -center.y; }

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    // At the size the object was built at (a change of scale mode scales its container, not this).
    const targetSize = item.built?.modelSize ?? (item.type === 'mission' ? MISSION_MODEL_SIZE : (item.model_scale || 1.0));
    const finalScale = (1.0 / (maxDim || 1.0)) * targetSize;
    wrapper.scale.set(finalScale, finalScale, finalScale);
    if (item.model_offset) { wrapper.position.set(item.model_offset.x, item.model_offset.y, item.model_offset.z); }

    processModelMeshes(item, model);
    wrapper.userData.detailLevel = true;   // its insides' matrices are left while it's hidden (draw.js)
    return wrapper;
}

// A model's low-detail version: "model_low" if given, else the file beside it named
// "<model>-low.glb" (loading falls back to the full model when there's no such file).
function getLowModelPath(item, effectiveModel) {
    const modelLowPath = (effectiveModel === item.model && item.model_low)
        || (effectiveModel ? effectiveModel.replace('.glb', '-low.glb') : null);
    return modelLowPath && modelLowPath !== effectiveModel ? modelLowPath : null;
}

// New models join the scene at most one per frame, so a busy system like Mars
// spreads its work out instead of stalling a single frame.
const revealQueue = [];

function nextRevealSlot() {
    return new Promise(resolve => revealQueue.push(resolve));
}

export function revealNextModel() {
    if (revealQueue.length === 0) return;
    revealQueue.shift()();
}

// Geometry only uploads to the GPU the first time it's drawn, so a model swapped in
// mid-view would stall that frame. Draw it once off-screen first, into a 1px target
// with a single basic material, so the upload happens before anyone can see it.
const geometryWarmTarget = new THREE.WebGLRenderTarget(1, 1);
const geometryWarmScene = new THREE.Scene();
geometryWarmScene.overrideMaterial = new THREE.MeshBasicMaterial();
const geometryWarmCamera = new THREE.PerspectiveCamera();

function uploadGeometry(object) {
    const culled = [];
    object.traverse(child => {
        if (child.isMesh && child.frustumCulled) { child.frustumCulled = false; culled.push(child); }
    });
    geometryWarmScene.add(object);
    const previousTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(geometryWarmTarget);
    renderer.render(geometryWarmScene, geometryWarmCamera);
    renderer.setRenderTarget(previousTarget);
    geometryWarmScene.remove(object);
    culled.forEach(child => { child.frustumCulled = true; });
}

// Objects that have both detail levels loaded, checked every frame by updateModelDetail.
const detailSwitchables = new Set();
const _detailPos = new THREE.Vector3();
const _detailScale = new THREE.Vector3();

// On-screen diameter of a loaded model in CSS pixels, from its measured world-space size.
export function getModelPixelDiameter(celestialObj) {
    if (!celestialObj.detailRoot || !celestialObj.detailRadius) return 0;
    celestialObj.detailRoot.getWorldPosition(_detailPos);
    celestialObj.detailRoot.getWorldScale(_detailScale);
    const radius = celestialObj.detailRadius * Math.max(_detailScale.x, _detailScale.y, _detailScale.z);
    const distance = camera.position.distanceTo(_detailPos);
    if (distance === 0) return Infinity;
    const fov = camera.fov * (Math.PI / 180);
    return (2 * radius / distance) * window.innerHeight / (2 * Math.tan(fov / 2));
}

export function updateModelDetail() {
    detailSwitchables.forEach(obj => {
        if (!obj.group.visible) return;
        const px = getModelPixelDiameter(obj);
        const showingHigh = obj.highLevel.visible;
        const wantHigh = showingHigh ? px > HIGH_DETAIL_HIDE_PX : px > HIGH_DETAIL_SHOW_PX;
        if (wantHigh !== showingHigh) {
            obj.highLevel.visible = wantHigh;
            obj.lowLevel.visible = !wantHigh;
        }
    });
}

// Every object first gets its low-detail model: a system like Mars preloads all
// its missions at once, and full-detail models there run to ~1M vertices each.
// The full-detail model is loaded later, only for an object the visitor selects or
// that grows on screen, and shown once it's big enough for detail to matter.
async function executeModelLoad(item, isPriority, onDone) {
    const celestialObj = celestialMap.get(item.name);
    const effectiveModel = getEffectiveModel(item);
    if (!celestialObj || !effectiveModel) {
        item.isModelLoaded = true;
        if (onDone) onDone();
        return;
    }

    item.isModelLoading = true;
    const lowPath = getLowModelPath(item, effectiveModel);

    try {
        let gltf;
        let isLowDetail = Boolean(lowPath);
        try {
            gltf = await lazyGltfLoader.loadAsync(fixPath(lowPath || effectiveModel));
        } catch (e) {
            if (!lowPath) throw e;
            // No low-detail file for this model: use the full one.
            isLowDetail = false;
            gltf = await lazyGltfLoader.loadAsync(fixPath(effectiveModel));
        }

        const level = buildModelLevel(item, effectiveModel, gltf.scene);
        await prepareForGPU(level);
        await nextRevealSlot();
        uploadGeometry(level);

        // Holds the low-detail level now and the full-detail one later; updateModelDetail
        // chooses between them by on-screen size.
        const detailRoot = new THREE.Group();
        detailRoot.add(level);

        const visualContainer = celestialObj.mesh;
        for (let i = visualContainer.children.length - 1; i >= 0; i--) {
            const c = visualContainer.children[i];
            if (!c.isLine2 && !c.isLine) {
                visualContainer.remove(c);
            }
        }
        // Measured before parenting, so it's in the model's own units; landers get
        // rescaled when they touch down, so world scale is applied at measure time.
        const detailBox = new THREE.Box3().setFromObject(detailRoot);
        // Radius about the point the camera aims at (the origin on the orbit line, or a lander's
        // mid-height), which is no longer the box centre now models are centred on their centroid.
        const aimY = item.orbit_type === 'landed' ? detailBox.getCenter(new THREE.Vector3()).y : 0;
        celestialObj.detailRadius = Math.max(...[0, 1, 2, 3, 4, 5, 6, 7].map(i => Math.hypot(
            i & 1 ? detailBox.max.x : detailBox.min.x, (i & 2 ? detailBox.max.y : detailBox.min.y) - aimY, i & 4 ? detailBox.max.z : detailBox.min.z)));
        celestialObj.detailCenterY = detailBox.getCenter(new THREE.Vector3()).y;
        celestialObj.frameRadius = computeFrameRadius(detailRoot, detailBox, celestialObj.detailRadius, item.orbit_type === 'landed');
        visualContainer.add(detailRoot);
        celestialObj.detailRoot = detailRoot;
        celestialObj.lowLevel = level;
        item.hasHighDetail = !isLowDetail;
        item.isModelLoaded = true;
        relandLanders(celestialObj); // lands any waiting on it, and seats landed ones on their feet
        if (item.wantsHighDetail) requestHighDetail(item);
    } catch (err) {
        console.warn(`Failed to load model for ${item.name}`, err);
        item.isModelLoaded = true;
    }

    item.isModelLoading = false;
    if (onDone) onDone();
}

export function requestHighDetail(item) {
    if (!item || item.hasHighDetail || item.isHighDetailLoading) return;
    const effectiveModel = getEffectiveModel(item);
    if (!effectiveModel) return;

    const celestialObj = celestialMap.get(item.name);
    if (!celestialObj || !celestialObj.detailRoot) {
        // Base model isn't in yet; upgrade as soon as it is.
        item.wantsHighDetail = true;
        return;
    }

    item.isHighDetailLoading = true;
    lazyGltfLoader.loadAsync(fixPath(effectiveModel))
        .then(gltf => {
            const level = buildModelLevel(item, effectiveModel, gltf.scene);
            return prepareForGPU(level)
                .then(nextRevealSlot)
                .then(() => {
                    uploadGeometry(level);
                    // Ready but hidden: updateModelDetail shows it once it's big enough on screen.
                    level.visible = false;
                    celestialObj.detailRoot.add(level);
                    celestialObj.highLevel = level;
                    detailSwitchables.add(celestialObj);
                    item.hasHighDetail = true;
                    relandLanders(celestialObj); // onto this surface, or on this lander's own feet
                });
        })
        .catch(err => console.warn(`Failed to load full-detail model for ${item.name}`, err))
        .finally(() => { item.isHighDetailLoading = false; });
}

export function preloadSystemModels(systemName) {
    if (!systemName) return;
    celestialMap.forEach(obj => {
        if (getSystemRoot(obj.data.name) === systemName) {
            loadModelForItem(obj.data, false);
        }
    });
}

// Radius to frame a model by. The bounding sphere is dominated by thin booms and panels
// (Cassini's magnetometer, TGO's arrays), which made those craft look small when selected;
// the RMS distance of the vertices from the centre follows where the bulk of the model is.
// Framing on the geometric mean of the two keeps sparse extremities from shrinking a model
// without over-zooming compact ones. Measured in the model's own units.
const FRAME_RADIUS_SAMPLES = 50000;
function computeFrameRadius(root, box, boundingRadius, landed) {
    // Measured about the point the camera aims at: the origin, or a lander's mid-height.
    const center = new THREE.Vector3(0, landed ? box.getCenter(new THREE.Vector3()).y : 0, 0);
    const v = new THREE.Vector3();
    let sum = 0, count = 0;
    root.updateMatrixWorld(true);
    root.traverse(mesh => {
        const pos = mesh.isMesh && mesh.geometry && mesh.geometry.attributes.position;
        if (!pos) return;
        const step = Math.max(1, Math.floor(pos.count / FRAME_RADIUS_SAMPLES));
        for (let i = 0; i < pos.count; i += step) {
            v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
            sum += v.distanceToSquared(center);
            count++;
        }
    });
    if (!count) return boundingRadius;
    const rms = Math.min(Math.sqrt(sum / count), boundingRadius);
    return Math.sqrt(rms * boundingRadius);
}

// Preloaded models (~9MB for Earth's system and Comet 67P, none of it in the opening view) wait
// until the scene is ready too, so on a slow connection they don't share bandwidth with the
// textures the opening view needs. They still arrive while the splash is up.
export const preloadQueue = [];
let preloadsStarted = false;
export function startPreloads() {
    if (preloadsStarted) return;
    preloadsStarted = true;
    preloadQueue.forEach(data => loadModelForItem(data, true));
}
