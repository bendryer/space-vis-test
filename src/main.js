import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createSun } from './sun.js';

// --- CONFIGURATION ---
const J2000_DATE = new Date('2000-01-01T12:00:00Z');
const CAMERA_ORBIT_SPEED = 0.1;
const CAMERA_FLY_SPEED = 0.0083; // Slowed down by ~3x for more cinematic zoom
const ENABLE_NIGHT_LIGHTS = true;
const DEBUG_SHADOWS = false;
const DEBUG_LANDING = false;
// Every spacecraft model (orbiters and landers alike) is drawn at this size along its longest
// side, in world units: far larger than true scale, so landers stay visible on a planet's
// surface. Natural bodies with models (asteroids, comets) keep their own model_scale.
const MISSION_MODEL_SIZE = 0.3;
// A selected spacecraft is framed so it fills about this fraction of the view.
const MISSION_VIEW_FILL = 0.5;
// A selected body (star, planet, moon, asteroid, comet) is framed so it and everything orbiting
// it fills this fraction of the view. The Sun is framed on its own: its "system" is everything.
const BODY_VIEW_FILL = 0.95;
const SUN_FRAME_RADII = 1.25; // out to the edge of its glowing atmosphere
// The "Solar System" view (the default on load) keeps the Sun centred and fits every planet's
// orbit within this fraction of the screen, seen from this angle above the plane of the orbits.
const SOLAR_SYSTEM_VIEW_FILL = 0.88;
const SOLAR_SYSTEM_VIEW_ELEVATION = 25 * Math.PI / 180;
// The details sidebar sits beside the scene (rather than over most of it) from this width up;
// the view is then shifted so selections are centred in the part of the screen still visible.
const SIDEBAR_BESIDE_MIN_WIDTH = 900;
// Orbit lines may cut inside the true orbit by at most this much (world units, 1% of a craft).
const ORBIT_LINE_MAX_SAG = 0.003;
// Landers are viewed from this angle off their surface normal (0 = straight down).
const LANDER_VIEW_ANGLE = 50 * Math.PI / 180;
const CINEMATIC_DELAY = 30000; // 30 Seconds
// Flight length multipliers: flights the visitor asks for are long enough to give a sense of
// the Solar System's scale but still feel responsive; the tour keeps its slower drift.
const USER_FLIGHT_SCALE = 3.0;
const CINEMATIC_FLIGHT_SCALE = 5.0;
const MIN_FLIGHT_DURATION = 0.05; // Reduced motion: effectively a cut
const HURRY_FLIGHT_SECONDS = 0.6;
// A slow frame (asset parsing, GC, tab switch) shouldn't make the camera leap to catch up.
const MAX_MOTION_DT = 1 / 20;
// After the visitor lets go of a focused object, pick the slow orbit back up from where they left it.
const AUTO_ORBIT_RESUME_MS = 6000;
const AUTO_ORBIT_SPEED = CAMERA_ORBIT_SPEED * 60 / (2 * Math.PI); // OrbitControls units for the same rad/s
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const CULLING_THRESHOLD = 1; // Pixel size below which objects are culled
// Models start in low detail and switch to full detail only once they're big enough on
// screen for the difference to show (diameter in CSS pixels). Loading starts earlier so the
// full model is ready by the time it's needed; the gap between the two switch sizes stops
// it flickering back and forth at the boundary.
const HIGH_DETAIL_PREFETCH_PX = 60;
const HIGH_DETAIL_SHOW_PX = 160;
const HIGH_DETAIL_HIDE_PX = 120;


// Privacy switch: an object's "model_named" (a named asteroid's model, which shows a
// researcher's name) is used in place of its "model" only when this is on.
const USE_NAMED_ASTEROID_MODELS = false;

function getHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function getTumbleSpeed(name, totalSpeed = 0.25) {
    const hash = getHash(name || 'asteroid');
    const r1 = 0.2 + ((hash & 0xFF) / 255) * 0.8;
    const r2 = 0.2 + (((hash >> 8) & 0xFF) / 255) * 0.8;
    const r3 = 0.2 + (((hash >> 16) & 0xFF) / 255) * 0.8;
    const sum = r1 + r2 + r3;

    const signX = (hash & 1) ? 1 : -1;
    const signY = ((hash >> 1) & 1) ? 1 : -1;
    const signZ = ((hash >> 2) & 1) ? 1 : -1;

    return {
        x: signX * (r1 / sum) * totalSpeed,
        y: signY * (r2 / sum) * totalSpeed,
        z: signZ * (r3 / sum) * totalSpeed
    };
}


// --- SPACECRAFT ATTITUDE ---
// How an orbiting spacecraft turns, from its "motion" in data.json. Each mode is how that kind
// of mission really flies, slowed or sped to read well on screen:
//   spin   - rolls about "axis" (a telescope's tube), that axis tilted "tilt"° off the orbital
//            plane's normal and precessing round a "wobble"° cone. Space telescopes.
//   sun    - "axis" points at the Sun (a sunshield, a solar-array face, a high-gain antenna),
//            rolling about that line with a "wobble"° precession. L2 observatories, craft in
//            cruise, and true spinners (Planck, Gaia, Genesis) at a higher "rate".
//   nadir  - "axis" faces the body below and "along" points along the track, so it turns once
//            per orbit, with a slight "wobble"° yaw sway. Earth observers, the ISS, planetary
//            orbiters, craft at asteroids and comets.
//   tumble - a slow tumble about all three axes. Cubesats.
// Axes are the model's own, as "+x", "-y" and so on; "rate" is degrees per second.
const MOTION_DEFAULTS = {
    spin: { axis: '+y', rate: 2, wobble: 8, tilt: 35, period: 90 },
    sun: { axis: '+y', rate: 1.5, wobble: 5, period: 120 },
    nadir: { axis: '-y', along: '+z', rate: 0, wobble: 3, period: 40 },
    tumble: { rate: 3 },
};
const _attA = new THREE.Vector3(), _attB = new THREE.Vector3(), _attC = new THREE.Vector3();
const _attD = new THREE.Vector3(), _attE = new THREE.Vector3(), _attF = new THREE.Vector3();
const _attM = new THREE.Matrix4(), _attN = new THREE.Matrix4();
const _attQ = new THREE.Quaternion(), _attRoll = new THREE.Quaternion();

function parseModelAxis(text) {
    const m = /^([+-]?)([xyz])$/.exec(String(text || '+y').trim().toLowerCase()) || ['', '', 'y'];
    const v = new THREE.Vector3();
    v[m[2]] = m[1] === '-' ? -1 : 1;
    return v;
}

// Settles an object's motion settings once: its mode's defaults under its own, plus a phase
// and (for "spin") a resting direction of its own, so no two craft turn in step.
function getMotion(obj) {
    if (obj.motion) return obj.motion;
    const given = obj.data.motion || {};
    const mode = MOTION_DEFAULTS[given.mode] ? given.mode : 'spin';
    const s = { ...MOTION_DEFAULTS[mode], ...given, mode };
    const hash = getHash(obj.data.name);
    const azimuth = ((hash % 360) * Math.PI) / 180;
    const tilt = THREE.MathUtils.degToRad(s.tilt || 0);
    obj.motion = {
        mode,
        axis: parseModelAxis(s.axis),
        along: parseModelAxis(s.along),
        rate: THREE.MathUtils.degToRad(s.rate || 0),
        wobble: THREE.MathUtils.degToRad(s.wobble || 0),
        period: s.period || 90,
        phase: ((hash >> 9) % 628) / 100,
        rest: new THREE.Vector3(Math.sin(tilt) * Math.cos(azimuth), Math.cos(tilt), Math.sin(tilt) * Math.sin(azimuth)),
    };
    return obj.motion;
}

// `dir` precessed round a cone of half-angle `wobble` about itself, at angle `turn` round it.
function precess(dir, wobble, turn, out) {
    if (!wobble) return out.copy(dir);
    _attE.set(1, 0, 0);
    if (Math.abs(dir.x) > 0.9) _attE.set(0, 0, 1);
    _attE.cross(dir).normalize().applyAxisAngle(dir, turn);
    return out.copy(dir).multiplyScalar(Math.cos(wobble)).addScaledVector(_attE, Math.sin(wobble));
}

function updateMissionAttitude(obj, time, dt, days) {
    const m = getMotion(obj);
    const meshGroup = obj.meshGroup;
    const turn = (time / m.period) * Math.PI * 2 + m.phase;

    if (m.mode === 'tumble') {
        if (!obj.tumbleSpeed) obj.tumbleSpeed = getTumbleSpeed(obj.data.name, m.rate);
        meshGroup.rotateX(obj.tumbleSpeed.x * dt);
        meshGroup.rotateY(obj.tumbleSpeed.y * dt);
        meshGroup.rotateZ(obj.tumbleSpeed.z * dt);
        return;
    }

    const parent = celestialMap.get(obj.data.parent);
    if (m.mode === 'nadir' && parent && obj.data.orbit) {
        // Down: towards the body. Along: the direction of travel, from where it'll be shortly.
        _attD.subVectors(parent.group.position, obj.group.position).normalize();
        const now = getKeplerPosition(obj.data.orbit, days);
        const soon = getKeplerPosition(obj.data.orbit, days + 0.001);
        _attF.set(soon.x - now.x, soon.y - now.y, soon.z - now.z);
        _attF.addScaledVector(_attD, -_attF.dot(_attD));
        if (_attF.lengthSq() < 1e-16) _attF.crossVectors(_attD, _UP);
        _attF.normalize();
        _attE.crossVectors(_attD, _attF);
        _attM.makeBasis(_attD, _attF, _attE);                                      // world
        _attC.crossVectors(m.axis, m.along);
        _attN.makeBasis(m.axis, m.along, _attC).transpose();                       // model, inverted
        meshGroup.quaternion.setFromRotationMatrix(_attM.multiply(_attN));
        _attRoll.setFromAxisAngle(m.axis, m.wobble * Math.sin(turn));
        meshGroup.quaternion.multiply(_attRoll);
        return;
    }

    // spin and sun: the axis held on a direction that precesses, the craft rolling about it.
    if (m.mode === 'sun') _attA.subVectors(_sunPos, obj.group.position).normalize();
    else _attA.copy(m.rest);
    precess(_attA, m.wobble, turn, _attB);
    _attQ.setFromUnitVectors(m.axis, _attB);
    _attRoll.setFromAxisAngle(m.axis, m.rate * time + m.phase);
    meshGroup.quaternion.copy(_attQ).multiply(_attRoll);
}

// The model data.json gives the object, or null for none.
function getEffectiveModel(item) {
    if (USE_NAMED_ASTEROID_MODELS && item.model_named) return item.model_named;
    return item.model || null;
}


// --- TIME STATE ---
const timeScale = 1;
let simulatedDate = new Date();
const clock = new THREE.Clock();

// --- STATE ---
let celestialMap = new Map();
let objects = [];
let selectedObject = null;
let isTracking = false;
let sunEffect = null; // see src/sun.js
let plannedMaterials = [];
let shadowHelper, lightHelper;
let pendingLanders = [];

// --- CINEMATIC STATE ---
let cinematicActive = false;
let cinematicTimer = null;
let cinematicQueue = [];
let sidebarReturnFocus = null;
// A lander chosen before it has landed on its (still loading) body; focused once it lands.
let pendingLanderFocus = null;
// True while the "Solar System" overview is shown; it slowly turns about the Sun like the
// orbit around a selected object. spin eases the turn in after the camera arrives.
let solarSystemView = false;
let solarSystemSpin = 0;
const SOLAR_SYSTEM_SPIN_EASE_SECONDS = 2;

// --- CAMERA CONTROL STATE ---
// Once the visitor rotates or zooms around a focused object, the scripted orbit
// stops steering the camera; it only carries the camera along with the object.
let userHasControl = false;
let autoOrbitResumeTimer = null;
let motionTime = 0; // Clamped clock for camera motion, so hitches don't cause jumps

// --- TRANSITION STATE ---
const transitionStartPos = new THREE.Vector3();
const transitionStartTarget = new THREE.Vector3();
const transitionEndPos = new THREE.Vector3();
const transitionEndTarget = new THREE.Vector3();
let isTransitioning = false;
let transitionProgress = 0;
let transitionDuration = 2.5;
let animFrameCounter = 0;


