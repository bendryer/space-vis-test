// Reticles: instrument-style marks over objects in the scene, drawn from the engine's projectBody.
// A shared feature: an app sets it up over its scene and tells it each frame what to mark.
import './reticles.css';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// --- RETICLE ---
// An instrument-style callout drawn over the scene while an object is hovered in the menu: a thin
// ring round the body and a leader rising at 45 degrees to a name tab. Once the body is large on
// screen the ring gives way to a light-blue dot pinned to its centre, since a ring fitted to a
// bounding box stops being accurate up close. The mark's centre follows the body exactly; only its
// size eases, so it doesn't twitch as the body's on-screen size changes.
// Choosing the marked object acknowledges it in one stroke: the ring sweeps round into the leader's
// foot, the leader retracts towards the name, and the name wipes away, leaving the approach clear.
// A holder (asteroids, comets) marks every body it holds at once: in the hover style while its row
// is hovered, and while it's on show as ticked rings alone, which fade back while anything is hovered.
const SVG_NS = 'http://www.w3.org/2000/svg';
const RETICLE_MIN_RADIUS = 10;
const RETICLE_GAP = 6; // ring sits this far outside the body's projected edge
const RETICLE_DOT_RADIUS = 4;
const RETICLE_DOT_ENTER = 72; // projected body radius (px) at which the ring becomes a dot...
const RETICLE_DOT_LEAVE = 56; // ...and below which it returns, so the mark doesn't flicker between them
const RETICLE_MORPH_RATE = 18; // ring-to-dot morph speed (1/s); only the size morphs, never the position
const RETICLE_SIZE_RATE = 1; // how quickly the ring's size follows the body's (1/s); lower is more viscous
const LEADER_RISE = 18;
// Leader heights tried, in order, when a group's labels would collide; negative ones drop below.
const LEADER_RISES = [LEADER_RISE, 34, 50, -LEADER_RISE, -34, -50];
const LABEL_PAD = 4; // clear space kept between a group's labels
const RETICLE_EXIT_MS = 700; // matches the chained transitions in reticles.css
let reticleLayer = null;
let reticle = null; // the hovered object's reticle, the only one that plays the exit
const groupReticles = new Map(); // obj -> reticle, for the members of a hovered or shown holder
let reticleExit = null; // { obj, until } while the chosen object's reticle swipes out
let reticleLastSelected = null;
let reticleEngine = null; // the engine the reticles project through (setupReticles)
let reticleRightEdge = 0; // this frame's right edge of the scene (updateReticles)

function svgEl(name, attrs) {
    const el = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
}

// One reticle's elements and eased state. Only the primary normalises its path lengths, which
// its exit animates; a group's ticked ring needs real lengths for its dash pattern.
function createReticle({ primary = false } = {}) {
    const lengths = primary ? { pathLength: '1' } : {};
    const r = {
        obj: null, dot: false, morph: 0, ringR: 0, placement: null, variant: '', tabText: '', tabW: 0, tabH: 0,
        mark: svgEl('path', { class: primary ? 'reticle-mark' : 'reticle-mark reticle--group', ...lengths }),
        leader: svgEl('path', { class: primary ? 'reticle-leader' : 'reticle-leader reticle--group', ...lengths }),
        tab: document.createElement('div'),
    };
    r.tab.className = 'reticle-tab';
    // A group's reticles go beneath the primary, so the one the visitor points at stays on top.
    reticleLayer.insertBefore(r.mark, reticle ? reticle.mark : null);
    reticleLayer.insertBefore(r.leader, reticle ? reticle.mark : null);
    reticleLayer.parentNode.insertBefore(r.tab, reticle ? reticle.tab : null);
    hideReticle(r);
    return r;
}

// The reticles' layer, in `container`, drawn over `engine`'s scene.
export function setupReticles(engine, container) {
    const uiLayer = container;
    if (!uiLayer || reticleLayer) return;
    reticleEngine = engine;
    reticleLayer = svgEl('svg', { class: 'reticles', 'aria-hidden': 'true', focusable: 'false' });
    const defs = svgEl('defs', {});
    const grad = svgEl('linearGradient', { id: 'reticle-signal', x1: '0', y1: '1', x2: '1', y2: '0' });
    grad.append(svgEl('stop', { offset: '0', 'stop-color': '#7DFFD3' }), svgEl('stop', { offset: '1', 'stop-color': '#66EEFA' }));
    defs.append(grad);
    reticleLayer.append(defs);
    uiLayer.appendChild(reticleLayer);
    reticle = createReticle({ primary: true });
    // Labels are measured once per name; measure again once the web font has arrived.
    document.fonts?.addEventListener('loadingdone', () => {
        [reticle, ...groupReticles.values()].forEach(r => { r.tabW = 0; });
    });
}

