// The frame loop: everything moves, the app's per-frame hooks run, and the scene is drawn, at a
// resolution that steps down where the GPU can't keep up.
import * as THREE from 'three';
import { MAX_MOTION_DT, prefersReducedMotion } from './config.js';
import { advanceMotion, clock, heldMotionTime, motionTime, simulatedDate, timeScale } from './time.js';
import { attemptToLand, pendingLanders } from './landers.js';
import { camera, renderer, scene } from './scene.js';
import { celestialMap } from './state.js';
import { faceParent, getDaysSinceJ2000, getKeplerPosition, getTrajectoryPosition } from './orbits.js';
import { getSuborbitalPosition, sunEffect, updateTrajectoryLines } from './bodies.js';
import { getTumbleSpeed, updateMissionAttitude } from './motion.js';
import { plannedMaterials, revealNextModel, updateModelDetail } from './models.js';
import { updateCamera, updateViewOffset } from './camera.js';
import { updateSelectionSpot, updateSunShadow } from './lighting.js';
import { updateVisibility } from './visibility.js';
import { uploadNextTexture } from './gpu.js';

let animFrameCounter = 0;

const pixelRatio = window.devicePixelRatio;
// Sweet spot for integrated GPUs: 1.25x pixel ratio + Hardware MSAA gives crisp Retina anti-aliasing while keeping fill-rate low
export const BASE_PIXEL_RATIO = Math.min(pixelRatio, 1.25);


// --- ADAPTIVE RESOLUTION ---
// Where the GPU can't draw the scene in time (a low-power laptop, or one driving a 4K screen), draw
// fewer pixels rather than drop frames. Hardware that keeps up never leaves full resolution. The
// scene is timed on the GPU itself where the browser allows (timer queries), so a capped frame
// rate (a battery saver's 30 fps) or a busy CPU isn't mistaken for a slow GPU, and the resolution
// comes back once there's room. Without GPU timing it only steps down, for sustained slow frames.
const RESOLUTION_STEPS = [1, 0.85, 0.72];
const GPU_BUDGET_MS = 13; // median GPU time per frame above which a step down is taken
const GPU_HEADROOM_MS = 9; // the next step up must be predicted to cost less than this
const SLOW_FRAME_MS = 40; // without GPU timing: median frame interval (under 25 fps) to step down
const RESOLUTION_HOLD_MS = 3000; // wait after a change before judging again
export const resolution = {
    step: 0, changedAt: 0, lastFrame: 0, gpu: [], intervals: [],
    timer: null, // GPU timer queries, where the browser has them (createGpuTimer)
};
export function createGpuTimer() {
    const gl = renderer.getContext();
    const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
    return ext ? { gl, ext, pending: [], query: null } : null;
}

function beginFrameTiming(now) {
    // A long gap is a hidden tab or a load stall, not the steady cost of drawing.
    if (resolution.lastFrame && now - resolution.lastFrame < 250) pushSample(resolution.intervals, now - resolution.lastFrame);
    resolution.lastFrame = now;
    const t = resolution.timer;
    if (!t) return;
    const { gl, ext } = t;
    const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);
    while (t.pending.length && gl.getQueryParameter(t.pending[0], gl.QUERY_RESULT_AVAILABLE)) {
        const q = t.pending.shift();
        if (!disjoint) pushSample(resolution.gpu, gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6);
        gl.deleteQuery(q);
    }
    if (t.pending.length < 4) {
        t.query = gl.createQuery();
        gl.beginQuery(ext.TIME_ELAPSED_EXT, t.query);
    }
}

