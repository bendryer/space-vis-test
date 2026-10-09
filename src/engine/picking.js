// What's under a point on the screen: rays tested against only what's on show.
import * as THREE from 'three';
import { scene, camera } from './scene.js';
import { objects } from './state.js';

export const raycaster = new THREE.Raycaster();
export const mouse = new THREE.Vector2();

// Raycaster ignores visibility, so a click would also test every hidden detail level and
// culled mission, up to hundreds of thousands of triangles. Only test what's on screen.
function isShown(object) {
    for (let o = object; o; o = o.parent) {
        if (!o.visible) return false;
        if (o === scene) return true;
    }
    return false; // not attached to the scene, e.g. a lander that hasn't landed yet
}

export function intersectVisible(roots) {
    const hits = [];
    const visit = object => {
        if (!object.visible) return;
        if (object.layers.test(raycaster.layers)) object.raycast(raycaster, hits);
        object.children.forEach(visit);
    };
    roots.forEach(root => { if (isShown(root)) visit(root); });
    return hits.sort((a, b) => a.distance - b.distance);
}

// The object under a point on screen (CSS pixels from the top left), by name, or null when there's
// nothing there. A hit's name is found on its object's container, up to ten levels up.
export function pick(x, y) {
    mouse.x = (x / window.innerWidth) * 2 - 1; mouse.y = -(y / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = intersectVisible(objects);
    if (!hits.length) return null;
    let target = hits[0].object;
    let safeCount = 0;
    while (target && !target.userData.name && safeCount < 10) { target = target.parent; safeCount++; }
    return target && target.userData && target.userData.name ? target.userData.name : null;
}
