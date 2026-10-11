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
const SLICE_RATIO = 1e4;   // far / near within one slice
const MAX_SLICES = 5;

const _cameraPos = new THREE.Vector3();
const _objPos = new THREE.Vector3();

export function drawScene() {
    if (!view.relative) {
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
    // Back where the rest of the engine (picking, projections) expects everything.
    scene.position.set(0, 0, 0);
    scene.updateMatrixWorld();
}

// A share of the gap between the camera and the nearest surface or craft drawn.
function nearPlane() {
    let gap = Infinity;
    celestialMap.forEach(obj => {
        if (!obj.group.visible) return;
        obj.mesh.getWorldPosition(_objPos);
        gap = Math.min(gap, camera.position.distanceTo(_objPos) - getVisualRadius(obj));
    });
    return Math.max(NEAR_MIN, NEAR_SHARE * gap);
}
