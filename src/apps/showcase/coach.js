// The first-run coach: three things to try, ticked off as the visitor does them.
import { lastInputWasKeyboard, pointerDownPos } from './input.js';
import { cinematicActive } from './cinematic.js';
import { announce } from './announce.js';
import { isPhone, DRAG_THRESHOLD_PX } from './config.js';
import { openMenuSheet } from './phone.js';
import { engine } from './engine.js';

// After the way in, a small plate offers three things to try: turn the view, zoom, and pick
// something to fly to. Each ticks off when the visitor actually does it; picking something (the
// point of the app: fly there and read what the OU did) completes it. It shows once per browser
// (remembered in localStorage), steps aside for Cinematic Mode, and "How to explore" in the
// controls brings it back. Its words follow the visitor's input: mouse, touch or keyboard.
const COACH_KEY = 'ouniverse-coach-done';
const COACH_STEPS = ['turn', 'zoom', 'pick'];
const COACH_DONE_LINGER_MS = 1800;
const coachDone = new Set();
let coachShown = false;
let coachHideTimer = null;
const coachSeen = () => { try { return localStorage.getItem(COACH_KEY) === '1'; } catch { return false; } };
const rememberCoach = () => { try { localStorage.setItem(COACH_KEY, '1'); } catch { /* private mode: show again next time */ } };

function coachWords() {
    if (window.matchMedia('(pointer: coarse)').matches) {
        return { turn: 'Drag to turn the view', zoom: 'Pinch to zoom', pick: 'Tap a mission in Explore' };
    }
    if (lastInputWasKeyboard) {
        return { turn: 'Arrow keys turn the scene', zoom: '+ and − zoom in and out', pick: 'Pick a mission in Explore' };
    }
    return { turn: 'Drag to turn the view', zoom: 'Scroll to zoom', pick: 'Pick a mission in Explore' };
}

export function showCoach({ replay = false } = {}) {
    const coach = document.getElementById('coach');
    if (!coach || cinematicActive) return;
    if (!replay && coachSeen()) return;
    clearTimeout(coachHideTimer);
    if (replay) coachDone.clear();
    const words = coachWords();
    coach.querySelectorAll('.coach-step').forEach(li => {
        const step = li.dataset.step;
        li.querySelector('.coach-text').textContent = words[step];
        li.classList.toggle('is-done', coachDone.has(step));
    });
    // On narrow screens the coach sits above the controls and the menu stops short of it.
    const root = document.documentElement;
    const controls = document.getElementById('controls');
    if (controls) root.style.setProperty('--controls-h', `${controls.offsetHeight}px`);
    coach.hidden = false;
    root.style.setProperty('--coach-h', `${coach.offsetHeight}px`);
    document.body.classList.add('coach-open');
    coachShown = true;
    announce(`Tip: ${words.pick.toLowerCase()} to fly there and see what the Open University did.`);
}

export function hideCoach({ remember = true } = {}) {
    const coach = document.getElementById('coach');
    clearTimeout(coachHideTimer);
    if (!coach || coach.hidden) { coachShown = false; return; }
    if (coach.contains(document.activeElement)) document.getElementById('coach-btn')?.focus({ preventScroll: true });
    coach.hidden = true;
    document.body.classList.remove('coach-open');
    coachShown = false;
    if (remember) rememberCoach();
}

// The visitor did one of the three: tick it off. Picking something, or doing all three, finishes.
export function coachStep(step) {
    if (!coachShown || coachDone.has(step)) return;
    coachDone.add(step);
    const li = document.querySelector(`#coach .coach-step[data-step="${step}"]`);
    li?.classList.add('is-done');
    if (step === 'pick' || COACH_STEPS.every(s => coachDone.has(s))) {
        rememberCoach();
        clearTimeout(coachHideTimer);
        coachHideTimer = setTimeout(() => hideCoach(), COACH_DONE_LINGER_MS);
    }
}

export function setupCoach() {
    document.getElementById('coach-close')?.addEventListener('click', () => hideCoach());
    // "Pick a mission" opens the way: it puts the visitor in the Explore search.
    document.getElementById('coach-pick')?.addEventListener('click', () => {
        if (isPhone()) { openMenuSheet(); return; }
        const filter = document.getElementById('menu-filter');
        if (filter && !document.getElementById('mission-menu')?.inert) filter.focus();
    });
    // Two fingers on the scene at once is a pinch.
    const pointers = new Set();
    engine.canvas.addEventListener('pointerdown', (e) => { pointers.add(e.pointerId); if (pointers.size > 1) coachStep('zoom'); });
    const lift = (e) => pointers.delete(e.pointerId);
    engine.canvas.addEventListener('pointerup', lift);
    engine.canvas.addEventListener('pointercancel', lift);
    engine.canvas.addEventListener('pointermove', (e) => {
        if (pointers.size === 1 && pointerDownPos && Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y) > DRAG_THRESHOLD_PX) coachStep('turn');
    });
    engine.canvas.addEventListener('wheel', () => coachStep('zoom'), { passive: true });
    engine.canvas.addEventListener('keydown', (e) => {
        if (e.key.startsWith('Arrow')) coachStep('turn');
        else if ('+=-_'.includes(e.key)) coachStep('zoom');
    });
}
