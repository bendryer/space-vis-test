// --- ENGINE EVENTS ---
// Things that happen now and then (a selection, an arrival) go out as events, so the app round
// the engine can follow them without the engine knowing about its panels. The per-frame loop
// never goes through these. Events: select, arrive, deselect.
const engineListeners = new Map();
export function onEngine(type, listener) {
    if (!engineListeners.has(type)) engineListeners.set(type, []);
    engineListeners.get(type).push(listener);
}
export function emitEngine(type, detail) {
    engineListeners.get(type)?.forEach(listener => listener(detail));
}
