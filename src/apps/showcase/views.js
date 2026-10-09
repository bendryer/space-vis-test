// What the scene shows and points at: the overview, a holder's bodies on show, and hover.
import { engine } from './engine.js';
import { syncMenuCurrent } from './menu.js';
import { announce } from './announce.js';
import { stopCinematicMode } from './cinematic.js';

export let hoveredObj = null;
let hoveredHolder = null; // a menu holder (asteroids, comets) whose row is hovered
let shownHolder = null;   // the holder on show after its row was chosen

// The bodies a holder gathers: its asteroids or comets, not the missions to them.
function holderMembers(holder) {
    return engine.listObjects().filter(data => holder.holds(data));
}

// The engine lights the selection's orbit; the showcase adds what's hovered and the holder on show.
export function updateOrbitLineHighlights() {
    const hovered = hoveredObj ? [hoveredObj.name] : [];
    if (hoveredHolder && hoveredHolder !== shownHolder) hovered.push(...holderMembers(hoveredHolder).map(data => data.name));
    const shown = shownHolder ? holderMembers(shownHolder).map(data => data.name) : [];
    engine.setOrbitHighlights({ hovered, shown });
}

export function setHoveredObject(data) {
    if (hoveredObj === data) return;
    hoveredObj = data;
    updateOrbitLineHighlights();
}

export function clearHoveredObject() {
    if (hoveredObj) {
        hoveredObj = null;
        updateOrbitLineHighlights();
    }
    // The reticle is hidden by the next frame's updateReticles, not here: choosing an object
    // blurs its row, and the reticle must survive that long enough to swipe out.
}

export function setHoveredHolder(holder) {
    if (hoveredHolder === holder) return;
    hoveredHolder = holder;
    updateOrbitLineHighlights();
}

// A holder's row: the same overview as "Solar System", with its bodies' orbits kept lit and each
// body labelled, until something else is chosen.
export function showHolder(holder) {
    showSolarSystem();
    shownHolder = holder;
    updateOrbitLineHighlights();
    syncMenuCurrent(holder.name);
    const count = holderMembers(holder).length;
    announce(`Showing ${count} ${holder.spoken || holder.name.toLowerCase()} and their orbits`);
}

// The holders' bodies the reticles mark: the holder on show as information, a hovered one as hover.
export function reticleGroups() {
    const groups = new Map();
    if (shownHolder) holderMembers(shownHolder).forEach(data => groups.set(data, 'info'));
    if (hoveredHolder && hoveredHolder !== shownHolder) holderMembers(hoveredHolder).forEach(data => groups.set(data, 'hover'));
    return groups;
}

function clearShownHolder() {
    if (!shownHolder) return;
    shownHolder = null;
    updateOrbitLineHighlights();
}

// A choice, or letting go, ends any holder on show and lights the chosen object's orbit.
export function setupViews() {
    engine.on('select', clearShownHolder);
    engine.on('deselect', clearShownHolder);
}

// EVENTS
// Showcase: "Solar System" pinned atop the menu (and the view on load, with animate: false).
// The details close before the tour stops: stopping it first on a phone would put focus in the
// details just as they close.
export function showSolarSystem({ animate = true } = {}) {
    engine.deselect();
    stopCinematicMode();
    engine.showOverview({ animate });
    syncMenuCurrent('Solar System');
    if (animate) announce('Showing the whole Solar System');
}
