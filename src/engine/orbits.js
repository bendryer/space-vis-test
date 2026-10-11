// Orbits: the distance scale round the Sun, Keplerian positions, tidal locking, and the
// cruise trajectories of missions in transit. Positions only; nothing here touches the scene.
import * as THREE from 'three';
import { celestialMap } from './state.js';
import { MISSION_MODEL_SIZE } from './config.js';

const J2000_DATE = new Date('2000-01-01T12:00:00Z');

// Orbital Math Scratchpads
const _keplerPos = new THREE.Vector3();
const _keplerAxisY = new THREE.Vector3(0, 1, 0);
const _keplerAxisX = new THREE.Vector3(1, 0, 0);

// --- PHYSICS HELPER FUNCTIONS ---
export function getDaysSinceJ2000(date) { return (date - J2000_DATE) / 86400000; }

// --- DISTANCE SCALE ROUND THE SUN ---
// Everything that orbits the Sun on a real orbit gives its size in AU ("a_au") and is placed on one
// shared scale: a smooth compression of distance from the Sun, so the planets, the asteroid belt and
// the comets all sit in their true order and relative place while Neptune stays within reach.
// Earth's 1 AU maps to 1,000 scene units. The Earth-Sun L1/L2 points and the Lissajous paths round
// them stay illustrative: they give "a" in scene units and are not rescaled.
const SUN_SCALE_KNEE = 2.1;                                         // AU; below this, nearly proportional
const SUN_SCALE_UNITS = 1000 / Math.log(1 + 1 / SUN_SCALE_KNEE);    // so that 1 AU = 1,000 units
const auToScene = au => SUN_SCALE_UNITS * Math.log(1 + au / SUN_SCALE_KNEE);
const sceneToAu = units => SUN_SCALE_KNEE * (Math.exp(units / SUN_SCALE_UNITS) - 1);

// --- DISTANCE SCALE ROUND A BODY ---
// An orbit round a planet, moon, asteroid or comet gives its real size in km ("a_km"), and each
// point's height above the body is drawn on one scale: true to the body's drawn size close in (the
// ISS skims the Earth), then compressed, so moons sit in their true order without a system
// spreading across the Solar System. A height of h km is drawn as u * K * ln(1 + h / K), where u is
// the body's scene units per km (its drawn radius over its real one) and K is the knee: a planet's
// or moon's, or a small body's (whose orbiters are a few km out, not thousands). A craft is kept at
// least its own size above the ground.
const SATELLITE_KNEE_KM = 100000;
const SMALL_BODY_KNEE_KM = 5;
const SMALL_BODY_TYPES = new Set(['asteroid', 'comet']);
function satelliteDistance(rKm, s) {
    const h = Math.max(0, rKm - s.radiusKm);
    return s.radius + Math.hypot(s.unit * s.knee * Math.log(1 + h / s.knee), MISSION_MODEL_SIZE);
}

// The farthest the orbit reaches from its parent, in scene units.
export function orbitFarthest(o) {
    const reach = 1 + (o.e || 0);
    if (o.a_au !== undefined) return auToScene(o.a_au * reach);
    if (o.a_km !== undefined && o.scale) return satelliteDistance(o.a_km * reach, o.scale);
    return (o.a || 0) * reach;
}

// Readies an orbit for drawing, once its parent's drawn size is known (scale.js): a scene-unit
// "a" (its scaled size, for sorting, framing and culling), and for an orbit round a body, the
// scale it's drawn on and the plane its elements are measured from. That plane is "plane" if
// given: "ecliptic", or a pole { ra, dec } (a moon's Laplace plane, as JPL gives it); else the
// parent's equator (its "pole"); else, for a body without one, the ecliptic. In a plane other than
// the ecliptic the node is measured from where the plane crosses Earth's equator (ICRF), as JPL
// does; for Earth's own equator, from the March equinox.
export function prepareOrbit(orbit, parent) {
    if (!orbit) return;
    if (orbit.a_au !== undefined) orbit.a = auToScene(orbit.a_au);
    if (orbit.a_km === undefined || !parent) return;
    orbit.scale = {
        radius: parent.radius, radiusKm: parent.radius_km, unit: parent.radius / parent.radius_km,
        knee: SMALL_BODY_TYPES.has(parent.type) ? SMALL_BODY_KNEE_KM : SATELLITE_KNEE_KM,
    };
    orbit.a = satelliteDistance(orbit.a_km, orbit.scale);
    orbit.node ??= 0;
    orbit.peri ??= 0;
    const plane = orbit.plane ?? parent.pole ?? 'ecliptic';
    orbit.frame = plane === 'ecliptic' ? null : planeFrame(plane);
}

