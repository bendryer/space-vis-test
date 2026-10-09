// Full screen, for touch devices that allow it: "Start full screen" on the splash, and a switch
// in the Explore sheet.
import { dismissSplash } from './splash.js';

// On a phone the browser's address bar and the system's navigation bar take a good share of the
// screen, so touch devices that allow it get "Start full screen" on the splash, and a Full screen
// switch at the foot of the Explore sheet to go back in after leaving (a back swipe leaves).
// Desktop browsers have their own (F11), and iPhones don't allow it for pages, so neither shows.
const fullscreenSupported = Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled)
    && window.matchMedia('(pointer: coarse)').matches;
const isFullscreen = () => Boolean(document.fullscreenElement || document.webkitFullscreenElement);

function enterFullscreen() {
    const root = document.documentElement;
    try {
        const request = root.requestFullscreen
            ? root.requestFullscreen({ navigationUI: 'hide' })
            : root.webkitRequestFullscreen?.();
        request?.catch?.(() => { /* refused: carry on in the browser window */ });
    } catch { /* refused: carry on in the browser window */ }
}

function exitFullscreen() {
    try {
        const exit = document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen?.();
        exit?.catch?.(() => {});
    } catch { /* already out */ }
}

export function offerFullscreenStart() {
    const btn = document.getElementById('splash-fullscreen');
    if (btn && fullscreenSupported && !isFullscreen()) btn.hidden = false;
}

function syncFullscreenButtons() {
    const on = isFullscreen();
    const toggle = document.getElementById('menu-fullscreen');
    if (toggle) {
        toggle.setAttribute('aria-pressed', String(on));
        toggle.querySelector('span').textContent = on ? 'Exit full screen' : 'Full screen';
    }
}

export function setupFullscreen() {
    if (!fullscreenSupported) return;
    const toggle = document.getElementById('menu-fullscreen');
    if (toggle) {
        toggle.hidden = false;
        toggle.closest('.menu-foot').hidden = false;
        toggle.addEventListener('click', () => (isFullscreen() ? exitFullscreen() : enterFullscreen()));
    }
    document.addEventListener('fullscreenchange', syncFullscreenButtons);
    document.addEventListener('webkitfullscreenchange', syncFullscreenButtons);
    // Asked for from inside the click, as browsers require, then in we go as usual.
    document.getElementById('splash-fullscreen')?.addEventListener('click', (e) => {
        enterFullscreen();
        dismissSplash({ fromKeyboard: e.detail === 0 });
    });
}
