# Engine API

The engine draws the Solar System and flies the camera. Apps (the showcase, `src/apps/showcase/`, and the presentation, `src/apps/present/`) build their panels round it and talk to it only through this API. See `ENGINE-PLAN.md` for the plan this is part of.

The engine lives in `src/engine/`; `createEngine` in `src/engine/index.js` returns the API (in dev builds also at `window.__ouniverse.engine`). Both apps use only this API: they import nothing from `src/engine/` but `createEngine`.

Status marks: ✅ in place, ⏳ planned (with the phase that adds it).

## Ground rules

- The engine never reads or writes an app's DOM. It's told what it needs (`setViewInsets`) and reports what happens (events).
- Events are for things that happen now and then. The per-frame loop never goes through them.
- Names are the `name` field in `public/data.json`.
- Screen measures are CSS pixels from the viewport's top left.

## Lifecycle

| | |
|---|---|
| ✅ `createEngine({ canvas, dataUrl, options })` | Builds the engine round a WebGL renderer drawing into `canvas` (or a canvas of its own, `engine.canvas`, which the app puts on the page) and returns the API. Throws where WebGL isn't available. `dataUrl` defaults to `./data.json`; `options` are below. |
| ✅ `start()` | Loads `dataUrl`, builds the system and starts drawing. Separate from `createEngine` so the app can add its listeners first. |
| ✅ `canvas` | The canvas the engine draws into. |
| ✅ `progress` event `{ progress }` | Loading, 0 to 1, for a splash. |
| ✅ `built` event `{ entries }` | The system is built. `entries` is all of `data.json`, including entries the engine doesn't draw (the credits), for the app's own use. |
| ✅ `ready` event | The scene is warmed up and can be shown. Fires once. |
| ✅ `error` event `{ error }` | Loading failed (including an error thrown by a `built` listener). |
| ✅ `loadDeferred()` | Starts the loads held back until `ready` (the sky, preloaded models) now, for an app that shows the scene sooner. |
| ✅ `setSceneVisible(visible)` | Whether the app is showing the scene (`false` while a splash covers it). The sky snaps in while hidden and fades in while shown. Default `true`. |
| ✅ `onFrame(hook)` | `hook(dt)` runs every frame, after the camera and lights move and just before the scene is drawn. For the app's per-frame work (labels, reticles); called directly, not as an event. |

## Navigation

| | |
|---|---|
| ✅ `flyTo(name)` → `Promise<boolean>` | Selects an object and flies to it. Resolves `true` on arrival, `false` if another `flyTo`, `showOverview` or `deselect` comes first, or the name is unknown. A lander whose body hasn't loaded waits for it, then flies. Planned options: `{ view, duration }` (a framing preset, and a flight time), when the presentation app needs them. |
| ✅ `showOverview({ animate = true })` | Lets go of any selection and shows the whole Solar System. `animate: false` jumps straight there. |
| ✅ `deselect()` | Lets go of the selection and stops any flight to it. The camera stays where it is. |
| ✅ `hurry()` | Brings a flight in to land within `HURRY_FLIGHT_SECONDS` (0.6 s). Does nothing between flights. |
| ✅ `setFlightPace(scale)` | How unhurried flights are, as a multiple of the base duration (`USER_FLIGHT_SCALE` 3, the showcase's tour 5). With no `scale`, back to `USER_FLIGHT_SCALE`. |

## Events

`on(type, listener)` adds a listener. There is no `off` yet; nothing has needed one.

| | |
|---|---|
| ✅ `select` `{ data, waiting }` | An object was selected (by `flyTo`). `waiting` is true while a lander's body loads; a second `select` with `waiting: false` follows when its flight starts. |
| ✅ `arrive` `{ data }` | The camera reached the selection. |
| ✅ `orbit-change` `{ data }` | An object's orbit line was replaced (JUICE's cruise line gives way to its arrival orbit, or back). Restyle it if you highlight orbits. |
| ✅ `deselect` | The selection was let go (`deselect`, `showOverview`). May fire when nothing was selected. |
| ✅ `steer` | The visitor took hold of the camera (a drag, scroll or steering key). |
| ⏳ `hover`, `model-loaded` | Added when an app listens for them. |

The lifecycle events (`progress`, `built`, `ready`, `error`) are under Lifecycle.

## Time