// --- SCENE ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// --- LOADING MANAGER ---
// The splash (#loading-overlay) doubles as the loader: its orbit draws itself as assets
// arrive, and "Start exploring" turns on once the scene is ready. The visitor leaves it.
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (splashReady || fatalErrorShown) return;
    const progress = itemsLoaded / itemsTotal;
    document.getElementById('loading-overlay')?.style.setProperty('--progress', progress.toFixed(3));
    const loadingText = document.getElementById('loading-text');
    if (loadingText) {
        // Files done isn't ready: the scene still warms up (see warmUpSceneThenReveal).
        loadingText.textContent = progress < 1 ? `Loading the Solar System… ${Math.round(progress * 100)}%` : 'Preparing the view…';
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
        // Keyboard visitors carry on from the menu's search; pointer visitors go to the scene.
        if (fromKeyboard) document.getElementById('menu-filter')?.focus({ preventScroll: true });
    };
    const art = overlay.querySelector('.splash-orbit');
    if (prefersReducedMotion.matches || !art) { arrive(); return; }

    // The world sits at the centre of the drawing (400,400 in a 680-wide view box, r = 150).
    const box = art.getBoundingClientRect();
    const w = window.innerWidth, h = window.innerHeight;
    const worldR = box.width * 150 / 680;
    const reach = Math.hypot(w, h) / 2 + 2; // a hole this wide from the centre clears every corner
    overlay.style.setProperty('--to-centre-x', `${(w / 2 - (box.left + box.width / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--to-centre-y', `${(h / 2 - (box.top + box.height / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--hole-start', `${worldR.toFixed(1)}px`);
    overlay.style.setProperty('--hole-end', `${reach.toFixed(1)}px`);
    overlay.style.setProperty('--fly-scale', (reach / worldR).toFixed(3));

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


const texLoader = new THREE.TextureLoader(loadingManager);

// LOADERS
const gltfLoader = new GLTFLoader(loadingManager);
const dracoLoader = new DRACOLoader();
// Served from our own public/draco/ (copied from three's examples) rather than a CDN, so
// models still load where third-party hosts are blocked, e.g. on school networks.
dracoLoader.setDecoderPath('draco/');
// No decoder type set, so DRACOLoader uses WebAssembly (several times faster than
// the JS decoder) wherever it's supported and falls back to JS elsewhere.
gltfLoader.setDRACOLoader(dracoLoader);

// Standalone loader for background lazy-loading (non-blocking for startup screen)
const lazyGltfLoader = new GLTFLoader();
lazyGltfLoader.setDRACOLoader(dracoLoader);

// Planet and moon maps are drawn on spheres a few hundred pixels across at most, so
// anything wider than this is downscaled once on load, before it reaches the GPU.
const MAX_BODY_TEXTURE_WIDTH = 2048;

function capTextureSize(texture) {
    const image = texture.image;
    if (!image || image.width <= MAX_BODY_TEXTURE_WIDTH) return;
    const scale = MAX_BODY_TEXTURE_WIDTH / image.width;
    const canvas = document.createElement('canvas');
    canvas.width = MAX_BODY_TEXTURE_WIDTH;
    canvas.height = Math.round(image.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    texture.image = canvas;
    texture.needsUpdate = true;
}

function loadBodyTexture(path) {
    return texLoader.load(fixPath(path), capTextureSize);
}

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000000);
camera.position.set(0, 400, 1200);
camera.lookAt(0, 0, 0);

const pixelRatio = window.devicePixelRatio;

// --- RENDERER ---
let renderer;
try {
    renderer = new THREE.WebGLRenderer({
        antialias: true, // Native hardware MSAA for smooth antialiased edges on models & orbits
        powerPreference: "high-performance"
    });
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

// Preloaded models (~9MB for Earth's system and Comet 67P, none of it in the opening view) wait
// until the scene is ready too, so on a slow connection they don't share bandwidth with the
// textures the opening view needs. They still arrive while the splash is up.
const preloadQueue = [];
let preloadsStarted = false;
function startPreloads() {
    if (preloadsStarted) return;
    preloadsStarted = true;
    preloadQueue.forEach(data => loadModelForItem(data, true));
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

// --- GPU WARM-UP ---
// The first frame that draws a new texture or material stalls while the texture
// uploads and the shader compiles, which shows as a stutter mid-flight. Do that
// work ahead of time instead: one texture per frame, shaders compiled in parallel.
const textureUploadQueue = [];

function collectTextures(root, out = new Set()) {
    root.traverse(child => {
        if (!child.material) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach(material => {
            for (const key in material) {
                const value = material[key];
                if (value && value.isTexture) out.add(value);
            }
            if (material.uniforms) {
                Object.values(material.uniforms).forEach(u => { if (u && u.value && u.value.isTexture) out.add(u.value); });
            }
        });
    });
    return out;
}

function uploadNextTexture() {
    const job = textureUploadQueue.shift();
    if (!job) return;
    try { renderer.initTexture(job.texture); } catch (e) { console.warn('Texture upload failed', e); }
    job.done();
}

// Resolves once the object's textures are on the GPU and its shaders are ready.
function prepareForGPU(object) {
    const uploads = [...collectTextures(object)].map(texture =>
        new Promise(done => textureUploadQueue.push({ texture, done })));
    return Promise.all(uploads)
        .then(() => renderer.compileAsync(object, camera, scene))
        .catch(e => console.warn('Shader warm-up failed', e));
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxDistance = 100000;

// --- LIGHTING ---
const AMBIENT_LIGHT_INTENSITY = 0.1;
const ambientLight = new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY);
scene.add(ambientLight);

const sunLight = new THREE.PointLight(0xffffff, 2.5, 0, 0);
sunLight.position.set(0, 0, 0);
sunLight.castShadow = false;
scene.add(sunLight);

// Inside a planet's system the Sun becomes this directional light, which casts shadows (see
// updateSunShadow). The map stays at 1024 to spare memory bandwidth on laptops and integrated
// GPUs; fitting it to the view is what keeps it sharp.
const SUN_SHADOW_MAP_SIZE = 1024;
const shadowLight = new THREE.DirectionalLight(0xffffff, 0);
shadowLight.castShadow = true;
shadowLight.shadow.mapSize.set(SUN_SHADOW_MAP_SIZE, SUN_SHADOW_MAP_SIZE);
// Edges filtered over a slightly wider patch: still crisp, but a shadow edge crossing a coarse
// facet (a tumbling comet's) fades across it instead of flipping texel by texel.
shadowLight.shadow.radius = 1.5;
scene.add(shadowLight);
scene.add(shadowLight.target);

// --- SELECTION SPOTLIGHT ---
// The selected spacecraft gets a light of its own, so its side away from the Sun isn't lost in
// the dark. A lander or rover is lit from above the local surface and casts its shadow on the
// ground. An orbiter gets a fill light on its side away from the Sun, never aimed at the body
// beneath it, so it lights and shadows only the craft (the Sun casts its shadow on the planet).
// It fades in when the camera arrives and out when the selection ends. It's in the scene from
// the start at zero intensity: adding a light later would change every material's shader and
// force them all to recompile.
// Only as bright as the craft needs: a faint fill when the Sun is on it (just enough to read its
// shaded side, and never enough to wash out the Sun's shadows), full strength on a night side or
// in a planet's shadow, where it's the only light the craft gets.
const SPOT_INTENSITY_DAY = 0.2;
const SPOT_INTENSITY_NIGHT = 2.5;
// Its shadows stay lighter than the Sun's: this strong at night, fading out entirely in sunlight,
// where the Sun's shadows are the only ones that should read.
const SPOT_SHADOW_STRENGTH = 0.5;
const SPOT_FADE_SECONDS = 0.6;
const SPOT_HEIGHT_RADII = 8;  // how far from the model the light sits, in model radii
// An orbiter's light points at least this far away from the body it orbits: wider than the
// cone's half-angle (~17°), so none of the beam can reach the surface.
const SPOT_CLEARANCE = Math.sin(THREE.MathUtils.degToRad(25));
const SURFACE_TYPES = new Set(['planet', 'moon', 'asteroid', 'comet']);
const CLOSED_BODY_TYPES = SURFACE_TYPES; // solid bodies, whose models are closed shapes
const selectionSpot = new THREE.SpotLight(0xfff2e0, 0, 0, Math.PI / 8, 0.7, 0);
// Shadows are on from the start for the same reason (turning them on later recompiles every
// material); the shadow map is only drawn while the light is up (see updateSelectionSpot).
selectionSpot.castShadow = true;
selectionSpot.shadow.mapSize.set(1024, 1024);
selectionSpot.shadow.intensity = SPOT_SHADOW_STRENGTH;
selectionSpot.shadow.autoUpdate = false;
let spotGoal = 0; // how bright the light should be for where the craft is now
scene.add(selectionSpot, selectionSpot.target);
let spotSubject = null;
const _spotUp = new THREE.Vector3();
const _spotParent = new THREE.Vector3();
const _spotToParent = new THREE.Vector3();
const _spotToSun = new THREE.Vector3();

if (DEBUG_SHADOWS) {
    shadowHelper = new THREE.CameraHelper(shadowLight.shadow.camera);
    scene.add(shadowHelper);
    lightHelper = new THREE.DirectionalLightHelper(shadowLight, 5);
    scene.add(lightHelper);
}

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
const _tempVec3 = new THREE.Vector3();
const _tempQuat = new THREE.Quaternion();
const _UP = new THREE.Vector3(0, 1, 0);
const _FORWARD = new THREE.Vector3(0, 0, -1);

// Orbital Math Scratchpads
const _keplerPos = new THREE.Vector3();
const _keplerAxisY = new THREE.Vector3(0, 1, 0);
const _keplerAxisX = new THREE.Vector3(1, 0, 0);

// Camera tracking scratchpads
const _currentPos = new THREE.Vector3();
const _pathRay = new THREE.Ray();
const _avoidanceWaypoint = new THREE.Vector3();
const _desiredLookPoint = new THREE.Vector3();
const _lookForwardPoint = new THREE.Vector3();
const _qStart = new THREE.Quaternion();
const _qEnd = new THREE.Quaternion();
const _idealCamPos = new THREE.Vector3();
const _targetWorldPos = new THREE.Vector3();
const _parentPos = new THREE.Vector3();
const _localOffset = new THREE.Vector3();
const _closestPointOnRay = new THREE.Vector3();
const _sunPos = new THREE.Vector3(0, 0, 0);
const _viewCenter = new THREE.Vector3();
const _vecToSun = new THREE.Vector3();
const _transitionDestPos = new THREE.Vector3();
const _transitionDestTarget = new THREE.Vector3();
const _lastTrackedPos = new THREE.Vector3();
const _lastTrackedQuat = new THREE.Quaternion();
const _trackQuat = new THREE.Quaternion();
const _trackTurn = new THREE.Quaternion();

// --- HELPER: PATH SANITIZER ---
function fixPath(path) {
    if (!path) return null;
    return path.startsWith('/') ? path.slice(1) : path;
}

// --- PHYSICS HELPER FUNCTIONS ---
function getDaysSinceJ2000(date) { return (date - J2000_DATE) / 86400000; }

function getKeplerPosition(orbitData, days) {
    if (!orbitData || orbitData.a === 0) return { x: 0, y: 0, z: 0 };
    let M = (orbitData.M0 + (orbitData.rate * days)) % 360;
    let M_rad = M * (Math.PI / 180);
    const e = orbitData.e;
    let E = M_rad;
    for (let k = 0; k < 5; k++) E = M_rad + e * Math.sin(E);

    const x_orb = orbitData.a * (Math.cos(E) - e);
    const z_orb = orbitData.a * Math.sqrt(1 - e * e) * Math.sin(E);

    // Fallback for simple 2D orbits that lack advanced parameters
    if (orbitData.node === undefined || orbitData.peri === undefined) {
        const i_rad = (orbitData.i || 0) * (Math.PI / 180);
        return { x: x_orb, y: z_orb * Math.sin(i_rad), z: z_orb * Math.cos(i_rad) };
    }

    // Full 3D Keplerian Rotation
    _keplerPos.set(x_orb, 0, z_orb);
    const peri_rad = orbitData.peri * (Math.PI / 180);
    const node_rad = orbitData.node * (Math.PI / 180);
    const inc_rad = orbitData.i * (Math.PI / 180);

    // Apply Euler rotations mapped to Three.js Y-Up coordinate space
    _keplerPos.applyAxisAngle(_keplerAxisY, -peri_rad);
    _keplerPos.applyAxisAngle(_keplerAxisX, inc_rad);
    _keplerPos.applyAxisAngle(_keplerAxisY, -node_rad);

    return { x: _keplerPos.x, y: _keplerPos.y, z: _keplerPos.z };
}

// --- TRAJECTORIES ---
// A mission in transit ("orbit_type": "trajectory") follows a cartoon of its real route: it flies
// past each waypoint's body on that waypoint's date, at the place this simulation shows the body
// then, just outside it. Between waypoints it loops round the Sun: the angle advances faster
// close in and slower far out (as a real orbit's does), with as many loops as the time allows
// (or "revs", if a waypoint gives it), through an optional farthest or nearest distance from
// the Sun ("extreme"). After the last waypoint it's on "arrival_orbit" round that body.
const TRAJECTORY_STEP_DAYS = 1;        // path resolution
const FLYBY_OFFSET_RADII = 2.5;        // passes this many of the body's radii outside its centre
const AU = 1000;                       // scene units per astronomical unit (Earth's orbit)

// Where a body is (its orbit about its parent, and its parent's about the Sun) on a given day.
function bodyPositionAt(name, days) {
    const obj = celestialMap.get(name);
    if (!obj) return new THREE.Vector3();
    const p = getKeplerPosition(obj.data.orbit, days);
    const pos = new THREE.Vector3(p.x, p.y, p.z);
    if (obj.data.parent && obj.data.parent !== 'Sun') pos.add(bodyPositionAt(obj.data.parent, days));
    return pos;
}

const dateToDays = date => getDaysSinceJ2000(new Date(`${date}T12:00:00Z`));

// Monotone cubic (Fritsch-Carlson) through (xs, ys): smooth, and never overshoots between
// knots, so an angle that only moves one way keeps moving that way and a turning point in the
// distance from the Sun stays a turning point.
function monotoneCubic(xs, ys) {
    const n = xs.length, d = [], m = new Array(n).fill(0);
    for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
    m[0] = d[0]; m[n - 1] = d[n - 2];
    for (let i = 1; i < n - 1; i++) {
        if (d[i - 1] * d[i] <= 0) { m[i] = 0; continue; }
        const w1 = 2 * (xs[i + 1] - xs[i]) + (xs[i] - xs[i - 1]), w2 = (xs[i + 1] - xs[i]) + 2 * (xs[i] - xs[i - 1]);
        m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]);
    }
    let i = 0; // calls come in increasing x, so the search carries on from the last interval
    return x => {
        if (x < xs[i]) i = 0;
        while (i < n - 2 && x > xs[i + 1]) i++;
        const h = xs[i + 1] - xs[i], t = THREE.MathUtils.clamp((x - xs[i]) / h, 0, 1), t2 = t * t, t3 = t2 * t;
        return (2 * t3 - 3 * t2 + 1) * ys[i] + (t3 - 2 * t2 + t) * h * m[i] + (-2 * t3 + 3 * t2) * ys[i + 1] + (t3 - t2) * h * m[i + 1];
    };
}

// Samples the whole cruise once, a point per TRAJECTORY_STEP_DAYS, cached on the object. Each leg
// is first laid out on its own (its loops, its farthest or nearest point, faster close to the
// Sun); control points from all of them are then joined by one smooth curve each for the angle
// round the Sun, the distance from it and the height, so the path runs on through every flyby
// without a corner or a jump.
function getTrajectoryPlan(obj) {
    if (obj.trajectoryPlan) return obj.trajectoryPlan;
    const spec = obj.data.trajectory || {};
    const waypoints = (spec.waypoints || []).map(w => ({ ...w, days: dateToDays(w.date) }));
    const arrival = spec.arrival_orbit && waypoints.length ? waypoints[waypoints.length - 1] : null;
    // Each waypoint's point: just outside its body, on the side away from the Sun; the last,
    // with an arrival orbit, exactly where that orbit has the craft on arrival.
    const points = waypoints.map((w, i) => {
        const body = bodyPositionAt(w.at, w.days);
        if (arrival && i === waypoints.length - 1) {
            const o = getKeplerPosition(spec.arrival_orbit, w.days);
            return body.add(new THREE.Vector3(o.x, o.y, o.z));
        }
        const radius = celestialMap.get(w.at)?.data.radius || 1;
        const out = new THREE.Vector3(body.x, 0, body.z).normalize();
        return body.addScaledVector(out, radius * FLYBY_OFFSET_RADII);
    });
    const knots = { days: [], angle: [], radius: [], height: [] };
    const legs = [];
    let angle = points.length ? Math.atan2(points[0].x, points[0].z) : 0; // unwrapped, falling
    for (let i = 0; i + 1 < waypoints.length; i++) {
        const A = points[i], B = points[i + 1], wB = waypoints[i + 1];
        const d0 = waypoints[i].days, span = wB.days - d0;
        const rA = Math.hypot(A.x, A.z), rB = Math.hypot(B.x, B.z);
        // Planets go round in the direction of falling atan2(x, z), so the craft does too.
        let turn = Math.atan2(A.x, A.z) - Math.atan2(B.x, B.z);
        while (turn < 0) turn += Math.PI * 2;
        if (span < 30 && turn > Math.PI * 11 / 6) turn -= Math.PI * 2; // a short hop slightly back, not a lap
        const bump = wB.extreme !== undefined ? wB.extreme - (rA + rB) / 2 : 0;
        const radiusAt = s => rA + (rB - rA) * s + bump * Math.sin(Math.PI * s);
        // Angular rate falls off with distance, as in an orbit: ~r^-1.5.
        const N = Math.max(8, Math.ceil(span / TRAJECTORY_STEP_DAYS));
        const cum = [0];
        for (let k = 1; k <= N; k++) cum.push(cum[k - 1] + Math.pow(radiusAt((k - 0.5) / N) / AU, -1.5));
        // Loops: as given, or as many as a real orbit at these distances would make in the time.
        const expected = (0.9856 * span / N) * cum[N] * (Math.PI / 180);
        const revs = wB.revs ?? Math.max(0, Math.round((expected - turn) / (Math.PI * 2)));
        const total = turn + revs * Math.PI * 2;
        // Control points: every eighth of the leg (the half-way one is the farthest or nearest point).
        for (let q = i === 0 ? 0 : 1; q <= 8; q++) {
            const s = q / 8, k = Math.round(s * N);
            knots.days.push(d0 + span * s);
            knots.angle.push(angle - total * (cum[k] / cum[N]));
            knots.radius.push(radiusAt(s));
            knots.height.push(A.y + (B.y - A.y) * s);
        }
        angle -= total;
        legs.push({ to: wB.label || wB.at, revs });
    }
    const samples = [];
    if (knots.days.length > 1) {
        const angleAt = monotoneCubic(knots.days, knots.angle), radiusOf = monotoneCubic(knots.days, knots.radius);
        const heightAt = monotoneCubic(knots.days, knots.height);
        const first = knots.days[0], last = knots.days[knots.days.length - 1];
        for (let d = first; ; d += TRAJECTORY_STEP_DAYS) {
            const day = Math.min(d, last), th = angleAt(day), r = radiusOf(day);
            samples.push({ days: day, pos: new THREE.Vector3(r * Math.sin(th), heightAt(day), r * Math.cos(th)) });
            if (day === last) break;
        }
    }
    obj.trajectoryPlan = { waypoints, points, samples, arrival, legs, arrivalOrbit: spec.arrival_orbit };
    return obj.trajectoryPlan;
}

// The craft's position on the day `days` (into `out`); true once it's in its arrival orbit.
function getTrajectoryPosition(obj, days, out) {
    const plan = getTrajectoryPlan(obj);
    const S = plan.samples;
    if (!S.length) return false;
    if (plan.arrival && days >= plan.arrival.days) {
        const o = getKeplerPosition(plan.arrivalOrbit, days);
        const host = celestialMap.get(plan.arrival.at);
        out.set(o.x, o.y, o.z);
        if (host) out.add(host.group.position);
        return true;
    }
    if (days <= S[0].days) { out.copy(S[0].pos); return false; }
    // Samples are evenly spaced in time within each leg, so a binary search finds the pair.
    let lo = 0, hi = S.length - 1;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (S[mid].days <= days) lo = mid; else hi = mid; }
    const a = S[lo], b = S[hi];
    out.copy(a.pos).lerp(b.pos, THREE.MathUtils.clamp((days - a.days) / ((b.days - a.days) || 1), 0, 1));
    return false;
}

// An orbit line's colour: the object's "orbit_color" if data.json gives one; a moon without one
// shares its planet's; otherwise a colour by type (a planet falls back to its own "color").
function getStandardizedOrbitColor(item) {
    if (!item) return '#888888';
    if (item.orbit_color) return item.orbit_color;

    if (item.type === 'planet') return item.color || '#4a90e2';
    if (item.type === 'moon') return celestialMap.get(item.parent)?.data.orbit_color || '#888888';
    if (item.type === 'comet') return '#ffffff';
    // Asteroids, missions and reference points: grey, lit light blue on hover or selection.
    return '#888888';
}

function getStandardizedOrbitOpacity(item) {
    if (!item) return 0.35;
    if (item.type === 'asteroid') return 0.18; // Subtle transparent grey for asteroids
    if (item.type === 'planet') return 0.65;   // Bright vivid planetary orbits
    if (item.type === 'comet') return 0.75;    // Bright glowing white cometary orbits
    if (item.type === 'moon') return 0.4;
    if (item.type === 'mission') return 0.35;  // Subtle grey for spacecraft until selected/hovered
    return 0.35;
}

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
    announce(`Showing ${count} ${holder.name.toLowerCase()} and their orbits`);
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
        updateOrbitLineHighlights();
    }
}

// The cruise drawn as a line through the sampled path, with a dot at each flyby.
function createTrajectoryLine(obj, color, opacity) {
    const plan = getTrajectoryPlan(obj);
    if (plan.samples.length < 2) return null;
    const geometry = new THREE.BufferGeometry().setFromPoints(plan.samples.map(s => s.pos));
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity, depthWrite: false }));
    line.userData = { baseColor: color, baseOpacity: opacity };
    const flybys = plan.points.slice(1, plan.arrival ? -1 : undefined);
    if (flybys.length) {
        const dots = new THREE.Points(new THREE.BufferGeometry().setFromPoints(flybys),
            new THREE.PointsMaterial({ color: new THREE.Color(color), size: 5, sizeAttenuation: false, transparent: true, opacity: Math.min(1, opacity * 2), depthWrite: false }));
        line.add(dots);
    }
    return line;
}

