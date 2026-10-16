// The Explore menu: icons, groups and holders, search, and the current object.
import { engine } from './engine.js';
import { clearHoveredObject, showSolarSystem, showHolder, setHoveredHolder, setHoveredObject } from './views.js';
import { stopCinematicMode } from './cinematic.js';
import { selectObject } from './details.js';
import { prefersReducedMotion } from './config.js';

// Menu icons: Tabler Icons outline set (https://tabler.io/icons, MIT, v3.48), inlined so they
// inherit the text colour and need no request. "asteroid" is drawn on the same 24px grid and
// stroke, since Tabler has none. A data.json entry can pick one with an "icon" field.
const MENU_ICONS = {
    galaxy: '<path d="M12 3c-1.333 1 -2 2.5 -2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5c0 2 -.667 3.5 -2 4.5"/><path d="M19.794 16.5c-.2 -1.655 -1.165 -2.982 -2.897 -3.982c-2.597 -1.5 -4.897 -.518 -4.897 -.518s-2.299 .982 -4.897 -.518c-1.732 -1 -2.698 -2.327 -2.897 -3.982"/><path d="M19.794 7.5c-1.532 -.655 -3.165 -.482 -4.897 .518c-2.597 1.5 -2.897 3.982 -2.897 3.982s-.299 2.482 -2.897 3.982c-1.732 1 -3.365 1.173 -4.897 .518"/>',
    sun: '<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>',
    planet: '<path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"/><path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>',
    moon: '<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>',
    point: '<path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/><path d="M12 2l0 2"/><path d="M12 20l0 2"/><path d="M20 12l2 0"/><path d="M2 12l2 0"/>',
    comet: '<path d="M21 3l-5 9h5l-6.891 7.086a6.5 6.5 0 1 1 -8.855 -9.506l7.746 -6.58l-1 5l9 -5"/><path d="M7 14.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/>',
    asteroid: '<path d="M8 4.6c2.6 -1.5 6 -1.2 8.6 .5c2.8 1.8 4.5 4.8 4 7.9c-.5 3.3 -3 5.8 -6.3 6.6c-2.4 .6 -4.3 1.8 -6.9 1.1c-2.9 -.8 -4.2 -3.5 -3.9 -6.3c.2 -2 1.1 -3.3 1.6 -5.2c.5 -2 1.4 -3.4 2.9 -4.6z"/><path d="M8.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M13.5 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
    satellite: '<path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414"/><path d="M6 10l-3 3l3 3l3 -3"/><path d="M10 6l3 -3l3 3l-3 3"/><path d="M12 12l1.5 1.5"/><path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5"/><path d="M15 21a6 6 0 0 0 6 -6"/>',
    // Drawn to match Tabler's grid and stroke: Tabler has no lander or planetary rover.
    lander: '<path d="M8 13l1 -5h6l1 5z"/><path d="M12 8v-2"/><path d="M9.5 4a2.5 2.5 0 0 0 5 0"/><path d="M8 13l-3.5 6"/><path d="M16 13l3.5 6"/><path d="M2.5 19h4"/><path d="M17.5 19h4"/>',
    rover: '<path d="M4 11a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"/><path d="M7 10v-4"/><path d="M5.5 5h3"/><path d="M20 12l2 -2"/><path d="M5 14v2"/><path d="M12 14v2"/><path d="M19 14v2"/><path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>',
    rocket: '<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
    facility: '<path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"/><path d="M13 7l0 .01"/><path d="M17 7l0 .01"/><path d="M17 11l0 .01"/><path d="M17 15l0 .01"/>',
};

function menuIconName(data) {
    if (MENU_ICONS[data.icon]) return data.icon;
    switch (data.type) {
        case 'star': return 'sun';
        case 'planet': return 'planet';
        case 'moon': return 'moon';
        case 'reference_point': return 'point';
        case 'comet': return 'comet';
        case 'asteroid': return 'asteroid';
    }
    if (data.orbit_type === 'suborbital') return 'rocket';
    // A rover says so with "icon": "rover"; other landers get the lander icon.
    if (data.orbit_type === 'landed') return data.parent === 'Earth' ? 'facility' : 'lander';
    return 'satellite';
}