| | |
|---|---|
| ✅ `getDate()` → `Date` | The simulated date (a copy). |
| ✅ `getTime()` → `number` | The simulated date in milliseconds, without making a `Date`: for per-frame use (the showcase's clock line). |
| ✅ `setDate(date)` | Moves the simulated clock to `date` (a `Date` or anything `new Date()` takes). Orbits follow on the next frame. |
| ✅ `setTimeRate(rate)` | Simulated seconds per real second: 1 is real time (the default), 0 stops the clock, 86400 is a day a second. |

The motion clock (camera orbit, spacecraft attitude, the Sun's surface) is separate and always runs in real time. In dev builds `__ouniverse.holdMotion(t)` holds it, and `?date=` pins the simulated clock (see `CLAUDE.md`).

## Queries

| | |
|---|---|
| ✅ `getObject(name)` | The object's `data.json` entry, or `null`. Treat it as read-only. |
| ✅ `listObjects()` | Every object's entry, in load order. |
| ✅ `getSelection()` | The selected object's entry, or `null`. Set when its flight starts (not while a lander waits for its body). |
| ✅ `getSystem(name)` | The name of the system an object belongs to: the body round the Sun it's part of (`Earth` for the Moon, the ISS and L1), or `Sun`. |
| ✅ `getOrbitColor(name)` | The CSS colour of the object's orbit line, unlit. |
| ✅ `pick(x, y)` → name or `null` | The object under a point on screen, in CSS pixels. Only what's drawn counts. |
| ✅ `projectBody(name)` → `{ x, y, radius }` or `null` | Where the object is on screen: centre and radius in CSS pixels, including the view shift from `setViewInsets`. `null` when it's behind the camera or not in the scene. Tiny when far away; not hidden behind other bodies. |

## Layout

| | |
|---|---|
| ✅ `setOrbitHighlights({ hovered, shown })` | Names whose orbits to light: `hovered` in the light blue of a choice (as the selection's is), `shown` in a quieter tint (a group on show). Replaces the last call; the engine keeps them right through selections and orbit-line changes. |
| ✅ `setViewInsets({ left, right, top, bottom })` | How much of the screen the app's panels cover while something is selected, in CSS pixels from each edge (missing edges are 0). The engine frames selections to fit the rest, and while there's a selection (from `select` to `deselect`) it shifts the view so the selection sits in the middle of it. Call it again whenever the panels change size (the showcase does on resize, header resize and Cinematic Mode). |

## Scale

Two ways of drawing the same real data (`SCALE-PLAN.md`): `diagram`, the default (sizes and distances adjusted so everything is easy to see and reach), and `true` (one linear scale for everything, spacecraft included).

| | |
|---|---|
| ✅ `setScaleMode(mode)` | `'diagram'` or `'true'`. Works out every size and orbit again, redraws the lines, re-seats the landers and cuts to the selection (or the overview) as now drawn; a flight under way ends at its destination. Emits `scale-mode`. Ignored before the system is built. True scale isn't ready to show yet: it needs camera-relative rendering, a wider depth range and markers (stages 4 and 5 of the plan). |
| ✅ `getScaleMode()` | The active mode. |
| ✅ `scale-mode` `{ mode }` (event) | The scale mode changed. |

## Input

| | |
|---|---|
| ✅ `setUserControl(enabled)` | Whether the visitor can steer the camera (drag, scroll, arrow keys, plus and minus). On by default. Turning it off hands the camera back to its scripted orbit; it stays off through later flights until turned on again. |

## Options

Passed as `createEngine({ options })`, and kept in `engineOptions` in `src/engine/config.js`.

| | |
|---|---|
| ✅ `nightLights` (default `true`) | City lights on Earth's night side. |
| ✅ `namedAsteroidModels` (default **`false`**) | Asteroids use their `model_named`: models named after OU researchers. A privacy setting: don't turn it on without confirming. The showcase doesn't pass it. |

The debug flags (`DEBUG_SHADOWS`, `DEBUG_LANDING`) stay constants in `config.js`: they're for developers, not apps. In dev builds `createEngine` also installs the dev hook (`window.__ouniverse`, `src/engine/devhook.js`).

## Shared features

Opt-in modules in `src/features/` that any app can use, built only on this API.

| | |
|---|---|
| ✅ Reticles (`src/features/reticles/`) | `setupReticles(engine, container)` adds the overlay to `container`. `updateReticles(dt, { hovered, groups, rightEdge })`, from the app's `onFrame` hook, marks `hovered` (an entry, with a name tab; it swipes out when that object is selected) and each entry in `groups` (a `Map` to `'hover'` or `'info'`), keeping labels left of `rightEdge`. |

The showcase's input choices (canvas clicks select, any grab or scroll calls `hurry`, Escape deselects, `steer` ends the tour) stay with it.
