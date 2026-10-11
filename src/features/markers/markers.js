// Markers: a dot and a name for each object drawn too small to see, so that in True scale
// (SCALE-PLAN.md), where almost everything is under a pixel, the Solar System can still be read and
// picked. A shared feature built on the engine's API: an app sets it up over its scene, updates it
// from its onFrame hook, and asks it what's under a point (pickMarker).
//
// Each dot takes its object's orbit colour (the Sun its own), so it matches its line. Names go on
// in order of importance (the Sun, planets, moons and small bodies, then craft) and a name that would
// overlap one already placed is left off; a dot on top of a more important one is folded into it
// (the craft round Earth, seen from afar, are Earth's dot). A marker behind something that's drawn
// is hidden. Drawn on one 2D canvas: there can be a hundred of them.
import './markers.css';

const MARKER_PX = 3;        // an object drawn with a smaller radius than this gets a marker
const DOT_R = 2.5;
const MERGE_PX = 6;         // a dot this close to a more important one is folded into it
const PICK_PX = 12;         // how near a pointer must be to a dot to pick it
const LABEL_GAP = 6;        // from the dot's centre to its name
const LABEL_PAD = 4;        // clear space kept round each name
const PRIORITY = { star: 0, planet: 1, moon: 2, reference_point: 2, asteroid: 3, comet: 3, mission: 4 };
const FONT = '500 11.5px Poppins, Arial, sans-serif';
const INK = 'rgba(255, 255, 255, 0.78)';
const INK_HOVER = '#FFFFFF';
const HALO = 'rgba(6, 6, 69, 0.9)';
const EDGE = '#060645';

let engine = null;
let canvas = null;
let ctx = null;
let shown = [];   // this frame's dots: { name, x, y }

// The markers' layer, in `container`, drawn over `eng`'s scene.
export function setupMarkers(eng, container) {
    if (canvas || !container) return;
    engine = eng;
    canvas = document.createElement('canvas');
    canvas.className = 'markers';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);
    ctx = canvas.getContext('2d');
}

// Each frame. `enabled`: whether to draw markers at all (the showcase shows them in True scale
// only); `hovered`: the name under the pointer, whose label always shows; `rightEdge`: where the
// scene ends on the right (a panel may cover the rest).
export function updateMarkers({ enabled = true, hovered = null, rightEdge = window.innerWidth } = {}) {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth, h = window.innerHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shown = [];
    if (!enabled) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const selected = engine.getSelection()?.name;
    const all = [];
    for (const data of engine.listObjects()) {
        const p = engine.projectBody(data.name);
        if (p) all.push({ data, p });
    }
    // Anything drawn hides the markers behind it: a body by its disc, a craft up close (the ISS
    // filling the view) by its bounding circle.
    const occluders = all.filter(o => o.p.radius >= MARKER_PX && o.data.type !== 'reference_point');
    const candidates = all.filter(({ data, p }) => p.radius < MARKER_PX && data.name !== selected
        && p.x >= 0 && p.x <= rightEdge && p.y >= 0 && p.y <= h
        && !occluders.some(b => b.p.distance < p.distance && Math.hypot(b.p.x - p.x, b.p.y - p.y) < b.p.radius));
    candidates.sort((a, b) => (PRIORITY[a.data.type] ?? 5) - (PRIORITY[b.data.type] ?? 5) || a.p.distance - b.p.distance);

    for (const { data, p } of candidates) {
        if (shown.some(s => Math.hypot(s.x - p.x, s.y - p.y) < MERGE_PX)) continue;
        shown.push({ name: data.name, x: p.x, y: p.y, color: data.type === 'star' ? data.color : engine.getOrbitColor(data.name) });
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = EDGE;
    for (const s of shown) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = s.color || INK;
        ctx.fill();
        ctx.stroke();
    }

    // Names: the hovered one first, so it always has room, then in the dots' order.
    ctx.font = FONT;
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    const placed = [];
    const order = [...shown].sort((a, b) => (b.name === hovered) - (a.name === hovered));
    for (const s of order) {
        const width = labelWidth(s.name);
        const left = s.x + LABEL_GAP, top = s.y - 8;
        const box = { left, top, right: left + width, bottom: top + 16 };
        const isHovered = s.name === hovered;
        if (!isHovered && (box.right > rightEdge - 8 || placed.some(b => overlaps(box, b)))) continue;
        placed.push(box);
        ctx.lineWidth = 3;
        ctx.strokeStyle = HALO;
        ctx.strokeText(s.name, left, s.y);
        ctx.fillStyle = isHovered ? INK_HOVER : INK;
        ctx.fillText(s.name, left, s.y);
    }
}

// Each name's width, measured once (and again once the web font has arrived).
const widths = new Map();
document.fonts?.addEventListener('loadingdone', () => widths.clear());
function labelWidth(name) {
    let w = widths.get(name);
    if (w === undefined) { w = ctx.measureText(name).width; widths.set(name, w); }
    return w;
}

function overlaps(a, b) {
    return a.left < b.right + LABEL_PAD && b.left < a.right + LABEL_PAD && a.top < b.bottom + LABEL_PAD && b.top < a.bottom + LABEL_PAD;
}

// The name of the marker nearest a point on screen (CSS pixels), within `radius`, or null.
export function pickMarker(x, y, radius = PICK_PX) {
    let best = null, bestD = radius;
    for (const s of shown) {
        const d = Math.hypot(s.x - x, s.y - y);
        if (d <= bestD) { best = s.name; bestD = d; }
    }
    return best;
}