// The Sun, planets and asteroids take the colour of their orbit line, so the menu and the
// scene share one key. Everything else stays in the text colour.
function menuIconColor(data) {
    if (data.type === 'star') return data.color || '#ffcc00';
    if (data.type === 'planet' || data.type === 'asteroid') return engine.getOrbitColor(data.name);
    return null;
}

function menuIcon(name, color = null) {
    const tint = color ? ` menu-icon--tinted" style="color:${color}` : '';
    return `<svg class="menu-icon${tint}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${MENU_ICONS[name]}</svg>`;
}

// Holders gather small bodies (and their missions) into one foldable group by type: the
// asteroids (near-Earth and main-belt) after Mars, and the comets beside them. A holder's row
// shows the overview with its bodies marked; its missions stay in the list but aren't marked.
// Where an object sits otherwise comes from data.json: under its "menu_parent" if it has one
// (JUICE under Jupiter, Spitzer under Earth; "Sun" nests it in the Sun's own group), else its
// parent, ordered by "menu_order" if given, else by orbit size.
// Asteroids come in two kinds: the ones spacecraft have gone to (Bennu, Ryugu, Didymos), and the
// ones named in honour of the OU and its scientists ("menu_holder": "named" in data.json).
// `spoken` is the phrase read out when a group is shown; `search` adds words a search should find it by.
const MENU_HOLDERS = [
    { name: 'Mission asteroids', spoken: 'mission asteroids', search: 'asteroids explored visited targets', icon: 'asteroid', after: 'Mars',
        holds: data => data.type === 'asteroid' && data.menu_holder !== 'named' },
    { name: 'Honorary asteroids', spoken: 'honorary asteroids, named in honour of OU people,', search: 'asteroids named honour', icon: 'asteroid', after: 'Mission asteroids',
        holds: data => data.type === 'asteroid' && data.menu_holder === 'named' },
    { name: 'Comets', spoken: 'comets', icon: 'comet', after: 'Honorary asteroids', holds: data => data.type === 'comet' },
];

