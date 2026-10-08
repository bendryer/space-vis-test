---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/style.css","src/main.js"]
---

# OUniverse app (index.html)

Mode: Experience. The 3D Solar System leads and the chrome recedes. Audience: stakeholders, either watching a presenter or opening a shared link cold. The design scales fluidly for both.

Reference system: the Design System artifact "OUniverse Instrument Plate" (https://claude.ai/artifact/7cPFpQuCtt7241ziEqtjB5), confirmed 2026-09-28. Its source is staged in `.impeccable/ds-artifact/project/` (untracked). Where it and the code differ, DESIGN.md follows the code.

Unresolved: nothing open (the phone layout was built later; see below).

## Current status (2026-09-28)

**Done and documented.** The OU restyle is built in `index.html`, `src/style.css` and `src/main.js`. The finish review said ship after six fixes, and DESIGN.md plus `.impeccable/design.json` record the system. Lint passes. Nothing is committed yet (branch master), and nothing is ported to `../space-vis` yet.

What's in the build:
- Core blue plates with the shield corner, Poppins, and OU light blue as the one accent, at the app's existing compact sizes.
- Status dots with the data's own word: operating OU green, planned yellow, ended pink. The menu tags only planned and ended.
- The portal-O mark before "Open University Involvement".
- The header "Explore the OUniverse" with "Simulated time · 28 Sep 2026, 18:45:03 UTC". The white OU logo stays bottom-left (the user's choice).
- The splash: the world in the mid-blue-to-lilac gradient, and the orbit drawing in green to light blue.
- The reticle, changed after the review at the user's request. It shows only while an object is hovered in the Explore menu: a ring, a 45° leader and a name tab. Choosing that object flashes the ring to the OU gradient, swells it away, retracts the leader and slides the tab off (0.52s). No reticle stays on the selected object. Headless Chrome can't play the animation, so the user should confirm it looks right in a real browser.

**Data (`../space-vis/public/data.json`, shared and uncommitted).** Statuses were corrected with the user on 2026-09-28:
- Earth-Sun L1 and L2 are Natural.
- Gaia and Swift are Decommissioned.
- Peregrine is Lost.
- Hayabusa2 and OSIRIS-REx are En Route (extended missions).
- SMILE's launch year is 2026.
- BepiColombo stays Operational.
- ZefERO, LightShip-1 and OGRE are Planned.

The descriptions weren't rewritten, and some may still imply the old statuses.

**Since then (2026-10-08):** the phone layout was built (dock, Explore sheet, details sheet), everything was deployed, and the design sandbox (`../space-vis-design`) was retired. Design work now happens on branches in this repo.

**Known limits:**
- The detector's "flat-type-hierarchy" hit on `index.html` is a false positive (it reads the HTML without the CSS).
- The selected-state gradient is subtle, because OU green and light blue are close.

## Direction contract

THESIS: the current compact app in OU dress. The scene is the specimen, and the chrome is a small, precise OU plate. It refuses both the neon sci-fi HUD and the large, bubbly OU-website look.

OWN-WORLD: Core blue #060645 plates at 90% with Core blue tint hairlines (#A6B5F8 at 20%). Each plate has a squared 2px top-left shield corner and 10px on the others. Poppins. OU light blue #66EEFA is the single accent. The OU green to light blue gradient appears only in a 14px portal-O mark and the reticle's exit flash; mid blue to lilac only on the splash world. Status dots are OU green (operating), yellow (planned) and pink (ended).

STORY: a visitor sees the OU's Solar System, picks a body from a compact Explore list or from the scene, and reads the OU's role first.

FIRST VIEWPORT: the full-bleed scene. "Explore the OUniverse" and the simulated UTC clock sit top-left. The Explore plate (256px) sits below it. The controls plate is bottom-right, and the white OU logo is bottom-left at 40px. Hovering a menu row marks the body with a ring, leader and name tab; choosing it swipes the mark away and flies to the object, opening the 350px details panel.

FORM: the assigned direction (Editorial OU · Instrument Plate), revised by the user to keep today's compact sizes. It was candidate 7 on the ordered list. Seed key fea9e2df. Build path: code-led.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
