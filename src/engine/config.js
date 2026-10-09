// Engine settings: framing, flight timing, detail levels, debug switches, and the privacy
// switch for named asteroid models. createEngine's options will set some of these.

export const CAMERA_ORBIT_SPEED = 0.1;
export const CAMERA_FLY_SPEED = 0.0083; // Slowed down by ~3x for more cinematic zoom
export const ENABLE_NIGHT_LIGHTS = true;
export const DEBUG_SHADOWS = false;
export const DEBUG_LANDING = false;
// Every spacecraft model (orbiters and landers alike) is drawn at this size along its longest
// side, in world units: far larger than true scale, so landers stay visible on a planet's
// surface. Natural bodies with models (asteroids, comets) keep their own model_scale.
export const MISSION_MODEL_SIZE = 0.3;
// A selected spacecraft is framed so it fills about this fraction of the view.
export const MISSION_VIEW_FILL = 0.5;
// A selected body (star, planet, moon, asteroid, comet) is framed so it and everything orbiting
// it fills this fraction of the view. The Sun is framed on its own: its "system" is everything.
export const BODY_VIEW_FILL = 0.95;
export const SUN_FRAME_RADII = 1.25; // out to the edge of its glowing atmosphere
// The "Solar System" view (the default on load) keeps the Sun centred and fits every planet's
// orbit within this fraction of the screen, seen from this angle above the plane of the orbits.
export const SOLAR_SYSTEM_VIEW_FILL = 0.88;
export const SOLAR_SYSTEM_VIEW_ELEVATION = 25 * Math.PI / 180;

// Orbit lines may cut inside the true orbit by at most this much (world units, 1% of a craft).
export const ORBIT_LINE_MAX_SAG = 0.003;
// Landers are viewed from this angle off their surface normal (0 = straight down).
export const LANDER_VIEW_ANGLE = 50 * Math.PI / 180;

// Flight length multipliers: flights the visitor asks for are long enough to give a sense of
// the Solar System's scale but still feel responsive; the tour keeps its slower drift.
export const USER_FLIGHT_SCALE = 3.0;

export const MIN_FLIGHT_DURATION = 0.05; // Reduced motion: effectively a cut
export const HURRY_FLIGHT_SECONDS = 0.6;
// A slow frame (asset parsing, GC, tab switch) shouldn't make the camera leap to catch up.
export const MAX_MOTION_DT = 1 / 20;
// After the visitor lets go of a focused object, pick the slow orbit back up from where they left it.
export const AUTO_ORBIT_RESUME_MS = 6000;
export const AUTO_ORBIT_SPEED = CAMERA_ORBIT_SPEED * 60 / (2 * Math.PI); // OrbitControls units for the same rad/s
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
export const CULLING_THRESHOLD = 1; // Pixel size below which objects are culled
// Models start in low detail and switch to full detail only once they're big enough on
// screen for the difference to show (diameter in CSS pixels). Loading starts earlier so the
// full model is ready by the time it's needed; the gap between the two switch sizes stops
// it flickering back and forth at the boundary.
export const HIGH_DETAIL_PREFETCH_PX = 60;
export const HIGH_DETAIL_SHOW_PX = 160;
export const HIGH_DETAIL_HIDE_PX = 120;


// Privacy switch: an object's "model_named" (a named asteroid's model, which shows a
// researcher's name) is used in place of its "model" only when this is on.
const USE_NAMED_ASTEROID_MODELS = false;

// The model data.json gives the object, or null for none.
export function getEffectiveModel(item) {
    if (USE_NAMED_ASTEROID_MODELS && item.model_named) return item.model_named;
    return item.model || null;
}

// Solid bodies: they shade what's behind them, and landers stand on them.
export const SURFACE_TYPES = new Set(['planet', 'moon', 'asteroid', 'comet']);
export const CLOSED_BODY_TYPES = SURFACE_TYPES; // solid bodies, whose models are closed shapes
