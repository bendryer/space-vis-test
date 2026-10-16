// The camera: what's selected, flights between objects, riding along with the selection, the
// overview's slow turn, framing round the app's panels (view insets), and the visitor's steering.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AUTO_ORBIT_RESUME_MS, AUTO_ORBIT_SPEED, BODY_SELF_VIEW_FILL, BODY_VIEW_FILL, CAMERA_FLY_SPEED, CAMERA_ORBIT_SPEED, HURRY_FLIGHT_SECONDS, LANDER_VIEW_ANGLE, MIN_FLIGHT_DURATION, MISSION_MODEL_SIZE, GROUP_VIEW_FILL, MISSION_VIEW_FILL, SOLAR_SYSTEM_VIEW_ELEVATION, SOLAR_SYSTEM_VIEW_FILL, SUN_FRAME_RADII, USER_FLIGHT_SCALE, prefersReducedMotion } from './config.js';
import { attemptToLand, onLanded, setLandingFirst } from './landers.js';
import { camera, isInScene, renderer } from './scene.js';
import { celestialMap } from './state.js';
import { emitEngine } from './events.js';
import { getKeplerPosition, getSystemRoot, orbitFarthest } from './orbits.js';
import { view } from './scale.js';
import { heldMotionTime, motionTime } from './time.js';
import { loadModelForItem, preloadSystemModels, requestHighDetail } from './models.js';

const _tempVec1 = new THREE.Vector3();
const _tempVec2 = new THREE.Vector3();
const _UP = new THREE.Vector3(0, 1, 0);

export let selectedObject = null;
export let isTracking = false;

// A lander chosen before it has landed on its (still loading) body; focused once it lands.
let pendingLanderFocus = null;
// True while the "Solar System" overview is shown; it slowly turns about the Sun like the
// orbit around a selected object. spin eases the turn in after the camera arrives.
let solarSystemView = false;
let solarSystemSpin = 0;
// A group the overview is framed on instead (showOverview's `frame`): { names, insets }.
let overviewFrame = null;
const SOLAR_SYSTEM_SPIN_EASE_SECONDS = 2;

// --- CAMERA CONTROL STATE ---
export let controls; // OrbitControls, built by initControls
// Once the visitor rotates or zooms around a focused object, the scripted orbit
// stops steering the camera; it only carries the camera along with the object.
let userHasControl = false;
// Whether the visitor may steer the camera at all (setUserControl); off for a presenter-driven app.
let userControlEnabled = true;
let autoOrbitResumeTimer = null;
// --- TRANSITION STATE ---
const transitionStartPos = new THREE.Vector3();
const transitionStartTarget = new THREE.Vector3();
const transitionEndPos = new THREE.Vector3();
const transitionEndTarget = new THREE.Vector3();
export let isTransitioning = false;
let transitionProgress = 0;
let transitionDuration = 2.5;

const _tempVec3 = new THREE.Vector3();
const _tempQuat = new THREE.Quaternion();

const _FORWARD = new THREE.Vector3(0, 0, -1);

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

const _transitionDestPos = new THREE.Vector3();
const _transitionDestTarget = new THREE.Vector3();
const _lastTrackedPos = new THREE.Vector3();
const _lastTrackedQuat = new THREE.Quaternion();
const _trackQuat = new THREE.Quaternion();
const _trackTurn = new THREE.Quaternion();

// --- VIEW INSETS ---
// How much of the screen the app's panels cover while something is selected, in CSS pixels from
// each edge (setViewInsets). Selections are framed in the rest of the screen, and while there is
// a selection the view shifts so it sits in the middle of that rest.
let viewInsets = { left: 0, right: 0, top: 0, bottom: 0 };
export function setViewInsets({ left = 0, right = 0, top = 0, bottom = 0 } = {}) {
    viewInsets = { left, right, top, bottom };
}
// True from "select" to "deselect" (including while a lander's body loads).
let hasSelection = false;

// The part of the screen a selection is framed in: left and right edges in CSS pixels.
function getSelectionViewSpan() {
    return { left: viewInsets.left, right: window.innerWidth - viewInsets.right };
}

function getSelectionViewWidth() {
    const span = getSelectionViewSpan();
    return span.right - span.left;
}

// The same band's top and bottom, in CSS pixels.
function getSelectionViewVSpan() {
    return { top: viewInsets.top, bottom: window.innerHeight - viewInsets.bottom };
}

// Narrower of the vertical and horizontal fields of view (over the visible area), so framing
// fits portrait screens and the space the app's panels leave.
function getMinFov() {
    const vfov = camera.fov * (Math.PI / 180);
    const vspan = getSelectionViewVSpan();
    const visibleVfov = 2 * Math.atan(Math.tan(vfov / 2) * (vspan.bottom - vspan.top) / window.innerHeight);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * getSelectionViewWidth() / window.innerHeight);
    return Math.min(visibleVfov, hfov);
}

// While there's a selection, shift the view so it sits in the middle of the part of the screen
// the panels leave rather than behind one. Eased so it glides with the panels opening and with
// the insets changing.
let viewOffsetX = 0;
let viewOffsetY = 0;
export function updateViewOffset(dt) {
    let goal = 0;
    let goalY = 0;
    if (hasSelection) {
        const span = getSelectionViewSpan();
        const vspan = getSelectionViewVSpan();
        goal = window.innerWidth / 2 - (span.left + span.right) / 2;
        goalY = window.innerHeight / 2 - (vspan.top + vspan.bottom) / 2;
    } else if (solarSystemView && overviewFrame) {
        // A framed group sits in the middle of the part of the screen it was given.
        const { left, right, top, bottom } = overviewFrame.insets;
        goal = (right - left) / 2;
        goalY = (bottom - top) / 2;
    }
    const ease = 1 - Math.exp(-dt * 6);
    viewOffsetX += (goal - viewOffsetX) * ease;
    viewOffsetY += (goalY - viewOffsetY) * ease;
    if (goal === 0 && goalY === 0 && Math.abs(viewOffsetX) < 0.5 && Math.abs(viewOffsetY) < 0.5) {
        viewOffsetX = 0;
        viewOffsetY = 0;
        if (camera.view && camera.view.enabled) camera.clearViewOffset();
        return;
    }
    camera.setViewOffset(window.innerWidth, window.innerHeight, viewOffsetX, viewOffsetY, window.innerWidth, window.innerHeight);
}

