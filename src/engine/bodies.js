// Bodies: building every object from data.json into the scene (groups, meshes, the Sun, night
// lights, stand-in satellites) and drawing its orbit, cruise or suborbital line.
import * as THREE from 'three';
import { celestialMap, objects } from './state.js';
import { DEBUG_LANDING, engineOptions, MISSION_MODEL_SIZE, ORBIT_LINE_MAX_SAG, getEffectiveModel } from './config.js';
import { createHologramMaterial, plannedMaterials, preloadQueue } from './models.js';
import { createSun } from './sun.js';
import { getKeplerPosition, getSystemRoot, getTrajectoryPlan, orbitFarthest } from './orbits.js';
import { loadBodyTexture } from './assets.js';
import { pendingLanders } from './landers.js';
import { renderer, scene } from './scene.js';
import { emitEngine } from './events.js';

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
    return line;
}

function createOrbitLine(orbitData, color = '#888888', opacity = 0.4) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    // Enough points that each straight segment stays within ORBIT_LINE_MAX_SAG of the true
    // ellipse: a fixed 128 left objects on big heliocentric orbits up to ~1 unit off their line.
    // Points are spread evenly in eccentric anomaly (evenly along the ellipse), not in time,
    // which bunched them at aphelion; each is still placed by getKeplerPosition, exactly as
    // the object itself moves.
    const e = orbitData.e || 0;
    const farthest = orbitFarthest(orbitData);
    const segments = THREE.MathUtils.clamp(
        Math.ceil(2 * Math.PI * Math.sqrt(farthest / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
    const points = [];
    for (let i = 0; i < segments; i++) {
        const E = (i / segments) * 2 * Math.PI;
        const meanAnomalyDeg = (E - e * Math.sin(E)) * (180 / Math.PI);
        const fakeDays = (meanAnomalyDeg - (orbitData.M0 || 0)) / orbitData.rate;
        const pos = getKeplerPosition(orbitData, fakeDays);
        points.push(new THREE.Vector3(pos.x, pos.y, pos.z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: opacity,
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: color, baseOpacity: opacity };
    return line;
}

function createLissajousLine(orbitData) {
    if (!orbitData || orbitData.a === 0 || orbitData.rate === 0) return null;
    const points = [];
    // Same sag limit as createOrbitLine; the path's flattest bend has radius ~6.25a.
    const segments = THREE.MathUtils.clamp(
        Math.ceil(2 * Math.PI * Math.sqrt(6.25 * orbitData.a / (8 * ORBIT_LINE_MAX_SAG))), 128, 4096);
    const fullPeriodDays = 360 / orbitData.rate;
    for (let i = 0; i < segments; i++) {
        const fakeDays = (i / segments) * fullPeriodDays;
        const angle = (fakeDays * orbitData.rate) * (Math.PI / 180);
        const radius = orbitData.a;
        const y_off = radius * Math.sin(angle);
        const z_off = radius * 2.5 * Math.cos(angle);
        const x_off = radius * 0.5 * Math.sin(2 * angle);
        points.push(new THREE.Vector3(x_off, y_off, z_off));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color: new THREE.Color('#888888'),
        transparent: true,
        opacity: 0.18, // as faint as other mission lines (getStandardizedOrbitOpacity)
        depthWrite: false
    });
    const line = new THREE.LineLoop(geometry, material);
    line.userData = { baseColor: '#888888', baseOpacity: 0.18 };
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
    const apogee = suborbitalData.apogee || 1.5;

    // Pure mathematical time evaluation
    const t = (days % duration) / duration;

    const v1 = latLonToVector3(suborbitalData.start_coords.lat, suborbitalData.start_coords.lon);
    const v2 = latLonToVector3(suborbitalData.end_coords.lat, suborbitalData.end_coords.lon);

    const startQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v1);
    const endQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v2);
    const midQuat = new THREE.Quaternion().slerpQuaternions(startQuat, endQuat, t);

    const vDir = new THREE.Vector3(0, 1, 0).applyQuaternion(midQuat);
    const h = parentRadius + (4 * apogee * t * (1 - t)); // Parabola height

    return vDir.multiplyScalar(h);
}

function createSuborbitalLine(data, parentRadius) {
    if (!data.suborbital) return null;
    const points = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
        const fakeDays = data.suborbital.duration * (i / segments);
        const pos = getSuborbitalPosition(data.suborbital, parentRadius, fakeDays);
        points.push(pos);
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
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
    const s = item.type === 'mission' ? MISSION_MODEL_SIZE / 3 : (item.radius || 1) * 0.5;
    satGroup.scale.set(s, s, s);
    if (item.orbit_type === 'landed') satGroup.position.y = s / 2; // sit on the ground, not in it
    satGroup.traverse((c) => { c.userData = item; });
    return satGroup;
}

// Builds every object in `data` (data.json's entries) into the scene: its groups and mesh,
// then its orbit line and its place under its parent, then which objects are parents.
export function buildSystem(data) {
    data.forEach(item => {
        const group = new THREE.Group();
        const meshGroup = new THREE.Group();
        if (item.tilt) {
            meshGroup.rotation.z = (item.tilt * Math.PI) / 180;
        }
        const visualContainer = new THREE.Group();
        if (item.orbit_type === 'suborbital') {
            visualContainer.rotation.x = Math.PI / 2;
        }
        visualContainer.userData = item;
        meshGroup.add(visualContainer);
        group.add(meshGroup);
        celestialMap.set(item.name, { group, meshGroup, mesh: visualContainer, data: item });

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
            celestialMap.get(item.name).ring = { mesh: ring, innerRadius, outerRadius, opacity: item.ring.opacity || 0.9 };
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
