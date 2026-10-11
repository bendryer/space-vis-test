# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

OUniverse: a browser-based interactive 3D solar system explorer built with **Three.js** and **Vite**, no other framework (plain JS, `"type": "module"`, no TypeScript). `index.html` loads the showcase app, `src/apps/showcase/main.js`, and `present.html` the presentation app, `src/apps/present/main.js` (see Presentations below); both are built on the engine in `src/engine/` (`createEngine`; its API is in `ENGINE.md`) and the shared features in `src/features/` (reticles). Together they render the Sun, planets, moons, asteroids, comets, and real space missions/spacecraft — many tied to Open University research — using GLTF/GLB models (with DRACO compression and LOD swapping), Keplerian orbital mechanics, custom GLSL shaders (`src/engine/sun.js`, `src/engine/sun/*.glsl`), and a cinematic auto-tour camera mode.

`src/counter.js` and `src/javascript.svg` are unused Vite-scaffold leftovers, not imported anywhere.

`ENGINE-PLAN.md` is the agreed plan for splitting the app into a shared engine plus apps (the current showcase, and a planned presentation app). Follow its ground rules when doing that work. `ENGINE.md` describes the engine's API (what's in place and what's planned); keep it in step with the code.

## Commands

- `npm run dev`: dev server on port 5173, at `http://localhost:5173/space-vis-test/`
- `npm run build`: production build into `dist/`. `ANALYZE=1 npm run build` also writes and opens a bundle report (`stats.html`).
- `npm run preview`: serve the production build (`/space-vis-test/`)
- `npm run deploy`: check, build and publish `dist/` to GitHub Pages (see Workflow)
- `npm run lint`: ESLint (flat config).
- `npm run smoke`: smoke test (`tools/smoke.mjs`). Starts its own dev server on port 5199, opens system Chrome on the GPU, flies to nine stops, runs Cinematic Mode for two cycles, visits five stops in True scale and one back in Diagram mode (`--only=true` for just those), then steps through the demo presentation on `present.html`, and compares each screenshot with `smoke/baseline/`. It fails on a console error, a flight that doesn't finish, or a stop where more than 0.5% of pixels change. `npm run smoke -- --baseline` saves a new baseline, and `--only=Sun,Earth` runs just those stops (`--only=present` just the presentation's). Output goes in `smoke/`, which is gitignored, so each machine keeps its own baseline. Take it from `main` before starting work that should change nothing visible.

## Workflow

- `main` is what's live, and must always be deployable. Do new work on a branch (`feature/*`, `design/*`, `refactor/*`) and merge it into `main` once it's checked (lint, build, no console errors in the dev server). Small fixes can still go straight to `main`.
- Design experiments are branches. (They used to be a separate sandbox folder, `../space-vis-design`, retired on 2026-10-08.)
- `npm run deploy` runs `tools/deploy-check.mjs` first, which stops unless you're on `main` with a clean tree that matches `origin/main`. After publishing, `tools/deploy-tag.mjs` tags the commit `deploy-YYYY-MM-DD-HHMM` and pushes the tag, so every live version can be found again. Rollback steps are in `tools/deploy-check.mjs`.
- Live at https://bendryer.github.io/space-vis-test/.
- Commit or push only when the user asks.

## Product and design context

`PRODUCT.md` (audience, purpose, constraints) and `DESIGN.md` (the OU visual system) describe the product. Read them before design work. Brand: OU colours, Poppins, the OU logo at `public/images/brand/`. `.impeccable/` holds the design tooling's record (`design.json`, critiques, surface notes); its live sessions and screenshots are gitignored.

## Presentations

`present.html` runs a set path from object to object for a speaker: `?p=<name>` loads `public/presentations/<name>.json` (default `demo`), `{ "title", "steps": [{ "target", "title" }] }`, where `target` is a `data.json` name (an unknown one is left out with a warning) and `title` is shown in the bar (defaults to the target). It opens on the whole Solar System. Next (→, ↓, Page Down, Space, N, or a clicker) flies to the next step and waits there; Next during a flight hurries it in rather than skipping; Previous (←, ↑, Page Up, Backspace, P), Home (the opening view) and End. The visitor can't steer the camera (`setUserControl(false)`). No panels yet; the plan for them is in `ENGINE-PLAN.md`. Vite builds both pages (`build.rollupOptions.input` in `vite.config.js`), so a deploy publishes `present.html` too.

## Data files

`public/data.json` is the canonical mission/celestial-body dataset — treat it as the source of truth. `public/data_pippa.json` is a colleague's variant that added descriptions for each object; `data.json` is intended to be the merged result pulling in that work, but the merge should be double-checked rather than assumed complete for any given entry. The two things this data concentrates on per mission/body are the **Open University's involvement** and the **science that OU academics are interested in** — prioritize getting those fields right over other content.

