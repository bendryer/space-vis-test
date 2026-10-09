// State the engine's modules share. Each object is registered here once and never replaced,
// so modules import it directly.

// Every object by name: { data, group, meshGroup, mesh, ... } (built by buildSystem in bodies.js).
export const celestialMap = new Map();

// The meshes clicks and hovers are tested against (each object's visual container).
export const objects = [];