function endFrameTiming(now) {
    const t = resolution.timer;
    if (t && t.query) {
        t.gl.endQuery(t.ext.TIME_ELAPSED_EXT);
        t.pending.push(t.query);
        t.query = null;
    }
    if (now - resolution.changedAt < RESOLUTION_HOLD_MS) return;
    const median = samples => [...samples].sort((a, b) => a - b)[samples.length >> 1];
    let next = resolution.step;
    if (t) {
        if (resolution.gpu.length < 90) return;
        const gpu = median(resolution.gpu);
        const up = resolution.step > 0 ? (RESOLUTION_STEPS[resolution.step - 1] / RESOLUTION_STEPS[resolution.step]) ** 2 : 0;
        if (gpu > GPU_BUDGET_MS && resolution.step < RESOLUTION_STEPS.length - 1) next++;
        else if (up && gpu * up < GPU_HEADROOM_MS) next--;
    } else {
        if (resolution.intervals.length < 90) return;
        if (median(resolution.intervals) > SLOW_FRAME_MS && resolution.step < RESOLUTION_STEPS.length - 1) next++;
    }
    if (next === resolution.step) return;
    resolution.step = next;
    resolution.changedAt = now;
    resolution.gpu.length = 0;
    resolution.intervals.length = 0;
    renderer.setPixelRatio(BASE_PIXEL_RATIO * RESOLUTION_STEPS[next]);
}

function pushSample(samples, value) {
    samples.push(value);
    if (samples.length > 120) samples.shift();
}

const _tempVec1 = new THREE.Vector3();
const _tempVec2 = new THREE.Vector3();
const _axisInverse = new THREE.Quaternion();
const _spin = new THREE.Quaternion();
const _spinAxis = new THREE.Vector3(0, 1, 0);

// Turns a body `angle` radians about its own north pole (its axis, set up in bodies.js).
function spinAboutAxis(obj, angle) {
    obj.meshGroup.quaternion.copy(obj.axis).multiply(_spin.setFromAxisAngle(_spinAxis, angle));
}

// --- ANIMATION LOOP ---
// The app's own work each frame (onFrame), called directly, after the camera and lights have moved
// and just before the scene is drawn.
const frameHooks = [];
export function onFrame(hook) {
    frameHooks.push(hook);
}