Everything specific to an object lives in `data.json`, never in code. `DATA.md` documents every field the code reads. Adding, removing or restyling an object should need only a `data.json` edit plus any asset files. Notable fields:

- `orbit_color`, `system`, `preload`, `show_orbit`, `segments`, `roughness_map`, `rotation_mode` (replace old name-based rules).
- `model_named`: a named asteroid's private model, used only when the engine's `namedAsteroidModels` option is on. `model` is the public generic one.
- `motion`: spacecraft attitude (`spin` / `sun` / `nadir` / `tumble`, with `axis`, `along`, `rate`, `tilt`, `wobble`, `period`).
- `icon`, `menu_parent`, `menu_order`, `menu_top_level` (the Moon, Earth-Sun L1 and L2 are their own groups after Earth).
- `orbit_type: "trajectory"` + `trajectory` (`waypoints` with `date`/`at`/`revs`/`extreme`, `arrival_orbit`): JUICE's cruise to Jupiter.
- `status_timeline` (`[{from, status}]`): a status that changes on a known date, applied at load by `applyStatusTimeline` in `src/engine/index.js` (mirrored in `public/mission-guide.html`).
- `rotation_mode: "spin"` (an asteroid turns on `rot_period` instead of tumbling) and `"locked"` (a moon keeps +X towards its parent, via `faceParent`): Didymos and Dimorphos.
- Real values, fixed scales: natural bodies give `radius_km` and the engine sets their drawn `radius` (and a modelled one's `model_scale`) at load, one rule per kind (`src/engine/scale.js`). Orbits give `a_au` round the Sun (`auToScene`: log compression, 1 AU = 1,000 units) or `a_km` round a body (`satelliteDistance`: true near the surface, log-compressed further out), measured from the parent's equator or a given `plane`, with optional `node_rate`/`peri_rate`. Earth-Sun L1/L2 come from `lagrange` (on the Sun-Earth line, at Earth's Hill radius from `gm`); each system is kept clear of its neighbours by drawing its Hill sphere within the gap to the next orbit (`setKnees`), and the halo orbits round L1/L2 are drawn from their real `amplitude_km` at the L-point's scale. A selected body is framed on itself (`BODY_SELF_VIEW_FILL`), not its whole system; L1/L2 and the Sun still frame what's round them. Trajectory `extreme` is in AU. `SCALE-PLAN.md` is the agreed plan for two scale modes (True scale and Diagram); `size_m` (spacecraft) and `gm` are there for it.

**Fact-checking `data.json`:** use the `factcheck-data` skill (`.claude/skills/factcheck-data/`). `factcheck/registry.json` records every checked claim and `factcheck/sources.json` every fact found and its sources (check it before searching the web); claims that are unverified, user-supplied, disputed or removed stay flagged in each later review.

## Deploy path gotcha

`vite.config.js` sets `base:` to a repo-name path for GitHub Pages deployment — confirm this matches the actual target repo name before deploying, it's easy for it to drift out of sync. Asset paths in `data.json`/code use a leading `/` (e.g. `/textures/...`, `/models/...`); `src/engine/assets.js` has a `fixPath()` helper that strips the leading slash so loaders resolve correctly relative to `base`. Keep new asset references consistent with this pattern rather than hardcoding root-relative paths.

## Asset handling

3D models (`public/models/*.glb`, `*.stl`) and mission images (`public/images/*`) are committed to git normally alongside code changes — don't treat large binary assets in `public/` as something to gitignore or exclude.

Web-ready derivatives live beside the sources, and a changed source needs its derivative regenerated:
- `public/images/web/<name>.webp`: sidebar copies of each science image (at most 1600px on the long side). The app loads these first and falls back to the original.
- `public/textures/milky_way_{px,nx,py,ny,pz,nz}.ktx2`: the sky as a GPU-compressed cube map (UASTC), baked from `milky_way.jpg`, which stays as a fallback.
- `public/models/*.glb` (and `*-low.glb`) were simplified with gltf-transform. The untouched originals are in `model-originals/` (outside `public/`, gitignored).
- `public/draco/` and `public/basis/` are decoders copied from three's `examples/jsm/libs`; update them when `three` is upgraded. Lint ignores them.

The engine's `namedAsteroidModels` option (`createEngine({ options })`, default `false` in `engineOptions` in `src/engine/config.js`; the showcase doesn't pass it) is a deliberate privacy toggle: when `true`, asteroids use their `model_named` (custom OU-researcher-named models such as `Grady.glb`, `Pillinger.glb`) instead of their generic `model`. Don't flip this without confirming it's intended — it affects whether researcher names are exposed in the build.

## How the main systems work (src/engine/, src/apps/showcase/, src/features/)

Styles: `src/base.css` (OU tokens, page basics), `src/apps/showcase/showcase.css`, and each feature's own (`src/features/reticles/reticles.css`), each imported by the module that uses it.

- **Menu:** `populateMenu`. Missions come first in a group, alphabetically, then bodies by distance. Mission asteroids, Honorary asteroids (`menu_holder: "named"`) and Comets are "holders" (`MENU_HOLDERS`) whose rows show the overview with their bodies marked. No status tags in the menu (status shows in the details panel).
- **Markers:** `src/features/markers/`, True scale only in the showcase: a dot in the orbit colour and a name for each object under 3 px, on one 2D canvas. Hidden behind anything drawn; a dot on a more important one folds into it; names that would overlap are left off. A click picks a marker before the scene (`pickMarker`).
- **Reticles:** instrument callouts over hovered objects (`drawReticle`, `updateGroupReticles`). A ring at range, a light-blue dot up close; position never eased, size eased. The ring is four quarter arcs (half arcs made it pulse). A shown group's reticles are dotted rings with no labels.
- **Splash:** fly-through intro in `dismissSplash` (timed stages, CSS in `src/apps/showcase/showcase.css`). The blue ground is drawn inside the splash SVG (`.splash-ground`, a hole under the world), so the whole fly-through is one element scaled by a compositor transform: hole, rim and orbit cannot separate on a slow frame. Don't go back to animating a mask radius (main-thread, stutters apart).
- **Loading:** the sky doesn't gate the splash: its KTX2 faces are prefetched and transcoded by `startSky()` after `scene-ready` or on dismiss, fading in via its shader's `intensity`. The sky is a mesh with its own shader (`src/engine/sky.js`), not `scene.background`: `milky_way.jpg` is a galactic map that is a mirror image of the sky seen from inside, so it's turned to the real sky (scene → ecliptic → equatorial → galactic) in the shader, which a background rotation can't do. Checked by looking along the RA/Dec of the galactic centre and the Magellanic Clouds. Preloaded models (Earth system, Comet 67P) wait in `preloadQueue` for `startPreloads()` at the same moments.
- **Lighting and shadows:** within 36 of a system's radii (`SUN_SHADOW_REACH`) the Sun's point light crossfades to the shadow-casting directional light over 1 s of time (`SUN_SHADOW_FADE_S`), not over distance, because flights cross that range fast; changing system resets the blend (the light is aimed at the new system). `updateSunShadow` also fits the Sun's directional shadow map to the view (texel-snapped, stepped sizes, texel-scaled biases). Solid bodies cast from back faces (`CLOSED_BODY_TYPES`) to avoid acne. The selection spotlight (`updateSelectionSpot`) is overhead for landers and an anti-Sun fill for orbiters that never reaches the planet; it is faint by day and its shadows fade out in sunlight. It counts as night whenever `getSunOcclusion` says another body shades the craft (Earth in a lunar eclipse, a planet's shadow for an orbiter, Saturn's rings, weighted by the ring's `opacity`), not only on a body's own night side. Planned missions (holograms) get no spotlight.
- **Landers:** `attemptToLand` lands on the parent's full-detail surface when loaded, nudges rays that slip through pole seams, and rests landers on their supports (`getLanderSupports`, `settleOnSupports`), keeping each over its own landing point and adjusting only height and tilt (centring its feet made LUPEX slide sideways when a detail level arrived). `relandLanders` re-seats them when a detail level arrives.
- **Spacecraft motion:** `updateMissionAttitude`, from each mission's `motion`.
- **Model flattening:** per-object draw overhead is what limits slow CPUs, so models are merged by material. It's done in the files: `perseverance(-low)`, `cubesat` and `apollo(-low)` were pre-flattened with `%LOCALAPPDATA%\Temp\ouniverse-models\flattenglb.mjs` (bakes skins as three.js draws them, drops unused animations, flattens, dedups, prunes, joins, re-encodes; Perseverance 252 → 43 meshes and 4.9 MB → 1.7 MB). Draco settings matter: 20-bit positions, `QN=14 QT=16`; the low-detail files have coplanar faces that change with triangle order, so `perseverance-low` uses `DRACO_METHOD=sequential` and `apollo-low` is left uncompressed (`SKIP=draco`). Check any re-run by rendering old and new side by side (pixel diff), not just by count. The pre-flatten files are in `model-originals/pre-flatten/`. Perseverance's mast is stowed in those originals: before flattening, bake the raised pose with `node pose-at.mjs <in> <out> 6 CylinderAction bottomAction topAction Cylinder.002Action` (same temp folder). Didymos and Dimorphos come from DART's PDS shape models (OBJ, km, +Z pole), converted by `obj2glb.mjs` in the same temp folder (Y-up, smooth normals, matte rock, Draco, plus a `-low` at 3%). `flattenModel` in `src/engine/models.js` (called by `buildModelLevel`) is the safety net for new models: it merges at load (Perseverance took ~50 ms) and skips a model whose meshes can't merge (0.1 ms), so pre-flatten any big new model instead.
- **Drawing:** `drawScene` (`src/engine/draw.js`). Diagram mode is one plain render. True scale draws relative to the camera (scene shifted so the camera is at the origin, then shifted back), with a near plane set from the nearest surface, in depth slices far to near (`SLICE_RATIO`). See `SCALE-PLAN.md`.
- **Adaptive resolution:** `beginFrameTiming` / `endFrameTiming` round the main render. With GPU timer queries (Chrome/Edge), a median GPU time over `GPU_BUDGET_MS` (13 ms) steps the pixel ratio down through `RESOLUTION_STEPS` (1, 0.85, 0.72), and it steps back up when the predicted cost fits under `GPU_HEADROOM_MS`. Without timers it only steps down, for a median frame over 40 ms.
- **Trajectories:** `getTrajectoryPlan` builds a smooth cruise (per-leg loops and extremes, joined by monotone cubics for angle, radius and height) through flyby points at the simulation's planet positions on each flyby date; `getTrajectoryPosition` / `updateTrajectoryLines` switch to the arrival orbit after the last date.
- **The Sun:** `src/engine/sun.js`. The surface noise has its own clock that only runs while redrawn, so nothing swaps on approach; loops and rays fade in with size.

