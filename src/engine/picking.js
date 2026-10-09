// What's under a point on the screen: rays tested against only what's on show.
import * as THREE from 'three';
import { scene } from './scene.js';

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