function createOrbitLine(orbitData, color = '#888888', opacity = 0.4) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    // Enough points that each straight segment stays within ORBIT_LINE_MAX_SAG of the true
    // ellipse: a fixed 128 left objects on big heliocentric orbits up to ~1 unit off their line.
    // Points are spread evenly in eccentric anomaly (evenly along the ellipse), not in time,
    // which bunched them at aphelion; each is still placed by getKeplerPosition, exactly as
    // the object itself moves.
    const e = orbitData.e || 0;
    const farthest = orbitData.a * (1 + e);
    const segments = THREE.MathUtils.clamp(
        Math.ceil(2 * Math.PI * Math.sqrt(farthest / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
    const points = [];
    for (let i = 0; i < segments; i++) {
        const E = (i / segments) * 2 * Math.PI;
        const meanAnomalyDeg = (E - e * Math.sin(E)) * (180 / Math.PI);
        const fakeDays = (meanAnomalyDeg - (orbitData.M0 || 0)) / orbitData.rate;
        const pos = getKeplerPosition(orbitData, fakeDays);
        points.push(new THREE.Vector3(pos.x, pos.y, pos.z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: opacity,
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: color, baseOpacity: opacity };
    return line;
}

function createLissajousLine(orbitData) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    const points = [];
    // Same sag limit as createOrbitLine; the path's flattest bend has radius ~6.25a.
    const segments = THREE.MathUtils.clamp(
        Math.ceil(2 * Math.PI * Math.sqrt(6.25 * orbitData.a / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
    const fullPeriodDays = 360 / orbitData.rate;
    for (let i = 0; i < segments; i++) {
        const fakeDays = (i / segments) * fullPeriodDays;
        const angle = (fakeDays * orbitData.rate) * (Math.PI / 180);
        const radius = orbitData.a;
        const y_off = radius * Math.sin(angle);
        const z_off = radius * 2.5 * Math.cos(angle);
        const x_off = radius * 0.5 * Math.sin(2 * angle);
        points.push(new THREE.Vector3(x_off, y_off, z_off));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#888888'),
        transparent: true,
        opacity: 0.35,
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: '#888888', baseOpacity: 0.35 };
    return line;
}

function latLonToVector3(lat, lon) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -(Math.sin(phi) * Math.cos(theta)),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
    ).normalize();
}

function getSuborbitalPosition(suborbitalData, parentRadius, days) {
    const duration = suborbitalData.duration || 0.05;
    const apogee = suborbitalData.apogee || 1.5;

    // Pure mathematical time evaluation
    const t = (days % duration) / duration;

    const v1 = latLonToVector3(suborbitalData.start_coords.lat, suborbitalData.start_coords.lon);
    const v2 = latLonToVector3(suborbitalData.end_coords.lat, suborbitalData.end_coords.lon);

    const startQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v1);
    const endQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v2);
    const midQuat = new THREE.Quaternion().slerpQuaternions(startQuat, endQuat, t);

    const vDir = new THREE.Vector3(0, 1, 0).applyQuaternion(midQuat);
    const h = parentRadius + (4 * apogee * t * (1 - t)); // Parabola height

    return vDir.multiplyScalar(h);
}

function createSuborbitalLine(data, parentRadius) {
    if (!data.suborbital) return null;
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
        const fakeDays = data.suborbital.duration * (i / segments);
        const pos = getSuborbitalPosition(data.suborbital, parentRadius, fakeDays);
        points.push(pos);
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineDashedMaterial({
        color: 0xffaa00,
        dashSize: 2,
        gapSize: 1,
        transparent: true,
        opacity: 0.6,
        depthWrite: false
    });
    const line = new THREE.Line(geometry, material);
    line.computeLineDistances();
    return line;
}

// --- VISUAL HELPERS ---
function createEarthNightLayer(radius, texturePath) {
    try {
        const geometry = new THREE.SphereGeometry(radius * 1.005, 64, 64);
        const nightTexture = loadBodyTexture(texturePath);
        nightTexture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.ShaderMaterial({
            uniforms: { tNight: { value: nightTexture } },
            vertexShader: `
                varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vUv = uv; vNormal = normalize(mat3(modelMatrix) * normal);
                vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos; }
            `,
            fragmentShader: `
                uniform sampler2D tNight; varying vec2 vUv; varying vec3 vNormal; varying vec3 vWorldPosition;
                void main() { vec3 sunDir = normalize(-vWorldPosition);
                float dotProd = dot(vNormal, sunDir); float alpha = 1.0 - smoothstep(-0.2, 0.2, dotProd);
                vec4 color = texture2D(tNight, vUv); gl_FragColor = vec4(color.rgb, alpha * color.a); }
            `,
            transparent: true, blending: THREE.AdditiveBlending, side: THREE.FrontSide, depthWrite: false
        });
        return new THREE.Mesh(geometry, material);
    } catch { return null; }
}

function createHologramMaterial() {
    return new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(0x00ffff) } },
        vertexShader: `
            varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vNormal = normalize(mat3(modelMatrix) * normal);
            vec4 worldPos = modelMatrix * vec4(position, 1.0); vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * viewMatrix * worldPos; }
        `,
        fragmentShader: `
            uniform float uTime; uniform vec3 uColor; varying vec3 vNormal; varying vec3 vWorldPosition;
            void main() { vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = dot(viewDir, vNormal); fresnel = 1.0 - abs(fresnel); fresnel = pow(fresnel, 2.0);
            float shimmer = sin(vWorldPosition.y * 0.5 + uTime * 2.0) * 0.5 + 0.5; 
            shimmer *= sin(vWorldPosition.z * 0.3 + uTime * 1.5) * 0.5 + 0.5; 
            vec3 finalColor = uColor + (fresnel * vec3(0.5, 0.8, 1.0)); 
            float alpha = 0.05 + (fresnel * 0.7) + (shimmer * 0.2); 
            gl_FragColor = vec4(finalColor, alpha); }
        `,
        transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
    });
}

function createGenericSatellite(item) {
    const satGroup = new THREE.Group();
    let bodyMat, panelMat;
    if (item.status === 'Planned') {
        const holoMat = createHologramMaterial();
        plannedMaterials.push(holoMat);
        bodyMat = holoMat; panelMat = holoMat;
    } else {
        bodyMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.3, metalness: 0.8 });
        panelMat = new THREE.MeshStandardMaterial({ color: 0x0044ff, roughness: 0.2, metalness: 0.5, emissive: 0x001133 });
    }
    const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), bodyMat);
    if (item.status !== 'Planned') { body.castShadow = false; body.receiveShadow = true; }
    satGroup.add(body);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 0.8), panelMat);
    if (item.status !== 'Planned') { panel.castShadow = false; panel.receiveShadow = true; }
    satGroup.add(panel);
    // Placeholder is 3 units wide; match the size the real model will load at.
    const s = item.type === 'mission' ? MISSION_MODEL_SIZE / 3 : (item.radius || 1) * 0.5;
    satGroup.scale.set(s, s, s);
    if (item.orbit_type === 'landed') satGroup.position.y = s / 2; // sit on the ground, not in it
    satGroup.traverse((c) => { c.userData = item; });
    return satGroup;
}

// --- LANDER LOGIC ---
// Where a lander touches the ground, in its own frame: its lowest points (leg ends, wheels), the
// one farthest out in each of six directions round it, in order. Cached per detail level.
const SUPPORT_SECTORS = 6;
function getLanderSupports(obj) {
    const level = obj && (obj.highLevel || obj.lowLevel);
    if (!level) return null;
    if (obj.supportsLevel === level) return obj.supports;
    obj.group.updateMatrixWorld(true);
    const toLander = new THREE.Matrix4().copy(obj.group.matrixWorld).invert();
    const m = new THREE.Matrix4(), v = new THREE.Vector3();
    const eachVertex = fn => level.traverse(c => {
        if (!c.isMesh || !c.geometry.attributes.position) return;
        m.multiplyMatrices(toLander, c.matrixWorld);
        const pos = c.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) fn(v.fromBufferAttribute(pos, i).applyMatrix4(m));
    });
    let bottom = Infinity, top = -Infinity;
    eachVertex(p => { bottom = Math.min(bottom, p.y); top = Math.max(top, p.y); });
    const floor = bottom + (top - bottom) * 0.03;
    const best = new Array(SUPPORT_SECTORS).fill(null);
    eachVertex(p => {
        if (p.y > floor) return;
        const r = Math.hypot(p.x, p.z);
        const k = Math.min(SUPPORT_SECTORS - 1, Math.floor(((Math.atan2(p.z, p.x) + Math.PI) / (2 * Math.PI)) * SUPPORT_SECTORS));
        if (!best[k] || r > best[k].r) best[k] = { r, point: new THREE.Vector3(p.x, bottom, p.z) };
    });
    const points = best.filter(Boolean).map(b => b.point);
    obj.supportsLevel = level;
    obj.supports = points.length < 3 ? null : {
        points,
        centre: points.reduce((c, p) => c.add(p), new THREE.Vector3()).divideScalar(points.length),
        reach: (top - bottom) + Math.max(...best.filter(Boolean).map(b => b.r)),
    };
    return obj.supports;
}

// Rests a lander on its supports: finds the ground under each and seats it on the plane through
// those points. Tilting it to the one triangle under its centre left feet in the air on uneven
// ground (Philae, on 67P). Works in `frame` (the parent's meshGroup); null keeps the simple placement.
const SETTLE_MAX_TILT = Math.cos(THREE.MathUtils.degToRad(35));
function settleOnSupports(landerObj, frame, surface, point, normal) {
    const supports = getLanderSupports(landerObj);
    if (!supports) return null;
    const lean = new THREE.Quaternion().setFromUnitVectors(_UP, normal);
    const down = normal.clone().negate().transformDirection(frame.matrixWorld);
    const ground = [];
    for (const s of supports.points) {
        const above = s.clone().applyQuaternion(lean).add(point).addScaledVector(normal, supports.reach);
        const h = new THREE.Raycaster(frame.localToWorld(above), down, 0, supports.reach * 3).intersectObject(surface, true)[0];
        if (!h) return null;
        ground.push(frame.worldToLocal(h.point.clone()));
    }
    // The plane through them: they run in order round the lander, so their summed cross
    // products about the centre give its normal.
    const centre = ground.reduce((c, g) => c.add(g), new THREE.Vector3()).divideScalar(ground.length);
    const n = new THREE.Vector3();
    for (let i = 0; i < ground.length; i++) {
        n.add(ground[i].clone().sub(centre).cross(ground[(i + 1) % ground.length].clone().sub(centre)));
    }
    if (n.lengthSq() < 1e-12) return null;
    n.normalize();
    if (n.dot(normal) < 0) n.negate();
    if (n.dot(normal) < SETTLE_MAX_TILT) return null; // implausibly steep: keep the simple placement
    const seat = supports.centre.clone().applyQuaternion(new THREE.Quaternion().setFromUnitVectors(_UP, n));
    return { position: centre.sub(seat), normal: n };
}

// Lands again the landers on `obj` (and `obj` itself, if it's one) that are already down: called
// when a detail level arrives, so they sit on the surface shown and on their own feet.
function relandLanders(obj) {
    celestialMap.forEach(child => {
        const d = child.data;
        if (d.orbit_type !== 'landed' || (child !== obj && d.parent !== obj.data.name)) return;
        const parent = celestialMap.get(d.parent);
        if (!parent || child.group.parent !== parent.meshGroup) return; // not down yet
        if (!pendingLanders.some(r => r.data === d)) pendingLanders.push({ group: child.group, data: d });
    });
    attemptToLand();
}

function attemptToLand() {
    for (let i = pendingLanders.length - 1; i >= 0; i--) {
        const request = pendingLanders[i];
        const parent = celestialMap.get(request.data.parent);

        // Land as soon as the parent's surface exists: straight away on a textured sphere, or once
        // a modelled body (Comet 67P) has loaded. The lander's own model isn't needed: it sits
        // on its base at the group origin whenever it arrives.
        const parentReady = parent && parent.mesh && parent.meshGroup
            && (!getEffectiveModel(parent.data) || parent.data.isModelLoaded);
        if (parentReady) {
            // The surface to land on: the parent's full-detail model once it has one (that's what
            // shows close up; its low-detail stand-in can be hundreds of triangles), else what it has.
            let targetMesh = null;
            (parent.highLevel || parent.mesh).traverse((child) => {
                if (child.isMesh && !targetMesh) targetMesh = child;
            });

            if (!targetMesh || !targetMesh.geometry) continue;

            parent.meshGroup.updateMatrixWorld(true);
            targetMesh.updateMatrixWorld(true);

            targetMesh.geometry.computeBoundingBox();
            const geoBox = targetMesh.geometry.boundingBox;
            const geoCenter = geoBox.getCenter(new THREE.Vector3());
            const geoSize = geoBox.getSize(new THREE.Vector3());

            // Drop in from above "landed_coords" (lat/lon on the parent; 45, 10 if not given).
            const lat = request.data.landed_coords ? request.data.landed_coords.lat : 45;
            const lon = request.data.landed_coords ? request.data.landed_coords.lon : 10;
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            const dir = new THREE.Vector3(
                -(Math.sin(phi) * Math.cos(theta)), Math.cos(phi), Math.sin(phi) * Math.sin(theta)
            ).normalize();
            const maxDim = Math.max(geoSize.x, geoSize.y, geoSize.z);

            // A ray can slip through the seams where a mesh's triangles meet, which on a sphere
            // crowd together at the poles (LUPEX, at -89°, landed 0.07 above the Moon). So a miss
            // is retried with the ray nudged by a fraction of a degree, a few millimetres on screen.
            const nudgeAxis = new THREE.Vector3().crossVectors(dir, Math.abs(dir.y) < 0.9 ? _UP : new THREE.Vector3(1, 0, 0)).normalize();
            let hit = null;
            for (let attempt = 0; attempt < 5 && !hit; attempt++) {
                const aim = attempt === 0 ? dir : dir.clone().applyAxisAngle(
                    nudgeAxis.clone().applyAxisAngle(dir, attempt * Math.PI / 2), 0.002);
                const startWorld = geoCenter.clone().addScaledVector(aim, maxDim * 2).applyMatrix4(targetMesh.matrixWorld);
                const dirWorld = aim.clone().negate().transformDirection(targetMesh.matrixWorld).normalize();
                hit = new THREE.Raycaster(startWorld, dirWorld).intersectObject(targetMesh, true)[0] || null;
            }

            let hitMeshGroupPoint, surfaceNormalLocal;
            const parentNormalMatrix = new THREE.Matrix3().getNormalMatrix(parent.meshGroup.matrixWorld);
            const invParentNormalMatrix = new THREE.Matrix3().copy(parentNormalMatrix).invert();

            if (hit) {
                hitMeshGroupPoint = parent.meshGroup.worldToLocal(hit.point.clone());
                const hitNormalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
                const worldNormal = hit.face.normal.clone().applyMatrix3(hitNormalMatrix).normalize();
                surfaceNormalLocal = worldNormal.applyMatrix3(invParentNormalMatrix).normalize();
                const settled = settleOnSupports(celestialMap.get(request.data.name), parent.meshGroup, targetMesh, hitMeshGroupPoint, surfaceNormalLocal);
                if (settled) {
                    hitMeshGroupPoint = settled.position;
                    surfaceNormalLocal = settled.normal;
                }
            } else {
                // Still no hit: stand it on the parent's bounding sphere along the same direction,
                // upright to it, rather than somewhere unrelated.
                if (!targetMesh.geometry.boundingSphere) targetMesh.geometry.computeBoundingSphere();
                const { center, radius } = targetMesh.geometry.boundingSphere;
                const surfaceWorld = center.clone().addScaledVector(dir, radius).applyMatrix4(targetMesh.matrixWorld);
                hitMeshGroupPoint = parent.meshGroup.worldToLocal(surfaceWorld);
                const worldNormal = dir.clone().transformDirection(targetMesh.matrixWorld);
                surfaceNormalLocal = worldNormal.applyMatrix3(invParentNormalMatrix).normalize();
                console.warn(`Couldn't find ${parent.data.name}'s surface under ${request.data.name}; placed it on the bounding sphere.`);
            }

            // Attached to the parent's meshGroup, so it stays put whichever detail level the parent shows.
            parent.meshGroup.add(request.group);
            request.group.position.copy(hitMeshGroupPoint);

            // Align lander Y-up vector with surface normal
            const landerUp = new THREE.Vector3(0, 1, 0);
            const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(landerUp, surfaceNormalLocal);
            request.group.quaternion.copy(targetQuaternion);

            // The model inside is already sized (MISSION_MODEL_SIZE), so the group stays unscaled.
            request.group.scale.set(1, 1, 1);

            request.group.updateMatrixWorld(true);
            parent.meshGroup.updateMatrixWorld(true);

            if (DEBUG_LANDING) console.log(`Landed ${request.data.name} on ${parent.data.name} at:`, hitMeshGroupPoint);
            pendingLanders.splice(i, 1);

            // Someone picked this lander before it had landed: fly there now.
            if (pendingLanderFocus && pendingLanderFocus.data === request.data) {
                const { mesh, data, options } = pendingLanderFocus;
                pendingLanderFocus = null;
                focusOnObject(mesh, data, options);
            }
        }
    }
}

const modelLoadQueue = [];
let activeModelLoads = 0;
const MAX_CONCURRENT_LOADS = 2;

function processModelLoadQueue() {
    if (activeModelLoads >= MAX_CONCURRENT_LOADS || modelLoadQueue.length === 0) return;

    const task = modelLoadQueue.shift();
    if (!task) return;

    activeModelLoads++;
    executeModelLoad(task.item, task.isPriority, () => {
        activeModelLoads--;
        processModelLoadQueue();
    });
}

