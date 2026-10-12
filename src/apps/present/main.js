// The presentation: a set path from object to object, stepped through by the presenter with the
// arrow keys or a clicker. It opens on the whole Solar System; each step flies to its target and
// waits there. The steps come from public/presentations/<name>.json (?p=<name>, default "demo").
// A step may set the scale ("scale": "true" or "diagram", SCALE-PLAN.md), which holds for the
// steps after it until another changes it; the presentation's own "scale" sets the opening view's.
import '../../base.css';
import './present.css';
import { createEngine } from '../../engine/index.js';
import { setupMarkers, updateMarkers } from '../../features/markers/markers.js';

const params = new URLSearchParams(location.search);
const name = /^[\w-]+$/.test(params.get('p') ?? '') ? params.get('p') : 'demo';
const presentation = fetch(`./presentations/${name}.json`).then(res => {
    if (!res.ok) throw new Error(`presentations/${name}.json responded ${res.status}`);
    return res.json();
});

const loading = document.getElementById('present-loading');
const loadingText = document.getElementById('present-loading-text');
const bar = document.getElementById('present-bar');
const titleEl = document.getElementById('present-title');
const countEl = document.getElementById('present-count');
const announcer = document.getElementById('present-announcer');

let failed = false;
function showError(message) {
    failed = true;
    loading.hidden = false;
    loading.classList.add('is-error');
    loadingText.textContent = message;
}

let engine;
try {
    engine = createEngine();
} catch (e) {
    showError('This browser or device can’t show 3D graphics (WebGL).');
    throw e;
}
engine.canvas.setAttribute('aria-hidden', 'true'); // the bar and announcer say where we are
document.body.prepend(engine.canvas);
// The presenter drives the camera; the arrow keys are for stepping.
engine.setUserControl(false);
engine.setSceneVisible(false);

let steps = [];
let openingScale = 'diagram';
let current = -1; // -1 is the opening view of the whole Solar System

// In True scale, a dot and a name for everything too small to see.
setupMarkers(engine, document.body);
engine.onFrame(() => updateMarkers({ enabled: engine.getScaleMode() === 'true' }));

// The scale at a step: its own, or the last one set before it.
const SCALES = new Set(['diagram', 'true']);
function scaleAt(index) {
    for (let i = index; i >= 0; i--) if (SCALES.has(steps[i]?.scale)) return steps[i].scale;
    return openingScale;
}
let flying = false;
let ready = false;

engine.on('progress', ({ progress }) => {
    if (!ready && !failed) loadingText.textContent = `Loading the Solar System… ${Math.round(progress * 100)}%`;
});
engine.on('built', () => engine.showOverview({ animate: false }));
engine.on('error', () => showError('The Solar System data didn’t load. Check the connection and reload.'));

Promise.all([presentation, new Promise(resolve => engine.on('ready', resolve))]).then(([data]) => {
    // A step whose target isn't in data.json is left out, so a typo can't stop the show.
    steps = (data.steps ?? []).filter(step => {
        if (engine.getObject(step.target)) return true;
        console.warn(`Presentation step left out: no object called "${step.target}"`);
        return false;
    });
    if (data.title) document.title = `${data.title} · OUniverse`;
    if (SCALES.has(data.scale)) openingScale = data.scale;
    engine.setScaleMode(openingScale);
    ready = true;
    engine.setSceneVisible(true);
    loading.classList.add('is-leaving');
    setTimeout(() => { loading.hidden = true; }, 800); // after its fade (present.css)
    bar.hidden = false;
    showWhere();
}, err => {
    console.warn(err);
    showError(`The presentation “${name}” didn’t load.`);
});

function showWhere() {
    const step = steps[current];
    titleEl.textContent = step ? (step.title ?? step.target) : 'The Solar System';
    countEl.textContent = step ? `${current + 1} of ${steps.length}` : '';
    document.getElementById('present-prev').disabled = current < 0;
    document.getElementById('present-next').disabled = current >= steps.length - 1;
}

async function goTo(index) {
    current = Math.max(-1, Math.min(steps.length - 1, index));
    showWhere();
    announcer.textContent = titleEl.textContent;
    engine.setScaleMode(scaleAt(current));   // a flight asked for next waits for the change
    if (current < 0) {
        flying = false;
        engine.showOverview();
        return;
    }
    flying = true;
    const arrived = await engine.flyTo(steps[current].target);
    if (arrived) flying = false; // otherwise a later step has taken over
}

// Next during a flight lands it first (in under a second) rather than skipping a step.
function next() {
    if (!ready) return;
    if (flying) { engine.hurry(); return; }
    if (current < steps.length - 1) goTo(current + 1);
}
function prev() {
    if (ready && current > -1) goTo(current - 1);
}

const NEXT_KEYS = new Set(['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'n', 'N']);
const PREV_KEYS = new Set(['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace', 'p', 'P']);
window.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
    // Space on a focused button presses it; don't step twice.
    if (e.key === ' ' && e.target instanceof HTMLButtonElement) return;
    if (NEXT_KEYS.has(e.key)) next();
    else if (PREV_KEYS.has(e.key)) prev();
    else if (e.key === 'Home') { if (ready) goTo(-1); }
    else if (e.key === 'End') { if (ready) goTo(steps.length - 1); }
    else return;
    e.preventDefault();
});
document.getElementById('present-next').addEventListener('click', next);
document.getElementById('present-prev').addEventListener('click', prev);

engine.start();
