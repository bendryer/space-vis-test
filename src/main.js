import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

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


// Flag to toggle between custom named asteroid 3D models and generic models (Asteroid1-5) for privacy
const USE_NAMED_ASTEROID_MODELS = false;

const GENERIC_ASTEROID_MODELS = [
    '/models/Asteroid1.glb',
    '/models/Asteroid2.glb',
    '/models/Asteroid3.glb',
    '/models/Asteroid4.glb',
    '/models/Asteroid5.glb'
];

const NAMED_ASTEROID_MODELS = [
    '/models/Grady.glb',
    '/models/Franchi.glb',
    '/models/Greenwood.glb',
    '/models/Rider-Stokes.glb',
    '/models/OU.glb',
    '/models/Norton.glb',
    '/models/Green.glb',
    '/models/Pillinger.glb',
    '/models/Zarnecki.glb'
];

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


function getEffectiveModel(item) {
    let modelPath = item.model;

    if (!modelPath && item.type === 'asteroid') {
        const hash = getHash(item.name);
        modelPath = GENERIC_ASTEROID_MODELS[hash % GENERIC_ASTEROID_MODELS.length];
        return modelPath;
    }

    if (!modelPath) return null;

    const isNamedModel = NAMED_ASTEROID_MODELS.some(m =>
        modelPath.toLowerCase().endsWith(m.toLowerCase().replace('/models/', ''))
    );

    if (isNamedModel && !USE_NAMED_ASTEROID_MODELS) {
        const hash = getHash(item.name);
        return GENERIC_ASTEROID_MODELS[hash % GENERIC_ASTEROID_MODELS.length];
    }

    return modelPath;
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
let sunUniforms = null;
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
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
    const progress = (itemsLoaded / itemsTotal) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = progress + '%';
    const loadingText = document.getElementById('loading-text');
    if (loadingText) loadingText.innerText = `Loading Assets... ${Math.round(progress)}%`;
};

const SLOW_LOAD_NOTICE_MS = 8000;
let loadingDismissed = false;
let fatalErrorShown = false;

function dismissLoadingOverlay() {
    if (loadingDismissed || fatalErrorShown) return;
    loadingDismissed = true;
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (overlay && overlay.style.display !== 'none') {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
    }
}

function setLoadingAction(label, handler) {
    const action = document.getElementById('loading-action');
    if (!action) return;
    action.textContent = label;
    action.onclick = handler;
    action.hidden = false;
}

// Keep the overlay up until the scene is actually ready. On a slow connection,
// say so after a few seconds and let the visitor go in early rather than wait.
const slowLoadTimer = setTimeout(() => {
    const note = document.getElementById('loading-note');
    if (note) {
        note.textContent = 'This is taking longer than usual. Some planets may appear before their surfaces finish loading.';
        note.hidden = false;
    }
    setLoadingAction('Explore now', dismissLoadingOverlay);
}, SLOW_LOAD_NOTICE_MS);

// Stops the app with a plain explanation and a way to retry, replacing the loader.
function showFatalError(message) {
    fatalErrorShown = true;
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    overlay.setAttribute('role', 'alert');
    overlay.style.display = '';
    overlay.style.opacity = '1';
    const text = document.getElementById('loading-text');
    if (text) text.textContent = 'OUniverse couldn’t start';
    const bar = overlay.querySelector('.progress-bar');
    if (bar) bar.hidden = true;
    const note = document.getElementById('loading-note');
    if (note) {
        note.textContent = message;
        note.hidden = false;
    }
    setLoadingAction('Try again', () => window.location.reload());
}

// The background texture can finish before data.json has queued the planets,
// so only treat the manager going idle as "ready" once the system is built.
let systemReady = false;
loadingManager.onLoad = () => { if (systemReady) warmUpSceneThenReveal(); };

// Planets are frustum-culled until they come into view, so without this their
// textures upload mid-flight. Upload everything while the loader is still up.
let sceneWarmedUp = false;
function warmUpSceneThenReveal() {
    if (sceneWarmedUp) { dismissLoadingOverlay(); return; }
    sceneWarmedUp = true;
    const textures = collectTextures(scene);
    if (scene.background && scene.background.isTexture) textures.add(scene.background);
    textures.forEach(texture => {
        try { renderer.initTexture(texture); } catch (e) { console.warn('Texture upload failed', e); }
    });
    const WARM_UP_TIMEOUT_MS = 5000;
    Promise.race([
        renderer.compileAsync(scene, camera).catch(e => console.warn('Shader warm-up failed', e)),
        new Promise(resolve => setTimeout(resolve, WARM_UP_TIMEOUT_MS))
    ]).then(dismissLoadingOverlay);
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
renderer.setPixelRatio(Math.min(pixelRatio, 1.25));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // Efficient PCF shadow filtering for integrated GPUs
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 1.2;


// Reading shader logs on a shader's first use blocks until the driver finishes compiling
// it; measured as the main arrival stall (100-300ms per new model). Keep it in dev only.
renderer.debug.checkShaderErrors = import.meta.env.DEV;

renderer.domElement.setAttribute('role', 'img');
renderer.domElement.setAttribute('aria-label', 'Interactive 3D view of the Solar System. Use the mission list to visit each object.');
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

// Holds the loading screen until the faces are transcoded, not just downloaded.
loadingManager.itemStart('sky');
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
        scene.background = sky;
    })
    .catch(err => {
        console.warn('Compressed sky unavailable, using the JPEG', err);
        useEquirectSky();
    })
    .finally(() => loadingManager.itemEnd('sky'));

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

