import './style.css';
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { celestialMap, objects } from './engine/state.js';
import { USER_FLIGHT_SCALE, MAX_MOTION_DT, prefersReducedMotion, getEffectiveModel } from './engine/config.js';
import { scene, camera, renderer, createRenderer, isInScene } from './engine/scene.js';
import { getDaysSinceJ2000, applySunScale, faceParent, getKeplerPosition, getTrajectoryPosition, getSystemRoot } from './engine/orbits.js';
import { loadingManager, texLoader, lazyGltfLoader, fixPath } from './engine/assets.js';
import { collectTextures, uploadNextTexture } from './engine/gpu.js';
import { pendingLanders, attemptToLand } from './engine/landers.js';
import { plannedMaterials, flattenModel, buildModelLevel, revealNextModel, updateModelDetail, startPreloads } from './engine/models.js';
import { sunEffect, getStandardizedOrbitColor, getSuborbitalPosition, buildSystem } from './engine/bodies.js';
import { PINNED_DATE, timeScale, simulatedDate, clock, motionTime, heldMotionTime, advanceMotion, holdMotionClock, getDate, setDate, setTimeRate } from './engine/time.js';
import { onEngine, emitEngine } from './engine/events.js';
import { selectedObject, controls, isTransitioning, setViewInsets, updateViewOffset, BODY_TYPES, flightCurve, getFlightObstacles, setFlightPace, hurry, flyTo, setUserControl, deselect, updateCamera, showOverview, placeCameraAt, initControls } from './engine/camera.js';
import { updateVisibility } from './engine/visibility.js';
import { selectionSpot, getSunOcclusion, updateSelectionSpot, updateSunShadow } from './engine/lighting.js';
import { getTumbleSpeed, updateMissionAttitude } from './engine/motion.js';

// --- CONFIGURATION ---
// The details sidebar sits beside the scene (rather than over most of it) from this width up;
// the view is then shifted so selections are centred in the part of the screen still visible.
const SIDEBAR_BESIDE_MIN_WIDTH = 900;
// Below this the phone layout takes over (see PHONE LAYOUT); matches style.css.
const phoneQuery = window.matchMedia('(max-width: 720px)');
const isPhone = () => phoneQuery.matches;
let menuSheetOpen = false;
const CINEMATIC_DELAY = 30000; // 30 Seconds
// The tour's flights drift more slowly than the visitor's (USER_FLIGHT_SCALE in engine/config.js).
const CINEMATIC_FLIGHT_SCALE = 5.0;

// --- STATE ---

// --- CINEMATIC STATE ---
let cinematicActive = false;
let cinematicTimer = null;
let cinematicQueue = [];
let sidebarReturnFocus = null;
let animFrameCounter = 0;


// --- LOADING MANAGER ---
// The splash (#loading-overlay) doubles as the loader: its orbit draws itself as assets
// arrive, and "Start exploring" turns on once the scene is ready. The visitor leaves it.
loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (splashReady || fatalErrorShown) return;
    const progress = itemsLoaded / itemsTotal;
    document.getElementById('loading-overlay')?.style.setProperty('--progress', progress.toFixed(3));
    const loadingText = document.getElementById('loading-text');
    if (loadingText) {
        // Files done isn't ready: the scene still warms up (see warmUpSceneThenReveal).
        loadingText.textContent = progress < 1 ? 'Polishing the planets…' : 'Lining up the orbits…';
    }
};

const SLOW_LOAD_NOTICE_MS = 8000;
let lastInputWasKeyboard = false;
window.addEventListener('keydown', () => { lastInputWasKeyboard = true; }, true);
window.addEventListener('pointerdown', () => { lastInputWasKeyboard = false; }, true);
let splashReady = false;
let splashDismissed = false;
let fatalErrorShown = false;

// The scene is ready: finish the orbit, set the craft moving and offer the way in.
function markSceneReady() {
    if (splashReady || fatalErrorShown) return;
    splashReady = true;
    performance.mark('scene-ready'); // read by the performance checks
    startSky();
    startPreloads();
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (!overlay || splashDismissed) return;
    overlay.style.setProperty('--progress', '1');
    overlay.classList.add('is-ready');
    document.getElementById('loading-note').hidden = true;
    // Said for screen readers; on screen the button's own label says it.
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = 'Ready';
    loadingText.classList.add('visually-hidden');
    const start = document.getElementById('splash-start');
    start.disabled = false;
    start.textContent = 'Start exploring';
    offerFullscreenStart();
    // Keyboard visitors get the button focused; pointer visitors aren't shown a ring on load.
    if (lastInputWasKeyboard && (!document.activeElement || document.activeElement === document.body)) start.focus({ preventScroll: true });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Both copies of the craft (behind and in front of the world) start together.
        overlay.querySelectorAll('.splash-orbit animateMotion').forEach(motion => motion.beginElement?.());
    }
}

// The way in, staged in time with the splash's leaving styles: the copy fades (from 0), the world
// glides to the centre (0.15–1.05 s), turns see-through onto the scene (from OPEN), and the camera
// flies through it (THROUGH to ARRIVE); then the controls fade up.
const SPLASH_OPEN_MS = 1000;
const SPLASH_THROUGH_MS = 1450;
const SPLASH_ARRIVE_MS = 2450;

function dismissSplash({ fromKeyboard = false } = {}) {
    if (splashDismissed || fatalErrorShown) return;
    splashDismissed = true;
    startSky(); // going in early ("Explore now"): don't wait for the scene to be ready
    startPreloads();
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    const ui = document.getElementById('ui-layer');
    overlay.inert = true;
    announce('Showing the whole Solar System');

    const arrive = () => {
        if (fatalErrorShown) return;
        overlay.hidden = true;
        ui.inert = false;
        ui.classList.remove('is-waiting');
        setTimeout(() => showCoach(), 700); // once the controls have faded up
        // Keyboard visitors carry on from the menu's search; pointer visitors go to the scene.
        if (fromKeyboard) document.getElementById('menu-filter')?.focus({ preventScroll: true });
    };
    const art = overlay.querySelector('.splash-orbit');
    if (prefersReducedMotion.matches || !art) { arrive(); return; }

    // The world sits at the centre of the drawing (400,400 in a 680-wide view box), and the hole in
    // the drawing's ground under it has r = 149. The drawing scales until that hole clears the screen.
    const box = art.getBoundingClientRect();
    const w = window.innerWidth, h = window.innerHeight;
    const holeR = box.width * 149 / 680;
    const reach = Math.hypot(w, h) / 2 + 2; // a hole this wide from the centre clears every corner
    overlay.style.setProperty('--to-centre-x', `${(w / 2 - (box.left + box.width / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--to-centre-y', `${(h / 2 - (box.top + box.height / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--fly-scale', (reach / holeR).toFixed(3));

    document.body.classList.add('is-arriving');
    overlay.classList.add('is-leaving');
    setTimeout(() => overlay.classList.add('is-open'), SPLASH_OPEN_MS);
    setTimeout(() => {
        overlay.classList.add('is-through');
        document.body.classList.remove('is-arriving');
    }, SPLASH_THROUGH_MS);
    setTimeout(arrive, SPLASH_ARRIVE_MS);
}

function setLoadingAction(label, handler) {
    const action = document.getElementById('loading-action');
    if (!action) return;
    action.textContent = label;
    action.onclick = handler;
    action.hidden = false;
}

// On a slow connection, say so after a few seconds and let the visitor go in early.
const slowLoadTimer = setTimeout(() => {
    const note = document.getElementById('loading-note');
    if (note) {
        note.textContent = 'This is taking longer than usual. You can go in now; some planets may appear before their surfaces finish loading.';
        note.hidden = false;
    }
    const start = document.getElementById('splash-start');
    if (start) {
        start.disabled = false;
        start.textContent = 'Explore now';
        offerFullscreenStart();
    }
}, SLOW_LOAD_NOTICE_MS);

// Stops the app with a plain explanation and a way to retry, in place of the way in.
function showFatalError(message) {
    fatalErrorShown = true;
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    overlay.setAttribute('role', 'alert');
    overlay.hidden = false;
    overlay.inert = false;
    overlay.classList.remove('is-leaving', 'is-ready');
    overlay.classList.add('is-error');
    const start = document.getElementById('splash-start');
    if (start) start.hidden = true;
    const fullscreenStart = document.getElementById('splash-fullscreen');
    if (fullscreenStart) fullscreenStart.hidden = true;
    const text = document.getElementById('loading-text');
    if (text) text.textContent = 'OUniverse couldn’t start';
    const note = document.getElementById('loading-note');
    if (note) {
        note.textContent = message;
        note.hidden = false;
    }
    setLoadingAction('Try again', () => window.location.reload());
}

// The count comes from data.json, so the splash stays true as content changes. It counts
// spacecraft the OU worked on, so ground facilities (Mars Yard, observatories) are left out.
function fillSplashFacts(items) {
    const count = items.filter(item => item.type === 'mission' && item.ou_involvement
        && !(item.orbit_type === 'landed' && item.parent === 'Earth')).length;
    if (!count) return;
    document.getElementById('splash-count').textContent = count;
    document.getElementById('splash-explore').hidden = false;
}

// --- FULL SCREEN ---
// On a phone the browser's address bar and the system's navigation bar take a good share of the
// screen, so touch devices that allow it get "Start full screen" on the splash, and a Full screen
// switch at the foot of the Explore sheet to go back in after leaving (a back swipe leaves).
// Desktop browsers have their own (F11), and iPhones don't allow it for pages, so neither shows.
const fullscreenSupported = Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled)
    && window.matchMedia('(pointer: coarse)').matches;
const isFullscreen = () => Boolean(document.fullscreenElement || document.webkitFullscreenElement);

function enterFullscreen() {
    const root = document.documentElement;
    try {
        const request = root.requestFullscreen
            ? root.requestFullscreen({ navigationUI: 'hide' })
            : root.webkitRequestFullscreen?.();
        request?.catch?.(() => { /* refused: carry on in the browser window */ });
    } catch { /* refused: carry on in the browser window */ }
}

function exitFullscreen() {
    try {
        const exit = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen?.();
        exit?.catch?.(() => {});
    } catch { /* already out */ }
}

function offerFullscreenStart() {
    const btn = document.getElementById('splash-fullscreen');
    if (btn && fullscreenSupported && !isFullscreen()) btn.hidden = false;
}

function syncFullscreenButtons() {
    const on = isFullscreen();
    const toggle = document.getElementById('menu-fullscreen');
    if (toggle) {
        toggle.setAttribute('aria-pressed', String(on));
        toggle.querySelector('span').textContent = on ? 'Exit full screen' : 'Full screen';
    }
}

(function setupFullscreen() {
    if (!fullscreenSupported) return;
    const toggle = document.getElementById('menu-fullscreen');
    if (toggle) {
        toggle.hidden = false;
        toggle.closest('.menu-foot').hidden = false;
        toggle.addEventListener('click', () => (isFullscreen() ? exitFullscreen() : enterFullscreen()));
    }
    document.addEventListener('fullscreenchange', syncFullscreenButtons);
    document.addEventListener('webkitfullscreenchange', syncFullscreenButtons);
    // Asked for from inside the click, as browsers require, then in we go as usual.
    document.getElementById('splash-fullscreen')?.addEventListener('click', (e) => {
        enterFullscreen();
        dismissSplash({ fromKeyboard: e.detail === 0 });
    });
})();

(function setupSplash() {
    const start = document.getElementById('splash-start');
    start?.addEventListener('click', (e) => dismissSplash({ fromKeyboard: e.detail === 0 }));
    document.getElementById('loading-overlay')?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !start.disabled) dismissSplash({ fromKeyboard: true });
    });
})();

// The background texture can finish before data.json has queued the planets,
// so only treat the manager going idle as "ready" once the system is built.
let systemReady = false;
loadingManager.onLoad = () => { if (systemReady) warmUpSceneThenReveal(); };

