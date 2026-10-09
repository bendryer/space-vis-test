// Assets: the shared loaders (textures, glTF with Draco), and the asset path helper.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

export const loadingManager = new THREE.LoadingManager();

export const texLoader = new THREE.TextureLoader(loadingManager);

// LOADERS
const gltfLoader = new GLTFLoader(loadingManager);
const dracoLoader = new DRACOLoader();
// Served from our own public/draco/ (copied from three's examples) rather than a CDN, so
// models still load where third-party hosts are blocked, e.g. on school networks.
dracoLoader.setDecoderPath('draco/');
// No decoder type set, so DRACOLoader uses WebAssembly (several times faster than
// the JS decoder) wherever it's supported and falls back to JS elsewhere.
gltfLoader.setDRACOLoader(dracoLoader);

// Standalone loader for background lazy-loading (non-blocking for startup screen)
export const lazyGltfLoader = new GLTFLoader();
lazyGltfLoader.setDRACOLoader(dracoLoader);

// Planet and moon maps are drawn on spheres a few hundred pixels across at most, so
// anything wider than this is downscaled once on load, before it reaches the GPU.
const MAX_BODY_TEXTURE_WIDTH = 2048;

function capTextureSize(texture) {
    const image = texture.image;
    if (!image || image.width <= MAX_BODY_TEXTURE_WIDTH) return;
    const scale = MAX_BODY_TEXTURE_WIDTH / image.width;
    const canvas = document.createElement('canvas');
    canvas.width = MAX_BODY_TEXTURE_WIDTH;
    canvas.height = Math.round(image.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    texture.image = canvas;
    texture.needsUpdate = true;
}

export function loadBodyTexture(path) {
    return texLoader.load(fixPath(path), capTextureSize);
}

// --- HELPER: PATH SANITIZER ---
export function fixPath(path) {
    if (!path) return null;
    return path.startsWith('/') ? path.slice(1) : path;
}
