// Bodies: building every object from data.json into the scene (groups, meshes, the Sun, night
// lights, stand-in satellites) and drawing its orbit, cruise or suborbital line.
import * as THREE from 'three';
import { celestialMap, objects } from './state.js';
import { DEBUG_LANDING, engineOptions, MISSION_MODEL_SIZE, ORBIT_LINE_MAX_SAG, getEffectiveModel } from './config.js';
import { createHologramMaterial, plannedMaterials, preloadQueue } from './models.js';
import { createSun } from './sun.js';
import { cruiseAt, getDaysSinceJ2000, getSystemRoot, getTrajectoryPlan, lissajousOffset, orbitFarthest, orbitPositionAt, poleDirection } from './orbits.js';
import { simulatedDate } from './time.js';
import { loadBodyTexture } from './assets.js';
import { pendingLanders } from './landers.js';
import { renderer, scene } from './scene.js';
import { emitEngine } from './events.js';
import { illustrativeSpin } from './motion.js';

export let sunEffect = null; // see src/engine/sun.js

// An orbit line's colour: the object's "orbit_color" if data.json gives one; a moon without one
// shares its planet's; otherwise a colour by type (a planet falls back to its own "color").
export function getStandardizedOrbitColor(item) {
    if (!item) return '#888888';
    if (item.orbit_color) return item.orbit_color;

    if (item.type === 'planet') return item.color || '#4a90e2';
    if (item.type === 'moon') return celestialMap.get(item.parent)?.data.orbit_color || '#888888';
    if (item.type === 'comet') return '#ffffff';
    // Asteroids, missions and reference points: grey, lit light blue on hover or selection.
    return '#888888';
}

function getStandardizedOrbitOpacity(item) {
    if (!item) return 0.35;
    // Asteroids, comets and missions share one faint line until hovered or selected, so the
    // planets' orbits lead the eye.
    if (item.type === 'asteroid' || item.type === 'comet' || item.type === 'mission') return 0.18;
    if (item.type === 'planet') return 0.65;   // Bright vivid planetary orbits
    if (item.type === 'moon') return 0.4;
    return 0.35;
}

// The cruise drawn as a line through the sampled path. The flyby waypoints shape the path but
// aren't marked on it: a marker sits where the planet was on the flyby date, which on its own
// reads as a stray object.
function createTrajectoryLine(obj, color, opacity) {
    const plan = getTrajectoryPlan(obj);
    if (plan.samples.length < 2) return null;
    const geometry = new THREE.BufferGeometry().setFromPoints(plan.samples.map(s => s.pos));
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: new THREE.Color(color), transparent: true, opacity, depthWrite: false }));
    line.userData = { baseColor: color, baseOpacity: opacity };
    line.userData.curve = {
        closed: false, turns: 0,
        range: () => { const S = getTrajectoryPlan(obj).samples; return [S[0].days, S[S.length - 1].days]; },
        at: (days, out) => cruiseAt(getTrajectoryPlan(obj), days, out),
    };
    return line;
}

// Points round an orbit as it is `days` after J2000 (an orbit whose node or periapsis turns is
// drawn as it is then; refreshOrbitLine keeps it so).
function orbitLinePoints(orbitData, segments, days) {
    const points = [];
    for (let i = 0; i < segments; i++) {
        const pos = orbitPositionAt(orbitData, (i / segments) * 2 * Math.PI, days);
        points.push(new THREE.Vector3(pos.x, pos.y, pos.z));
    }
    return points;
}