// Planets are frustum-culled until they come into view, so without this their
// textures upload mid-flight. Upload everything while the loader is still up.
let sceneWarmedUp = false;
function warmUpSceneThenReveal() {
    if (sceneWarmedUp) { markSceneReady(); return; }
    sceneWarmedUp = true;
    performance.mark('warmup-start'); // read by the performance checks
    const textures = collectTextures(scene);
    if (scene.background && scene.background.isTexture) textures.add(scene.background);
    textures.forEach(texture => {
        try { renderer.initTexture(texture); } catch (e) { console.warn('Texture upload failed', e); }
    });
    const WARM_UP_TIMEOUT_MS = 5000;
    Promise.race([
        renderer.compileAsync(scene, camera)
            .then(() => performance.mark('warmup-shaders-ready'))
            .catch(e => console.warn('Shader warm-up failed', e)),
        new Promise(resolve => setTimeout(resolve, WARM_UP_TIMEOUT_MS))
    ]).then(markSceneReady);
}


const pixelRatio = window.devicePixelRatio;

try {
    createRenderer();
} catch (e) {
    showFatalError('Your browser or device doesn’t support 3D graphics (WebGL), or it’s turned off. Try an up-to-date Chrome, Edge, Firefox or Safari, or check that hardware acceleration is enabled.');
    throw e; // Nothing below can run without a renderer
}

// Sweet spot for integrated GPUs: 1.25x pixel ratio + Hardware MSAA gives crisp Retina anti-aliasing while keeping fill-rate low
const BASE_PIXEL_RATIO = Math.min(pixelRatio, 1.25);
renderer.setPixelRatio(BASE_PIXEL_RATIO);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // Efficient PCF shadow filtering for integrated GPUs
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 1.2;


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
const resolution = {
    step: 0, changedAt: 0, lastFrame: 0, gpu: [], intervals: [],
    timer: (() => {
        const gl = renderer.getContext();
        const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2');
        return ext ? { gl, ext, pending: [], query: null } : null;
    })(),
};

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

// Reading shader logs on a shader's first use blocks until the driver finishes compiling
// it; measured as the main arrival stall (100-300ms per new model). Keep it in dev only.
renderer.debug.checkShaderErrors = import.meta.env.DEV;

renderer.domElement.setAttribute('role', 'application');
renderer.domElement.setAttribute('aria-roledescription', '3D view');
renderer.domElement.setAttribute('aria-label', 'Interactive 3D view of the Solar System. Arrow keys turn the view, plus and minus zoom. The mission list visits each object.');
renderer.domElement.tabIndex = 0;
renderer.domElement.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    showFatalError('The 3D graphics stopped responding, which can happen when a device is low on memory. Reloading usually fixes it.');
});
document.body.appendChild(renderer.domElement);

// --- SKY ---
// The Milky Way is a cube map of six 2048px UASTC KTX2 faces, baked from the 8K equirect
// JPEG at the same angular resolution. It stays GPU-compressed (BC7/ASTC, ~25MB) where the
// JPEG decoded to ~128MB of raw RGBA. If KTX2 can't load, fall back to the JPEG.
const SKY_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz']; // three.js cube face order
const SKY_FADE_SECONDS = 1;
const ktx2Loader = new KTX2Loader().setTranscoderPath('basis/').detectSupport(renderer);

function useEquirectSky() {
    const sky = texLoader.load('textures/milky_way.jpg');
    sky.colorSpace = THREE.SRGBColorSpace;
    // Always magnified on screen at 8K, so mipmaps would never be sampled.
    sky.generateMipmaps = false;
    sky.minFilter = THREE.LinearFilter;
    sky.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = sky;
}

// The sky doesn't hold up the loading screen: transcoding the six faces took ~3s after
// everything the opening view needs was ready (~0.8s). It arrives behind the splash almost
// always; if the visitor has already gone in, it fades up rather than popping in.
function showSky(sky) {
    try { renderer.initTexture(sky); } catch (e) { console.warn('Sky upload failed', e); }
    scene.background = sky;
    const splash = document.getElementById('loading-overlay');
    if (prefersReducedMotion.matches || (splash && !splash.hidden)) return;
    const start = performance.now();
    scene.backgroundIntensity = 0;
    const fade = () => {
        scene.backgroundIntensity = Math.min(1, (performance.now() - start) / (SKY_FADE_SECONDS * 1000));
        if (scene.backgroundIntensity < 1) requestAnimationFrame(fade);
    };
    requestAnimationFrame(fade);
}

// Transcoding competes with the shader warm-up for the CPU (it slowed the warm-up from 0.1s to
// 0.8s), so it starts once the scene is ready, or as soon as the visitor goes in, whichever is first.
let skyStarted = false;
function startSky() {
    if (skyStarted) return;
    skyStarted = true;
    Promise.all(SKY_FACES.map(face => ktx2Loader.loadAsync(`textures/milky_way_${face}.ktx2`)))
    .then(faces => {
        const sky = new THREE.CompressedCubeTexture(
            faces.map(t => ({ width: t.image.width, height: t.image.height, mipmaps: t.mipmaps })),
            faces[0].format, faces[0].type);
        sky.colorSpace = THREE.SRGBColorSpace;
        sky.minFilter = THREE.LinearFilter;
        sky.magFilter = THREE.LinearFilter;
        sky.generateMipmaps = false;
        sky.needsUpdate = true;
        showSky(sky);
        performance.mark('sky-ready'); // read by the performance checks
    })
    .catch(err => {
        console.warn('Compressed sky unavailable, using the JPEG', err);
        useEquirectSky();
    });
}
// Fetch the faces now (they download in parallel with everything else); only the transcoding waits.
SKY_FACES.forEach(face => fetch(`textures/milky_way_${face}.ktx2`).catch(() => {}));

initControls();

