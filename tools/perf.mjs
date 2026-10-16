// Frame-time benchmark: drives system Chrome on the real GPU through a fixed tour of the showcase
// and reports, per scene, how long frames took (the gap between frames, and the CPU time of the
// frame callback) and the GPU time of the main render, plus the functions that took the most CPU
// time over the whole run.
//
//   node tools/perf.mjs                 the tour at full speed
//   node tools/perf.mjs --cpu=4         with the CPU slowed 4x (a weaker laptop)
//   node tools/perf.mjs --viewport=390x844@3   a phone's screen
//   node tools/perf.mjs --json=out.json        also save the numbers
//   node tools/perf.mjs --profile='true: at Earth'   CPU profile of just that scene
//
// Starts its own Vite dev server (port 5198). Full resolution is pinned while measuring (the app
// would otherwise drop it on a slow GPU, hiding the cost). Dev build: per-frame costs match a
// production build closely; load times don't (time those against `npm run preview`).
import { createServer } from 'vite';
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 5198;
const DATE = '2026-10-08T12:00:00Z';
const arg = name => process.argv.find(a => a.startsWith(`--${name}=`))?.split('=')[1];
const cpu = Number(arg('cpu') || 1);
const [vw, vh, dpr] = (arg('viewport') || '1920x1080@1').split(/[x@]/).map(Number);
const jsonOut = arg('json');
// --profile=scene,scene: where the CPU time went in just those scenes (else over the whole run).
const profileScenes = (arg('profile') || '').split(',').filter(Boolean);

const server = await createServer({ server: { port: PORT, strictPort: true }, logLevel: 'warn' });
await server.listen();
const url = `http://localhost:${PORT}${server.config.base}?date=${DATE}`;
const browser = await chromium.launch({ executablePath: CHROME, headless: false,
    args: ['--enable-gpu', '--ignore-gpu-blocklist', '--use-angle=d3d11', `--window-size=${vw},${vh + 140}`] });
const page = await browser.newPage({ viewport: { width: vw, height: vh }, deviceScaleFactor: dpr || 1,
    isMobile: vw < 700, hasTouch: vw < 700 });
await page.addInitScript(() => {
    localStorage.setItem('ouniverse-coach-done', '1');
    // Time every frame: the gap since the last one, and the CPU time of all its callbacks (several
    // run each frame; they share its timestamp).
    const rec = window.__perf = { on: false, gaps: [], work: [], last: 0, hitches: [], prev: null };
    // What the renderer gained since the last frame: new shader programs, textures, geometries.
    const counts = () => {
        const info = window.__ouniverse?.renderer?.info;
        return info ? [info.programs?.length || 0, info.memory.textures, info.memory.geometries] : [0, 0, 0];
    };
    const raf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = cb => raf(t => {
        const s = performance.now();
        cb(t);
        if (!rec.on) return;
        const e = performance.now();
        if (t !== rec.last) {
            const c = counts();
            if (rec.last) {
                rec.gaps.push(t - rec.last);
                if (t - rec.last > 40 && rec.prev) rec.hitches.push(`${Math.round(t - rec.last)}ms` +
                    ` +${c[0] - rec.prev[0]}prog +${c[1] - rec.prev[1]}tex +${c[2] - rec.prev[2]}geo work${Math.round(rec.work.at(-1) || 0)}`);
            }
            rec.prev = c;
            rec.last = t;
            rec.work.push(0);
        }
        rec.work[rec.work.length - 1] += e - s;
    });
});
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

const cdp = await page.context().newCDPSession(page);
await page.goto(url);
await page.waitForFunction(() => !document.getElementById('splash-start')?.disabled, null, { timeout: 120000 });
await page.click('#splash-start');
await page.waitForTimeout(7000);
await page.evaluate(() => { window.__ouniverse.resolution.changedAt = 1e15; });
if (cpu > 1) await cdp.send('Emulation.setCPUThrottlingRate', { rate: cpu });
await cdp.send('Profiler.enable');
await cdp.send('Profiler.setSamplingInterval', { interval: 200 });
if (!profileScenes.length) await cdp.send('Profiler.start');