export function populateMenu() {
    const list = document.getElementById('mission-list');
    if (!list) return;
    list.innerHTML = '';

    // Build a map of parent -> children. An object marked "menu_top_level" (the Moon, with its
    // many missions) leaves its parent's group for a group of its own at the top level, placed
    // just after its parent and indented a step to show it belongs there.
    const childrenMap = new Map();
    const lifted = [];
    engine.listObjects().forEach(item => {
        if (item.menu_top_level && item.parent) { lifted.push(item); return; }
        const parent = item.menu_parent || item.parent || 'root';

        if (!childrenMap.has(parent)) childrenMap.set(parent, []);
        childrenMap.get(parent).push(item);
    });

    // Sort children: missions first, alphabetically, then natural bodies by "menu_order" or orbit
    // size (then type), so a planet's own missions lead and its moons follow, as Earth's Moon does.
    const sortKey = data => data.menu_order ?? (data.orbit ? (data.orbit.a || 0) : 0);
    const isMission = data => data.type === 'mission';
    childrenMap.forEach(arr => {
        arr.sort((a, b) => {
            if (isMission(a) !== isMission(b)) return isMission(a) ? -1 : 1;
            if (isMission(a)) return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
            const distA = sortKey(a);
            const distB = sortKey(b);
            if (distA !== distB) return distA - distB;

            const typeScore = (t) => {
                if (t === 'star') return 0;
                if (t === 'planet') return 1;
                if (t === 'moon') return 2;
                if (t === 'reference_point') return 3;
                return 4; // missions
            };
            return typeScore(a.type) - typeScore(b.type);
        });
    });

    // Each object is a list item holding its row; objects with children nest a list, so
    // screen readers hear the hierarchy as list levels. Children of the Sun that have
    // children of their own (planets, L1/L2, comets and asteroids with missions) are groups:
    // their heading sticks while you scroll and a disclosure button folds them away.
    let groupCount = 0;
    // `indent` shifts a lifted group, and everything in it, a step in from its level.
    function renderNode(item, depth, parentList, { leaf = false, indent = 0 } = {}) {
        if (!item) return;
        const name = item.name;
        const children = leaf ? [] : (childrenMap.get(name) || []);
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.dataset.name = name;
        const btn = createMenuRow(item);
        btn.style.setProperty('--depth', Math.max(0, depth - 1) + indent);
        let ul = null;
        if (children.length) {
            ul = document.createElement('ul');
            ul.className = 'menu-list';
        }

        if (depth === 1 && ul) {
            makeGroup(li, ul, name, countDescendants(name), btn);
        } else {
            li.appendChild(btn);
        }

        if (ul) {
            children.forEach(child => renderNode(child, depth + 1, ul, { indent }));
            li.appendChild(ul);
        }
        parentList.appendChild(li);
    }

    function countDescendants(name) {
        return (childrenMap.get(name) || []).reduce((n, child) => n + 1 + countDescendants(child.name), 0);
    }

    // A group's heading: its own row (to fly there, or for a holder to show its bodies) beside a
    // disclosure button that folds the group.
    function makeGroup(li, ul, label, count, row) {
        ul.id = `menu-group-${groupCount++}`;
        ul.hidden = true;
        li.classList.add('menu-group');
        const head = document.createElement('div');
        head.className = 'menu-group-head';
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'menu-toggle';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', ul.id);
        toggle.setAttribute('aria-label', `${label}: ${count} ${count === 1 ? 'object' : 'objects'}`);
        toggle.title = `Show or hide what's at ${label}`;
        toggle.innerHTML = `<span class="menu-chip"><span class="menu-count" aria-hidden="true">${count}</span>${uiIcon('chevron', 'menu-chevron')}</span>`;
        toggle.onclick = () => {
            if (autoOpenedGroup === li) autoOpenedGroup = null; // the visitor's choice now
            setGroupExpanded(li, toggle.getAttribute('aria-expanded') !== 'true', { animate: true });
        };
        toggle.onmouseenter = toggle.onfocus = () => clearHoveredObject();
        head.append(row, toggle);
        li.appendChild(head);
    }

    function renderHolder(holder, members, parentList) {
        const li = document.createElement('li');
        li.className = 'menu-item menu-group--holder';
        li.dataset.name = holder.name;
        if (holder.search) li.dataset.search = `${holder.name} ${holder.search}`;
        const ul = document.createElement('ul');
        ul.className = 'menu-list';
        const count = members.reduce((n, item) => n + 1 + countDescendants(item.name), 0);
        makeGroup(li, ul, holder.name, count, createHolderRow(holder));
        members.forEach(item => renderNode(item, 2, ul));
        li.appendChild(ul);
        parentList.appendChild(li);
    }

    // The Sun heads the list, then everything that orbits it at the same level.
    const tree = document.createElement('ul');
    tree.className = 'menu-list menu-tree';
    const rootItems = childrenMap.get('root') || [];
    const roots = rootItems.length ? rootItems
        : engine.listObjects().filter(item => !item.parent || !engine.getObject(item.parent));
    roots.forEach(root => {
        // Most of what orbits the Sun sits beside it at the top level; a few objects nest
        // under the Sun's own row, and asteroids and comets gather into holders.
        const orbiting = childrenMap.get(root.name) || [];
        const own = orbiting.filter(item => item.menu_parent === root.name);
        let entries = orbiting.filter(item => !own.includes(item)).map(item => ({ item }));
        MENU_HOLDERS.forEach(holder => {
            const members = entries.filter(e => e.item && holder.holds(e.item)).map(e => e.item);
            if (!members.length) return;
            entries = entries.filter(e => !e.item || !members.includes(e.item));
            const after = entries.findIndex(e => (e.item ? e.item.name : e.holder.name) === holder.after);
            entries.splice(after === -1 ? entries.length : after + 1, 0, { holder, members });
        });

        // Lifted groups follow the top-level entry they belong under, nearest first (Earth, then
        // the Moon, L1 and L2).
        [...lifted].sort((a, b) => sortKey(a) - sortKey(b)).forEach(item => {
            const system = engine.getSystem(item.name);
            let at = entries.findIndex(e => e.item && e.item.name === system);
            if (at === -1) { entries.push({ item, indent: 1 }); return; }
            while (entries[at + 1] && entries[at + 1].indent && engine.getSystem(entries[at + 1].item.name) === system) at++;
            entries.splice(at + 1, 0, { item, indent: 1 });
        });

        childrenMap.set(root.name, own);
        renderNode(root, own.length ? 1 : 0, tree, { leaf: !own.length });
        entries.forEach(e => (e.holder ? renderHolder(e.holder, e.members, tree) : renderNode(e.item, 1, tree, { indent: e.indent || 0 })));
    });
    list.appendChild(tree);

    const empty = document.createElement('p');
    empty.id = 'menu-empty';
    empty.className = 'menu-empty';
    empty.hidden = true;
    list.appendChild(empty);

    setupMenuFilter();
    const systemBtn = document.getElementById('system-btn');
    systemBtn.onclick = () => showSolarSystem();
    systemBtn.onmouseenter = systemBtn.onfocus = () => clearHoveredObject();
}

