// The Sun: a churning plasma surface, a glowing corona, coronal loops and rays, plus a
// star-like halo so it still reads from across the Solar System. Everything is built at unit
// radius inside a group scaled to the Sun's radius.
import * as THREE from 'three';
import simplex4d from './sun/simplex4d.glsl?raw';
import common from './sun/common.glsl?raw';
import noiseCubeVert from './sun/noise-cube.vert.glsl?raw';
import noiseCubeFrag from './sun/noise-cube.frag.glsl?raw';
import surfaceVert from './sun/surface.vert.glsl?raw';
import surfaceFrag from './sun/surface.frag.glsl?raw';
import billboardVert from './sun/billboard.vert.glsl?raw';
import coronaFrag from './sun/corona.frag.glsl?raw';
import haloFrag from './sun/halo.frag.glsl?raw';
import strandsVert from './sun/strands.vert.glsl?raw';
import strandsFrag from './sun/strands.frag.glsl?raw';

// Look and cost settings. Sizes are in Sun radii.
export const SUN = {
    noise: { resolution: 256, octaves: 5, frequency: 7, speed: 0.12, persistence: 0.8, contrast: 0.25, flatten: 0.72 },
    surface: { layerSpin: 0.015, base: 4, offset: 1, limbPower: 2.5, limbStrength: 1.2, tint: 0.3, brightness: 0.7 },
    corona: { extent: 0.35, tint: 0.46, brightness: 1.06, falloffColor: 0.5, opacity: 1 },
    // hue / hueSpread pick colours on the warm gradient: 0 red-orange, 0.5 orange, 1 golden yellow.
    loops: { count: 500, segments: 24, regions: 7, arch: 0.5, width: 0.012, cycleSpeed: 0.3,
        noiseFrequency: 4, noiseAmplitude: 0.2, opacity: 0.45, hue: 0.1, hueSpread: 0.8 },
    rays: { count: 400, segments: 12, length: 0.2, width: 0.02, cycleSpeed: 0.3,
        noiseFrequency: 8, noiseAmplitude: 0.2, opacity: 0.06, hue: 0.35, hueSpread: 0.5 },
    halo: { extent: 3, minPixels: 22, color: [1.0, 0.78, 0.45], opacity: 0.9 },
    // Loops and rays fade out below this on-screen radius (px), over the range to
    // detailFadePixels, and aren't drawn at all once gone. The surface noise stops evolving
    // below noisePixels (its granulation isn't visible at that size) and resumes where it
    // paused, so crossing that size changes nothing on screen.
    detailPixels: 40,
    detailFadePixels: 80,
    noisePixels: 60,
    // Cube faces redrawn per frame (of 6). The churn is slow, so refreshing the whole cube every
    // few frames looks the same as every frame at a fraction of the cost (the noise is costly on
    // integrated graphics: redrawing all six faces every frame measured ~70ms p95 frames).
    noiseFacesPerFrame: 2,
};

const additive = {
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    premultipliedAlpha: true, // shaders output colour already multiplied by alpha
};

function noClicks(mesh) {
    mesh.raycast = () => {};
    return mesh;
}

// A ring (or, with inner = 0, a disc) of `segments` wedges; z marks inner (0) or outer (1).
function billboardGeometry(segments = 96) {
    const positions = [];
    const indices = [];
    for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        positions.push(Math.cos(a), Math.sin(a), 0, Math.cos(a), Math.sin(a), 1);
        if (i < segments) {
            const k = i * 2;
            indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
        }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    return geometry;
}

function randomUnitVector(rng) {
    const z = rng() * 2 - 1;
    const a = rng() * Math.PI * 2;
    const r = Math.sqrt(1 - z * z);
    return new THREE.Vector3(r * Math.cos(a), z, r * Math.sin(a));
}

// Point near `centre` on the unit sphere, up to `spread` radians away.
function jitterOnSphere(centre, spread, rng) {
    const axis = randomUnitVector(rng).cross(centre).normalize();
    return centre.clone().applyAxisAngle(axis, rng() * spread).normalize();
}