// A reference plane's axes in the scene: its pole (Z), its ascending node on the ICRF equator (X)
// and Y = Z x X. getKeplerPosition's result is in the scene's form of these axes (x = X, y = Z,
// z = -Y), so the frame maps that x, y, z onto X, Z and -Y.
function planeFrame(pole) {
    const Z = poleDirection(pole);
    const X = poleDirection({ ra: 0, dec: 90 }).cross(Z);
    if (X.lengthSq() < 1e-12) X.set(1, 0, 0);                       // Earth's equator: from the equinox
    X.normalize();
    const Y = Z.clone().cross(X);
    return { x: X, y: Z, z: Y.negate() };
}

// Tidal locking ("rotation_mode": "locked"): the body keeps its +X face towards its parent, with
// +Y along its orbit's normal, as Dimorphos does round Didymos.
const _lockX = new THREE.Vector3(), _lockY = new THREE.Vector3(), _lockZ = new THREE.Vector3(), _lockM = new THREE.Matrix4();
export function faceParent(meshGroup, orbit, days) {
    const a = getKeplerPosition(orbit, days), b = getKeplerPosition(orbit, days + 0.001);
    _lockX.set(-a.x, -a.y, -a.z).normalize();                                     // towards the parent
    _lockY.set(a.x, a.y, a.z).cross(_lockZ.set(b.x - a.x, b.y - a.y, b.z - a.z)).normalize(); // orbit normal
    _lockZ.crossVectors(_lockX, _lockY);
    meshGroup.quaternion.setFromRotationMatrix(_lockM.makeBasis(_lockX, _lockY, _lockZ));
}

// A body's north pole ("pole": IAU right ascension and declination, J2000 equator) as a unit
// vector in the scene: from the equator to the ecliptic (tilted by the obliquity), then to the
// scene's axes as getKeplerPosition uses them (ecliptic x = X, y = -Z, z = Y).
const OBLIQUITY_J2000 = 23.4392911 * (Math.PI / 180);
export function poleDirection({ ra, dec }) {
    const a = ra * (Math.PI / 180), d = dec * (Math.PI / 180);
    const x = Math.cos(d) * Math.cos(a), y = Math.cos(d) * Math.sin(a), z = Math.sin(d);
    const c = Math.cos(OBLIQUITY_J2000), s = Math.sin(OBLIQUITY_J2000);
    const yEcl = y * c + z * s, zEcl = -y * s + z * c;
    return new THREE.Vector3(x, zEcl, -yEcl);
}

// Where the orbit has its body `days` after J2000, relative to the parent. The node and periapsis
// turn at "node_rate" and "peri_rate" (degrees a day); `precessDays` sets how far they've turned,
// when that should differ from `days` (an orbit line drawn as the orbit is now).
export function getKeplerPosition(orbitData, days, precessDays = days) {
    if (!orbitData || orbitData.a === 0) return { x: 0, y: 0, z: 0 };
    let M = (orbitData.M0 + (orbitData.rate * days)) % 360;
    let M_rad = M * (Math.PI / 180);
    const e = orbitData.e;
    let E = M_rad;
    for (let k = 0; k < 5; k++) E = M_rad + e * Math.sin(E);

    // A real orbit is worked out in AU (round the Sun) or km (round a body), then each point's
    // distance from the parent is rescaled.
    const inAu = orbitData.a_au !== undefined;
    const inKm = !inAu && orbitData.a_km !== undefined && orbitData.scale;
    const a = inAu ? orbitData.a_au : inKm ? orbitData.a_km : orbitData.a;
    const x_orb = a * (Math.cos(E) - e);
    const z_orb = a * Math.sqrt(1 - e * e) * Math.sin(E);
    const r = Math.hypot(x_orb, z_orb);
    const k = r > 0 && inAu ? auToScene(r) / r : r > 0 && inKm ? satelliteDistance(r, orbitData.scale) / r : 1;

    // Worked out with ecliptic north along -Y, then turned over (y and z negated) so that north is
    // +Y: orbits then go round anticlockwise seen from above, the same way the bodies spin. In the
    // scene, ecliptic x = X, y = -Z, z = Y.

    // Fallback for simple 2D orbits that lack advanced parameters
    if (orbitData.node === undefined || orbitData.peri === undefined) {
        const i_rad = (orbitData.i || 0) * (Math.PI / 180);
        return { x: x_orb * k, y: -z_orb * Math.sin(i_rad) * k, z: -z_orb * Math.cos(i_rad) * k };
    }

    // Full 3D Keplerian Rotation
    _keplerPos.set(x_orb, 0, z_orb);
    const peri_rad = (orbitData.peri + (orbitData.peri_rate || 0) * precessDays) * (Math.PI / 180);
    const node_rad = (orbitData.node + (orbitData.node_rate || 0) * precessDays) * (Math.PI / 180);
    const inc_rad = orbitData.i * (Math.PI / 180);

    // Apply Euler rotations mapped to Three.js Y-Up coordinate space
    _keplerPos.applyAxisAngle(_keplerAxisY, -peri_rad);
    _keplerPos.applyAxisAngle(_keplerAxisX, inc_rad);
    _keplerPos.applyAxisAngle(_keplerAxisY, -node_rad);
    _keplerPos.multiplyScalar(k);

    const x = _keplerPos.x, y = -_keplerPos.y, z = -_keplerPos.z;
    const f = orbitData.frame;   // measured from a plane other than the ecliptic (prepareOrbit)
    if (!f) return { x, y, z };
    return {
        x: x * f.x.x + y * f.y.x + z * f.z.x,
        y: x * f.x.y + y * f.y.y + z * f.z.y,
        z: x * f.x.z + y * f.y.z + z * f.z.z,
    };
}

