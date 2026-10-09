// State the engine's modules share. Each object is registered here once and never replaced,
// so modules import it directly.

// Every object by name: { data, group, mesh, ... } (see createCelestialObject in main.js).
export const celestialMap = new Map();
