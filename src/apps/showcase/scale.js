// The scale switch: Compressed (the engine's Diagram mode, sizes and distances adjusted so
// everything can be seen) or True scale (everything on one real scale), SCALE-PLAN.md. On larger
// screens, two buttons at the top of the controls plate; on a phone, one round button in the dock
// that flips between them. The engine's "scale-mode" event keeps both in step, however the mode
// was changed.
import { engine } from './engine.js';
import { uiIcon } from './menu.js';
import { announce } from './announce.js';

const MODES = [
    { mode: 'diagram', label: 'Compressed', said: 'Compressed scale: sizes and distances adjusted so everything can be seen.' },
    { mode: 'true', label: 'True scale', said: 'True scale: every size and distance is real. Objects too small to see are marked with a dot.' },
];

export function setupScaleSwitch() {
    const controls = document.getElementById('controls');
    if (!controls || document.getElementById('scale-switch')) return;

    const group = document.createElement('div');
    group.id = 'scale-switch';
    group.className = 'scale-switch';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Scale');
    for (const { mode, label } of MODES) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'scale-option';
        btn.dataset.mode = mode;
        btn.textContent = label;
        btn.addEventListener('click', () => engine.setScaleMode(mode));
        group.appendChild(btn);
    }
    controls.prepend(group);

    // Phones: one button in the dock, after Cinematic Mode. Pressed means True scale.
    const toggle = document.createElement('button');
    toggle.id = 'scale-btn';
    toggle.type = 'button';
    toggle.innerHTML = `${uiIcon('ruler', 'btn-icon')}<span class="btn-label">True scale</span>`;
    toggle.addEventListener('click', () => engine.setScaleMode(engine.getScaleMode() === 'true' ? 'diagram' : 'true'));
    document.getElementById('cinematic-btn')?.after(toggle);

    engine.on('scale-mode', ({ mode }) => {
        sync();
        announce(MODES.find(m => m.mode === mode).said);
    });
    sync();
}

function sync() {
    const current = engine.getScaleMode();
    document.querySelectorAll('#scale-switch .scale-option').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.mode === current));
    });
    document.getElementById('scale-btn')?.setAttribute('aria-pressed', String(current === 'true'));
}