// --- GLOBAL VARS ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// --- PRE-ALLOCATED SCRATCHPADS FOR ZERO-ALLOCATION LOOPS ---
const clockElement = document.getElementById('clock');
// "28 Sep 2026, 17:07:19 UTC": the mission-log form, day first, always labelled UTC. Fixed
// three-letter months, since en-GB formatting now writes "Sept".
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const pad2 = n => String(n).padStart(2, '0');
function formatSimulatedTime(d) {
    return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}, `
        + `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}:${pad2(d.getUTCSeconds())} UTC`;
}
let lastSimulatedSeconds = -1;

const _tempVec1 = new THREE.Vector3();
const _tempVec2 = new THREE.Vector3();

let hoveredObj = null;
let hoveredHolder = null; // a menu holder (asteroids, comets) whose row is hovered
let shownHolder = null;   // the holder on show after its row was chosen

// The bodies a holder gathers: its asteroids or comets, not the missions to them.
function holderMembers(holder) {
    return [...celestialMap.values()].filter(obj => holder.holds(obj.data));
}

function updateOrbitLineHighlights() {
    celestialMap.forEach(obj => {
        if (obj.orbitLine && obj.orbitLine.material) {
            const isHovered = hoveredObj === obj
                || Boolean(hoveredHolder && hoveredHolder !== shownHolder && hoveredHolder.holds(obj.data));
            const isSelected = (selectedObject === obj.mesh);
            const isShown = Boolean(shownHolder && shownHolder.holds(obj.data));
            const mat = obj.orbitLine.material;
            const baseColor = obj.orbitLine.userData.baseColor || '#888888';
            const baseOpacity = obj.orbitLine.userData.baseOpacity || 0.35;

            if (isHovered || isSelected) {
                mat.opacity = 0.95;
                mat.color.set('#66EEFA'); // OU light blue
            } else if (isShown) {
                // Informational: lit in the Core blue tint, apart from the light blue of a choice.
                mat.opacity = 0.7;
                mat.color.set('#A6B5F8');
            } else {
                mat.opacity = baseOpacity;
                mat.color.set(baseColor);
            }
        }
    });
}

function setHoveredObject(obj) {
    if (hoveredObj === obj) return;
    if (pendingLanders.length > 0) attemptToLand();
    hoveredObj = obj;
    if (hoveredObj) {
        if (hoveredObj.group) hoveredObj.group.updateMatrixWorld(true);
        if (hoveredObj.mesh) hoveredObj.mesh.updateMatrixWorld(true);
    }
    updateOrbitLineHighlights();
}

function clearHoveredObject() {
    if (hoveredObj) {
        hoveredObj = null;
        updateOrbitLineHighlights();
    }
    // The reticle is hidden by the next frame's updateReticles, not here: choosing an object
    // blurs its row, and the reticle must survive that long enough to swipe out.
}

function setHoveredHolder(holder) {
    if (hoveredHolder === holder) return;
    hoveredHolder = holder;
    updateOrbitLineHighlights();
}

// A holder's row: the same overview as "Solar System", with its bodies' orbits kept lit and each
// body labelled, until something else is chosen.
function showHolder(holder) {
    showSolarSystem();
    shownHolder = holder;
    updateOrbitLineHighlights();
    syncMenuCurrent(holder.name);
    const count = holderMembers(holder).length;
    announce(`Showing ${count} ${holder.spoken || holder.name.toLowerCase()} and their orbits`);
}

function clearShownHolder() {
    if (!shownHolder) return;
    shownHolder = null;
    updateOrbitLineHighlights();
}

// --- RETICLE ---
// An instrument-style callout drawn over the scene while an object is hovered in the menu: a thin
// ring round the body and a leader rising at 45 degrees to a name tab. Once the body is large on
// screen the ring gives way to a light-blue dot pinned to its centre, since a ring fitted to a
// bounding box stops being accurate up close. The mark's centre follows the body exactly; only its
// size eases, so it doesn't twitch as the body's on-screen size changes.
// Choosing the marked object acknowledges it in one stroke: the ring sweeps round into the leader's
// foot, the leader retracts towards the name, and the name wipes away, leaving the approach clear.
// A holder (asteroids, comets) marks every body it holds at once: in the hover style while its row
// is hovered, and while it's on show as ticked rings alone, which fade back while anything is hovered.
const SVG_NS = 'http://www.w3.org/2000/svg';
const RETICLE_MIN_RADIUS = 10;
const RETICLE_GAP = 6; // ring sits this far outside the body's projected edge
const RETICLE_DOT_RADIUS = 4;
const RETICLE_DOT_ENTER = 72; // projected body radius (px) at which the ring becomes a dot...
const RETICLE_DOT_LEAVE = 56; // ...and below which it returns, so the mark doesn't flicker between them
const RETICLE_MORPH_RATE = 18; // ring-to-dot morph speed (1/s); only the size morphs, never the position
const RETICLE_SIZE_RATE = 1; // how quickly the ring's size follows the body's (1/s); lower is more viscous
const LEADER_RISE = 18;
// Leader heights tried, in order, when a group's labels would collide; negative ones drop below.
const LEADER_RISES = [LEADER_RISE, 34, 50, -LEADER_RISE, -34, -50];
const LABEL_PAD = 4; // clear space kept between a group's labels
const RETICLE_EXIT_MS = 700; // matches the chained transitions in style.css
let reticleLayer = null;
let reticle = null; // the hovered object's reticle, the only one that plays the exit
const groupReticles = new Map(); // obj -> reticle, for the members of a hovered or shown holder
let reticleExit = null; // { obj, until } while the chosen object's reticle swipes out
let reticleLastSelected = null;

function svgEl(name, attrs) {
    const el = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
}

// One reticle's elements and eased state. Only the primary normalises its path lengths, which
// its exit animates; a group's ticked ring needs real lengths for its dash pattern.
function createReticle({ primary = false } = {}) {
    const lengths = primary ? { pathLength: '1' } : {};
    const r = {
        obj: null, dot: false, morph: 0, ringR: 0, placement: null, variant: '', tabText: '', tabW: 0, tabH: 0,
        mark: svgEl('path', { class: primary ? 'reticle-mark' : 'reticle-mark reticle--group', ...lengths }),
        leader: svgEl('path', { class: primary ? 'reticle-leader' : 'reticle-leader reticle--group', ...lengths }),
        tab: document.createElement('div'),
    };
    r.tab.className = 'reticle-tab';
    // A group's reticles go beneath the primary, so the one the visitor points at stays on top.
    reticleLayer.insertBefore(r.mark, reticle ? reticle.mark : null);
    reticleLayer.insertBefore(r.leader, reticle ? reticle.mark : null);
    reticleLayer.parentNode.insertBefore(r.tab, reticle ? reticle.tab : null);
    hideReticle(r);
    return r;
}

function setupReticles() {
    const uiLayer = document.getElementById('ui-layer');
    if (!uiLayer || reticleLayer) return;
    reticleLayer = svgEl('svg', { class: 'reticles', 'aria-hidden': 'true', focusable: 'false' });
    const defs = svgEl('defs', {});
    const grad = svgEl('linearGradient', { id: 'reticle-signal', x1: '0', y1: '1', x2: '1', y2: '0' });
    grad.append(svgEl('stop', { offset: '0', 'stop-color': '#7DFFD3' }), svgEl('stop', { offset: '1', 'stop-color': '#66EEFA' }));
    defs.append(grad);
    reticleLayer.append(defs);
    uiLayer.appendChild(reticleLayer);
    reticle = createReticle({ primary: true });
    // Labels are measured once per name; measure again once the web font has arrived.
    document.fonts?.addEventListener('loadingdone', () => {
        [reticle, ...groupReticles.values()].forEach(r => { r.tabW = 0; });
    });
}

function setReticleLeaving(leaving) {
    [reticle.mark, reticle.leader, reticle.tab].forEach(el => el.classList.toggle('is-leaving', leaving));
}

function setReticleVariant(r, variant) {
    if (r.variant === variant) return;
    r.variant = variant;
    [r.mark, r.leader, r.tab].forEach(el => el.classList.toggle('reticle--info', variant === 'info'));
    r.tabW = 0; // the label's size changes with its style
}

function hideReticle(r) {
    if (!r || !r.mark) return;
    r.mark.style.display = 'none';
    r.leader.style.display = 'none';
    r.tab.style.display = 'none';
    r.obj = null;
    r.placement = null;
}

const _sphere = new THREE.Sphere();
const _toLocal = new THREE.Matrix4();
const _worldScale = new THREE.Vector3();
const _bodyCentre = new THREE.Vector3();
const _bodyEdge = new THREE.Vector3();
const _camUp = new THREE.Vector3();

// The body's bounding sphere in its own frame, cached on the object and rebuilt only when its
// geometry changes (a model finishing loading, a detail level arriving). Measured this way the
// sphere turns with the body, so its size and centre never shift as the body or its parent
// rotates, the way a world-aligned bounding box would.
function getLocalBodySphere(obj) {
    const root = obj.mesh;
    let key = '';
    root.traverse(child => { if (child.geometry) key += child.geometry.uuid; });
    if (!key) return null;
    if (obj.reticleSphereKey === key) return obj.reticleSphere;

    root.updateWorldMatrix(true, true);
    _toLocal.copy(root.matrixWorld).invert();
    const sphere = new THREE.Sphere();
    let first = true;
    root.traverse(child => {
        if (!child.geometry) return;
        if (!child.geometry.boundingSphere) child.geometry.computeBoundingSphere();
        _sphere.copy(child.geometry.boundingSphere).applyMatrix4(child.matrixWorld).applyMatrix4(_toLocal);
        if (first) { sphere.copy(_sphere); first = false; } else sphere.union(_sphere);
    });
    obj.reticleSphereKey = key;
    obj.reticleSphere = sphere;
    return sphere;
}

// The body's on-screen centre and radius, or null when it is off-screen or behind us: its
// bounding sphere projected exactly, the radius carried out along the camera's up axis so view
// offsets are respected.
function projectBody(obj) {
    if (!obj || !obj.mesh || !isInScene(obj.group)) return null;
    obj.mesh.updateWorldMatrix(true, false);
    const local = getLocalBodySphere(obj);
    if (!local) return null;
    _bodyCentre.copy(local.center).applyMatrix4(obj.mesh.matrixWorld);
    obj.mesh.getWorldScale(_worldScale);
    const worldR = local.radius * Math.max(_worldScale.x, _worldScale.y, _worldScale.z);
    const inside = camera.position.distanceTo(_bodyCentre) <= worldR;

    _camUp.setFromMatrixColumn(camera.matrixWorld, 1);
    _bodyEdge.copy(_bodyCentre).addScaledVector(_camUp, worldR).project(camera);
    _bodyCentre.project(camera);
    if (_bodyCentre.z > 1) return null; // behind the camera
    const w = window.innerWidth, h = window.innerHeight;
    const cx = (_bodyCentre.x * 0.5 + 0.5) * w;
    const cy = (-_bodyCentre.y * 0.5 + 0.5) * h;
    const ex = (_bodyEdge.x * 0.5 + 0.5) * w;
    const ey = (-_bodyEdge.y * 0.5 + 0.5) * h;
    return { cx, cy, bodyR: inside ? Infinity : Math.hypot(ex - cx, ey - cy), w, h };
}

// The details panel's left edge when it sits beside the scene, else the viewport's right edge.
function sceneRightEdge() {
    const sb = document.getElementById('sidebar');
    const open = sb && sb.classList.contains('active') && isSidebarBesideScene();
    return open ? window.innerWidth - sb.offsetWidth : window.innerWidth;
}

// A full circle starting and ending at the 45-degree point on the leader's side, drawn as four
// quarter arcs. Not two half arcs: a 180-degree arc's centre is ill-defined from its endpoints, so
// rounding made the renderer re-fit it each frame and the ring pulsed along the other diagonal.
function reticleRingPath(cx, cy, r, dir) {
    const sweep = dir > 0 ? 0 : 1; // mirror the winding when the leader flips left
    const start = dir > 0 ? -Math.PI / 4 : -3 * Math.PI / 4;
    const step = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
    const rr = r.toFixed(2);
    const pt = i => `${(cx + r * Math.cos(start + i * step)).toFixed(2)} ${(cy + r * Math.sin(start + i * step)).toFixed(2)}`;
    let d = `M${pt(0)}`;
    for (let i = 1; i <= 4; i++) d += ` A${rr} ${rr} 0 0 ${sweep} ${pt(i)}`;
    return d;
}

// Where the label goes for a leader rising (or, for a negative rise, dropping) to one side: its
// box, and the leader's foot and elbow.
function labelBox(cx, cy, r, dir, rise, tabW, tabH) {
    const sx = cx + dir * r * Math.SQRT1_2, sy = cy - Math.sign(rise) * r * Math.SQRT1_2;
    const ex = sx + dir * (Math.abs(rise) + 12), ey = sy - rise;
    const left = dir > 0 ? ex : ex - tabW;
    return { sx, sy, ex, ey, left, top: ey - tabH / 2, right: left + tabW, bottom: ey + tabH / 2 };
}

function boxesOverlap(a, b) {
    return a.left < b.right + LABEL_PAD && b.left < a.right + LABEL_PAD && a.top < b.bottom + LABEL_PAD && b.top < a.bottom + LABEL_PAD;
}

// Draws one reticle. With `placed` (a group's labels so far) the label takes the first spot that
// clears the others, keeping last frame's spot while it still does, and is left off if none does.
function drawReticle(r, obj, dt, fresh, placed = null) {
    const body = projectBody(obj);
    if (!body) { hideReticle(r); return; }
    const { cx, cy, bodyR, w, h } = body;
    const reduced = prefersReducedMotion.matches;
    const ease = rate => 1 - Math.exp(-rate * (dt || 0.016));

    // The ring's size eases towards the body's so it doesn't twitch as the camera moves; the
    // centre above is never eased.
    const ringTarget = Math.max(RETICLE_MIN_RADIUS, Math.min(bodyR + RETICLE_GAP, Math.min(w, h) * 0.45));
    r.ringR = fresh || reduced ? ringTarget : r.ringR + (ringTarget - r.ringR) * ease(RETICLE_SIZE_RATE);
    const ringR = r.ringR;

    // Ring at range, dot up close, judged on the eased size so the choice can't flicker either:
    // decided outright for a new object, latched while leaving.
    const sizeR = ringR - RETICLE_GAP;
    if (!r.mark.classList.contains('is-leaving')) {
        if (fresh) r.dot = bodyR >= RETICLE_DOT_ENTER;
        else if (!r.dot && sizeR >= RETICLE_DOT_ENTER) r.dot = true;
        else if (r.dot && sizeR < RETICLE_DOT_LEAVE) r.dot = false;
    }
    const target = r.dot ? 1 : 0;
    r.morph = fresh || reduced ? target : r.morph + (target - r.morph) * ease(RETICLE_MORPH_RATE);
    const rad = ringR + (RETICLE_DOT_RADIUS - ringR) * r.morph;
    if (cx + rad < 0 || cx - rad > w || cy + rad < 0 || cy - rad > h) { hideReticle(r); return; }

    r.obj = obj;
    // Informational marks are the ring alone: a shown group only says where its bodies are, and
    // names appear one at a time as the visitor points at them.
    if (r.variant === 'info') {
        r.mark.setAttribute('d', reticleRingPath(cx, cy, rad, 1));
        r.mark.classList.toggle('is-dot', r.morph > 0.5);
        r.mark.style.display = '';
        r.leader.style.display = 'none';
        r.tab.style.display = 'none';
        return;
    }
    const tab = r.tab;
    if (r.tabText !== obj.data.name) { r.tabText = tab.textContent = obj.data.name; r.tabW = 0; }
    tab.style.display = 'block';
    if (!r.tabW) { r.tabW = tab.offsetWidth; r.tabH = tab.offsetHeight; }
    const edge = sceneRightEdge() - 8;

    let spot = null;
    if (!placed) {
        // The leader rises up and to the right; it flips left when the tab would leave the scene.
        const dir = labelBox(cx, cy, rad, 1, LEADER_RISE, r.tabW, r.tabH).right > edge ? -1 : 1;
        spot = { dir, rise: LEADER_RISE };
    } else {
        const fits = s => {
            const box = labelBox(cx, cy, rad, s.dir, s.rise, r.tabW, r.tabH);
            return box.left >= 8 && box.right <= edge && box.top >= 8 && box.bottom <= h - 8
                && !placed.some(p => boxesOverlap(box, p));
        };
        if (r.placement && fits(r.placement)) spot = r.placement;
        else {
            for (const rise of LEADER_RISES) {
                spot = [{ dir: 1, rise }, { dir: -1, rise }].find(fits) || null;
                if (spot) break;
            }
        }
        r.placement = spot;
    }

    const dir = spot ? spot.dir : 1;
    r.mark.setAttribute('d', reticleRingPath(cx, cy, rad, dir));
    r.mark.classList.toggle('is-dot', r.morph > 0.5);
    r.mark.style.display = '';
    if (!spot) {
        r.leader.style.display = 'none';
        tab.style.display = 'none';
        return;
    }
    const box = labelBox(cx, cy, rad, dir, spot.rise, r.tabW, r.tabH);
    if (placed) placed.push(box);
    r.leader.setAttribute('d', `M${box.sx.toFixed(2)} ${box.sy.toFixed(2)} l${(dir * Math.abs(spot.rise)).toFixed(2)} ${(-spot.rise).toFixed(2)} H${box.ex.toFixed(2)}`);
    r.leader.style.display = '';
    tab.classList.toggle('is-flipped', dir < 0);
    tab.style.left = `${box.left.toFixed(1)}px`;
    tab.style.top = `${box.top.toFixed(1)}px`;
}

// The members of a hovered holder (hover style) and of the holder on show (informational),
// minus the object the primary reticle is marking.
function updateGroupReticles(dt, exclude) {
    const wanted = new Map();
    if (shownHolder) holderMembers(shownHolder).forEach(obj => wanted.set(obj, 'info'));
    if (hoveredHolder && hoveredHolder !== shownHolder) holderMembers(hoveredHolder).forEach(obj => wanted.set(obj, 'hover'));
    if (exclude) wanted.delete(exclude);

    groupReticles.forEach((r, obj) => { if (!wanted.has(obj)) hideReticle(r); });
    const placed = [];
    wanted.forEach((variant, obj) => {
        let r = groupReticles.get(obj);
        if (!r) { r = createReticle(); groupReticles.set(obj, r); }
        setReticleVariant(r, variant);
        drawReticle(r, obj, dt, r.obj !== obj, placed);
    });
}

function updateReticles(dt = 0.016) {
    if (!reticleLayer) return;
    // The renderer refreshes the camera's matrices only when it draws, so do it now; otherwise the
    // mark is projected through last frame's camera and trails the body whenever the view moves.
    camera.updateMatrixWorld();
    const selected = selectedObject && selectedObject.userData ? celestialMap.get(selectedObject.userData.name) : null;

    // Choosing the object the reticle marks: acknowledge it, then clear the view.
    if (selected !== reticleLastSelected) {
        reticleLastSelected = selected;
        if (selected && reticle.obj === selected) {
            reticleExit = { obj: selected, until: performance.now() + (prefersReducedMotion.matches ? 0 : RETICLE_EXIT_MS) };
            setReticleLeaving(true);
        }
    }
    if (reticleExit && performance.now() >= reticleExit.until) {
        reticleExit = null;
        hideReticle(reticle);
        setReticleLeaving(false);
    }

    // Hover marks anything but the object already on show.
    const hovered = reticleExit ? reticleExit.obj : (hoveredObj && hoveredObj !== selected ? hoveredObj : null);
    updateGroupReticles(dt, hovered);
    // A shown group's rings step back while anything is pointed at, so the hover stands out.
    reticleLayer.classList.toggle('is-pointing', Boolean(hovered || (hoveredHolder && hoveredHolder !== shownHolder)));
    if (!hovered) { hideReticle(reticle); return; }
    drawReticle(reticle, hovered, dt, !reticleExit && reticle.obj !== hovered);
}

// Shows the cruise line in transit and the arrival orbit once there, keeping the one shown as
// the craft's orbit line (which hover and selection light up).
function updateTrajectoryLines(obj, arrived) {
    const lines = obj.trajectoryLines;
    if (!lines) return;
    const shown = arrived ? lines.arrived : lines.cruise;
    if (lines.cruise) lines.cruise.visible = !arrived;
    if (lines.arrived) lines.arrived.visible = arrived;
    if (shown && obj.orbitLine !== shown) {
        obj.orbitLine = shown;
        emitEngine('orbit-change', { data: obj.data });
    }
}

// --- LOADING ---
async function loadSystem() {
    try {
        const res = await fetch('./data.json'); // FIX: Relative path
        if (!res.ok) throw new Error(`data.json responded ${res.status}`);
        const entries = await res.json();
        // The credits entry holds the credits page text, not a body to draw.
        const credits = entries.find(item => item.type === 'credits');
        const data = entries.filter(item => item.type !== 'credits');
        data.forEach(applyStatusTimeline);
        data.forEach(applySunScale);
        fillSplashFacts(data);
        buildSystem(data);

        setupReticles();
        populateMenu();
        setupCinematicControls();
        setupCredits(credits);
        attemptToLand(); // landers on plain spheres can land right away
        showSolarSystem({ animate: false }); // open on the whole Solar System
        systemReady = true;
        performance.mark('system-ready'); // read by the performance checks

    } catch (e) {
        console.error("Loading System Failed:", e);
        showFatalError(navigator.onLine === false
            ? 'You appear to be offline. Reconnect to the internet, then try again.'
            : 'The Solar System data didn’t load. Check your connection and try again.');
    }
}

function isSidebarBesideScene() {
    return window.innerWidth >= SIDEBAR_BESIDE_MIN_WIDTH;
}

// --- UI ---
// Menu icons: Tabler Icons outline set (https://tabler.io/icons, MIT, v3.48), inlined so they
// inherit the text colour and need no request. "asteroid" is drawn on the same 24px grid and
// stroke, since Tabler has none. A data.json entry can pick one with an "icon" field.
const MENU_ICONS = {
    galaxy: '<path d="M12 3c-1.333 1 -2 2.5 -2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2 -.667 3.5 -2 4.5"/><path d="M19.794 16.5c-.2 -1.655 -1.165 -2.982 -2.897 -3.982c-2.597 -1.5 -4.897 -.518 -4.897 -.518s-2.299 .982 -4.897 -.518c-1.732 -1 -2.698 -2.327 -2.897 -3.982"/><path d="M19.794 7.5c-1.532 -.655 -3.165 -.482 -4.897 .518c-2.597 1.5 -2.897 3.982 -2.897 3.982s-.299 2.482 -2.897 3.982c-1.732 1 -3.365 1.173 -4.897 .518"/>',
    sun: '<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>',
    planet: '<path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"/><path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>',
    moon: '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>',
    point: '<path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/><path d="M12 2l0 2"/><path d="M12 20l0 2"/><path d="M20 12l2 0"/><path d="M2 12l2 0"/>',
    comet: '<path d="M21 3l-5 9h5l-6.891 7.086a6.5 6.5 0 1 1 -8.855 -9.506l7.746 -6.58l-1 5l9 -5"/><path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/>',
    asteroid: '<path d="M8 4.6c2.6 -1.5 6 -1.2 8.6 .5c2.8 1.8 4.5 4.8 4 7.9c-.5 3.3 -3 5.8 -6.3 6.6c-2.4 .6 -4.3 1.8 -6.9 1.1c-2.9 -.8 -4.2 -3.5 -3.9 -6.3c.2 -2 1.1 -3.3 1.6 -5.2c.5 -2 1.4 -3.4 2.9 -4.6z"/><path d="M8.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M13.5 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
    satellite: '<path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414"/><path d="M6 10l-3 3l3 3l3 -3"/><path d="M10 6l3 -3l3 3l-3 3"/><path d="M12 12l1.5 1.5"/><path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5"/><path d="M15 21a6 6 0 0 0 6 -6"/>',
    // Drawn to match Tabler's grid and stroke: Tabler has no lander or planetary rover.
    lander: '<path d="M8 13l1 -5h6l1 5z"/><path d="M12 8v-2"/><path d="M9.5 4a2.5 2.5 0 0 0 5 0"/><path d="M8 13l-3.5 6"/><path d="M16 13l3.5 6"/><path d="M2.5 19h4"/><path d="M17.5 19h4"/>',
    rover: '<path d="M4 11a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"/><path d="M7 10v-4"/><path d="M5.5 5h3"/><path d="M20 12l2 -2"/><path d="M5 14v2"/><path d="M12 14v2"/><path d="M19 14v2"/><path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>',
    rocket: '<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
    facility: '<path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"/><path d="M13 7l0 .01"/><path d="M17 7l0 .01"/><path d="M17 11l0 .01"/><path d="M17 15l0 .01"/>',
};

function menuIconName(data) {
    if (MENU_ICONS[data.icon]) return data.icon;
    switch (data.type) {
        case 'star': return 'sun';
        case 'planet': return 'planet';
        case 'moon': return 'moon';
        case 'reference_point': return 'point';
        case 'comet': return 'comet';
        case 'asteroid': return 'asteroid';
    }
    if (data.orbit_type === 'suborbital') return 'rocket';
    // A rover says so with "icon": "rover"; other landers get the lander icon.
    if (data.orbit_type === 'landed') return data.parent === 'Earth' ? 'facility' : 'lander';
    return 'satellite';
}

// The Sun, planets and asteroids take the colour of their orbit line, so the menu and the
// scene share one key. Everything else stays in the text colour.
function menuIconColor(data) {
    if (data.type === 'star') return data.color || '#ffcc00';
    if (data.type === 'planet' || data.type === 'asteroid') return getStandardizedOrbitColor(data);
    return null;
}

function menuIcon(name, color = null) {
    const tint = color ? ` menu-icon--tinted" style="color:${color}` : '';
    return `<svg class="menu-icon${tint}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${MENU_ICONS[name]}</svg>`;
}

