// Where an object is on screen: its bounding sphere projected through the camera (projectBody).
import * as THREE from 'three';
import { camera, isInScene } from './scene.js';

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
// The geometries are told apart by their ids (count, sum and a mix of them), not a string of
// their uuids: this runs for every object every frame.
function getLocalBodySphere(obj) {
    const root = obj.mesh;
    let count = 0, sum = 0, mix = 0;
    root.traverse(child => {
        if (!child.geometry) return;
        count++; sum += child.geometry.id; mix = (Math.imul(mix, 31) + child.geometry.id) | 0;
    });
    if (!count) return null;
    const key = obj.reticleSphereKey;
    if (key && key.count === count && key.sum === sum && key.mix === mix) return obj.reticleSphere;

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
    obj.reticleSphereKey = { count, sum, mix };
    obj.reticleSphere = sphere;
    return sphere;
}

// The body's on-screen centre and radius, or null when it is off-screen or behind us: its
// bounding sphere projected exactly, the radius carried out along the camera's up axis so view
// offsets are respected.
export function projectBody(obj) {
    if (!obj || !obj.mesh || !isInScene(obj.group)) return null;
    obj.mesh.updateWorldMatrix(true, false);
    const local = getLocalBodySphere(obj);
    if (!local) return null;
    _bodyCentre.copy(local.center).applyMatrix4(obj.mesh.matrixWorld);
    obj.mesh.getWorldScale(_worldScale);
    const worldR = local.radius * Math.max(_worldScale.x, _worldScale.y, _worldScale.z);
    const distance = camera.position.distanceTo(_bodyCentre);
    const inside = distance <= worldR;

    _camUp.setFromMatrixColumn(camera.matrixWorld, 1);
    _bodyEdge.copy(_bodyCentre).addScaledVector(_camUp, worldR).project(camera);
    _bodyCentre.project(camera);
    if (_bodyCentre.z > 1) return null; // behind the camera
    const w = window.innerWidth, h = window.innerHeight;
    const cx = (_bodyCentre.x * 0.5 + 0.5) * w;
    const cy = (-_bodyCentre.y * 0.5 + 0.5) * h;
    const ex = (_bodyEdge.x * 0.5 + 0.5) * w;
    const ey = (-_bodyEdge.y * 0.5 + 0.5) * h;
    return { cx, cy, bodyR: inside ? Infinity : Math.hypot(ex - cx, ey - cy), distance, w, h };
}

// Whether a body (a planet, moon, asteroid or comet) stands between the camera and an object.
// Judged in 3D: on screen it can't be, near a surface, where the body's centre is behind the
// camera and it has no disc to test against (asteroids' markers showed on Mars's ground). The
// bodies' spheres are taken a thousandth smaller, so a lander on the near side isn't hidden by
// the ground it stands on. hidingSpheres measures them, once a frame; isHiddenBy tests against them.
const HIDING_TYPES = new Set(['planet', 'moon', 'asteroid', 'comet']);   // not the Sun: its mesh takes in its glow
export function hidingSpheres(objects) {
    const spheres = [];
    for (const body of objects) {
        if (!HIDING_TYPES.has(body.data.type) || !body.mesh || !isInScene(body.group)) continue;
        const local = getLocalBodySphere(body);
        if (!local) continue;
        body.mesh.updateWorldMatrix(true, false);   // a hidden body's isn't kept up to date (draw.js)
        body.mesh.getWorldScale(_worldScale);
        spheres.push({
            obj: body,
            centre: local.center.clone().applyMatrix4(body.mesh.matrixWorld),
            r: local.radius * Math.max(_worldScale.x, _worldScale.y, _worldScale.z) * 0.999,
        });
    }
    return spheres;
}

const _hidePoint = new THREE.Vector3();
const _hideToward = new THREE.Vector3();
const _hideNear = new THREE.Vector3();
export function isHiddenBy(obj, spheres) {
    if (!obj || !obj.mesh) return false;
    obj.mesh.getWorldPosition(_hidePoint);
    _hideToward.subVectors(_hidePoint, camera.position);
    const length2 = _hideToward.lengthSq();
    if (!(length2 > 0)) return false;
    for (const { obj: body, centre, r } of spheres) {
        if (body === obj) continue;
        // The nearest point to the body's centre on the line of sight, short of the object.
        const t = THREE.MathUtils.clamp(_hideNear.subVectors(centre, camera.position).dot(_hideToward) / length2, 0, 1);
        if (t < 1 && _hideNear.copy(camera.position).addScaledVector(_hideToward, t).distanceToSquared(centre) < r * r) return true;
    }
    return false;
}