function orbitLineSegments(orbitData) {
    return THREE.MathUtils.clamp(Math.ceil(2 * Math.PI * Math.sqrt(orbitFarthest(orbitData) / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
}

function createOrbitLine(orbitData, color = '#888888', opacity = 0.4) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    // Enough points that each straight segment stays within ORBIT_LINE_MAX_SAG of the true
    // ellipse: a fixed 128 left objects on big heliocentric orbits up to ~1 unit off their line.
    // Points are spread evenly in eccentric anomaly (evenly along the ellipse), not in time,
    // which bunched them at aphelion; each is still placed by getKeplerPosition, exactly as
    // the object itself moves.
    const segments = orbitLineSegments(orbitData);
    const days = getDaysSinceJ2000(simulatedDate);
    const points = orbitLinePoints(orbitData, segments, days);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: opacity,
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: color, baseOpacity: opacity, orbit: orbitData, segments, days };
    line.userData.curve = orbitCurve(line);
    return line;
}

// An orbit whose node or periapsis turns (the Moon's node goes round in 18.6 years, Io's
// periapsis in 1.3) is redrawn once it has turned a tenth of a degree since it was last drawn.
const ORBIT_LINE_REDRAW_DEG = 0.1;
export function refreshOrbitLine(line, days) {
    const o = line?.userData.orbit;
    if (!o || !(o.node_rate || o.peri_rate)) return;
    const turned = Math.abs(days - line.userData.days) * (Math.abs(o.node_rate || 0) + Math.abs(o.peri_rate || 0));
    if (turned < ORBIT_LINE_REDRAW_DEG) return;
    const loop = line.userData.loop ?? line.geometry;   // the whole loop, even while drawn up close
    loop.setFromPoints(orbitLinePoints(o, line.userData.segments, days));
    loop.computeBoundingSphere();
    line.userData.days = days;
    if (line.userData.near) line.userData.near.cam = null;   // and redrawn up close next frame
}

// --- LINES UP CLOSE (True scale) ---
// A line (an orbit, a halo orbit, a cruise, a rocket's arc) is straight segments stored as 32-bit
// floats round its parent. That's fine from a distance, but in True scale a craft or asteroid a
// ten-thousandth of a unit across sits on a line up to 100,000 units from its origin, where 32-bit
// floats are only good to about a hundredth of a unit (the line shook as the camera moved) and
// the segments stray further still. So a line the camera comes close to is drawn about the point
// of it nearest the camera: its points held relative to that point, closest together there (a
// small share of the camera's distance apart) and spreading out geometrically along the rest. It's
// drawn again once the camera has moved a tenth of its distance from the line (or the line itself
// has turned by a hundredth of it), and goes back to the plain line once the camera is far from it.
// A line can be drawn up close if it knows its curve (userData.curve): `at(u, out, days)` puts
// the point at parameter u, in the line's own frame, into `out`; u runs over `range()`, round and
// round if `closed`; `turns` is how fast the curve itself turns (radians a day), if it does.
const NEAR_LINE_SHARE = 0.05;    // near: within this share of the line's size of it
const NEAR_REDRAW_SHARE = 0.1;
const NEAR_TURN_SHARE = 0.01;
const NEAR_FIRST_STEP = 0.02;    // spacing at the nearest point, as a share of the camera's distance
const NEAR_GROWTH = 1.08;        // each step this much longer than the one before
const NEAR_SEARCH = 96;          // samples along the curve when finding its nearest point
const _camLocal = new THREE.Vector3();
const _onLine = new THREE.Vector3();
const _toLocal = new THREE.Matrix4();

export function updateNearLines(cameraPos, days) {
    celestialMap.forEach(obj => {
        nearLine(obj.orbitLine, cameraPos, days);
        const lines = obj.trajectoryLines;
        if (lines) [lines.cruise, lines.arrived].forEach(l => { if (l && l !== obj.orbitLine) nearLine(l, cameraPos, days); });
    });
}

function orbitCurve(line) {
    const o = line.userData.orbit;
    return {
        closed: true, range: () => [0, 2 * Math.PI],
        turns: (Math.abs(o.node_rate || 0) + Math.abs(o.peri_rate || 0)) * (Math.PI / 180),
        at: (E, out, days) => { const p = orbitPositionAt(line.userData.orbit, E, days); return out.set(p.x, p.y, p.z); },
    };
}

function nearLine(line, cameraPos, days) {
    const curve = line?.userData.curve;
    if (!curve || !line.parent) return;
    if (!line.visible) { drawWholeLine(line); return; }
    // The camera in the line's own frame (its parent has been placed this frame, but not yet drawn).
    line.parent.updateWorldMatrix(true, false);
    _camLocal.copy(cameraPos).applyMatrix4(_toLocal.copy(line.parent.matrixWorld).invert());
    const near = line.userData.near;
    const whole = line.userData.loop ?? line.geometry;
    if (!whole.boundingSphere) whole.computeBoundingSphere();
    const bounds = whole.boundingSphere;
    if (near?.cam && near.cam.distanceTo(_camLocal) < NEAR_REDRAW_SHARE * near.distance
        && Math.abs(days - near.days) * curve.turns * bounds.radius < NEAR_TURN_SHARE * near.distance) return;

    const margin = NEAR_LINE_SHARE * bounds.radius;
    if (_camLocal.distanceTo(bounds.center) > bounds.radius + margin) { drawWholeLine(line); return; }
    const at = u => curve.at(u, _onLine, days);
    const gap = u => at(u).distanceTo(_camLocal);

    // The nearest point: the closest of samples along the curve, narrowed down by golden section.
    const [start, end] = curve.range(), span = end - start;
    let u0 = start, best = Infinity;
    for (let i = 0; i <= NEAR_SEARCH; i++) {
        const u = start + span * (i / NEAR_SEARCH), d = gap(u);
        if (d < best) { best = d; u0 = u; }
    }
    const golden = (Math.sqrt(5) - 1) / 2;
    let lo = u0 - span / NEAR_SEARCH, hi = u0 + span / NEAR_SEARCH;
    if (!curve.closed) { lo = Math.max(lo, start); hi = Math.min(hi, end); }
    for (let k = 0; k < 80; k++) {
        const m1 = hi - golden * (hi - lo), m2 = lo + golden * (hi - lo);
        if (gap(m1) < gap(m2)) hi = m2; else lo = m1;
    }
    u0 = (lo + hi) / 2;
    const distance = Math.max(gap(u0), margin * 1e-12);
    if (distance > margin) { drawWholeLine(line); return; }

    // Steps out from u0, first a small share of the distance (in u, by how fast the curve runs
    // there), each longer than the last: round to the back of a loop, or to each end of a path.
    const origin = at(u0).clone();
    const h = span * 1e-9 * (u0 + span * 1e-9 > end && !curve.closed ? -1 : 1);
    const pace = at(u0 + h).distanceTo(origin) / Math.abs(h) || 1;
    const reach = curve.closed ? span / 2 : Math.max(u0 - start, end - u0);
    const offsets = [];
    let t = 0, step = NEAR_FIRST_STEP * distance / pace;
    while (t + step < reach) { t += step; offsets.push(t); step *= NEAR_GROWTH; }
    let us;
    if (curve.closed) us = [...offsets.map(d => u0 - d).reverse(), u0, ...offsets.map(d => u0 + d)];
    else {
        const before = offsets.filter(d => d < u0 - start).map(d => u0 - d).reverse();
        const after = offsets.filter(d => d < end - u0).map(d => u0 + d);
        us = [...(u0 > start ? [start] : []), ...before, u0, ...after, ...(u0 < end ? [end] : [])];
    }
    const positions = new Float32Array(us.length * 3);
    us.forEach((u, i) => {
        at(u).sub(origin);
        positions[3 * i] = _onLine.x; positions[3 * i + 1] = _onLine.y; positions[3 * i + 2] = _onLine.z;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    near?.geometry.dispose();
    line.userData.loop ??= line.geometry;
    line.geometry = geometry;
    line.position.copy(origin);
    if (line.material.isLineDashedMaterial) line.computeLineDistances();
    line.userData.near = { cam: _camLocal.clone(), distance, days, geometry };
}

// Back to the plain line.
function drawWholeLine(line) {
    const near = line.userData.near;
    if (!near) return;
    near.geometry.dispose();
    line.geometry = line.userData.loop;
    line.position.set(0, 0, 0);
    line.userData.near = null;
    line.userData.loop = null;
}

function lissajousPoints(orbitData) {
    const points = [];
    // Same sag limit as createOrbitLine; the path's flattest bend has radius at most a^2 / b.
    const { y, z } = orbitData.amp;
    const bend = Math.max(y, z) ** 2 / Math.max(Math.min(y, z), 1e-6);
    const segments = THREE.MathUtils.clamp(Math.ceil(2 * Math.PI * Math.sqrt(bend / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
    const one = { ...orbitData, M0: 0 };
    for (let i = 0; i < segments; i++) {
        points.push(lissajousOffset(one, (i / segments) * (360 / orbitData.rate), new THREE.Vector3()));
    }
    return points;
}

function createLissajousLine(orbitData) {
    if (!orbitData?.amp || !orbitData.rate) return null;
    const geometry = new THREE.BufferGeometry().setFromPoints(lissajousPoints(orbitData));
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#888888'),
        transparent: true,
        opacity: 0.18, // as faint as other mission lines (getStandardizedOrbitOpacity)
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: '#888888', baseOpacity: 0.18 };
    // The same path as lissajousOffset, by its angle.
    line.userData.curve = {
        closed: true, turns: 0, range: () => [0, 2 * Math.PI],
        at: (t, out) => out.set(-orbitData.amp.x * Math.cos(t), orbitData.amp.y * Math.cos(t), orbitData.amp.z * Math.sin(t)),
    };
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

export function getSuborbitalPosition(suborbitalData, parentRadius, days) {
    const duration = suborbitalData.duration || 0.05;
    return suborbitalAt(suborbitalData, parentRadius, (days % duration) / duration);
}

// The point a share t (0 to 1) of the way through the flight, in its body's frame.
function suborbitalAt(suborbitalData, parentRadius, t) {
    const apogee = suborbitalData.apogee || 1.5;
    const v1 = latLonToVector3(suborbitalData.start_coords.lat, suborbitalData.start_coords.lon);
    const v2 = latLonToVector3(suborbitalData.end_coords.lat, suborbitalData.end_coords.lon);

    const startQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v1);
    const endQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v2);
    const midQuat = new THREE.Quaternion().slerpQuaternions(startQuat, endQuat, t);

    const vDir = new THREE.Vector3(0, 1, 0).applyQuaternion(midQuat);
    const h = parentRadius + (4 * apogee * t * (1 - t)); // Parabola height

    return vDir.multiplyScalar(h);
}

function suborbitalPoints(data, parentRadius) {
    const points = [];
    const segments = 128;
    // (By its share of the flight: by time, its last point came round to the first again.)
    for (let i = 0; i <= segments; i++) points.push(suborbitalAt(data.suborbital, parentRadius, i / segments));
    return points;
}

function createSuborbitalLine(data, parentRadius) {
    if (!data.suborbital) return null;
    const geometry = new THREE.BufferGeometry().setFromPoints(suborbitalPoints(data, parentRadius));
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
    line.userData.curve = {
        closed: false, turns: 0, range: () => [0, 1],
        at: (t, out) => out.copy(suborbitalAt(data.suborbital, celestialMap.get(data.parent)?.data.radius || 1, t)),
    };
    return line;
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
    const s = item.type === 'mission' ? (item.model_size ?? MISSION_MODEL_SIZE) / 3 : (item.radius || 1) * 0.5;
    satGroup.scale.set(s, s, s);
    if (item.orbit_type === 'landed') satGroup.position.y = s / 2; // sit on the ground, not in it
    satGroup.traverse((c) => { c.userData = item; });
    return satGroup;
}

const _bodyUp = new THREE.Vector3(0, 1, 0);
const _bodyTiltAxis = new THREE.Vector3(0, 0, 1);

// Builds every object in `data` (data.json's entries) into the scene: its groups and mesh,
// then its orbit line and its place under its parent, then which objects are parents.
export function buildSystem(data) {
    data.forEach(item => {
        const group = new THREE.Group();
        const meshGroup = new THREE.Group();
        // Which way the body's north pole (its +Y) points: "pole" if given, else "tilt" degrees
        // off the scene's +Y. It spins about this axis (render.js), so seasons come out right.
        // An asteroid or comet without a measured spin gets an illustrative one (motion.js).
        const axis = new THREE.Quaternion();
        const spin = item.type === 'asteroid' || item.type === 'comet' ? illustrativeSpin(item.name) : null;
        if (spin) {
            item.rot_period ??= spin.period;
            item.rot_offset ??= spin.offset;
        }
        if (item.pole) axis.setFromUnitVectors(_bodyUp, poleDirection(item.pole));
        else if (item.tilt) axis.setFromAxisAngle(_bodyTiltAxis, (item.tilt * Math.PI) / 180);
        else if (spin && item.tilt === undefined) axis.setFromUnitVectors(_bodyUp, spin.pole);
        meshGroup.quaternion.copy(axis);
        const visualContainer = new THREE.Group();
        if (item.orbit_type === 'suborbital') {
            visualContainer.rotation.x = Math.PI / 2;
        }
        visualContainer.userData = item;
        meshGroup.add(visualContainer);
        group.add(meshGroup);
        celestialMap.set(item.name, { group, meshGroup, mesh: visualContainer, data: item, axis });
        // The size it's built at: a change of scale mode scales its visual container from this
        // (rescaleSystem), and models load at it (buildModelLevel).
        item.built = { radius: item.radius, modelSize: item.type === 'mission' ? item.model_size : item.model_scale };

        // --- SUN ---
        if (item.type === 'star') {
            sunEffect = createSun({ radius: item.radius, renderer });
            visualContainer.add(sunEffect.group);
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
                // "segments": sphere smoothness where the default shows (Earth, seen close).
                const segments = item.segments || (item.type === 'star' ? 48 : 32);
                const geo = new THREE.SphereGeometry(item.radius, segments, segments);

                let matParams = { map: tex, roughness: 1.0, metalness: 0.0 };
                // "roughness_map": which parts shine (Earth's oceans); its own texture is reused.
                if (item.roughness_map) {
                    matParams.roughnessMap = item.roughness_map === item.texture ? tex : loadBodyTexture(item.roughness_map);
                }
                // A closed sphere: cast from its back faces, like the modelled bodies (see processModelMeshes).
                matParams.shadowSide = THREE.BackSide;
                const mat = new THREE.MeshStandardMaterial(matParams);
                if (item.night_texture && engineOptions.nightLights) {
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
            // Kept for getSunOcclusion, which needs to know where a ring's shadow falls.
            celestialMap.get(item.name).ring = { mesh: ring, innerRadius, outerRadius, builtInner: innerRadius, builtOuter: outerRadius, opacity: item.ring.opacity || 0.9 };
        }
    });

    // PASS 2: Link & Orbits & Landers
    celestialMap.forEach((obj) => {
        const { group, data } = obj;
        // Models load early for the Sun and any system data.json marks "preload" (Earth's, the
        // most visited; Comet 67P's, which Philae lands on); the rest as they come into view.
        // Decided here, once every object exists, so the order of data.json doesn't matter.
        if (getEffectiveModel(data)) {
            const system = getSystemRoot(data.name);
            if (system === 'Sun' || data.preload || celestialMap.get(system)?.data.preload) preloadQueue.push(data);
        }
        if (data.orbit_type === 'landed') {
            pendingLanders.push({ group: group, data: data });
        } else {
            scene.add(group);
            if (data.orbit_type === 'trajectory') {
                // The cruise line, and (after arrival) the orbit round the arrival body: one
                // shows at a time (see updateTrajectoryLines), as the craft's orbit line.
                const color = getStandardizedOrbitColor(data), opacity = getStandardizedOrbitOpacity(data);
                const cruise = createTrajectoryLine(obj, color, opacity);
                if (cruise) scene.add(cruise);
                const plan = getTrajectoryPlan(obj);
                let arrived = null;
                if (plan.arrival) {
                    arrived = createOrbitLine(plan.arrivalOrbit, color, opacity);
                    const host = celestialMap.get(plan.arrival.at);
                    if (arrived && host) host.group.add(arrived);
                }
                obj.trajectoryLines = { cruise, arrived };
                obj.orbitLine = cruise || arrived;
                if (DEBUG_LANDING) console.log(`${data.name} trajectory loops per leg:`, plan.legs);
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
                    if (data.show_orbit !== false) {
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
}

// Shows the cruise line in transit and the arrival orbit once there, keeping the one shown as
// the craft's orbit line (which hover and selection light up).
export function updateTrajectoryLines(obj, arrived) {
    const lines = obj.trajectoryLines;
    if (!lines) return;
    const shown = arrived ? lines.arrived : lines.cruise;
    if (lines.cruise) lines.cruise.visible = !arrived;
    if (lines.arrived) lines.arrived.visible = arrived;
    if (shown && obj.orbitLine !== shown) {
        obj.orbitLine = shown;
        emitEngine('orbit-change', { data: obj.data });
    }
}

// --- A CHANGE OF SCALE MODE ---
// After applyScales has set every size and orbit for the new mode: each object's visual container
// (its sphere or model, night lights, the Sun's effect) is scaled from the size it was built at, a
// planet's rings with it, and every line is redrawn. Landers are re-seated by the caller.
export function rescaleSystem() {
    celestialMap.forEach(obj => {
        const { data } = obj;
        const { built } = data;
        if (!built) return;
        const k = data.type === 'mission' ? (data.model_size ?? 1) / (built.modelSize ?? data.model_size ?? 1)
            : built.radius ? data.radius / built.radius : 1;
        obj.mesh.scale.setScalar(k);
        if (obj.ring) {
            obj.ring.mesh.scale.setScalar(k);
            obj.ring.innerRadius = obj.ring.builtInner * k;
            obj.ring.outerRadius = obj.ring.builtOuter * k;
        }
    });
    redrawLines();
}

function setLinePoints(line, points) {
    drawWholeLine(line);
    line.geometry.dispose();
    line.geometry = new THREE.BufferGeometry().setFromPoints(points);
}

function redrawLines() {
    const days = getDaysSinceJ2000(simulatedDate);
    celestialMap.forEach(obj => {
        const { data } = obj;
        if (obj.trajectoryLines) {
            obj.trajectoryPlan = null;
            const plan = getTrajectoryPlan(obj);
            if (obj.trajectoryLines.cruise) setLinePoints(obj.trajectoryLines.cruise, plan.samples.map(s => s.pos));
            if (obj.trajectoryLines.arrived) redrawOrbitLine(obj.trajectoryLines.arrived, days);
            return;
        }
        const line = obj.orbitLine;
        if (!line) return;
        if (data.orbit_type === 'lissajous') setLinePoints(line, lissajousPoints(data.orbit));
        else if (data.orbit_type === 'suborbital') {
            setLinePoints(line, suborbitalPoints(data, celestialMap.get(data.parent)?.data.radius || 1));
            line.computeLineDistances();
        } else redrawOrbitLine(line, days);
    });
}

function redrawOrbitLine(line, days) {
    const o = line.userData.orbit;
    if (!o) return;
    drawWholeLine(line);
    line.userData.segments = orbitLineSegments(o);
    line.userData.days = days;
    setLinePoints(line, orbitLinePoints(o, line.userData.segments, days));
}