// Holders gather small bodies (and their missions) into one foldable group by type: the
// asteroids (near-Earth and main-belt) after Mars, and the comets beside them. A holder's row
// shows the overview with its bodies marked; its missions stay in the list but aren't marked.
// Where an object sits otherwise comes from data.json: under its "menu_parent" if it has one
// (JUICE under Jupiter, Spitzer under Earth; "Sun" nests it in the Sun's own group), else its
// parent, ordered by "menu_order" if given, else by orbit size.
// Asteroids come in two kinds: the ones spacecraft have gone to (Bennu, Ryugu, Didymos), and the
// ones named in honour of the OU and its scientists ("menu_holder": "named" in data.json).
// `spoken` is the phrase read out when a group is shown; `search` adds words a search should find it by.
const MENU_HOLDERS = [
    { name: 'Mission asteroids', spoken: 'mission asteroids', search: 'asteroids explored visited targets', icon: 'asteroid', after: 'Mars',
        holds: data => data.type === 'asteroid' && data.menu_holder !== 'named' },
    { name: 'Honorary asteroids', spoken: 'honorary asteroids, named in honour of OU people,', search: 'asteroids named honour', icon: 'asteroid', after: 'Mission asteroids',
        holds: data => data.type === 'asteroid' && data.menu_holder === 'named' },
    { name: 'Comets', spoken: 'comets', icon: 'comet', after: 'Honorary asteroids', holds: data => data.type === 'comet' },
];

