// The engine's two clocks: the simulated date, which places orbits and turns bodies, and the
// motion clock, which drives the camera's orbit, spacecraft attitude and the Sun's surface.
import * as THREE from 'three';

// --- TIME STATE ---
// Dev builds take ?date=2026-10-08T12:00:00Z to start the clock at a fixed moment and hold it
// there, so the smoke test's screenshots repeat (tools/smoke.mjs). Ignored in production builds.
export const PINNED_DATE = import.meta.env.DEV ? (() => {
    const param = new URLSearchParams(location.search).get('date');
    const date = param ? new Date(param) : null;
    return date && !isNaN(date) ? date : null;
})() : null;
export let timeScale = PINNED_DATE ? 0 : 1; // simulated seconds per real second (setTimeRate)
export let simulatedDate = PINNED_DATE ? new Date(PINNED_DATE) : new Date();
export const clock = new THREE.Clock();

export let motionTime = 0; // Clamped clock for camera motion, so hitches don't cause jumps
// Dev only: the smoke test holds the motion clock at a set time so the camera's orbit, the
// craft and the Sun come to rest in the same place on every run (window.__ouniverse.holdMotion).
export let heldMotionTime = null;
export function advanceMotion(dt) {
    motionTime = heldMotionTime ?? motionTime + dt;
}
export function holdMotionClock(time) {
    heldMotionTime = time;
}

// The simulated clock: a copy of its date, a new date, and how many simulated seconds pass per
// real second (0 stops it).
export function getDate() {
    return new Date(simulatedDate);
}
export function setDate(date) {
    simulatedDate.setTime(new Date(date).getTime());
}
export function setTimeRate(rate) {
    timeScale = rate;
}