export function animate() {
    requestAnimationFrame(animate);
    const realDt = clock.getDelta();
    // Motion uses a clamped step so one slow frame can't make the camera leap;
    // the simulated clock keeps real time.
    const dt = Math.min(realDt, MAX_MOTION_DT);
    advanceMotion(dt);
    // Tumbles turn by the step, not the clock, so a held clock stops them too.
    const turnDt = heldMotionTime === null ? dt : 0;
    const elapsedTime = motionTime;

    uploadNextTexture();
    revealNextModel();

    simulatedDate.setTime(simulatedDate.getTime() + (realDt * timeScale * 1000));

    const days = getDaysSinceJ2000(simulatedDate);

    if (pendingLanders.length > 0) attemptToLand();

    plannedMaterials.forEach(mat => { mat.uniforms.uTime.value = elapsedTime; });

    animFrameCounter++;
    if (animFrameCounter % 10 === 0) {
        updateVisibility();
    }


    celestialMap.forEach(obj => {
        const { group, meshGroup, data } = obj;
        if (data.orbit_type === 'landed') return;

        if (!group.visible && !data.isParent) {
            return;
        }

        let localPos;
        if (data.orbit_type === 'trajectory') {
            const arrived = getTrajectoryPosition(obj, days, group.position);
            updateTrajectoryLines(obj, arrived);
        } else if (data.orbit_type === 'lissajous') {
            const p = celestialMap.get(data.parent);
            if (p) {
                const angle = (days * data.orbit.rate + data.orbit.M0) * (Math.PI / 180);
                const radius = data.orbit.a;
                const y_off = radius * Math.sin(angle);
                const z_off = radius * 2.5 * Math.cos(angle);
                const x_off = radius * 0.5 * Math.sin(2 * angle);
                group.position.set(p.group.position.x + x_off, p.group.position.y + y_off, p.group.position.z + z_off);
            }
        } else if (data.orbit_type === 'suborbital') {
            const p = celestialMap.get(data.parent);
            if (p) {
                const parentRad = p.data.radius || 1;
                const duration = data.suborbital.duration || 0.05;

                let simDays = days;
                if (data.suborbital.progress !== undefined) {
                    simDays = data.suborbital.progress * duration;
                }

                const localPos = getSuborbitalPosition(data.suborbital, parentRad, simDays);
                const futurePos = getSuborbitalPosition(data.suborbital, parentRad, simDays + 0.0001);

                localPos.applyEuler(p.meshGroup.rotation);
                futurePos.applyEuler(p.meshGroup.rotation);

                group.position.set(p.group.position.x + localPos.x, p.group.position.y + localPos.y, p.group.position.z + localPos.z);

                _tempVec1.subVectors(futurePos, localPos).normalize();
                _tempVec2.copy(group.position).add(_tempVec1);
                group.lookAt(_tempVec2);

                meshGroup.rotation.z -= dt * 0.5;
            }
        } else {
            localPos = getKeplerPosition(data.orbit, days);
            if (data.parent && data.parent !== 'Sun') {
                const p = celestialMap.get(data.parent);
                if (p) {
                    group.position.set(p.group.position.x + localPos.x, p.group.position.y + localPos.y, p.group.position.z + localPos.z);
                }
            } else {
                group.position.set(localPos.x, localPos.y, localPos.z);
            }
        }
        if (data.rotation_mode === 'utc') {
            // Turned to the real time of day: longitude 0 faces the Sun at 12:00 UTC. The Sun's
            // direction is taken in the body's own frame, about its tilted axis.
            _tempVec1.copy(group.position).negate().applyQuaternion(_axisInverse.copy(obj.axis).invert());
            const sunAngle = Math.atan2(_tempVec1.x, _tempVec1.z);
            const hours = simulatedDate.getUTCHours();
            const mins = simulatedDate.getUTCMinutes();
            const secs = simulatedDate.getUTCSeconds();
            const ms = simulatedDate.getUTCMilliseconds();
            const timeFraction = (hours + mins / 60 + secs / 3600 + ms / 3600000) / 24.0;
            const timeRotation = (timeFraction - 0.5) * Math.PI * 2;
            spinAboutAxis(obj, (sunAngle - Math.PI / 2) + timeRotation);
        } else if (data.rotation_mode === 'locked' && data.orbit) {
            faceParent(meshGroup, data.orbit, days);
        } else if ((data.type === 'asteroid' || data.type === 'comet') && data.rotation_mode !== 'spin') {
            if (!obj.tumbleSpeed) {
                obj.tumbleSpeed = getTumbleSpeed(data.name, 0.25);
            }
            meshGroup.rotateX(obj.tumbleSpeed.x * turnDt);
            meshGroup.rotateY(obj.tumbleSpeed.y * turnDt);
            meshGroup.rotateZ(obj.tumbleSpeed.z * turnDt);
        } else if (data.rot_period) {
            const theta = (days / data.rot_period) * Math.PI * 2;
            const offset = (data.rot_offset || 0) * (Math.PI / 180);
            spinAboutAxis(obj, theta + offset);
        }
        else if (data.type === 'mission' && data.orbit_type !== 'suborbital') {
            updateMissionAttitude(obj, elapsedTime, turnDt, days);
        }
    });

    // The rest of the frame is skipped when the camera loses its subject (see updateCamera).
    if (!updateCamera(dt, elapsedTime)) return;

    updateModelDetail();
    updateViewOffset(dt);
    updateSunShadow(dt);
    updateSelectionSpot(dt);
    for (const hook of frameHooks) hook(dt);
    // Loops and rays hold still under reduced motion; the surface keeps its slow churn.
    if (sunEffect) sunEffect.update(elapsedTime, camera, { strandsTime: prefersReducedMotion.matches ? 0 : elapsedTime });
    const frameStart = performance.now();
    beginFrameTiming(frameStart);
    renderer.render(scene, camera);
    endFrameTiming(frameStart);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    celestialMap.forEach(obj => {
        if (obj.orbitLine && obj.orbitLine.material.resolution) {
            obj.orbitLine.material.resolution.set(window.innerWidth, window.innerHeight);
        }
    });
});
