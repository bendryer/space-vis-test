// The scene, the camera and the renderer: what every other part of the engine draws with.
import * as THREE from 'three';

// --- SCENE ---
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

export const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000000);
camera.position.set(0, 400, 1200);
camera.lookAt(0, 0, 0);

// --- RENDERER ---
export let renderer;
// Throws where WebGL isn't available.
export function createRenderer() {
    renderer = new THREE.WebGLRenderer({
        antialias: true, // Native hardware MSAA for smooth antialiased edges on models & orbits
        powerPreference: "high-performance"
    });
}