function setReticleLeaving(leaving) {
    [reticle.mark, reticle.leader, reticle.tab].forEach(el => el.classList.toggle('is-leaving', leaving));
}

function setReticleVariant(r, variant) {
    if (r.variant === variant) return;
    r.variant = variant;
    [r.mark, r.leader, r.tab].forEach(el => el.classList.toggle('reticle--info', variant === 'info'));
    r.tabW = 0; // the label's size changes with its style
}

function hideReticle(r) {
    if (!r || !r.mark) return;
    r.mark.style.display = 'none';
    r.leader.style.display = 'none';
    r.tab.style.display = 'none';
    r.obj = null;
    r.placement = null;
}

// A full circle starting and ending at the 45-degree point on the leader's side, drawn as four
// quarter arcs. Not two half arcs: a 180-degree arc's centre is ill-defined from its endpoints, so
// rounding made the renderer re-fit it each frame and the ring pulsed along the other diagonal.
function reticleRingPath(cx, cy, r, dir) {
    const sweep = dir > 0 ? 0 : 1; // mirror the winding when the leader flips left
    const start = dir > 0 ? -Math.PI / 4 : -3 * Math.PI / 4;
    const step = dir > 0 ? -Math.PI / 2 : Math.PI / 2;
    const rr = r.toFixed(2);
    const pt = i => `${(cx + r * Math.cos(start + i * step)).toFixed(2)} ${(cy + r * Math.sin(start + i * step)).toFixed(2)}`;
    let d = `M${pt(0)}`;
    for (let i = 1; i <= 4; i++) d += ` A${rr} ${rr} 0 0 ${sweep} ${pt(i)}`;
    return d;
}

// Where the label goes for a leader rising (or, for a negative rise, dropping) to one side: its
// box, and the leader's foot and elbow.
function labelBox(cx, cy, r, dir, rise, tabW, tabH) {
    const sx = cx + dir * r * Math.SQRT1_2, sy = cy - Math.sign(rise) * r * Math.SQRT1_2;
    const ex = sx + dir * (Math.abs(rise) + 12), ey = sy - rise;
    const left = dir > 0 ? ex : ex - tabW;
    return { sx, sy, ex, ey, left, top: ey - tabH / 2, right: left + tabW, bottom: ey + tabH / 2 };
}

function boxesOverlap(a, b) {
    return a.left < b.right + LABEL_PAD && b.left < a.right + LABEL_PAD && a.top < b.bottom + LABEL_PAD && b.top < a.bottom + LABEL_PAD;
}

