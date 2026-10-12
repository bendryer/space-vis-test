// How asteroids, comets and spacecraft turn: tumbles, and each mission's attitude from its "motion".
import * as THREE from 'three';
import { celestialMap } from './state.js';
import { getKeplerPosition } from './orbits.js';

const _sunPos = new THREE.Vector3(0, 0, 0);
const _UP = new THREE.Vector3(0, 1, 0);

function getHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

export function getTumbleSpeed(name, totalSpeed = 0.25) {
    const hash = getHash(name || 'asteroid');
    const r1 = 0.2 + ((hash & 0xFF) / 255) * 0.8;
    const r2 = 0.2 + (((hash >> 8) & 0xFF) / 255) * 0.8;
    const r3 = 0.2 + (((hash >> 16) & 0xFF) / 255) * 0.8;
    const sum = r1 + r2 + r3;

    const signX = (hash & 1) ? 1 : -1;
    const signY = ((hash >> 1) & 1) ? 1 : -1;
    const signZ = ((hash >> 2) & 1) ? 1 : -1;

    return {
        x: signX * (r1 / sum) * totalSpeed,
        y: signY * (r2 / sum) * totalSpeed,
        z: signZ * (r3 / sum) * totalSpeed
    };
}

// --- ASTEROID AND COMET SPIN ---
// Asteroids and comets turn on the simulated clock like the planets, so where one faces follows
// the date (a tumble on the app's own clock would make the same moment look different each time).
// One without a measured spin ("rot_period", "pole" or "tilt") gets an illustrative one, the
// same every visit: a period of 5 to 19 hours, either way round, about a pole up to 60° off the
// ecliptic's, at a starting angle. Fields it already has are kept.
export function illustrativeSpin(name) {
    const hash = getHash(name || 'asteroid');
    const hours = 5 + ((hash & 0xFF) / 255) * 14;
    const tilt = (((hash >> 8) & 0xFF) / 255) * (Math.PI / 3);
    const heading = (((hash >> 16) & 0xFF) / 255) * Math.PI * 2;
    return {
        period: ((hash >> 24) & 1 ? 1 : -1) * hours / 24,   // days
        pole: new THREE.Vector3(Math.sin(tilt) * Math.cos(heading), Math.cos(tilt), Math.sin(tilt) * Math.sin(heading)),
        offset: hash % 360,
    };
}


// --- SPACECRAFT ATTITUDE ---
// How an orbiting spacecraft turns, from its "motion" in data.json. Each mode is how that kind
// of mission really flies, slowed or sped to read well on screen:
//   spin   - rolls about "axis" (a telescope's tube), that axis tilted "tilt"° off the orbital
//            plane's normal and precessing round a "wobble"° cone. Space telescopes.
//   sun    - "axis" points at the Sun (a sunshield, a solar-array face, a high-gain antenna),
//            rolling about that line with a "wobble"° precession. L2 observatories, craft in
//            cruise, and true spinners (Planck, Gaia, Genesis) at a higher "rate".
//   nadir  - "axis" faces the body below and "along" points along the track, so it turns once
//            per orbit, with a slight "wobble"° yaw sway. Earth observers, the ISS, planetary
//            orbiters, craft at asteroids and comets.
//   tumble - a slow tumble about all three axes. Cubesats.
// Axes are the model's own, as "+x", "-y" and so on; "rate" is degrees per second.
const MOTION_DEFAULTS = {
    spin: { axis: '+y', rate: 2, wobble: 8, tilt: 35, period: 90 },
    sun: { axis: '+y', rate: 1.5, wobble: 5, period: 120 },
    nadir: { axis: '-y', along: '+z', rate: 0, wobble: 3, period: 40 },
    tumble: { rate: 3 },
};
const _attA = new THREE.Vector3(), _attB = new THREE.Vector3(), _attC = new THREE.Vector3();
const _attD = new THREE.Vector3(), _attE = new THREE.Vector3(), _attF = new THREE.Vector3();
const _attM = new THREE.Matrix4(), _attN = new THREE.Matrix4();
const _attQ = new THREE.Quaternion(), _attRoll = new THREE.Quaternion();

