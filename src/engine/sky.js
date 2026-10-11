// The Milky Way behind everything: loaded once the scene is ready, faded in if it's on show, and
// turned to where it really is in the sky.
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { prefersReducedMotion } from './config.js';
import { renderer, scene } from './scene.js';
import { texLoader } from './assets.js';

// Whether the app is showing the scene (false while a splash covers it): the sky fades in only then.
let sceneVisible = true;
export function setSceneVisible(visible) {
    sceneVisible = visible;
}

// --- SKY ---
// The Milky Way is a cube map of six 2048px UASTC KTX2 faces, baked from the 8K equirect
// JPEG at the same angular resolution. It stays GPU-compressed (BC7/ASTC, ~25MB) where the
// JPEG decoded to ~128MB of raw RGBA. If KTX2 can't load, fall back to the JPEG.
export const SKY_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz']; // three.js cube face order
const SKY_FADE_SECONDS = 1;
export const ktx2Loader = new KTX2Loader().setTranscoderPath('basis/'); // detectSupport in createEngine

// Where the sky is. The image is a galactic map: the galactic centre in the middle, longitude
// increasing to the left and galactic south at the top (the Magellanic Clouds are above the band).
// The sky is drawn by its own shader, not as scene.background, because that map is a mirror image
// of the sky seen from inside, which a background's rotation can't undo. Each view direction goes
// scene -> ecliptic (x = X, y = -Z, z = Y) -> equatorial (J2000) -> galactic (IAU), then to a
// point on the map (the JPEG) or a direction in the cube baked from it.
const OBLIQUITY_J2000 = 23.4392911 * (Math.PI / 180);
const EQUATORIAL_TO_GALACTIC = new THREE.Matrix3().set(
    -0.0548755604, -0.8734370902, -0.4838350155,
    0.4941094279, -0.4448296300, 0.7469822445,
    -0.8676661490, -0.1980763734, 0.4559837762);
const c = Math.cos(OBLIQUITY_J2000), s = Math.sin(OBLIQUITY_J2000);
const SCENE_TO_EQUATORIAL = new THREE.Matrix3().set(
    1, 0, 0,
    0, -s, -c,
    0, c, -s);
export const SCENE_TO_GALACTIC = EQUATORIAL_TO_GALACTIC.clone().multiply(SCENE_TO_EQUATORIAL);
// The cube faces were baked to match the JPEG as three.js shows it as a background, so a galactic
// direction g is at cube direction (-g.x, -g.z, -g.y) (checked against the JPEG: smoke/sky-check.mjs).
const GALACTIC_TO_CUBE = new THREE.Matrix3().set(
    -1, 0, 0,
    0, 0, -1,
    0, -1, 0);

const skyVertex = /* glsl */`
    varying vec3 vDir;
    void main() {
        vDir = position;
        // A unit box round the camera, turned with the view but never moved, drawn at the far plane.
        vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
        gl_Position = p.xyww;
    }`;
const skyFragment = /* glsl */`
    uniform mat3 toSky;
    uniform float intensity;
    #ifdef SKY_CUBE
    uniform samplerCube sky;
    #else
    uniform sampler2D sky;
    #endif
    varying vec3 vDir;
    void main() {
        vec3 d = toSky * normalize(vDir);
        #ifdef SKY_CUBE
        vec4 col = textureCube(sky, d);
        #else
        // d is galactic: longitude to the left of the middle, south at the top (v = 1).
        float l = atan(d.y, d.x), b = asin(clamp(d.z, -1.0, 1.0));
        vec4 col = texture2D(sky, vec2(0.5 - l / 6.28318530718, 0.5 - b / 3.14159265359));
        #endif
        gl_FragColor = vec4(col.rgb * intensity, 1.0);
        #include <colorspace_fragment>
    }`;

let skyMesh = null;
// Whether the sky is drawn: draw.js leaves it out of all but the farthest slice of depth.
export function drawSky(shown) { if (skyMesh) skyMesh.visible = shown; }
function showSky(texture, isCube) {
    try { renderer.initTexture(texture); } catch (e) { console.warn('Sky upload failed', e); }
    const toSky = isCube ? GALACTIC_TO_CUBE.clone().multiply(SCENE_TO_GALACTIC) : SCENE_TO_GALACTIC.clone();
    const material = new THREE.ShaderMaterial({
        defines: isCube ? { SKY_CUBE: '' } : {},
        uniforms: { sky: { value: texture }, toSky: { value: toSky }, intensity: { value: 1 } },
        vertexShader: skyVertex, fragmentShader: skyFragment,
        side: THREE.BackSide, depthTest: false, depthWrite: false,
    });
    skyMesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
    skyMesh.name = 'sky';
    skyMesh.frustumCulled = false;
    skyMesh.renderOrder = -1e9;   // first, so everything else draws over it
    skyMesh.raycast = () => {};   // never picked
    scene.add(skyMesh);
    if (prefersReducedMotion.matches || !sceneVisible) return;
    const start = performance.now();
    material.uniforms.intensity.value = 0;
    const fade = () => {
        material.uniforms.intensity.value = Math.min(1, (performance.now() - start) / (SKY_FADE_SECONDS * 1000));
        if (material.uniforms.intensity.value < 1) requestAnimationFrame(fade);
    };
    requestAnimationFrame(fade);
}

function useEquirectSky() {
    const sky = texLoader.load('textures/milky_way.jpg');
    sky.colorSpace = THREE.SRGBColorSpace;
    // Always magnified on screen at 8K, so mipmaps would never be sampled.
    sky.generateMipmaps = false;
    sky.minFilter = THREE.LinearFilter;
    sky.wrapS = THREE.RepeatWrapping;   // longitude wraps round
    showSky(sky, false);
}

// The sky doesn't hold up the loading screen: transcoding the six faces took ~3s after
// everything the opening view needs was ready (~0.8s). It arrives behind the splash almost
// always; if the visitor has already gone in, it fades up rather than popping in.
// Transcoding competes with the shader warm-up for the CPU (it slowed the warm-up from 0.1s to
// 0.8s), so it starts once the scene is ready, or as soon as the visitor goes in, whichever is first.
let skyStarted = false;
export function startSky() {
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
        showSky(sky, true);
        performance.mark('sky-ready'); // read by the performance checks
    })
    .catch(err => {
        console.warn('Compressed sky unavailable, using the JPEG', err);
        useEquirectSky();
    });
}

// For checks: the sky drawn from the JPEG instead of the cube (smoke/sky-check.mjs).
export function useJpegSky() {
    if (skyMesh) { scene.remove(skyMesh); skyMesh.material.dispose(); skyMesh = null; }
    useEquirectSky();
}