const settle = async () => {
    await page.waitForFunction(() => window.__ouniverse.isTransitioning, null, { timeout: 3000 }).catch(() => {});
    await page.waitForFunction(() => !window.__ouniverse.isTransitioning, null, { timeout: 60000 }).catch(() => {});
};
const pick = name => page.evaluate(n => document.querySelector(`li.menu-item[data-name="${n}"] .mission-btn`)?.click(), name);
const holder = l => page.evaluate(l => [...document.querySelectorAll('.menu-group--holder .mission-btn')].find(b => b.textContent.trim() === l)?.click(), l);
const button = t => page.evaluate(t => [...document.querySelectorAll('button')].find(b => b.textContent.trim() === t)?.click(), t);

// Self time per function, and total time (self and callees) for the app's own functions.
const keyOf = f => `${f.functionName || '(anon)'} ${f.url.split('/').slice(-2).join('/').replace(/[?].*/, '')}:${f.lineNumber + 1}`;
function summarise(profile, top) {
    const byId = new Map(profile.nodes.map(n => [n.id, n]));
    const parent = new Map();
    profile.nodes.forEach(n => (n.children || []).forEach(c => parent.set(c, n.id)));
    const self = new Map(), total = new Map();
    profile.samples.forEach((id, i) => {
        const dt = (profile.timeDeltas[i] || 0) / 1000;
        const k = keyOf(byId.get(id).callFrame);
        self.set(k, (self.get(k) || 0) + dt);
        const seen = new Set();
        for (let at = id; at !== undefined; at = parent.get(at)) {
            const f = byId.get(at).callFrame;
            if (!f.url.includes('/src/')) continue;
            const key = keyOf(f);
            if (seen.has(key)) continue;
            seen.add(key);
            total.set(key, (total.get(key) || 0) + dt);
        }
    });
    const all = [...self.values()].reduce((a, b) => a + b, 0);
    const show = (title, map) => {
        console.log(title);
        [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, top)
            .forEach(([k, v]) => console.log(`${v.toFixed(0).padStart(7)}  ${(100 * v / all).toFixed(1).padStart(5)}%  ${k}`));
    };
    show('Top self time (ms, share of profiled time):', self);
    show('Top total time in the app\'s own functions:', total);
    // Long tasks: busy stretches (no idle sample) over LONG_MS, and where their time went.
    const LONG_MS = 40;
    let run = null;
    const runs = [];
    const close = () => { if (run && run.ms > LONG_MS) runs.push(run); run = null; };
    profile.samples.forEach((id, i) => {
        const dt = (profile.timeDeltas[i] || 0) / 1000;
        const node = byId.get(id);
        if (node.callFrame.functionName === '(idle)') { close(); return; }
        run ??= { ms: 0, fns: new Map(), self: new Map() };
        run.ms += dt;
        const sk = keyOf(node.callFrame);
        run.self.set(sk, (run.self.get(sk) || 0) + dt);
        const seen = new Set();
        for (let at = id; at !== undefined; at = parent.get(at)) {
            const f = byId.get(at).callFrame;
            if (!f.url.includes('/src/')) continue;
            const key = keyOf(f);
            if (seen.has(key) || /^(animate|\(anon\)) /.test(key)) continue;
            seen.add(key);
            run.fns.set(key, (run.fns.get(key) || 0) + dt);
        }
    });
    close();
    if (runs.length) console.log(`Long tasks (over ${LONG_MS} ms):`);
    const topOf = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => `${k.split(' ')[0]} ${v.toFixed(0)}`).join(', ');
    runs.sort((a, b) => b.ms - a.ms).slice(0, 12).forEach(r => console.log(`  ${r.ms.toFixed(0)} ms: ${topOf(r.fns, 6)} | self: ${topOf(r.self, 3)}`));
    return [...self.entries()].sort((a, b) => b[1] - a[1]).slice(0, 80);
}