// Draws one reticle. With `placed` (a group's labels so far) the label takes the first spot that
// clears the others, keeping last frame's spot while it still does, and is left off if none does.
function drawReticle(r, obj, dt, fresh, placed = null) {
    const body = reticleEngine.projectBody(obj.name);
    if (!body) { hideReticle(r); return; }
    const { x: cx, y: cy, radius: bodyR } = body;
    const w = window.innerWidth, h = window.innerHeight;
    const reduced = prefersReducedMotion.matches;
    const ease = rate => 1 - Math.exp(-rate * (dt || 0.016));

    // The ring's size eases towards the body's so it doesn't twitch as the camera moves; the
    // centre above is never eased.
    const ringTarget = Math.max(RETICLE_MIN_RADIUS, Math.min(bodyR + RETICLE_GAP, Math.min(w, h) * 0.45));
    r.ringR = fresh || reduced ? ringTarget : r.ringR + (ringTarget - r.ringR) * ease(RETICLE_SIZE_RATE);
    const ringR = r.ringR;

    // Ring at range, dot up close, judged on the eased size so the choice can't flicker either:
    // decided outright for a new object, latched while leaving.
    const sizeR = ringR - RETICLE_GAP;
    if (!r.mark.classList.contains('is-leaving')) {
        if (fresh) r.dot = bodyR >= RETICLE_DOT_ENTER;
        else if (!r.dot && sizeR >= RETICLE_DOT_ENTER) r.dot = true;
        else if (r.dot && sizeR < RETICLE_DOT_LEAVE) r.dot = false;
    }
    const target = r.dot ? 1 : 0;
    r.morph = fresh || reduced ? target : r.morph + (target - r.morph) * ease(RETICLE_MORPH_RATE);
    const rad = ringR + (RETICLE_DOT_RADIUS - ringR) * r.morph;
    if (cx + rad < 0 || cx - rad > w || cy + rad < 0 || cy - rad > h) { hideReticle(r); return; }

    r.obj = obj;
    // Informational marks are the ring alone: a shown group only says where its bodies are, and
    // names appear one at a time as the visitor points at them.
    if (r.variant === 'info') {
        r.mark.setAttribute('d', reticleRingPath(cx, cy, rad, 1));
        r.mark.classList.toggle('is-dot', r.morph > 0.5);
        r.mark.style.display = '';
        r.leader.style.display = 'none';
        r.tab.style.display = 'none';
        return;
    }
    const tab = r.tab;
    if (r.tabText !== obj.name) { r.tabText = tab.textContent = obj.name; r.tabW = 0; }
    tab.style.display = 'block';
    if (!r.tabW) { r.tabW = tab.offsetWidth; r.tabH = tab.offsetHeight; }
    const edge = reticleRightEdge - 8;

    let spot = null;
    if (!placed) {
        // The leader rises up and to the right; it flips left when the tab would leave the scene.
        const dir = labelBox(cx, cy, rad, 1, LEADER_RISE, r.tabW, r.tabH).right > edge ? -1 : 1;
        spot = { dir, rise: LEADER_RISE };
    } else {
        const fits = s => {
            const box = labelBox(cx, cy, rad, s.dir, s.rise, r.tabW, r.tabH);
            return box.left >= 8 && box.right <= edge && box.top >= 8 && box.bottom <= h - 8
                && !placed.some(p => boxesOverlap(box, p));
        };
        if (r.placement && fits(r.placement)) spot = r.placement;
        else {
            for (const rise of LEADER_RISES) {
                spot = [{ dir: 1, rise }, { dir: -1, rise }].find(fits) || null;
                if (spot) break;
            }
        }
        r.placement = spot;
    }

    const dir = spot ? spot.dir : 1;
    r.mark.setAttribute('d', reticleRingPath(cx, cy, rad, dir));
    r.mark.classList.toggle('is-dot', r.morph > 0.5);
    r.mark.style.display = '';
    if (!spot) {
        r.leader.style.display = 'none';
        tab.style.display = 'none';
        return;
    }
    const box = labelBox(cx, cy, rad, dir, spot.rise, r.tabW, r.tabH);
    if (placed) placed.push(box);
    r.leader.setAttribute('d', `M${box.sx.toFixed(2)} ${box.sy.toFixed(2)} l${(dir * Math.abs(spot.rise)).toFixed(2)} ${(-spot.rise).toFixed(2)} H${box.ex.toFixed(2)}`);
    r.leader.style.display = '';
    tab.classList.toggle('is-flipped', dir < 0);
    tab.style.left = `${box.left.toFixed(1)}px`;
    tab.style.top = `${box.top.toFixed(1)}px`;
}

// A group's reticles (`groups`: entry -> 'hover' or 'info'), minus the object the primary reticle
// is marking.
function updateGroupReticles(dt, exclude, groups) {
    const wanted = new Map(groups);
    if (exclude) wanted.delete(exclude);

    groupReticles.forEach((r, obj) => { if (!wanted.has(obj)) hideReticle(r); });
    const placed = [];
    wanted.forEach((variant, obj) => {
        let r = groupReticles.get(obj);
        if (!r) { r = createReticle(); groupReticles.set(obj, r); }
        setReticleVariant(r, variant);
        drawReticle(r, obj, dt, r.obj !== obj, placed);
    });
}

// Each frame: `hovered` is the entry pointed at (or null), `groups` the entries marked as a group
// ('hover' or 'info'), and `rightEdge` where the scene ends on the right (a panel may cover the rest).
export function updateReticles(dt = 0.016, { hovered: pointedAt = null, groups = new Map(), rightEdge = window.innerWidth } = {}) {
    if (!reticleLayer) return;
    reticleRightEdge = rightEdge;
    // (projectBody uses this frame's camera, so the mark never trails the body.)
    const selected = reticleEngine.getSelection();

    // Choosing the object the reticle marks: acknowledge it, then clear the view.
    if (selected !== reticleLastSelected) {
        reticleLastSelected = selected;
        if (selected && reticle.obj === selected) {
            reticleExit = { obj: selected, until: performance.now() + (prefersReducedMotion.matches ? 0 : RETICLE_EXIT_MS) };
            setReticleLeaving(true);
        }
    }
    if (reticleExit && performance.now() >= reticleExit.until) {
        reticleExit = null;
        hideReticle(reticle);
        setReticleLeaving(false);
    }

    // Hover marks anything but the object already on show.
    const hovered = reticleExit ? reticleExit.obj : (pointedAt && pointedAt !== selected ? pointedAt : null);
    updateGroupReticles(dt, hovered, groups);
    // A shown group's rings step back while anything is pointed at, so the hover stands out.
    reticleLayer.classList.toggle('is-pointing', Boolean(hovered || [...groups.values()].includes('hover')));
    if (!hovered) { hideReticle(reticle); return; }
    drawReticle(reticle, hovered, dt, !reticleExit && reticle.obj !== hovered);
}