function populateMenu() {
    const list = document.getElementById('mission-list');
    if (!list) return;
    list.innerHTML = '';

    // Build a map of parent -> children. An object marked "menu_top_level" (the Moon, with its
    // many missions) leaves its parent's group for a group of its own at the top level, placed
    // just after its parent and indented a step to show it belongs there.
    const childrenMap = new Map();
    const lifted = [];
    celestialMap.forEach(obj => {
        if (obj.data.menu_top_level && obj.data.parent) { lifted.push(obj); return; }
        const parent = obj.data.menu_parent || obj.data.parent || 'root';

        if (!childrenMap.has(parent)) childrenMap.set(parent, []);
        childrenMap.get(parent).push(obj);
    });

    // Sort children: missions first, alphabetically, then natural bodies by "menu_order" or orbit
    // size (then type), so a planet's own missions lead and its moons follow, as Earth's Moon does.
    const sortKey = data => data.menu_order ?? (data.orbit ? (data.orbit.a || 0) : 0);
    const isMission = data => data.type === 'mission';
    childrenMap.forEach(arr => {
        arr.sort((a, b) => {
            if (isMission(a.data) !== isMission(b.data)) return isMission(a.data) ? -1 : 1;
            if (isMission(a.data)) return a.data.name.localeCompare(b.data.name, undefined, { numeric: true, sensitivity: 'base' });
            const distA = sortKey(a.data);
            const distB = sortKey(b.data);
            if (distA !== distB) return distA - distB;

            const typeScore = (t) => {
                if (t === 'star') return 0;
                if (t === 'planet') return 1;
                if (t === 'moon') return 2;
                if (t === 'reference_point') return 3;
                return 4; // missions
            };
            return typeScore(a.data.type) - typeScore(b.data.type);
        });
    });

    // Each object is a list item holding its row; objects with children nest a list, so
    // screen readers hear the hierarchy as list levels. Children of the Sun that have
    // children of their own (planets, L1/L2, comets and asteroids with missions) are groups:
    // their heading sticks while you scroll and a disclosure button folds them away.
    let groupCount = 0;
    // `indent` shifts a lifted group, and everything in it, a step in from its level.
    function renderNode(obj, depth, parentList, { leaf = false, indent = 0 } = {}) {
        if (!obj || !obj.data) return;
        const name = obj.data.name;
        const children = leaf ? [] : (childrenMap.get(name) || []);
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.dataset.name = name;
        const btn = createMenuRow(obj);
        btn.style.setProperty('--depth', Math.max(0, depth - 1) + indent);
        let ul = null;
        if (children.length) {
            ul = document.createElement('ul');
            ul.className = 'menu-list';
        }

        if (depth === 1 && ul) {
            makeGroup(li, ul, name, countDescendants(name), btn);
        } else {
            li.appendChild(btn);
        }

        if (ul) {
            children.forEach(child => renderNode(child, depth + 1, ul, { indent }));
            li.appendChild(ul);
        }
        parentList.appendChild(li);
    }

    function countDescendants(name) {
        return (childrenMap.get(name) || []).reduce((n, child) => n + 1 + countDescendants(child.data.name), 0);
    }

    // A group's heading: its own row (to fly there, or for a holder to show its bodies) beside a
    // disclosure button that folds the group.
    function makeGroup(li, ul, label, count, row) {
        ul.id = `menu-group-${groupCount++}`;
        ul.hidden = true;
        li.classList.add('menu-group');
        const head = document.createElement('div');
        head.className = 'menu-group-head';
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'menu-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', ul.id);
        toggle.setAttribute('aria-label', `${label}: ${count} ${count === 1 ? 'object' : 'objects'}`);
        toggle.title = `Show or hide what's at ${label}`;
        toggle.innerHTML = `<span class="menu-chip"><span class="menu-count" aria-hidden="true">${count}</span>${uiIcon('chevron', 'menu-chevron')}</span>`;
        toggle.onclick = () => {
            if (autoOpenedGroup === li) autoOpenedGroup = null; // the visitor's choice now
            setGroupExpanded(li, toggle.getAttribute('aria-expanded') !== 'true', { animate: true });
        };
        toggle.onmouseenter = toggle.onfocus = () => clearHoveredObject();
        head.append(row, toggle);
        li.appendChild(head);
    }

    function renderHolder(holder, members, parentList) {
        const li = document.createElement('li');
        li.className = 'menu-item menu-group--holder';
        li.dataset.name = holder.name;
        if (holder.search) li.dataset.search = `${holder.name} ${holder.search}`;
        const ul = document.createElement('ul');
        ul.className = 'menu-list';
        const count = members.reduce((n, obj) => n + 1 + countDescendants(obj.data.name), 0);
        makeGroup(li, ul, holder.name, count, createHolderRow(holder));
        members.forEach(obj => renderNode(obj, 2, ul));
        li.appendChild(ul);
        parentList.appendChild(li);
    }

    // The Sun heads the list, then everything that orbits it at the same level.
    const tree = document.createElement('ul');
    tree.className = 'menu-list menu-tree';
    const rootItems = childrenMap.get('root') || [];
    const roots = rootItems.length ? rootItems
        : [...celestialMap.values()].filter(obj => !obj.data.parent || !celestialMap.has(obj.data.parent));
    roots.forEach(root => {
        // Most of what orbits the Sun sits beside it at the top level; a few objects nest
        // under the Sun's own row, and asteroids and comets gather into holders.
        const orbiting = childrenMap.get(root.data.name) || [];
        const own = orbiting.filter(obj => obj.data.menu_parent === root.data.name);
        let entries = orbiting.filter(obj => !own.includes(obj)).map(obj => ({ obj }));
        MENU_HOLDERS.forEach(holder => {
            const members = entries.filter(e => e.obj && holder.holds(e.obj.data)).map(e => e.obj);
            if (!members.length) return;
            entries = entries.filter(e => !e.obj || !members.includes(e.obj));
            const after = entries.findIndex(e => (e.obj ? e.obj.data.name : e.holder.name) === holder.after);
            entries.splice(after === -1 ? entries.length : after + 1, 0, { holder, members });
        });

        // Lifted groups follow the top-level entry they belong under, nearest first (Earth, then
        // the Moon, L1 and L2).
        [...lifted].sort((a, b) => sortKey(a.data) - sortKey(b.data)).forEach(obj => {
            const system = getSystemRoot(obj.data.name);
            let at = entries.findIndex(e => e.obj && e.obj.data.name === system);
            if (at === -1) { entries.push({ obj, indent: 1 }); return; }
            while (entries[at + 1] && entries[at + 1].indent && getSystemRoot(entries[at + 1].obj.data.name) === system) at++;
            entries.splice(at + 1, 0, { obj, indent: 1 });
        });

        childrenMap.set(root.data.name, own);
        renderNode(root, own.length ? 1 : 0, tree, { leaf: !own.length });
        entries.forEach(e => (e.holder ? renderHolder(e.holder, e.members, tree) : renderNode(e.obj, 1, tree, { indent: e.indent || 0 })));
    });
    list.appendChild(tree);

    const empty = document.createElement('p');
    empty.id = 'menu-empty';
    empty.className = 'menu-empty';
    empty.hidden = true;
    list.appendChild(empty);

    setupMenuFilter();
    const systemBtn = document.getElementById('system-btn');
    systemBtn.onclick = () => showSolarSystem();
    systemBtn.onmouseenter = systemBtn.onfocus = () => clearHoveredObject();
}

// Interface icons (Tabler outline, MIT), drawn like the menu icons.
const UI_ICONS = {
    chevron: '<path d="M6 9l6 6l6 -6"/>',
    search: '<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
    movie: '<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M8 4v16"/><path d="M16 4v16"/><path d="M4 8h4"/><path d="M4 16h4"/><path d="M4 12h16"/><path d="M16 8h4"/><path d="M16 16h4"/>',
    stop: '<path d="M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/>',
    help: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17v.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
};