// Deterministic random numbers, so the Sun looks the same on every load.
function makeRng(seed) {
    let s = seed;
    return () => ((s = (s * 16807) % 2147483647) / 2147483647);
}

// Ribbons for loops (two footpoints) or rays (one). Each strand is a strip of quads.
function strandGeometry({ count, segments }, footpoints) {
    const vertsPerStrand = (segments + 1) * 2;
    const strand = new Float32Array(count * vertsPerStrand * 2);
    const footA = new Float32Array(count * vertsPerStrand * 3);
    const footB = new Float32Array(count * vertsPerStrand * 3);
    const seed = new Float32Array(count * vertsPerStrand * 4);
    const indices = [];
    let v = 0;
    for (let s = 0; s < count; s++) {
        const { a, b, random } = footpoints(s);
        const base = v;
        for (let i = 0; i <= segments; i++) {
            for (const side of [-1, 1]) {
                strand.set([i / segments, side], v * 2);
                footA.set([a.x, a.y, a.z], v * 3);
                footB.set([b.x, b.y, b.z], v * 3);
                seed.set(random, v * 4);
                v++;
            }
            if (i < segments) {
                const k = base + i * 2;
                indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
            }
        }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('aStrand', new THREE.BufferAttribute(strand, 2));
    geometry.setAttribute('aFootA', new THREE.BufferAttribute(footA, 3));
    geometry.setAttribute('aFootB', new THREE.BufferAttribute(footB, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
    geometry.setIndex(indices);
    // Positions are made up in the shader; bound everything the strands can reach.
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1.6);
    return geometry;
}

function strandMaterial(settings, rays) {
    return new THREE.ShaderMaterial({
        ...additive,
        defines: rays ? { STRAND_RAYS: '' } : {},
        uniforms: {
            uTime: { value: 0 },
            uCycleSpeed: { value: settings.cycleSpeed },
            uCameraLocal: { value: new THREE.Vector3() },
            uWidth: { value: settings.width },
            uArch: { value: settings.arch ?? 0 },
            uLength: { value: settings.length ?? 0 },
            uNoiseFrequency: { value: settings.noiseFrequency },
            uNoiseAmplitude: { value: settings.noiseAmplitude },
            uOpacity: { value: settings.opacity },
            uHue: { value: settings.hue },
            uHueSpread: { value: settings.hueSpread },
        },
        vertexShader: strandsVert,
        fragmentShader: strandsFrag,
    });
}

export function createSun({ radius, renderer }) {
    const group = new THREE.Group();
    group.scale.setScalar(radius);
    const rng = makeRng(20240613);

    // --- Noise cube: drawn onto the inside of a sphere and captured by a cube camera.
    const noiseTarget = new THREE.WebGLCubeRenderTarget(SUN.noise.resolution, {
        generateMipmaps: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    });
    const noiseCamera = new THREE.CubeCamera(0.1, 10, noiseTarget);
    const noiseScene = new THREE.Scene();
    const noiseMaterial = new THREE.ShaderMaterial({
        side: THREE.BackSide,
        defines: { OCTAVES: SUN.noise.octaves },
        uniforms: {
            uTime: { value: 0 },
            uFrequency: { value: SUN.noise.frequency },
            uSpeed: { value: SUN.noise.speed },
            uPersistence: { value: SUN.noise.persistence },
            uContrast: { value: SUN.noise.contrast },
            uFlatten: { value: SUN.noise.flatten },
        },
        vertexShader: noiseCubeVert,
        fragmentShader: simplex4d + noiseCubeFrag,
    });
    const noiseMesh = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), noiseMaterial);
    noiseScene.add(noiseMesh);

    // --- Surface
    const surface = new THREE.Mesh(
        new THREE.SphereGeometry(1, 128, 64),
        new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uNoise: { value: noiseTarget.texture },
                uLayerSpin: { value: SUN.surface.layerSpin },
                uBase: { value: SUN.surface.base },
                uOffset: { value: SUN.surface.offset },
                uLimbPower: { value: SUN.surface.limbPower },
                uLimbStrength: { value: SUN.surface.limbStrength },
                uTint: { value: SUN.surface.tint },
                uBrightness: { value: SUN.surface.brightness },
            },
            vertexShader: surfaceVert,
            fragmentShader: common + surfaceFrag,
        })
    );
    group.add(surface);

    // --- Corona: from just inside the limb out to 1 + extent radii (world units set per frame).
    const corona = noClicks(new THREE.Mesh(billboardGeometry(), new THREE.ShaderMaterial({
        ...additive,
        uniforms: {
            uInner: { value: 0 }, uOuter: { value: 0 }, uMinPixels: { value: 0 }, uViewportHeight: { value: 1 },
            uTint: { value: SUN.corona.tint },
            uBrightness: { value: SUN.corona.brightness },
            uFalloffColor: { value: SUN.corona.falloffColor },
            uOpacity: { value: SUN.corona.opacity },
        },
        vertexShader: billboardVert,
        fragmentShader: common + coronaFrag,
    })));
    corona.frustumCulled = false;
    group.add(corona);

    // --- Distant halo: a soft disc with a minimum on-screen size.
    const halo = noClicks(new THREE.Mesh(billboardGeometry(64), new THREE.ShaderMaterial({
        ...additive,
        uniforms: {
            uInner: { value: 0 }, uOuter: { value: 0 }, uMinPixels: { value: SUN.halo.minPixels }, uViewportHeight: { value: 1 },
            uColor: { value: new THREE.Color(...SUN.halo.color) },
            uOpacity: { value: SUN.halo.opacity },
        },
        vertexShader: billboardVert,
        fragmentShader: haloFrag,
    })));
    halo.frustumCulled = false;
    group.add(halo);

    // --- Coronal loops: footpoints clustered into active regions, mostly in the mid-latitude
    // bands where real ones form, plus some scattered loops.
    const regions = Array.from({ length: SUN.loops.regions }, () => {
        const lat = (rng() < 0.5 ? 1 : -1) * (0.15 + rng() * 0.45);
        const lon = rng() * Math.PI * 2;
        return new THREE.Vector3(Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
    });
    const loops = noClicks(new THREE.Mesh(strandGeometry(SUN.loops, () => {
        const scattered = rng() < 0.2;
        const centre = scattered ? randomUnitVector(rng) : regions[Math.floor(rng() * regions.length)];
        const a = jitterOnSphere(centre, scattered ? 0.05 : 0.18, rng);
        const b = jitterOnSphere(a, 0.05 + rng() * 0.3, rng);
        return { a, b, random: [rng(), rng(), rng(), rng()] };
    }), strandMaterial(SUN.loops, false)));
    group.add(loops);

    // --- Rays: straight out from footpoints spread over the whole surface.
    const rays = noClicks(new THREE.Mesh(strandGeometry(SUN.rays, () => {
        const a = randomUnitVector(rng);
        return { a, b: a, random: [rng(), rng(), rng(), rng()] };
    }), strandMaterial(SUN.rays, true)));
    group.add(rays);

    const _centre = new THREE.Vector3();
    const _size = new THREE.Vector2();
    const _ndc = new THREE.Vector3();

    // Using a shader before it has finished compiling blocks the page, and the Sun's shaders
    // are big (the noise shader alone measured ~1-2s blocking during loading). So the Sun stays
    // hidden while they compile in the background. Then everything, loops and rays included, is
    // drawn once into a tiny off-screen target, so the graphics driver's own first-draw work
    // happens behind the loading screen rather than when a visitor first flies to the Sun.
    let ready = false;
    // CubeCamera only aims its six face cameras inside its own update(), which drawNoise
    // bypasses to redraw a few faces at a time; without this every face would be drawn facing
    // the same way and the surface would show seams where the faces meet.
    noiseCamera.coordinateSystem = renderer.coordinateSystem;
    noiseCamera.updateCoordinateSystem();
    noiseCamera.updateMatrixWorld();
    let nextFace = 0;
    // The plasma's own clock, which runs only while the cube is being redrawn. Driving the
    // noise from the shared clock instead made the pattern jump, when redrawing resumed, from
    // the moment it paused to the present (a different pattern entirely), a few faces at a time.
    let noiseTime = 0;
    let lastTime = null;
    // Redraws `faces` of the six cube faces, taking turns; all six fills the whole cube.
    function drawNoise(time, faces = SUN.noiseFacesPerFrame) {
        if (!ready) return;
        noiseMaterial.uniforms.uTime.value = time;
        const previousTarget = renderer.getRenderTarget();
        for (let i = 0; i < faces; i++) {
            renderer.setRenderTarget(noiseTarget, nextFace);
            renderer.render(noiseScene, noiseCamera.children[nextFace]);
            nextFace = (nextFace + 1) % 6;
        }
        renderer.setRenderTarget(previousTarget);
    }

    const warmTarget = new THREE.WebGLRenderTarget(4, 4);
    const warmCamera = new THREE.PerspectiveCamera(60, 1, 0.01, 100);
    warmCamera.position.set(0, 0, 3);
    warmCamera.lookAt(0, 0, 0);
    warmCamera.updateMatrixWorld();

    function warmDraw() {
        // Draw the Sun on its own, at unit size, detached from the scene for the moment.
        const parent = group.parent;
        if (parent) parent.remove(group);
        group.scale.setScalar(1);
        group.visible = loops.visible = rays.visible = true;
        for (const strands of [loops, rays]) strands.material.uniforms.uCameraLocal.value.copy(warmCamera.position);
        const previousTarget = renderer.getRenderTarget();
        renderer.setRenderTarget(warmTarget);
        renderer.render(group, warmCamera);
        renderer.setRenderTarget(previousTarget);
        group.scale.setScalar(radius);
        if (parent) parent.add(group);
    }

    group.visible = false;
    Promise.all([
        renderer.compileAsync(noiseMesh, noiseCamera.children[0], noiseScene),
        renderer.compileAsync(group, warmCamera),
    ]).then(() => {
        ready = true;
        drawNoise(0, 6);
        warmDraw();
        warmTarget.dispose();
    });

    // time: shared clock (seconds); strandsTime lets loops and rays freeze under reduced motion.
    function update(time, camera, { strandsTime = time } = {}) {
        group.getWorldPosition(_centre);
        const distance = camera.position.distanceTo(_centre);
        renderer.getSize(_size);
        const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
        const pixelRadius = distance > radius ? (radius / distance) / tanHalf * (_size.y / 2) : Infinity;
        _ndc.copy(_centre).project(camera);
        const onScreen = _ndc.z < 1 && Math.abs(_ndc.x) < 1.5 && Math.abs(_ndc.y) < 1.5;

        surface.material.uniforms.uTime.value = time;
        const dt = lastTime === null ? 0 : Math.max(0, time - lastTime);
        lastTime = time;
        if (onScreen && pixelRadius > SUN.noisePixels) {
            noiseTime += dt;
            drawNoise(noiseTime);
        }

        corona.material.uniforms.uInner.value = radius * 0.98;
        corona.material.uniforms.uOuter.value = radius * (1 + SUN.corona.extent);
        corona.material.uniforms.uViewportHeight.value = _size.y;

        // The halo carries the Sun from afar and gives way to the corona close up.
        halo.material.uniforms.uOuter.value = radius * SUN.halo.extent;
        halo.material.uniforms.uViewportHeight.value = _size.y;
        halo.material.uniforms.uOpacity.value = SUN.halo.opacity * (1 - THREE.MathUtils.smoothstep(pixelRadius, 20, 120));

        const detail = THREE.MathUtils.smoothstep(pixelRadius, SUN.detailPixels, SUN.detailFadePixels);
        loops.visible = rays.visible = detail > 0;
        if (detail > 0) {
            loops.material.uniforms.uOpacity.value = SUN.loops.opacity * detail;
            rays.material.uniforms.uOpacity.value = SUN.rays.opacity * detail;
            for (const strands of [loops, rays]) {
                strands.material.uniforms.uTime.value = strandsTime;
                strands.worldToLocal(strands.material.uniforms.uCameraLocal.value.copy(camera.position));
            }
        }
    }

    return { group, update, noiseMaterial }; // noiseMaterial exposed for dev timing checks
}
