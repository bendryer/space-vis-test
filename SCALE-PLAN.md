# Scale modes plan

Agreed 2026-10-11 (decisions below). Goal: two ways of drawing the same real data, with a switch between them.

- **True scale:** every size and distance on one linear scale, spacecraft included. It shows how big the Solar System is, and how small human technology is beside it.
- **Diagram:** sizes and distances adjusted so everything is easy to see and get to, while keeping the essence of the truth. Bodies and orbits stay in their real order and proportions where they can. One body's system never reaches into another's. Today's view becomes this mode, with its faults fixed.

`data.json` holds only real values (km, AU, metres, degrees, days). Each mode is a set of rules that turns those values into scene units. A per-object diagram override is allowed only where no rule can do it.

## What's wrong today (to fix in Diagram mode)

- The Moon's orbit comes within about 90 units of Venus's. The Earth-Sun L1 point (222 units sunward of Earth) sits almost on Venus's orbit (L1 at 778, Venus at 760). The cause: distances round a planet are compressed on their own, without regard to how far it is to the next planet.
- Selecting Earth frames out to the Moon, so Earth is tiny.
- Hayabusa2 sits 12.6 units out from Ryugu, and Stardust 19.7 units from Wild 2, so each small body looks tiny when selected.
- Spacecraft sizes, the Lissajous orbits round L1 and L2, and OGRE's flight are still made-up scene-unit values, with no real ones behind them.

## Ground rules

1. **Data is real; drawing is a rule.** No object-specific numbers in code (as now). Overrides go in an object's `diagram` block, with a reason.
2. **One switch, one place.** `engine.setScaleMode('true' | 'diagram')`. Every size, distance, framing and flight constant comes from the active mode, never from a fixed number in the code.
3. **Steps as before:** each stage is on a branch, then lint, build and smoke test. Diagram mode must look right on its own before True scale depends on it.
4. **Diagram mode is the safe default** until True scale has been checked on weak hardware and on phones.

## Scene units

Both modes keep **Earth's radius at 5 units**. Everything measured in planet radii stays the same in both modes: shadow reach, landing, framing a body, the selection spotlight.

| | Diagram | True scale (1 unit = 1,274.2 km) |
|---|---|---|
| Earth radius | 5 | 5 |
| Sun radius | 25 | 546 |
| 1 AU | 1,000 (log-compressed) | 117,400 |
| Neptune's distance | about 6,000 | 3.53 million |
| Moon's distance | Hill-sphere rule, below | 302 |
| ISS (109 m long) | 0.3 | 0.000086 |
| Bennu (0.5 km) | about 0.9 | 0.0004 |
| Perseverance (3 m) | 0.2 | 0.0000024 |

## Engine work for True scale

### Precision: render relative to the camera

JavaScript works in doubles, and three.js keeps its matrices in plain arrays, so the engine's own logic (positions, framing, reticles, picking) works at any distance. The trouble is on the GPU, in float32. Shadow maps, the Sun's shaders and the atmosphere work from world positions, and 1 AU out a float32 world position is only good to about 0.01 units (16 km). That's far too coarse beside a craft 0.0001 units long.

- **Fix:** put every object under one `world` group. Just before each render, shift `world` by minus the camera's position and put the camera at the origin. Shift both back after the render.
  - The rest of the engine keeps absolute coordinates and never sees the shift.
  - Things are only ever shifted, never re-parented, so this works in both modes.