function uiIcon(name, className) {
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${UI_ICONS[name]}</svg>`;
}

// A holder's row: hovering marks its bodies, choosing it shows them all in the overview.
function createHolderRow(holder) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mission-btn';
    btn.innerHTML = `${menuIcon(holder.icon)}<span class="menu-label">${holder.name}</span>`;
    btn.onclick = () => {
        stopCinematicMode();
        showHolder(holder);
    };
    btn.onmouseenter = btn.onfocus = () => setHoveredHolder(holder);
    btn.onmouseleave = btn.onblur = () => setHoveredHolder(null);
    return btn;
}

// One selectable row: icon and name. A mission's status is shown in the details panel, not here.
function createMenuRow(obj) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mission-btn';
    if (obj.data.type === 'mission') btn.classList.add('mission-btn--mission');
    btn.innerHTML = `${menuIcon(menuIconName(obj.data), menuIconColor(obj.data))}<span class="menu-label">${obj.data.name}</span>`;

    btn.onclick = () => {
        stopCinematicMode();
        selectObject(obj.data.name, { returnFocusTo: btn });
    };
    btn.onmouseenter = btn.onfocus = () => setHoveredObject(obj);
    btn.onmouseleave = btn.onblur = () => clearHoveredObject();
    return btn;
}

// --- MENU STATE: groups, filter, current object ---
// Groups the visitor opened; a search opens groups too, but only for as long as it runs.
const expandedGroups = new Set();

function getMenuFilter() {
    return document.getElementById('menu-filter')?.value.trim() || '';
}

function setGroupExpanded(li, expanded, { remember = true, animate = false } = {}) {
    const toggle = li.querySelector(':scope > .menu-group-head > .menu-toggle');
    const ul = li.querySelector(':scope > .menu-list');
    if (!toggle || !ul) return;
    const changed = toggle.getAttribute('aria-expanded') !== String(expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    if (animate && changed) animateGroup(ul, expanded);
    else {
        groupAnimations.get(ul)?.cancel();
        ul.hidden = !expanded;
    }
    if (remember && !getMenuFilter()) {
        if (expanded) expandedGroups.add(li.dataset.name);
        else expandedGroups.delete(li.dataset.name);
        // One group open at a time: opening one folds the others, except the groups it sits in
        // (Didymos inside Mission asteroids) and any open inside it. A search opens as many as
        // it needs, so this only applies outside one.
        if (expanded && changed) {
            document.querySelectorAll('#mission-list .menu-group').forEach(other => {
                if (other === li || other.contains(li) || li.contains(other)) return;
                if (other.querySelector(':scope > .menu-group-head > .menu-toggle')?.getAttribute('aria-expanded') !== 'true') return;
                if (autoOpenedGroup === other) autoOpenedGroup = null;
                setGroupExpanded(other, false, { animate });
            });
        }
    }
}

// A group unfolds from under its heading: the list grows to its height while its rows drop in
// one after another, and folds back up a little faster. Interrupting (a quick second click)
// carries on from wherever the fold has got to. With reduced motion the rows only fade in.
const groupAnimations = new WeakMap();
const GROUP_OPEN_MS = 280;
const GROUP_CLOSE_MS = 200;
const GROUP_ROW_STAGGER_MS = 22;
const GROUP_ROW_STAGGER_MAX = 8;
const MENU_EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';

function animateGroup(ul, expanded) {
    const running = groupAnimations.get(ul);
    const from = running ? ul.getBoundingClientRect().height : (expanded ? 0 : ul.offsetHeight);
    running?.cancel();
    ul.getAnimations({ subtree: true }).forEach(a => a.cancel());

    if (prefersReducedMotion.matches) {
        ul.hidden = !expanded;
        if (expanded) ul.animate({ opacity: [0, 1] }, { duration: 150, easing: 'ease-out' });
        return;
    }

    ul.hidden = false;
    const to = expanded ? ul.scrollHeight : 0;
    const duration = expanded ? GROUP_OPEN_MS : GROUP_CLOSE_MS;
    const fold = ul.animate(
        { height: [`${from}px`, `${to}px`], opacity: expanded ? [1, 1] : [1, 0.4] },
        { duration, easing: expanded ? MENU_EASE_OUT : 'cubic-bezier(0.4, 0, 1, 1)' },
    );
    ul.style.overflow = 'clip';
    groupAnimations.set(ul, fold);

    if (expanded) {
        [...ul.children].filter(row => !row.hidden).slice(0, GROUP_ROW_STAGGER_MAX).forEach((row, i) => {
            row.animate(
                { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
                { duration: 240, delay: 40 + i * GROUP_ROW_STAGGER_MS, easing: MENU_EASE_OUT, fill: 'backwards' },
            );
        });
    }

    fold.onfinish = fold.oncancel = () => {
        if (groupAnimations.get(ul) !== fold) return;
        groupAnimations.delete(ul);
        ul.style.overflow = '';
        if (fold.playState === 'finished') ul.hidden = !expanded;
    };
}

// Case-, accent- and punctuation-insensitive, so "change5" and "chang'e" both find Chang'e-5.
function normaliseForSearch(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function applyMenuFilter() {
    const query = getMenuFilter();
    const needle = normaliseForSearch(query);
    const tree = document.querySelector('#mission-list .menu-tree');
    const empty = document.getElementById('menu-empty');
    const status = document.getElementById('menu-filter-status');
    if (!tree) return;
    let matches = 0;

    // Keeps an item if it or anything inside it matches, so results keep their parents.
    // A holder that matches ("comets", "asteroids") shows everything it holds.
    const walk = (li, forced = false) => {
        const holder = li.classList.contains('menu-group--holder');
        const self = !needle || forced || normaliseForSearch(li.dataset.search || li.dataset.name).includes(needle);
        li.classList.toggle('is-match', Boolean(needle) && self && !holder);
        if (self && needle && !holder) matches++;
        const forceChildren = forced || (holder && self && Boolean(needle));
        let childMatch = false;
        const ul = li.querySelector(':scope > .menu-list');
        if (ul) ul.querySelectorAll(':scope > li').forEach(child => { if (walk(child, forceChildren)) childMatch = true; });
        li.hidden = !(self || childMatch);
        if (ul) {
            const open = needle ? childMatch
                : !li.classList.contains('menu-group') || expandedGroups.has(li.dataset.name);
            if (li.classList.contains('menu-group')) setGroupExpanded(li, open, { remember: false });
            else ul.hidden = !open;
        }
        return self || childMatch;
    };
    tree.querySelectorAll(':scope > li').forEach(li => walk(li));

    empty.hidden = !needle || matches > 0;
    empty.textContent = `Nothing matches “${query}”.`;
    if (status) status.textContent = !needle ? '' : matches ? `${matches} ${matches === 1 ? 'result' : 'results'}` : 'No results';
    // Back from a search, show where the current object sits in the full list.
    if (!needle && menuCurrentName) syncMenuCurrent(menuCurrentName);
}

// The first search result, skipping parents that are only shown for context.
function firstVisibleMenuRow() {
    const selector = getMenuFilter() ? '#mission-list .is-match' : '#mission-list .menu-item';
    const li = [...document.querySelectorAll(selector)].find(item => item.offsetParent !== null && menuRowOf(item));
    return li && menuRowOf(li);
}

function menuRowOf(li) {
    return li.querySelector(':scope > .mission-btn, :scope > .menu-group-head > .mission-btn');
}

function setupMenuFilter() {
    const input = document.getElementById('menu-filter');
    if (!input || input.dataset.ready) return;
    input.dataset.ready = 'true';
    input.addEventListener('input', applyMenuFilter);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            firstVisibleMenuRow()?.click();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            firstVisibleMenuRow()?.focus();
        } else if (e.key === 'Escape' && input.value) {
            // Clear the search first; a second Escape reaches the scene as usual.
            e.stopPropagation();
            input.value = '';
            applyMenuFilter();
        }
    });
}

// Marks the object on show (null for none, 'Solar System' for the overview). An object chosen
// elsewhere (a scene click, the tour) gets its group opened and is scrolled into view.
let menuCurrentName = null;
let autoOpenedGroup = null;
function syncMenuCurrent(name) {
    menuCurrentName = name;
    document.querySelectorAll('#mission-menu [aria-current]').forEach(el => el.removeAttribute('aria-current'));
    if (!name) return;
    if (name === 'Solar System') {
        document.getElementById('system-btn')?.setAttribute('aria-current', 'true');
        return;
    }
    const li = [...document.querySelectorAll('#mission-list .menu-item')].find(item => item.dataset.name === name);
    if (!li) return;
    const btn = menuRowOf(li);
    if (!btn) return;
    btn.setAttribute('aria-current', 'true');
    if (!getMenuFilter()) {
        // Choosing a planet opens its group, so its missions and moons appear beneath it (that is
        // how most visitors find out a group opens). A group opened this way folds again when the
        // visitor moves on elsewhere, unless they opened it themselves.
        const opens = !li.classList.contains('menu-group--holder') && li.classList.contains('menu-group')
            && li.querySelector(':scope > .menu-group-head > .menu-toggle')?.getAttribute('aria-expanded') === 'false';
        if (autoOpenedGroup && autoOpenedGroup !== li && !autoOpenedGroup.contains(li)) {
            setGroupExpanded(autoOpenedGroup, false, { animate: true });
            autoOpenedGroup = null;
        }
        if (opens) {
            setGroupExpanded(li, true, { animate: true });
            autoOpenedGroup = li;
        }
        const group = li.parentElement.closest('.menu-group');
        if (group) setGroupExpanded(group, true, { animate: true });
    }
    if (btn.offsetParent !== null) btn.scrollIntoView({ block: 'nearest' });
}

// Every object's data.json entry, in load order.
function listObjects() {
    return [...celestialMap.values()].map(obj => obj.data);
}

// Every object's data.json entry by name, or null.
function getObject(name) {
    return celestialMap.get(name)?.data ?? null;
}

// The engine's API, as ENGINE.md describes it. Phase 3 moves the engine into src/engine/ and
// createEngine returns this; until then the showcase still calls the functions directly.
const engine = {
    on: onEngine,
    flyTo, showOverview, deselect, hurry,
    getDate, setDate, setTimeRate,
    getObject, listObjects,
    // An object's on-screen centre and radius in CSS pixels, or null when it's off-screen.
    projectBody(name) {
        const p = projectBody(celestialMap.get(name));
        return p && { x: p.cx, y: p.cy, radius: p.bodyR };
    },
    setViewInsets, setFlightPace, setUserControl,
};

// Showcase: choose an object. Chosen from the menu (returnFocusTo is its row), the details take
// keyboard focus; chosen on the canvas or by the tour, the choice is announced instead.
function selectObject(name, { returnFocusTo = null } = {}) {
    sidebarReturnFocus = returnFocusTo;
    return flyTo(name);
}

// A choice, or letting go, ends any holder on show and lights the chosen object's orbit.
onEngine('select', () => { clearShownHolder(); updateOrbitLineHighlights(); });
onEngine('deselect', () => { clearShownHolder(); updateOrbitLineHighlights(); });
// A trajectory's cruise line gave way to its arrival orbit (or back): style the line now shown.
onEngine('orbit-change', updateOrbitLineHighlights);

onEngine('select', ({ data, waiting }) => {
    if (!cinematicActive) coachStep('pick');
    updateUI(data);
    if (waiting) {
        if (sidebarReturnFocus) document.getElementById('info-title')?.focus({ preventScroll: true });
        announce(`Loading ${data.name}`);
    } else if (sidebarReturnFocus) {
        // Visitor chose this from the menu: take them to the details.
        document.getElementById('info-title')?.focus({ preventScroll: true });
    } else {
        // Chosen by a canvas click or the tour: announce without moving focus.
        announce(`Now showing ${data ? data.name : 'selection'}`);
    }
});

function announce(message) {
    const el = document.getElementById('announcer');
    if (!el) return;
    el.textContent = '';
    // Set on the next frame so a repeated message is still read out.
    requestAnimationFrame(() => { el.textContent = message; });
}

// Showcase: close the details and put keyboard focus somewhere sensible.
onEngine('deselect', () => {
    const sb = document.getElementById('sidebar');
    const focusWasInside = sb.contains(document.activeElement);
    sb.classList.remove('active');
    setDetailsExpanded(false);
    sb.inert = true;
    syncMenuInert();
    document.getElementById('controls').classList.remove('shifted');
    syncMenuCurrent(null);

    // Don't strand keyboard focus inside a panel that just went inert.
    if (focusWasInside) {
        // (On a phone the row that opened it is in the closed Explore sheet: the dock's button instead.)
        const back = sidebarReturnFocus && sidebarReturnFocus.isConnected && !sidebarReturnFocus.closest('[inert]')
            ? sidebarReturnFocus
            : document.getElementById(isPhone() ? 'explore-btn' : 'system-btn');
        back?.focus({ preventScroll: true });
    }
    sidebarReturnFocus = null;
});

// Science images are served from web-sized WebP copies in images/web/ (the originals run
// to 10000px and 13MB, and decoding one stalled the page). If a copy is missing, the
// <img> falls back to the original file.
function getWebImagePath(url) {
    if (!url) return url;
    return url.replace(/^(\/?images\/)([^/]+)\.[^./]+$/, '$1web/$2.webp');
}

// The portal O from the OU brand forms (a square with a tilted-ellipse cut-out), in the OU
// green to light-blue gradient: marks the OU's own content.
const OU_MARK = `<svg class="ou-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><defs><linearGradient id="ou-mark-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7DFFD3"/><stop offset="1" stop-color="#66EEFA"/></linearGradient><mask id="ou-mark-cut"><rect width="16" height="16" fill="#fff"/><ellipse cx="8" cy="8" rx="3.4" ry="5.2" transform="rotate(22 8 8)" fill="#000"/></mask></defs><rect width="16" height="16" fill="url(#ou-mark-grad)" mask="url(#ou-mark-cut)"/></svg>`;

// One status vocabulary for the menu and the sidebar.
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

function statusTone(status) {
    if (status === 'Planned') return 'planned';
    if (['Crashed', 'Landed', 'Decommissioned', 'Complete', 'Lost', 'Re-entered'].includes(status)) return 'ended';
    if (status === 'Active' || status === 'Launched' || status === 'En Route' || status === 'Operational') return 'active';
    return 'neutral';
}

function formatType(type) {
    const words = type.replace(/_/g, ' ');
    return words.charAt(0).toUpperCase() + words.slice(1);
}

function updateUI(data) {
    const sb = document.getElementById('sidebar');
    const controls = document.getElementById('controls');

    const meta = [formatType(data.type)];
    if (data.status) meta.push(`<span class="info-status info-status--${statusTone(data.status)}">${data.status}</span>`);
    if (data.launch_year) meta.push(`${data.status === 'Planned' ? 'Planned launch' : 'Launched'} ${data.launch_year}`);

    // The OU's role is the point of the product, so it leads.
    const ouHtml = data.ou_involvement ? `
        <section class="ou-involvement" aria-labelledby="ou-title">
            <h3 id="ou-title">${OU_MARK}Open University Involvement</h3>
            <div>${data.ou_involvement}</div>
        </section>` : '';
    const imageHtml = data.image_url ? `
        <figure class="info-image">
            <img src="${fixPath(getWebImagePath(data.image_url))}" data-original="${fixPath(data.image_url)}" alt="${data.name} Science Image" decoding="async"
                onerror="if (this.dataset.original && this.getAttribute('src') !== this.dataset.original) { this.src = this.dataset.original; } else { this.parentElement.remove(); }"/>
        </figure>` : '';

    document.getElementById('info-content').innerHTML = `
        <h2 id="info-title" tabindex="-1">${data.name}</h2>
        <p class="info-meta">${meta.join('<span aria-hidden="true"> · </span>')}</p>
        ${ouHtml}
        ${imageHtml}
        <p class="info-description">${data.description || 'No description available.'}</p>
    `;
    sb.scrollTop = 0;
    document.getElementById('info-content').scrollTop = 0;
    setDetailsExpanded(false);
    sb.inert = false;
    sb.classList.add('active');
    syncMenuInert();
    controls.classList.add('shifted');
    syncMenuCurrent(data.name);
}

// --- CREDITS ---
// The content lives in data.json (the entry with "type": "credits"), so credits can be
// edited without touching code. Items with an empty credit are left out.
const LICENCE_URLS = {
    'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
    'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
    'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
    'CC BY-SA 3.0 IGO': 'https://creativecommons.org/licenses/by-sa/3.0/igo/',
    'MIT': 'https://opensource.org/license/mit',
};

function externalLink(text, href) {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
}

function setupCredits(credits) {
    const sections = (credits?.sections || [])
        .map(section => ({ ...section, items: (section.items || []).filter(item => item.credit) }))
        .filter(section => section.items.length);
    if (!sections.length) return;

    const dialog = document.getElementById('credits-dialog');
    const content = document.getElementById('credits-content');
    if (credits.title) document.getElementById('credits-title').textContent = credits.title;
    content.replaceChildren();

    // The people who made it come first, set apart from the thanks for images and software.
    const crew = (credits.crew?.items || []).filter(person => person.name && person.role);
    if (crew.length) {
        const el = document.createElement('section');
        el.className = 'credits-crew';
        const h = document.createElement('h3');
        h.textContent = credits.crew.heading || 'Crew';
        const list = document.createElement('dl');
        list.className = 'credits-list';
        for (const person of crew) {
            const row = document.createElement('div');
            const dt = document.createElement('dt');
            dt.textContent = person.name;
            const dd = document.createElement('dd');
            dd.textContent = person.role;
            row.append(dt, dd);
            list.appendChild(row);
        }
        el.append(h, list);
        // A quiet line under the crew, e.g. how AI was used to make it.
        if (credits.crew.note) {
            const note = document.createElement('p');
            note.className = 'credits-note';
            note.textContent = credits.crew.note;
            el.appendChild(note);
        }
        content.appendChild(el);
    }

    if (credits.intro) {
        const p = document.createElement('p');
        p.className = 'credits-intro';
        p.textContent = credits.intro;
        content.appendChild(p);
    }
    for (const section of sections) {
        const el = document.createElement('section');
        const h = document.createElement('h3');
        h.textContent = section.heading;
        const list = document.createElement('dl');
        list.className = 'credits-list';
        for (const item of section.items) {
            const row = document.createElement('div');
            const dt = document.createElement('dt');
            dt.textContent = item.subject;
            const dd = document.createElement('dd');
            dd.append(item.credit);
            if (item.licence) {
                dd.append(' · ');
                const href = LICENCE_URLS[item.licence];
                dd.append(href ? externalLink(item.licence, href) : item.licence);
            }
            if (item.url) {
                dd.append(' · ');
                dd.append(externalLink('Source', item.url));
            }
            row.append(dt, dd);
            list.appendChild(row);
        }
        el.append(h, list);
        content.appendChild(el);
    }
    if (credits.footer) {
        const p = document.createElement('p');
        p.className = 'credits-footer';
        p.textContent = credits.footer;
        content.appendChild(p);
    }

    let link = document.getElementById('credits-btn');
    if (!link) {
        // Focus goes back to whichever button opened it: the controls' link, or on a phone the
        // one at the foot of the Explore sheet.
        let opener = null;
        const open = (from) => {
            opener = from;
            dialog.showModal();
            content.scrollTop = 0;
        };
        link = document.createElement('button');
        link.id = 'credits-btn';
        link.type = 'button';
        link.textContent = 'Credits';
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', () => open(link));
        (document.querySelector('#controls .controls-links') || document.getElementById('controls')).appendChild(link);
        const menuCredits = document.getElementById('menu-credits');
        if (menuCredits) {
            menuCredits.closest('.menu-foot').hidden = false;
            menuCredits.addEventListener('click', () => open(menuCredits));
        }

        document.getElementById('credits-close').addEventListener('click', () => dialog.close());
        // A click on the dimmed backdrop lands on the dialog element itself.
        dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
        dialog.addEventListener('close', () => opener?.focus());
    }
}

// --- PHONE LAYOUT ---
// Below 721px wide the chrome rearranges round the thumb: the controls become a dock along the
// bottom edge, the Explore menu a sheet that rises from it, and the details a sheet that rests
// at half height (the selection framed above it) and opens to nearly full height. Both sheets
// follow a drag on their grip and settle on release; a tap on the grip does the same as a drag.
// (phoneQuery, isPhone and menuSheetOpen are declared at the top, with the other layout limits.)

function openMenuSheet() {
    if (!isPhone() || menuSheetOpen) return;
    menuSheetOpen = true;
    document.body.classList.add('menu-sheet-open');
    document.getElementById('explore-btn')?.setAttribute('aria-expanded', 'true');
    syncMenuInert();
    // Focus the heading, not the search: a keyboard would cover half the list.
    document.getElementById('mission-menu-title')?.focus({ preventScroll: true });
}

function closeMenuSheet({ returnFocus = false } = {}) {
    if (!menuSheetOpen) return;
    const menu = document.getElementById('mission-menu');
    const focusWasInside = menu.contains(document.activeElement);
    menuSheetOpen = false;
    document.body.classList.remove('menu-sheet-open');
    menu.style.transform = '';
    document.getElementById('explore-btn')?.setAttribute('aria-expanded', 'false');
    syncMenuInert();
    if (focusWasInside || returnFocus) document.getElementById('explore-btn')?.focus({ preventScroll: true });
}

function setDetailsExpanded(full) {
    const sb = document.getElementById('sidebar');
    const handle = document.getElementById('sidebar-handle');
    sb.classList.toggle('is-full', full);
    sb.style.transform = '';
    handle?.setAttribute('aria-expanded', String(full));
    handle?.setAttribute('aria-label', full ? 'Show fewer details' : 'Show more details');
}

// A vertical drag on `grip`: `onMove(dy)` while the finger moves (dy > 0 is down), then
// `onEnd(dy, velocity)` on release. A movement under the tap slop is left to the click.
const SHEET_TAP_SLOP_PX = 6;
function attachSheetDrag(grip, { onStart, onMove, onEnd }) {
    let startY = 0;
    let lastY = 0;
    let lastT = 0;
    let velocity = 0;
    let dragging = false;
    let pointerId = null;
    grip.addEventListener('pointerdown', (e) => {
        if (!isPhone() || e.button !== 0) return;
        if (e.target.closest('input') || (e.target.closest('button') && e.target.closest('button') !== grip)) return;
        pointerId = e.pointerId;
        startY = lastY = e.clientY;
        lastT = e.timeStamp;
        velocity = 0;
        dragging = false;
    });
    grip.addEventListener('pointermove', (e) => {
        if (e.pointerId !== pointerId) return;
        const dy = e.clientY - startY;
        if (!dragging && Math.abs(dy) < SHEET_TAP_SLOP_PX) return;
        if (!dragging) {
            dragging = true;
            grip.setPointerCapture(pointerId);
            onStart?.();
        }
        const dt = Math.max(1, e.timeStamp - lastT);
        velocity = (e.clientY - lastY) / dt; // px per ms, down is positive
        lastY = e.clientY;
        lastT = e.timeStamp;
        onMove(dy);
    });
    const finish = (e) => {
        if (e.pointerId !== pointerId) return;
        pointerId = null;
        if (!dragging) return;
        dragging = false;
        // Swallow the click that follows a drag, so it doesn't toggle as well.
        grip.addEventListener('click', (c) => { c.stopPropagation(); c.preventDefault(); }, { capture: true, once: true });
        onEnd(e.clientY - startY, velocity);
    };
    grip.addEventListener('pointerup', finish);
    grip.addEventListener('pointercancel', finish);
}

function setupPhoneSheets() {
    const menu = document.getElementById('mission-menu');
    const sidebar = document.getElementById('sidebar');
    const handle = document.getElementById('sidebar-handle');

    document.getElementById('sheet-scrim')?.addEventListener('click', () => closeMenuSheet({ returnFocus: true }));
    document.getElementById('menu-close')?.addEventListener('click', () => closeMenuSheet({ returnFocus: true }));
    // Choosing something flies there, so the sheet gets out of the way (folding a group doesn't).
    menu.addEventListener('click', (e) => {
        if (isPhone() && e.target.closest('.mission-btn')) closeMenuSheet();
    });

    // The Explore sheet follows a drag down from its head and closes past a quarter of its
    // height, or on a flick.
    attachSheetDrag(menu.querySelector('.menu-head'), {
        onStart: () => menu.classList.add('is-dragging'),
        onMove: (dy) => { menu.style.transform = `translateY(${Math.max(0, dy)}px)`; },
        onEnd: (dy, v) => {
            menu.classList.remove('is-dragging');
            if (dy > menu.offsetHeight * 0.25 || v > 0.6) closeMenuSheet({ returnFocus: true });
            else menu.style.transform = '';
        },
    });

    // The details sheet: its grip toggles between half and nearly full height and follows a
    // drag; dragged well below its half height, or flicked down from it, it closes.
    if (handle) {
        handle.addEventListener('click', () => setDetailsExpanded(!sidebar.classList.contains('is-full')));
        // The sheet is always full height and moves by transform: `drop` is how far it sits
        // below fully open (its peek drops it by its height less the peek share).
        let startDrop = 0;
        const peekDrop = () => sidebar.offsetHeight - window.innerHeight * PHONE_PEEK_SHARE;
        attachSheetDrag(handle, {
            onStart: () => {
                startDrop = sidebar.classList.contains('is-full') ? 0 : peekDrop();
                sidebar.classList.add('is-dragging');
            },
            onMove: (dy) => {
                const drop = Math.max(0, Math.min(sidebar.offsetHeight - 60, startDrop + dy));
                sidebar.style.transform = `translateY(${drop}px)`;
            },
            onEnd: (dy, v) => {
                sidebar.classList.remove('is-dragging');
                const shown = sidebar.offsetHeight - Math.max(0, startDrop + dy);
                const peek = window.innerHeight * PHONE_PEEK_SHARE;
                if (shown < peek * 0.6 || (v > 0.8 && !sidebar.classList.contains('is-full'))) {
                    stopCinematicMode();
                    deselect();
                    updateOrbitLineHighlights();
                    document.getElementById('explore-btn')?.focus({ preventScroll: true });
                    return;
                }
                const full = v < -0.5 ? true : v > 0.5 ? false : shown > (peek + sidebar.offsetHeight) / 2;
                setDetailsExpanded(full);
            },
        });
        // At rest the sheet's lower part is off screen, so reading on (scrolling the text) opens it.
        document.getElementById('info-content').addEventListener('scroll', (e) => {
            if (isPhone() && !cinematicActive && e.target.scrollTop > 4 && !sidebar.classList.contains('is-full')) setDetailsExpanded(true);
        }, { passive: true });
    }

    // Turning a phone or resizing across the line: drop sheet state the other layout lacks.
    phoneQuery.addEventListener('change', () => {
        closeMenuSheet();
        setDetailsExpanded(false);
        syncMenuInert();
    });
    syncMenuInert();
}

// --- CINEMATIC MODE ---
function setupCinematicControls() {
    const controlsDiv = document.getElementById('controls');
    if (!controlsDiv) return;
    // Phones only: the dock's way into the Explore sheet.
    if (!document.getElementById('explore-btn')) {
        const explore = document.createElement('button');
        explore.id = 'explore-btn';
        explore.type = 'button';
        explore.setAttribute('aria-controls', 'mission-menu');
        explore.setAttribute('aria-expanded', 'false');
        explore.innerHTML = `${uiIcon('search', 'btn-icon')}<span>Explore</span>`;
        explore.onclick = () => openMenuSheet();
        controlsDiv.appendChild(explore);
    }
    // A full label on larger screens; on a phone an icon, its label kept for screen readers.
    if (!document.getElementById('cinematic-btn')) {
        const btn = document.createElement('button');
        btn.id = 'cinematic-btn';
        btn.type = 'button';
        btn.innerHTML = `${uiIcon('movie', 'btn-icon btn-icon--start')}${uiIcon('stop', 'btn-icon btn-icon--stop')}<span class="btn-label"></span>`;
        btn.onclick = () => (cinematicActive ? stopCinematicMode() : startCinematicMode());
        controlsDiv.appendChild(btn);
    }
    // The quiet links under the button: "How to explore" (the coach again) and Credits.
    if (!controlsDiv.querySelector('.controls-links')) {
        const links = document.createElement('div');
        links.className = 'controls-links';
        const help = document.createElement('button');
        help.id = 'coach-btn';
        help.type = 'button';
        help.innerHTML = `${uiIcon('help', 'btn-icon')}<span class="btn-label">How to explore</span>`;
        help.setAttribute('aria-controls', 'coach');
        help.addEventListener('click', () => showCoach({ replay: true }));
        links.appendChild(help);
        controlsDiv.appendChild(links);
        setupCoach();
        setupPhoneSheets();
    }
    syncCinematicButton();
}

// --- FIRST-RUN COACH ---
// After the way in, a small plate offers three things to try: turn the view, zoom, and pick
// something to fly to. Each ticks off when the visitor actually does it; picking something (the
// point of the app: fly there and read what the OU did) completes it. It shows once per browser
// (remembered in localStorage), steps aside for Cinematic Mode, and "How to explore" in the
// controls brings it back. Its words follow the visitor's input: mouse, touch or keyboard.
const COACH_KEY = 'ouniverse-coach-done';
const COACH_STEPS = ['turn', 'zoom', 'pick'];
const COACH_DONE_LINGER_MS = 1800;
const coachDone = new Set();
let coachShown = false;
let coachHideTimer = null;
const coachSeen = () => { try { return localStorage.getItem(COACH_KEY) === '1'; } catch { return false; } };
const rememberCoach = () => { try { localStorage.setItem(COACH_KEY, '1'); } catch { /* private mode: show again next time */ } };

function coachWords() {
    if (window.matchMedia('(pointer: coarse)').matches) {
        return { turn: 'Drag to turn the view', zoom: 'Pinch to zoom', pick: 'Tap a mission in Explore' };
    }
    if (lastInputWasKeyboard) {
        return { turn: 'Arrow keys turn the scene', zoom: '+ and − zoom in and out', pick: 'Pick a mission in Explore' };
    }
    return { turn: 'Drag to turn the view', zoom: 'Scroll to zoom', pick: 'Pick a mission in Explore' };
}

function showCoach({ replay = false } = {}) {
    const coach = document.getElementById('coach');
    if (!coach || cinematicActive) return;
    if (!replay && coachSeen()) return;
    clearTimeout(coachHideTimer);
    if (replay) coachDone.clear();
    const words = coachWords();
    coach.querySelectorAll('.coach-step').forEach(li => {
        const step = li.dataset.step;
        li.querySelector('.coach-text').textContent = words[step];
        li.classList.toggle('is-done', coachDone.has(step));
    });
    // On narrow screens the coach sits above the controls and the menu stops short of it.
    const root = document.documentElement;
    const controls = document.getElementById('controls');
    if (controls) root.style.setProperty('--controls-h', `${controls.offsetHeight}px`);
    coach.hidden = false;
    root.style.setProperty('--coach-h', `${coach.offsetHeight}px`);
    document.body.classList.add('coach-open');
    coachShown = true;
    announce(`Tip: ${words.pick.toLowerCase()} to fly there and see what the Open University did.`);
}

function hideCoach({ remember = true } = {}) {
    const coach = document.getElementById('coach');
    clearTimeout(coachHideTimer);
    if (!coach || coach.hidden) { coachShown = false; return; }
    if (coach.contains(document.activeElement)) document.getElementById('coach-btn')?.focus({ preventScroll: true });
    coach.hidden = true;
    document.body.classList.remove('coach-open');
    coachShown = false;
    if (remember) rememberCoach();
}

// The visitor did one of the three: tick it off. Picking something, or doing all three, finishes.
function coachStep(step) {
    if (!coachShown || coachDone.has(step)) return;
    coachDone.add(step);
    const li = document.querySelector(`#coach .coach-step[data-step="${step}"]`);
    li?.classList.add('is-done');
    if (step === 'pick' || COACH_STEPS.every(s => coachDone.has(s))) {
        rememberCoach();
        clearTimeout(coachHideTimer);
        coachHideTimer = setTimeout(() => hideCoach(), COACH_DONE_LINGER_MS);
    }
}

function setupCoach() {
    document.getElementById('coach-close')?.addEventListener('click', () => hideCoach());
    // "Pick a mission" opens the way: it puts the visitor in the Explore search.
    document.getElementById('coach-pick')?.addEventListener('click', () => {
        if (isPhone()) { openMenuSheet(); return; }
        const filter = document.getElementById('menu-filter');
        if (filter && !document.getElementById('mission-menu')?.inert) filter.focus();
    });
    // Two fingers on the scene at once is a pinch.
    const pointers = new Set();
    renderer.domElement.addEventListener('pointerdown', (e) => { pointers.add(e.pointerId); if (pointers.size > 1) coachStep('zoom'); });
    const lift = (e) => pointers.delete(e.pointerId);
    renderer.domElement.addEventListener('pointerup', lift);
    renderer.domElement.addEventListener('pointercancel', lift);
    renderer.domElement.addEventListener('pointermove', (e) => {
        if (pointers.size === 1 && pointerDownPos && Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y) > DRAG_THRESHOLD_PX) coachStep('turn');
    });
    renderer.domElement.addEventListener('wheel', () => coachStep('zoom'), { passive: true });
    renderer.domElement.addEventListener('keydown', (e) => {
        if (e.key.startsWith('Arrow')) coachStep('turn');
        else if ('+=-_'.includes(e.key)) coachStep('zoom');
    });
}