const _focusScale = new THREE.Vector3();
const _focusUp = new THREE.Vector3();

// World-space bounding radius of an object's model: measured once its model has loaded,
// estimated from MISSION_MODEL_SIZE before that.
export function getVisualRadius(celestialObj) {
    if (!celestialObj) return 1;
    if (celestialObj.detailRoot && celestialObj.detailRadius) {
        celestialObj.detailRoot.getWorldScale(_focusScale);
        return celestialObj.detailRadius * Math.max(_focusScale.x, _focusScale.y, _focusScale.z);
    }
    if (celestialObj.data.type === 'mission') return (celestialObj.data.model_size ?? MISSION_MODEL_SIZE) * 0.6;
    return celestialObj.data.radius || 1;
}

// The point the camera (and spotlight) aim at: the object's origin, lifted to the middle of a
// lander's model, since landers sit on their base with the origin at ground level.
export function getFocusPoint(mesh, out) {
    mesh.getWorldPosition(out);
    if (mesh.userData && mesh.userData.orbit_type === 'landed') {
        const obj = celestialMap.get(mesh.userData.name);
        const localHeight = obj && obj.detailRoot ? obj.detailCenterY : (obj?.data.built?.modelSize ?? MISSION_MODEL_SIZE) * 0.3;   // times its scale, below
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
    // A body is framed on itself (its moons and craft would make it tiny); a point such as L2,
    // which has no body, on what orbits it; the Sun out to its glow.
    const type = obj.data.type;
    if (type === 'reference_point' || type === 'star') return getSystemRadius(obj) / Math.sin(BODY_VIEW_FILL * getMinFov() / 2);
    return getBodyRadius(obj) / Math.sin(BODY_SELF_VIEW_FILL * getMinFov() / 2);
}

// Radius of a body itself, with its rings, about its centre.
function getBodyRadius(obj) {
    const data = obj.data;
    // Modelled bodies (asteroids, comets) use their measured size; data radius can be far off.
    let radius = obj.detailRoot ? getVisualRadius(obj) : (data.radius || 1);
    if (data.ring) radius = Math.max(radius, (data.radius || 1) * (data.ring.outer_radius || 2.5));
    return radius;
}

// Radius of a body plus everything orbiting it, about the body's centre.
export function getSystemRadius(obj) {
    const data = obj.data;
    if (data.type === 'star') return (data.radius || 1) * SUN_FRAME_RADII;
    let radius = getBodyRadius(obj);
    const bodyRadius = radius;
    celestialMap.forEach(child => {
        const c = child.data;
        if (c.parent !== data.name) return;
        const childRadius = getVisualRadius(child);
        let reach = 0;
        if (c.orbit_type === 'landed') reach = bodyRadius + childRadius * 2;
        else if (c.orbit_type === 'suborbital') reach = bodyRadius + (c.suborbital?.apogee || 1.5) + childRadius;
        else if (c.orbit) reach = orbitFarthest(c.orbit) + childRadius; // farthest point of the orbit
        radius = Math.max(radius, reach);
    });
    return radius;
}

function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Where the camera sits over a lander, from its focus point, at the motion clock's `time`: above
// the ground, drifting slowly over it. It swings from side to side about the lander's vertical
// (LANDER_SWING) while rising and falling between a steep and a low view (LANDER_TILT), at
// periods that don't divide into each other, so the path over the lander keeps changing.
const LANDER_SWING = 1.5;               // radians either way round
const LANDER_SWING_RATE = 0.2;          // radians of phase per second
const LANDER_TILT = 10 * Math.PI / 180; // above and below LANDER_VIEW_ANGLE from the vertical
const LANDER_TILT_RATE = 0.13;
function landerViewOffset(mesh, focus, dist, time) {
    const parentObj = celestialMap.get(mesh.userData.parent);
    _tempVec3.set(0, 1, 0);
    if (parentObj) _tempVec3.subVectors(focus, parentObj.mesh.getWorldPosition(_parentPos)).normalize();
    const theta = Math.sin(time * LANDER_SWING_RATE) * LANDER_SWING;
    const tilt = LANDER_VIEW_ANGLE + Math.sin(time * LANDER_TILT_RATE) * LANDER_TILT;
    _localOffset.setFromSphericalCoords(dist, tilt, theta);
    _tempQuat.setFromUnitVectors(_UP, _tempVec3);
    return _localOffset.applyQuaternion(_tempQuat);
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
        outPos.copy(_targetWorldPos).add(landerViewOffset(targetMesh, _targetWorldPos, dist, time));
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
export const BODY_TYPES = ['star', 'planet', 'moon'];
const FLIGHT_CLIP_RADII = 1.08;      // closer than this many radii to a body's centre counts as clipping
const FLIGHT_WAYPOINT_RADII = 1.35;  // detour waypoints sit this many radii from the centre
const FLIGHT_SAMPLES = 160;
const FLIGHT_SEGMENT_RADII = 1.2;   // a straight stretch passing closer than this gets routed around
export let flightCurve = null;
let flightArrivalTime = 0;
const _plannedDest = new THREE.Vector3();
const _destDrift = new THREE.Vector3();
const _bodyCenter = new THREE.Vector3();

// Everything a flight must not pass through: stars, planets and moons, plus every spacecraft,
// asteroid and comet in the scene, including the one being flown to (its camera position can
// be on its far side).
const MODEL_TYPES = ['mission', 'asteroid', 'comet'];
export function getFlightObstacles() {
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

// Pushes a camera position out of any body it's inside (other than the one being viewed). The
// margin above the ground never reaches past the object viewed: in True scale a lander (which may
// stand below the sphere, in a crater), or a craft in a low orbit (the ISS), is closer to the
// ground than FLIGHT_CLIP_RADII.
const _keepTarget = new THREE.Vector3();
function keepOutsideBodies(pos, exceptMesh) {
    if (exceptMesh) getFocusPoint(exceptMesh, _keepTarget);
    celestialMap.forEach(obj => {
        if (!BODY_TYPES.includes(obj.data.type) || obj.mesh === exceptMesh) return;
        obj.group.getWorldPosition(_bodyCenter);
        const radius = obj.data.radius || 1;
        const minDist = exceptMesh
            ? Math.min(radius * FLIGHT_CLIP_RADII, _keepTarget.distanceTo(_bodyCenter))
            : radius * FLIGHT_CLIP_RADII;
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

// A lander's camera sits just above the ground, so a straight path to or from it cuts through its
// body. Flights there go round the body, clear of it, to above the lander, then come down along
// the line the camera looks along at the end (and leave the same way). These are the points on
// that line, from `end` outward, spaced by a constant ratio (CLIMB_RATIO) so the slow last stretch
// is drawn as finely as the rest, up to where it's FLIGHT_WAYPOINT_RADII of the body's radius
// from its centre. Empty when `mesh` isn't a landed object, or `end` is already that high. True
// scale only: in Diagram mode the camera stands well off a lander and the plain path stays clear.
const CLIMB_RATIO = 4;
function surfaceClimb(mesh, end) {
    if (!view.logFlights || !mesh || mesh.userData.orbit_type !== 'landed' || !isInScene(mesh)) return [];
    const body = celestialMap.get(mesh.userData.parent);
    if (!body) return [];
    const focus = getFocusPoint(mesh, new THREE.Vector3());
    const fromCentre = focus.clone().sub(body.group.getWorldPosition(new THREE.Vector3()));
    const dir = new THREE.Vector3().subVectors(end, focus);
    const d0 = dir.length();
    if (!(d0 > 0)) return [];
    dir.divideScalar(d0);
    // A camera the visitor has steered down to the horizon leaves straight up instead.
    if (dir.dot(fromCentre) < 0.1 * fromCentre.length()) dir.copy(fromCentre).normalize();
    const b = fromCentre.dot(dir);
    const c = fromCentre.lengthSq() - ((body.data.radius || 1) * FLIGHT_WAYPOINT_RADII) ** 2;
    const top = -b + Math.sqrt(Math.max(b * b - c, 0));
    if (!(top > d0 * 1.5)) return [];
    const steps = Math.ceil(Math.log(top / d0) / Math.log(CLIMB_RATIO));
    const points = [];
    for (let k = 1; k <= steps; k++) points.push(focus.clone().addScaledVector(dir, d0 * (top / d0) ** (k / steps)));
    return points;
}

// climbFrom, climbTo: surfaceClimb's points out from each end (or empty).
function planFlightPath(from, to, climbFrom = [], climbTo = []) {
    // An end can sit inside an obstacle's bounding sphere, e.g. the camera just above Philae is
    // inside irregular Comet 67P's. Rather than ignore that obstacle, shrink it to just inside
    // the nearer end, so the path still can't cut in towards the body.
    const obstacles = getFlightObstacles().map(o => {
        const nearestEnd = Math.min(from.distanceTo(o.center), to.distanceTo(o.center));
        return nearestEnd > o.radius * FLIGHT_CLIP_RADII ? o : { center: o.center, radius: nearestEnd / (FLIGHT_CLIP_RADII * 1.02) };
    });

    // The routed stretch runs between the tops of the climbs.
    const a = climbFrom.at(-1) ?? from;
    const b = climbTo.at(-1) ?? to;
    const travel = new THREE.Vector3().subVectors(b, a);
    const dist = travel.length();
    const dir = travel.clone().normalize();
    const arch = new THREE.Vector3(0, 1, 0);
    if (Math.abs(dir.dot(_UP)) > 0.9) arch.set(0, 0, 1);
    else arch.crossVectors(dir, _UP).cross(dir).normalize();
    const mid = a.clone().lerp(b, 0.5).addScaledVector(arch, Math.min(dist * 0.15, view.flightArchMax));

    // If the smoothed curve still grazes a body between waypoints, widen the detours and retry.
    let curve;
    for (const radii of [FLIGHT_WAYPOINT_RADII, FLIGHT_WAYPOINT_RADII * 1.25, FLIGHT_WAYPOINT_RADII * 1.6]) {
        const points = [
            ...(climbFrom.length ? [from, ...climbFrom.slice(0, -1)] : []),
            ...routeAround([a.clone(), mid.clone(), b.clone()], obstacles, radii, arch),
            ...(climbTo.length ? [...climbTo.slice(0, -1).reverse(), to] : []),
        ].map(p => p.clone());
        curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
        if (!findFirstClip(curve, obstacles)) break;
    }
    return curve;
}

// How unhurried flights are (a multiple of the base duration); the tour flies slower.
let flightPace = USER_FLIGHT_SCALE;
export function setFlightPace(scale = USER_FLIGHT_SCALE) { flightPace = scale; }

// A flight's length: in Diagram mode from the distance travelled; in True scale from its effort
// (measurePath's, or before the path is planned logFlightEffort's estimate), where startView and
// endView are the camera's distance from what it looks at, at each end.
const LOG_FLIGHT_SHORT = 10; // a True-scale flight's effort at which it takes its shortest time
const LOG_FLIGHT_FULL = 60;  // and its longest
function estimateFlightDuration(travelDist, startView, endView, effort = null) {
    const flightScale = prefersReducedMotion.matches ? 0 : flightPace;
    const reach = view.logFlights
        ? ((effort ?? logFlightEffort(travelDist, startView, endView)) - LOG_FLIGHT_SHORT) / (LOG_FLIGHT_FULL - LOG_FLIGHT_SHORT)
        : travelDist / view.flightReach;
    return Math.max((1.5 + THREE.MathUtils.clamp(reach, 0, 1) * 2.0) * flightScale, MIN_FLIGHT_DURATION);
}

// In True scale a flight crosses powers of ten (from the ISS to Neptune is 3.5 million units, from
// the ISS to Earth 5), so the camera moves at a speed in proportion to its clearance: its distance
// from the nearest thing, whether what it left (plus how far it was looking, a), where it's going
// (plus b), or the surface of a star, planet or moon. It climbs out and comes down by powers of
// ten, cruises fast through empty space and slows as it skims round a planet. (Paced only on the
// distance from the two ends, a hop between two landers on Mars swept round the planet at
// thousands of km/s.) A flight's effort is the sum of distance over clearance along it, in
// natural-log steps; for a straight flight past nothing it is:
function logFlightEffort(length, a, b) {
    a = Math.max(a, 1e-9);
    b = Math.max(b, 1e-9);
    return Math.log((length / 2 + a) / a) + Math.log((length / 2 + b) / b);
}

// Measures a planned path for True-scale pacing: its clearance and effort at parameter values
// packed geometrically towards each of its points as well as evenly between them, so it's as
// exact a metre from a lander as across the Solar System. (three.js's own arc-length table, in
// even steps, was out by large factors where a short stretch meets a long one, and the camera
// stalled and then lurched there.) a, b: the camera's distance from what it looks at at each end;
// fromFocus, toFocus: those points. Turning counts too: the effort includes LOG_TURN_EFFORT per
// radian the direction to either end turns through, since passing sideways to them (round a
// planet, from one lander to another) swings the view however slowly the camera goes.
const PATH_FINE = 48;  // samples in from each end of a stretch, from 1e-12 of it to half
const PATH_EVEN = 64;  // and evenly through it
const LOG_TURN_EFFORT = 4;
const _turnA = new THREE.Vector3();
const _turnB = new THREE.Vector3();
function turnBetween(p, q, focus) {
    _turnA.subVectors(p, focus);
    _turnB.subVectors(q, focus);
    return Math.atan2(_turnA.clone().cross(_turnB).length(), _turnA.dot(_turnB));
}
function measurePath(curve, a, b, fromFocus, toFocus) {
    const n = curve.points.length - 1;
    const params = new Set([0, 1]);
    for (let i = 0; i < n; i++) {
        for (let k = 0; k <= PATH_FINE; k++) {
            const u = 0.5 * 10 ** (-12 * (1 - k / PATH_FINE));
            params.add((i + u) / n).add((i + 1 - u) / n);
        }
        for (let j = 1; j < PATH_EVEN; j++) params.add((i + j / PATH_EVEN) / n);
    }
    const t = [...params].sort((x, y) => x - y);
    const points = t.map(v => curve.getPoint(v));
    const start = points[0], end = points[points.length - 1];
    // A body an end sits on (a lander's, or Earth's under the ISS) is left to that end's distance.
    const bodies = [];
    celestialMap.forEach(obj => {
        if (!BODY_TYPES.includes(obj.data.type)) return;
        const center = obj.group.getWorldPosition(new THREE.Vector3());
        const radius = obj.data.radius || 1;
        if (start.distanceTo(center) < radius * FLIGHT_CLIP_RADII || end.distanceTo(center) < radius * FLIGHT_CLIP_RADII) return;
        bodies.push({ center, radius });
    });
    a = Math.max(a, 1e-9);
    b = Math.max(b, 1e-9);
    const clearance = new Float64Array(t.length), effort = new Float64Array(t.length), along = new Float64Array(t.length);
    const travelShare = new Float64Array(t.length); // of each step's effort, the share from distance (the rest from turning)
    points.forEach((p, i) => {
        let h = Math.min(a + p.distanceTo(start), b + p.distanceTo(end));
        for (const o of bodies) h = Math.min(h, p.distanceTo(o.center) - o.radius);
        clearance[i] = Math.max(h, 1e-9);
    });
    // Between samples the clearance is taken to change evenly with distance, so the effort there
    // is a logarithm and the camera's speed never jumps.
    for (let i = 1; i < t.length; i++) {
        const step = points[i].distanceTo(points[i - 1]);
        const h0 = clearance[i - 1], h1 = clearance[i];
        const travel = Math.abs(h1 - h0) > 1e-9 * h0 ? step * Math.log(h1 / h0) / (h1 - h0) : step / h0;
        const turn = LOG_TURN_EFFORT * Math.max(turnBetween(points[i - 1], points[i], fromFocus), turnBetween(points[i - 1], points[i], toFocus));
        along[i] = along[i - 1] + step;
        effort[i] = effort[i - 1] + travel + turn;
        travelShare[i] = travel > 0 ? travel / (travel + turn) : 1;
    }
    return { t, clearance, effort, along, travelShare, length: along[t.length - 1], total: effort[t.length - 1] };
}
let flightPath = null;
const LOG_LOOK_TURN = 0.3; // share of a True-scale flight's time the view takes to turn to its destination

// The point at `e` of the path's effort, into out; returns the share of the path's length there.
function pathPointAt(path, e, out) {
    const { effort } = path;
    let lo = 0, hi = effort.length - 1;
    while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (effort[mid] <= e) lo = mid; else hi = mid;
    }
    const step = path.along[hi] - path.along[lo];
    const h0 = path.clearance[lo], slope = step > 0 ? (path.clearance[hi] - h0) / step : 0;
    const de = Math.max(e - effort[lo], 0) * path.travelShare[hi];
    const x = Math.abs(slope) > 1e-9 ? h0 * Math.expm1(de * slope) / slope : de * h0;
    const f = step > 0 ? THREE.MathUtils.clamp(x / step, 0, 1) : 0;
    flightCurve.getPoint(path.t[lo] + (path.t[hi] - path.t[lo]) * f, out);
    return (path.along[lo] + step * f) / path.length;
}

// Turns the view from direction a to direction b (unit vectors) by share w, into out: azimuth and
// elevation about the camera's up, each in proportion. A turn of near 180 degrees has no
// shortest way round, and a rotation about a×b swung about as that axis wandered, so the
// azimuth's turn is kept to whichever way it went last frame (lookTurnPrev).
let lookTurnPrev = null;
const _lookNorth = new THREE.Vector3();
const _lookEast = new THREE.Vector3();
function turnLook(a, b, w, out) {
    const up = camera.up;
    _lookNorth.set(1, 0, 0);
    if (Math.abs(up.x) > 0.9) _lookNorth.set(0, 0, 1);
    _lookNorth.addScaledVector(up, -_lookNorth.dot(up)).normalize();
    _lookEast.crossVectors(up, _lookNorth);
    const azimuth = v => Math.atan2(v.dot(_lookEast), v.dot(_lookNorth));
    const elevation = v => Math.asin(THREE.MathUtils.clamp(v.dot(up), -1, 1));
    const fromAz = azimuth(a);
    let turn = THREE.MathUtils.euclideanModulo(azimuth(b) - fromAz + Math.PI, 2 * Math.PI) - Math.PI;
    if (lookTurnPrev !== null) turn += 2 * Math.PI * Math.round((lookTurnPrev - turn) / (2 * Math.PI));
    lookTurnPrev = turn;
    const az = fromAz + turn * w;
    const el = elevation(a) + (elevation(b) - elevation(a)) * w;
    return out.copy(_lookNorth).multiplyScalar(Math.cos(az)).addScaledVector(_lookEast, Math.sin(az))
        .multiplyScalar(Math.cos(el)).addScaledVector(up, Math.sin(el));
}

// In True scale the camera rides along with what it leaves (flightFrom: the object, and its focus
// point at the start), handing over to what it flies to by the share of the path covered, so
// neither slides away from it at the ends (the ISS moves 7.7 km/s; at Diagram scale the drift is
// too small to matter and only the destination's is blended in).
let flightFrom = null;
const _fromDrift = new THREE.Vector3();
const _lookFrom = new THREE.Vector3();
const _lookTo = new THREE.Vector3();
function getFromDrift() {
    if (!flightFrom || !isInScene(flightFrom.mesh)) return _fromDrift.set(0, 0, 0);
    return getFocusPoint(flightFrom.mesh, _fromDrift).sub(flightFrom.start);
}

// What the view is on: the selection, except during a flight from an object, when it's whichever
// end the camera is nearer. Shadows and the ground under a lander are fitted to it (lighting.js,
// landers.js). Fitted to the selection from the start of a flight, they were fitted to something
// perhaps thousands of km away while the camera was still beside what it was leaving, and the
// shadows there broke up as it left.
const _subjectFrom = new THREE.Vector3();
const _subjectTo = new THREE.Vector3();
export function getViewSubject() {
    if (!isTransitioning || !flightFrom || !isInScene(flightFrom.mesh) || flightFrom.mesh === selectedObject) return selectedObject;
    if (!selectedObject) return flightFrom.mesh;
    const fromGap = camera.position.distanceTo(getFocusPoint(flightFrom.mesh, _subjectFrom)) - getVisualRadius(celestialMap.get(flightFrom.mesh.userData.name));
    const toGap = camera.position.distanceTo(getFocusPoint(selectedObject, _subjectTo)) - getVisualRadius(celestialMap.get(selectedObject.userData.name));
    return fromGap < toGap ? flightFrom.mesh : selectedObject;
}

// arrivalTime: the motion-clock time destPos was computed for (the camera's slow orbit around
// its target keeps moving, so flights aim for where it will be on arrival and hold that aim).
// destView: the camera's distance from what it will look at on arrival. from, to: the objects
// left and flown to, if any.
function initiateTransition(destPos, { arrivalTime = null, destView = null, from = null, to = null } = {}) {
    transitionStartPos.copy(camera.position);
    transitionStartTarget.copy(controls.target);
    flightFrom = from && isInScene(from) ? { mesh: from, start: getFocusPoint(from, new THREE.Vector3()) } : null;

    flightCurve = planFlightPath(camera.position, destPos, surfaceClimb(from, camera.position), surfaceClimb(to, destPos));
    _plannedDest.copy(destPos);
    const startView = camera.position.distanceTo(controls.target);
    const endView = destView ?? destPos.distanceTo(transitionEndTarget);
    const destFocus = to ? getFocusPoint(to, new THREE.Vector3()) : transitionEndTarget;
    flightPath = view.logFlights ? measurePath(flightCurve, startView, endView, transitionStartTarget, destFocus) : null;
    const length = flightPath ? flightPath.length : flightCurve.getLength();
    lookTurnPrev = null;

    isTransitioning = true;
    transitionProgress = 0;
    transitionDuration = estimateFlightDuration(length, startView, endView, flightPath?.total);
    // In True scale aim for the actual arrival time (the path can be much longer than the straight
    // line the estimate used), so the camera's slow orbit carries on from there without a lurch.
    flightArrivalTime = flightPath || arrivalTime === null ? motionTime + transitionDuration : arrivalTime;

    controls.enabled = false;
}

// Visitors can't steer mid-flight (OrbitControls is off), so any grab, scroll or
// Escape during a flight fast-forwards it to arrive within a moment.
export function hurry() {
    if (!isTransitioning) return;
    const remaining = 1 - transitionProgress;
    if (remaining <= 0) return;
    transitionDuration = Math.min(transitionDuration, HURRY_FLIGHT_SECONDS / remaining);
}

function releaseUserControl() {
    userHasControl = false;
    controls.autoRotate = false;
    clearTimeout(autoOrbitResumeTimer);
}

// Settles the promise flyTo returned: true on arrival, false if something else was chosen first.
let arrivalWaiter = null;
function settleArrival(arrived) {
    const resolve = arrivalWaiter;
    arrivalWaiter = null;
    resolve?.(arrived);
}

// Fly to an object by name. Emits "select" straight away (with `waiting` while a lander's body
// loads) and "arrive" when the camera gets there; the promise resolves true on arrival, or false
// if another selection or a deselect comes first.
export function flyTo(name) {
    const obj = celestialMap.get(name);
    if (!obj) return Promise.resolve(false);
    settleArrival(false);
    const arrival = new Promise(resolve => { arrivalWaiter = resolve; });
    startFlight(obj.mesh, obj.data);
    return arrival;
}

function startFlight(mesh, data) {
    pendingLanderFocus = null;
    if (reframePending || scaleHold) { afterReframe = () => startFlight(mesh, data); return; }

    // A lander whose body hasn't loaded yet is parked off-scene (at the Sun's centre). Show its
    // details now, make sure its body loads, and fly there once it lands (see attemptToLand).
    if (data && data.orbit_type === 'landed' && !isInScene(mesh)) {
        pendingLanderFocus = { mesh, data };
        const parent = celestialMap.get(data.parent);
        if (parent) loadModelForItem(parent.data, true);
        if (!data.isModelLoaded) loadModelForItem(data, true);
        attemptToLand();
        if (pendingLanderFocus) {
            hasSelection = true;
            emitEngine('select', { data, waiting: true });
        }
        return;
    }

    releaseUserControl();
    solarSystemView = false;
    overviewFrame = null;
    const leaving = selectedObject;
    selectedObject = mesh;
    isTracking = false;

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
    const arrivalTime = motionTime + estimateFlightDuration(camera.position.distanceTo(mesh.getWorldPosition(new THREE.Vector3())),
        camera.position.distanceTo(controls.target), calculateFocusDistance(mesh));
    getIdealCameraPosition(mesh, arrivalTime, initIdealPos);

    const initTarget = new THREE.Vector3();
    getFocusPoint(mesh, initTarget);

    initiateTransition(initIdealPos, { arrivalTime, destView: initIdealPos.distanceTo(initTarget), from: leaving, to: mesh });
    hasSelection = true;
    emitEngine('select', { data, waiting: false });
}

// Let the visitor steer the camera (drag, scroll, keys), or not. Turning it off hands the camera
// back to its scripted orbit.
export function setUserControl(enabled) {
    userControlEnabled = enabled;
    controls.enabled = enabled && !isTransitioning;
    if (!enabled) releaseUserControl();
}

// Someone picked a lander before it had landed: fly there now.
onLanded(data => {
    if (!pendingLanderFocus || pendingLanderFocus.data !== data) return;
    const { mesh } = pendingLanderFocus;
    pendingLanderFocus = null;
    startFlight(mesh, data);
});

// Let go of the selection (and any flight to it). Emits "deselect".
export function deselect() {
    pendingLanderFocus = null;
    afterReframe = null;
    releaseUserControl();
    selectedObject = null;
    isTracking = false;
    isTransitioning = false;
    controls.enabled = userControlEnabled && !scaleHold;
    hasSelection = false;
    settleArrival(false);
    emitEngine('deselect');
}

// Which way is up for the viewer. Cruising between worlds the Solar System's plane stays level
// (+Y), so long flights never roll. Only on the final approach to a lander or rover does the view
// turn so its own ground is below it, and it turns back as the camera leaves. The turn is tied
// to the camera's distance from the lander, so it happens during the last stretch of the approach
// and no earlier.
const UP_TURN_FAR = 12;  // no turn beyond this many focus distances from the lander
const UP_TURN_NEAR = 3;  // fully turned inside this many
// In True scale the approach crosses powers of ten at a steady pace, so the turn is spread over
// the logarithm of the distance, from this many focus distances in (12 to 3 took half a second).
const UP_TURN_FAR_LOG = 1000;
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
        let w = view.logFlights
            ? Math.log(UP_TURN_FAR_LOG / range) / Math.log(UP_TURN_FAR_LOG / UP_TURN_NEAR)
            : (UP_TURN_FAR - range) / (UP_TURN_FAR - UP_TURN_NEAR);
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

// The camera's step each frame: a flight, riding along with the selection, or the overview's
// slow turn. False when the selection's position isn't a number, and the frame is dropped.
export function updateCamera(dt, elapsedTime) {
    if (reframePending) reframeNow();
    if (!moveCamera(dt, elapsedTime)) return false;
    // Which way is up is worked out once the camera has caught up with its subject. Before, in
    // True scale, it was measured from where the camera was before following the lander's planet
    // for the frame (Mars carries a lander some 330 m a frame), so the view never turned fully
    // upright over a lander and rolled a little with every frame's length.
    updateCameraUp(dt);
    camera.lookAt(controls.target);
    return true;
}

function moveCamera(dt, elapsedTime) {
    if (scaleHold) {
        holdForScale(dt, elapsedTime);
        return true;
    }
    if (isTransitioning) {
        transitionProgress += dt / transitionDuration;
        if (transitionProgress >= 1.0) {
            transitionProgress = 1.0;
            isTransitioning = false;
            controls.enabled = userControlEnabled;
            if (selectedObject) {
                isTracking = true;
                getFocusPoint(selectedObject, _lastTrackedPos);
                selectedObject.getWorldQuaternion(_lastTrackedQuat);
                emitEngine('arrive', { data: selectedObject.userData });
                settleArrival(true);
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
        let share = t;
        if (flightPath) share = pathPointAt(flightPath, t * flightPath.total, camera.position);
        else flightCurve.getPointAt(t, camera.position);
        _destDrift.subVectors(destPos, _plannedDest);
        if (flightPath) {
            // By the share of the path, not of the time: the camera closes on the destination
            // by powers of ten, and a drift blended in by time would be left over at the end
            // and swing the view in the last moments.
            camera.position.addScaledVector(_destDrift, share);
            camera.position.addScaledVector(getFromDrift(), 1 - share);
        } else {
            camera.position.addScaledVector(_destDrift, t * t * (3 - 2 * t));
        }

        // The view turns to face the destination early on, while the camera has hardly moved; in
        // True scale over a longer share, as the camera hardly moves for longer.
        let tLook = Math.min(transitionProgress / (flightPath ? LOG_LOOK_TURN : 0.2), 1.0);
        tLook = easeInOutCubic(tLook);

        // Turn the view from the start's direction to the destination's. Sliding the point looked
        // at from one to the other whipped the view round in a frame or two when the start was
        // much nearer than the destination (leaving a lander; in True scale, leaving anything).
        _lookFrom.copy(transitionStartTarget).sub(camera.position);
        if (flightPath) _lookFrom.add(_fromDrift);
        _lookTo.subVectors(destTarget, camera.position);
        const fromDist = _lookFrom.length(), toDist = _lookTo.length();
        if (tLook < 1 && fromDist > 0 && toDist > 0) {
            turnLook(_lookFrom.divideScalar(fromDist), _lookTo.divideScalar(toDist), tLook, _lookFrom);
            controls.target.copy(camera.position).addScaledVector(_lookFrom, fromDist ** (1 - tLook) * toDist ** tLook);
        } else {
            controls.target.copy(destTarget);
        }
        controls.update();
    }
    else if (selectedObject && isTracking) {
        getFocusPoint(selectedObject, _targetWorldPos);
        if (isNaN(_targetWorldPos.x)) { isTracking = false; return false; }

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
                _idealCamPos.copy(_targetWorldPos).add(landerViewOffset(selectedObject, _targetWorldPos, dist, elapsedTime));
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
            const angle = heldMotionTime === null ? CAMERA_ORBIT_SPEED * dt * solarSystemSpin * solarSystemSpin : 0;
            camera.position.applyAxisAngle(_UP, angle);
            controls.target.applyAxisAngle(_UP, angle);
            controls.update();
        }
    }
    return true;
}

// Camera position, looking at the Sun, that fits every planet's whole orbit on screen, seen from
// SOLAR_SYSTEM_VIEW_ELEVATION above the orbital plane. Found by sampling points around each
// orbit and searching for the distance at which they all just fit. With a group framed
// (overviewFrame), its orbits instead fill GROUP_VIEW_FILL of the part of the screen it was given
// (updateViewOffset centres the Sun in that part).
function getSolarSystemView(outPos, outTarget) {
    const points = [];
    const framed = overviewFrame ? new Set(overviewFrame.names) : null;
    celestialMap.forEach(obj => {
        const orbit = obj.data.orbit;
        const wanted = framed ? framed.has(obj.data.name) : obj.data.type === 'planet';
        if (!wanted || !orbit || !orbit.a || !orbit.rate) return;
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

    let fillX = SOLAR_SYSTEM_VIEW_FILL, fillY = SOLAR_SYSTEM_VIEW_FILL;
    if (overviewFrame) {
        const { left, right, top, bottom } = overviewFrame.insets;
        fillX = GROUP_VIEW_FILL * Math.max(0.1, 1 - (left + right) / window.innerWidth);
        fillY = GROUP_VIEW_FILL * Math.max(0.1, 1 - (top + bottom) / window.innerHeight);
    }
    const probe = new THREE.PerspectiveCamera(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
    const v = new THREE.Vector3();
    const fits = distance => {
        probe.position.copy(dir).multiplyScalar(distance);
        probe.lookAt(outTarget);
        probe.updateMatrixWorld();
        return points.every(p => {
            v.copy(p).project(probe);
            return v.z < 1 && Math.abs(v.x) <= fillX && Math.abs(v.y) <= fillY;
        });
    };
    let near = 1, far = controls.maxDistance;
    for (let i = 0; i < 40; i++) {
        const mid = (near + far) / 2;
        if (fits(mid)) far = mid; else near = mid;
    }
    return outPos.copy(dir).multiplyScalar(far);
}

// How far out the framed group's orbits are drawn now (the farthest aphelion, in scene units), or
// null with no group framed. A change of scale mode holds the view on it.
export function overviewFrameReach() {
    if (!solarSystemView || !overviewFrame) return null;
    let reach = 0;
    overviewFrame.names.forEach(name => {
        const orbit = celestialMap.get(name)?.data.orbit;
        if (orbit) reach = Math.max(reach, orbitFarthest(orbit));
    });
    return reach || null;
}

// Let go of any selection and show the whole Solar System, every planet's orbit lit.
// animate: false jumps straight there. frame: { names, insets } frames those objects' orbits
// instead, in the screen less the insets (CSS pixels from each edge).
export function showOverview({ animate = true, frame = null } = {}) {
    if (reframePending || scaleHold) { afterReframe = () => showOverview({ animate, frame }); return; }
    const leaving = selectedObject;
    deselect();
    releaseUserControl();

    selectedObject = null;
    isTracking = false;
    solarSystemView = true;
    solarSystemSpin = 0;
    overviewFrame = frame && frame.names?.length
        ? { names: [...frame.names], insets: { left: 0, right: 0, top: 0, bottom: 0, ...frame.insets } }
        : null;

    getSolarSystemView(transitionEndPos, transitionEndTarget);

    if (animate) {
        initiateTransition(transitionEndPos, { from: leaving });
    } else {
        camera.position.copy(transitionEndPos);
        controls.target.copy(transitionEndTarget);
        controls.update();
    }
}

// After a change of scale mode (setScaleMode): take the mode's view settings and cut to the
// selection, or the overview, as now drawn. Done at the next camera step, once everything has been
// moved to its new place. A flight under way ends there, at its destination.
// A flight asked for before then would start from where things were, so it waits for it
// (afterReframe).
let reframePending = false;
let afterReframe = null;
export function reframe() { reframePending = true; }
function reframeNow() {
    reframePending = false;
    const next = afterReframe;
    afterReframe = null;
    camera.near = view.cameraNear ?? camera.near;
    camera.far = view.cameraFar;
    camera.updateProjectionMatrix();
    controls.maxDistance = view.maxDistance;
    releaseUserControl();
    if (isTransitioning) {
        if (solarSystemView) getSolarSystemView(transitionEndPos, transitionEndTarget);
        transitionProgress = 1;
    } else placeCameraAt(motionTime);
    next?.();
}

// --- WHILE THE MODE CHANGES ---
// An animated change of mode (scale-change.js) moves and resizes everything round the camera.
// The camera holds on its subject: it rides with it, at a distance in proportion to the subject's
// drawn size, so the subject keeps its size and place on screen while the Solar System changes
// round it. Over the change the view eases from where it was to the subject's usual view in the
// new mode (straight away if the camera was already there, more slowly if the visitor had steered
// it). With nothing selected the view is scaled about the Sun by how far the outer planets are
// drawn, so the whole system stays framed, and keeps turning. Flights asked for meanwhile wait.
const SCALE_HOLD_EASE = 0.15;          // share of the change the view takes to settle, as it was
const SCALE_HOLD_EASE_STEERED = 0.5;   // ...or after the visitor had steered it
let scaleHold = null;
export function beginScaleHold(reach) {
    const subject = isTracking && selectedObject && !isTransitioning ? selectedObject : null;
    const hold = { subject, p: 0, ease: userHasControl ? SCALE_HOLD_EASE_STEERED : SCALE_HOLD_EASE, reach, reach0: reach(),
        offset: new THREE.Vector3(), cam: camera.position.clone(), target: controls.target.clone() };
    if (subject) {
        getFocusPoint(subject, _targetWorldPos);
        hold.offset.subVectors(camera.position, _targetWorldPos).divideScalar(calculateFocusDistance(subject));
        // A lander's view turns with its body, as when riding along with it.
        if (subject.userData.orbit_type === 'landed') hold.offset.applyQuaternion(subject.getWorldQuaternion(_trackQuat).invert());
    }
    releaseUserControl();
    controls.enabled = false;
    camera.far = view.cameraFar;
    camera.updateProjectionMatrix();
    controls.maxDistance = view.maxDistance;
    scaleHold = hold;
}

export function setScaleHoldProgress(p) {
    if (scaleHold) scaleHold.p = p;
}

const _holdIdeal = new THREE.Vector3();
function holdForScale(dt, elapsedTime) {
    const hold = scaleHold;
    if (!hold.subject) {
        if (solarSystemView && heldMotionTime === null) {
            hold.cam.applyAxisAngle(_UP, CAMERA_ORBIT_SPEED * dt);
            hold.target.applyAxisAngle(_UP, CAMERA_ORBIT_SPEED * dt);
        }
        const k = hold.reach() / hold.reach0;
        camera.position.copy(hold.cam).multiplyScalar(k);
        controls.target.copy(hold.target).multiplyScalar(k);
        controls.update();
        return;
    }
    const subject = hold.subject;
    getFocusPoint(subject, _targetWorldPos);
    if (isNaN(_targetWorldPos.x)) return;
    _tempVec1.copy(hold.offset).multiplyScalar(calculateFocusDistance(subject));
    if (subject.userData.orbit_type === 'landed') _tempVec1.applyQuaternion(subject.getWorldQuaternion(_trackQuat));
    getIdealCameraPosition(subject, elapsedTime, _holdIdeal);
    _tempVec2.subVectors(_holdIdeal, _targetWorldPos);
    // From the held view to the usual one: direction turned, distance by ratio.
    let w = Math.min(hold.p / hold.ease, 1);
    w = w * w * (3 - 2 * w);
    const from = _tempVec1.length(), to = _tempVec2.length();
    if (from > 0 && to > 0) {
        _tempVec1.divideScalar(from).lerp(_tempVec2.divideScalar(to), w);
        if (_tempVec1.lengthSq() < 1e-12) _tempVec1.copy(_tempVec2);
        _tempVec1.setLength(from ** (1 - w) * to ** w);
    }
    camera.position.copy(_targetWorldPos).add(_tempVec1);
    keepOutsideBodies(camera.position, subject);
    controls.target.copy(_targetWorldPos);
    controls.update();
}

// The change is over: ride along with the subject as usual from here, and fly anywhere asked for.
export function endScaleHold() {
    const hold = scaleHold;
    if (!hold) return;
    scaleHold = null;
    camera.near = view.cameraNear ?? camera.near;
    camera.far = view.cameraFar;
    camera.updateProjectionMatrix();
    controls.maxDistance = view.maxDistance;
    controls.enabled = userControlEnabled;
    if (hold.subject && hold.subject === selectedObject) {
        isTracking = true;
        getFocusPoint(selectedObject, _lastTrackedPos);
        selectedObject.getWorldQuaternion(_lastTrackedQuat);
    }
    const next = afterReframe;
    afterReframe = null;
    next?.();
}

// Put the camera straight where the motion clock at `time` says, so it has nothing left to ease
// (holdMotion, and a change of scale mode). Not during a flight, or while the visitor steers.
export function placeCameraAt(time) {
    if (isTransitioning || userHasControl) return;
    if (isTracking && selectedObject) {
        getIdealCameraPosition(selectedObject, time, camera.position);
        getFocusPoint(selectedObject, controls.target);
        // The tracking step follows the target's movement from here, not from before the jump.
        _lastTrackedPos.copy(controls.target);
        selectedObject.getWorldQuaternion(_lastTrackedQuat);
    } else if (solarSystemView) {
        getSolarSystemView(camera.position, controls.target);
    }
    controls.update();
}

// Keyboard steering for the 3D view (the canvas is focusable): arrows turn the view about what
// it's looking at, plus and minus move in and out. It goes through the same path as a drag, so
// it ends the tour and hands steering to the visitor.
const KEY_TURN_STEP = 6 * Math.PI / 180;
const KEY_ZOOM_STEP = 1.15;
const KEY_POLE_MARGIN = 0.05; // radians kept clear of straight up and down
const _keyOffset = new THREE.Vector3();
const _keyRight = new THREE.Vector3();

// The camera's controls, once the renderer exists: drag, scroll and the keyboard steer.
export function initControls() {
    setLandingFirst(() => pendingLanderFocus?.data.name ?? selectedObject?.userData.name ?? null);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxDistance = view.maxDistance;

    // Taking hold of the camera around a focused object hands steering to the visitor instead of
    // fighting them back onto the scripted orbit.
    controls.addEventListener('start', () => {
        if (isTracking || solarSystemView) {
            userHasControl = true;
            controls.autoRotate = false;
            clearTimeout(autoOrbitResumeTimer);
        }
        emitEngine('steer');
    });
    controls.addEventListener('end', () => {
        if (!userHasControl || prefersReducedMotion.matches) return;
        clearTimeout(autoOrbitResumeTimer);
        autoOrbitResumeTimer = setTimeout(() => {
            if (userHasControl && (isTracking || solarSystemView)) controls.autoRotate = true;
        }, AUTO_ORBIT_RESUME_MS);
    });
    renderer.domElement.addEventListener('keydown', (e) => {
        if (!userControlEnabled || scaleHold || e.altKey || e.ctrlKey || e.metaKey) return;
        const turn = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
        const zoom = { '+': 1 / KEY_ZOOM_STEP, '=': 1 / KEY_ZOOM_STEP, '-': KEY_ZOOM_STEP, '_': KEY_ZOOM_STEP }[e.key];
        if (!turn && !zoom) return;
        e.preventDefault();
        hurry();
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
}
