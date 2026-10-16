// A ray against one mesh, as three.js's own raycast finds it, but quicker on a big surface. Landing
// casts many rays at a body's surface (up to eleven a lander, and every lander lands again at the
// end of a change of scale mode), and three.js tests every triangle for each one: about 8 ms a
// lander on a 50,000-triangle Earth. So each triangle's bounding sphere is worked out once per
// geometry, and a ray is tested, by three.js as before, against only the triangles whose sphere it
// passes through. A triangle the ray meets lies inside its own sphere, so none is missed: the hits
// are the ones three.js would find.
import * as THREE from 'three';

const spheres = new WeakMap();   // geometry -> { key, centres, radii }
const _inverse = new THREE.Matrix4();
const _ray = new THREE.Ray();
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();

function triangleSpheres(geometry) {
    const pos = geometry.attributes.position, index = geometry.index;
    const key = `${pos.version}:${index ? index.version : -1}:${pos.count}:${index ? index.count : -1}`;
    const cached = spheres.get(geometry);
    if (cached?.key === key) return cached;
    const count = Math.floor((index ? index.count : pos.count) / 3);
    const centres = new Float64Array(count * 3), radii = new Float64Array(count);
    const vertex = i => (index ? index.getX(i) : i);
    for (let t = 0; t < count; t++) {
        _a.fromBufferAttribute(pos, vertex(3 * t));
        _b.fromBufferAttribute(pos, vertex(3 * t + 1));
        _c.fromBufferAttribute(pos, vertex(3 * t + 2));
        const cx = (_a.x + _b.x + _c.x) / 3, cy = (_a.y + _b.y + _c.y) / 3, cz = (_a.z + _b.z + _c.z) / 3;
        centres[3 * t] = cx; centres[3 * t + 1] = cy; centres[3 * t + 2] = cz;
        radii[t] = Math.sqrt(Math.max(
            (_a.x - cx) ** 2 + (_a.y - cy) ** 2 + (_a.z - cz) ** 2,
            (_b.x - cx) ** 2 + (_b.y - cy) ** 2 + (_b.z - cz) ** 2,
            (_c.x - cx) ** 2 + (_c.y - cy) ** 2 + (_c.z - cz) ** 2)) * (1 + 1e-6) + 1e-9;
    }
    const entry = { key, centres, radii, count };
    spheres.set(geometry, entry);
    return entry;
}

// The nearest hit of `raycaster` on `mesh` and its children (as intersectObject(mesh, true)[0]),
// or undefined. A mesh this can't speed up (a few hundred triangles, groups of materials) goes to
// three.js whole.
const MIN_TRIANGLES = 2000;
export function raycastSurface(raycaster, mesh) {
    const own = mesh.layers.test(raycaster.layers) ? raycastMesh(raycaster, mesh) : undefined;
    const below = mesh.children.length ? raycaster.intersectObjects(mesh.children, true)[0] : undefined;
    return own && below ? (own.distance <= below.distance ? own : below) : own || below;
}

function raycastMesh(raycaster, mesh) {
    const geometry = mesh.geometry;
    const pos = geometry?.attributes.position;
    const triangles = pos ? (geometry.index ? geometry.index.count : pos.count) / 3 : 0;
    if (triangles < MIN_TRIANGLES || Array.isArray(mesh.material) || geometry.groups.length || geometry.morphAttributes.position) {
        const hits = [];
        mesh.raycast(raycaster, hits);
        return hits.sort((a, b) => a.distance - b.distance)[0];
    }
    const { centres, radii, count } = triangleSpheres(geometry);
    // The ray in the mesh's own frame (three.js turns it so too), as a half-line from its origin.
    _ray.copy(raycaster.ray).applyMatrix4(_inverse.copy(mesh.matrixWorld).invert());
    const { origin: o, direction: d } = _ray;
    const index = geometry.index;
    const picked = [];
    for (let t = 0; t < count; t++) {
        const vx = centres[3 * t] - o.x, vy = centres[3 * t + 1] - o.y, vz = centres[3 * t + 2] - o.z;
        const along = Math.max(0, vx * d.x + vy * d.y + vz * d.z);
        const ex = vx - d.x * along, ey = vy - d.y * along, ez = vz - d.z * along;
        if (ex * ex + ey * ey + ez * ez <= radii[t] * radii[t]) picked.push(t);
    }
    if (!picked.length) return undefined;
    const subset = new Uint32Array(picked.length * 3);
    picked.forEach((t, k) => {
        for (let j = 0; j < 3; j++) subset[3 * k + j] = index ? index.getX(3 * t + j) : 3 * t + j;
    });
    const part = new THREE.BufferGeometry();
    part.setAttribute('position', pos);
    part.setIndex(new THREE.BufferAttribute(subset, 1));
    if (!geometry.boundingSphere) geometry.computeBoundingSphere();
    part.boundingSphere = geometry.boundingSphere;
    part.boundingBox = geometry.boundingBox;
    const stand = new THREE.Mesh(part, mesh.material);
    stand.matrixWorld.copy(mesh.matrixWorld);
    stand.layers.mask = mesh.layers.mask;
    const hits = [];
    stand.raycast(raycaster, hits);
    hits.sort((a, b) => a.distance - b.distance);
    const hit = hits[0];
    if (hit) {
        hit.object = mesh;
        if (hit.faceIndex !== undefined) hit.faceIndex = picked[hit.faceIndex];
    }
    return hit;
}