const pct = (a, p) => { if (!a.length) return 0; const s = [...a].sort((x, y) => x - y); return s[Math.min(s.length - 1, Math.floor(p * s.length))]; };
const results = [];
// Runs `act`, recording frames from its start for `ms` (or until it settles, then `ms` more).
async function scene(name, act, { ms = 4000, flight = false } = {}) {
    const profiling = profileScenes.includes(name);
    if (profiling) await cdp.send('Profiler.start');
    await page.evaluate(() => { const r = window.__perf; r.gaps = []; r.work = []; r.hitches = []; r.last = 0; r.prev = null; r.on = true; window.__ouniverse.resolution.gpu.length = 0; });
    const t0 = Date.now();
    await act();
    if (flight) await settle();
    await page.waitForTimeout(ms);
    const r = await page.evaluate(() => { const r = window.__perf; r.on = false; return { gaps: r.gaps, work: r.work, hitches: r.hitches, gpu: [...window.__ouniverse.resolution.gpu] }; });
    const secs = (Date.now() - t0) / 1000;
    const row = {
        scene: name, frames: r.gaps.length, fps: +(r.gaps.length / secs).toFixed(1),
        gapP50: +pct(r.gaps, 0.5).toFixed(1), gapP95: +pct(r.gaps, 0.95).toFixed(1), gapMax: +Math.max(0, ...r.gaps).toFixed(1),
        dropped: r.gaps.filter(g => g > 25).length,
        cpuP50: +pct(r.work, 0.5).toFixed(1), cpuP95: +pct(r.work, 0.95).toFixed(1),
        gpuP50: +pct(r.gpu, 0.5).toFixed(1), gpuP95: +pct(r.gpu, 0.95).toFixed(1),
    };
    console.log(Object.values(row).join('\t') + (r.hitches.length ? `\n    hitches: ${r.hitches.join(', ')}` : ''));
    row.hitches = r.hitches;
    results.push(row);
    if (profiling) {
        console.log(`--- profile: ${name}`);
        summarise((await cdp.send('Profiler.stop')).profile, 30);
    }
}

console.log(`viewport ${vw}x${vh}@${dpr || 1}, CPU x${cpu}`);
console.log('scene\tframes\tfps\tgapP50\tgapP95\tgapMax\tdropped\tcpuP50\tcpuP95\tgpuP50\tgpuP95');
await scene('overview', async () => {}, { ms: 5000 });
await scene('fly Earth', () => pick('Earth'), { flight: true, ms: 3000 });
await scene('at Earth', async () => {}, { ms: 4000 });
await scene('fly ISS', () => pick('ISS'), { flight: true, ms: 3000 });
await scene('fly Moon', () => pick('Moon'), { flight: true, ms: 3000 });
await scene('fly Perseverance', () => pick('Perseverance'), { flight: true, ms: 4000 });
await scene('fly Saturn', () => pick('Saturn'), { flight: true, ms: 3000 });
await scene('fly Comet 67P', () => pick('Comet 67P'), { flight: true, ms: 3000 });
await scene('fly Sun', () => pick('Sun'), { flight: true, ms: 3000 });
await scene('honorary asteroids', () => holder('Honorary asteroids'), { flight: true, ms: 3000 });
await scene('to True scale', () => button('True scale'), { ms: 4500 });
await scene('true: fly Earth', () => pick('Earth'), { flight: true, ms: 3000 });
await scene('true: at Earth', async () => {}, { ms: 4000 });
await scene('true: fly Perseverance', () => pick('Perseverance'), { flight: true, ms: 4000 });
await scene('to Compressed', () => button('Compressed'), { ms: 4500 });
await scene('cinematic', () => button('Start Cinematic Mode'), { ms: 40000 });

let self = [];
if (!profileScenes.length) self = summarise((await cdp.send('Profiler.stop')).profile, 40);
console.log('\nerrors:', errors.length ? [...new Set(errors)].join('\n') : 'none');
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify({ cpu, viewport: [vw, vh, dpr || 1], results, self }, null, 1));
await browser.close();
await server.close();
