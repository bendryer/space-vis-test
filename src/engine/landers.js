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
            landedListeners.forEach(listener => listener(request.data));
        }
    }
}