function loadModelForItem(item, isPriority = false) {
    if (!item) return;
    if (item.isModelLoaded || item.isModelLoading) return;
    if (item.isModelQueued) {
        // Already waiting: a priority request (e.g. a lander's body someone is flying to)
        // jumps it to the front of the queue.
        const queued = modelLoadQueue.findIndex(task => task.item === item);
        if (isPriority && queued > 0) modelLoadQueue.unshift(...modelLoadQueue.splice(queued, 1));
        return;
    }

    const effectiveModel = getEffectiveModel(item);
    if (!effectiveModel) {
        item.isModelLoaded = true;
        return;
    }

    item.isModelQueued = true;

    if (isPriority) {
        modelLoadQueue.unshift({ item, isPriority: true });
    } else {
        modelLoadQueue.push({ item, isPriority: false });
    }

    processModelLoadQueue();
}

// glTF clearcoat/specular/ior/sheen make MeshPhysicalMaterial, whose shaders are much larger
// and come in more variants to compile. At the size spacecraft appear, the standard material
// looks the same. Shared source materials stay shared.
function simplifyMaterial(material, cache) {
    if (!material || !material.isMeshPhysicalMaterial) return material;
    if (!cache.has(material)) {
        const standard = new THREE.MeshStandardMaterial();
        standard.copy(material); // MeshStandardMaterial.copy takes only the standard properties
        if (material.transmission > 0) {
            // Glass: transmission would also force a second full-scene render every frame.
            // Plain transparency reads the same at this scale.
            standard.transparent = true;
            standard.opacity = Math.min(material.opacity, 0.35);
            standard.depthWrite = false;
        }
        cache.set(material, standard);
    }
    return cache.get(material);
}

function processModelMeshes(item, sceneRoot) {
    const simplified = new Map();
    sceneRoot.traverse((child) => {
        if (child.isMesh) {
            child.material = Array.isArray(child.material)
                ? child.material.map(m => simplifyMaterial(m, simplified))
                : simplifyMaterial(child.material, simplified);
            child.userData = item;
            child.castShadow = true;
            child.receiveShadow = true;
            // Solid bodies cast from their back faces: a sunlit face is then tested against the
            // far side of the body, not itself, so coarse facets don't flicker in and out of their
            // own shadow as a comet or asteroid tumbles, while lobes and ridges still shadow each
            // other. Spacecraft keep front faces: their thin panels have no back to cast from.
            if (CLOSED_BODY_TYPES.has(item.type)) {
                (Array.isArray(child.material) ? child.material : [child.material]).forEach(m => { m.shadowSide = THREE.BackSide; });
            }
            if (child.material) {
                if (child.material.map) child.material.map.colorSpace = THREE.SRGBColorSpace;
                if (child.material.metalness !== undefined) {
                    child.material.metalness = Math.min(child.material.metalness, 0.4);
                    child.material.roughness = Math.max(child.material.roughness, 0.6);
                }
            }
            if (item.status === 'Planned') {
                const holoMat = createHologramMaterial();
                child.material = holoMat;
                plannedMaterials.push(holoMat);
                child.castShadow = false; child.receiveShadow = false;
            }
        }
    });
}

// Area-weighted centroid of a model's triangles, in its world space. Very dense meshes are
// sampled so this stays cheap while a model is swapped in: one triangle at a random spot in
// each of N equal blocks, since taking every Nth triangle can follow patterns in the
// triangle order and skew the result.
const CENTROID_MAX_TRIANGLES = 100000;
function getAreaCentroid(root) {
    root.updateMatrixWorld(true);
    let triangles = 0;
    root.traverse(m => { if (m.isMesh) triangles += (m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count) / 3; });
    const step = Math.max(1, triangles / CENTROID_MAX_TRIANGLES);
    let seed = 1;
    const jitter = () => ((seed = (seed * 16807) % 2147483647) / 2147483647); // deterministic, so reloads match
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3();
    const sum = new THREE.Vector3();
    let totalArea = 0;
    root.traverse(m => {
        if (!m.isMesh) return;
        const pos = m.geometry.attributes.position, index = m.geometry.index;
        const count = (index ? index.count : pos.count) / 3;
        for (let block = 0; block < count; block += step) {
            const i = Math.min(count - 1, Math.floor(block + (step > 1 ? jitter() * step : 0))) * 3;
            a.fromBufferAttribute(pos, index ? index.getX(i) : i).applyMatrix4(m.matrixWorld);
            b.fromBufferAttribute(pos, index ? index.getX(i + 1) : i + 1).applyMatrix4(m.matrixWorld);
            c.fromBufferAttribute(pos, index ? index.getX(i + 2) : i + 2).applyMatrix4(m.matrixWorld);
            const area = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() / 2;
            sum.addScaledVector(a.add(b).add(c), area / 3);
            totalArea += area;
        }
    });
    return totalArea > 0 ? sum.divideScalar(totalArea) : null;
}

// Every mesh costs a draw call in each pass (the view and up to two shadow maps), and on slower
// CPUs that per-object overhead is what limits the frame rate, not the GPU. Some models arrive as
// hundreds of meshes sharing a few dozen materials (Perseverance: 252 meshes, 47 materials,
// every one skinned though nothing animates them). Since models never move their parts, bake each
// into the model's own frame (skinned ones in the pose they're drawn in) and merge those that
// share a material. The result draws exactly as before, in a fraction of the calls.
const FLATTEN_SKIP_ATTRIBUTES = new Set(['skinIndex', 'skinWeight']);
function flattenModel(model) {
    // Meshes can merge when they share a material, the flags that set how they're drawn, and the
    // same set of vertex attributes.
    const attributeSignature = geometry => Object.keys(geometry.attributes).filter(n => !FLATTEN_SKIP_ATTRIBUTES.has(n))
        .sort().map(n => n + geometry.attributes[n].itemSize).join();
    const mergeKey = (mesh, shown) => [mesh.material.uuid, mesh.castShadow, mesh.receiveShadow, mesh.renderOrder, shown,
        mesh.frustumCulled, mesh.layers.mask, attributeSignature(mesh.geometry)].join('|');
    let meshes = 0, skinned = false, unsupported = false;
    const keys = new Set();
    model.traverse(o => {
        if (o.isMesh) {
            meshes++;
            skinned ||= o.isSkinnedMesh;
            if (o.isInstancedMesh || o.isBatchedMesh || Array.isArray(o.material)
                || Object.keys(o.geometry.morphAttributes).length) unsupported = true;
            else keys.add(mergeKey(o, o.visible));
        } else if (o.isLight || o.isCamera || o.isLine || o.isPoints || o.isSprite) unsupported = true;
    });
    // Nothing to merge and nothing skinned (a model already flattened in its file, say): leave
    // it exactly as it came.
    if (unsupported || meshes < 2 || (keys.size === meshes && !skinned)) return;

    model.updateMatrixWorld(true);
    const toModel = new THREE.Matrix4().copy(model.matrixWorld).invert();
    const groups = new Map();
    const m = new THREE.Matrix4(), normalMatrix = new THREE.Matrix3();
    const skin = new THREE.Matrix4(), bone = new THREE.Matrix4(), v = new THREE.Vector3();
    model.traverse(mesh => {
        if (!mesh.isMesh) return;
        const src = mesh.geometry;
        const geometry = new THREE.BufferGeometry();
        for (const [name, attribute] of Object.entries(src.attributes)) {
            if (FLATTEN_SKIP_ATTRIBUTES.has(name)) continue;
            // Plain floats: merging needs matching array types, and some arrive quantised.
            const array = new Float32Array(attribute.count * attribute.itemSize);
            for (let i = 0; i < attribute.count; i++) {
                for (let c = 0; c < attribute.itemSize; c++) array[i * attribute.itemSize + c] = attribute.getComponent(i, c);
            }
            geometry.setAttribute(name, new THREE.BufferAttribute(array, attribute.itemSize));
        }
        const count = geometry.attributes.position.count;
        const index = src.index ? Array.from({ length: src.index.count }, (_, i) => src.index.getX(i))
            : Array.from({ length: count }, (_, i) => i);
        m.multiplyMatrices(toModel, mesh.matrixWorld);
        let shown = true;
        for (let p = mesh; p && p !== model; p = p.parent) shown &&= p.visible;

        if (mesh.isSkinnedMesh) {
            // As the vertex shader does: the skin matrix (bindMatrixInverse · Σ weight · bone ·
            // boneInverse · bindMatrix) moves positions, normals and tangents alike; then the
            // mesh's own transform (its normal matrix, for normals).
            const { bones, boneInverses } = mesh.skeleton;
            const skinIndex = src.attributes.skinIndex, skinWeight = src.attributes.skinWeight;
            const { position, normal, tangent } = geometry.attributes;
            normalMatrix.getNormalMatrix(m);
            for (let i = 0; i < count; i++) {
                skin.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                for (let k = 0; k < 4; k++) {
                    const w = skinWeight.getComponent(i, k);
                    if (!w) continue;
                    const b = skinIndex.getComponent(i, k);
                    bone.multiplyMatrices(bones[b].matrixWorld, boneInverses[b]);
                    for (let e = 0; e < 16; e++) skin.elements[e] += bone.elements[e] * w;
                }
                skin.premultiply(mesh.bindMatrixInverse).multiply(mesh.bindMatrix);
                v.fromBufferAttribute(position, i).applyMatrix4(skin).applyMatrix4(m);
                position.setXYZ(i, v.x, v.y, v.z);
                if (normal) {
                    v.fromBufferAttribute(normal, i).transformDirection(skin).applyMatrix3(normalMatrix).normalize();
                    normal.setXYZ(i, v.x, v.y, v.z);
                }
                if (tangent) {
                    v.set(tangent.getX(i), tangent.getY(i), tangent.getZ(i)).transformDirection(skin).transformDirection(m);
                    tangent.setXYZ(i, v.x, v.y, v.z);
                }
            }
        } else {
            geometry.applyMatrix4(m);
        }
        // A mirrored transform flips the triangles' winding; the renderer allows for it per
        // object, so once baked in the triangles have to be turned back.
        if (m.determinant() < 0) {
            for (let i = 0; i < index.length; i += 3) [index[i + 1], index[i + 2]] = [index[i + 2], index[i + 1]];
        }
        geometry.setIndex(index);

        const key = mergeKey(mesh, shown);
        if (!groups.has(key)) groups.set(key, { mesh, shown, geometries: [] });
        groups.get(key).geometries.push(geometry);
    });

    const merged = [];
    for (const { mesh, shown, geometries } of groups.values()) {
        const geometry = geometries.length > 1 ? mergeGeometries(geometries) : geometries[0];
        if (!geometry) return; // Incompatible after all: leave the model as it came
        const out = new THREE.Mesh(geometry, mesh.material);
        out.name = mesh.name;
        out.castShadow = mesh.castShadow; out.receiveShadow = mesh.receiveShadow;
        out.renderOrder = mesh.renderOrder; out.visible = shown;
        out.frustumCulled = mesh.frustumCulled; out.layers.mask = mesh.layers.mask;
        merged.push(out);
    }
    model.clear();
    merged.forEach(out => model.add(out));
}

// Centres a loaded glTF scene and scales it to unit size, ready to be one of the object's detail levels.
// It's centred on its area-weighted centroid, not its bounding box: a boom or panel on one side
// drags the box centre off the craft (Cassini's by 28% of its size), which left spacecraft and
// comets visibly off their orbit lines. Landers keep their base at the origin.
function buildModelLevel(item, effectiveModel, model) {
    flattenModel(model);
    const wrapper = new THREE.Group();
    wrapper.add(model);

    const box = new THREE.Box3().setFromObject(model);
    const center = getAreaCentroid(model) || box.getCenter(new THREE.Vector3());
    model.position.x = -center.x; model.position.z = -center.z;
    if (item.orbit_type === 'landed') { model.position.y = -box.min.y; }
    else { model.position.y = -center.y; }

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = item.type === 'mission' ? MISSION_MODEL_SIZE : (item.model_scale || 1.0);
    const finalScale = (1.0 / (maxDim || 1.0)) * targetSize;
    wrapper.scale.set(finalScale, finalScale, finalScale);
    if (item.model_offset) { wrapper.position.set(item.model_offset.x, item.model_offset.y, item.model_offset.z); }

    processModelMeshes(item, model);
    return wrapper;
}

// A model's low-detail version: "model_low" if given, else the file beside it named
// "<model>-low.glb" (loading falls back to the full model when there's no such file).
function getLowModelPath(item, effectiveModel) {
    const modelLowPath = (effectiveModel === item.model && item.model_low)
        || (effectiveModel ? effectiveModel.replace('.glb', '-low.glb') : null);
    return modelLowPath && modelLowPath !== effectiveModel ? modelLowPath : null;
}

// New models join the scene at most one per frame, so a busy system like Mars
// spreads its work out instead of stalling a single frame.
const revealQueue = [];

function nextRevealSlot() {
    return new Promise(resolve => revealQueue.push(resolve));
}

function revealNextModel() {
    if (revealQueue.length === 0) return;
    revealQueue.shift()();
}

// Geometry only uploads to the GPU the first time it's drawn, so a model swapped in
// mid-view would stall that frame. Draw it once off-screen first, into a 1px target
// with a single basic material, so the upload happens before anyone can see it.
const geometryWarmTarget = new THREE.WebGLRenderTarget(1, 1);
const geometryWarmScene = new THREE.Scene();
geometryWarmScene.overrideMaterial = new THREE.MeshBasicMaterial();
const geometryWarmCamera = new THREE.PerspectiveCamera();

function uploadGeometry(object) {
    const culled = [];
    object.traverse(child => {
        if (child.isMesh && child.frustumCulled) { child.frustumCulled = false; culled.push(child); }
    });
    geometryWarmScene.add(object);
    const previousTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(geometryWarmTarget);
    renderer.render(geometryWarmScene, geometryWarmCamera);
    renderer.setRenderTarget(previousTarget);
    geometryWarmScene.remove(object);
    culled.forEach(child => { child.frustumCulled = true; });
}

// Objects that have both detail levels loaded, checked every frame by updateModelDetail.
const detailSwitchables = new Set();
const _detailPos = new THREE.Vector3();
const _detailScale = new THREE.Vector3();

// On-screen diameter of a loaded model in CSS pixels, from its measured world-space size.
function getModelPixelDiameter(celestialObj) {
    if (!celestialObj.detailRoot || !celestialObj.detailRadius) return 0;
    celestialObj.detailRoot.getWorldPosition(_detailPos);
    celestialObj.detailRoot.getWorldScale(_detailScale);
    const radius = celestialObj.detailRadius * Math.max(_detailScale.x, _detailScale.y, _detailScale.z);
    const distance = camera.position.distanceTo(_detailPos);
    if (distance === 0) return Infinity;
    const fov = camera.fov * (Math.PI / 180);
    return (2 * radius / distance) * window.innerHeight / (2 * Math.tan(fov / 2));
}

function updateModelDetail() {
    detailSwitchables.forEach(obj => {
        if (!obj.group.visible) return;
        const px = getModelPixelDiameter(obj);
        const showingHigh = obj.highLevel.visible;
        const wantHigh = showingHigh ? px > HIGH_DETAIL_HIDE_PX : px > HIGH_DETAIL_SHOW_PX;
        if (wantHigh !== showingHigh) {
            obj.highLevel.visible = wantHigh;
            obj.lowLevel.visible = !wantHigh;
        }
    });
}

// Every object first gets its low-detail model: a system like Mars preloads all
// its missions at once, and full-detail models there run to ~1M vertices each.
// The full-detail model is loaded later, only for an object the visitor selects or
// that grows on screen, and shown once it's big enough for detail to matter.
async function executeModelLoad(item, isPriority, onDone) {
    const celestialObj = celestialMap.get(item.name);
    const effectiveModel = getEffectiveModel(item);
    if (!celestialObj || !effectiveModel) {
        item.isModelLoaded = true;
        if (onDone) onDone();
        return;
    }

    item.isModelLoading = true;
    const lowPath = getLowModelPath(item, effectiveModel);

    try {
        let gltf;
        let isLowDetail = Boolean(lowPath);
        try {
            gltf = await lazyGltfLoader.loadAsync(fixPath(lowPath || effectiveModel));
        } catch (e) {
            if (!lowPath) throw e;
            // No low-detail file for this model: use the full one.
            isLowDetail = false;
            gltf = await lazyGltfLoader.loadAsync(fixPath(effectiveModel));
        }

        const level = buildModelLevel(item, effectiveModel, gltf.scene);
        await prepareForGPU(level);
        await nextRevealSlot();
        uploadGeometry(level);

        // Holds the low-detail level now and the full-detail one later; updateModelDetail
        // chooses between them by on-screen size.
        const detailRoot = new THREE.Group();
        detailRoot.add(level);

        const visualContainer = celestialObj.mesh;
        for (let i = visualContainer.children.length - 1; i >= 0; i--) {
            const c = visualContainer.children[i];
            if (!c.isLine2 && !c.isLine) {
                visualContainer.remove(c);
            }
        }
        // Measured before parenting, so it's in the model's own units; landers get
        // rescaled when they touch down, so world scale is applied at measure time.
        const detailBox = new THREE.Box3().setFromObject(detailRoot);
        // Radius about the point the camera aims at (the origin on the orbit line, or a lander's
        // mid-height), which is no longer the box centre now models are centred on their centroid.
        const aimY = item.orbit_type === 'landed' ? detailBox.getCenter(new THREE.Vector3()).y : 0;
        celestialObj.detailRadius = Math.max(...[0, 1, 2, 3, 4, 5, 6, 7].map(i => Math.hypot(
            i & 1 ? detailBox.max.x : detailBox.min.x, (i & 2 ? detailBox.max.y : detailBox.min.y) - aimY, i & 4 ? detailBox.max.z : detailBox.min.z)));
        celestialObj.detailCenterY = detailBox.getCenter(new THREE.Vector3()).y;
        celestialObj.frameRadius = computeFrameRadius(detailRoot, detailBox, celestialObj.detailRadius, item.orbit_type === 'landed');
        visualContainer.add(detailRoot);
        celestialObj.detailRoot = detailRoot;
        celestialObj.lowLevel = level;
        item.hasHighDetail = !isLowDetail;
        item.isModelLoaded = true;
        relandLanders(celestialObj); // lands any waiting on it, and seats landed ones on their feet
        if (item.wantsHighDetail) requestHighDetail(item);
    } catch (err) {
        console.warn(`Failed to load model for ${item.name}`, err);
        item.isModelLoaded = true;
    }

    item.isModelLoading = false;
    if (onDone) onDone();
}

