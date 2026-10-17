# data.json reference

Every object in OUniverse, and everything about how it looks, moves and is listed, comes from
`public/data.json` (shared from `../space-vis/public`). To add, remove or change an object, edit
that file and add any files it points to. No code changes are needed unless the object needs a
kind of motion or rendering that doesn't exist yet (see the last section).

The file is one JSON array. Each entry is an object, except the single `"type": "credits"`
entry, which holds the credits page: `title`, `crew` (`heading`, `items` of `{ "name", "role" }` and an optional quiet `note`,
shown first, above the rest), `intro`, `sections` (`heading` plus `items` of `{ "subject", "credit",
"licence", "url", "confirmed" }`; items without a `credit` are left out) and `footer`.

## Adding an object

1. Add an entry with at least `name`, `type`, `parent` and a size (`radius_km` for a natural
   body, `radius` for a spacecraft), and a way to be placed:
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
| `image_url` | Science image, e.g. `/images/juice_science.jpg`. A web copy is served from `images/web/<name>.webp` (after making one, run `node tools/image-sizes.mjs` to record its size). Credit it in the credits entry. |
| `image_alt` | What the science image shows, for screen readers, e.g. "False-colour map of water ice at Mercury's north pole". Without it the image is skipped (empty alt) rather than given a name that says nothing. |

### Size and look

