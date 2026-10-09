// The showcase's settings and small helpers shared by its modules.

// The details sidebar sits beside the scene (rather than over most of it) from this width up;
// the view is then shifted so selections are centred in the part of the screen still visible.
const SIDEBAR_BESIDE_MIN_WIDTH = 900;
// Below this the phone layout takes over (see PHONE LAYOUT); matches style.css.
export const phoneQuery = window.matchMedia('(max-width: 720px)');
export const isPhone = () => phoneQuery.matches;

export const CINEMATIC_DELAY = 30000; // 30 Seconds
// The tour's flights drift more slowly than the visitor's (USER_FLIGHT_SCALE in engine/config.js).
export const CINEMATIC_FLIGHT_SCALE = 5.0;
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Asset paths in data.json start with "/"; served under the site's base path, they're relative.
export function fixPath(path) {
    if (!path) return null;
    return path.startsWith('/') ? path.slice(1) : path;
}

export function isSidebarBesideScene() {
    return window.innerWidth >= SIDEBAR_BESIDE_MIN_WIDTH;
}

// A pointer that moves further than this between press and release is a drag, not a tap.
export const DRAG_THRESHOLD_PX = 6;
