// Cinematic Mode: the tour that visits a mission every 30 seconds.
import { uiIcon } from './menu.js';
import { openMenuSheet, setupPhoneSheets, closeMenuSheet } from './phone.js';
import { showCoach, setupCoach, hideCoach } from './coach.js';
import { engine } from './engine.js';
import { CINEMATIC_FLIGHT_SCALE, CINEMATIC_DELAY, isPhone } from './config.js';
import { syncMenuInert, syncViewInsets } from './layout.js';
import { announce } from './announce.js';
import { selectObject } from './details.js';

export let cinematicActive = false;
let cinematicTimer = null;
let cinematicQueue = [];

export function setupCinematicControls() {
    const controlsDiv = document.getElementById('controls');
    if (!controlsDiv) return;
    // Phones only: the dock's way into the Explore sheet.
    if (!document.getElementById('explore-btn')) {
        const explore = document.createElement('button');
        explore.id = 'explore-btn';
        explore.type = 'button';
        explore.setAttribute('aria-controls', 'mission-menu');
        explore.setAttribute('aria-expanded', 'false');
        explore.innerHTML = `${uiIcon('search', 'btn-icon')}<span class="btn-label">Explore</span>`;
        explore.onclick = () => openMenuSheet();
        controlsDiv.appendChild(explore);
    }
    // A full label on larger screens; on a phone an icon, its label kept for screen readers.
    if (!document.getElementById('cinematic-btn')) {
        const btn = document.createElement('button');
        btn.id = 'cinematic-btn';
        btn.type = 'button';
        btn.innerHTML = `${uiIcon('movie', 'btn-icon btn-icon--start')}${uiIcon('stop', 'btn-icon btn-icon--stop')}<span class="btn-label"></span>`;
        btn.onclick = () => (cinematicActive ? stopCinematicMode() : startCinematicMode());
        controlsDiv.appendChild(btn);
    }
    // The quiet links under the button: "How to explore" (the coach again) and Credits.
    if (!controlsDiv.querySelector('.controls-links')) {
        const links = document.createElement('div');
        links.className = 'controls-links';
        const help = document.createElement('button');
        help.id = 'coach-btn';
        help.type = 'button';
        help.innerHTML = `${uiIcon('help', 'btn-icon')}<span class="btn-label">How to explore</span>`;
        help.setAttribute('aria-controls', 'coach');
        help.addEventListener('click', () => showCoach({ replay: true }));
        links.appendChild(help);
        controlsDiv.appendChild(links);
        setupCoach();
        setupPhoneSheets();
    }
    syncCinematicButton();
}

function syncCinematicButton() {
    const btn = document.getElementById('cinematic-btn');
    if (!btn) return;
    const label = btn.querySelector('.btn-label') || btn;
    label.textContent = cinematicActive ? 'Stop Cinematic Mode' : 'Start Cinematic Mode';
    btn.setAttribute('aria-pressed', String(cinematicActive));
}

function startCinematicMode() {
    if (cinematicActive) return;
    cinematicActive = true;
    engine.setFlightPace(CINEMATIC_FLIGHT_SCALE);
    document.body.classList.add('is-cinematic');
    closeMenuSheet();
    hideCoach({ remember: false });
    const menu = document.getElementById('mission-menu');
    menu.classList.add('ui-hidden');
    syncMenuInert();
    syncViewInsets();
    syncCinematicButton();
    announce('Cinematic Mode on. The camera will visit a new mission every 30 seconds.');
    cycleCinematic();
    cinematicTimer = setInterval(cycleCinematic, CINEMATIC_DELAY);
}

export function stopCinematicMode() {
    if (!cinematicActive) return;
    cinematicActive = false;
    engine.setFlightPace();
    document.body.classList.remove('is-cinematic');
    const menu = document.getElementById('mission-menu');
    menu.classList.remove('ui-hidden');
    syncMenuInert();
    syncViewInsets();
    if (cinematicTimer) clearInterval(cinematicTimer);
    cinematicTimer = null;
    syncCinematicButton();
    // On a phone the dock steps back under the details sheet when the tour ends: follow it there.
    if (isPhone() && document.getElementById('controls').contains(document.activeElement)
        && document.getElementById('sidebar').classList.contains('active')) {
        document.getElementById('info-title')?.focus({ preventScroll: true });
    }
    announce('Cinematic Mode off.');
    showCoach(); // back if the visitor hasn't finished it (showCoach checks)
}

function cycleCinematic() {
    if (!cinematicActive) return;
    if (cinematicQueue.length === 0) {
        cinematicQueue = engine.listObjects().filter(data => data.type === 'mission').map(data => data.name);
        for (let i = cinematicQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cinematicQueue[i], cinematicQueue[j]] = [cinematicQueue[j], cinematicQueue[i]];
        }
    }
    const next = cinematicQueue.pop();
    if (next) selectObject(next);
}
