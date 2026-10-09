# Engine split plan

Agreed 2026-10-08. Goal: split `src/main.js` into a shared engine plus separate apps, so the current web showcase and a planned presentation app (a set path from object to object, click to advance, pop-out panels of surfaces and science data) share one engine instead of becoming two forks.

Target layout:

```
src/
  engine/        scene, bodies, orbits, lighting, flights, landers, Sun   (shared)
  features/      reticles, pop-out panels…                                (opt-in, either app)
  apps/
    showcase/    menu, splash, details panel, free exploration           (what's live now)
    present/     step list, next/prev, transitions, presenter controls
index.html       → showcase
present.html     → presentation (Vite multi-page build)
```

## Ground rules (all phases)

1. **Nothing visible changes** until the presentation work starts. No feature work in refactor commits.
2. **Moving code and changing code are separate commits.**
3. **Small steps:** lint and smoke test after each one, and each one can be reverted.
4. **The per-frame loop stays as direct function calls.** Events only for things that happen occasionally.
5. **`main` is always deployable.** Work on branches; merge each phase into `main` once its smoke test passes, rather than keeping one long-lived refactor branch.

## Phase −1: Make space-vis the single home ✅ (2026-10-08)

The `../space-vis-design` sandbox is retired. Its docs (`PRODUCT.md`, `DESIGN.md`), fact-check ledger and skill, and design records moved here; design experiments are now branches. The bundle report is opt-in (`ANALYZE=1`), and `npm run deploy` only runs from a clean, pushed `main` and tags each deploy.

## Phase 0: Safety net ✅ (2026-10-08)

Done on `refactor/engine-split`: `npm run smoke` (see `CLAUDE.md`), the dev-only `?date=` pin, and `__ouniverse.holdMotion`, which makes the screenshots repeat: 0.00% of pixels change between runs. It also sets each tumbling body (Comet 67P under Philae) to the turn it would have at the held time, since tumbles add up frame by frame and would otherwise depend on how long loading took. The test also marks the coach as seen and parks the pointer on the title, since both otherwise change the picture. Baseline taken from `main` plus these test hooks.

- Branch `refactor/engine-split` from `main`.
- **Smoke test:** `tools/smoke.mjs`, `playwright-core` as a dev dependency, `npm run smoke`. System Chrome on the GPU (`--enable-gpu --ignore-gpu-blocklist --use-angle=d3d11`). It:
  - loads the app, waits for `scene-ready`, dismisses the splash
  - selects Earth, Perseverance, Philae, Saturn, JUICE, ISS, the Sun, Didymos and a holder row, waiting for each flight to start and finish
  - screenshots each, and records console errors and GPU time (`resolution.gpu`)
  - runs cinematic mode for two cycles
  - records the load marks (`scene-ready`, `sky-ready`)
- **Dev-only date pin**, so screenshots repeat and can be compared pixel by pixel.
- **Baseline:** reference screenshots and timings from `main` before any refactor commit.

## Phase 1: Separate engine from UI inside `main.js` (no file moves) ✅ (2026-10-08)

Done: `onEngine` / `emitEngine` with `select`, `arrive` and `deselect`; `flyTo(name)` (promise: true on arrival, false if replaced or deselected) and the showcase's `selectObject` and `select` listener; `deselect()` and its listener; `listObjects()`; `setFlightPace(scale)`, so the engine no longer reads `cinematicActive` for flight speed. Cinematic Mode now uses only these. `hover`, `model-loaded` and `ready` are left until something listens for them. The engine still reads `cinematicActive` for the phone insets, which `setViewInsets` (Phase 2) replaces.

- A small event emitter: `select`, `arrive`, `deselect`, `hover`, `model-loaded`, `ready`.
- Split `focusOnObject` into the engine's `flyTo(name, opts)` (flight, loading, landers; returns a promise that resolves on arrival) and a showcase listener (details panel, focus, announcements, coach).
- Split `closeUI` the same way: `engine.deselect()` plus a showcase listener.
- Rewrite cinematic mode to use only the API. This proves the approach.

## Phase 2: Define the engine API (`ENGINE.md`) ✅ (2026-10-09)

