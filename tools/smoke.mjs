// Smoke test for the engine split (ENGINE-PLAN.md, Phase 0).
//
//   npm run smoke                 run, and compare the screenshots with smoke/baseline/
//   npm run smoke -- --baseline   run and save the result as the new baseline
//   npm run smoke -- --only=Sun   just these stops
//
// Starts its own Vite dev server, drives system Chrome on the real GPU, flies to a set of objects
// with the simulation date pinned (?date=) and the motion clock held (__ouniverse.holdMotion), and
// screenshots each one. Records console errors, GPU time per stop and the load marks, then runs
// Cinematic Mode for two cycles, then a few stops in True scale and one back in Diagram mode
// (--only=true for just those). Then the presentation (present.html with the demo): its opening
// view and each step, reached with the arrow key. Fails on a console error, a flight that doesn't finish, or a
// screenshot that differs from the baseline by more than DIFF_LIMIT, or a stop whose keyboard
// focus, announcement, details panel or current menu row differs from the baseline's.
import { createServer } from 'vite';
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 5199;
const PINNED_DATE = '2026-10-08T12:00:00Z';
const HELD_MOTION_TIME = 0;
const VIEWPORT = { width: 1920, height: 1080 };
const ALL_STOPS = ['Earth', 'Perseverance', 'Philae', 'Saturn', 'JUICE', 'ISS', 'Sun', 'Didymos', 'Mission asteroids'];
const CINEMATIC_CYCLES = 2;
// A pixel counts as changed when a channel moves by more than DIFF_LEVEL (0–255); a stop fails
// when more than DIFF_LIMIT of its pixels change.
const DIFF_LEVEL = 40;
const DIFF_LIMIT = 0.005;

const args = new Set(process.argv.slice(2));
// --only=Sun,Earth runs just those stops (for debugging the test itself).
const only = process.argv.find(a => a.startsWith('--only='))?.slice(7).split(',');
const STOPS = (only ?? ALL_STOPS).filter(name => name !== 'present' && name !== 'true');
// --only=present runs the presentation's steps; they run with any --only that names it, or none.
const runPresent = !only || only.includes('present');
// True scale's stops: likewise with --only=true.
const TRUE_STOPS = ['overview', 'Earth', 'ISS', 'Perseverance', 'JUICE'];
const runTrue = !only || only.includes('true');
const saveBaseline = args.has('--baseline');
const root = path.resolve('smoke');
const outDir = path.join(root, saveBaseline ? 'baseline' : 'latest');
const baselineDir = path.join(root, 'baseline');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const server = await createServer({ server: { port: PORT, strictPort: true }, logLevel: 'warn' });
await server.listen();
const base = server.config.base;
const url = `http://localhost:${PORT}${base}?date=${PINNED_DATE}`;
const presentUrl = `http://localhost:${PORT}${base}present.html?date=${PINNED_DATE}`;

const browser = await chromium.launch({
    executablePath: CHROME,
    headless: false,
    args: ['--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11', `--window-size=${VIEWPORT.width},${VIEWPORT.height + 140}`],
});
let page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
// The first-run coach comes and goes on its own timers: mark it seen.
await page.addInitScript(() => localStorage.setItem('ouniverse-coach-done', '1'));

const errors = [];
const listen = p => {
    p.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    p.on('pageerror', err => errors.push(String(err)));
};
listen(page);

const report = { date: new Date().toISOString(), url, viewport: VIEWPORT, stops: [], cinematic: null, marks: {}, errors };
const failures = [];
const app = (fn, arg) => page.evaluate(fn, arg);
// Resolves false on a timeout; any other failure (an error in the page function) is reported.
const waitFor = (fn, timeout, arg) => page.waitForFunction(fn, arg, { timeout, polling: 100 }).then(() => true, err => {
    if (!/Timeout/i.test(err.message)) console.warn(`  wait failed: ${err.message.split('\n')[0]}`);
    return false;
});