function requestHighDetail(item) {
    if (!item || item.hasHighDetail || item.isHighDetailLoading) return;
    const effectiveModel = getEffectiveModel(item);
    if (!effectiveModel) return;

    const celestialObj = celestialMap.get(item.name);
    if (!celestialObj || !celestialObj.detailRoot) {
        // Base model isn't in yet; upgrade as soon as it is.
        item.wantsHighDetail = true;
        return;
    }

    item.isHighDetailLoading = true;
    lazyGltfLoader.loadAsync(fixPath(effectiveModel))
        .then(gltf => {
            const level = buildModelLevel(item, effectiveModel, gltf.scene);
            return prepareForGPU(level)
                .then(nextRevealSlot)
                .then(() => {
                    uploadGeometry(level);
                    // Ready but hidden: updateModelDetail shows it once it's big enough on screen.
                    level.visible = false;
                    celestialObj.detailRoot.add(level);
                    celestialObj.highLevel = level;
                    detailSwitchables.add(celestialObj);
                    item.hasHighDetail = true;
                    relandLanders(celestialObj); // onto this surface, or on this lander's own feet
                });
        })
        .catch(err => console.warn(`Failed to load full-detail model for ${item.name}`, err))
        .finally(() => { item.isHighDetailLoading = false; });
}

function preloadSystemModels(systemName) {
    if (!systemName) return;
    celestialMap.forEach(obj => {
        if (getSystemRoot(obj.data.name) === systemName) {
            loadModelForItem(obj.data, false);
        }
    });
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
        fillSplashFacts(data);
        data.forEach(item => {
            const group = new THREE.Group();
            const meshGroup = new THREE.Group();
            if (item.tilt) {
                meshGroup.rotation.z = (item.tilt * Math.PI) / 180;
            }
            const visualContainer = new THREE.Group();
            if (item.orbit_type === 'suborbital') {
                visualContainer.rotation.x = Math.PI / 2;
            }
            visualContainer.userData = item;
            meshGroup.add(visualContainer);
            group.add(meshGroup);
            celestialMap.set(item.name, { group, meshGroup, mesh: visualContainer, data: item });

            // --- SUN ---
            if (item.type === 'star') {
                sunEffect = createSun({ radius: item.radius, renderer });
                visualContainer.add(sunEffect.group);
                objects.push(visualContainer);
            }
            // --- PLANETS, MOONS, MISSIONS & ASTEROIDS ---
            else {
                let mesh;
                if (item.type === 'reference_point') {
                    mesh = new THREE.AxesHelper(1); mesh.visible = false;
                } else if (item.texture) {
                    const tex = loadBodyTexture(item.texture);
                    tex.colorSpace = THREE.SRGBColorSpace;
                    // "segments": sphere smoothness where the default shows (Earth, seen close).
                    const segments = item.segments || (item.type === 'star' ? 48 : 32);
                    const geo = new THREE.SphereGeometry(item.radius, segments, segments);

                    let matParams = { map: tex, roughness: 1.0, metalness: 0.0 };
                    // "roughness_map": which parts shine (Earth's oceans); its own texture is reused.
                    if (item.roughness_map) {
                        matParams.roughnessMap = item.roughness_map === item.texture ? tex : loadBodyTexture(item.roughness_map);
                    }
                    // A closed sphere: cast from its back faces, like the modelled bodies (see processModelMeshes).
                    matParams.shadowSide = THREE.BackSide;
                    const mat = new THREE.MeshStandardMaterial(matParams);
                    if (item.night_texture && ENABLE_NIGHT_LIGHTS) {
                        const nightMesh = createEarthNightLayer(item.radius, item.night_texture);
                        if (nightMesh) visualContainer.add(nightMesh);
                    }
                    mesh = new THREE.Mesh(geo, mat);
                    mesh.userData = item;
                    mesh.castShadow = true; mesh.receiveShadow = true;
                } else {
                    // Create generic proxy placeholder mesh initially
                    const genericSat = createGenericSatellite(item);
                    visualContainer.add(genericSat);
                    mesh = genericSat;
                }
                if (item.texture || item.type === 'reference_point') {
                    visualContainer.add(mesh);
                }
                if (item.type !== 'reference_point') objects.push(visualContainer);
            }


            if (item.ring) {
                const innerRadius = item.radius * (item.ring.inner_radius || 1.4);
                const outerRadius = item.radius * (item.ring.outer_radius || 2.5);
                const ringGeo = new THREE.RingGeometry(innerRadius, outerRadius, 128);
                const pos = ringGeo.attributes.position;
                const v3 = new THREE.Vector3();
                for (let i = 0; i < pos.count; i++) {
                    v3.fromBufferAttribute(pos, i);
                    const len = Math.sqrt(v3.x * v3.x + v3.y * v3.y);
                    const u = (len - innerRadius) / (outerRadius - innerRadius);
                    ringGeo.attributes.uv.setXY(i, u, 0.5);
                }
                const ringTex = loadBodyTexture(item.ring.texture);
                ringTex.colorSpace = THREE.SRGBColorSpace;
                const ringMat = new THREE.MeshStandardMaterial({
                    map: ringTex, side: THREE.DoubleSide, transparent: true,
                    opacity: item.ring.opacity || 0.9, alphaTest: 0.1, roughness: 0.7,
                    emissive: new THREE.Color(0xffffff).multiplyScalar(item.ring.emissive || 0.1)
                });
                const ring = new THREE.Mesh(ringGeo, ringMat);
                ring.rotation.x = -Math.PI / 2;
                ring.receiveShadow = true; ring.castShadow = true;
                meshGroup.add(ring);
                // Kept for getSunOcclusion, which needs to know where a ring's shadow falls.
                celestialMap.get(item.name).ring = { mesh: ring, innerRadius, outerRadius, opacity: item.ring.opacity || 0.9 };
            }
        });

        // PASS 2: Link & Orbits & Landers
        celestialMap.forEach((obj) => {
            const { group, data } = obj;
            // Models load early for the Sun and any system data.json marks "preload" (Earth's, the
            // most visited; Comet 67P's, which Philae lands on); the rest as they come into view.
            // Decided here, once every object exists, so the order of data.json doesn't matter.
            if (getEffectiveModel(data)) {
                const system = getSystemRoot(data.name);
                if (system === 'Sun' || data.preload || celestialMap.get(system)?.data.preload) preloadQueue.push(data);
            }
            if (data.orbit_type === 'landed') {
                pendingLanders.push({ group: group, data: data });
            } else {
                scene.add(group);
                if (data.orbit_type === 'trajectory') {
                    // The cruise line, and (after arrival) the orbit round the arrival body: one
                    // shows at a time (see updateTrajectoryLines), as the craft's orbit line.
                    const color = getStandardizedOrbitColor(data), opacity = getStandardizedOrbitOpacity(data);
                    const cruise = createTrajectoryLine(obj, color, opacity);
                    if (cruise) scene.add(cruise);
                    const plan = getTrajectoryPlan(obj);
                    let arrived = null;
                    if (plan.arrival) {
                        arrived = createOrbitLine(plan.arrivalOrbit, color, opacity);
                        const host = celestialMap.get(plan.arrival.at);
                        if (arrived && host) host.group.add(arrived);
                    }
                    obj.trajectoryLines = { cruise, arrived };
                    obj.orbitLine = cruise || arrived;
                    if (DEBUG_LANDING) console.log(`${data.name} trajectory loops per leg:`, plan.legs);
                }
                else if (data.parent) {
                    let line = null;
                    if (data.orbit_type === 'lissajous') {
                        line = createLissajousLine(data.orbit);
                        const parent = celestialMap.get(data.parent);
                        if (parent && line) parent.mesh.add(line);
                    } else if (data.orbit_type === 'suborbital') {
                        const parent = celestialMap.get(data.parent);
                        const parentRad = parent ? (parent.data.radius || 1) : 1;
                        line = createSuborbitalLine(data, parentRad);
                        if (parent && line) parent.meshGroup.add(line);
                    } else {
                        if (data.show_orbit !== false) {
                            const orbitColor = getStandardizedOrbitColor(data);
                            const orbitOpacity = getStandardizedOrbitOpacity(data);
                            line = createOrbitLine(data.orbit, orbitColor, orbitOpacity);

                            if (line) {
                                const parent = celestialMap.get(data.parent);
                                if (parent) {
                                    parent.group.add(line);
                                } else {
                                    scene.add(line);
                                }
                            }
                        }
                    }
                    if (line) obj.orbitLine = line;
                }
            }
        });

        // PASS 3: Mark Parents for Optimization
        celestialMap.forEach((obj) => {
            if (obj.data.parent) {
                const parent = celestialMap.get(obj.data.parent);
                if (parent) parent.data.isParent = true;
            }
        });

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

// Radius to frame a model by. The bounding sphere is dominated by thin booms and panels
// (Cassini's magnetometer, TGO's arrays), which made those craft look small when selected;
// the RMS distance of the vertices from the centre follows where the bulk of the model is.
// Framing on the geometric mean of the two keeps sparse extremities from shrinking a model
// without over-zooming compact ones. Measured in the model's own units.
const FRAME_RADIUS_SAMPLES = 50000;
function computeFrameRadius(root, box, boundingRadius, landed) {
    // Measured about the point the camera aims at: the origin, or a lander's mid-height.
    const center = new THREE.Vector3(0, landed ? box.getCenter(new THREE.Vector3()).y : 0, 0);
    const v = new THREE.Vector3();
    let sum = 0, count = 0;
    root.updateMatrixWorld(true);
    root.traverse(mesh => {
        const pos = mesh.isMesh && mesh.geometry && mesh.geometry.attributes.position;
        if (!pos) return;
        const step = Math.max(1, Math.floor(pos.count / FRAME_RADIUS_SAMPLES));
        for (let i = 0; i < pos.count; i += step) {
            v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
            sum += v.distanceToSquared(center);
            count++;
        }
    });
    if (!count) return boundingRadius;
    const rms = Math.min(Math.sqrt(sum / count), boundingRadius);
    return Math.sqrt(rms * boundingRadius);
}

function isInScene(object) {
    for (let o = object; o; o = o.parent) if (o === scene) return true;
    return false;
}

function isSidebarBesideScene() {
    return window.innerWidth >= SIDEBAR_BESIDE_MIN_WIDTH;
}

// The part of the screen a selection is framed in: between the menu and the sidebar when the
// sidebar sits beside the scene, else the whole width (a sidebar over the scene is closed to look
// round, and centring beside the menu alone would push the selection under it). Selections always
// open the sidebar, so framing assumes it's there. The menu counts only while shown (cinematic
// mode hides it). Returns the span's left and right edges in CSS pixels.
function getSelectionViewSpan() {
    const w = window.innerWidth;
    if (!isSidebarBesideScene()) return { left: 0, right: w };
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('mission-menu');
    const menuShown = menu && !menu.classList.contains('ui-hidden');
    const left = menuShown ? menu.offsetLeft + menu.offsetWidth : 0;
    return { left, right: w - sidebar.offsetWidth };
}

function getSelectionViewWidth() {
    const span = getSelectionViewSpan();
    return span.right - span.left;
}

// Narrower of the vertical and horizontal fields of view (over the visible area), so framing
// fits portrait screens and the space between the menu and the sidebar.
function getMinFov() {
    const vfov = camera.fov * (Math.PI / 180);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * getSelectionViewWidth() / window.innerHeight);
    return Math.min(vfov, hfov);
}

// While the sidebar is open beside the scene, shift the view so the selection sits in the middle
// of the visible part (between the menu and the sidebar) rather than behind either. Eased so it
// glides with the sidebar and with the menu hiding or returning.
let viewOffsetX = 0;
function updateViewOffset(dt) {
    const sidebar = document.getElementById('sidebar');
    let goal = 0;
    if (sidebar.classList.contains('active') && isSidebarBesideScene()) {
        const span = getSelectionViewSpan();
        goal = window.innerWidth / 2 - (span.left + span.right) / 2;
    }
    viewOffsetX += (goal - viewOffsetX) * (1 - Math.exp(-dt * 6));
    if (goal === 0 && Math.abs(viewOffsetX) < 0.5) {
        viewOffsetX = 0;
        if (camera.view && camera.view.enabled) camera.clearViewOffset();
        return;
    }
    camera.setViewOffset(window.innerWidth, window.innerHeight, viewOffsetX, 0, window.innerWidth, window.innerHeight);
}

const _focusScale = new THREE.Vector3();
const _focusUp = new THREE.Vector3();

// World-space bounding radius of an object's model: measured once its model has loaded,
// estimated from MISSION_MODEL_SIZE before that.
function getVisualRadius(celestialObj) {
    if (!celestialObj) return 1;
    if (celestialObj.detailRoot && celestialObj.detailRadius) {
        celestialObj.detailRoot.getWorldScale(_focusScale);
        return celestialObj.detailRadius * Math.max(_focusScale.x, _focusScale.y, _focusScale.z);
    }
    if (celestialObj.data.type === 'mission') return MISSION_MODEL_SIZE * 0.6;
    return celestialObj.data.radius || 1;
}

// The point the camera (and spotlight) aim at: the object's origin, lifted to the middle of a
// lander's model, since landers sit on their base with the origin at ground level.
function getFocusPoint(mesh, out) {
    mesh.getWorldPosition(out);
    if (mesh.userData && mesh.userData.orbit_type === 'landed') {
        const obj = celestialMap.get(mesh.userData.name);
        const localHeight = obj && obj.detailRoot ? obj.detailCenterY : MISSION_MODEL_SIZE * 0.3;
        mesh.getWorldScale(_focusScale);
        _focusUp.set(0, 1, 0).transformDirection(mesh.matrixWorld); // lander's up = surface normal
        out.addScaledVector(_focusUp, localHeight * Math.max(_focusScale.x, _focusScale.y, _focusScale.z));
    }
    return out;
}

function calculateFocusDistance(object) {
    if (!object || !object.userData) return 20;
    if (object.userData.type === 'mission') {
        // Frame the model itself so it fills about MISSION_VIEW_FILL of the view.
        const obj = celestialMap.get(object.userData.name);
        let radius = getVisualRadius(obj);
        if (obj && obj.frameRadius && obj.detailRadius) radius *= obj.frameRadius / obj.detailRadius;
        return radius / Math.sin(MISSION_VIEW_FILL * getMinFov() / 2);
    }
    const obj = celestialMap.get(object.userData.name);
    if (!obj) return 20;
    return getSystemRadius(obj) / Math.sin(BODY_VIEW_FILL * getMinFov() / 2);
}

// Radius of a body plus everything orbiting it, about the body's centre.
function getSystemRadius(obj) {
    const data = obj.data;
    if (data.type === 'star') return (data.radius || 1) * SUN_FRAME_RADII;
    // Modelled bodies (asteroids, comets) use their measured size; data radius can be far off.
    let radius = obj.detailRoot ? getVisualRadius(obj) : (data.radius || 1);
    if (data.ring) radius = Math.max(radius, (data.radius || 1) * (data.ring.outer_radius || 2.5));
    const bodyRadius = radius;
    celestialMap.forEach(child => {
        const c = child.data;
        if (c.parent !== data.name) return;
        const childRadius = getVisualRadius(child);
        let reach = 0;
        if (c.orbit_type === 'landed') reach = bodyRadius + childRadius * 2;
        else if (c.orbit_type === 'suborbital') reach = bodyRadius + (c.suborbital?.apogee || 1.5) + childRadius;
        else if (c.orbit_type === 'lissajous') reach = (c.orbit?.a || 0) * 2.5 + childRadius; // widest axis of the path
        else if (c.orbit) reach = c.orbit.a * (1 + (c.orbit.e || 0)) + childRadius; // farthest point of the orbit
        radius = Math.max(radius, reach);
    });
    return radius;
}

// --- OPTIMIZATION ---
// The planet-level body an object belongs to: its own "system" if data.json gives one (the
// Earth-Sun Lagrange points orbit the Sun but belong with Earth), else the ancestor that
// orbits the Sun.
function getSystemRoot(objName) {
    if (!objName || objName === 'Sun') return 'Sun';

    const obj = celestialMap.get(objName);
    if (!obj || !obj.data) return 'Sun';

    if (obj.data.system) return obj.data.system;
    if (obj.data.parent === 'Sun') return objName;
    return getSystemRoot(obj.data.parent);
}

let activeSystem = 'Sun';

