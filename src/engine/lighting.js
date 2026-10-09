// The lights: the Sun (a point light, crossfading to a shadow-casting directional light inside a
// planet's system), the ambient fill, and the selected spacecraft's spotlight.
import * as THREE from 'three';
import { DEBUG_SHADOWS, SURFACE_TYPES } from './config.js';
import { activeSystem } from './visibility.js';
import { camera, scene } from './scene.js';
import { celestialMap } from './state.js';
import { controls, getFocusPoint, getSystemRadius, getVisualRadius, isTracking, isTransitioning, selectedObject } from './camera.js';

const _sunPos = new THREE.Vector3(0, 0, 0);
const _UP = new THREE.Vector3(0, 1, 0);

let shadowHelper, lightHelper;

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
export const selectionSpot = new THREE.SpotLight(0xfff2e0, 0, 0, Math.PI / 8, 0.7, 0);
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

const _viewCenter = new THREE.Vector3();
const _vecToSun = new THREE.Vector3();

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
export function getSunOcclusion(point, toSun, skip = null) {
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

export function updateSelectionSpot(dt) {
    // Planned missions are holograms that glow by themselves, so they get no light.
    const arrived = selectedObject && isTracking && !isTransitioning
        && selectedObject.userData && selectedObject.userData.type === 'mission'
        && selectedObject.userData.status !== 'Planned';
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

export function updateSunShadow(dt) {
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
