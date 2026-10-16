// The engine's entry point: createEngine builds it and returns its API (ENGINE.md). Also loading:
// data.json, the warm-up, and the progress, built, ready and error events.
import * as THREE from 'three';
import { engineOptions, prefersReducedMotion } from './config.js';
import { hurryScaleChange, isChangingScale, startScaleChange } from './scale-change.js';
import { BASE_PIXEL_RATIO, animate, createGpuTimer, onFrame, resolution } from './render.js';
import { PINNED_DATE, getDate, setDate, setTimeRate, simulatedDate } from './time.js';
import { SKY_FACES, ktx2Loader, setSceneVisible, startSky } from './sky.js';
import { getSystemRoot } from './orbits.js';
import { SCALE_MODES, applyScales, scaleMode } from './scale.js';
import { attemptToLand, relandLanders } from './landers.js';
import { buildSystem, getStandardizedOrbitColor, rescaleSystem } from './bodies.js';
import { camera, createRenderer, renderer, scene } from './scene.js';
import { celestialMap } from './state.js';
import { collectTextures, warmShadowDepth } from './gpu.js';
import { deselect, flyTo, hurry, initControls, reframe, setFlightPace, setUserControl, setViewInsets, showOverview, selectedObject } from './camera.js';
import { emitEngine, onEngine } from './events.js';
import { loadingManager } from './assets.js';
import { hidingSpheres, isHiddenBy, projectBody } from './projection.js';
import { startPreloads } from './models.js';
import { installDevHook } from './devhook.js';
import { pick } from './picking.js';
import { setOrbitHighlights } from './highlights.js';

// --- LOADING MANAGER ---
// The engine reports loading as "progress" events, 0 to 1.
loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    emitEngine('progress', { progress: itemsLoaded / itemsTotal });
};

// The background texture can finish before data.json has queued the planets,
// so only treat the manager going idle as "ready" once the system is built.
let systemReady = false;
// The bodies that can hide an object from view (isHidden), measured once a frame.
const hiding = { frame: -1, spheres: [] };
loadingManager.onLoad = () => { if (systemReady) warmUpSceneThenReveal(); };

// Planets are frustum-culled until they come into view, so without this their
// textures upload mid-flight. Upload everything while the loader is still up.
let sceneWarmedUp = false;
function warmUpSceneThenReveal() {
    if (sceneWarmedUp) { sceneReady(); return; }
    sceneWarmedUp = true;
    performance.mark('warmup-start'); // read by the performance checks
    const textures = collectTextures(scene);
    if (scene.background && scene.background.isTexture) textures.add(scene.background);
    textures.forEach(texture => {
        try { renderer.initTexture(texture); } catch (e) { console.warn('Texture upload failed', e); }
    });
    const WARM_UP_TIMEOUT_MS = 5000;
    Promise.race([
        Promise.all([renderer.compileAsync(scene, camera), warmShadowDepth(scene)])
            .then(() => performance.mark('warmup-shaders-ready'))
            .catch(e => console.warn('Shader warm-up failed', e)),
        new Promise(resolve => setTimeout(resolve, WARM_UP_TIMEOUT_MS))
    ]).then(sceneReady);
}

// The scene is warmed up and can be shown: start the loads that wait for this, then "ready" (once).
let sceneIsReady = false;
function sceneReady() {
    if (sceneIsReady) return;
    sceneIsReady = true;
    performance.mark('scene-ready'); // read by the performance checks
    loadDeferred();
    emitEngine('ready');
}

// The loads held back until the scene is ready (the sky and preloaded models), which an app can
// start sooner if it shows the scene before then.
export function loadDeferred() {
    startSky();
    startPreloads();
}


