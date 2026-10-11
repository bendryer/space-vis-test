// The distance rules of the two scale modes (SCALE-PLAN.md): how a real distance (AU from the Sun,
// km from a body) becomes scene units. scale.js chooses the mode; orbits.js places everything with
// `distances`, the active mode's rules. Sizes are in scale.js.
import { MISSION_MODEL_SIZE } from './config.js';

export const AU_KM = 149597870.7;

// --- DIAGRAM ---
// Round the Sun: a smooth compression of distance, so the planets, the asteroid belt and the
// comets all sit in their true order and relative place while Neptune stays within reach. Earth's
// 1 AU maps to 1,000 scene units.
const SUN_SCALE_KNEE = 2.1;                                         // AU; below this, nearly proportional
const SUN_SCALE_UNITS = 1000 / Math.log(1 + 1 / SUN_SCALE_KNEE);    // so that 1 AU = 1,000 units
// Round a body: each point's height is drawn true to the body's drawn size close in (the ISS skims
// the Earth), then compressed, so moons sit in their true order without a system spreading across
// the Solar System. A height of h km is drawn u * K * ln(1 + h / K), where u is the body's scene
// units per km (its drawn radius over its real one) and K is the knee: a planet's or moon's, or a
// small body's (whose orbiters are a few km out, not thousands), or the body's own, lower one where
// scale.js keeps its system clear of its neighbours. A craft is kept its own size above the ground.
export const SATELLITE_KNEE_KM = 100000;
export const SMALL_BODY_KNEE_KM = 5;
const diagram = {
    name: 'diagram',
    au: au => SUN_SCALE_UNITS * Math.log(1 + au / SUN_SCALE_KNEE),
    toAu: units => SUN_SCALE_KNEE * (Math.exp(units / SUN_SCALE_UNITS) - 1),
    // s: the body's scale (orbits.js bodyScale): its drawn radius, real radius, units per km, knee.
    aroundBody(rKm, s) {
        const h = Math.max(0, rKm - s.radiusKm);
        return s.radius + Math.hypot(s.unit * s.knee * Math.log(1 + h / s.knee), MISSION_MODEL_SIZE);
    },
};

// --- TRUE SCALE ---
// Everything on one linear scale. Earth's radius stays 5 units, so a unit is 1,274.2 km and 1 AU is
// 117,400 units.
export const TRUE_KM_PER_UNIT = 6371 / 5;
const trueScale = {
    name: 'true',
    au: au => au * AU_KM / TRUE_KM_PER_UNIT,
    toAu: units => units * TRUE_KM_PER_UNIT / AU_KM,
    aroundBody: rKm => rKm / TRUE_KM_PER_UNIT,
};

export const DISTANCE_RULES = { diagram, true: trueScale };
export let distances = diagram;
export function useDistances(mode) { distances = DISTANCE_RULES[mode]; }