## Testing and debugging

- **Dev hook:** in dev builds `window.__ouniverse` exposes `camera`, `controls`, `scene`, `celestialMap`, `renderer`, `THREE`, `loadGltf`, `buildModelLevel`, `getEffectiveModel`, `isTransitioning`, `selectedObject`, `sunEffect`, etc., and `holdMotion(t)`, which holds the motion clock at `t` (camera orbit, craft attitude and tumbles, Sun surface) and puts the camera where that clock says (`holdMotion()` releases it). `?date=2026-10-08T12:00:00Z` starts the simulated clock at that moment and stops it there. All of this is stripped from production builds.
- **Performance marks:** `system-ready`, `warmup-start`, `warmup-shaders-ready`, `scene-ready` (start button ready), `sky-ready`. Read them with `performance.getEntriesByType('mark')`.
- **Chrome (claude-in-chrome):** the app only animates while its tab is visible. If `document.visibilityState` is `hidden`, rAF is paused and flights stall; ask the user to bring the window forward. To hurry a flight without deselecting, dispatch a `wheel` event on `renderer.domElement` (Escape deselects).
- **Headless (Playwright):** the default swiftshader renders about 3 fps. Instead launch system Chrome (`executablePath: C:/Program Files/Google/Chrome/Application/chrome.exe`) with `--enable-gpu --ignore-gpu-blocklist --use-angle=d3d11`: that renders on the real GPU at 60 fps, visible, and is the reliable way to time things (the claude-in-chrome tab is often hidden). In Git Bash, prefix commands passing `/models/...` arguments with `MSYS_NO_PATHCONV=1`.
- **Performance testing:** weaker hardware is modelled with CDP `Emulation.setCPUThrottlingRate` (4×) and by screen size (1920×1080 @1.25, 3840×2160, 390×844 @3). Read GPU cost from `window.__ouniverse.resolution.gpu` (the app's own timer queries; don't add a second query round `renderer.render`, they can't nest), and set `resolution.changedAt = 1e15` to pin full resolution while measuring. Select objects by `li.menu-item[data-name]` and wait for `isTransitioning` to go true then false (landers fly only once their body loads). Time loads against a production build (`npm run build && npm run preview`).
- **Model tools:** scripts in `%LOCALAPPDATA%\Temp\ouniverse-models\` (Node with `@gltf-transform/*`, `draco3dgltf`, `meshoptimizer`; Python with scipy and scikit-image): Draco decode/inspect, coplanar/z-fighting detection and fixes (`coplanar2.mjs`, `zfix.mjs`), outer-shell and shrink-wrap (`shell.mjs`, `shrinkwrap.py`, `simplify.mjs`, `writemesh.mjs`). It's a temp folder and may be cleared. Original models are in `model-originals/`.
- **Shell quoting:** long Python/JS written inline in Bash heredocs has failed on quotes; write scripts to files first.

## Open ideas

- Convert the planet JPGs to WebP (moon 1 MB, mercury 852 KB, mars 733 KB…), about 2 MB off the first load. Ask first.