function parseModelAxis(text) {
    const m = /^([+-]?)([xyz])$/.exec(String(text || '+y').trim().toLowerCase()) || ['', '', 'y'];
    const v = new THREE.Vector3();
    v[m[2]] = m[1] === '-' ? -1 : 1;
    return v;
}

// Settles an object's motion settings once: its mode's defaults under its own, plus a phase
// and (for "spin") a resting direction of its own, so no two craft turn in step.
function getMotion(obj) {
    if (obj.motion) return obj.motion;
    const given = obj.data.motion || {};
    const mode = MOTION_DEFAULTS[given.mode] ? given.mode : 'spin';
    const s = { ...MOTION_DEFAULTS[mode], ...given, mode };
    const hash = getHash(obj.data.name);
    const azimuth = ((hash % 360) * Math.PI) / 180;
    const tilt = THREE.MathUtils.degToRad(s.tilt || 0);
    obj.motion = {
        mode,
        axis: parseModelAxis(s.axis),
        along: parseModelAxis(s.along),
        rate: THREE.MathUtils.degToRad(s.rate || 0),
        wobble: THREE.MathUtils.degToRad(s.wobble || 0),
        period: s.period || 90,
        phase: ((hash >> 9) % 628) / 100,
        rest: new THREE.Vector3(Math.sin(tilt) * Math.cos(azimuth), Math.cos(tilt), Math.sin(tilt) * Math.sin(azimuth)),
    };
    return obj.motion;
}

// `dir` precessed round a cone of half-angle `wobble` about itself, at angle `turn` round it.
function precess(dir, wobble, turn, out) {
    if (!wobble) return out.copy(dir);
    _attE.set(1, 0, 0);
    if (Math.abs(dir.x) > 0.9) _attE.set(0, 0, 1);
    _attE.cross(dir).normalize().applyAxisAngle(dir, turn);
    return out.copy(dir).multiplyScalar(Math.cos(wobble)).addScaledVector(_attE, Math.sin(wobble));
}

export function updateMissionAttitude(obj, time, dt, days) {
    const m = getMotion(obj);
    const meshGroup = obj.meshGroup;
    const turn = (time / m.period) * Math.PI * 2 + m.phase;

    if (m.mode === 'tumble') {
        if (!obj.tumbleSpeed) obj.tumbleSpeed = getTumbleSpeed(obj.data.name, m.rate);
        meshGroup.rotateX(obj.tumbleSpeed.x * dt);
        meshGroup.rotateY(obj.tumbleSpeed.y * dt);
        meshGroup.rotateZ(obj.tumbleSpeed.z * dt);
        return;
    }

    const parent = celestialMap.get(obj.data.parent);
    if (m.mode === 'nadir' && parent && obj.data.orbit) {
        // Down: towards the body. Along: the direction of travel, from where it'll be shortly.
        _attD.subVectors(parent.group.position, obj.group.position).normalize();
        const now = getKeplerPosition(obj.data.orbit, days);
        const soon = getKeplerPosition(obj.data.orbit, days + 0.001);
        _attF.set(soon.x - now.x, soon.y - now.y, soon.z - now.z);
        _attF.addScaledVector(_attD, -_attF.dot(_attD));
        if (_attF.lengthSq() < 1e-16) _attF.crossVectors(_attD, _UP);
        _attF.normalize();
        _attE.crossVectors(_attD, _attF);
        _attM.makeBasis(_attD, _attF, _attE);                                      // world
        _attC.crossVectors(m.axis, m.along);
        _attN.makeBasis(m.axis, m.along, _attC).transpose();                       // model, inverted
        meshGroup.quaternion.setFromRotationMatrix(_attM.multiply(_attN));
        _attRoll.setFromAxisAngle(m.axis, m.wobble * Math.sin(turn));
        meshGroup.quaternion.multiply(_attRoll);
        return;
    }

    // spin and sun: the axis held on a direction that precesses, the craft rolling about it.
    if (m.mode === 'sun') _attA.subVectors(_sunPos, obj.group.position).normalize();
    else _attA.copy(m.rest);
    precess(_attA, m.wobble, turn, _attB);
    _attQ.setFromUnitVectors(m.axis, _attB);
    _attRoll.setFromAxisAngle(m.axis, m.rate * time + m.phase);
    meshGroup.quaternion.copy(_attQ).multiply(_attRoll);
}