// This light casts uniform high-resolution shadows for the targeted active system
// Max size strictly capped to 1024 to save memory bandwidth on laptops and integrated GPUs.
const shadowLight = new THREE.DirectionalLight(0xffffff, 0);
shadowLight.castShadow = true;
shadowLight.shadow.mapSize.width = 1024;
shadowLight.shadow.mapSize.height = 1024;
shadowLight.shadow.bias = -0.0001;
shadowLight.shadow.normalBias = 0.02;
shadowLight.shadow.camera.near = 1;
shadowLight.shadow.camera.far = 1000;
scene.add(shadowLight);
scene.add(shadowLight.target);

// --- SELECTION SPOTLIGHT ---
// The selected spacecraft gets its own light from above the local surface, so a lander on a
// planet's night side is still visible. It fades in when the camera arrives and out when the
// selection ends. It's in the scene from the start at zero intensity: adding a light later
// would change every material's shader and force them all to recompile.
const SPOT_INTENSITY = 5;
const SPOT_FADE_SECONDS = 0.6;
const SPOT_HEIGHT_RADII = 8;  // how far above the model the light sits, in model radii
const selectionSpot = new THREE.SpotLight(0xfff2e0, 0, 0, Math.PI / 8, 0.7, 0);
selectionSpot.castShadow = false;
scene.add(selectionSpot, selectionSpot.target);
let spotSubject = null;
const _spotUp = new THREE.Vector3();
const _spotParent = new THREE.Vector3();

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
let lastSimulatedSeconds = -1;

const _tempVec1 = new THREE.Vector3();
const _tempVec2 = new THREE.Vector3();
const _tempVec3 = new THREE.Vector3();
const _tempQuat = new THREE.Quaternion();
const _UP = new THREE.Vector3(0, 1, 0);
const _FORWARD = new THREE.Vector3(0, 0, -1);
const _scratchDate = new Date();

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
const _lightPos = new THREE.Vector3();
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

// --- NEW TRAJECTORY LOGIC ---
function getTrajectoryPosition(waypoints, currentDate) {
    const currentMs = currentDate.getTime();
    let startIndex = -1;
    for (let i = 0; i < waypoints.length - 1; i++) {
        if (currentMs >= new Date(waypoints[i].date).getTime() && currentMs < new Date(waypoints[i + 1].date).getTime()) {
            startIndex = i; break;
        }
    }
    if (startIndex === -1) {
        if (currentMs < new Date(waypoints[0].date).getTime()) {
            const t = celestialMap.get(waypoints[0].target);
            return t ? t.group.position : { x: 0, y: 0, z: 0 };
        }
        if (currentMs >= new Date(waypoints[waypoints.length - 1].date).getTime()) {
            const t = celestialMap.get(waypoints[waypoints.length - 1].target);
            return t ? t.group.position : { x: 0, y: 0, z: 0 };
        }
        return { x: 0, y: 0, z: 0 };
    }
    const startWp = waypoints[startIndex];
    const endWp = waypoints[startIndex + 1];
    const sObj = celestialMap.get(startWp.target);
    const eObj = celestialMap.get(endWp.target);
    if (!sObj || !eObj) return { x: 0, y: 0, z: 0 };
    const dateStart = new Date(startWp.date);
    const dateEnd = new Date(endWp.date);
    const daysStart = getDaysSinceJ2000(dateStart);
    const daysEnd = getDaysSinceJ2000(dateEnd);
    const p1 = getKeplerPosition(sObj.data.orbit, daysStart);
    const p2 = getKeplerPosition(eObj.data.orbit, daysEnd);
    const progress = (currentMs - dateStart.getTime()) / (dateEnd.getTime() - dateStart.getTime());
    const r1 = Math.sqrt(p1.x * p1.x + p1.z * p1.z);
    const r2 = Math.sqrt(p2.x * p2.x + p2.z * p2.z);
    const angle1 = Math.atan2(p1.x, p1.z);
    let angle2 = Math.atan2(p2.x, p2.z);
    while (angle2 < angle1) angle2 += Math.PI * 2;
    const r = r1 + (r2 - r1) * progress;
    const theta = angle1 + (angle2 - angle1) * progress;
    const y = p1.y + (p2.y - p1.y) * progress;
    return { x: r * Math.sin(theta), y: y, z: r * Math.cos(theta) };
}

const PLANET_ORBIT_COLORS = {
    'Mercury': '#a1a1a1',
    'Venus': '#e3bb76',
    'Earth': '#4a90e2',
    'Mars': '#ff4433',
    'Jupiter': '#e0a96d',
    'Saturn': '#f4d06f',
    'Uranus': '#7de3e4',
    'Neptune': '#4b70dd'
};

