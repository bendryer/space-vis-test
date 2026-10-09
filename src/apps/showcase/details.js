// The details sidebar: choosing an object, and what's shown about it.
import { engine } from './engine.js';
import { cinematicActive } from './cinematic.js';
import { coachStep } from './coach.js';
import { announce } from './announce.js';
import { setDetailsExpanded } from './phone.js';
import { syncMenuInert } from './layout.js';
import { syncMenuCurrent } from './menu.js';
import { isPhone, fixPath } from './config.js';

let sidebarReturnFocus = null;

// Showcase: choose an object. Chosen from the menu (returnFocusTo is its row), the details take
// keyboard focus; chosen on the canvas or by the tour, the choice is announced instead.
export function selectObject(name, { returnFocusTo = null } = {}) {
    sidebarReturnFocus = returnFocusTo;
    return engine.flyTo(name);
}

// Showcase: open the details on a selection, and close them on letting go.
export function setupDetails() {
    engine.on('select', ({ data, waiting }) => {
        if (!cinematicActive) coachStep('pick');
        updateUI(data);
        if (waiting) {
            if (sidebarReturnFocus) document.getElementById('info-title')?.focus({ preventScroll: true });
            announce(`Loading ${data.name}`);
        } else if (sidebarReturnFocus) {
            // Visitor chose this from the menu: take them to the details.
            document.getElementById('info-title')?.focus({ preventScroll: true });
        } else {
            // Chosen by a canvas click or the tour: announce without moving focus.
            announce(`Now showing ${data ? data.name : 'selection'}`);
        }
    });

    // Showcase: close the details and put keyboard focus somewhere sensible.
    engine.on('deselect', () => {
        const sb = document.getElementById('sidebar');
        const focusWasInside = sb.contains(document.activeElement);
        sb.classList.remove('active');
        setDetailsExpanded(false);
        sb.inert = true;
        syncMenuInert();
        document.getElementById('controls').classList.remove('shifted');
        syncMenuCurrent(null);

        // Don't strand keyboard focus inside a panel that just went inert.
        if (focusWasInside) {
            // (On a phone the row that opened it is in the closed Explore sheet: the dock's button instead.)
            const back = sidebarReturnFocus && sidebarReturnFocus.isConnected && !sidebarReturnFocus.closest('[inert]')
                ? sidebarReturnFocus
                : document.getElementById(isPhone() ? 'explore-btn' : 'system-btn');
            back?.focus({ preventScroll: true });
        }
        sidebarReturnFocus = null;
    });
}

// Science images are served from web-sized WebP copies in images/web/ (the originals run
// to 10000px and 13MB, and decoding one stalled the page). If a copy is missing, the
// <img> falls back to the original file.
function getWebImagePath(url) {
    if (!url) return url;
    return url.replace(/^(\/?images\/)([^/]+)\.[^./]+$/, '$1web/$2.webp');
}

// The portal O from the OU brand forms (a square with a tilted-ellipse cut-out), in the OU
// green to light-blue gradient: marks the OU's own content.
const OU_MARK = `<svg class="ou-mark" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><defs><linearGradient id="ou-mark-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7DFFD3"/><stop offset="1" stop-color="#66EEFA"/></linearGradient><mask id="ou-mark-cut"><rect width="16" height="16" fill="#fff"/><ellipse cx="8" cy="8" rx="3.4" ry="5.2" transform="rotate(22 8 8)" fill="#000"/></mask></defs><rect width="16" height="16" fill="url(#ou-mark-grad)" mask="url(#ou-mark-cut)"/></svg>`;

// One status vocabulary for the menu and the sidebar.
function statusTone(status) {
    if (status === 'Planned') return 'planned';
    if (['Crashed', 'Landed', 'Decommissioned', 'Complete', 'Lost', 'Re-entered'].includes(status)) return 'ended';
    if (status === 'Active' || status === 'Launched' || status === 'En Route' || status === 'Operational') return 'active';
    return 'neutral';
}

function formatType(type) {
    const words = type.replace(/_/g, ' ');
    return words.charAt(0).toUpperCase() + words.slice(1);
}

function updateUI(data) {
    const sb = document.getElementById('sidebar');
    const controls = document.getElementById('controls');

    const meta = [formatType(data.type)];
    if (data.status) meta.push(`<span class="info-status info-status--${statusTone(data.status)}">${data.status}</span>`);
    if (data.launch_year) meta.push(`${data.status === 'Planned' ? 'Planned launch' : 'Launched'} ${data.launch_year}`);

    // The OU's role is the point of the product, so it leads.
    const ouHtml = data.ou_involvement ? `
        <section class="ou-involvement" aria-labelledby="ou-title">
            <h3 id="ou-title">${OU_MARK}Open University Involvement</h3>
            <div>${data.ou_involvement}</div>
        </section>` : '';
    const imageHtml = data.image_url ? `
        <figure class="info-image">
            <img src="${fixPath(getWebImagePath(data.image_url))}" data-original="${fixPath(data.image_url)}" alt="${data.name} Science Image" decoding="async"
                onerror="if (this.dataset.original && this.getAttribute('src') !== this.dataset.original) { this.src = this.dataset.original; } else { this.parentElement.remove(); }"/>
        </figure>` : '';

    document.getElementById('info-content').innerHTML = `
        <h2 id="info-title" tabindex="-1">${data.name}</h2>
        <p class="info-meta">${meta.join('<span aria-hidden="true"> · </span>')}</p>
        ${ouHtml}
        ${imageHtml}
        <p class="info-description">${data.description || 'No description available.'}</p>
    `;
    sb.scrollTop = 0;
    document.getElementById('info-content').scrollTop = 0;
    setDetailsExpanded(false);
    sb.inert = false;
    sb.classList.add('active');
    syncMenuInert();
    controls.classList.add('shifted');
    syncMenuCurrent(data.name);
}