function syncCinematicButton() {
    const btn = document.getElementById('cinematic-btn');
    if (!btn) return;
    const label = btn.querySelector('.btn-label') || btn;
    label.textContent = cinematicActive ? 'Stop Cinematic Mode' : 'Start Cinematic Mode';
    btn.setAttribute('aria-pressed', String(cinematicActive));
}

// The menu is out of reach when the tour hides it, and when the sidebar has slid over it on a
// narrow screen: it stays out of the tab order too, so focus never lands on something unseen.
function syncMenuInert() {
    const menu = document.getElementById('mission-menu');
    const sidebar = document.getElementById('sidebar');
    // On a phone the menu is a sheet: reachable only while it's up.
    if (isPhone()) {
        menu.inert = cinematicActive || !menuSheetOpen;
        return;
    }
    const sidebarLeft = window.innerWidth - Math.min(sidebar.offsetWidth, window.innerWidth);
    const covered = sidebar.classList.contains('active') && sidebarLeft < menu.offsetLeft + menu.offsetWidth;
    menu.inert = cinematicActive || covered;
}
window.addEventListener('resize', syncMenuInert);

// Tell the engine how much of the screen the panels cover round a selection. Beside the scene,
// the menu (while shown; Cinematic Mode hides it) and the sidebar (assumed open: a selection
// opens it). A sidebar over the scene is closed to look round, so it doesn't count (and framing
// beside the menu alone would push the selection under it). On a phone, the header and the
// sheet's resting edge: its half-height peek, or the small caption card in Cinematic Mode.
const PHONE_PEEK_SHARE = 0.46;    // matches the sheet's 46dvh in style.css
const PHONE_CAPTION_SHARE = 0.26; // the caption card plus the dock under it
function syncViewInsets() {
    const insets = { left: 0, right: 0, top: 0, bottom: 0 };
    if (isSidebarBesideScene()) {
        const menu = document.getElementById('mission-menu');
        if (!menu.classList.contains('ui-hidden')) insets.left = menu.offsetLeft + menu.offsetWidth;
        insets.right = document.getElementById('sidebar').offsetWidth;
    } else if (isPhone()) {
        const header = document.getElementById('header');
        insets.top = header ? header.getBoundingClientRect().bottom + 8 : 0;
        insets.bottom = window.innerHeight * (cinematicActive ? PHONE_CAPTION_SHARE : PHONE_PEEK_SHARE);
    }
    setViewInsets(insets);
}
window.addEventListener('resize', syncViewInsets);
// Panel sizes can change without a resize (the header's text wrapping once the font loads).
new ResizeObserver(syncViewInsets).observe(document.getElementById('header'));
syncViewInsets();