Done: `ENGINE.md` describes the API, and `main.js` gathers it in an `engine` object. Added `setViewInsets` (the showcase's `syncViewInsets` measures its panels; the engine no longer reads the sidebar, menu, header or `cinematicActive`), `showOverview` (split from `showSolarSystem`), `hurry`, `getDate` / `setDate` / `setTimeRate`, `getObject`, `projectBody` and `setUserControl`. `createEngine`, the options and the `progress` / `ready` events come with Phase 3, when there is a module to construct; `flyTo`'s `{ view, duration }` waits for the presentation app. `ENGINE.md` lists the showcase work the engine code still does. Smoke test 0.00% at every stop; phone framing checked by numbers (view shift and distance unchanged at 390×844). The smoke baseline was retaken from `main` on 2026-10-09 after a Chrome update changed text anti-aliasing.

| Area | API |
|---|---|
| Lifecycle | `createEngine({ canvas, dataUrl, options })` → `ready`; progress events for the splash |
| Navigation | `flyTo(name, { view, duration })` → Promise; `showOverview()`; `deselect()`; `hurry()` |
| Time | `getDate()`, `setDate()`, `setTimeRate()` |
| Queries | `getObject(name)`, `listObjects()`, `projectBody(name)` → screen position and radius |
| Layout | `setViewInsets({ left, right, bottom })`, replacing the engine reading the sidebar and phone sheets itself |
| Input | `setUserControl(enabled)` |
| Options | `nightLights`, `namedAsteroidModels` (default stays **off**), debug flags |

`setViewInsets` changes the framing maths: compare desktop and phone screenshots.

## Phase 3: Move the engine into `src/engine/`, one module per commit

In progress (2026-10-09). Moved so far, each verbatim and smoke-tested at 0.00%: `state.js` (`celestialMap`, `objects`), `orbits.js` (also `getSystemRoot`), `assets.js`, `scene.js` (scene, camera, renderer), `config.js` (engine settings, including `USE_NAMED_ASTEROID_MODELS`), `gpu.js` (warm-up), `landers.js`, `models.js`, `bodies.js`. `main.js` is down from ~5,050 lines to ~3,700.

Changes made to allow the moves, each in its own commit: `createRenderer()` (so a missing WebGL still reaches the showcase's error screen), `onLanded` (landers report a landing; the flight code flies to a waiting lander), `buildSystem` split from `loadSystem`, and a few never-reassigned `let`s made `const`. A variable only one module assigns is a live `export let` (`renderer`, `sunEffect`), so no shared `state` object has been needed yet.

Next: the camera and flight code (`camera.js`) before `lighting.js`, since the selection spotlight reads the camera's state. Still in `main.js` for Phase 4: orbit highlights (`updateOrbitLineHighlights`, `updateTrajectoryLines`), which mix hover and the menu's holders.

In order of least coupling: `orbits.js` → `assets.js` → `models.js` → `bodies.js` → `landers.js` → `lighting.js` → `camera.js` → `render.js` → `index.js` (`createEngine`, owning the shared `state` object). Scratch vectors stay local to each module, `sun.js` moves in unchanged, and `window.__ouniverse` keeps its names. Re-time loads after this phase.

## Phase 4: Separate the showcase app and the shared features

- `src/apps/showcase/`: splash, menu and search, sidebar, phone sheets, coach, credits, fullscreen, keyboard, cinematic mode.
- `src/features/reticles/`: the overlay the presentation's anchored panels will build on.
- CSS: `base.css` (OU tokens, fonts), `showcase.css`, and one CSS file per feature, each imported by its own module.

## Phase 5: Second entry point and a minimal presentation

- `present.html` + `src/apps/present/`, and the Vite multi-page `input`.
- `presentations/demo.json` with three steps; arrow keys or a clicker run `flyTo` and wait for arrival. No panels yet.
- Smoke test covers both pages; update `CLAUDE.md`.

## Risks to watch

- **Timing during load:** re-time after phases 3 and 4.
- **DOM reads inside `animate`:** each moves out via an event or an inset.
- **Landers and shadows:** caught by the Perseverance, Philae and Saturn screenshots.
- **Fixes on `main` during the refactor:** merge `main` into the refactor branch often, and merge finished phases back promptly.