function updateVisibility() {
    activeSystem = 'Sun';
    if (selectedObject && selectedObject.userData) {
        activeSystem = getSystemRoot(selectedObject.userData.name);
    } else {
        let minDistance = Infinity;
        celestialMap.forEach(obj => {
            if (obj.data.parent === 'Sun' && obj.data.type !== 'mission') {
                const dist = camera.position.distanceTo(obj.group.position);
                if (dist < minDistance) {
                    minDistance = dist;
                    activeSystem = obj.data.name;
                }
            }
        });
    }

    celestialMap.forEach(obj => {
        const { group, data } = obj;
        const distance = camera.position.distanceTo(group.position);
        if (distance === 0) return;

        const objSystem = getSystemRoot(data.name);
        const fov = camera.fov * (Math.PI / 180);
        const radius = data.type === 'mission' ? getVisualRadius(obj) : (data.radius || 1);
        const projectedSize = radius / distance * window.innerHeight / (2 * Math.tan(fov / 2));
        const threshold = CULLING_THRESHOLD;

        let isLocalGroup = (objSystem === activeSystem && activeSystem !== 'Sun');

        if (data.type === 'mission' || data.type === 'asteroid' || data.type === 'comet') {
            if (obj.mesh === selectedObject) {
                group.visible = true;
            } else {
                group.visible = isLocalGroup || (projectedSize > threshold);
            }

            if ((isLocalGroup || projectedSize > 3) && !data.isModelLoaded) {
                loadModelForItem(data, false);
            }
            if (data.isModelLoaded && !data.hasHighDetail && group.visible
                && getModelPixelDiameter(obj) > HIGH_DETAIL_PREFETCH_PX) {
                requestHighDetail(data);
            }
        } else {
            group.visible = true;
        }
    });
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
const MENU_HOLDERS = [
    { name: 'Asteroids', icon: 'asteroid', after: 'Mars', holds: data => data.type === 'asteroid' },
    { name: 'Comets', icon: 'comet', after: 'Asteroids', holds: data => data.type === 'comet' },
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
        toggle.innerHTML = `<span class="menu-count" aria-hidden="true">${count}</span>${uiIcon('chevron', 'menu-chevron')}`;
        toggle.onclick = () => setGroupExpanded(li, toggle.getAttribute('aria-expanded') !== 'true');
        toggle.onmouseenter = toggle.onfocus = () => clearHoveredObject();
        head.append(row, toggle);
        li.appendChild(head);
    }

    function renderHolder(holder, members, parentList) {
        const li = document.createElement('li');
        li.className = 'menu-item menu-group--holder';
        li.dataset.name = holder.name;
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
        focusOnObject(obj.mesh, obj.data, { returnFocusTo: btn });
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

function setGroupExpanded(li, expanded, { remember = true } = {}) {
    const toggle = li.querySelector(':scope > .menu-group-head > .menu-toggle');
    const ul = li.querySelector(':scope > .menu-list');
    if (!toggle || !ul) return;
    toggle.setAttribute('aria-expanded', String(expanded));
    ul.hidden = !expanded;
    if (remember && !getMenuFilter()) {
        if (expanded) expandedGroups.add(li.dataset.name);
        else expandedGroups.delete(li.dataset.name);
    }
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
        const self = !needle || forced || normaliseForSearch(li.dataset.name).includes(needle);
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
    const group = li.closest('.menu-group');
    if (group && group !== li && !getMenuFilter()) setGroupExpanded(group, true);
    if (btn.offsetParent !== null) btn.scrollIntoView({ block: 'nearest' });
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function getIdealCameraPosition(targetMesh, time, outPos) {
    getFocusPoint(targetMesh, _targetWorldPos);
    if (isNaN(_targetWorldPos.x)) {
        outPos.copy(targetMesh.position);
        return;
    }
    const systemDistance = calculateFocusDistance(targetMesh);
    const breathe = Math.sin(time * 0.2) * (systemDistance * 0.02);
    const dist = systemDistance + breathe;

    if (targetMesh.userData.orbit_type === 'landed') {
        const parentName = targetMesh.userData.parent;
        const parentObj = celestialMap.get(parentName);
        _tempVec3.set(0, 1, 0);
        if (parentObj) {
            parentObj.mesh.getWorldPosition(_parentPos);
            _tempVec3.subVectors(_targetWorldPos, _parentPos).normalize();
        }
        const theta = Math.sin(time * 0.2) * 1.5;
        _localOffset.setFromSphericalCoords(dist, LANDER_VIEW_ANGLE, theta);
        _tempQuat.setFromUnitVectors(_UP, _tempVec3);
        _localOffset.applyQuaternion(_tempQuat);
        outPos.copy(_targetWorldPos).add(_localOffset);
    } else {
        const angle = time * CAMERA_ORBIT_SPEED;
        const offsetX = Math.sin(angle) * dist;
        const offsetZ = Math.cos(angle) * dist;
        const verticalAngle = time * 0.05;
        const offsetY = Math.sin(verticalAngle) * (dist * 0.2);
        outPos.set(
            _targetWorldPos.x + offsetX,
            _targetWorldPos.y + offsetY,
            _targetWorldPos.z + offsetZ
        );
    }
    keepOutsideBodies(outPos, targetMesh);
}

// --- FLIGHT PATHS ---
// Flights follow a smooth curve through waypoints that keep clear of every star, planet and
// moon. The first plan is a gentle arch; any stretch that still passes through a body gets a
// waypoint pushed out past that body's surface, and the curve is re-checked until it's clear.
const BODY_TYPES = ['star', 'planet', 'moon'];
const FLIGHT_CLIP_RADII = 1.08;      // closer than this many radii to a body's centre counts as clipping
const FLIGHT_WAYPOINT_RADII = 1.35;  // detour waypoints sit this many radii from the centre
const FLIGHT_SAMPLES = 160;
const FLIGHT_SEGMENT_RADII = 1.2;   // a straight stretch passing closer than this gets routed around
let flightCurve = null;
let flightArrivalTime = 0;
const _plannedDest = new THREE.Vector3();
const _destDrift = new THREE.Vector3();
const _bodyCenter = new THREE.Vector3();

// Everything a flight must not pass through: stars, planets and moons, plus every spacecraft,
// asteroid and comet in the scene, including the one being flown to (its camera position can
// be on its far side).
const MODEL_TYPES = ['mission', 'asteroid', 'comet'];
function getFlightObstacles() {
    const obstacles = [];
    celestialMap.forEach(obj => {
        if (BODY_TYPES.includes(obj.data.type)) {
            obstacles.push({ center: obj.group.getWorldPosition(new THREE.Vector3()), radius: obj.data.radius || 1 });
        } else if (MODEL_TYPES.includes(obj.data.type) && isInScene(obj.group)) {
            obstacles.push({ center: getFocusPoint(obj.mesh, new THREE.Vector3()), radius: getVisualRadius(obj) });
        }
    });
    return obstacles;
}

// Pushes a camera position out of any body it's inside (other than the one being viewed).
function keepOutsideBodies(pos, exceptMesh) {
    celestialMap.forEach(obj => {
        if (!BODY_TYPES.includes(obj.data.type) || obj.mesh === exceptMesh) return;
        obj.group.getWorldPosition(_bodyCenter);
        const minDist = (obj.data.radius || 1) * FLIGHT_CLIP_RADII;
        const d = pos.distanceTo(_bodyCenter);
        if (d < minDist && d > 1e-6) pos.sub(_bodyCenter).multiplyScalar(minDist / d).add(_bodyCenter);
    });
}

function findFirstClip(curve, obstacles) {
    const p = new THREE.Vector3();
    for (let i = 1; i < FLIGHT_SAMPLES; i++) {
        curve.getPoint(i / FLIGHT_SAMPLES, p);
        for (const o of obstacles) {
            if (p.distanceTo(o.center) < o.radius * FLIGHT_CLIP_RADII) return o;
        }
    }
    return null;
}

// Closest approach of the straight segment a-b to point c, and whether it falls between the ends.
function segmentApproach(a, b, c) {
    const ab = new THREE.Vector3().subVectors(b, a);
    const t = THREE.MathUtils.clamp(new THREE.Vector3().subVectors(c, a).dot(ab) / Math.max(ab.lengthSq(), 1e-12), 0, 1);
    return { distance: a.clone().addScaledVector(ab, t).distanceTo(c), interior: t > 0 && t < 1 };
}

// Waypoints on a great circle around a body, from a's side to b's side, at most 45 degrees apart.
function arcAround(a, b, o, waypointRadii, fallbackAxis) {
    const da = new THREE.Vector3().subVectors(a, o.center).normalize();
    const db = new THREE.Vector3().subVectors(b, o.center).normalize();
    const angle = da.angleTo(db);
    const axis = new THREE.Vector3().crossVectors(da, db);
    if (axis.lengthSq() < 1e-8) { // directly opposite: pick any way round
        axis.crossVectors(da, fallbackAxis);
        if (axis.lengthSq() < 1e-8) axis.crossVectors(da, new THREE.Vector3(1, 0, 0));
    }
    axis.normalize();
    const steps = Math.max(2, Math.ceil(angle / (Math.PI / 4)));
    const points = [];
    for (let k = 1; k < steps; k++) {
        points.push(da.clone().applyAxisAngle(axis, angle * k / steps).multiplyScalar(o.radius * waypointRadii).add(o.center));
    }
    return points;
}

function routeAround(points, obstacles, waypointRadii, fallbackAxis) {
    // Lift any intermediate waypoint that sits inside a body out to the clearance radius.
    for (let i = 1; i < points.length - 1; i++) {
        for (const o of obstacles) {
            const d = points[i].distanceTo(o.center);
            if (d < o.radius * waypointRadii) {
                const out = d > 1e-6 ? points[i].clone().sub(o.center) : fallbackAxis.clone();
                points[i].copy(out.normalize().multiplyScalar(o.radius * waypointRadii).add(o.center));
            }
        }
    }
    // Replace any straight stretch that cuts through a body with a detour around it; repeat, since
    // a detour can itself pass another body.
    for (let pass = 0; pass < 4; pass++) {
        let changed = false;
        const next = [points[0]];
        for (let i = 1; i < points.length; i++) {
            const a = next[next.length - 1], b = points[i];
            const hit = obstacles.find(o => {
                const { distance, interior } = segmentApproach(a, b, o.center);
                return interior && distance < o.radius * FLIGHT_SEGMENT_RADII;
            });
            if (hit) { next.push(...arcAround(a, b, hit, waypointRadii, fallbackAxis)); changed = true; }
            next.push(b);
        }
        points = next;
        if (!changed) break;
    }
    return points;
}

function planFlightPath(from, to) {
    // An end can sit inside an obstacle's bounding sphere, e.g. the camera just above Philae is
    // inside irregular Comet 67P's. Rather than ignore that obstacle, shrink it to just inside
    // the nearer end, so the path still can't cut in towards the body.
    const obstacles = getFlightObstacles().map(o => {
        const nearestEnd = Math.min(from.distanceTo(o.center), to.distanceTo(o.center));
        return nearestEnd > o.radius * FLIGHT_CLIP_RADII ? o : { center: o.center, radius: nearestEnd / (FLIGHT_CLIP_RADII * 1.02) };
    });

    const travel = new THREE.Vector3().subVectors(to, from);
    const dist = travel.length();
    const dir = travel.clone().normalize();
    const arch = new THREE.Vector3(0, 1, 0);
    if (Math.abs(dir.dot(_UP)) > 0.9) arch.set(0, 0, 1);
    else arch.crossVectors(dir, _UP).cross(dir).normalize();
    const mid = from.clone().lerp(to, 0.5).addScaledVector(arch, Math.min(dist * 0.15, 800));

    // If the smoothed curve still grazes a body between waypoints, widen the detours and retry.
    let curve;
    for (const radii of [FLIGHT_WAYPOINT_RADII, FLIGHT_WAYPOINT_RADII * 1.25, FLIGHT_WAYPOINT_RADII * 1.6]) {
        const points = routeAround([from.clone(), mid.clone(), to.clone()], obstacles, radii, arch);
        curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
        if (!findFirstClip(curve, obstacles)) break;
    }
    return curve;
}

function estimateFlightDuration(travelDist) {
    const flightScale = prefersReducedMotion.matches ? 0 : (cinematicActive ? CINEMATIC_FLIGHT_SCALE : USER_FLIGHT_SCALE);
    return Math.max((1.5 + Math.min(travelDist / 15000, 1.0) * 2.0) * flightScale, MIN_FLIGHT_DURATION);
}

// arrivalTime: the motion-clock time destPos was computed for (the camera's slow orbit around
// its target keeps moving, so flights aim for where it will be on arrival and hold that aim).
function initiateTransition(destPos, arrivalTime = null) {
    transitionStartPos.copy(camera.position);
    transitionStartTarget.copy(controls.target);

    flightCurve = planFlightPath(camera.position, destPos);
    _plannedDest.copy(destPos);

    isTransitioning = true;
    transitionProgress = 0;
    transitionDuration = estimateFlightDuration(flightCurve.getLength());
    flightArrivalTime = arrivalTime ?? motionTime + transitionDuration;

    controls.enabled = false;
}

// Visitors can't steer mid-flight (OrbitControls is off), so any grab, scroll or
// Escape during a flight fast-forwards it to arrive within a moment.
function hurryTransition() {
    if (!isTransitioning) return;
    const remaining = 1 - transitionProgress;
    if (remaining <= 0) return;
    transitionDuration = Math.min(transitionDuration, HURRY_FLIGHT_SECONDS / remaining);
}

// How much of the Sun a point can't see: 0 in sunlight, 1 in the shadow of a planet, moon,
// asteroid or comet (edges soft, over 10% of the body's radius), or as dark as a planet's ring
// is opaque in the shadow of its rings. So a craft on the Moon's day side
// during a lunar eclipse counts as in the dark, like one on the night side. `toSun` is the unit
// vector to the Sun; `skip` is a body to ignore, such as the one a lander stands on, whose own
// night side the caller already judges from the ground's tilt.
const _occCentre = new THREE.Vector3();
const _occOffset = new THREE.Vector3();
const _occRingInverse = new THREE.Matrix4();
const _occRingPoint = new THREE.Vector3();
const _occRingDir = new THREE.Vector3();
function getSunOcclusion(point, toSun, skip = null) {
    let occlusion = 0;
    celestialMap.forEach(obj => {
        if (obj.ring) {
            // Look along the sunward ray in the ring's own frame (its disc is the z = 0 plane)
            // for where it crosses the disc, and whether that lands on the ring.
            const { mesh, innerRadius, outerRadius, opacity } = obj.ring;
            mesh.updateWorldMatrix(true, false);
            _occRingInverse.copy(mesh.matrixWorld).invert();
            _occRingPoint.copy(point).applyMatrix4(_occRingInverse);
            _occRingDir.copy(toSun).transformDirection(_occRingInverse);
            if (Math.abs(_occRingDir.z) > 1e-6) {
                const t = -_occRingPoint.z / _occRingDir.z;
                if (t > 1e-6) { // the disc lies between the point and the Sun
                    const hit = Math.hypot(_occRingPoint.x + t * _occRingDir.x, _occRingPoint.y + t * _occRingDir.y);
                    const edge = (outerRadius - innerRadius) * 0.02;
                    const on = THREE.MathUtils.smoothstep(hit, innerRadius - edge, innerRadius + edge)
                        * (1 - THREE.MathUtils.smoothstep(hit, outerRadius - edge, outerRadius + edge));
                    occlusion = Math.max(occlusion, opacity * on);
                }
            }
        }
        if (obj === skip || !SURFACE_TYPES.has(obj.data.type)) return;
        obj.group.getWorldPosition(_occCentre);
        _occOffset.subVectors(_occCentre, point);
        const along = _occOffset.dot(toSun);
        if (along <= 0) return; // not between the point and the Sun
        const radius = getVisualRadius(obj);
        const across = _occOffset.addScaledVector(toSun, -along).length();
        occlusion = Math.max(occlusion, 1 - THREE.MathUtils.smoothstep(across, radius * 0.95, radius * 1.05));
    });
    return occlusion;
}

function updateSelectionSpot(dt) {
    // Planned missions are holograms that glow by themselves, so they get no light.
    const arrived = selectedObject && isTracking && !isTransitioning
        && selectedObject.userData && selectedObject.userData.type === 'mission'
        && statusTone(selectedObject.userData.status) !== 'planned';
    const wanted = arrived ? selectedObject : null;
    // Only move to a new subject while dark, so the light never visibly jumps.
    if (wanted !== spotSubject && selectionSpot.intensity < 0.02) spotSubject = wanted;
    const goal = wanted && wanted === spotSubject ? spotGoal : 0;
    selectionSpot.intensity += (goal - selectionSpot.intensity) * (1 - Math.exp(-dt * 3 / SPOT_FADE_SECONDS));
    if (!spotSubject) return;

    getFocusPoint(spotSubject, selectionSpot.target.position);
    const parent = celestialMap.get(spotSubject.userData.parent);
    if (parent) parent.group.getWorldPosition(_spotParent);
    _spotToSun.subVectors(_sunPos, selectionSpot.target.position).normalize();
    if (spotSubject.userData.orbit_type === 'landed' && parent) {
        // A lander: from straight above, away from the body it sits on. Brightest at night,
        // fading to a faint fill as its ground turns to face the Sun, and full strength again
        // when another body (Earth in a lunar eclipse) shades it.
        _spotUp.subVectors(selectionSpot.target.position, _spotParent).normalize();
        let daylight = THREE.MathUtils.smoothstep(_spotUp.dot(_spotToSun), -0.1, 0.3);
        daylight *= 1 - getSunOcclusion(selectionSpot.target.position, _spotToSun, parent);
        spotGoal = THREE.MathUtils.lerp(SPOT_INTENSITY_NIGHT, SPOT_INTENSITY_DAY, daylight);
    } else {
        // An orbiter: a faint fill in sunlight, full strength inside a body's shadow.
        spotGoal = THREE.MathUtils.lerp(SPOT_INTENSITY_DAY, SPOT_INTENSITY_NIGHT,
            getSunOcclusion(selectionSpot.target.position, _spotToSun));
        // An orbiter: from its side away from the Sun...
        _spotUp.subVectors(selectionSpot.target.position, _sunPos).normalize();
        if (parent && SURFACE_TYPES.has(parent.data.type)) {
            // ...but with the beam turned at least SPOT_CLEARANCE away from the body below. The
            // light sits on the body's side of the craft, shining outward past it.
            _spotToParent.subVectors(_spotParent, selectionSpot.target.position).normalize();
            const along = _spotUp.dot(_spotToParent);
            if (along < SPOT_CLEARANCE) {
                _spotUp.addScaledVector(_spotToParent, -along); // the part across the body's direction
                if (_spotUp.lengthSq() < 1e-8) _spotUp.set(1, 0, 0).cross(_spotToParent);
                _spotUp.normalize().multiplyScalar(Math.sqrt(1 - SPOT_CLEARANCE ** 2))
                    .addScaledVector(_spotToParent, SPOT_CLEARANCE);
            }
        }
    }
    const radius = getVisualRadius(celestialMap.get(spotSubject.userData.name));
    const height = radius * SPOT_HEIGHT_RADII;
    selectionSpot.position.copy(selectionSpot.target.position).addScaledVector(_spotUp, height);
    selectionSpot.angle = Math.atan((radius * 2.5) / height); // a pool a little wider than the model
    selectionSpot.target.updateMatrixWorld();

    // Its shadow reaches just past the craft: onto the ground under a lander, or across an
    // orbiter's own parts.
    const darkness = THREE.MathUtils.clamp((spotGoal - SPOT_INTENSITY_DAY) / (SPOT_INTENSITY_NIGHT - SPOT_INTENSITY_DAY), 0, 1);
    selectionSpot.shadow.intensity = SPOT_SHADOW_STRENGTH * darkness;
    const lit = selectionSpot.intensity > 0.01 && darkness > 0.01; // no shadow to draw in sunlight
    selectionSpot.shadow.autoUpdate = lit;
    if (lit) {
        const shadowCamera = selectionSpot.shadow.camera;
        shadowCamera.near = height * 0.5;
        shadowCamera.far = height + radius * 4;
        shadowCamera.updateProjectionMatrix();
        // About one shadow texel across the pool: the offset that stops surfaces shadowing themselves.
        selectionSpot.shadow.normalBias = (radius * 5) / selectionSpot.shadow.mapSize.x;
        selectionSpot.shadow.bias = -0.0001;
    }
}

// --- SUN SHADOWS ---
// Inside a planet's system the Sun is a directional light casting shadows: planets, rings,
// moons and spacecraft all shadow one another. The shadow map covers what's on screen around
// the view centre, not the whole system, so a lander's shadow is as sharp as a moon's; it moves
// only in whole texels and resizes in steps, so shadow edges don't crawl as the camera orbits.
const SUN_SHADOW_SIZE_STEP = 2 ** 0.25; // the covered area changes in ~19% steps
// Within this many of a system's radii, the Sun's point light hands over to the shadow-casting
// light. The handover takes a fixed time, not a band of distance: flights cross that range fast,
// and shadows should deepen in, not snap on. Both lights shine from the Sun, so the blend only
// changes how dark the shadows are.
const SUN_SHADOW_REACH = 36;
const SUN_SHADOW_FADE_S = 1;
const SUN_POINT_INTENSITY = 2.5;
const SUN_SHADOW_INTENSITY = 3;
let sunShadowBlend = 0;
const _shadowBasis = new THREE.Matrix4();
const _shadowX = new THREE.Vector3();
const _shadowY = new THREE.Vector3();
const _shadowZ = new THREE.Vector3();
const _ORIGIN = new THREE.Vector3();
let shadowSystem = null;
let shadowSystemReach = 0;

function updateSunShadow(dt) {
    const systemObj = activeSystem !== 'Sun' ? celestialMap.get(activeSystem) : null;
    const baseRad = systemObj ? (systemObj.data.radius || 1) : 1;
    const inReach = systemObj
        && camera.position.distanceTo(systemObj.group.position) < Math.max(baseRad * SUN_SHADOW_REACH, 180);
    // A new system starts dark: the light is aimed at it, so it can't keep lighting the last one.
    if (systemObj !== shadowSystem) {
        sunShadowBlend = 0;
        shadowSystem = systemObj;
        shadowSystemReach = systemObj ? getSystemRadius(systemObj) : 0;
    }
    const step = dt / SUN_SHADOW_FADE_S;
    sunShadowBlend = THREE.MathUtils.clamp(sunShadowBlend + (inReach ? step : -step), 0, 1);
    const blend = THREE.MathUtils.smoothstep(sunShadowBlend, 0, 1);
    if (!systemObj || blend <= 0) {
        sunLight.intensity = SUN_POINT_INTENSITY;
        shadowLight.intensity = 0;
        shadowLight.shadow.autoUpdate = false; // Light is off: skip the shadow pass
        return;
    }
    sunLight.intensity = SUN_POINT_INTENSITY * (1 - blend);
    shadowLight.intensity = SUN_SHADOW_INTENSITY * blend;
    shadowLight.shadow.autoUpdate = true;

    // Cover the view at the target's distance (the circle round the screen, as the map's square
    // turns with the Sun's direction), never less than the object on show.
    const viewDistance = camera.position.distanceTo(controls.target);
    const halfHeight = viewDistance * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    let half = Math.hypot(halfHeight, halfHeight * camera.aspect) * 1.05;
    const shown = selectedObject && selectedObject.userData ? celestialMap.get(selectedObject.userData.name) : null;
    if (shown) half = Math.max(half, getVisualRadius(shown) * 1.5);
    half = Math.max(0.05, Math.min(half, shadowSystemReach * 1.2));
    half = SUN_SHADOW_SIZE_STEP ** Math.ceil(Math.log(half) / Math.log(SUN_SHADOW_SIZE_STEP));
    const texel = (2 * half) / SUN_SHADOW_MAP_SIZE;

    // Snap the centre to whole texels along the shadow camera's own axes (as it will be aimed:
    // looking back along the Sun's direction, with world up as up).
    _vecToSun.subVectors(_sunPos, controls.target).normalize();
    _shadowBasis.lookAt(_vecToSun, _ORIGIN, _UP).extractBasis(_shadowX, _shadowY, _shadowZ);
    _viewCenter.copy(controls.target);
    const sx = _viewCenter.dot(_shadowX), sy = _viewCenter.dot(_shadowY);
    _viewCenter.addScaledVector(_shadowX, Math.round(sx / texel) * texel - sx)
        .addScaledVector(_shadowY, Math.round(sy / texel) * texel - sy);

    // Deep enough to take in anything in the system between the Sun and the view (a moon
    // eclipsing its planet) and no deeper, keeping depth precise enough for small craft.
    const toward = shadowSystemReach + _viewCenter.distanceTo(systemObj.group.position) + half;
    shadowLight.position.copy(_viewCenter).addScaledVector(_vecToSun, toward);
    shadowLight.target.position.copy(_viewCenter);
    const shadowCamera = shadowLight.shadow.camera;
    shadowCamera.left = shadowCamera.bottom = -half;
    shadowCamera.right = shadowCamera.top = half;
    shadowCamera.near = half * 0.5;
    shadowCamera.far = toward + Math.max(half, baseRad) * 2;
    shadowCamera.updateProjectionMatrix();
    // Offsets that stop surfaces shadowing themselves, about a texel in size: enough to prevent
    // acne, small enough that a lander's shadow still meets its feet.
    shadowLight.shadow.normalBias = texel;
    shadowLight.shadow.bias = -(texel * 0.5) / (shadowCamera.far - shadowCamera.near);

    if (shadowHelper) shadowHelper.update();
    if (lightHelper) lightHelper.update();
}

function releaseUserControl() {
    userHasControl = false;
    controls.autoRotate = false;
    clearTimeout(autoOrbitResumeTimer);
}

function focusOnObject(mesh, data, { returnFocusTo = null } = {}) {
    sidebarReturnFocus = returnFocusTo;
    pendingLanderFocus = null;
    clearShownHolder();

    // A lander whose body hasn't loaded yet is parked off-scene (at the Sun's centre). Show its
    // details now, make sure its body loads, and fly there once it lands (see attemptToLand).
    if (data && data.orbit_type === 'landed' && !isInScene(mesh)) {
        pendingLanderFocus = { mesh, data, options: { returnFocusTo } };
        const parent = celestialMap.get(data.parent);
        if (parent) loadModelForItem(parent.data, true);
        if (!data.isModelLoaded) loadModelForItem(data, true);
        attemptToLand();
        if (pendingLanderFocus) {
            updateUI(data);
            if (returnFocusTo) document.getElementById('info-title')?.focus({ preventScroll: true });
            announce(`Loading ${data.name}`);
        }
        return;
    }

    releaseUserControl();
    solarSystemView = false;
    selectedObject = mesh;
    isTracking = false;
    updateOrbitLineHighlights();


    if (data) {
        if (!data.isModelLoaded) {
            loadModelForItem(data, true);
        }
        requestHighDetail(data);
        const sys = getSystemRoot(data.name);
        preloadSystemModels(sys);
    }

    const initIdealPos = new THREE.Vector3();
    // Aim for the camera's orbit position at the (estimated) moment of arrival.
    const arrivalTime = motionTime + estimateFlightDuration(camera.position.distanceTo(mesh.getWorldPosition(new THREE.Vector3())));
    getIdealCameraPosition(mesh, arrivalTime, initIdealPos);

    const initTarget = new THREE.Vector3();
    getFocusPoint(mesh, initTarget);

    initiateTransition(initIdealPos, arrivalTime);
    updateUI(data);

    if (returnFocusTo) {
        // Visitor chose this from the menu: take them to the details.
        document.getElementById('info-title')?.focus({ preventScroll: true });
    } else {
        // Chosen by a canvas click or the tour: announce without moving focus.
        announce(`Now showing ${data ? data.name : 'selection'}`);
    }
}

function announce(message) {
    const el = document.getElementById('announcer');
    if (!el) return;
    el.textContent = '';
    // Set on the next frame so a repeated message is still read out.
    requestAnimationFrame(() => { el.textContent = message; });
}

function closeUI() {
    pendingLanderFocus = null;
    clearShownHolder();
    const sb = document.getElementById('sidebar');
    const focusWasInside = sb.contains(document.activeElement);
    releaseUserControl();
    selectedObject = null;
    isTracking = false;
    isTransitioning = false;
    controls.enabled = true;
    sb.classList.remove('active');
    sb.inert = true;
    syncMenuInert();
    document.getElementById('controls').classList.remove('shifted');
    syncMenuCurrent(null);

    // Don't strand keyboard focus inside a panel that just went inert.
    if (focusWasInside) {
        const back = sidebarReturnFocus && sidebarReturnFocus.isConnected
            ? sidebarReturnFocus
            : document.getElementById('system-btn');
        back?.focus({ preventScroll: true });
    }
    sidebarReturnFocus = null;
}

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
    const today = new Date().toISOString().slice(0, 10);
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
        link = document.createElement('button');
        link.id = 'credits-btn';
        link.type = 'button';
        link.textContent = 'Credits';
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', () => {
            dialog.showModal();
            content.scrollTop = 0;
        });
        document.getElementById('controls').appendChild(link);

        document.getElementById('credits-close').addEventListener('click', () => dialog.close());
        // A click on the dimmed backdrop lands on the dialog element itself.
        dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
        dialog.addEventListener('close', () => link.focus());
    }
}