// Holds the motion clock and waits for the scene to settle, then records the stop's GPU time, its
// state (stateFn, run in the page) and a screenshot, leaving uncheckedFn's area out of the comparison.
async function capture(stop, stateFn, uncheckedFn) {
    await app(t => window.__ouniverse.holdMotion(t), HELD_MOTION_TIME);
    await page.waitForTimeout(1500); // detail levels and landers settle
    if (!await waitForStill()) stop.warning = 'camera still moving';
    await app(() => { window.__ouniverse.resolution.gpu.length = 0; });
    await page.waitForTimeout(1500);
    stop.gpuMs = await app(() => {
        const s = [...window.__ouniverse.resolution.gpu].sort((a, b) => a - b);
        return s.length ? +s[s.length >> 1].toFixed(2) : null;
    });
    stop.file = `${String(report.stops.length + 1).padStart(2, '0')}-${stop.name.toLowerCase().replace(/\W+/g, '-')}.png`;
    stop.state = await app(stateFn);
    await page.screenshot({ path: path.join(outDir, stop.file) });
    stop.unchecked = uncheckedFn ? await app(uncheckedFn) : null;
    await app(() => window.__ouniverse.holdMotion(null));
    report.stops.push(stop);
    console.log(`${stop.name.padEnd(18)} ${stop.flew ? 'flew' : 'no flight'}, ${((stop.arriveMs ?? 0) / 1000).toFixed(1)} s, GPU ${stop.gpuMs ?? '–'} ms${stop.warning ? `, ${stop.warning}` : ''}`);
}

// Wait until the camera has stopped moving (relative to its distance from the target).
async function waitForStill(timeout = 15000) {
    return waitFor(() => {
        const { camera, controls } = window.__ouniverse;
        const p = camera.position;
        const s = window.__smokeStill ||= { last: p.clone(), turn: camera.quaternion.clone(), calm: 0 };
        const moved = p.distanceTo(s.last) / Math.max(1e-6, p.distanceTo(controls.target));
        const turned = s.turn.angleTo(camera.quaternion);
        s.last.copy(p);
        s.turn.copy(camera.quaternion);
        s.calm = moved < 1e-5 && turned < 1e-5 ? s.calm + 1 : 0;
        if (s.calm < 5) return false;
        delete window.__smokeStill;
        return true;
    }, timeout);
}