// Interface icons (Tabler outline, MIT), drawn like the menu icons.
const UI_ICONS = {
    chevron: '<path d="M6 9l6 6l6 -6"/>',
    search: '<path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
    movie: '<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M8 4v16"/><path d="M16 4v16"/><path d="M4 8h4"/><path d="M4 16h4"/><path d="M4 12h16"/><path d="M16 8h4"/><path d="M16 16h4"/>',
    stop: '<path d="M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"/>',
    help: '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17v.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
    rocket: '<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
    ruler: '<path d="M17 3l4 4l-14 14l-4 -4z"/><path d="M16 7l-1.5 -1.5"/><path d="M13 10l-1.5 -1.5"/><path d="M10 13l-1.5 -1.5"/><path d="M7 16l-1.5 -1.5"/>',
};

export function uiIcon(name, className) {
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${UI_ICONS[name]}</svg>`;
}

// A holder's row: hovering marks its bodies, choosing it shows them all in the overview.
function createHolderRow(holder) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mission-btn';
    btn.innerHTML = `${menuIcon(holder.icon)}<span class="menu-label">${holder.name}</span>`;
    btn.onclick = () => {
        stopCinematicMode();
        showHolder(holder);
    };
    btn.onmouseenter = btn.onfocus = () => setHoveredHolder(holder);
    btn.onmouseleave = btn.onblur = () => setHoveredHolder(null);
    return btn;
}

// One selectable row: icon and name. A mission's status is shown in the details panel, not here.
function createMenuRow(item) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mission-btn';
    if (item.type === 'mission') btn.classList.add('mission-btn--mission');
    btn.innerHTML = `${menuIcon(menuIconName(item), menuIconColor(item))}<span class="menu-label">${item.name}</span>`;

    btn.onclick = () => {
        stopCinematicMode();
        selectObject(item.name, { returnFocusTo: btn });
    };
    btn.onmouseenter = btn.onfocus = () => setHoveredObject(item);
    btn.onmouseleave = btn.onblur = () => clearHoveredObject();
    return btn;
}

// Groups the visitor opened; a search opens groups too, but only for as long as it runs.
const expandedGroups = new Set();

function getMenuFilter() {
    return document.getElementById('menu-filter')?.value.trim() || '';
}

function setGroupExpanded(li, expanded, { remember = true, animate = false } = {}) {
    const toggle = li.querySelector(':scope > .menu-group-head > .menu-toggle');
    const ul = li.querySelector(':scope > .menu-list');
    if (!toggle || !ul) return;
    const changed = toggle.getAttribute('aria-expanded') !== String(expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    if (animate && changed) animateGroup(ul, expanded);
    else {
        groupAnimations.get(ul)?.cancel();
        ul.hidden = !expanded;
    }
    if (remember && !getMenuFilter()) {
        if (expanded) expandedGroups.add(li.dataset.name);
        else expandedGroups.delete(li.dataset.name);
        // One group open at a time: opening one folds the others, except the groups it sits in
        // (Didymos inside Mission asteroids) and any open inside it. A search opens as many as
        // it needs, so this only applies outside one.
        if (expanded && changed) {
            document.querySelectorAll('#mission-list .menu-group').forEach(other => {
                if (other === li || other.contains(li) || li.contains(other)) return;
                if (other.querySelector(':scope > .menu-group-head > .menu-toggle')?.getAttribute('aria-expanded') !== 'true') return;
                if (autoOpenedGroup === other) autoOpenedGroup = null;
                setGroupExpanded(other, false, { animate });
            });
        }
    }
}

// A group unfolds from under its heading: the list grows to its height while its rows drop in
// one after another, and folds back up a little faster. Interrupting (a quick second click)
// carries on from wherever the fold has got to. With reduced motion the rows only fade in.
const groupAnimations = new WeakMap();
const GROUP_OPEN_MS = 280;
const GROUP_CLOSE_MS = 200;
const GROUP_ROW_STAGGER_MS = 22;
const GROUP_ROW_STAGGER_MAX = 8;
const MENU_EASE_OUT = 'cubic-bezier(0.16, 1, 0.3, 1)';

function animateGroup(ul, expanded) {
    const running = groupAnimations.get(ul);
    const from = running ? ul.getBoundingClientRect().height : (expanded ? 0 : ul.offsetHeight);
    running?.cancel();
    ul.getAnimations({ subtree: true }).forEach(a => a.cancel());

    if (prefersReducedMotion.matches) {
        ul.hidden = !expanded;
        if (expanded) ul.animate({ opacity: [0, 1] }, { duration: 150, easing: 'ease-out' });
        return;
    }

    ul.hidden = false;
    const to = expanded ? ul.scrollHeight : 0;
    const duration = expanded ? GROUP_OPEN_MS : GROUP_CLOSE_MS;
    const fold = ul.animate(
        { height: [`${from}px`, `${to}px`], opacity: expanded ? [1, 1] : [1, 0.4] },
        { duration, easing: expanded ? MENU_EASE_OUT : 'cubic-bezier(0.4, 0, 1, 1)' },
    );
    ul.style.overflow = 'clip';
    groupAnimations.set(ul, fold);

    if (expanded) {
        [...ul.children].filter(row => !row.hidden).slice(0, GROUP_ROW_STAGGER_MAX).forEach((row, i) => {
            row.animate(
                { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
                { duration: 240, delay: 40 + i * GROUP_ROW_STAGGER_MS, easing: MENU_EASE_OUT, fill: 'backwards' },
            );
        });
    }

    fold.onfinish = fold.oncancel = () => {
        if (groupAnimations.get(ul) !== fold) return;
        groupAnimations.delete(ul);
        ul.style.overflow = '';
        if (fold.playState === 'finished') ul.hidden = !expanded;
    };
}

// Case-, accent- and punctuation-insensitive, so "change5" and "chang'e" both find Chang'e-5.
function normaliseForSearch(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function applyMenuFilter() {
    const query = getMenuFilter();
    const needle = normaliseForSearch(query);
    const tree = document.querySelector('#mission-list .menu-tree');
    const empty = document.getElementById('menu-empty');
    const status = document.getElementById('menu-filter-status');
    if (!tree) return;
    let matches = 0;

    // Keeps an item if it or anything inside it matches, so results keep their parents.
    // A holder that matches ("comets", "asteroids") shows everything it holds.
    const walk = (li, forced = false) => {
        const holder = li.classList.contains('menu-group--holder');
        const self = !needle || forced || normaliseForSearch(li.dataset.search || li.dataset.name).includes(needle);
        li.classList.toggle('is-match', Boolean(needle) && self && !holder);
        if (self && needle && !holder) matches++;
        const forceChildren = forced || (holder && self && Boolean(needle));
        let childMatch = false;
        const ul = li.querySelector(':scope > .menu-list');
        if (ul) ul.querySelectorAll(':scope > li').forEach(child => { if (walk(child, forceChildren)) childMatch = true; });
        li.hidden = !(self || childMatch);
        if (ul) {
            const open = needle ? childMatch
                : !li.classList.contains('menu-group') || expandedGroups.has(li.dataset.name);
            if (li.classList.contains('menu-group')) setGroupExpanded(li, open, { remember: false });
            else ul.hidden = !open;
        }
        return self || childMatch;
    };
    tree.querySelectorAll(':scope > li').forEach(li => walk(li));

    empty.hidden = !needle || matches > 0;
    empty.textContent = `Nothing matches “${query}”.`;
    if (status) status.textContent = !needle ? '' : matches ? `${matches} ${matches === 1 ? 'result' : 'results'}` : 'No results';
    // Back from a search, show where the current object sits in the full list.
    if (!needle && menuCurrentName) syncMenuCurrent(menuCurrentName);
}

// The first search result, skipping parents that are only shown for context.
function firstVisibleMenuRow() {
    const selector = getMenuFilter() ? '#mission-list .is-match' : '#mission-list .menu-item';
    const li = [...document.querySelectorAll(selector)].find(item => item.offsetParent !== null && menuRowOf(item));
    return li && menuRowOf(li);
}

function menuRowOf(li) {
    return li.querySelector(':scope > .mission-btn, :scope > .menu-group-head > .mission-btn');
}

function setupMenuFilter() {
    const input = document.getElementById('menu-filter');
    if (!input || input.dataset.ready) return;
    input.dataset.ready = 'true';
    input.addEventListener('input', applyMenuFilter);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            firstVisibleMenuRow()?.click();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            firstVisibleMenuRow()?.focus();
        } else if (e.key === 'Escape' && input.value) {
            // Clear the search first; a second Escape reaches the scene as usual.
            e.stopPropagation();
            input.value = '';
            applyMenuFilter();
        }
    });
}

// Marks the object on show (null for none, 'Solar System' for the overview). An object chosen
// elsewhere (a scene click, the tour) gets its group opened and is scrolled into view.
let menuCurrentName = null;
let autoOpenedGroup = null;
export function syncMenuCurrent(name) {
    menuCurrentName = name;
    document.querySelectorAll('#mission-menu [aria-current]').forEach(el => el.removeAttribute('aria-current'));
    if (!name) return;
    if (name === 'Solar System') {
        document.getElementById('system-btn')?.setAttribute('aria-current', 'true');
        return;
    }
    const li = [...document.querySelectorAll('#mission-list .menu-item')].find(item => item.dataset.name === name);
    if (!li) return;
    const btn = menuRowOf(li);
    if (!btn) return;
    btn.setAttribute('aria-current', 'true');
    if (!getMenuFilter()) {
        // Choosing a planet opens its group, so its missions and moons appear beneath it (that is
        // how most visitors find out a group opens). A group opened this way folds again when the
        // visitor moves on elsewhere, unless they opened it themselves.
        const opens = !li.classList.contains('menu-group--holder') && li.classList.contains('menu-group')
            && li.querySelector(':scope > .menu-group-head > .menu-toggle')?.getAttribute('aria-expanded') === 'false';
        if (autoOpenedGroup && autoOpenedGroup !== li && !autoOpenedGroup.contains(li)) {
            setGroupExpanded(autoOpenedGroup, false, { animate: true });
            autoOpenedGroup = null;
        }
        if (opens) {
            setGroupExpanded(li, true, { animate: true });
            autoOpenedGroup = li;
        }
        const group = li.parentElement.closest('.menu-group');
        if (group) setGroupExpanded(group, true, { animate: true });
    }
    if (btn.offsetParent !== null) btn.scrollIntoView({ block: 'nearest' });
}
