# Engine API

The engine draws the Solar System and flies the camera. Apps (the showcase now, a presentation app later) build their panels round it and talk to it only through this API. See `ENGINE-PLAN.md` for the plan this is part of.

Today the engine still lives in `src/main.js`, and the API is gathered in its `engine` object (in dev builds also at `window.__ouniverse.engine`). Phase 3 moves it into `src/engine/`, and `createEngine` will return that object.

Status marks: ✅ in place, ⏳ planned (with the phase that adds it).

## Ground rules

- The engine never reads or writes an app's DOM. It's told what it needs (`setViewInsets`) and reports what happens (events).
- Events are for things that happen now and then. The per-frame loop never goes through them.
- Names are the `name` field in `public/data.json`.
- Screen measures are CSS pixels from the viewport's top left.

## Lifecycle

| | |
|---|---|
| ⏳ `createEngine({ canvas, dataUrl, options })` | Builds the scene into `canvas` from `dataUrl` (default `data.json`) and returns the API. Phase 3. |
| ⏳ `progress` event `{ progress }` | Loading, 0 to 1, for a splash. The engine currently writes the showcase's splash itself (`loadingManager.onProgress`). |
| ⏳ `ready` event | The scene is warmed up and can be shown (today `markSceneReady`, which also starts the splash's way in). |

## Navigation

| | |
|---|---|
| ✅ `flyTo(name)` → `Promise<boolean>` | Selects an object and flies to it. Resolves `true` on arrival, `false` if another `flyTo`, `showOverview` or `deselect` comes first, or the name is unknown. A lander whose body hasn't loaded waits for it, then flies. Planned options: `{ view, duration }` (a framing preset, and a flight time), when the presentation app needs them. |
| ✅ `showOverview({ animate = true })` | Lets go of any selection and shows the whole Solar System. `animate: false` jumps straight there. |
| ✅ `deselect()` | Lets go of the selection and stops any flight to it. The camera stays where it is. |
| ✅ `hurry()` | Brings a flight in to land within `HURRY_FLIGHT_SECONDS` (0.6 s). Does nothing between flights. |
| ✅ `setFlightPace(scale)` | How unhurried flights are, as a multiple of the base duration (`USER_FLIGHT_SCALE` 3, `CINEMATIC_FLIGHT_SCALE` 5). |

## Events

`on(type, listener)` adds a listener. There is no `off` yet; nothing has needed one.

| | |
|---|---|
| ✅ `select` `{ data, waiting }` | An object was selected (by `flyTo`). `waiting` is true while a lander's body loads; a second `select` with `waiting: false` follows when its flight starts. |
| ✅ `arrive` `{ data }` | The camera reached the selection. |
| ✅ `deselect` | The selection was let go (`deselect`, `showOverview`). May fire when nothing was selected. |
| ⏳ `hover`, `model-loaded`, `ready`, `progress` | Added when an app listens for them. |

## Time

| | |
|---|---|
| ✅ `getDate()` → `Date` | The simulated date (a copy). |
| ✅ `setDate(date)` | Moves the simulated clock to `date` (a `Date` or anything `new Date()` takes). Orbits follow on the next frame. |
| ✅ `setTimeRate(rate)` | Simulated seconds per real second: 1 is real time (the default), 0 stops the clock, 86400 is a day a second. |

The motion clock (camera orbit, spacecraft attitude, the Sun's surface) is separate and always runs in real time. In dev builds `__ouniverse.holdMotion(t)` holds it, and `?date=` pins the simulated clock (see `CLAUDE.md`).

## Queries

| | |
|---|---|
| ✅ `getObject(name)` | The object's `data.json` entry, or `null`. Treat it as read-only. |
| ✅ `listObjects()` | Every object's entry, in load order. |
| ✅ `projectBody(name)` → `{ x, y, radius }` or `null` | Where the object is on screen: centre and radius in CSS pixels, including the view shift from `setViewInsets`. `null` when it's behind the camera or not in the scene. Tiny when far away; not hidden behind other bodies. |

## Layout

| | |
|---|---|
| ✅ `setViewInsets({ left, right, top, bottom })` | How much of the screen the app's panels cover while something is selected, in CSS pixels from each edge (missing edges are 0). The engine frames selections to fit the rest, and while there's a selection (from `select` to `deselect`) it shifts the view so the selection sits in the middle of it. Call it again whenever the panels change size (the showcase does on resize, header resize and Cinematic Mode). |

## Input

| | |
|---|---|
| ✅ `setUserControl(enabled)` | Whether the visitor can steer the camera (drag, scroll, arrow keys, plus and minus). On by default. Turning it off hands the camera back to its scripted orbit; it stays off through later flights until turned on again. |

## Options

Planned for `createEngine` (Phase 3). Today they are constants in `src/engine/config.js`.

| | |
|---|---|
| ⏳ `nightLights` (default `true`) | City lights on Earth's night side. Today `ENABLE_NIGHT_LIGHTS`. |
| ⏳ `namedAsteroidModels` (default **`false`**) | Asteroids use their `model_named`: models named after OU researchers. A privacy setting: don't turn it on without confirming. Today `USE_NAMED_ASTEROID_MODELS`. |
| ⏳ debug flags | Shadow and light helpers, and the dev hook. |

## Still to separate

Showcase things the engine code still does, to move out in Phases 3 and 4:

- **Loading:** `loadingManager.onProgress` and `markSceneReady` write the splash. These become the `progress` and `ready` events.
- **The clock line:** the loop writes `#clock`. The showcase can read `getDate()` instead.
- **Reticles and labels** (`updateReticles` in the loop, `sceneRightEdge` reading the sidebar): a shared feature for Phase 4, built on `projectBody` and the view insets.
- **Input handlers:** canvas clicks select, any grab or scroll calls `hurry`, and Escape deselects. These are the showcase's choices. The OrbitControls `start` listener also stops Cinematic Mode.
- **Menu highlights:** `updateOrbitLineHighlights` lights the orbits of the menu holder that is hovered or shown (`hoveredHolder`, `shownHolder`).