// --- CINEMATIC MODE ---
function setupCinematicControls() {
    const controlsDiv = document.getElementById('controls');
    if (!controlsDiv) return;
    if (!document.getElementById('cinematic-btn')) {
        const btn = document.createElement('button');
        btn.id = 'cinematic-btn';
        btn.type = 'button';
        btn.onclick = () => (cinematicActive ? stopCinematicMode() : startCinematicMode());
        controlsDiv.appendChild(btn);
    }
    syncCinematicButton();
}

function syncCinematicButton() {
    const btn = document.getElementById('cinematic-btn');
    if (!btn) return;
    btn.textContent = cinematicActive ? 'Stop Cinematic Mode' : 'Start Cinematic Mode';
    btn.setAttribute('aria-pressed', String(cinematicActive));
}

// The menu is out of reach when the tour hides it, and when the sidebar has slid over it on a
// narrow screen: it stays out of the tab order too, so focus never lands on something unseen.
function syncMenuInert() {
    const menu = document.getElementById('mission-menu');
    const sidebar = document.getElementById('sidebar');
    const sidebarLeft = window.innerWidth - Math.min(sidebar.offsetWidth, window.innerWidth);
    const covered = sidebar.classList.contains('active') && sidebarLeft < menu.offsetLeft + menu.offsetWidth;
    menu.inert = cinematicActive || covered;
}
window.addEventListener('resize', syncMenuInert);

function startCinematicMode() {
    if (cinematicActive) return;
    cinematicActive = true;
    const menu = document.getElementById('mission-menu');
    menu.classList.add('ui-hidden');
    syncMenuInert();
    syncCinematicButton();
    announce('Cinematic Mode on. The camera will visit a new mission every 30 seconds.');
    cycleCinematic();
    cinematicTimer = setInterval(cycleCinematic, CINEMATIC_DELAY);
}

function stopCinematicMode() {
    if (!cinematicActive) return;
    cinematicActive = false;
    const menu = document.getElementById('mission-menu');
    menu.classList.remove('ui-hidden');
    syncMenuInert();
    if (cinematicTimer) clearInterval(cinematicTimer);
    cinematicTimer = null;
    syncCinematicButton();
    announce('Cinematic Mode off.');
}

function cycleCinematic() {
    if (!cinematicActive) return;
    if (cinematicQueue.length === 0) {
        celestialMap.forEach(obj => {
            if (obj.data.type === 'mission') cinematicQueue.push(obj);
        });
        for (let i = cinematicQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cinematicQueue[i], cinematicQueue[j]] = [cinematicQueue[j], cinematicQueue[i]];
        }
    }
    const nextObj = cinematicQueue.pop();
    if (nextObj) {
        focusOnObject(nextObj.mesh, nextObj.data);
    }
}

// Which way is up for the viewer. Cruising between worlds the Solar System's plane stays level
// (+Y), so long flights never roll. Only on the final approach to a lander or rover does the view
// turn so its own ground is below it, and it turns back as the camera leaves. The turn is tied
// to the camera's distance from the lander, so it happens during the last stretch of the approach
// and no earlier.
const UP_TURN_FAR = 12;  // no turn beyond this many focus distances from the lander
const UP_TURN_NEAR = 3;  // fully turned inside this many
const CAMERA_UP_EASE = 3; // per second: smooths a jump, e.g. going from one lander to another
const _wantUp = new THREE.Vector3();
const _upFocus = new THREE.Vector3();
const _upTurn = new THREE.Quaternion();
const _upIdentity = new THREE.Quaternion();
function updateCameraUp(dt) {
    _wantUp.copy(_UP);
    if (selectedObject && selectedObject.userData.orbit_type === 'landed' && isInScene(selectedObject)) {
        selectedObject.updateWorldMatrix(true, false);
        _wantUp.set(0, 1, 0).transformDirection(selectedObject.matrixWorld);
        getFocusPoint(selectedObject, _upFocus);
        const range = camera.position.distanceTo(_upFocus) / calculateFocusDistance(selectedObject);
        let w = (UP_TURN_FAR - range) / (UP_TURN_FAR - UP_TURN_NEAR);
        w = Math.min(Math.max(w, 0), 1);
        w = w * w * (3 - 2 * w);
        _upTurn.setFromUnitVectors(_UP, _wantUp);
        _wantUp.copy(_UP).applyQuaternion(_upTurn.slerp(_upIdentity, 1 - w)).normalize();
    }
    if (camera.up.dot(_wantUp) > 0.99999) {
        if (camera.up.equals(_wantUp)) return;
        camera.up.copy(_wantUp);
    } else {
        camera.up.lerp(_wantUp, 1 - Math.exp(-dt * CAMERA_UP_EASE));
        // Exactly opposite up vectors would lerp through zero.
        if (camera.up.lengthSq() < 1e-6) camera.up.copy(_wantUp);
        camera.up.normalize();
    }
    // OrbitControls works in a frame where up is +Y and only sets that frame up at construction,
    // so tell it when up changes or its steering would turn about the wrong axis.
    controls._quat.setFromUnitVectors(camera.up, _UP);
    controls._quatInverse.copy(controls._quat).invert();
}