function getStandardizedOrbitColor(item) {
    if (!item) return '#888888';

    if (item.type === 'planet') {
        return PLANET_ORBIT_COLORS[item.name] || item.color || '#4a90e2';
    }
    if (item.type === 'moon') {
        if (item.name === 'Moon' || item.name === 'Luna') {
            return '#888888';
        }
        if (item.parent && PLANET_ORBIT_COLORS[item.parent]) {
            return PLANET_ORBIT_COLORS[item.parent];
        }
        return '#888888';
    }
    if (item.type === 'asteroid') {
        return '#888888';
    }
    if (item.type === 'comet') {
        return '#ffffff';
    }
    if (item.type === 'mission' || item.type === 'reference_point') {
        return '#888888'; // Grey by default; glows techno electric blue on hover / selection!
    }
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
let targetBoxElem = null;
let targetBoxLabelElem = null;

function setupTargetBoxOverlay() {
    const uiLayer = document.getElementById('ui-layer');
    if (!uiLayer) return;

    targetBoxElem = document.createElement('div');
    targetBoxElem.id = 'target-box';
    targetBoxElem.className = 'target-box';
    targetBoxElem.innerHTML = `
        <div class="target-corner top-left"></div>
        <div class="target-corner top-right"></div>
        <div class="target-corner bottom-left"></div>
        <div class="target-corner bottom-right"></div>
        <div class="target-label" id="target-box-label"></div>
    `;
    uiLayer.appendChild(targetBoxElem);
    targetBoxLabelElem = document.getElementById('target-box-label');
}

function updateOrbitLineHighlights() {
    celestialMap.forEach(obj => {
        if (obj.orbitLine && obj.orbitLine.material) {
            const isHovered = (hoveredObj === obj);
            const isSelected = (selectedObject === obj.mesh);
            const mat = obj.orbitLine.material;
            const baseColor = obj.orbitLine.userData.baseColor || '#888888';
            const baseOpacity = obj.orbitLine.userData.baseOpacity || 0.35;

            if (isHovered || isSelected) {
                mat.opacity = 0.95;
                mat.color.set('#00ffff'); // Techno electric blue highlight!
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

let currBox = { left: 0, top: 0, width: 0, height: 0, initialized: false };

function clearHoveredObject() {
    if (hoveredObj) {
        hoveredObj = null;
        updateOrbitLineHighlights();
    }
    if (targetBoxElem) {
        targetBoxElem.style.display = 'none';
    }
    currBox.initialized = false;
}

const _box3 = new THREE.Box3();
const _corners = [
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
];

function updateTargetBoxOverlay(dt = 0.016) {
    if (!hoveredObj || !targetBoxElem) {
        currBox.initialized = false;
        return;
    }
    if (!isInScene(hoveredObj.group)) {
        targetBoxElem.style.display = 'none';
        currBox.initialized = false;
        return;
    }

    if (hoveredObj.group) hoveredObj.group.updateMatrixWorld(true);
    if (hoveredObj.mesh) hoveredObj.mesh.updateMatrixWorld(true);

    _box3.setFromObject(hoveredObj.mesh);
    if (_box3.isEmpty()) {
        targetBoxElem.style.display = 'none';
        currBox.initialized = false;
        return;
    }

    const min = _box3.min;
    const max = _box3.max;

    _corners[0].set(min.x, min.y, min.z);
    _corners[1].set(min.x, min.y, max.z);
    _corners[2].set(min.x, max.y, min.z);
    _corners[3].set(min.x, max.y, max.z);
    _corners[4].set(max.x, min.y, min.z);
    _corners[5].set(max.x, min.y, max.z);
    _corners[6].set(max.x, max.y, min.z);
    _corners[7].set(max.x, max.y, max.z);

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;
    let anyInFront = false;

    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < 8; i++) {
        const v = _corners[i].clone().project(camera);
        if (v.z <= 1) anyInFront = true;

        const screenX = (v.x * 0.5 + 0.5) * width;
        const screenY = (-(v.y * 0.5) + 0.5) * height;

        if (screenX < minX) minX = screenX;
        if (screenX > maxX) maxX = screenX;
        if (screenY < minY) minY = screenY;
        if (screenY > maxY) maxY = screenY;
    }

    if (!anyInFront || minX >= width || maxX <= 0 || minY >= height || maxY <= 0) {
        targetBoxElem.style.display = 'none';
        currBox.initialized = false;
        return;
    }

    const padding = 10;
    const rawLeft = Math.max(10, minX - padding);
    const rawRight = Math.min(width - 10, maxX + padding);
    const rawTop = Math.max(10, minY - padding);
    const rawBottom = Math.min(height - 10, maxY + padding);

    const targetLeft = rawLeft;
    const targetTop = rawTop;
    const targetWidth = Math.max(24, rawRight - rawLeft);
    const targetHeight = Math.max(24, rawBottom - rawTop);

    if (!currBox.initialized) {
        currBox.left = targetLeft;
        currBox.top = targetTop;
        currBox.width = targetWidth;
        currBox.height = targetHeight;
        currBox.initialized = true;
    } else {
        const lerpFactor = 1 - Math.pow(1 - 0.25, (dt || 0.016) * 60);
        currBox.left += (targetLeft - currBox.left) * lerpFactor;
        currBox.top += (targetTop - currBox.top) * lerpFactor;
        currBox.width += (targetWidth - currBox.width) * lerpFactor;
        currBox.height += (targetHeight - currBox.height) * lerpFactor;
    }

    targetBoxElem.style.left = `${currBox.left.toFixed(2)}px`;
    targetBoxElem.style.top = `${currBox.top.toFixed(2)}px`;
    targetBoxElem.style.width = `${currBox.width.toFixed(2)}px`;
    targetBoxElem.style.height = `${currBox.height.toFixed(2)}px`;
    targetBoxElem.style.display = 'block';

    if (targetBoxLabelElem && hoveredObj.data) {
        targetBoxLabelElem.innerText = hoveredObj.data.name;
    }
}

function createTrajectoryLine(data) {
    if (!data.waypoints) return null;
    const points = [];
    const totalSegments = 200;
    const startDate = new Date(data.waypoints[0].date);
    const endDate = new Date(data.waypoints[data.waypoints.length - 1].date);
    const totalTime = endDate.getTime() - startDate.getTime();
    for (let i = 0; i <= totalSegments; i++) {
        const t = startDate.getTime() + (totalTime * (i / totalSegments));
        const date = new Date(t);
        const pos = getTrajectoryPosition(data.waypoints, date);
        points.push(new THREE.Vector3(pos.x, pos.y, pos.z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#888888'),
        transparent: true,
        opacity: 0.35,
        depthWrite: false
    });
    const line = new THREE.Line(geometry, material);
    line.userData = { baseColor: '#888888', baseOpacity: 0.35 };
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

// --- DYNAMIC SUN GENERATOR ---
function createSun(radius, texturePath) {
    const sunGroup = new THREE.Group();
    const texture = loadBodyTexture(texturePath);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    const surfaceMaterial = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uTexture: { value: texture } },
        vertexShader: `
            varying vec2 vUv; varying vec3 vNormal;
            void main() { vUv = uv; vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            uniform float uTime; uniform sampler2D uTexture; varying vec2 vUv;
            void main() { vec2 p1 = vUv + vec2(uTime * 0.05, uTime * 0.01);
            vec2 p2 = vUv + vec2(-uTime * 0.02, uTime * 0.06);
            vec4 tex1 = texture2D(uTexture, p1); vec4 tex2 = texture2D(uTexture, p2);
            vec4 color = mix(tex1, tex2, 0.5); float pulse = 1.0 + sin(uTime * 2.0) * 0.1;
            gl_FragColor = vec4(color.rgb * pulse, 1.0); }
        `
    });
    sunUniforms = surfaceMaterial.uniforms;
    const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 64, 64), surfaceMaterial);
    sunGroup.add(sunMesh);

    const atmosphereMaterial = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: `
            varying float intensity; void main() { vec3 vNormal = normalize(normalMatrix * normal);
            intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1)), 4.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            varying float intensity; void main() { vec3 glow = vec3(1.0, 0.5, 0.0) * intensity;
            gl_FragColor = vec4(glow, 1.0); }
        `,
        side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true
    });
    const atmMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.25, 64, 64), atmosphereMaterial);
    sunGroup.add(atmMesh);

    const flareMaterial = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
            varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
            varying vec2 vUv; uniform float uTime; void main() {
            float dist = distance(vUv, vec2(0.5)); float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= (0.8 + sin(uTime * 5.0) * 0.2); vec3 color = vec3(1.0, 0.6, 0.1); 
            gl_FragColor = vec4(color, alpha * 0.4); }
        `,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });

    const flareCount = 4;
    for (let i = 0; i < flareCount; i++) {
        const flare = new THREE.Mesh(new THREE.PlaneGeometry(radius * 4, radius * 4), flareMaterial);
        flare.rotation.z = Math.random() * Math.PI * 2;
        flare.rotation.x = Math.random() * Math.PI * 0.2;
        flare.userData = { speed: (Math.random() - 0.5) * 0.2 };
        sunGroup.add(flare);
        if (!sunGroup.userData.flares) sunGroup.userData.flares = [];
        sunGroup.userData.flares.push(flare);
    }
    return sunGroup;
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
            // Find target mesh for raycasting
            let targetMesh = null;
            parent.mesh.traverse((child) => {
                if (child.isMesh && !targetMesh) targetMesh = child;
            });

            if (!targetMesh || !targetMesh.geometry) continue;

            parent.meshGroup.updateMatrixWorld(true);
            targetMesh.updateMatrixWorld(true);

            targetMesh.geometry.computeBoundingBox();
            const geoBox = targetMesh.geometry.boundingBox;
            const geoCenter = geoBox.getCenter(new THREE.Vector3());
            const geoSize = geoBox.getSize(new THREE.Vector3());

            let rayStartLocal, rayDirLocal;

            if (request.data.name === 'Philae' && !request.data.landed_coords) {
                // Target the top surface of the smaller lobe (head) of Comet 67P in model space
                const topY = geoBox.max.y + geoSize.y * 0.5;
                const headX = geoBox.min.x + geoSize.x * 0.35;
                const headZ = geoCenter.z;

                rayStartLocal = new THREE.Vector3(headX, topY, headZ);
                rayDirLocal = new THREE.Vector3(0, -1, 0);
            } else {
                const lat = request.data.landed_coords ? request.data.landed_coords.lat : 45;
                const lon = request.data.landed_coords ? request.data.landed_coords.lon : 10;
                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lon + 180) * (Math.PI / 180);
                const dir = new THREE.Vector3(
                    -(Math.sin(phi) * Math.cos(theta)), Math.cos(phi), Math.sin(phi) * Math.sin(theta)
                ).normalize();

                const maxDim = Math.max(geoSize.x, geoSize.y, geoSize.z);
                rayStartLocal = geoCenter.clone().addScaledVector(dir, maxDim * 2.0);
                rayDirLocal = dir.clone().negate();
            }

            // Convert local ray vectors to world space for THREE.Raycaster
            const startWorld = rayStartLocal.clone().applyMatrix4(targetMesh.matrixWorld);
            const dirWorld = rayDirLocal.clone().transformDirection(targetMesh.matrixWorld).normalize();

            const raycaster = new THREE.Raycaster(startWorld, dirWorld);
            const intersects = raycaster.intersectObject(targetMesh, true);

            let hitMeshGroupPoint, surfaceNormalLocal;

            if (intersects.length > 0) {
                const hit = intersects[0];
                hitMeshGroupPoint = parent.meshGroup.worldToLocal(hit.point.clone());

                const hitNormalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
                const worldNormal = hit.face.normal.clone().applyMatrix3(hitNormalMatrix).normalize();

                const parentNormalMatrix = new THREE.Matrix3().getNormalMatrix(parent.meshGroup.matrixWorld);
                const invParentNormalMatrix = new THREE.Matrix3().copy(parentNormalMatrix).invert();
                surfaceNormalLocal = worldNormal.clone().applyMatrix3(invParentNormalMatrix).normalize();
            } else {
                // Fallback: Place directly on top of smaller lobe in meshGroup coordinates
                const fallbackModelPoint = new THREE.Vector3(
                    geoBox.min.x + geoSize.x * 0.35,
                    geoBox.max.y,
                    geoCenter.z
                );
                const fallbackWorld = fallbackModelPoint.applyMatrix4(targetMesh.matrixWorld);
                hitMeshGroupPoint = parent.meshGroup.worldToLocal(fallbackWorld);
                surfaceNormalLocal = new THREE.Vector3(0, 1, 0);
            }

            // Parent directly to parent.meshGroup so Philae remains attached regardless of LOD level!
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

            if (DEBUG_LANDING) console.log(`Landed ${request.data.name} on ${parent.data.name} smaller lobe at pos:`, hitMeshGroupPoint);
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

function processModelMeshes(item, effectiveModel, sceneRoot) {
    const simplified = new Map();
    sceneRoot.traverse((child) => {
        if (child.isMesh) {
            child.material = Array.isArray(child.material)
                ? child.material.map(m => simplifyMaterial(m, simplified))
                : simplifyMaterial(child.material, simplified);
            child.userData = item;
            child.castShadow = false;
            child.receiveShadow = true;
            if (child.material) {
                if (child.material.map) child.material.map.colorSpace = THREE.SRGBColorSpace;
                if (child.material.metalness !== undefined) {
                    child.material.metalness = Math.min(child.material.metalness, 0.4);
                    child.material.roughness = Math.max(child.material.roughness, 0.6);
                }

                if (effectiveModel && effectiveModel.includes('spitzer') && child.geometry.attributes.normal) {
                    const normals = child.geometry.attributes.normal;
                    for (let i = 0; i < normals.count; i++) {
                        normals.setXYZ(i, -normals.getX(i), -normals.getY(i), -normals.getZ(i));
                    }
                    normals.needsUpdate = true;
                    child.material.side = THREE.DoubleSide;
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

// Centres a loaded glTF scene and scales it to unit size, ready to be one of the object's detail levels.
// It's centred on its area-weighted centroid, not its bounding box: a boom or panel on one side
// drags the box centre off the craft (Cassini's by 28% of its size), which left spacecraft and
// comets visibly off their orbit lines. Landers keep their base at the origin.
function buildModelLevel(item, effectiveModel, model) {
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

    processModelMeshes(item, effectiveModel, model);
    return wrapper;
}

function getLowModelPath(item, effectiveModel) {
    let modelLowPath = item.model_low || (effectiveModel ? effectiveModel.replace('.glb', '-low.glb') : null);
    if (!modelLowPath && item.type === 'asteroid') {
        const hash = getHash(item.name);
        const genericLows = [
            '/models/Asteroid1-low.glb',
            '/models/Asteroid2-low.glb',
            '/models/Asteroid3-low.glb',
            '/models/Asteroid4-low.glb',
            '/models/Asteroid5-low.glb'
        ];
        modelLowPath = genericLows[hash % genericLows.length];
    }
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
        attemptToLand();
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
        const data = await res.json();
        data.forEach(item => {
            const group = new THREE.Group();
            const meshGroup = new THREE.Group();
            if (item.attitude) {
                meshGroup.rotation.x = (item.attitude.x || 0) * (Math.PI / 180);
                meshGroup.rotation.z = (item.attitude.z || 0) * (Math.PI / 180);
            } else if (item.tilt) {
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
                const sunGroup = createSun(item.radius, item.texture);
                visualContainer.add(sunGroup);
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
                    const segments = (item.name === "Earth" || item.type === "star") ? 48 : 32;
                    const geo = new THREE.SphereGeometry(item.radius, segments, segments);

                    let matParams = { map: tex, roughness: 1.0, metalness: 0.0 };
                    if (item.name === "Earth") {
                        matParams.roughnessMap = tex;
                    }
                    const mat = new THREE.MeshStandardMaterial(matParams);
                    if (item.name === "Earth" && item.night_texture && ENABLE_NIGHT_LIGHTS) {
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

            // Immediately load model if object belongs to Sun or Earth system, or has priority
            const effectiveModel = getEffectiveModel(item);
            if (effectiveModel) {
                const system = getSystemRoot(item.name);
                if (system === 'Sun' || system === 'Earth' || item.name === 'Comet 67P' || item.name === 'Philae' || item.parent === 'Comet 67P') {
                    loadModelForItem(item, true);
                }
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
            }
        });

        // PASS 2: Link & Orbits & Landers
        celestialMap.forEach((obj) => {
            const { group, data } = obj;
            if (data.orbit_type === 'landed') {
                pendingLanders.push({ group: group, data: data });
            } else {
                scene.add(group);
                if (data.type === 'trajectory') {
                    const trail = createTrajectoryLine(data);
                    if (trail) {
                        scene.add(trail);
                        obj.orbitLine = trail; // Store for resizing
                    }
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
                        if (data.name !== 'Earth-Sun L2') {
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

        setupTargetBoxOverlay();
        populateMenu();
        setupCinematicControls();
        attemptToLand(); // landers on plain spheres can land right away
        showSolarSystem({ animate: false }); // open on the whole Solar System
        systemReady = true;

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

// Width of the scene left visible beside the sidebar. Selections always open the sidebar, so
// framing assumes it's there.
function getSelectionViewWidth() {
    const sidebar = document.getElementById('sidebar');
    return isSidebarBesideScene() ? window.innerWidth - sidebar.offsetWidth : window.innerWidth;
}

// Narrower of the vertical and horizontal fields of view (over the visible area), so framing
// fits portrait screens and the space beside the sidebar.
function getMinFov() {
    const vfov = camera.fov * (Math.PI / 180);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * getSelectionViewWidth() / window.innerHeight);
    return Math.min(vfov, hfov);
}

// While the sidebar is open beside the scene, shift the view so the selection sits in the middle
// of the visible part rather than behind the sidebar. Eased so it glides with the sidebar.
let viewOffsetX = 0;
function updateViewOffset(dt) {
    const sidebar = document.getElementById('sidebar');
    const goal = sidebar.classList.contains('active') && isSidebarBesideScene() ? sidebar.offsetWidth / 2 : 0;
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
function getSystemRoot(objName) {
    if (!objName || objName === 'Sun') return 'Sun';
    if (objName.includes('Earth-Sun')) return 'Earth';
    if (objName.includes('Mars-Sun')) return 'Mars';

    const obj = celestialMap.get(objName);
    if (!obj || !obj.data) return 'Sun';

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
function populateMenu() {
    const list = document.getElementById('mission-list');
    if (!list) return;
    list.innerHTML = '';

    // Build a map of parent -> children
    const childrenMap = new Map();
    celestialMap.forEach((obj, name) => {
        let parent = obj.data.parent || 'root';

        // Custom UI Overrides
        if (name === 'JUICE') parent = 'Jupiter'; // Relocate JUICE to Jupiter in the menu

        if (!childrenMap.has(parent)) childrenMap.set(parent, []);
        childrenMap.get(parent).push(obj);
    });

    // Sort children: Distance first (if available), then type
    childrenMap.forEach(arr => {
        arr.sort((a, b) => {
            let distA = a.data.orbit ? (a.data.orbit.a || 0) : 0;
            let distB = b.data.orbit ? (b.data.orbit.a || 0) : 0;

            // Custom UI Overrides for sorting
            if (a.data.name === 'Bennu') distA = 1151; // Place after L2 (1150)
            if (b.data.name === 'Bennu') distB = 1151;
            if (a.data.name === 'Cassini') distA = 49; // Place before Titan (50)
            if (b.data.name === 'Cassini') distB = 49;

            // Group Comets (Wild 2, 67P) and all numbered asteroids in numerical order before Jupiter (3200)
            const getMenuSortKey = (data) => {
                const name = data.name || '';
                if (name.includes('Wild 2') || name.includes('Wild2')) return 3101;
                if (name.includes('67P')) return 3102;

                const match = name.match(/^(\d+)/);
                if (match) {
                    const num = parseInt(match[1], 10);
                    return 3110 + (num / 100000);
                }
                return null;
            };

            const keyA = getMenuSortKey(a.data);
            const keyB = getMenuSortKey(b.data);
            if (keyA !== null) distA = keyA;
            if (keyB !== null) distB = keyB;



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

    function renderNode(obj, depth) {
        if (!obj || !obj.data) return;
        const btn = document.createElement('button');
        btn.className = 'mission-btn';

        let icon = '🛰️';
        if (obj.data.type === 'star') icon = '☀️';
        else if (obj.data.type === 'planet') icon = '🪐';
        else if (obj.data.type === 'moon') icon = '🌕';
        else if (obj.data.type === 'reference_point') icon = '📍';
        else if (obj.data.type === 'comet' || obj.data.type === 'asteroid') icon = '☄️';

        let statusHtml = '';
        if (obj.data.status === 'Planned') {
            statusHtml = `<span style="font-size:0.6em; background:#004466; color:#00ffff; padding:2px 4px; border-radius:3px; margin-left:5px; vertical-align:middle;">PLANNED</span>`;
        } else if (obj.data.status === 'Crashed' || obj.data.status === 'Landed' || obj.data.status === 'Decommissioned') {
            statusHtml = `<span style="font-size:0.6em; background:#442200; color:#ffaa00; padding:2px 4px; border-radius:3px; margin-left:5px; vertical-align:middle;">ENDED</span>`;
        }

        btn.type = 'button';
        btn.innerHTML = `<span aria-hidden="true" style="display:inline-block; width:22px; text-align:center; opacity:0.8;">${icon}</span> ${obj.data.name} ${statusHtml}`;

        const visualDepth = Math.max(0, depth - 1);
        btn.style.paddingLeft = `${20 + visualDepth * 15}px`;

        if (obj.data.type !== 'mission') {
            btn.style.color = '#fff';
            if (depth === 0) {
                btn.style.background = 'rgba(255,255,255,0.05)';
                btn.style.borderTop = '1px solid rgba(255,255,255,0.1)';
                btn.style.marginTop = '2px';
            }
        } else {
            btn.style.color = '#ccc';
        }

        btn.onclick = () => {
            stopCinematicMode();
            focusOnObject(obj.mesh, obj.data, { returnFocusTo: btn });
        };
        btn.onmouseenter = () => setHoveredObject(obj);
        btn.onmouseleave = () => clearHoveredObject();
        btn.onfocus = () => setHoveredObject(obj);
        btn.onblur = () => clearHoveredObject();
        list.appendChild(btn);


        const children = childrenMap.get(obj.data.name);
        if (children) children.forEach(child => renderNode(child, depth + 1));
    }

    // "Solar System" heads the list: the zoomed-out view the app opens on.
    const systemBtn = document.createElement('button');
    systemBtn.type = 'button';
    systemBtn.className = 'mission-btn';
    systemBtn.innerHTML = `<span aria-hidden="true" style="display:inline-block; width:22px; text-align:center; opacity:0.8;">🌌</span> Solar System`;
    systemBtn.style.paddingLeft = '20px';
    systemBtn.style.color = '#fff';
    systemBtn.style.background = 'rgba(255,255,255,0.05)';
    systemBtn.style.marginTop = '2px';
    systemBtn.onclick = () => showSolarSystem();
    systemBtn.onmouseenter = systemBtn.onfocus = () => clearHoveredObject();
    list.appendChild(systemBtn);

    const rootItems = childrenMap.get('root') || [];
    if (rootItems.length === 0) {
        if (celestialMap.has('Sun')) renderNode(celestialMap.get('Sun'), 0);
        else celestialMap.forEach((obj) => {
            if (!obj.data.parent || !celestialMap.has(obj.data.parent)) renderNode(obj, 0);
        });
    } else {
        rootItems.forEach(item => renderNode(item, 0));
    }
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

function updateSelectionSpot(dt) {
    const arrived = selectedObject && isTracking && !isTransitioning
        && selectedObject.userData && selectedObject.userData.type === 'mission';
    const wanted = arrived ? selectedObject : null;
    // Only move to a new subject while dark, so the light never visibly jumps.
    if (wanted !== spotSubject && selectionSpot.intensity < 0.02) spotSubject = wanted;
    const goal = wanted && wanted === spotSubject ? SPOT_INTENSITY : 0;
    selectionSpot.intensity += (goal - selectionSpot.intensity) * (1 - Math.exp(-dt * 3 / SPOT_FADE_SECONDS));
    if (!spotSubject) return;

    // "Above" is away from the body the craft sits on or orbits.
    getFocusPoint(spotSubject, selectionSpot.target.position);
    const parent = celestialMap.get(spotSubject.userData.parent);
    if (parent) {
        parent.group.getWorldPosition(_spotParent);
        _spotUp.subVectors(selectionSpot.target.position, _spotParent).normalize();
    } else {
        _spotUp.set(0, 1, 0);
    }
    const radius = getVisualRadius(celestialMap.get(spotSubject.userData.name));
    const height = radius * SPOT_HEIGHT_RADII;
    selectionSpot.position.copy(selectionSpot.target.position).addScaledVector(_spotUp, height);
    selectionSpot.angle = Math.atan((radius * 2.5) / height); // a pool a little wider than the model
    selectionSpot.target.updateMatrixWorld();
}

function releaseUserControl() {
    userHasControl = false;
    controls.autoRotate = false;
    clearTimeout(autoOrbitResumeTimer);
}

function focusOnObject(mesh, data, { returnFocusTo = null } = {}) {
    sidebarReturnFocus = returnFocusTo;
    pendingLanderFocus = null;

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
    const sb = document.getElementById('sidebar');
    const focusWasInside = sb.contains(document.activeElement);
    releaseUserControl();
    selectedObject = null;
    isTracking = false;
    isTransitioning = false;
    controls.enabled = true;
    sb.classList.remove('active');
    sb.inert = true;
    document.getElementById('controls').classList.remove('shifted');

    // Don't strand keyboard focus inside a panel that just went inert.
    if (focusWasInside) {
        const back = sidebarReturnFocus && sidebarReturnFocus.isConnected
            ? sidebarReturnFocus
            : document.getElementById('mission-list')?.querySelector('button');
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

function updateUI(data) {
    const sb = document.getElementById('sidebar');
    const controls = document.getElementById('controls');
    let statusColor = '#222';
    if (data.status === 'Active' || data.status === 'Launched' || data.status === 'En Route' || data.status === 'Operational') statusColor = '#006622';
    if (data.status === 'Planned') statusColor = '#004466';
    if (data.status === 'Crashed' || data.status === 'Landed' || data.status === 'Decommissioned') statusColor = '#662200';
    let launchTag = '';
    if (data.launch_year) {
        const prefix = (data.status === 'Planned') ? 'Planned Launch' : 'Launched';
        launchTag = `<span class="badge" style="background:#555">${prefix}: ${data.launch_year}</span>`;
    }
    let imageHtml = '';
    if (data.image_url) {
        imageHtml = `<div style="margin: 15px 0; border-radius: 8px; overflow: hidden; border: 1px solid #444;">
            <img src="${fixPath(getWebImagePath(data.image_url))}" data-original="${fixPath(data.image_url)}" style="width:100%; display:block;" alt="${data.name} Science Image" decoding="async"
                onerror="if (this.dataset.original && this.getAttribute('src') !== this.dataset.original) { this.src = this.dataset.original; } else { this.parentElement.remove(); }"/>
        </div>`;
    }
    let ceiHtml = '';
    if (data.ou_involvement) {
        ceiHtml = `
        <div style="background: rgba(0, 100, 255, 0.1); border-left: 4px solid #00aaff; padding: 10px; margin-top: 15px; font-size: 0.9em;">
            <strong style="color: #00aaff; display:block; margin-bottom:5px;">Open University Involvement</strong>
            ${data.ou_involvement}
        </div>`;
    }
    let html = `
        <h2 id="info-title" tabindex="-1" style="margin-top:0">${data.name}</h2>
        <div style="display:flex; gap:5px; flex-wrap:wrap; margin-bottom:10px;">
            <span class="badge" style="background:#444">${data.type.toUpperCase()}</span>
            <span class="badge" style="background:${statusColor}; color:${data.status === 'Planned' ? '#000' : '#fff'}">${data.status}</span>
            ${launchTag}
        </div>
        ${imageHtml}
        <p style="line-height: 1.5; margin-bottom: 10px;">${data.description || 'No description available.'}</p>
        ${ceiHtml}
    `;
    document.getElementById('info-content').innerHTML = html;
    sb.scrollTop = 0;
    sb.inert = false;
    sb.classList.add('active');
    controls.classList.add('shifted');
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

function startCinematicMode() {
    if (cinematicActive) return;
    cinematicActive = true;
    const menu = document.getElementById('mission-menu');
    menu.classList.add('ui-hidden');
    menu.inert = true;
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
    menu.inert = false;
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
        if (clockElement) {
            clockElement.textContent = simulatedDate.toUTCString();
        }
    }

    const days = getDaysSinceJ2000(simulatedDate);

    if (pendingLanders.length > 0) attemptToLand();

    if (sunUniforms) sunUniforms.uTime.value = elapsedTime;

    celestialMap.forEach(obj => {
        if (obj.data.type === 'star' && obj.mesh.children[0].userData.flares) {
            obj.mesh.children[0].userData.flares.forEach(flare => {
                flare.rotation.z += flare.userData.speed * dt * 10;
                flare.material.uniforms.uTime.value = elapsedTime;
            });
        }
    });

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
        if (data.type === 'trajectory') {
            localPos = getTrajectoryPosition(data.waypoints, simulatedDate);
            group.position.set(localPos.x, localPos.y, localPos.z);

            _scratchDate.setTime(simulatedDate.getTime() + 1000 * 60 * 60);
            const nextPos = getTrajectoryPosition(data.waypoints, _scratchDate);

            _tempVec1.set(nextPos.x, nextPos.y, nextPos.z);
            group.lookAt(_tempVec1);
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
        if (data.name === 'Earth') {
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
            meshGroup.rotation.y += dt * 0.2;
        }
    });

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

        let systemObj = activeSystem !== 'Sun' ? celestialMap.get(activeSystem) : null;
        let distToSystem = systemObj ? camera.position.distanceTo(systemObj.group.position) : Infinity;
        const baseSystemRad = systemObj ? (systemObj.data.radius || 1) : 1;
        const SHADOW_CULL_DISTANCE = Math.max(baseSystemRad * 20, 100);

        if (systemObj && distToSystem < SHADOW_CULL_DISTANCE) {
            sunLight.intensity = 0;
            shadowLight.intensity = 3;
            shadowLight.shadow.autoUpdate = true;
            _viewCenter.copy(controls.target);
            _vecToSun.subVectors(_sunPos, _viewCenter).normalize();
            _lightPos.copy(_viewCenter).addScaledVector(_vecToSun, 500);
            shadowLight.position.copy(_lightPos);
            shadowLight.target.position.copy(_viewCenter);

            const baseRad = systemObj.data.radius || 1;
            const shadowBoxSize = Math.max(baseRad * 30, camera.position.distanceTo(controls.target) * 0.5);
            shadowLight.shadow.camera.left = -shadowBoxSize;
            shadowLight.shadow.camera.right = shadowBoxSize;
            shadowLight.shadow.camera.top = shadowBoxSize;
            shadowLight.shadow.camera.bottom = -shadowBoxSize;
            shadowLight.shadow.camera.near = 1;
            shadowLight.shadow.camera.far = 1000;
            shadowLight.shadow.camera.updateProjectionMatrix();

            if (shadowHelper) shadowHelper.update();
            if (lightHelper) lightHelper.update();
        } else {
            sunLight.intensity = 2.5;
            shadowLight.intensity = 0;
            shadowLight.shadow.autoUpdate = false; // Light is off: skip the shadow pass
        }
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

        let systemObj = activeSystem !== 'Sun' ? celestialMap.get(activeSystem) : null;
        let distToSystem = systemObj ? camera.position.distanceTo(systemObj.group.position) : Infinity;

        const baseSystemRad = systemObj ? (systemObj.data.radius || 1) : 1;
        const SHADOW_CULL_DISTANCE = Math.max(baseSystemRad * 20, 100);

        if (systemObj && distToSystem < SHADOW_CULL_DISTANCE) {
            sunLight.intensity = 0;
            shadowLight.intensity = 3;
            shadowLight.shadow.autoUpdate = true;

            _viewCenter.copy(controls.target);

            _vecToSun.subVectors(_sunPos, _viewCenter).normalize();

            _lightPos.copy(_viewCenter).addScaledVector(_vecToSun, 500);
            shadowLight.position.copy(_lightPos);
            shadowLight.target.position.copy(_viewCenter);

            const baseRad = systemObj.data.radius || 1;
            const shadowBoxSize = Math.max(baseRad * 30, camera.position.distanceTo(controls.target) * 0.5);
            shadowLight.shadow.camera.left = -shadowBoxSize;
            shadowLight.shadow.camera.right = shadowBoxSize;
            shadowLight.shadow.camera.top = shadowBoxSize;
            shadowLight.shadow.camera.bottom = -shadowBoxSize;
            shadowLight.shadow.camera.near = 1;
            shadowLight.shadow.camera.far = 1000;
            shadowLight.shadow.camera.updateProjectionMatrix();

            if (shadowHelper) shadowHelper.update();
            if (lightHelper) lightHelper.update();
        } else {
            sunLight.intensity = 2.5;
            shadowLight.intensity = 0;
            shadowLight.shadow.autoUpdate = false; // Light is off: skip the shadow pass
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
    updateSelectionSpot(dt);
    updateTargetBoxOverlay(dt);
    renderer.render(scene, camera);
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

// "Solar System" in the menu (and Reset View): deselect and show every planet's orbit.
// animate: false jumps straight there, for the view on load.
function showSolarSystem({ animate = true } = {}) {
    closeUI();
    stopCinematicMode();
    releaseUserControl();

    selectedObject = null;
    isTracking = false;
    updateOrbitLineHighlights();
    solarSystemView = true;
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

document.getElementById('reset-btn').onclick = () => showSolarSystem();

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

// Dev-only hook for automated checks (camera paths, lander placement); stripped from builds.
if (import.meta.env.DEV) {
    window.__ouniverse = { camera, controls, scene, celestialMap, BODY_TYPES, isInScene,
        get isTransitioning() { return isTransitioning; }, get selectedObject() { return selectedObject; },
        get spotIntensity() { return selectionSpot.intensity; }, get flightCurve() { return flightCurve; }, getFlightObstacles, Raycaster: THREE.Raycaster };
}

loadSystem();
animate();