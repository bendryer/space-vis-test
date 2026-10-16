// An animated change of scale mode (setScaleMode): over SCALE_CHANGE_SECONDS the Solar System
// grows or shrinks from one mode's sizes and distances to the other's while the camera holds on
// what it's showing (camera.js, beginScaleHold). Into True scale the orbits open out first, then
// the bodies and craft take their true sizes; back to Diagram mode the other way round: sizes
// first, then the orbits close in. Sizes and distances go geometrically between the two modes
// (scale.js, units.js), so a change of a hundredfold takes as long as each tenfold of it.
//
// Each frame, before anything is placed: sizes and orbits for the step (applyScales with a mix),
// bodies resized, landers kept on their ground, lines moved (bodies.js, morphLines). At the end the
// new mode is set in full, as an instant change would set it, the landers are landed again, and
// the lines are redrawn in full over the next few frames (settleLines).
// Events: "scale-change" { from, to } when asked, "scale-progress" { progress } each frame, and
// "scale-mode" { mode } at the end. A flight under way is hurried in first; one asked for during
// the change waits for its end.
import { applyScales, scaleMode } from './scale.js';
import { DISTANCE_RULES } from './units.js';
import { auToScene, setCruiseRemap } from './orbits.js';
import { celestialMap } from './state.js';
import { beginLineMorph, endLineMorph, morphLines, rescaleBodies } from './bodies.js';
import { centreSurfaceOn, forgetLanderMeasures, forgetSurfaceRefinement, keepLandersDown, measureLanders, relandLanders } from './landers.js';
import { beginScaleHold, endScaleHold, hurry as hurryFlight, isTracking, isTransitioning, overviewFrameReach, selectedObject, setScaleHoldProgress } from './camera.js';
import { emitEngine } from './events.js';

export const SCALE_CHANGE_SECONDS = 3;
const HURRY_SECONDS = 0.6;
// When each part moves, as shares of a change into True scale (run backwards for the way back).
const ORBITS_SPAN = [0.04, 0.6];
const SIZES_SPAN = [0.42, 0.96];
// The view of the whole system is held on how far out this is drawn (about Neptune's orbit); a
// group framed in it (the asteroids, the comets) on how far out its own orbits are drawn.
const OVERVIEW_REACH_AU = 30;

let change = null;   // { from, to, planned, p, duration, started }

export function isChangingScale() { return change !== null; }

const objectData = () => [...celestialMap.values()].map(obj => obj.data);

// Begins a change to `to`. Asked for the mode it's coming from mid-change, it turns round.
export function startScaleChange(to) {
    if (change) {
        if (to === change.to) return;
        if (!change.started) { change = null; emitEngine('scale-mode', { mode: scaleMode }); return; }
        [change.from, change.to] = [change.to, change.from];
        change.p = 1 - change.p;
        change.duration = SCALE_CHANGE_SECONDS;
        emitEngine('scale-change', { from: change.from, to: change.to });
        return;
    }
    if (to === scaleMode) return;
    change = { from: scaleMode, to, planned: scaleMode, p: 0, duration: SCALE_CHANGE_SECONDS, started: false };
    emitEngine('scale-change', { from: change.from, to });
}

// Finish what's left in HURRY_SECONDS.
export function hurryScaleChange() {
    if (!change?.started) return;
    change.duration = Math.min(change.duration, HURRY_SECONDS / Math.max(1 - change.p, 1e-6));
}

export function stepScaleChange(dt) {
    if (!change) return;
    if (!change.started) {
        if (isTransitioning) { hurryFlight(); return; }   // a flight lands first
        begin();
    }
    change.p = Math.min(1, change.p + dt / change.duration);
    if (change.p >= 1) { finish(); return; }
    setStep(change.p);
}

function begin() {
    change.started = true;
    // Into True scale onto a lander: its ground is made round first (as it will be in True
    // scale), so it doesn't tilt level at the end.
    const shown = selectedObject && isTracking ? celestialMap.get(selectedObject.userData.name) : null;
    if (change.to === 'true' && shown?.data.orbit_type === 'landed') centreSurfaceOn(shown);
    measureLanders();
    beginLineMorph();
    setCruiseRemap(DISTANCE_RULES[change.planned].toAu);
    setStep(0);
    const group = overviewFrameReach() !== null;
    beginScaleHold(() => (group && overviewFrameReach()) || auToScene(OVERVIEW_REACH_AU));
}

function setStep(p) {
    const q = change.to === 'true' ? p : 1 - p;   // how far along a change into True scale
    const along = ([a, b]) => {
        const t = Math.min(Math.max((q - a) / (b - a), 0), 1);
        return t * t * t * (t * (t * 6 - 15) + 10);
    };
    const mix = { orbit: along(ORBITS_SPAN), size: along(SIZES_SPAN) };
    applyScales(objectData(), change.from, mix);
    rescaleBodies();
    keepLandersDown();
    morphLines(mix.orbit);
    setScaleHoldProgress(p);
    emitEngine('scale-progress', { progress: p });
}

function finish() {
    const { to } = change;
    change = null;
    const data = objectData();
    applyScales(data, to);
    rescaleBodies();
    morphLines(to === 'true' ? 1 : 0);
    setCruiseRemap(null);
    endLineMorph();
    forgetLanderMeasures();
    // The ground under the landers was refined at Diagram sizes as the change began: refine it
    // again at True scale's, under the lander on show first (which sets its body's landers down).
    if (to === 'true') {
        forgetSurfaceRefinement();
        const shown = selectedObject && isTracking ? celestialMap.get(selectedObject.userData.name) : null;
        if (shown?.data.orbit_type === 'landed') centreSurfaceOn(shown);
    }
    new Set(data.filter(d => d.orbit_type === 'landed').map(d => d.parent))
        .forEach(name => { const body = celestialMap.get(name); if (body) relandLanders(body); });
    emitEngine('scale-progress', { progress: 1 });
    emitEngine('scale-mode', { mode: to });
    endScaleHold();
}
