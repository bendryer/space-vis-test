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

## Phase 3: Move the engine into `src/engine/`, one module per commit ✅

Done (2026-10-09). The engine is in `src/engine/`, each module moved verbatim and smoke-tested at 0.00%: `state.js` (`celestialMap`, `objects`), `config.js` (engine settings and `engineOptions`), `scene.js` (scene, camera, renderer, `isInScene`), `orbits.js` (also `getSystemRoot`), `assets.js`, `gpu.js` (texture upload), `landers.js`, `models.js`, `bodies.js` (also `updateTrajectoryLines`), `time.js` (the simulated and motion clocks), `events.js`, `camera.js` (selection, flights, tracking, the overview, view insets, the controls and keyboard steering), `visibility.js` (culling, model loading, `activeSystem`), `lighting.js`, `motion.js` (tumbles, spacecraft attitude), `projection.js` (`projectBody`), `sky.js`, `render.js` (the loop, adaptive resolution, resize), `sun.js` with its shaders (unchanged), and `index.js` (`createEngine`, loading, the warm-up). `main.js` is down from ~5,050 lines to ~1,900, all showcase.

Changes made to allow the moves, each in its own commit:
- `createRenderer(canvas)`, so a missing WebGL still reaches the showcase's error screen.
- `onLanded`: landers report a landing, and the flight code flies to a waiting lander.
- `buildSystem` split from `loadSystem`; a few never-reassigned `let`s made `const`.
- `updateCamera` (the camera's per-frame step, lifted out of `animate`), `initControls`, and `placeCameraAt` (the camera half of `holdMotion`).
- The showcase relights orbits on `select`, `deselect` and `orbit-change`, and adds its own controls `start` listener, so engine code calls nothing in the showcase. The spotlight tests `status === 'Planned'` as the hologram code does, not the showcase's `statusTone`.
- `onFrame` hooks: the loop hands back the clock line and the reticles.
- Loading reports through events (`progress`, `built`, `ready`, `error`); `loadDeferred` and `setSceneVisible` replace the engine reading the splash.
- `createEngine({ canvas, dataUrl, options })` and `engine.start()`; the options `nightLights` and `namedAsteroidModels` (still off; the showcase doesn't pass it). The debug flags stay constants.

A variable only one module assigns is a live `export let` (`renderer`, `sunEffect`, `selectedObject`), so no shared `state` object was needed. Scratch vectors stay local to each module; a few are copied where two modules use them.

Checks beyond the smoke test, as one-off scripts in the gitignored `smoke/`: a lander chosen before its body loads still waits, then flies; keyboard steering, Escape, clicking empty sky and grabbing the camera in Cinematic Mode; JUICE's line swap keeps its highlight; the error screens for a failed `data.json` and for no WebGL; the sky snapping in behind the splash and fading in after; named asteroids keep their generic models.

Loads re-timed on production builds against `main` before Phase 3 (12 cold loads each, alternating, median): `scene-ready` 3.45 s before, 3.51 s after; `sky-ready` 4.66 s and 4.80 s. Within the spread between runs.

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
