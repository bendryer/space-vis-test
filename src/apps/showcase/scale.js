// The scale switch: Compressed (the engine's Diagram mode, sizes and distances adjusted so
// everything can be seen) or True scale (everything on one real scale), SCALE-PLAN.md. On larger
// screens, two buttons at the top of the controls plate; on a phone, one round button in the dock
// that flips between them. The engine's "scale-mode" event keeps both in step, however the mode
// was changed. While the engine animates the change (three seconds), the controls are greyed
// out and a bar along the foot of the screen fills as it goes. They're held, not made inert or
// disabled: either would drop keyboard focus to the page and send the next Tab back to the top.
import { engine } from './engine.js';
import { uiIcon } from './menu.js';
import { announce } from './announce.js';

const MODES = [
    { mode: 'diagram', label: 'Compressed', going: 'Changing to compressed scale', said: 'Compressed scale: sizes and distances adjusted so everything can be seen.' },
    { mode: 'true', label: 'True scale', going: 'Changing to true scale', said: 'True scale: every size and distance is real. Objects too small to see are marked with a dot.' },
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

    const bar = document.createElement('div');
    bar.id = 'scale-progress';
    bar.className = 'scale-progress';
    bar.innerHTML = '<span class="scale-progress-label"></span><span class="scale-progress-track"><span class="scale-progress-fill"></span></span>';
    bar.setAttribute('aria-hidden', 'true');   // the change is announced in words instead
    document.body.appendChild(bar);
    const fill = bar.querySelector('.scale-progress-fill');

    // While busy, a press on any control (a click, or Enter or Space, which click) goes nowhere.
    let busy = false;
    controls.addEventListener('click', (e) => {
        if (busy && e.target.closest('button')) { e.preventDefault(); e.stopPropagation(); }
    }, true);
    const setBusy = (on) => {
        busy = on;
        controls.classList.toggle('is-busy', on);
        controls.querySelectorAll('button').forEach(btn => {
            if (on) btn.setAttribute('aria-disabled', 'true');
            else btn.removeAttribute('aria-disabled');
        });
    };

    engine.on('scale-change', ({ to }) => {
        const { going } = MODES.find(m => m.mode === to);
        bar.querySelector('.scale-progress-label').textContent = going;
        fill.style.transform = 'scaleX(0)';
        bar.classList.add('is-active');
        setBusy(true);
        sync(to);
        announce(`${going}.`);
    });
    engine.on('scale-progress', ({ progress }) => {
        fill.style.transform = `scaleX(${progress})`;
    });
    engine.on('scale-mode', ({ mode }) => {
        bar.classList.remove('is-active');
        setBusy(false);
        sync();
        announce(MODES.find(m => m.mode === mode).said);
    });
    sync();
}

// Marks the mode shown as chosen (or, during a change, the one it's changing to).
function sync(current = engine.getScaleMode()) {
    document.querySelectorAll('#scale-switch .scale-option').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.mode === current));
    });
    document.getElementById('scale-btn')?.setAttribute('aria-pressed', String(current === 'true'));
}