// --- ENGINE ---
// Builds the engine round a WebGL renderer drawing into `canvas` (or a canvas of its own, which
// the app puts on the page: engine.canvas), and returns its API (ENGINE.md). Throws where WebGL
// isn't available. engine.start() then loads `dataUrl` and starts drawing, once the app has added
// its listeners. `options` (nightLights, namedAsteroidModels) are in config.js's engineOptions.
export function createEngine({ canvas, dataUrl = './data.json', options = {} } = {}) {
    for (const key of Object.keys(engineOptions)) {
        if (key in options) engineOptions[key] = options[key];
    }
    createRenderer(canvas);
    renderer.setPixelRatio(BASE_PIXEL_RATIO);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; // Efficient PCF shadow filtering for integrated GPUs
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.2;
    // Reading shader logs on a shader's first use blocks until the driver finishes compiling
    // it; measured as the main arrival stall (100-300ms per new model). Keep it in dev only.
    renderer.debug.checkShaderErrors = import.meta.env.DEV;
    resolution.timer = createGpuTimer();
    ktx2Loader.detectSupport(renderer);
    // Fetch the sky's faces now (they download in parallel with everything else); only the
    // transcoding waits.
    SKY_FACES.forEach(face => fetch(`textures/milky_way_${face}.ktx2`).catch(() => {}));
    initControls();

    const engine = {
        canvas: renderer.domElement,
        start() {
            loadSystem(dataUrl);
            animate();
        },
        on: onEngine, onFrame,
        flyTo, showOverview, deselect,
        // Brings in a flight, or a change of scale mode, in a moment.
        hurry() { hurryScaleChange(); hurry(); },
        isChangingScale,
        getDate, setDate, setTimeRate,
        getObject, listObjects,
        // An object's on-screen centre and radius in CSS pixels, or null when it's off-screen.
        projectBody(name) {
            // The renderer refreshes the camera's matrices only when it draws; an app projecting
            // from its onFrame hook needs this frame's camera.
            camera.updateMatrixWorld();
            const p = projectBody(celestialMap.get(name));
            return p && { x: p.cx, y: p.cy, radius: p.bodyR, distance: p.distance };
        },
        // Whether a planet, moon, asteroid or comet stands between the camera and the object.
        // The bodies are measured once a frame, however many objects are asked about.
        isHidden(name) {
            const frame = renderer.info.render.frame;
            if (hiding.frame !== frame) { hiding.frame = frame; hiding.spheres = hidingSpheres(celestialMap.values()); }
            return isHiddenBy(celestialMap.get(name), hiding.spheres);
        },
        // The selected object's data.json entry, or null.
        getSelection() {
            return selectedObject ? selectedObject.userData : null;
        },
        // The simulated date in milliseconds, without making a Date (for per-frame use).
        getTime() {
            return simulatedDate.getTime();
        },
        getSystem: getSystemRoot,
        getOrbitColor(name) {
            return getStandardizedOrbitColor(getObject(name));
        },
        pick, setOrbitHighlights,
        setScaleMode, getScaleMode: () => scaleMode,
        setViewInsets, setFlightPace, setUserControl, setSceneVisible, loadDeferred,
    };
    if (import.meta.env.DEV) installDevHook(engine);
    return engine;
}

// --- LOADING ---
// Fetches data.json and builds the system, then "built" (with every entry, for the app's own use).
// Anything that goes wrong, including in a "built" listener, is reported as "error".
async function loadSystem(dataUrl) {
    try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error(`data.json responded ${res.status}`);
        const entries = await res.json();
        // The credits entry holds the credits page text, not a body to draw.
        const data = entries.filter(item => item.type !== 'credits');
        data.forEach(applyStatusTimeline);
        applyScales(data);
        buildSystem(data);
        attemptToLand(); // landers on plain spheres can land right away
        emitEngine('built', { entries });
        systemReady = true;
        performance.mark('system-ready'); // read by the performance checks

    } catch (e) {
        console.error("Loading System Failed:", e);
        emitEngine('error', { error: e });
    }
}

// Draws everything on another scale mode's rules (SCALE-PLAN.md): 'diagram' or 'true'. Animated
// by default, over SCALE_CHANGE_SECONDS, with the camera held on what it shows (scale-change.js);
// with `animate: false` (or under reduced motion) sizes, orbits and lines are redone at once,
// landers re-seated, and the view cuts to the selection as now drawn. Emits "scale-mode" when the
// new mode is in place. Only once the system is built.
function setScaleMode(mode, { animate = true } = {}) {
    if (!SCALE_MODES.includes(mode)) throw new Error(`Unknown scale mode: ${mode}`);
    if (!systemReady) return;
    if (isChangingScale() || (animate && !prefersReducedMotion.matches)) { startScaleChange(mode); return; }
    if (mode === scaleMode) return;
    const data = listObjects();
    applyScales(data, mode);
    rescaleSystem();
    new Set(data.filter(d => d.orbit_type === 'landed').map(d => d.parent))
        .forEach(name => { const body = celestialMap.get(name); if (body) relandLanders(body); });
    reframe();
    emitEngine('scale-mode', { mode });
}

// Every object's data.json entry, in load order.
export function listObjects() {
    return [...celestialMap.values()].map(obj => obj.data);
}

// Every object's data.json entry by name, or null.
function getObject(name) {
    return celestialMap.get(name)?.data ?? null;
}

// `status_timeline` lets a status change on a known date without editing data.json again:
// [{ "from": "YYYY-MM-DD", "status": "..." }, ...]. The last entry whose date has passed
// (by the visitor's clock) replaces `status`; before the first date, `status` stands.
function applyStatusTimeline(item) {
    if (!Array.isArray(item.status_timeline)) return;
    const today = (PINNED_DATE || new Date()).toISOString().slice(0, 10);
    for (const step of item.status_timeline) {
        if (step.from && step.status && step.from <= today) item.status = step.status;
    }
}
