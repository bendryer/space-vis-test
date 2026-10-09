// The splash: the loader, the way in (with its fly-through), the slow-load notice and the error
// screen.
import { announce } from './announce.js';
import { engine } from './engine.js';
import { lastInputWasKeyboard } from './input.js';
import { prefersReducedMotion } from './config.js';
import { offerFullscreenStart } from './fullscreen.js';
import { showCoach } from './coach.js';

const SLOW_LOAD_NOTICE_MS = 8000;

let splashReady = false;
let splashDismissed = false;
let fatalErrorShown = false;

// The scene is ready: finish the orbit, set the craft moving and offer the way in.
export function markSceneReady() {
    if (splashReady || fatalErrorShown) return;
    splashReady = true;
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (!overlay || splashDismissed) return;
    overlay.style.setProperty('--progress', '1');
    overlay.classList.add('is-ready');
    document.getElementById('loading-note').hidden = true;
    // Said for screen readers; on screen the button's own label says it.
    const loadingText = document.getElementById('loading-text');
    loadingText.textContent = 'Ready';
    loadingText.classList.add('visually-hidden');
    const start = document.getElementById('splash-start');
    start.disabled = false;
    start.textContent = 'Start exploring';
    offerFullscreenStart();
    // Keyboard visitors get the button focused; pointer visitors aren't shown a ring on load.
    if (lastInputWasKeyboard && (!document.activeElement || document.activeElement === document.body)) start.focus({ preventScroll: true });
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Both copies of the craft (behind and in front of the world) start together.
        overlay.querySelectorAll('.splash-orbit animateMotion').forEach(motion => motion.beginElement?.());
    }
}

// The way in, staged in time with the splash's leaving styles: the copy fades (from 0), the world
// glides to the centre (0.15–1.05 s), turns see-through onto the scene (from OPEN), and the camera
// flies through it (THROUGH to ARRIVE); then the controls fade up.
const SPLASH_OPEN_MS = 1000;
const SPLASH_THROUGH_MS = 1450;
const SPLASH_ARRIVE_MS = 2450;

export function dismissSplash({ fromKeyboard = false } = {}) {
    if (splashDismissed || fatalErrorShown) return;
    splashDismissed = true;
    engine.loadDeferred(); // going in early ("Explore now"): don't wait for the scene to be ready
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    const ui = document.getElementById('ui-layer');
    overlay.inert = true;
    announce('Showing the whole Solar System');

    const arrive = () => {
        if (fatalErrorShown) return;
        overlay.hidden = true;
        engine.setSceneVisible(true);
        ui.inert = false;
        ui.classList.remove('is-waiting');
        setTimeout(() => showCoach(), 700); // once the controls have faded up
        // Keyboard visitors carry on from the menu's search; pointer visitors go to the scene.
        if (fromKeyboard) document.getElementById('menu-filter')?.focus({ preventScroll: true });
    };
    const art = overlay.querySelector('.splash-orbit');
    if (prefersReducedMotion.matches || !art) { arrive(); return; }

    // The world sits at the centre of the drawing (400,400 in a 680-wide view box), and the hole in
    // the drawing's ground under it has r = 149. The drawing scales until that hole clears the screen.
    const box = art.getBoundingClientRect();
    const w = window.innerWidth, h = window.innerHeight;
    const holeR = box.width * 149 / 680;
    const reach = Math.hypot(w, h) / 2 + 2; // a hole this wide from the centre clears every corner
    overlay.style.setProperty('--to-centre-x', `${(w / 2 - (box.left + box.width / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--to-centre-y', `${(h / 2 - (box.top + box.height / 2)).toFixed(1)}px`);
    overlay.style.setProperty('--fly-scale', (reach / holeR).toFixed(3));

    document.body.classList.add('is-arriving');
    overlay.classList.add('is-leaving');
    setTimeout(() => overlay.classList.add('is-open'), SPLASH_OPEN_MS);
    setTimeout(() => {
        overlay.classList.add('is-through');
        document.body.classList.remove('is-arriving');
    }, SPLASH_THROUGH_MS);
    setTimeout(arrive, SPLASH_ARRIVE_MS);
}

function setLoadingAction(label, handler) {
    const action = document.getElementById('loading-action');
    if (!action) return;
    action.textContent = label;
    action.onclick = handler;
    action.hidden = false;
}

// On a slow connection, say so after a few seconds and let the visitor go in early.
let slowLoadTimer = null;
export function startSlowLoadNotice() {
    slowLoadTimer = setTimeout(() => {
        const note = document.getElementById('loading-note');
        if (note) {
            note.textContent = 'This is taking longer than usual. You can go in now; some planets may appear before their surfaces finish loading.';
            note.hidden = false;
        }
        const start = document.getElementById('splash-start');
        if (start) {
            start.disabled = false;
            start.textContent = 'Explore now';
            offerFullscreenStart();
        }
    }, SLOW_LOAD_NOTICE_MS);
}

// Stops the app with a plain explanation and a way to retry, in place of the way in.
export function showFatalError(message) {
    fatalErrorShown = true;
    clearTimeout(slowLoadTimer);
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    overlay.setAttribute('role', 'alert');
    overlay.hidden = false;
    engine?.setSceneVisible(false); // (no engine when WebGL is missing)
    overlay.inert = false;
    overlay.classList.remove('is-leaving', 'is-ready');
    overlay.classList.add('is-error');
    const start = document.getElementById('splash-start');
    if (start) start.hidden = true;
    const fullscreenStart = document.getElementById('splash-fullscreen');
    if (fullscreenStart) fullscreenStart.hidden = true;
    const text = document.getElementById('loading-text');
    if (text) text.textContent = 'OUniverse couldn’t start';
    const note = document.getElementById('loading-note');
    if (note) {
        note.textContent = message;
        note.hidden = false;
    }
    setLoadingAction('Try again', () => window.location.reload());
}

// The count comes from data.json, so the splash stays true as content changes. It counts
// spacecraft the OU worked on, so ground facilities (Mars Yard, observatories) are left out.
export function fillSplashFacts(items) {
    const count = items.filter(item => item.type === 'mission' && item.ou_involvement
        && !(item.orbit_type === 'landed' && item.parent === 'Earth')).length;
    if (!count) return;
    document.getElementById('splash-count').textContent = count;
    document.getElementById('splash-explore').hidden = false;
}

export function setupSplash() {
    const start = document.getElementById('splash-start');
    start?.addEventListener('click', (e) => dismissSplash({ fromKeyboard: e.detail === 0 }));
    document.getElementById('loading-overlay')?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !start.disabled) dismissSplash({ fromKeyboard: true });
    });
}

// The splash (#loading-overlay) doubles as the loader: its orbit draws itself as assets
// arrive, and "Start exploring" turns on once the scene is ready. The visitor leaves it.
export function setupLoadingProgress() {
    engine.on('progress', ({ progress }) => {
        if (splashReady || fatalErrorShown) return;
        document.getElementById('loading-overlay')?.style.setProperty('--progress', progress.toFixed(3));
        const loadingText = document.getElementById('loading-text');
        if (loadingText) {
            // Files done isn't ready: the scene still warms up (see warmUpSceneThenReveal).
            loadingText.textContent = progress < 1 ? 'Polishing the planets…' : 'Lining up the orbits…';
        }
    });
}