- **Check:** the orbit lines' vertices stay in float32 relative to their parent. Near Neptune that's about 0.2 units (Neptune's radius is 19.4 units), which is acceptable.

### Depth

Near objects can be 1e-5 units from the camera, and far ones 3.5 million. three r181 has `reversedDepthBuffer` (it needs `EXT_clip_control`), which with a float depth buffer handles that whole range.

- Fall back to `logarithmicDepthBuffer` where the reversed depth buffer isn't supported.
- The custom ShaderMaterials (`sun.js`, `bodies.js`, `models.js`) need the matching depth chunks.
- Set the camera's near plane each frame: a small fraction of the distance to the nearest surface or craft.

### Constants

The scene-unit numbers in code need going through. Each one becomes a property of the mode, or is measured relative to the body in question:

- `camera` near and far (0.1, 1e6)
- `estimateFlightDuration`'s 15,000
- `SUN_SHADOW_REACH`'s floor of 180
- `MISSION_MODEL_SIZE`
- `ORBIT_LINE_MAX_SAG`
- `SOLAR_SYSTEM_VIEW_*`
- the starting camera position
- `controls.maxDistance`
- the reticle and culling pixel thresholds (these are already in pixels)

### Markers

In True scale almost everything is smaller than a pixel. Below about 3 px, a body or craft is drawn as a dot with its name, in the style of the reticles; the dot is what gets hovered and picked.

- This is a new feature module (`src/features/markers/`), so either app can use it.
- Orbit lines stay visible, since lines are drawn in pixels: they become the main way to see where things are in True scale.
- Culling (`visibility.js`) keeps loading models by projected size, as now. In True scale a craft's model loads only when it's close.

### Flights across powers of ten

A flight from Earth to Neptune covers 3.5 million units; one from the ISS to Earth, 5.

- Plan a flight on the logarithm of the camera's distance from its target: climb out, travel, then come down. Its length should follow the log of the distance ratio, not the straight-line distance.
- The cinematic tour and presentations keep their own pacing multipliers.

### Framing

A selected body is framed on itself, with a minimum on-screen size. It is no longer framed on its whole system.

- Moons and craft outside the view are shown by their markers.
- This applies to both modes, and fixes "Earth is tiny".
- Each holder row (Mission asteroids, Comets…) keeps framing its group.

### The switch

`setScaleMode` works out every object's drawn radius, model scale and orbit scale again. It then redraws the orbit lines, re-seats the landers (`relandLanders`) and frames the selected object again.

- **Recommended:** animate the change over about 2 seconds, interpolating each factor on a log scale, so the Solar System visibly grows or shrinks.
- The simple version (cut, then re-frame) comes first; the animated change is a later stage.

## Diagram mode rules

- **Sun and planets round the Sun:** keep today's scale (log compression, 1 AU = 1,000, Sun 25, planets 5·(r/6371)^0.62). It's already true in order and in eccentricity, and the planets are within reach.
- **Round a planet: bounded by its Hill sphere.**
  - The Hill radius, r_H = a(1−e)·(m/3M)^(1/3), is where the planet's pull gives way to the Sun's. Earth's is 1.5 million km, and the Earth-Sun L1 and L2 points sit at its edge.
  - In Diagram mode, each planet's Hill sphere is drawn at a fixed fraction (about 0.35) of the drawn gap to its nearest neighbouring orbit. Every orbit inside it is log-compressed between the drawn surface and that edge.
  - So Earth's system ends well short of Venus's orbit, and L1 and L2 sit at its edge on both sides.
  - The Moon's distance follows its true share of the Hill sphere (about 0.26), as compressed by the log.
  - Today's knee rule (`SATELLITE_KNEE_KM`) still applies close in, so low orbits stay at their true height. The drawn distance is the smaller of the two rules.
- **Round a small body:** the same, with the small body's own Hill sphere, plus a cap of a few drawn radii. Hayabusa2 and Stardust then sit near Ryugu and Wild 2.
- **Spacecraft:** stay at `MISSION_MODEL_SIZE` (0.3 units), so all of them can be seen.
- **Lissajous orbits** round L1 and L2: their real amplitudes, compressed on the same Hill-sphere scale.

## Additions to `data.json`

| Field | On | What | Used by |
|---|---|---|---|
| `size_m` | every mission | Longest dimension in metres, with solar panels and antennas deployed (the ISS's truss is 109 m; Perseverance is 3 m). | True-scale model size |
| `gm` | Sun, planets, moons, Didymos | GM in km³/s² (JPL). | Hill spheres, and an orbit's `rate` where none is given |
| `ring.inner_km`, `ring.outer_km` | Saturn | 74,658 and 136,775 km (C ring to A ring), in place of radii multiples. | Both modes |
| `lagrange` | Earth-Sun L1 and L2 | `{ "body": "Earth", "point": "L1" }`. Placed on the Sun-Earth line at the Hill radius, so its real distance (1.5 million km) comes from Earth's mass. It replaces the Earth-copy orbit with a scene-unit `a`. | Both modes |
| `orbit.amplitude_km` `{ "y", "z" }`, `orbit.period_days` | the 12 Lissajous missions | Real halo or Lissajous size and period (Gaia's is about 340,000 × 90,000 km, roughly 180 days). Where a mission is only planned, mark the values `illustrative`. | Both modes |
| `suborbital.apogee_km`, `suborbital.duration_min` | OGRE | The real flight profile, in place of `apogee` 1.5 and `duration` 0.05. | Both modes |
| `diagram` | rare | Per-object Diagram-mode overrides, with a `reason`. For example: `{ "a_km": 40, "reason": "Hayabusa2's 20 km hover drawn closer" }` if the rule isn't enough. | Diagram |
| `illustrative: true` | on any value block | Marks values with no published source (LightShip-1, CASTOR, the arrival orbits…), so the mission guide and fact check can flag them. | Guide, fact check |
| step `scale` | `public/presentations/*.json` | `"true"` or `"diagram"`, so a talk can switch at a chosen step. | Present app |

Removed once the engine stops reading them:
- the natural bodies' `radius` and `model_scale` (already done)
- spacecraft `model_scale` and `radius` (Diagram mode sets them from the mode)
- the Lissajous `a`
- L1 and L2's `orbit`

## Data audit (alongside stage 1)

Check every object against its source, recording each in `factcheck/sources.json` (the `factcheck-data` skill):

- **Planets:** done (JPL Table 1, IAU poles).
- **Moons:** done (JPL satellite elements, checked against Horizons). Add `gm`.
- **Asteroids and comets:** all 28 have full elements. Check each epoch's `M0` and `rate` against SBDB, and `radius_km`, `rot_period` and pole against the shape-model papers. Seven honorary asteroid sizes are estimates (`radius_estimated`).
- **Spacecraft orbits:** the uncertain ones are listed in the last report (Hubble, Swift, UKube-1, CASTOR, LightShip-1, EnVision, SMILE, Rosetta, OSIRIS-REx, the JUICE and Hera arrival orbits, Dimorphos `a`). Spitzer's Earth-trailing orbit (`a_au` 1.025, `rate` 0.95) needs checking against JPL.
- **Spacecraft sizes (`size_m`):** all 48 missions, from ESA, NASA and JAXA fact sheets.
- **Lissajous and halo orbits:** JWST, Gaia, Euclid, PLATO, NewAthena, HWO, SOHO and the rest. Use published amplitudes, or illustrative values for missions still planned.
- **Landers:** check `landed_coords` against published landing sites.

## Stages

0. ✅ **Commit the current branch** (`feature/satellite-orbits`): real sizes, real orbits round bodies, and the `scale.js` and `satelliteDistance` foundation. Diagram mode builds on it.
1. ✅ **Data:** the additions above, plus the audit. The engine reads the new fields (L1/L2 from `lagrange`, Lissajous and OGRE in km) on today's scale, so nothing else changes yet.
2. ✅ **Diagram mode fixes:** the Hill-sphere rule, framing on the body itself, and the small-body cap. Fixes the Moon and L1 near Venus, Earth looking tiny, and Hayabusa2/Stardust. Retake the smoke baseline once this is agreed.
3. ✅ **Scale-mode switch in the engine:** `setScaleMode`, the mode objects, and the constants audit, with only Diagram mode wired up. The smoke test must show nothing visible changed.
4. **Precision and depth:** rendering relative to the camera, the reversed depth buffer (log depth as the fallback), and a dynamic near plane. Nothing visible changes in Diagram mode.
5. **True scale mode:** the linear rules, markers, log-distance flights, framing, and craft drawn at `size_m`. Smoke-test stops in True scale, and checks on weak hardware.
6. **The switch in the UI:** a toggle in the showcase (desktop and phone layouts, to `DESIGN.md`), the presentation step `scale`, and `ENGINE.md`, `DATA.md` and `CLAUDE.md` updated.
7. **Animated change** between the modes (optional).

## Decisions (agreed 2026-10-11)

1. **On load:** Diagram mode.
2. **True scale is true for everything:** spacecraft and landers are drawn at their real size, seen up close and as markers further out. To be tried, then revisited if it doesn't work.
3. **The switch:** cut to the new scale first; the animated change comes later (stage 7).
4. **True scale's Solar System view:** the whole system out to Neptune, with the planets as markers. Can be changed later.
5. **A selected planet fills the view,** framed on itself and not its system (its moons would be too far away). This applies to both modes.