| Field | Meaning |
|---|---|
| `radius_km` | A natural body's real size, in km: the mean radius of a planet, moon or the Sun; for a body drawn from a `model` (asteroids, comets, Dimorphos, Phobos, Deimos), half its longest side. The engine draws it on the scale mode's rules (`src/engine/scale.js`, `SCALE-PLAN.md`). In True scale every radius is real, Earth's 5 units (1 unit = 1,274.2 km). In Diagram mode ("Compressed" to visitors, the default) one fixed scale per kind: the Sun at 25 units; planets and moons spheres of 5 × (r / 6371 km)^0.62 (Earth 5, Jupiter 22, the Moon 2.2); modelled bodies with a longest side of 1.49 × (km)^0.7 (Bennu about 0.9, Comet 67P 4.2), except a modelled moon of a planet (Phobos, Deimos), drawn on the moons' rule with its half-longest side as r (on the small bodies' rule Phobos would be larger than Mars). Sources: IAU/JPL mean radii; asteroid and comet sizes from JPL's Small-Body Database (`phys-par=1`) or the shape-model papers. |
| `radius_estimated` | `true` when `radius_km` has no measurement behind it: worked out from the absolute magnitude H for a typical albedo of 0.14 (D = 1329 km / √0.14 × 10^(−H/5)). |
| `gm` | A body's GM (gravitational parameter, km³/s²): JPL's values for the Sun, planets and moons, mission results for the small bodies craft visit. Places the Earth-Sun L1/L2 points and, in Diagram mode, bounds each system by its Hill sphere (`SCALE-PLAN.md`). `gm_estimated`: `true` where no mass is measured (Wild 2: its shape at 600 kg/m³). |
| `size_m` | A spacecraft's real longest dimension, in metres, with solar arrays deployed (the ISS's truss is 109 m, Perseverance is 3 m): the size of its model in True scale (in Diagram mode every craft is drawn the same size, `MISSION_MODEL_SIZE`, so all can be seen). Sources: ESA, NASA and JAXA fact sheets. `size_estimated`: `true` where no figure is published (a planned mission, or a site on Earth). |
| `radius` | A spacecraft's size in scene units in Diagram mode, used until its model loads (in True scale the engine sets it from `size_m`). For natural bodies the engine sets it from `radius_km`; it sets camera distance and culling. |
| `color` | The body's key colour; a planet's orbit line falls back to it. |
| `texture` | Surface map: the object is drawn as a textured sphere. |
| `night_texture` | City lights on the dark side. |
| `roughness_map` | Which parts shine (Earth's oceans). If it's the same path as `texture`, that texture is reused. |
| `segments` | Sphere smoothness; default 32 (48 for a star). Raise it for bodies seen close up. |
| `ring` | `{ "texture", "inner_km", "outer_km", "opacity", "emissive" }`: the rings' real inner and outer edges, km from the planet's centre (Saturn: the C ring's inner edge to the A ring's outer one). |
| `pole` | `{ "ra", "dec" }`: where the north pole points, as the IAU gives it (right ascension and declination in degrees, J2000 equator). The body spins about it, so seasons and the Sun's angle are real. The IAU north is the pole on the north side of the Solar System's plane, so Venus and Uranus have a negative `rot_period`. |
| `tilt` | Axial tilt in degrees, for a body without `pole` (leans towards the scene's −X). |
| `attitude` | `{ "x", "z" }` fixed rotation in degrees, for a spacecraft that should face a set way. |
| `model` | GLB model, e.g. `/models/juice.glb`. Scaled so its largest side is the object's drawn size: a natural body's `model_scale`, a craft's size in the scale mode (above). |
| `model_low` | Low-detail model shown until the object is big on screen. Default: the file beside `model` named `<model>-low.glb`; if there's no such file the full model is used throughout. |
| `model_scale` | Set by the engine for a natural body with a `model`, from `radius_km`. The engine doesn't read a spacecraft's (only the mission guide shows it); craft are sized by the scale mode. |
| `model_offset` | `{ "x", "y", "z" }` shift of the model inside the object. |
| `model_named` | A named asteroid's own model, which shows a researcher's name. Used in place of `model` only when the engine's `namedAsteroidModels` option is on (`engineOptions` in `src/engine/config.js`; a privacy switch, off). Keep a generic `model` alongside it.|
| `model_named_shown` | `true`: this object's `model_named` is shown whatever `namedAsteroidModels` says, because its likeness is cleared for show (its owner's permission). Leave it off for a likeness not yet cleared or still to be redone. |

### Motion

| Field | Meaning |
|---|---|
| `orbit` | Keplerian orbit about `parent`: `a` (size, scene units) **or** `a_au` (size in AU), `e` (eccentricity), `i` (inclination, °), `M0` (mean anomaly at J2000, °), `rate` (° per day), and optionally `node` and `peri` (°). Anything on a real orbit round the Sun (planets, asteroids, comets, a craft like Spitzer) uses `a_au` with real values; the app works the orbit out in AU and puts each point's distance from the Sun through one shared scale (`auToScene` in `src/engine/orbits.js`: a smooth compression with 1 AU = 1,000 units, Jupiter about 3,200, Neptune about 7,000), so everything round the Sun sits in its true order and relative place. Orbits round a body use `a_km` (real semi-major axis, km): each point's height is drawn true to the body's drawn size close in, then compressed (`satelliteDistance` in `src/engine/orbits.js`: a height of h km is drawn u × K × ln(1 + h / K), u being the body's scene units per km, K the knee: 100,000 km round a planet or moon and 5 km round an asteroid or comet, lowered where a system would otherwise reach towards its neighbours), so low orbits skim the surface and moons sit in their true order. Each system is kept clear of the next (`setKnees` in `src/engine/scale.js`): a planet's Hill sphere (a × (m / 3M)^(1/3), from `gm`; 1.5 million km for Earth) is drawn 0.35 of the drawn gap to the nearest neighbouring orbit, and a visited small body's 8 of its drawn radii (its knee kept between 1 and 5 km), so the Moon sits at 11 Earth radii, L1 and L2 at 15.5, and Callisto at 5 Jupiter radii. Their angles are measured from the parent's equator (its `pole`), or from `plane`: `"ecliptic"` (the Moon) or a pole `{ "ra", "dec" }` (a moon's Laplace plane, as JPL gives it), with the node from where that plane crosses Earth's equator (from the March equinox for Earth's own equator). `node_rate` and `peri_rate` (° per day) turn the node and periapsis (the Moon's node goes round in 18.6 years; a Sun-synchronous orbit's node turns 0.9856° a day with the Sun). `rate` 0 holds a craft still (Hayabusa2 hovering at Ryugu). Moons come from JPL's planetary satellite mean elements (`https://ssd.jpl.nasa.gov/sats/elem/`), with `M0` and `rate` fitted to Horizons over 2000-2050; a craft's from its published heights (above the equator), inclination, and a `rate` from the parent's mass. From JPL's Small-Body Database (`https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=<number>&full-prec=1`): `a_au` = `a`, `e`, `i`, `node` = `om`, `peri` = `w`, `rate` = `n` (keep 6 decimals: a rounded rate drifts degrees over the years since 2000), and `M0` = `ma` − `rate` × (`epoch` − 2451545.0), mod 360. JPL's `ma` is at its own `epoch`, not J2000, so it can't be copied straight in. Planets come from JPL's table of mean planetary elements (Standish, valid 1800-2050, `https://ssd.jpl.nasa.gov/planets/approx_pos.html`, Table 1): `peri` = ϖ − Ω, `M0` = L − ϖ, `rate` = (L rate − ϖ rate) / 36525. Angles are in the ecliptic and equinox of J2000, which the scene places with ecliptic north up (+Y; ecliptic x = X, y = −Z), so everything goes round anticlockwise seen from above. A `libration` orbit (round L1 or L2) gives `kind`, which sort the craft really flies, where a source says: `"halo"` (a closed loop: JWST, Euclid, Genesis, NewAthena), `"quasi-halo"` (close to one but not closing: Herschel, Roman) or `"lissajous"` (a loop that never closes, filling a box over the years: Gaia, Planck); left out where no source says. It gives its real size, `amplitude_km`: `{ "y", "z" }`, its farthest reach from the point across the Sun-Earth line in the ecliptic and out of it, and `period_days` (about 180); the engine draws it at the scale its L-point is drawn at (the geometric mean of the scales along and across the line from Earth), as a halo round the Sun-Earth line that turns with it, whatever its `kind`, leaning along the line by a third of its width (`prepareHalo` in `src/engine/scale.js`, `librationOffset` in `src/engine/orbits.js`). `M0` (°) sets where on the loop it is at J2000. |
| `orbit_type` | Absent for an ordinary `orbit`. Otherwise `landed`, `libration` (round L1 or L2; it was `lissajous`), `suborbital` or `trajectory`. |
| `trajectory` | For `trajectory` (a mission in transit, like JUICE): `{ "waypoints": [...], "arrival_orbit": {...} }`. Each waypoint is `{ "date": "YYYY-MM-DD", "at": "<body>", "label" }`: the craft passes just outside that body on that date, where this simulation has the body then. A waypoint can shape the leg arriving at it with `"revs"` (full loops round the Sun on the way; worked out from the time if left out) and `"extreme"` (the farthest or nearest distance from the Sun the leg reaches, in AU, placed on the same scale as the planets). After the last waypoint the craft is on `arrival_orbit` (an `orbit` round the last waypoint's body). The cruise is drawn as a line (the flyby points shape it but are not marked); after arrival, the orbit round the body instead. The last waypoint's `at` must be an object in the file (Hera's is the asteroid Didymos). |
| `landed_coords` | For `landed`: `{ "lat", "lon" }` on the parent. The lander is dropped onto the parent's surface (sphere or model) at that point. |
| `suborbital` | For `suborbital`: `{ "start_coords", "end_coords", "apogee_km", "duration_min", "progress" }`: launch and landing points, the highest point (km, drawn on the body's scale) and the flight's length in minutes; `progress` (0-1) holds the rocket at that point of its flight. |
| `lagrange` | `{ "body": "Earth", "point": "L1" }` or `"L2"`, for a `reference_point`: placed on the line from the Sun through the body, sunward (L1) or beyond (L2), at the edge of the body's Hill sphere, a × (m / 3M)^(1/3) from it (from `gm`: 1.5 million km for Earth), drawn on the body's scale. In place of an `orbit`. |
| `illustrative` | `true` on an `orbit`, `arrival_orbit`, `suborbital` or `landed_coords` with no published source behind it (or behind part of it): a stand-in until there is one. The mission guide shows it. |
| `rot_period` | Spin period in days, about `pole` (or the tilted +Y); negative spins backwards. `rot_offset` shifts its starting angle (°). Turned by the simulated date. An asteroid or comet without one gets an illustrative spin, the same every visit (`illustrativeSpin` in `src/engine/motion.js`: 5 to 19 hours, either way round, about a pole up to 60° off the ecliptic's when it has no `pole` or `tilt`). |
| `rotation_mode` | `"utc"`: spin to the real time of day instead of `rot_period` (Earth: longitude 0 faces the Sun at 12:00 UTC). `"spin"`: no longer needed (asteroids and comets all spin on `rot_period` now; they used to tumble), kept on Didymos. `"locked"`: tidally locked, keeping its +X face (longitude 0 on a textured sphere) towards its parent and +Y along its orbit's normal (the Moon, Dimorphos). |
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
| `menu_holder` | `"named"` puts an asteroid in the Honorary asteroids group instead of Mission asteroids. |
| `icon` | Menu icon, overriding the one chosen by type: `rover`, `lander`, `satellite`, `rocket`, `facility`, `planet`, `moon`, `sun`, `comet`, `asteroid`, `point`, `galaxy`. |

Asteroids and comets are gathered into groups by `type`: comets into Comets, asteroids into
Mission asteroids (the ones spacecraft visit), except those with `"menu_holder": "named"`, which go
into Honorary asteroids (asteroids named in honour of the OU and its people). Anything
landed on Earth is shown as a ground facility and isn't counted as a spacecraft on the splash.

## What still needs code

A new *kind* of behaviour, as opposed to a new object: a new `orbit_type`, a new rendering
effect, or a new menu grouping. The code also assumes the central star is named `Sun`.
