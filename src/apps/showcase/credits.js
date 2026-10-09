// The credits dialog, from data.json's credits entry.

// The content lives in data.json (the entry with "type": "credits"), so credits can be
// edited without touching code. Items with an empty credit are left out.
const LICENCE_URLS = {
    'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
    'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
    'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
    'CC BY-SA 3.0 IGO': 'https://creativecommons.org/licenses/by-sa/3.0/igo/',
    'MIT': 'https://opensource.org/license/mit',
};

function externalLink(text, href) {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
}

export function setupCredits(credits) {
    const sections = (credits?.sections || [])
        .map(section => ({ ...section, items: (section.items || []).filter(item => item.credit) }))
        .filter(section => section.items.length);
    if (!sections.length) return;

    const dialog = document.getElementById('credits-dialog');
    const content = document.getElementById('credits-content');
    if (credits.title) document.getElementById('credits-title').textContent = credits.title;
    content.replaceChildren();

    // The people who made it come first, set apart from the thanks for images and software.
    const crew = (credits.crew?.items || []).filter(person => person.name && person.role);
    if (crew.length) {
        const el = document.createElement('section');
        el.className = 'credits-crew';
        const h = document.createElement('h3');
        h.textContent = credits.crew.heading || 'Crew';
        const list = document.createElement('dl');
        list.className = 'credits-list';
        for (const person of crew) {
            const row = document.createElement('div');
            const dt = document.createElement('dt');
            dt.textContent = person.name;
            const dd = document.createElement('dd');
            dd.textContent = person.role;
            row.append(dt, dd);
            list.appendChild(row);
        }
        el.append(h, list);
        // A quiet line under the crew, e.g. how AI was used to make it.
        if (credits.crew.note) {
            const note = document.createElement('p');
            note.className = 'credits-note';
            note.textContent = credits.crew.note;
            el.appendChild(note);
        }
        content.appendChild(el);
    }

    if (credits.intro) {
        const p = document.createElement('p');
        p.className = 'credits-intro';
        p.textContent = credits.intro;
        content.appendChild(p);
    }
    for (const section of sections) {
        const el = document.createElement('section');
        const h = document.createElement('h3');
        h.textContent = section.heading;
        const list = document.createElement('dl');
        list.className = 'credits-list';
        for (const item of section.items) {
            const row = document.createElement('div');
            const dt = document.createElement('dt');
            dt.textContent = item.subject;
            const dd = document.createElement('dd');
            dd.append(item.credit);
            if (item.licence) {
                dd.append(' · ');
                const href = LICENCE_URLS[item.licence];
                dd.append(href ? externalLink(item.licence, href) : item.licence);
            }
            if (item.url) {
                dd.append(' · ');
                dd.append(externalLink('Source', item.url));
            }
            row.append(dt, dd);
            list.appendChild(row);
        }
        el.append(h, list);
        content.appendChild(el);
    }
    if (credits.footer) {
        const p = document.createElement('p');
        p.className = 'credits-footer';
        p.textContent = credits.footer;
        content.appendChild(p);
    }

    let link = document.getElementById('credits-btn');
    if (!link) {
        // Focus goes back to whichever button opened it: the controls' link, or on a phone the
        // one at the foot of the Explore sheet.
        let opener = null;
        const open = (from) => {
            opener = from;
            dialog.showModal();
            content.scrollTop = 0;
        };
        link = document.createElement('button');
        link.id = 'credits-btn';
        link.type = 'button';
        link.textContent = 'Credits';
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', () => open(link));
        (document.querySelector('#controls .controls-links') || document.getElementById('controls')).appendChild(link);
        const menuCredits = document.getElementById('menu-credits');
        if (menuCredits) {
            menuCredits.closest('.menu-foot').hidden = false;
            menuCredits.addEventListener('click', () => open(menuCredits));
        }

        document.getElementById('credits-close').addEventListener('click', () => dialog.close());
        // A click on the dimmed backdrop lands on the dialog element itself.
        dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
        dialog.addEventListener('close', () => opener?.focus());
    }
}
