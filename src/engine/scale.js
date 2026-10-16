// Scales: data.json gives real sizes ("radius_km", a craft's "size_m") and real orbits ("a_au" round
// the Sun, "a_km" round a body); the engine draws each kind of thing at one fixed scale per scale
// mode (SCALE-PLAN.md): Diagram, compressed so everything is easy to see and reach, or True scale,
// one linear scale for everything. Sizes are set here, distances in units.js. applyScales runs at
// load and again on a change of mode: it gives every natural body its drawn "radius" (and a
// modelled one its "model_scale"), every craft its "model_size", and readies every orbit.
import { MISSION_MODEL_SIZE } from './config.js';
import { SATELLITE_KNEE_KM, SMALL_BODY_KNEE_KM, TRUE_KM_PER_UNIT, useDistances, useMixedDistances } from './units.js';
import { auToScene, distanceFromBody, hillRadiusKm, kneeFor, lagrangeOffset, prepareOrbit } from './orbits.js';

export const SCALE_MODES = ['diagram', 'true'];
export let scaleMode = 'diagram';

// Each mode's view settings, in scene units: the camera's near plane (null: set each frame from
// what's nearest, draw.js) and how far it sees and may go; the distance a flight takes its full
// length over, or `logFlights` (timed on the logarithm of distance, camera.js), and the most a
// flight's path arches; how close to a system the Sun's shadows switch on at least, the least
// their map covers, and `shadowLocal` (the map reaches back only past the nearest body,
// lighting.js). `relative`: drawn relative to the camera, in slices of depth (draw.js).
const VIEWS = {
    diagram: {
        cameraNear: 0.1, cameraFar: 1e6, maxDistance: 1e5, flightReach: 15000, logFlights: false, flightArchMax: 800,
        shadowReachMin: 180, shadowHalfMin: 0.05, shadowLocal: false, relative: false,
    },
    true: {
        cameraNear: null, cameraFar: 2e7, maxDistance: 1e7, logFlights: true, flightArchMax: Infinity,
        shadowReachMin: 180, shadowHalfMin: 1e-8, shadowLocal: true, relative: true,
    },
};
export let view = VIEWS.diagram;

// --- DIAGRAM SIZES ---
// The Sun: drawn at 25 units' radius (its own scale; on the planets' it would swamp Mercury's orbit).
const STAR_UNITS_PER_KM = 25 / 695700;
// Planets and moons drawn as spheres: radius compressed by a power law, Earth at 5 units, so the
// giants don't dwarf everything and small moons stay visible: 5 * (r / 6371 km) ^ 0.62.
const BODY_RADIUS_UNITS = 5, BODY_RADIUS_KM = 6371, BODY_RADIUS_POWER = 0.62;
// Bodies drawn from a model (asteroids, comets, Dimorphos): "radius_km" is half the longest side,
// and the longest side is drawn 1.49 * (km) ^ 0.7, so Bennu is about 1 unit long and Comet 67P 4.
const SMALL_BODY_UNITS = 1.49, SMALL_BODY_POWER = 0.7;

const NATURAL_TYPES = new Set(['star', 'planet', 'moon', 'asteroid', 'comet']);

// Each system is kept clear of its neighbours: a planet's Hill sphere (hillRadiusKm; Earth's reaches
// 1.5 million km, where L1 and L2 sit) is drawn this share of the drawn gap to the nearest
// neighbouring orbit (or the Sun's surface), perihelion to aphelion.
const HILL_GAP_SHARE = 0.35;
// A small body's Hill sphere is drawn this many of its drawn radii out, with its knee kept within
// SMALL_BODY_KNEE_RANGE (km), so the craft that visit it stay close without close orbits squashing.
const SMALL_BODY_HILL_RADII = 8;
const SMALL_BODY_KNEE_RANGE = [1, SMALL_BODY_KNEE_KM];
// A halo orbit's lean along the Sun-Earth line, as a share of its width across it.
const HALO_LEAN = 0.3;

// Each mode's sizes: a natural body's drawn radius, and a craft's drawn longest side.
const SIZES = {
    diagram: {
        bodyRadius(item) {
            const r = item.radius_km;
            if (item.type === 'star') return r * STAR_UNITS_PER_KM;
            if (item.model) return SMALL_BODY_UNITS * Math.pow(2 * r, SMALL_BODY_POWER) / 2;
            return BODY_RADIUS_UNITS * Math.pow(r / BODY_RADIUS_KM, BODY_RADIUS_POWER);
        },
        // Every craft the same size, far larger than true, so all can be seen.
        craftSize: () => MISSION_MODEL_SIZE,
    },
    true: {
        bodyRadius: item => item.radius_km / TRUE_KM_PER_UNIT,
        craftSize: item => (item.size_m ?? 1) / 1000 / TRUE_KM_PER_UNIT,
    },
};

// The drawn radius of a natural body with a real size, in scene units, in the active mode.
export function drawnRadius(item) { return SIZES[scaleMode].bodyRadius(item); }

// Sizes part way from Diagram (y = 0) to True scale (y = 1), geometrically between the two.
function mixedSizes(y) {
    const between = (d, t) => d ** (1 - y) * t ** y;
    return {
        bodyRadius: item => between(SIZES.diagram.bodyRadius(item), SIZES.true.bodyRadius(item)),
        craftSize: item => between(SIZES.diagram.craftSize(item), SIZES.true.craftSize(item)),
        craftRadius: item => between(item.radius_diagram, SIZES.true.craftSize(item) / 2),
    };
}

