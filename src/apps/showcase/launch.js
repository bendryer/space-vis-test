// "Launch your next mission": a button in the controls that opens a dialog about studying with
// the OU. Its words are in index.html (#launch-dialog), placeholders until they are written.
import { uiIcon } from './menu.js';

export function setupLaunch() {
    const controls = document.getElementById('controls');
    const dialog = document.getElementById('launch-dialog');
    if (!controls || !dialog || document.getElementById('launch-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'launch-btn';
    btn.type = 'button';
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.innerHTML = `${uiIcon('rocket', 'btn-icon')}<span class="btn-label">Launch your next mission</span>`;
    btn.addEventListener('click', () => {
        dialog.showModal();
        dialog.querySelector('.launch-content').scrollTop = 0;
    });
    // Under Cinematic Mode, above the quiet links.
    controls.insertBefore(btn, controls.querySelector('.controls-links'));

    document.getElementById('launch-close').addEventListener('click', () => dialog.close());
    // A click on the dimmed backdrop lands on the dialog element itself.
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => btn.focus());
}
