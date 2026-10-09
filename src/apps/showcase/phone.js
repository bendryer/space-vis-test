// The phone layout: the Explore and details sheets, and dragging them.
import { isPhone, phoneQuery } from './config.js';
import { syncMenuInert, PHONE_PEEK_SHARE } from './layout.js';
import { stopCinematicMode, cinematicActive } from './cinematic.js';
import { engine } from './engine.js';
import { updateOrbitLineHighlights } from './views.js';

export let menuSheetOpen = false;

// Below 721px wide the chrome rearranges round the thumb: the controls become a dock along the
// bottom edge, the Explore menu a sheet that rises from it, and the details a sheet that rests
// at half height (the selection framed above it) and opens to nearly full height. Both sheets
// follow a drag on their grip and settle on release; a tap on the grip does the same as a drag.
// (phoneQuery, isPhone and menuSheetOpen are declared at the top, with the other layout limits.)

export function openMenuSheet() {
    if (!isPhone() || menuSheetOpen) return;
    menuSheetOpen = true;
    document.body.classList.add('menu-sheet-open');
    document.getElementById('explore-btn')?.setAttribute('aria-expanded', 'true');
    syncMenuInert();
    // Focus the heading, not the search: a keyboard would cover half the list.
    document.getElementById('mission-menu-title')?.focus({ preventScroll: true });
}

export function closeMenuSheet({ returnFocus = false } = {}) {
    if (!menuSheetOpen) return;
    const menu = document.getElementById('mission-menu');
    const focusWasInside = menu.contains(document.activeElement);
    menuSheetOpen = false;
    document.body.classList.remove('menu-sheet-open');
    menu.style.transform = '';
    document.getElementById('explore-btn')?.setAttribute('aria-expanded', 'false');
    syncMenuInert();
    if (focusWasInside || returnFocus) document.getElementById('explore-btn')?.focus({ preventScroll: true });
}

export function setDetailsExpanded(full) {
    const sb = document.getElementById('sidebar');
    const handle = document.getElementById('sidebar-handle');
    sb.classList.toggle('is-full', full);
    sb.style.transform = '';
    handle?.setAttribute('aria-expanded', String(full));
    handle?.setAttribute('aria-label', full ? 'Show fewer details' : 'Show more details');
}

// A vertical drag on `grip`: `onMove(dy)` while the finger moves (dy > 0 is down), then
// `onEnd(dy, velocity)` on release. A movement under the tap slop is left to the click.
const SHEET_TAP_SLOP_PX = 6;
function attachSheetDrag(grip, { onStart, onMove, onEnd }) {
    let startY = 0;
    let lastY = 0;
    let lastT = 0;
    let velocity = 0;
    let dragging = false;
    let pointerId = null;
    grip.addEventListener('pointerdown', (e) => {
        if (!isPhone() || e.button !== 0) return;
        if (e.target.closest('input') || (e.target.closest('button') && e.target.closest('button') !== grip)) return;
        pointerId = e.pointerId;
        startY = lastY = e.clientY;
        lastT = e.timeStamp;
        velocity = 0;
        dragging = false;
    });
    grip.addEventListener('pointermove', (e) => {
        if (e.pointerId !== pointerId) return;
        const dy = e.clientY - startY;
        if (!dragging && Math.abs(dy) < SHEET_TAP_SLOP_PX) return;
        if (!dragging) {
            dragging = true;
            grip.setPointerCapture(pointerId);
            onStart?.();
        }
        const dt = Math.max(1, e.timeStamp - lastT);
        velocity = (e.clientY - lastY) / dt; // px per ms, down is positive
        lastY = e.clientY;
        lastT = e.timeStamp;
        onMove(dy);
    });
    const finish = (e) => {
        if (e.pointerId !== pointerId) return;
        pointerId = null;
        if (!dragging) return;
        dragging = false;
        // Swallow the click that follows a drag, so it doesn't toggle as well.
        grip.addEventListener('click', (c) => { c.stopPropagation(); c.preventDefault(); }, { capture: true, once: true });
        onEnd(e.clientY - startY, velocity);
    };
    grip.addEventListener('pointerup', finish);
    grip.addEventListener('pointercancel', finish);
}

export function setupPhoneSheets() {
    const menu = document.getElementById('mission-menu');
    const sidebar = document.getElementById('sidebar');
    const handle = document.getElementById('sidebar-handle');

    document.getElementById('sheet-scrim')?.addEventListener('click', () => closeMenuSheet({ returnFocus: true }));
    document.getElementById('menu-close')?.addEventListener('click', () => closeMenuSheet({ returnFocus: true }));
    // Choosing something flies there, so the sheet gets out of the way (folding a group doesn't).
    menu.addEventListener('click', (e) => {
        if (isPhone() && e.target.closest('.mission-btn')) closeMenuSheet();
    });

    // The Explore sheet follows a drag down from its head and closes past a quarter of its
    // height, or on a flick.
    attachSheetDrag(menu.querySelector('.menu-head'), {
        onStart: () => menu.classList.add('is-dragging'),
        onMove: (dy) => { menu.style.transform = `translateY(${Math.max(0, dy)}px)`; },
        onEnd: (dy, v) => {
            menu.classList.remove('is-dragging');
            if (dy > menu.offsetHeight * 0.25 || v > 0.6) closeMenuSheet({ returnFocus: true });
            else menu.style.transform = '';
        },
    });

    // The details sheet: its grip toggles between half and nearly full height and follows a
    // drag; dragged well below its half height, or flicked down from it, it closes.
    if (handle) {
        handle.addEventListener('click', () => setDetailsExpanded(!sidebar.classList.contains('is-full')));
        // The sheet is always full height and moves by transform: `drop` is how far it sits
        // below fully open (its peek drops it by its height less the peek share).
        let startDrop = 0;
        const peekDrop = () => sidebar.offsetHeight - window.innerHeight * PHONE_PEEK_SHARE;
        attachSheetDrag(handle, {
            onStart: () => {
                startDrop = sidebar.classList.contains('is-full') ? 0 : peekDrop();
                sidebar.classList.add('is-dragging');
            },
            onMove: (dy) => {
                const drop = Math.max(0, Math.min(sidebar.offsetHeight - 60, startDrop + dy));
                sidebar.style.transform = `translateY(${drop}px)`;
            },
            onEnd: (dy, v) => {
                sidebar.classList.remove('is-dragging');
                const shown = sidebar.offsetHeight - Math.max(0, startDrop + dy);
                const peek = window.innerHeight * PHONE_PEEK_SHARE;
                if (shown < peek * 0.6 || (v > 0.8 && !sidebar.classList.contains('is-full'))) {
                    stopCinematicMode();
                    engine.deselect();
                    updateOrbitLineHighlights();
                    document.getElementById('explore-btn')?.focus({ preventScroll: true });
                    return;
                }
                const full = v < -0.5 ? true : v > 0.5 ? false : shown > (peek + sidebar.offsetHeight) / 2;
                setDetailsExpanded(full);
            },
        });
        // At rest the sheet's lower part is off screen, so reading on (scrolling the text) opens it.
        document.getElementById('info-content').addEventListener('scroll', (e) => {
            if (isPhone() && !cinematicActive && e.target.scrollTop > 4 && !sidebar.classList.contains('is-full')) setDetailsExpanded(true);
        }, { passive: true });
    }

    // Turning a phone or resizing across the line: drop sheet state the other layout lacks.
    phoneQuery.addEventListener('change', () => {
        closeMenuSheet();
        setDetailsExpanded(false);
        syncMenuInert();
    });
    syncMenuInert();
}
