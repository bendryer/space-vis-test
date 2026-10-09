// The Milky Way behind everything: loaded once the scene is ready, faded in if it's on show.
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { prefersReducedMotion } from './config.js';
import { renderer, scene } from './scene.js';
import { texLoader } from './assets.js';

// Whether the app is showing the scene (false while a splash covers it): the sky fades in only then.
let sceneVisible = true;
export function setSceneVisible(visible) {
    sceneVisible = visible;
}

// --- SKY ---
// The Milky Way is a cube map of six 2048px UASTC KTX2 faces, baked from the 8K equirect
// JPEG at the same angular resolution. It stays GPU-compressed (BC7/ASTC, ~25MB) where the
// JPEG decoded to ~128MB of raw RGBA. If KTX2 can't load, fall back to the JPEG.
export const SKY_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz']; // three.js cube face order
const SKY_FADE_SECONDS = 1;
export const ktx2Loader = new KTX2Loader().setTranscoderPath('basis/'); // detectSupport in createEngine

function useEquirectSky() {
    const sky = texLoader.load('textures/milky_way.jpg');
    sky.colorSpace = THREE.SRGBColorSpace;
    // Always magnified on screen at 8K, so mipmaps would never be sampled.
    sky.generateMipmaps = false;
    sky.minFilter = THREE.LinearFilter;
    sky.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = sky;
}

// The sky doesn't hold up the loading screen: transcoding the six faces took ~3s after
// everything the opening view needs was ready (~0.8s). It arrives behind the splash almost
// always; if the visitor has already gone in, it fades up rather than popping in.
function showSky(sky) {
    try { renderer.initTexture(sky); } catch (e) { console.warn('Sky upload failed', e); }
    scene.background = sky;
    if (prefersReducedMotion.matches || !sceneVisible) return;
    const start = performance.now();
    scene.backgroundIntensity = 0;
    const fade = () => {
        scene.backgroundIntensity = Math.min(1, (performance.now() - start) / (SKY_FADE_SECONDS * 1000));
        if (scene.backgroundIntensity < 1) requestAnimationFrame(fade);
    };
    requestAnimationFrame(fade);
}

// Transcoding competes with the shader warm-up for the CPU (it slowed the warm-up from 0.1s to
// 0.8s), so it starts once the scene is ready, or as soon as the visitor goes in, whichever is first.
let skyStarted = false;
export function startSky() {
    if (skyStarted) return;
    skyStarted = true;
    Promise.all(SKY_FACES.map(face => ktx2Loader.loadAsync(`textures/milky_way_${face}.ktx2`)))
    .then(faces => {
        const sky = new THREE.CompressedCubeTexture(
            faces.map(t => ({ width: t.image.width, height: t.image.height, mipmaps: t.mipmaps })),
            faces[0].format, faces[0].type);
        sky.colorSpace = THREE.SRGBColorSpace;
        sky.minFilter = THREE.LinearFilter;
        sky.magFilter = THREE.LinearFilter;
        sky.generateMipmaps = false;
        sky.needsUpdate = true;
        showSky(sky);
        performance.mark('sky-ready'); // read by the performance checks
    })
    .catch(err => {
        console.warn('Compressed sky unavailable, using the JPEG', err);
        useEquirectSky();
    });
}
