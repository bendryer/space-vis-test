# data.json reference

Every object in OUniverse, and everything about how it looks, moves and is listed, comes from
`public/data.json` (shared from `../space-vis/public`). To add, remove or change an object, edit
that file and add any files it points to. No code changes are needed unless the object needs a
kind of motion or rendering that doesn't exist yet (see the last section).

The file is one JSON array. Each entry is an object, except the single `"type": "credits"`
entry, which holds the image credits page.

## Adding an object

1. Add an entry with at least `name`, `type`, `parent` and `radius`, and a way to be placed:
   an `orbit`, or an `orbit_type` with its fields.
2. Give it a look: a `texture` (a sphere) or a `model` (a GLB file), or neither (a generic
   spacecraft placeholder).
3. Add its content: `description`, `ou_involvement`, and optionally `image_url`, `status`,
   `launch_year`.
4. Put any new files under `public/`: models in `models/`, textures in `textures/`, images in
   `images/`. Paths in the JSON start with `/`.

Removing an object: delete its entry, and those of anything whose `parent` it is.

## Fields

### Identity and content

| Field | Meaning |
|---|---|
| `name` | Unique name, shown everywhere. Other entries refer to it by this. |
| `type` | `star`, `planet`, `moon`, `asteroid`, `comet`, `mission` or `reference_point` (an invisible point such as a Lagrange point). |
| `parent` | Name of the body it orbits or sits on. The Sun's children are the top level. |
| `status` | Shown in the details panel, with a coloured dot: `Planned`; ended (`Crashed`, `Landed`, `Decommissioned`, `Complete`, `Lost`); active (`Active`, `Launched`, `En Route`, `Operational`). Any other word is shown as it is. A `Planned` mission is drawn as a glowing hologram. |
| `status_timeline` | Optional dated status changes, e.g. `[{ "from": "2026-11-21", "status": "Operational" }]`. On load, the last step whose date has passed (by the visitor's clock) replaces `status`. Use it for known future events (an orbit insertion, an expected re-entry) so the status changes without another edit. `Re-entered` counts as an ended status. |
| `launch_year` | Shown in the details panel. |
| `description` | General text for the details panel. |
| `ou_involvement` | The Open University's role, led with in the details panel. |
| `image_url` | Science image, e.g. `/images/juice_science.jpg`. A web copy is served from `images/web/<name>.webp`. Credit it in the credits entry. |

### Size and look

| Field | Meaning |
|---|---|
| `radius` | Size in scene units (Earth is 5). Also sets camera distance and culling. |
| `color` | The body's key colour; a planet's orbit line falls back to it. |
| `texture` | Surface map: the object is drawn as a textured sphere. |
| `night_texture` | City lights on the dark side. |
| `roughness_map` | Which parts shine (Earth's oceans). If it's the same path as `texture`, that texture is reused. |
| `segments` | Sphere smoothness; default 32 (48 for a star). Raise it for bodies seen close up. |
| `ring` | `{ "texture", "inner_radius", "outer_radius", "opacity", "emissive" }`, radii as multiples of `radius`. |
| `tilt` | Axial tilt in degrees. |
| `attitude` | `{ "x", "z" }` fixed rotation in degrees, for a spacecraft that should face a set way. |
| `model` | GLB model, e.g. `/models/juice.glb`. Scaled so its largest side is `model_scale` (missions use a fixed size). |
| `model_low` | Low-detail model shown until the object is big on screen. Default: the file beside `model` named `<model>-low.glb`; if there's no such file the full model is used throughout. |
| `model_scale` | Largest dimension of the model in scene units (default 1). |
| `model_offset` | `{ "x", "y", "z" }` shift of the model inside the object. |
| `model_named` | A named asteroid's own model, which shows a researcher's name. Used in place of `model` only when `USE_NAMED_ASTEROID_MODELS` is on in `src/main.js` (a privacy switch; off). Keep a generic `model` alongside it. |

### Motion

| Field | Meaning |
|---|---|
| `orbit` | Keplerian orbit about `parent`: `a` (size, scene units) **or** `a_au` (size in AU), `e` (eccentricity), `i` (inclination, °), `M0` (mean anomaly at J2000, °), `rate` (° per day), and optionally `node` and `peri` (°). Anything on a real orbit round the Sun (planets, asteroids, comets, a craft like Spitzer) uses `a_au` with real values; the app works the orbit out in AU and puts each point's distance from the Sun through one shared scale (`auToScene` in `main.js`: a smooth compression with 1 AU = 1,000 units, Jupiter about 3,200, Neptune about 7,000), so everything round the Sun sits in its true order and relative place. Orbits round a planet or other body, and the Earth-Sun L1/L2 points, are illustrative: they use `a` in scene units and are not rescaled. |
| `orbit_type` | Absent for an ordinary `orbit`. Otherwise `landed`, `lissajous`, `suborbital` or `trajectory`. |
| `trajectory` | For `trajectory` (a mission in transit, like JUICE): `{ "waypoints": [...], "arrival_orbit": {...} }`. Each waypoint is `{ "date": "YYYY-MM-DD", "at": "<body>", "label" }`: the craft passes just outside that body on that date, where this simulation has the body then. A waypoint can shape the leg arriving at it with `"revs"` (full loops round the Sun on the way; worked out from the time if left out) and `"extreme"` (the farthest or nearest distance from the Sun the leg reaches, in AU, placed on the same scale as the planets). After the last waypoint the craft is on `arrival_orbit` (an `orbit` round the last waypoint's body). The cruise is drawn as a line (the flyby points shape it but are not marked); after arrival, the orbit round the body instead. The last waypoint's `at` must be an object in the file (Hera's is the asteroid Didymos). |
| `landed_coords` | For `landed`: `{ "lat", "lon" }` on the parent. The lander is dropped onto the parent's surface (sphere or model) at that point. |
| `suborbital` | For `suborbital`: `{ "start_coords", "end_coords", "apogee", "duration", "progress" }`. |
| `rot_period` | Spin period in days. `rot_offset` shifts its starting angle (°). |
| `rotation_mode` | `"utc"`: spin to the real time of day instead of `rot_period` (Earth: longitude 0 faces the Sun at 12:00 UTC). |
| `show_orbit` | `false` hides the orbit line. |

Asteroids and comets tumble, and missions turn slowly, with no field needed.

### Grouping, loading and the menu

| Field | Meaning |
|---|---|
| `system` | The planet-level body it belongs to, when that isn't its parent. The Earth-Sun Lagrange points orbit the Sun but belong with Earth, for loading and culling. |
| `preload` | `true` on a body loads its whole system's models up front instead of as they come into view (Earth's, the opening view; Comet 67P's, which Philae lands on). |
| `orbit_color` | Colour of its orbit line. A moon without one uses its planet's. Default by type: comets white, asteroids and missions grey (all light blue on hover or selection). Planets and asteroids use it for their menu icon too. |
| `menu_parent` | Lists it under another object than its `parent`: JUICE under Jupiter, Spitzer under Earth. `"Sun"` puts it inside the Sun's own group instead of the top level. |
| `menu_top_level` | `true` gives a body or point its own group at the top level, after the planet whose system it belongs to, nearest first and indented a step (the Moon, then Earth-Sun L1 and L2, after Earth). Its own children come with it. |
| `menu_order` | Sort key among a group's natural bodies, in place of orbit size (`orbit.a`); the numbered asteroids use their catalogue number. Missions are always listed first in a group, alphabetically, then its bodies. |
| `icon` | Menu icon, overriding the one chosen by type: `rover`, `lander`, `satellite`, `rocket`, `facility`, `planet`, `moon`, `sun`, `comet`, `asteroid`, `point`, `galaxy`. |

Asteroids and comets are gathered into the Asteroids and Comets groups by `type`. Anything
landed on Earth is shown as a ground facility and isn't counted as a spacecraft on the splash.

## What still needs code

A new *kind* of behaviour, as opposed to a new object: a new `orbit_type`, a new rendering
effect, or a new menu grouping. The code also assumes the central star is named `Sun`.
