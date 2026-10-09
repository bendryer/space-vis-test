// How the panels sit round the scene: the menu's reachability, the view insets, and the scene's
// right edge.
import { isSidebarBesideScene, isPhone } from './config.js';
import { cinematicActive } from './cinematic.js';
import { menuSheetOpen } from './phone.js';
import { engine } from './engine.js';

// The details panel's left edge when it sits beside the scene, else the viewport's right edge.
export function sceneRightEdge() {
    const sb = document.getElementById('sidebar');
    const open = sb && sb.classList.contains('active') && isSidebarBesideScene();
    return open ? window.innerWidth - sb.offsetWidth : window.innerWidth;
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
export const PHONE_PEEK_SHARE = 0.46;    // matches the sheet's 46dvh in style.css
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
export function setupLayout() {
    window.addEventListener('resize', syncMenuInert);
    window.addEventListener('resize', syncViewInsets);
    // Panel sizes can change without a resize (the header's text wrapping once the font loads).
    new ResizeObserver(syncViewInsets).observe(document.getElementById('header'));
    syncViewInsets();
}
