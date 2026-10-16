// Getting new objects onto the GPU ahead of time: textures uploaded one per frame, shaders compiled
// in parallel, so nothing stalls the frame that first draws them.
import * as THREE from 'three';
import { scene, camera, renderer } from './scene.js';

// --- GPU WARM-UP ---
// The first frame that draws a new texture or material stalls while the texture
// uploads and the shader compiles, which shows as a stutter mid-flight. Do that
// work ahead of time instead: one texture per frame, shaders compiled in parallel.
const textureUploadQueue = [];

export function collectTextures(root, out = new Set()) {
    root.traverse(child => {
        if (!child.material) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach(material => {
            for (const key in material) {
                const value = material[key];
                if (value && value.isTexture) out.add(value);
            }
            if (material.uniforms) {
                Object.values(material.uniforms).forEach(u => { if (u && u.value && u.value.isTexture) out.add(u.value); });
            }
        });
    });
    return out;
}

export function uploadNextTexture() {
    const job = textureUploadQueue.shift();
    if (!job) return;
    try { renderer.initTexture(job.texture); } catch (e) { console.warn('Texture upload failed', e); }
    job.done();
}

// Resolves once the object's textures are on the GPU and its shaders are ready.
export function prepareForGPU(object) {
    const uploads = [...collectTextures(object)].map(texture =>
        new Promise(done => textureUploadQueue.push({ texture, done })));
    return Promise.all(uploads)
        .then(() => Promise.all([renderer.compileAsync(object, camera, scene), warmShadowDepth(object)]))
        .catch(e => console.warn('Shader warm-up failed', e));
}

// --- SHADOW DEPTH SHADERS ---
// compileAsync readies the shaders that draw an object, but not the ones that draw it into a
// shadow map: three.js makes those as the shadow pass first meets the object, and compiling one
// there held up a frame by 25 to 50 ms (at the Moon, at Saturn). So each object's are compiled
// ahead, in parallel, from the depth material the shadow pass will use (WebGLShadowMap's
// getDepthMaterial, mirrored here), drawn into a render target as the shadow pass draws: three.js
// keeps compiled programs by their settings, so the shadow pass then finds them ready. Their
// materials are kept, as a program is let go once nothing uses it.
const SHADOW_SIDE = { [THREE.FrontSide]: THREE.BackSide, [THREE.BackSide]: THREE.FrontSide, [THREE.DoubleSide]: THREE.DoubleSide };
const warmDepthMaterials = new Map();   // settings -> material, kept so their programs stay
let depthTarget = null;
export function warmShadowDepth(root) {
    if (!renderer.shadowMap.enabled || renderer.shadowMap.type === THREE.VSMShadowMap) return Promise.resolve();
    const stand = new THREE.Group();
    root.traverse(object => {
        if (!object.isMesh || !object.castShadow || object.customDepthMaterial || object.isSkinnedMesh || object.isInstancedMesh) return;
        (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => {
            if (!material) return;
            const depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
            depth.side = material.shadowSide ?? SHADOW_SIDE[material.side];
            depth.wireframe = material.wireframe;
            depth.alphaMap = material.alphaMap;
            depth.alphaTest = material.alphaToCoverage === true ? 0.5 : material.alphaTest;
            depth.map = material.map;
            depth.displacementMap = material.displacementMap;
            depth.displacementScale = material.displacementScale;
            depth.displacementBias = material.displacementBias;
            const geometry = object.geometry;
            const key = [depth.side, depth.wireframe, !!depth.alphaMap, depth.alphaTest > 0, !!depth.map, !!depth.displacementMap,
                object.receiveShadow, !!geometry.morphAttributes.position, !!geometry.morphAttributes.normal,
                Object.keys(geometry.attributes).sort().join('+')].join();
            if (warmDepthMaterials.has(key)) return;
            warmDepthMaterials.set(key, depth);
            const mesh = new THREE.Mesh(geometry, depth);
            mesh.receiveShadow = object.receiveShadow;
            mesh.morphTargetInfluences = object.morphTargetInfluences;
            stand.add(mesh);
        });
    });
    if (!stand.children.length) return Promise.resolve();
    depthTarget ??= new THREE.WebGLRenderTarget(1, 1);
    const target = renderer.getRenderTarget();
    renderer.setRenderTarget(depthTarget);
    let ready;
    try { ready = renderer.compileAsync(stand, camera, scene); } finally { renderer.setRenderTarget(target); }
    return ready;
}
