// Scales: data.json gives real sizes ("radius_km") and real orbits ("a_au" round the Sun, "a_km"
// round a body); the engine draws each kind of thing at one fixed scale, set here and in orbits.js
// (the distance scales). Run once at load, before the system is built: it gives every natural body
// its drawn "radius" (and a modelled one its "model_scale"), and readies every orbit.
import { prepareOrbit } from './orbits.js';

// The Sun: drawn at 25 units' radius (its own scale; on the planets' it would swamp Mercury's orbit).
const STAR_UNITS_PER_KM = 25 / 695700;
// Planets and moons drawn as spheres: radius compressed by a power law, Earth at 5 units, so the
// giants don't dwarf everything and small moons stay visible: 5 * (r / 6371 km) ^ 0.62.
const BODY_RADIUS_UNITS = 5, BODY_RADIUS_KM = 6371, BODY_RADIUS_POWER = 0.62;
// Bodies drawn from a model (asteroids, comets, Dimorphos): "radius_km" is half the longest side,
// and the longest side is drawn 1.49 * (km) ^ 0.7, so Bennu is about 1 unit long and Comet 67P 4.
const SMALL_BODY_UNITS = 1.49, SMALL_BODY_POWER = 0.7;

const NATURAL_TYPES = new Set(['star', 'planet', 'moon', 'asteroid', 'comet']);

// The drawn radius of a natural body with a real size, in scene units.
export function drawnRadius(item) {
    const r = item.radius_km;
    if (item.type === 'star') return r * STAR_UNITS_PER_KM;
    if (item.model) return SMALL_BODY_UNITS * Math.pow(2 * r, SMALL_BODY_POWER) / 2;
    return BODY_RADIUS_UNITS * Math.pow(r / BODY_RADIUS_KM, BODY_RADIUS_POWER);
}

export function applyScales(data) {
    const byName = new Map(data.map(item => [item.name, item]));
    data.forEach(item => {
        if (!NATURAL_TYPES.has(item.type) || item.radius_km === undefined) return;
        item.radius = drawnRadius(item);
        if (item.model) item.model_scale = 2 * item.radius;   // a model is scaled by its longest side
    });
    data.forEach(item => {
        prepareOrbit(item.orbit, byName.get(item.parent));
        // A cruise's arrival orbit is round its last waypoint's body.
        const waypoints = item.trajectory?.waypoints;
        if (waypoints?.length) prepareOrbit(item.trajectory.arrival_orbit, byName.get(waypoints[waypoints.length - 1].at));
    });
}
