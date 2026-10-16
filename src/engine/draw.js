// Drawing the scene each frame. In Diagram mode that's one pass, as three.js draws it. True scale
// spans from a craft a few metres across to the orbit of Neptune (SCALE-PLAN.md), more than the
// GPU's float32 positions or a 24-bit depth buffer can hold, so there:
// - the scene is drawn relative to the camera: shifted so the camera sits at the origin, where
//   float32 is finest, then shifted back, so the rest of the engine never sees it;
// - the near plane follows what's nearest (a share of the gap to the nearest surface or craft);
// - the depth range is drawn in slices, far to near, clearing depth between them, each slice
//   within what the depth buffer can resolve (multi-frustum rendering, as Cesium does). The sky goes
//   in the farthest slice only, and shadow maps are drawn once, with the first.
import * as THREE from 'three';
import { camera, renderer, scene } from './scene.js';
import { celestialMap } from './state.js';
import { view } from './scale.js';
import { drawSky } from './sky.js';
import { getVisualRadius } from './camera.js';

const NEAR_SHARE = 0.05;   // the near plane, as a share of the gap to the nearest surface
const NEAR_MIN = 1e-7;     // scene units (0.13 m in True scale)
const SLICE_RATIO = 1e6;   // far / near within one slice (Diagram mode draws 1e7 in one)
const MAX_SLICES = 5;

const _cameraPos = new THREE.Vector3();
const _objPos = new THREE.Vector3();

// --- WORLD MATRICES ---
// three.js brings every object's world matrix up to date before it draws (scene.updateMatrixWorld),
// hidden ones too: most of the 800 to 900 objects in the scene are the meshes inside models'
// detail levels, and most of those are hidden (the level not shown, or a craft too small to draw).
// So it's done here, as three.js does, except inside a detail level (models.js marks them) that is
// hidden or under something hidden: that's marked to be worked out in full when it's next shown.
// Everything else is kept up to date as before, shown or not, as the engine reads the matrices of
// hidden objects (a modelled craft's own mesh is hidden while its model shows). Anything that wants
// a hidden level's insides works them out itself (updateMatrixWorld(true), updateWorldMatrix).
scene.matrixWorldAutoUpdate = false;
const plainUpdate = THREE.Object3D.prototype.updateMatrixWorld;
const shown = [];   // what was brought up to date this frame
function updateShown(object, force, hidden) {
    hidden = hidden || !object.visible;
    if (hidden && object.userData.detailLevel) { object.matrixWorldNeedsUpdate = true; return; }
    if (object.updateMatrixWorld !== plainUpdate) {   // its own rules (a camera): three.js's way, for all of it
        object.updateMatrixWorld(force);
        object.traverse(o => shown.push(o));
        return;
    }
    shown.push(object);
    if (object.matrixAutoUpdate) object.updateMatrix();
    if (object.matrixWorldNeedsUpdate || force) {
        // The scene's own flag is off only to keep three.js from doing all this again: its matrix
        // (which carries True scale's shift to the camera) is always worked out.
        if (object.matrixWorldAutoUpdate === true || object === scene) {
            if (object.parent === null) object.matrixWorld.copy(object.matrix);
            else object.matrixWorld.multiplyMatrices(object.parent.matrixWorld, object.matrix);
        }
        object.matrixWorldNeedsUpdate = false;
        force = true;
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) updateShown(children[i], force, hidden);
}
function updateSceneMatrices() {
    shown.length = 0;
    updateShown(scene, false, false);
}

export function drawScene() {
    if (!view.relative) {
        updateSceneMatrices();
        renderer.render(scene, camera);
        return;
    }
    const near = nearPlane();
    const far = camera.far;
    const slices = THREE.MathUtils.clamp(Math.ceil(Math.log(far / near) / Math.log(SLICE_RATIO)), 1, MAX_SLICES);
    const ratio = Math.pow(far / near, 1 / slices);

    _cameraPos.copy(camera.position);
    scene.position.copy(_cameraPos).negate();
    camera.position.set(0, 0, 0);
    const { autoClear } = renderer;
    const shadowsAuto = renderer.shadowMap.autoUpdate;
    const { background } = scene;   // a colour background clears on every render: first slice only
    updateSceneMatrices();
    for (let i = slices - 1; i >= 0; i--) {
        camera.near = near * Math.pow(ratio, i);
        camera.far = i === slices - 1 ? far : near * Math.pow(ratio, i + 1);
        camera.updateProjectionMatrix();
        if (i < slices - 1) {
            renderer.autoClear = false;
            renderer.clearDepth();
            renderer.shadowMap.autoUpdate = false;
            scene.background = null;
            drawSky(false);
        }
        renderer.render(scene, camera);
    }
    renderer.autoClear = autoClear;
    renderer.shadowMap.autoUpdate = shadowsAuto;
    scene.background = background;
    drawSky(true);

    camera.near = near;
    camera.far = far;
    camera.updateProjectionMatrix();
    camera.position.copy(_cameraPos);
    camera.updateMatrixWorld();
    // Back where the rest of the engine (picking, projections) expects everything. The shift was a
    // translation of the scene alone, so it's added back to each world matrix directly: much
    // cheaper than working them all out again. Only those worked out this frame were shifted (a
    // hidden level's insides weren't).
    scene.position.set(0, 0, 0);
    scene.updateMatrix();
    for (let i = 0; i < shown.length; i++) {
        const e = shown[i].matrixWorld.elements;
        e[12] += _cameraPos.x;
        e[13] += _cameraPos.y;
        e[14] += _cameraPos.z;
    }
}

// A share of the gap between the camera and the nearest surface or craft drawn. Positions come
// from the world matrices as last drawn: a frame old at most, which a share of the gap allows for,
// and far cheaper than working each one out again.
function nearPlane() {
    let gap = Infinity;
    celestialMap.forEach(obj => {
        if (!obj.group.visible) return;
        if (!obj.mesh.visible) obj.mesh.updateWorldMatrix(true, false);   // not kept up to date while hidden
        _objPos.setFromMatrixPosition(obj.mesh.matrixWorld);
        gap = Math.min(gap, camera.position.distanceTo(_objPos) - getVisualRadius(obj));
    });
    return Math.max(NEAR_MIN, NEAR_SHARE * gap);
}
