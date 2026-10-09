// Orbit-line highlights: the selection's orbit, plus the ones the app asks for (setOrbitHighlights:
// what's hovered, and a group on show), restyled whenever the selection or an orbit line changes.
import { celestialMap } from './state.js';
import { selectedObject } from './camera.js';
import { onEngine } from './events.js';

const CHOSEN_COLOR = '#66EEFA'; // OU light blue: hovered or selected
const SHOWN_COLOR = '#A6B5F8';  // Core blue tint: informational, apart from the light blue of a choice
let hovered = new Set();
let shown = new Set();

// Light the orbits of the objects named in `hovered` (as chosen) and `shown` (informational).
export function setOrbitHighlights({ hovered: hoveredNames = [], shown: shownNames = [] } = {}) {
    hovered = new Set(hoveredNames);
    shown = new Set(shownNames);
    applyOrbitHighlights();
}

function applyOrbitHighlights() {
    celestialMap.forEach(obj => {
        if (obj.orbitLine && obj.orbitLine.material) {
            const isHovered = hovered.has(obj.data.name);
            const isSelected = (selectedObject === obj.mesh);
            const isShown = shown.has(obj.data.name);
            const mat = obj.orbitLine.material;
            const baseColor = obj.orbitLine.userData.baseColor || '#888888';
            const baseOpacity = obj.orbitLine.userData.baseOpacity || 0.35;

            if (isHovered || isSelected) {
                mat.opacity = 0.95;
                mat.color.set(CHOSEN_COLOR);
            } else if (isShown) {
                mat.opacity = 0.7;
                mat.color.set(SHOWN_COLOR);
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
