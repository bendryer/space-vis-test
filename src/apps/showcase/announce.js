// Messages for screen readers, through the page's live region (#announcer).

export function announce(message) {
    const el = document.getElementById('announcer');
    if (!el) return;
    el.textContent = '';
    // Set on the next frame so a repeated message is still read out.
    requestAnimationFrame(() => { el.textContent = message; });
}
