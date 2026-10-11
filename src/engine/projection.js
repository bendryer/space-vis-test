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