// --- TRAJECTORIES ---
// A mission in transit ("orbit_type": "trajectory") follows a cartoon of its real route: it flies
// past each waypoint's body on that waypoint's date, at the place this simulation shows the body
// then, just outside it. Between waypoints it loops round the Sun: the angle advances faster
// close in and slower far out (as a real orbit's does), with as many loops as the time allows
// (or "revs", if a waypoint gives it), through an optional farthest or nearest distance from
// the Sun ("extreme", in AU, on the same scale as the planets). After the last waypoint it's on
// "arrival_orbit" round that body.
const TRAJECTORY_STEP_DAYS = 1;        // path resolution
const FLYBY_OFFSET_RADII = 2.5;        // passes this many of the body's radii outside its centre

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
export function getTrajectoryPlan(obj) {
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
    let angle = points.length ? Math.atan2(points[0].x, points[0].z) : 0; // unwrapped, rising
    for (let i = 0; i + 1 < waypoints.length; i++) {
        const A = points[i], B = points[i + 1], wB = waypoints[i + 1];
        const d0 = waypoints[i].days, span = wB.days - d0;
        const rA = Math.hypot(A.x, A.z), rB = Math.hypot(B.x, B.z);
        // Planets go round in the direction of rising atan2(x, z), so the craft does too.
        let turn = Math.atan2(B.x, B.z) - Math.atan2(A.x, A.z);
        while (turn < 0) turn += Math.PI * 2;
        if (span < 30 && turn > Math.PI * 11 / 6) turn -= Math.PI * 2; // a short hop slightly back, not a lap
        const bump = wB.extreme !== undefined ? auToScene(wB.extreme) - (rA + rB) / 2 : 0;
        const radiusAt = s => rA + (rB - rA) * s + bump * Math.sin(Math.PI * s);
        // Angular rate falls off with distance, as in an orbit: ~r^-1.5.
        const N = Math.max(8, Math.ceil(span / TRAJECTORY_STEP_DAYS));
        const cum = [0];
        for (let k = 1; k <= N; k++) cum.push(cum[k - 1] + Math.pow(sceneToAu(radiusAt((k - 0.5) / N)), -1.5));
        // Loops: as given, or as many as a real orbit at these distances would make in the time.
        const expected = (0.9856 * span / N) * cum[N] * (Math.PI / 180);
        const revs = wB.revs ?? Math.max(0, Math.round((expected - turn) / (Math.PI * 2)));
        const total = turn + revs * Math.PI * 2;
        // Control points: every eighth of the leg (the half-way one is the farthest or nearest point).
        for (let q = i === 0 ? 0 : 1; q <= 8; q++) {
            const s = q / 8, k = Math.round(s * N);
            knots.days.push(d0 + span * s);
            knots.angle.push(angle + total * (cum[k] / cum[N]));
            knots.radius.push(radiusAt(s));
            knots.height.push(A.y + (B.y - A.y) * s);
        }
        angle += total;
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
export function getTrajectoryPosition(obj, days, out) {
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

// The planet-level body an object belongs to: its own "system" if data.json gives one (the
// Earth-Sun Lagrange points orbit the Sun but belong with Earth), else the ancestor that
// orbits the Sun.
export function getSystemRoot(objName) {
    if (!objName || objName === 'Sun') return 'Sun';

    const obj = celestialMap.get(objName);
    if (!obj || !obj.data) return 'Sun';

    if (obj.data.system) return obj.data.system;
    if (obj.data.parent === 'Sun') return objName;
    return getSystemRoot(obj.data.parent);
}
