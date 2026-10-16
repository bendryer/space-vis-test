// How the panels sit round the scene: the menu's reachability, the view insets, and the scene's
// right edge.
import { isSidebarBesideScene, isPhone } from './config.js';
import { cinematicActive } from './cinematic.js';
import { menuSheetOpen } from './phone.js';
import { engine } from './engine.js';

// The details panel's left edge when it sits beside the scene, else the viewport's right edge.
// Asked every frame (the markers and reticles keep left of it), so the panel's width is measured
// when it changes size (a ResizeObserver), not read each frame, which made the browser lay the
// page out again mid-frame whenever anything on it had changed.
let sidebarWidth = null;
export function sceneRightEdge() {
    const sb = document.getElementById('sidebar');
    if (!sb) return window.innerWidth;
    if (sidebarWidth === null) {
        sidebarWidth = sb.offsetWidth;
        new ResizeObserver(() => { sidebarWidth = sb.offsetWidth; }).observe(sb);
    }
    const open = sb.classList.contains('active') && isSidebarBesideScene();
    return open ? window.innerWidth - sidebarWidth : window.innerWidth;
}

// The menu is out of reach when the tour hides it, and when the sidebar has slid over it on a
// narrow screen: it stays out of the tab order too, so focus never lands on something unseen.
export function syncMenuInert() {
    const menu = document.getElementById('mission-menu');
    const sidebar = document.getElementById('sidebar');
    // On a phone the menu is a sheet: reachable only while it's up.
    if (isPhone()) {
        menu.inert = cinematicActive || !menuSheetOpen;
        return;
    }
    const sidebarLeft = window.innerWidth - Math.min(sidebar.offsetWidth, window.innerWidth);
    const covered = sidebar.classList.contains('active') && sidebarLeft < menu.offsetLeft + menu.offsetWidth;
    menu.inert = cinematicActive || covered;
}

// Tell the engine how much of the screen the panels cover round a selection. Beside the scene,
// the menu (while shown; Cinematic Mode hides it) and the sidebar (assumed open: a selection
// opens it). A sidebar over the scene is closed to look round, so it doesn't count (and framing
// beside the menu alone would push the selection under it). On a phone, the header and the
// sheet's resting edge: its half-height peek, or the small caption card in Cinematic Mode.
export const PHONE_PEEK_SHARE = 0.46;    // matches the sheet's 46dvh in showcase.css
const PHONE_CAPTION_SHARE = 0.26; // the caption card plus the dock under it
export function syncViewInsets() {
    const insets = { left: 0, right: 0, top: 0, bottom: 0 };
    if (isSidebarBesideScene()) {
        const menu = document.getElementById('mission-menu');
        if (!menu.classList.contains('ui-hidden')) insets.left = menu.offsetLeft + menu.offsetWidth;
        insets.right = document.getElementById('sidebar').offsetWidth;
    } else if (isPhone()) {
        const header = document.getElementById('header');
        insets.top = header ? header.getBoundingClientRect().bottom + 8 : 0;
        insets.bottom = window.innerHeight * (cinematicActive ? PHONE_CAPTION_SHARE : PHONE_PEEK_SHARE);
    }
    engine.setViewInsets(insets);
}
// The part of the screen a group on show (a holder's orbits) is framed in, as insets from each
// edge: between the Explore menu and the controls, under the header. On a phone, between the
// header and the dock.
export function groupViewInsets() {
    const insets = { left: 0, right: 0, top: 0, bottom: 0 };
    const header = document.getElementById('header');
    const controls = document.getElementById('controls');
    if (header) insets.top = header.getBoundingClientRect().bottom + 8;
    if (isPhone()) {
        if (controls) insets.bottom = window.innerHeight - controls.getBoundingClientRect().top;
        return insets;
    }
    const menu = document.getElementById('mission-menu');
    if (menu && !menu.classList.contains('ui-hidden')) insets.left = menu.offsetLeft + menu.offsetWidth;
    if (controls) insets.right = window.innerWidth - controls.getBoundingClientRect().left;
    return insets;
}

// The Explore plate sits under the header (showcase.css reads --menu-top), so when the header grows,
// with text enlarged or a long clock line wrapping, the plate moves down rather than covering it.
const MENU_GAP_PX = 21;   // header to plate: with the header at its usual height, the plate is 84px down
function syncMenuTop() {
    const header = document.getElementById('header');
    if (!header) return;
    document.documentElement.style.setProperty('--menu-top', `${Math.round(header.offsetTop + header.offsetHeight + MENU_GAP_PX)}px`);
}

export function setupLayout() {
    window.addEventListener('resize', syncMenuInert);
    window.addEventListener('resize', syncViewInsets);
    // Panel sizes can change without a resize (the header's text wrapping once the font loads, or
    // the visitor enlarging text).
    new ResizeObserver(() => {
        syncMenuTop();
        syncViewInsets();
    }).observe(document.getElementById('header'));
    syncMenuTop();
    syncViewInsets();
}
