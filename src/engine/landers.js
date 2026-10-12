// Landers: setting each one down on its body's surface (on its own feet), and again when the
// body's detail level changes.
import * as THREE from 'three';
import { celestialMap } from './state.js';
import { DEBUG_LANDING, getEffectiveModel } from './config.js';

const _UP = new THREE.Vector3(0, 1, 0);

// Landers waiting for their body's surface (see attemptToLand).
export const pendingLanders = [];

// --- LANDER LOGIC ---
// Where a lander touches the ground, in its own frame: its lowest points (leg ends, wheels), the
// one farthest out in each of six directions round it, in order. Cached per detail level and size
// (a change of scale mode resizes it).
const SUPPORT_SECTORS = 6;
function getLanderSupports(obj) {
    const level = obj && (obj.highLevel || obj.lowLevel);
    if (!level) return null;
    if (obj.supportsLevel === level && obj.supportsScale === obj.mesh.scale.x) return obj.supports;
    obj.supportsScale = obj.mesh.scale.x;
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
    // Keep the lander over its own landing point and only raise or lower it (along the surface
    // normal) until its feet meet that plane. Centring its feet instead slid it sideways whenever a
    // detail level with a slightly different footprint arrived: LUPEX visibly jumped as it loaded.
    const base = n.clone().multiplyScalar(supports.points[0].y); // its feet, all at the model's bottom
    const lift = centre.clone().sub(point).sub(base).dot(n) / normal.dot(n);
    return { position: point.clone().addScaledVector(normal, lift), normal: n };
}

// Lands again the landers on `obj` (and `obj` itself, if it's one) that are already down: called
// when a detail level arrives, so they sit on the surface shown and on their own feet.
export function relandLanders(obj) {
    celestialMap.forEach(child => {
        const d = child.data;
        if (d.orbit_type !== 'landed' || (child !== obj && d.parent !== obj.data.name)) return;
        const parent = celestialMap.get(d.parent);
        if (!parent || child.group.parent !== parent.meshGroup) return; // not down yet
        if (!pendingLanders.some(r => r.data === d)) pendingLanders.push({ group: child.group, data: d });
    });
    attemptToLand();
}

// --- GROUND UP CLOSE (True scale) ---
// A planet's or moon's sphere is stored in 32-bit floats round its centre, which at Mars's true
// size is good to about a third of a metre: a 3 m rover visibly shook against the ground under it
// (and its shadow with it) as the camera moved. And its triangles are hundreds of km across, so
// the GPU worked out each point of the ground under a lander (where it is, how the spotlight and
// the Sun light it, whether it's in shadow) from corners 100 km and more away, and those sums too
// came out tens of centimetres astray, differently from one frame to the next: the light and the
// shadows round a lander shimmered. So while a lander is shown in True scale, its body's surface
// meshes are held relative to the landing site, and their triangles near it are split, finer the
// nearer, so the corners round the lander are near it too. The surface is the same, point for
// point (a flat triangle split is still flat, and its colours and shading are spread across it
// just as before); only where its numbers count from, and how many corners it has, change.
const REFINE_SHARE = 0.5;     // near the site, no triangle longer than this share of its distance from it
const REFINE_FINEST = 1e-7;   // scene units (13 cm in True scale): no need to split smaller than this
const _site = new THREE.Vector3();
const _scale = new THREE.Vector3();
export function centreSurfaceOn(landerObj) {
    const body = celestialMap.get(landerObj.data.parent);
    if (!body || body.surfaceSite === landerObj) return;
    if (landerObj.group.parent !== body.meshGroup) return;   // not down yet
    landerObj.group.getWorldPosition(_site);
    body.mesh.updateWorldMatrix(true, true);
    body.mesh.children.forEach(m => {
        if (!m.isMesh || m.rotation.x || m.rotation.y || m.rotation.z || m.scale.x !== 1) return;
        m.userData.surfaceGeometry ??= m.geometry;
        // The site in the original geometry's numbers: this mesh's own, plus where it's moved to.
        const origin = m.worldToLocal(_site.clone()).add(m.position);
        const geometry = refineAround(m.userData.surfaceGeometry, origin, REFINE_FINEST / m.getWorldScale(_scale).x);
        geometry.computeBoundingBox();
        geometry.computeBoundingSphere();
        if (m.geometry !== m.userData.surfaceGeometry) m.geometry.dispose();
        m.geometry = geometry;
        m.position.copy(origin);
    });
    body.surfaceSite = landerObj;
}

