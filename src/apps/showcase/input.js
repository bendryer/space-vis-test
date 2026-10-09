// The showcase's input: the kind the visitor last used, and the handlers on the canvas, the
// sidebar and Escape.
import { DRAG_THRESHOLD_PX } from './config.js';
import { engine } from './engine.js';
import { stopCinematicMode, cinematicActive } from './cinematic.js';
import { selectObject } from './details.js';
import { menuSheetOpen, closeMenuSheet } from './phone.js';

export let lastInputWasKeyboard = false;
// The kind of input the visitor last used, which decides where focus goes and the coach's words.
export function trackInputType() {
    window.addEventListener('keydown', () => { lastInputWasKeyboard = true; }, true);
    window.addEventListener('pointerdown', () => { lastInputWasKeyboard = false; }, true);
}

export let pointerDownPos = null;

// The showcase's input: the canvas, the sidebar's close and Escape. Only clicks on the 3D view
// itself select or deselect. Listening on the canvas (not window) keeps clicks in the sidebar and
// menus from reaching the scene.
export function setupInput() {
    engine.canvas.addEventListener('pointerdown', (e) => {
        if (!e.isPrimary) return;
        pointerDownPos = { x: e.clientX, y: e.clientY };
        engine.hurry();
    });
    engine.canvas.addEventListener('wheel', () => engine.hurry(), { passive: true });

    // Taking hold of the camera ends the tour.
    engine.on('steer', stopCinematicMode);

    engine.canvas.addEventListener('click', (e) => {
        // Orbiting with a drag also ends in a click; only a still tap is a selection.
        const start = pointerDownPos;
        pointerDownPos = null;
        if (start && Math.hypot(e.clientX - start.x, e.clientY - start.y) > DRAG_THRESHOLD_PX) return;

        // A tap on the scene ends the tour, then carries on as a normal selection.
        stopCinematicMode();

        const name = engine.pick(e.clientX, e.clientY);
        if (name) selectObject(name);
        else engine.deselect();
    });

    document.getElementById('sidebar-close').addEventListener('click', () => {
        stopCinematicMode();
        engine.deselect();
    });

    // Reading the details means the visitor wants to stay on this object.
    document.getElementById('sidebar').addEventListener('pointerdown', stopCinematicMode);

    window.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        // The credits dialog closes itself on Escape; leave the scene alone.
        if (document.getElementById('credits-dialog').open) return;
        if (menuSheetOpen) { closeMenuSheet({ returnFocus: true }); return; }
        engine.hurry();
        if (cinematicActive) { stopCinematicMode(); return; }
        if (document.getElementById('sidebar').classList.contains('active')) {
            engine.deselect();
        }
    });
}