try {
    const t0 = Date.now();
    await page.goto(url, { waitUntil: 'commit', timeout: 120000 });   // then scene-ready, below
    if (!await waitFor(() => performance.getEntriesByName('scene-ready').length, 120000)) throw new Error('scene-ready never came');
    report.sceneReadyWallMs = Date.now() - t0;
    // Full resolution throughout, so screenshots and GPU times compare.
    await app(() => { window.__ouniverse.resolution.changedAt = 1e15; });
    await page.click('#splash-start');
    // Park the pointer on the title, where it can't hover anything in the scene or the menu.
    await page.mouse.move(60, 30);
    await page.waitForTimeout(3000);
    await waitFor(() => !window.__ouniverse.isTransitioning, 30000);

    for (const name of STOPS) {
        const stop = { name };
        const start = Date.now();
        const clicked = await page.evaluate(n => {
            const li = [...document.querySelectorAll('#mission-list li.menu-item')].find(item => item.dataset.name === n);
            const btn = li?.querySelector('button.mission-btn');
            btn?.click();
            return Boolean(btn);
        }, name);
        if (!clicked) { failures.push(`${name}: no menu row`); stop.error = 'no menu row'; report.stops.push(stop); continue; }
        // Landers fly only once their body has loaded; a holder may not fly at all.
        stop.flew = await waitFor(() => window.__ouniverse.isTransitioning, 60000);
        const arrived = await waitFor(() => !window.__ouniverse.isTransitioning, 90000);
        stop.arriveMs = Date.now() - start;
        if (!arrived) { failures.push(`${name}: flight never finished`); stop.error = 'flight never finished'; }
        stop.selected = await app(() => document.getElementById('info-title')?.textContent ?? null);

        // What a screenshot can't show: where keyboard focus is and what was announced. Where the
        // menu list lands when it scrolls to the selection depends on whether a group is still
        // opening, so its area is left out of the comparison (it stays in the screenshot).
        await capture(stop, () => ({
            focus: document.activeElement?.id || document.activeElement?.className || null,
            announced: document.getElementById('announcer')?.textContent ?? null,
            sidebar: document.getElementById('sidebar')?.classList.contains('active') ?? null,
            menuCurrent: document.querySelector('#mission-list [aria-current]')?.textContent?.trim() ?? null,
        }), () => {
            const r = document.getElementById('mission-list')?.getBoundingClientRect();
            return r ? { x: Math.floor(r.left), y: Math.floor(r.top), w: Math.ceil(r.width), h: Math.ceil(r.height) } : null;
        });
    }

    // Cinematic Mode: count arrivals until it has visited CINEMATIC_CYCLES missions.
    const cine = { visits: [] };
    await page.click('#cinematic-btn');
    for (let i = 0; i < CINEMATIC_CYCLES; i++) {
        const started = await waitFor(() => window.__ouniverse.isTransitioning, 40000);
        const done = started && await waitFor(() => !window.__ouniverse.isTransitioning, 90000);
        const visited = await app(() => document.getElementById('info-title')?.textContent ?? null);
        cine.visits.push(visited);
        if (!done) { failures.push(`cinematic cycle ${i + 1} never finished`); break; }
    }
    cine.active = await app(() => document.body.classList.contains('is-cinematic'));
    if (!cine.active) failures.push('cinematic mode stopped by itself');
    await page.click('#cinematic-btn');
    report.cinematic = cine;
    console.log(`Cinematic          visited ${cine.visits.join(', ')}`);

    // True scale (SCALE-PLAN.md): its Solar System view and a few stops, flown to in that mode,
    // then back to Diagram mode, which must look as it did.
    if (runTrue) {
        await app(() => window.__ouniverse.engine.setScaleMode('true'));
        for (const name of TRUE_STOPS) {
            const stop = { name: `true ${name}` };
            const start = Date.now();
            await app(n => { if (n === 'overview') window.__ouniverse.engine.showOverview(); else window.__ouniverse.engine.flyTo(n); }, name);
            stop.flew = await waitFor(() => window.__ouniverse.isTransitioning, 60000);
            const arrived = await waitFor(() => !window.__ouniverse.isTransitioning, 90000);
            stop.arriveMs = Date.now() - start;
            if (!arrived) { failures.push(`${stop.name}: flight never finished`); stop.error = 'flight never finished'; }
            await capture(stop, () => ({ mode: window.__ouniverse.engine.getScaleMode() }), () => {
                const r = document.getElementById('mission-list')?.getBoundingClientRect();
                return r ? { x: Math.floor(r.left), y: Math.floor(r.top), w: Math.ceil(r.width), h: Math.ceil(r.height) } : null;
            });
        }
        await app(() => window.__ouniverse.engine.setScaleMode('diagram'));
        const back = { name: 'diagram again ISS' };
        const backStart = Date.now();
        await app(() => { window.__ouniverse.engine.flyTo('ISS'); });   // not awaiting the arrival here
        back.flew = await waitFor(() => window.__ouniverse.isTransitioning, 60000);
        if (!await waitFor(() => !window.__ouniverse.isTransitioning, 90000)) failures.push(`${back.name}: flight never finished`);
        back.arriveMs = Date.now() - backStart;
        await capture(back, () => ({ mode: window.__ouniverse.engine.getScaleMode() }), () => {
            const r = document.getElementById('mission-list')?.getBoundingClientRect();
            return r ? { x: Math.floor(r.left), y: Math.floor(r.top), w: Math.ceil(r.width), h: Math.ceil(r.height) } : null;
        });
    }

    await waitFor(() => performance.getEntriesByName('sky-ready').length, 30000);
    report.marks = await app(() => Object.fromEntries(performance.getEntriesByType('mark').map(m => [m.name, Math.round(m.startTime)])));
    console.log('Marks             ', Object.entries(report.marks).map(([k, v]) => `${k} ${v} ms`).join(', '));
} catch (err) {
    failures.push(`run stopped: ${err.message}`);
}

// The presentation: its opening view, then each step of the demo, reached with the arrow key.
if (runPresent) {
    try {
        await page.close();
        page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 });
        listen(page);
        await page.goto(presentUrl, { waitUntil: 'commit', timeout: 120000 });
        if (!await waitFor(() => !document.getElementById('present-bar').hidden, 120000)) throw new Error('the presentation never became ready');
        await app(() => { window.__ouniverse.resolution.changedAt = 1e15; });
        await page.mouse.move(VIEWPORT.width / 2, 30);
        await page.waitForTimeout(1500); // the loading cover fades
        const steps = await app(() => fetch('./presentations/demo.json').then(r => r.json()).then(d => d.steps.length));
        for (let i = 0; i <= steps; i++) {
            const stop = { name: `present ${i}` };
            if (i > 0) {
                const start = Date.now();
                await page.keyboard.press('ArrowRight');
                stop.flew = await waitFor(() => window.__ouniverse.isTransitioning, 60000);
                const arrived = await waitFor(() => !window.__ouniverse.isTransitioning, 90000);
                stop.arriveMs = Date.now() - start;
                if (!arrived) { failures.push(`${stop.name}: flight never finished`); stop.error = 'flight never finished'; }
            }
            await capture(stop, () => ({
                where: document.querySelector('.present-where')?.textContent.trim() ?? null,
                announced: document.getElementById('present-announcer')?.textContent ?? null,
            }));
        }
    } catch (err) {
        failures.push(`presentation stopped: ${err.message}`);
    }
}