// A copy of `source` with `origin` taken off every position, and the triangles near it (now at
// 0, 0, 0) split in four, again and again, until each is no longer than REFINE_SHARE of its
// distance from it (or `finest`). Each new corner is a blend of the corners it lies between, in
// every attribute (position, normal, texture position). A triangle left whole beside a split one
// has the split one's new corners along their shared edge: it's fanned from its middle to meet
// them, so the surface has no cracks.
const _tri = new THREE.Triangle();
const _nearest = new THREE.Vector3();
const _ORIGIN = new THREE.Vector3();
function refineAround(source, origin, finest) {
    const names = Object.keys(source.attributes);
    const sizes = names.map(n => source.attributes[n].itemSize);
    const values = names.map(n => Array.from(source.attributes[n].array));
    const position = values[names.indexOf('position')];
    let count = source.attributes.position.count;
    for (let i = 0; i < count; i++) {
        position[3 * i] -= origin.x; position[3 * i + 1] -= origin.y; position[3 * i + 2] -= origin.z;
    }
    const blend = (ids, weights) => {
        values.forEach((v, k) => {
            const size = sizes[k];
            for (let c = 0; c < size; c++) v.push(ids.reduce((sum, id, j) => sum + v[id * size + c] * weights[j], 0));
        });
        return count++;
    };
    const mids = new Map();
    const key = (a, b) => (a < b ? a * 2 ** 26 + b : b * 2 ** 26 + a);
    const mid = (a, b) => {
        let m = mids.get(key(a, b));
        if (m === undefined) { m = blend([a, b], [0.5, 0.5]); mids.set(key(a, b), m); }
        return m;
    };
    const corner = (i, v) => v.set(position[3 * i], position[3 * i + 1], position[3 * i + 2]);
    const tooBig = (a, b, c) => {
        corner(a, _tri.a); corner(b, _tri.b); corner(c, _tri.c);
        const longest = Math.max(_tri.a.distanceTo(_tri.b), _tri.b.distanceTo(_tri.c), _tri.c.distanceTo(_tri.a));
        return longest > finest && longest > REFINE_SHARE * _tri.closestPointToPoint(_ORIGIN, _nearest).length();
    };
    const leaves = [];
    const split = (a, b, c) => {
        if (!tooBig(a, b, c)) { leaves.push(a, b, c); return; }
        const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
        split(a, ab, ca); split(ab, b, bc); split(ca, bc, c); split(ab, bc, ca);
    };
    const index = source.index ? source.index.array : Array.from({ length: count }, (_, i) => i);
    for (let i = 0; i < index.length; i += 3) split(index[i], index[i + 1], index[i + 2]);

    const edge = (a, b, out) => {
        const m = mids.get(key(a, b));
        if (m === undefined) out.push(a); else { edge(a, m, out); edge(m, b, out); }
    };
    const triangles = [];
    for (let i = 0; i < leaves.length; i += 3) {
        const a = leaves[i], b = leaves[i + 1], c = leaves[i + 2];
        const ring = [];
        edge(a, b, ring); edge(b, c, ring); edge(c, a, ring);
        if (ring.length === 3) { triangles.push(a, b, c); continue; }
        const centre = blend([a, b, c], [1 / 3, 1 / 3, 1 / 3]);
        ring.forEach((v, j) => triangles.push(v, ring[(j + 1) % ring.length], centre));
    }
    const geometry = new THREE.BufferGeometry();
    names.forEach((n, k) => geometry.setAttribute(n, new THREE.BufferAttribute(new Float32Array(values[k]), sizes[k], source.attributes[n].normalized)));
    geometry.setIndex(triangles);
    return geometry;
}

// Called with each lander's data as it lands.
const landedListeners = [];
export function onLanded(listener) {
    landedListeners.push(listener);
}

export function attemptToLand() {
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
            // Its solid surface, not a see-through layer over it: Earth's night lights are a shell
            // half a percent above the ground, which in True scale is 32 km up.
            let targetMesh = null;
            (parent.highLevel || parent.mesh).traverse((child) => {
                if (child.isMesh && !targetMesh && !child.material.transparent) targetMesh = child;
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
            landedListeners.forEach(listener => listener(request.data));
        }
    }
}
