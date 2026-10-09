// Dev builds only (createEngine installs it; production builds drop it).
import * as THREE from 'three';
import { BODY_TYPES, controls, flightCurve, getFlightObstacles, isTransitioning, placeCameraAt, selectedObject } from './camera.js';
import { buildModelLevel, flattenModel } from './models.js';
import { camera, isInScene, renderer, scene } from './scene.js';
import { celestialMap } from './state.js';
import { fixPath, lazyGltfLoader } from './assets.js';
import { getEffectiveModel } from './config.js';
import { getSunOcclusion, selectionSpot } from './lighting.js';
import { holdMotionClock, simulatedDate } from './time.js';
import { resolution } from './render.js';
import { sunEffect } from './bodies.js';

// In dev builds, window.__ouniverse: the engine's insides, for automated checks (camera paths,
// lander placement, model orientation) and holdMotion for the smoke test.
export function installDevHook(engine) {
    window.__ouniverse = { camera, controls, scene, celestialMap, BODY_TYPES, isInScene, THREE,
        loadGltf: path => lazyGltfLoader.loadAsync(fixPath(path)), buildModelLevel, getEffectiveModel,
        engine, get isTransitioning() { return isTransitioning; }, get selectedObject() { return selectedObject; },
        get spotIntensity() { return selectionSpot.intensity; }, get flightCurve() { return flightCurve; }, getFlightObstacles, Raycaster: THREE.Raycaster, renderer, get sunEffect() { return sunEffect; }, get simulatedDate() { return simulatedDate; }, getSunOcclusion, resolution, flattenModel,
        // Hold the motion clock (null releases it) and put the camera straight where the held
        // clock says, so it has nothing left to ease.
        holdMotion(time = null) {
            holdMotionClock(time);
            if (time === null) return;
            sunEffect?.setNoiseTime(time);
            // Tumbles add up frame by frame, so how far one has turned depends on how long loading
            // took: set each to a turn that depends only on the held time.
            celestialMap.forEach(obj => {
                if (!obj.tumbleSpeed) return;
                obj.meshGroup.rotation.set(0, 0, (obj.data.tilt || 0) * Math.PI / 180);
                obj.meshGroup.rotateX(obj.tumbleSpeed.x * time);
                obj.meshGroup.rotateY(obj.tumbleSpeed.y * time);
                obj.meshGroup.rotateZ(obj.tumbleSpeed.z * time);
            });
            scene.updateMatrixWorld(true);
            placeCameraAt(time);
        } };
}