// Sets every size and orbit for `mode`. While the mode changes (scale-change.js), `mix` gives how
// far each has gone from Diagram towards True scale: { orbit, size }, each 0 to 1. Everything is
// then drawn as in True scale (relative to the camera, in slices), which holds both.
export function applyScales(data, mode = scaleMode, mix = null) {
    scaleMode = mode;
    view = mix ? VIEWS.true : VIEWS[mode];
    if (mix) useMixedDistances(mix.orbit);
    else useDistances(mode);
    const sizes = mix ? mixedSizes(mix.size) : SIZES[mode];
    const byName = new Map(data.map(item => [item.name, item]));
    data.forEach(item => {
        if (item.type === 'mission') {
            // A craft's "radius" (its size until its model loads) is data.json's in Diagram mode.
            item.radius_diagram ??= item.radius;
            item.model_size = sizes.craftSize(item);
            item.radius = mix ? sizes.craftRadius(item) : mode === 'diagram' ? item.radius_diagram : item.model_size / 2;
            return;
        }
        if (!NATURAL_TYPES.has(item.type) || item.radius_km === undefined) return;
        item.radius_diagram = SIZES.diagram.bodyRadius(item);
        item.radius = sizes.bodyRadius(item);
        if (item.model) item.model_scale = 2 * item.radius;   // a model is scaled by its longest side
    });
    // The knees are Diagram mode's; they stay set in True scale (which doesn't use them) for a
    // change of mode to draw heights from.
    if (mode === 'diagram' && !mix) setKnees(data, byName);
    data.forEach(item => {
        const parent = byName.get(item.parent);
        // Saturn's rings are given in km; drawn in its radii.
        if (item.ring?.inner_km) {
            item.ring.inner_radius = item.ring.inner_km / item.radius_km;
            item.ring.outer_radius = item.ring.outer_km / item.radius_km;
        }
        // A suborbital flight's height (km) on its body's scale, and its length in days.
        if (item.suborbital?.apogee_km !== undefined && parent) {
            item.suborbital.apogee = distanceFromBody(parent, parent.radius_km + item.suborbital.apogee_km) - parent.radius;
            item.suborbital.duration = item.suborbital.duration_min / 1440;
        }
        // An Earth-Sun Lagrange point sits on the Sun-Earth line (render.js); "orbit.a" is only for
        // sorting and framing.
        if (item.lagrange) {
            const body = byName.get(item.lagrange.body);
            item.lagrange.offset = lagrangeOffset(body, byName.get('Sun'), item.lagrange.point);
            item.orbit = { a: auToScene(body.orbit.a_au) + item.lagrange.offset, e: 0 };
        }
        prepareOrbit(item.orbit, parent);
        // A cruise's arrival orbit is round its last waypoint's body.
        const waypoints = item.trajectory?.waypoints;
        if (waypoints?.length) prepareOrbit(item.trajectory.arrival_orbit, byName.get(waypoints[waypoints.length - 1].at));
    });
    // Halo orbits round an L-point, once the points are placed.
    data.forEach(item => {
        if (item.orbit_type === 'libration') prepareHalo(item.orbit, byName.get(item.parent), byName);
    });
}

// Each planet's and visited small body's knee (orbits.js), lowered where needed so the edge of its
// Hill sphere is drawn where HILL_GAP_SHARE or SMALL_BODY_HILL_RADII puts it. A lower knee
// compresses only far out: low orbits keep their true height.
function setKnees(data, byName) {
    const sun = byName.get('Sun');
    const planets = data.filter(d => d.type === 'planet' && d.parent === 'Sun' && d.orbit?.a_au).sort((a, b) => a.orbit.a_au - b.orbit.a_au);
    const near = p => auToScene(p.orbit.a_au * (1 - p.orbit.e)), far = p => auToScene(p.orbit.a_au * (1 + p.orbit.e));
    planets.forEach((p, i) => {
        if (!p.gm) return;
        const inner = near(p) - (i ? far(planets[i - 1]) : sun.radius);
        const outer = i < planets.length - 1 ? near(planets[i + 1]) - far(p) : Infinity;
        p.hill = HILL_GAP_SHARE * Math.min(inner, outer);
        p.knee = Math.min(SATELLITE_KNEE_KM, kneeFor(p.radius / p.radius_km, hillRadiusKm(p, sun) - p.radius_km, p.hill - p.radius));
    });
    data.forEach(b => {
        if ((b.type !== 'asteroid' && b.type !== 'comet') || !b.gm || !b.orbit?.a_au) return;
        b.hill = SMALL_BODY_HILL_RADII * b.radius;
        const K = kneeFor(b.radius / b.radius_km, hillRadiusKm(b, sun) - b.radius_km, b.hill - b.radius);
        b.knee = Math.min(Math.max(K, SMALL_BODY_KNEE_RANGE[0]), SMALL_BODY_KNEE_RANGE[1]);
    });
}

// A halo orbit's drawn size: its real amplitudes ("amplitude_km") at the scale its L-point is drawn
// at, which is the geometric mean of the scale along the line from the body (how fast drawn
// distance grows there) and across it (drawn distance over real distance), so the loop keeps its
// shape and sits in proportion to the gap between the point and its body. "a" is its widest reach,
// for sorting and framing; "rate" comes from "period_days".
function prepareHalo(orbit, point, byName) {
    const body = byName.get(point.lagrange.body);
    const rKm = hillRadiusKm(body, byName.get('Sun'));
    const along = (distanceFromBody(body, rKm * 1.001) - distanceFromBody(body, rKm * 0.999)) / (rKm * 0.002);
    const across = Math.abs(point.lagrange.offset) / rKm;
    const s = Math.sqrt(along * across);
    const { y, z } = orbit.amplitude_km;
    orbit.amp = { x: HALO_LEAN * y * s, y: z * s, z: y * s };
    orbit.a = Math.max(orbit.amp.y, orbit.amp.z);
    orbit.rate = 360 / orbit.period_days;
    orbit.M0 ??= 0;
}