// Compare with the baseline in the browser (no image libraries needed).
if (!saveBaseline && fs.existsSync(baselineDir)) {
    const cmp = await browser.newPage();
    const baseReport = JSON.parse(fs.readFileSync(path.join(baselineDir, 'report.json'), 'utf8'));
    for (const stop of report.stops) {
        const baseState = baseReport.stops.find(s => s.name === stop.name)?.state;
        if (baseState && JSON.stringify(baseState) !== JSON.stringify(stop.state)) {
            failures.push(`${stop.name}: state differs from the baseline: ${JSON.stringify(stop.state)}, was ${JSON.stringify(baseState)}`);
        }
        // The baseline's screenshot of the same stop, by name: files are numbered by run order, so
        // with --only the numbers differ.
        const baseFile = baseReport.stops.find(s => s.name === stop.name)?.file;
        const ref = path.join(baselineDir, baseFile ?? '');
        const cur = path.join(outDir, stop.file ?? '');
        if (!stop.file || !fs.existsSync(cur)) continue;
        if (!baseFile || !fs.existsSync(ref)) { failures.push(`${stop.name}: no baseline screenshot to compare with`); continue; }
        const toUrl = file => `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;
        stop.diff = await cmp.evaluate(async ([a, b, level, skip, limit]) => {
            const load = src => new Promise((res, rej) => { const img = new Image(); img.onload = () => res(img); img.onerror = rej; img.src = src; });
            const [ia, ib] = await Promise.all([load(a), load(b)]);
            if (ia.width !== ib.width || ia.height !== ib.height) return { changed: 1 };
            const read = img => {
                const c = new OffscreenCanvas(img.width, img.height);
                const ctx = c.getContext('2d');
                ctx.drawImage(img, 0, 0);
                return ctx.getImageData(0, 0, img.width, img.height).data;
            };
            const da = read(ia), db = read(ib);
            const w = ia.width;
            const marks = new ImageData(w, ia.height);
            let changed = 0, counted = 0;
            for (let i = 0; i < da.length; i += 4) {
                const x = (i >> 2) % w, y = Math.floor((i >> 2) / w);
                if (skip && x >= skip.x && x < skip.x + skip.w && y >= skip.y && y < skip.y + skip.h) continue;
                counted++;
                const v = (da[i] + da[i + 1] + da[i + 2]) / 12;
                marks.data.set([v, v, v, 255], i);
                if (Math.abs(da[i] - db[i]) > level || Math.abs(da[i + 1] - db[i + 1]) > level || Math.abs(da[i + 2] - db[i + 2]) > level) {
                    changed++;
                    marks.data.set([255, 40, 40, 255], i);
                }
            }
            const result = { changed: changed / counted };
            if (result.changed > limit) {
                // A dimmed copy of the baseline with the changed pixels in red.
                const c = new OffscreenCanvas(w, ia.height);
                c.getContext('2d').putImageData(marks, 0, 0);
                const blob = await c.convertToBlob();
                result.image = [...new Uint8Array(await blob.arrayBuffer())];
            }
            return result;
        }, [toUrl(ref), toUrl(cur), DIFF_LEVEL, stop.unchecked, DIFF_LIMIT]);
        if (stop.diff.image) {
            fs.writeFileSync(cur.replace(/\.png$/, '-diff.png'), Buffer.from(stop.diff.image));
            delete stop.diff.image;
        }
        const pct = (stop.diff.changed * 100).toFixed(2);
        console.log(`diff ${stop.name.padEnd(18)} ${pct}% of pixels changed`);
        if (stop.diff.changed > DIFF_LIMIT) failures.push(`${stop.name}: ${pct}% of pixels differ from the baseline`);
    }
} else if (!saveBaseline) {
    console.log('No baseline yet: run `npm run smoke -- --baseline` on main first.');
}

if (errors.length) failures.push(`${errors.length} console error(s)`);
report.failures = failures;
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
await browser.close();
await server.close();

if (errors.length) console.log('\nConsole errors:\n' + errors.map(e => `  ${e}`).join('\n'));
console.log(failures.length ? `\nFAILED:\n${failures.map(f => `  ${f}`).join('\n')}` : '\nPassed.');
console.log(`Screenshots and report: ${path.relative(process.cwd(), outDir)}`);
process.exit(failures.length ? 1 : 0);