function startCinematicMode() {
    if (cinematicActive) return;
    cinematicActive = true;
    setFlightPace(CINEMATIC_FLIGHT_SCALE);
    document.body.classList.add('is-cinematic');
    closeMenuSheet();
    hideCoach({ remember: false });
    const menu = document.getElementById('mission-menu');
    menu.classList.add('ui-hidden');
    syncMenuInert();
    syncViewInsets();
    syncCinematicButton();
    announce('Cinematic Mode on. The camera will visit a new mission every 30 seconds.');
    cycleCinematic();
    cinematicTimer = setInterval(cycleCinematic, CINEMATIC_DELAY);
}

function stopCinematicMode() {
    if (!cinematicActive) return;
    cinematicActive = false;
    setFlightPace(USER_FLIGHT_SCALE);
    document.body.classList.remove('is-cinematic');
    const menu = document.getElementById('mission-menu');
    menu.classList.remove('ui-hidden');
    syncMenuInert();
    syncViewInsets();
    if (cinematicTimer) clearInterval(cinematicTimer);
    cinematicTimer = null;
    syncCinematicButton();
    // On a phone the dock steps back under the details sheet when the tour ends: follow it there.
    if (isPhone() && document.getElementById('controls').contains(document.activeElement)
        && document.getElementById('sidebar').classList.contains('active')) {
        document.getElementById('info-title')?.focus({ preventScroll: true });
    }
    announce('Cinematic Mode off.');
    showCoach(); // back if the visitor hasn't finished it (showCoach checks)
}

function cycleCinematic() {
    if (!cinematicActive) return;
    if (cinematicQueue.length === 0) {
        cinematicQueue = listObjects().filter(data => data.type === 'mission').map(data => data.name);
        for (let i = cinematicQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cinematicQueue[i], cinematicQueue[j]] = [cinematicQueue[j], cinematicQueue[i]];
        }
    }
    const next = cinematicQueue.pop();
    if (next) selectObject(next);
}

// --- ANIMATION LOOP ---
// The app's own work each frame (onFrame), called directly, after the camera and lights have moved
// and just before the scene is drawn.
const frameHooks = [];
function onFrame(hook) {
    frameHooks.push(hook);
}

function animate() {
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
            // Turned to the real time of day: longitude 0 faces the Sun at 12:00 UTC.
            const sunAngle = Math.atan2(-group.position.x, -group.position.z);
            const hours = simulatedDate.getUTCHours();
            const mins = simulatedDate.getUTCMinutes();
            const secs = simulatedDate.getUTCSeconds();
            const ms = simulatedDate.getUTCMilliseconds();
            const timeFraction = (hours + mins / 60 + secs / 3600 + ms / 3600000) / 24.0;
            const timeRotation = (timeFraction - 0.5) * Math.PI * 2;
            meshGroup.rotation.y = (sunAngle - Math.PI / 2) + timeRotation;
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
            meshGroup.rotation.y = theta + offset;
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

// EVENTS
// Showcase: "Solar System" pinned atop the menu (and the view on load, with animate: false).
// The details close before the tour stops: stopping it first on a phone would put focus in the
// details just as they close.
function showSolarSystem({ animate = true } = {}) {
    deselect();
    stopCinematicMode();
    showOverview({ animate });
    syncMenuCurrent('Solar System');
    if (animate) announce('Showing the whole Solar System');
}

// Only clicks on the 3D view itself select or deselect. Listening on the canvas
// (not window) keeps clicks in the sidebar and menus from reaching the scene.
const DRAG_THRESHOLD_PX = 6;
let pointerDownPos = null;

renderer.domElement.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) return;
    pointerDownPos = { x: e.clientX, y: e.clientY };
    hurry();
});
renderer.domElement.addEventListener('wheel', hurry, { passive: true });

// Taking hold of the camera ends the tour.
controls.addEventListener('start', stopCinematicMode);

// Raycaster ignores visibility, so a click would also test every hidden detail level and
// culled mission, up to hundreds of thousands of triangles. Only test what's on screen.
function isShown(object) {
    for (let o = object; o; o = o.parent) {
        if (!o.visible) return false;
        if (o === scene) return true;
    }
    return false; // not attached to the scene, e.g. a lander that hasn't landed yet
}

function intersectVisible(roots) {
    const hits = [];
    const visit = object => {
        if (!object.visible) return;
        if (object.layers.test(raycaster.layers)) object.raycast(raycaster, hits);
        object.children.forEach(visit);
    };
    roots.forEach(root => { if (isShown(root)) visit(root); });
    return hits.sort((a, b) => a.distance - b.distance);
}

renderer.domElement.addEventListener('click', (e) => {
    // Orbiting with a drag also ends in a click; only a still tap is a selection.
    const start = pointerDownPos;
    pointerDownPos = null;
    if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > DRAG_THRESHOLD_PX) return;

    // A tap on the scene ends the tour, then carries on as a normal selection.
    stopCinematicMode();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = intersectVisible(objects);
    if (hits.length) {
        let target = hits[0].object;
        let safeCount = 0;
        while (target && !target.userData.name && safeCount < 10) { target = target.parent; safeCount++; }
        if (target && target.userData && target.userData.name) {
            selectObject(target.userData.name);
        }
    } else {
        deselect();
    }
});

document.getElementById('sidebar-close').addEventListener('click', () => {
    stopCinematicMode();
    deselect();
});

// Reading the details means the visitor wants to stay on this object.
document.getElementById('sidebar').addEventListener('pointerdown', stopCinematicMode);

window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    // The credits dialog closes itself on Escape; leave the scene alone.
    if (document.getElementById('credits-dialog').open) return;
    if (menuSheetOpen) { closeMenuSheet({ returnFocus: true }); return; }
    hurry();
    if (cinematicActive) { stopCinematicMode(); return; }
    if (document.getElementById('sidebar').classList.contains('active')) {
        deselect();
    }
});

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

// Dev-only hook for automated checks (camera paths, lander placement, model orientation); stripped from builds.
if (import.meta.env.DEV) {
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

// Showcase, each frame: the clock line (when the second changes) and the reticles.
onFrame(dt => {
    const currentSimulatedSeconds = Math.floor(simulatedDate.getTime() / 1000);
    if (currentSimulatedSeconds !== lastSimulatedSeconds) {
        lastSimulatedSeconds = currentSimulatedSeconds;
        if (clockElement) clockElement.textContent = formatSimulatedTime(simulatedDate);
    }
    updateReticles(dt);
});

loadSystem();
animate();