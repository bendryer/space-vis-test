# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

OUniverse: a browser-based interactive 3D solar system explorer built with **Three.js** and **Vite**, no other framework (plain JS, `"type": "module"`, no TypeScript). `index.html` loads `src/main.js` (~2000+ lines), which renders the Sun, planets, moons, asteroids, comets, and real space missions/spacecraft — many tied to Open University research — using GLTF/GLB models (with DRACO compression and LOD swapping), Keplerian orbital mechanics, custom GLSL shaders, and a cinematic auto-tour camera mode. It's a single-page, single-app project, not a monorepo.

`src/counter.js` and `src/javascript.svg` are unused Vite-scaffold leftovers, not imported anywhere.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (runs before `deploy` via `predeploy`)
- `npm run preview` — preview a production build locally
- `npm run deploy` — build and publish `dist/` to GitHub Pages via `gh-pages`
- `npm run lint` — ESLint (flat config). There are no tests.

`npm run build` opens a bundle report in the browser (`rollup-plugin-visualizer` with `open: true`).

Design work happens in the sibling `../space-vis-design` sandbox, which shares this `public/` folder; finished changes to `index.html`, `src/main.js`, `src/style.css`, `src/sun.js` and `src/sun/*.glsl` are copied back here, with `DATA.md`.

## Data files

`public/data.json` is the canonical mission/celestial-body dataset — treat it as the source of truth. `public/data_pippa.json` is a colleague's variant that added descriptions for each object; `data.json` is intended to be the merged result pulling in that work, but the merge should be double-checked rather than assumed complete for any given entry. The two things this data concentrates on per mission/body are the **Open University's involvement** and the **science that OU academics are interested in** — prioritize getting those fields right over other content.

`DATA.md` documents every field the code reads. Objects, their models, orbits (including a mission's cruise `trajectory`), spacecraft motion and menu placement are all driven from `data.json`; adding or changing an object shouldn't need a code change.

## Deploy path gotcha

`vite.config.js` sets `base:` to a repo-name path for GitHub Pages deployment — confirm this matches the actual target repo name before deploying, it's easy for it to drift out of sync. Asset paths in `data.json`/code use a leading `/` (e.g. `/textures/...`, `/models/...`); `main.js` has a `fixPath()` helper that strips the leading slash so loaders resolve correctly relative to `base`. Keep new asset references consistent with this pattern rather than hardcoding root-relative paths.

## Asset handling

3D models (`public/models/*.glb`, `*.stl`) and mission images (`public/images/*`) are committed to git normally alongside code changes — don't treat large binary assets in `public/` as something to gitignore or exclude.

Web-ready derivatives live beside the sources, and a changed source needs its derivative regenerated:
- `public/images/web/<name>.webp`: sidebar copies of each science image (at most 1600px on the long side). The app loads these first and falls back to the original.
- `public/textures/milky_way_{px,nx,py,ny,pz,nz}.ktx2`: the sky as a GPU-compressed cube map (UASTC), baked from `milky_way.jpg`, which stays as a fallback.
- `public/models/*.glb` (and `*-low.glb`) were simplified with gltf-transform. The untouched originals are in `model-originals/` (outside `public/`).
- `public/draco/` and `public/basis/` are decoders copied from three's `examples/jsm/libs`; update them when `three` is upgraded. Lint ignores them.

`USE_NAMED_ASTEROID_MODELS` in `main.js` is a deliberate privacy toggle: when `true`, asteroids use their `model_named` (custom OU-researcher-named models such as `Grady.glb`, `Pillinger.glb`) instead of their generic `model`. Don't flip this without confirming it's intended — it affects whether researcher names are exposed in the build.

## Workflow

Commits go directly to `main` — there's no branch/PR process for this repo.