// --- ANIMATION LOOP ---
function animate() {
    requestAnimationFrame(animate);
    const realDt = clock.getDelta();
    // Motion uses a clamped step so one slow frame can't make the camera leap;
    // the simulated clock keeps real time.
    const dt = Math.min(realDt, MAX_MOTION_DT);
    motionTime += dt;
    const elapsedTime = motionTime;

    uploadNextTexture();
    revealNextModel();

    simulatedDate.setTime(simulatedDate.getTime() + (realDt * timeScale * 1000));

    const currentSimulatedSeconds = Math.floor(simulatedDate.getTime() / 1000);
    if (currentSimulatedSeconds !== lastSimulatedSeconds) {
        lastSimulatedSeconds = currentSimulatedSeconds;
        if (clockElement) clockElement.textContent = formatSimulatedTime(simulatedDate);
    }

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
        } else if (data.type === 'asteroid' || data.type === 'comet') {
            if (!obj.tumbleSpeed) {
                obj.tumbleSpeed = getTumbleSpeed(data.name, 0.25);
            }
            meshGroup.rotateX(obj.tumbleSpeed.x * dt);
            meshGroup.rotateY(obj.tumbleSpeed.y * dt);
            meshGroup.rotateZ(obj.tumbleSpeed.z * dt);
        } else if (data.rot_period) {
            const theta = (days / data.rot_period) * Math.PI * 2;
            const offset = (data.rot_offset || 0) * (Math.PI / 180);
            meshGroup.rotation.y = theta + offset;
        }
        else if (data.type === 'mission' && data.orbit_type !== 'suborbital') {
            updateMissionAttitude(obj, elapsedTime, dt, days);
        }
    });

    updateCameraUp(dt);

    if (isTransitioning) {
        transitionProgress += dt / transitionDuration;
        if (transitionProgress >= 1.0) {
            transitionProgress = 1.0;
            isTransitioning = false;
            controls.enabled = true;
            if (selectedObject) {
                isTracking = true;
                getFocusPoint(selectedObject, _lastTrackedPos);
                selectedObject.getWorldQuaternion(_lastTrackedQuat);
            }
        }

        const t = easeInOutCubic(transitionProgress);

        const destPos = _transitionDestPos;
        const destTarget = _transitionDestTarget;

        if (selectedObject) {
            // Held at the arrival-time orbit position, so the only drift left to blend in is the
            // target's own movement, which carries the approach along with it.
            getIdealCameraPosition(selectedObject, flightArrivalTime, destPos);
            getFocusPoint(selectedObject, destTarget);
        } else {
            destPos.copy(transitionEndPos);
            destTarget.copy(transitionEndTarget);
        }

        // Follow the planned path; the destination keeps moving (the camera's slow orbit around
        // the target), so blend that drift in towards the end of the flight.
        flightCurve.getPointAt(t, camera.position);
        const driftWeight = t * t * (3 - 2 * t);
        camera.position.addScaledVector(_destDrift.subVectors(destPos, _plannedDest), driftWeight);

        let tLook = Math.min(transitionProgress / 0.2, 1.0);
        tLook = easeInOutCubic(tLook);

        controls.target.lerpVectors(transitionStartTarget, destTarget, tLook);
        controls.update();
    }
    else if (selectedObject && isTracking) {
        getFocusPoint(selectedObject, _targetWorldPos);
        if (isNaN(_targetWorldPos.x)) { isTracking = false; return; }

        // Ride along with the subject so the camera never trails it: follow its movement, and for
        // a lander also its turning (e.g. Philae on tumbling Comet 67P). The easing further down
        // then only has to handle the camera's own slow orbit.
        selectedObject.getWorldQuaternion(_trackQuat);
        if (selectedObject.userData.orbit_type === 'landed') _trackTurn.copy(_trackQuat).multiply(_lastTrackedQuat.invert());
        else _trackTurn.identity();
        camera.position.sub(_lastTrackedPos).applyQuaternion(_trackTurn).add(_targetWorldPos);
        controls.target.sub(_lastTrackedPos).applyQuaternion(_trackTurn).add(_targetWorldPos);
        _lastTrackedPos.copy(_targetWorldPos);
        _lastTrackedQuat.copy(_trackQuat);

        if (userHasControl) {
            // Visitor is steering: OrbitControls (with its damping and resumed auto-rotate)
            // does the rest.
            controls.update(dt);
        } else {
            const systemDistance = calculateFocusDistance(selectedObject);
            const breathe = Math.sin(elapsedTime * 0.2) * (systemDistance * 0.02);
            const dist = systemDistance + breathe;

            if (selectedObject.userData.orbit_type === 'landed') {
                const parentName = selectedObject.userData.parent;
                const parentObj = celestialMap.get(parentName);
                _tempVec3.set(0, 1, 0);
                if (parentObj) {
                    parentObj.mesh.getWorldPosition(_parentPos);
                    _tempVec3.subVectors(_targetWorldPos, _parentPos).normalize();
                }
                const theta = Math.sin(elapsedTime * 0.2) * 1.5;
                _localOffset.setFromSphericalCoords(dist, LANDER_VIEW_ANGLE, theta);
                _tempQuat.setFromUnitVectors(_UP, _tempVec3);
                _localOffset.applyQuaternion(_tempQuat);
                _idealCamPos.copy(_targetWorldPos).add(_localOffset);
            } else {
                const angle = elapsedTime * CAMERA_ORBIT_SPEED;
                const offsetX = Math.sin(angle) * dist;
                const offsetZ = Math.cos(angle) * dist;
                const verticalAngle = elapsedTime * 0.05;
                const offsetY = Math.sin(verticalAngle) * (dist * 0.2);
                _idealCamPos.set(
                    _targetWorldPos.x + offsetX,
                    _targetWorldPos.y + offsetY,
                    _targetWorldPos.z + offsetZ
                );
            }


            keepOutsideBodies(_idealCamPos, selectedObject);

            _currentPos.copy(camera.position);
            _tempVec1.subVectors(_idealCamPos, _currentPos);
            const distToIdeal = _tempVec1.length();

            if (distToIdeal > 5) {
                _tempVec2.copy(_tempVec1).normalize();
                _pathRay.set(_currentPos, _tempVec2);
                let hasAvoidanceWaypoint = false;
                let closestObstacleDist = Infinity;

                celestialMap.forEach(obj => {
                    if (obj.mesh === selectedObject) return;
                    if (!obj.group.visible && obj.data.type === 'mission') return;

                    if (['star', 'planet', 'moon'].includes(obj.data.type)) {
                        const safeRadius = (obj.data.radius || 1) * 1.5;
                        const sphereCenter = obj.group.position;

                        _pathRay.closestPointToPoint(sphereCenter, _closestPointOnRay);

                        const distToClosestPoint = _currentPos.distanceTo(_closestPointOnRay);

                        if (distToClosestPoint < distToIdeal && distToClosestPoint > 0.1) {
                            const missDistance = _closestPointOnRay.distanceTo(sphereCenter);
                            if (missDistance < safeRadius) {
                                if (distToClosestPoint < closestObstacleDist) {
                                    closestObstacleDist = distToClosestPoint;

                                    _tempVec3.subVectors(_closestPointOnRay, sphereCenter).normalize();
                                    if (_tempVec3.lengthSq() < 0.001) _tempVec3.set(0, 1, 0);

                                    _avoidanceWaypoint.copy(sphereCenter).addScaledVector(_tempVec3, safeRadius * 1.2);
                                    hasAvoidanceWaypoint = true;
                                }
                            }
                        }
                    }
                });

                if (hasAvoidanceWaypoint) {
                    _idealCamPos.copy(_avoidanceWaypoint);
                }
            }

            const actualDistToIdeal = _currentPos.distanceTo(_idealCamPos);
            _desiredLookPoint.copy(_targetWorldPos);
            let gazeLerpSpeed = CAMERA_FLY_SPEED;

            if (actualDistToIdeal > 5) {
                const systemDist = calculateFocusDistance(selectedObject);
                const transitionStart = Math.max(systemDist * 15, 150);
                const transitionEnd = Math.max(systemDist * 4, 40);

                if (actualDistToIdeal > transitionEnd) {
                    _tempVec1.subVectors(_idealCamPos, _currentPos).normalize();

                    _lookForwardPoint.copy(_currentPos).addScaledVector(_tempVec1, actualDistToIdeal);

                    if (actualDistToIdeal > transitionStart) {
                        _desiredLookPoint.copy(_lookForwardPoint);
                        gazeLerpSpeed = 0.1;
                    } else {
                        const t = (actualDistToIdeal - transitionEnd) / (transitionStart - transitionEnd);
                        _desiredLookPoint.lerp(_lookForwardPoint, t);
                        gazeLerpSpeed = CAMERA_FLY_SPEED + (0.1 - CAMERA_FLY_SPEED) * t;
                    }
                }
            }

            _tempVec1.subVectors(controls.target, _currentPos).normalize();
            _tempVec2.subVectors(_desiredLookPoint, _currentPos).normalize();

            _qStart.setFromUnitVectors(_FORWARD, _tempVec1);
            _qEnd.setFromUnitVectors(_FORWARD, _tempVec2);

            const frameGazeLerp = 1 - Math.pow(1 - gazeLerpSpeed, dt * 60);
            _qStart.slerp(_qEnd, frameGazeLerp);

            _tempVec3.copy(_FORWARD).applyQuaternion(_qStart).normalize();

            const currentPivotDist = controls.target.distanceTo(_currentPos);
            const desiredPivotDist = _desiredLookPoint.distanceTo(_currentPos);
            const newPivotDist = currentPivotDist + (desiredPivotDist - currentPivotDist) * frameGazeLerp;

            controls.target.copy(_currentPos).addScaledVector(_tempVec3, newPivotDist);

            const frameFlyLerp = 1 - Math.pow(1 - CAMERA_FLY_SPEED, dt * 60);
            camera.position.lerp(_idealCamPos, frameFlyLerp);
            controls.update();
        }
    }
    else if (solarSystemView) {
        if (userHasControl) {
            controls.update(dt); // visitor steering; auto-rotate resumes after a pause
        } else {
            // Turn the whole view about the Sun's axis at the same rate as the orbit around a
            // selected object, easing in after arrival.
            solarSystemSpin = Math.min(1, solarSystemSpin + dt / SOLAR_SYSTEM_SPIN_EASE_SECONDS);
            const angle = CAMERA_ORBIT_SPEED * dt * solarSystemSpin * solarSystemSpin;
            camera.position.applyAxisAngle(_UP, angle);
            controls.target.applyAxisAngle(_UP, angle);
            controls.update();
        }
    }

    updateModelDetail();
    updateViewOffset(dt);
    updateSunShadow(dt);
    updateSelectionSpot(dt);
    updateReticles(dt);
    // Loops and rays hold still under reduced motion; the surface keeps its slow churn.
    if (sunEffect) sunEffect.update(elapsedTime, camera, { strandsTime: prefersReducedMotion.matches ? 0 : elapsedTime });
    const frameStart = performance.now();
    beginFrameTiming(frameStart);
    renderer.render(scene, camera);
    endFrameTiming(frameStart);
}

// EVENTS
// Camera position, looking at the Sun, that fits every planet's whole orbit on screen, seen from
// SOLAR_SYSTEM_VIEW_ELEVATION above the orbital plane. Found by sampling points around each
// orbit and searching for the distance at which they all just fit.
function getSolarSystemView(outPos, outTarget) {
    const points = [];
    celestialMap.forEach(obj => {
        const orbit = obj.data.orbit;
        if (obj.data.type !== 'planet' || !orbit || !orbit.a || !orbit.rate) return;
        for (let i = 0; i < 64; i++) {
            const p = getKeplerPosition(orbit, (360 / orbit.rate) * (i / 64));
            points.push(new THREE.Vector3(p.x, p.y, p.z));
        }
    });
    // The view turns about the Sun, and the orbits aren't circles centred on it, so fit them as
    // seen from all round: include each point rotated to 8 headings.
    const headings = points.length;
    for (let k = 1; k < 8; k++) {
        for (let i = 0; i < headings; i++) points.push(points[i].clone().applyAxisAngle(_UP, k * Math.PI / 4));
    }
    const dir = new THREE.Vector3(0, Math.sin(SOLAR_SYSTEM_VIEW_ELEVATION), Math.cos(SOLAR_SYSTEM_VIEW_ELEVATION));
    outTarget.set(0, 0, 0);
    if (!points.length) return outPos.copy(dir).multiplyScalar(1200);

    const probe = new THREE.PerspectiveCamera(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
    const v = new THREE.Vector3();
    const fits = distance => {
        probe.position.copy(dir).multiplyScalar(distance);
        probe.lookAt(outTarget);
        probe.updateMatrixWorld();
        return points.every(p => {
            v.copy(p).project(probe);
            return v.z < 1 && Math.abs(v.x) <= SOLAR_SYSTEM_VIEW_FILL && Math.abs(v.y) <= SOLAR_SYSTEM_VIEW_FILL;
        });
    };
    let near = 1, far = controls.maxDistance;
    for (let i = 0; i < 40; i++) {
        const mid = (near + far) / 2;
        if (fits(mid)) far = mid; else near = mid;
    }
    return outPos.copy(dir).multiplyScalar(far);
}

// "Solar System" pinned atop the menu: deselect and show every planet's orbit.
// animate: false jumps straight there, for the view on load.
function showSolarSystem({ animate = true } = {}) {
    closeUI();
    stopCinematicMode();
    releaseUserControl();

    selectedObject = null;
    isTracking = false;
    updateOrbitLineHighlights();
    solarSystemView = true;
    syncMenuCurrent('Solar System');
    solarSystemSpin = 0;

    getSolarSystemView(transitionEndPos, transitionEndTarget);

    if (animate) {
        initiateTransition(transitionEndPos);
        announce('Showing the whole Solar System');
    } else {
        camera.position.copy(transitionEndPos);
        controls.target.copy(transitionEndTarget);
        controls.update();
    }
}

// Only clicks on the 3D view itself select or deselect. Listening on the canvas
// (not window) keeps clicks in the sidebar and menus from reaching the scene.
const DRAG_THRESHOLD_PX = 6;
let pointerDownPos = null;

renderer.domElement.addEventListener('pointerdown', (e) => {
    if (!e.isPrimary) return;
    pointerDownPos = { x: e.clientX, y: e.clientY };
    hurryTransition();
});
renderer.domElement.addEventListener('wheel', hurryTransition, { passive: true });

// Taking hold of the camera ends the tour, and around a focused object it hands
// steering to the visitor instead of fighting them back onto the scripted orbit.
controls.addEventListener('start', () => {
    stopCinematicMode();
    if (isTracking || solarSystemView) {
        userHasControl = true;
        controls.autoRotate = false;
        clearTimeout(autoOrbitResumeTimer);
    }
});
controls.addEventListener('end', () => {
    if (!userHasControl || prefersReducedMotion.matches) return;
    clearTimeout(autoOrbitResumeTimer);
    autoOrbitResumeTimer = setTimeout(() => {
        if (userHasControl && (isTracking || solarSystemView)) controls.autoRotate = true;
    }, AUTO_ORBIT_RESUME_MS);
});
// Keyboard steering for the 3D view (the canvas is focusable): arrows turn the view about what
// it's looking at, plus and minus move in and out. It goes through the same path as a drag, so
// it ends the tour and hands steering to the visitor.
const KEY_TURN_STEP = 6 * Math.PI / 180;
const KEY_ZOOM_STEP = 1.15;
const KEY_POLE_MARGIN = 0.05; // radians kept clear of straight up and down
const _keyOffset = new THREE.Vector3();
const _keyRight = new THREE.Vector3();
renderer.domElement.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const turn = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
    const zoom = { '+': 1 / KEY_ZOOM_STEP, '=': 1 / KEY_ZOOM_STEP, '-': KEY_ZOOM_STEP, '_': KEY_ZOOM_STEP }[e.key];
    if (!turn && !zoom) return;
    e.preventDefault();
    hurryTransition();
    controls.dispatchEvent({ type: 'start' });
    _keyOffset.subVectors(camera.position, controls.target);
    if (turn) {
        _keyOffset.applyAxisAngle(camera.up, -turn[0] * KEY_TURN_STEP);
        _keyRight.crossVectors(camera.up, _keyOffset).normalize();
        const polar = _keyOffset.angleTo(camera.up);
        const next = Math.min(Math.max(polar - turn[1] * KEY_TURN_STEP, KEY_POLE_MARGIN), Math.PI - KEY_POLE_MARGIN);
        _keyOffset.applyAxisAngle(_keyRight, next - polar);
    } else {
        const dist = Math.min(Math.max(_keyOffset.length() * zoom, controls.minDistance), controls.maxDistance);
        _keyOffset.setLength(dist);
    }
    camera.position.copy(controls.target).add(_keyOffset);
    controls.dispatchEvent({ type: 'end' });
});

// Negative: OrbitControls' auto-rotate turns the opposite way to the scripted orbit, so without
// this the view reversed direction when it resumed after the visitor let go.
controls.autoRotateSpeed = -AUTO_ORBIT_SPEED;

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
            const systemObj = celestialMap.get(target.userData.name);
            if (systemObj) {
                focusOnObject(systemObj.mesh, systemObj.data);
            } else {
                focusOnObject(target, target.userData);
            }
        }
    } else {
        selectedObject = null;
        updateOrbitLineHighlights();
        closeUI();
    }
});

document.getElementById('sidebar-close').addEventListener('click', () => {
    stopCinematicMode();
    closeUI();
    updateOrbitLineHighlights();
});

// Reading the details means the visitor wants to stay on this object.
document.getElementById('sidebar').addEventListener('pointerdown', stopCinematicMode);

window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    // The credits dialog closes itself on Escape; leave the scene alone.
    if (document.getElementById('credits-dialog').open) return;
    hurryTransition();
    if (cinematicActive) { stopCinematicMode(); return; }
    if (document.getElementById('sidebar').classList.contains('active')) {
        closeUI();
        updateOrbitLineHighlights();
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
        get isTransitioning() { return isTransitioning; }, get selectedObject() { return selectedObject; },
        get spotIntensity() { return selectionSpot.intensity; }, get flightCurve() { return flightCurve; }, getFlightObstacles, Raycaster: THREE.Raycaster, renderer, get sunEffect() { return sunEffect; }, get simulatedDate() { return simulatedDate; }, getSunOcclusion, resolution, flattenModel };
}

loadSystem();
animate();