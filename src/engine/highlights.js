// Orbit-line highlights: the selection's orbit (and, for Earth-Sun L1 or L2, the orbits of the
// craft round it), plus the ones the app asks for (setOrbitHighlights: what's hovered, and a group
// on show), restyled whenever the selection or an orbit line changes.
import { celestialMap } from './state.js';
import { selectedObject } from './camera.js';
import { onEngine } from './events.js';

const CHOSEN_COLOR = '#66EEFA'; // OU light blue: hovered, selected, or a group on show
let hovered = new Set();
let shown = new Set();

// Light the orbits of the objects named in `hovered` and `shown` (a group on show) as chosen.
export function setOrbitHighlights({ hovered: hoveredNames = [], shown: shownNames = [] } = {}) {
    hovered = new Set(hoveredNames);
    shown = new Set(shownNames);
    applyOrbitHighlights();
}

function applyOrbitHighlights() {
    // A selected L-point stands for the craft round it: their orbits light with it.
    let around = null;
    celestialMap.forEach(obj => {
        if (obj.mesh === selectedObject && obj.data.type === 'reference_point') around = obj.data.name;
    });
    celestialMap.forEach(obj => {
        if (obj.orbitLine && obj.orbitLine.material) {
            const isHovered = hovered.has(obj.data.name);
            const isSelected = (selectedObject === obj.mesh) || (around !== null && obj.data.parent === around);
            const isShown = shown.has(obj.data.name);
            const mat = obj.orbitLine.material;
            const baseColor = obj.orbitLine.userData.baseColor || '#888888';
            const baseOpacity = obj.orbitLine.userData.baseOpacity || 0.35;

            if (isHovered || isSelected || isShown) {
                mat.opacity = 0.95;
                mat.color.set(CHOSEN_COLOR);
            } else {
                mat.opacity = baseOpacity;
                mat.color.set(baseColor);
            }
        }
    });
}

onEngine('select', applyOrbitHighlights);
onEngine('deselect', applyOrbitHighlights);
onEngine('orbit-change', applyOrbitHighlights);
