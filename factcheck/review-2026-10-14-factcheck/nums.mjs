// Compare data.json's orbits and sizes for natural bodies with JPL: planets (Standish Table 1),
// moons (planetary satellite mean elements), asteroids and comets (SBDB). Writes nums.json, the
// review page's NUMS rows: [body, field, data.json, reference, ok|fix].
//   node factcheck/review-2026-10-14-factcheck/nums.mjs
import fs from 'fs';
import process from 'process';

const data = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));
const by = Object.fromEntries(data.map(o => [o.name, o]));
const rows = [];
const near = (a, b, tol) => Math.abs(a - b) <= tol;
const ang = (a, b) => Math.abs(((a - b + 540) % 360) - 180);
const row = (body, field, mine, ref, tol, isAngle) => {
  if (mine === undefined || ref === undefined || Number.isNaN(ref)) return;
  const ok = isAngle ? ang(mine, ref) <= tol : near(mine, ref, tol);
  rows.push([body, field, String(mine), String(+ref.toFixed(6)), ok ? 'ok' : 'fix']);
};

// Planets: Standish Table 1 (valid 1800-2050).
const t1 = (await (await fetch('https://ssd.jpl.nasa.gov/planets/approx_pos.html')).text()).replace(/<[^>]*>/g, '').replace(/&dagger;/g, '');
const lines = t1.split('\n');
for (const name of ['Mercury', 'Venus', 'EM Bary', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']) {
  const i = lines.findIndex(l => l.trim().startsWith(name) && /\d\.\d{6}/.test(l));
  const [a, e, I, L, w, N] = lines[i].trim().slice(name.length).trim().split(/\s+/).map(Number);
  const [, , , Lr, wr] = lines[i + 1].trim().split(/\s+/).map(Number);
  const o = by[name === 'EM Bary' ? 'Earth' : name].orbit;
  const body = name === 'EM Bary' ? 'Earth' : name;
  row(body, 'orbit.a_au', o.a_au, a, 1e-6);
  row(body, 'orbit.e', o.e, e, 1e-4);
  row(body, 'orbit.i', o.i, I, 2e-3);
  if (body !== 'Earth') row(body, 'orbit.node', o.node, N, 2e-3, true);
  row(body, 'orbit.peri', o.peri, body === 'Earth' ? w : w - N, 2e-3, true);
  row(body, 'orbit.M0', o.M0, L - w, 2e-3, true);
  row(body, 'orbit.rate', o.rate, (Lr - wr) / 36525, 1e-6);
}

// Moons: JPL mean elements table.
const html = await (await fetch('https://ssd.jpl.nasa.gov/sats/elem/')).text();
const trs = html.replace(/\s+/g, ' ').split('<tr').map(r => r.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').trim().split(/\s+/));
for (const name of ['Io', 'Europa', 'Ganymede', 'Callisto', 'Titan', 'Enceladus']) {
  const c = trs.find(c => c.includes(name) && c[c.indexOf(name) + 1]?.match(/^\d{3}$/));
  if (!c) { console.error('no row', name); continue; }
  // Satellite Code Ephemeris Frame Epoch a e w M i node P Papsis Pnode RA Dec Tilt Ref
  const r = c.slice(c.indexOf(name));
  const [a, e, , , i, node, P] = r.slice(5, 12).map(Number);
  const o = by[name].orbit;
  row(name, 'orbit.a_km', o.a_km, a, a * 1e-3);
  row(name, 'orbit.e', o.e, e, 0.0015);
  row(name, 'orbit.i', o.i, i, 0.05);
  row(name, 'orbit.node', o.node, node, 0.5, true);
  row(name, 'orbit.rate', o.rate, 360 / P, 1e-3);
}

// Small bodies: SBDB.
const sb = { Bennu: '101955', Ryugu: '162173', Itokawa: '25143', Didymos: '65803', 'Comet Wild 2': '81P', 'Comet 67P': '67P' };
for (const o of data) if (o.type === 'asteroid' && /^\d+ /.test(o.name)) sb[o.name] = o.name.split(' ')[0];
for (const [name, id] of Object.entries(sb)) {
  const j = await (await fetch(`https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${encodeURIComponent(id)}&full-prec=1&phys-par=1`)).json();
  const el = Object.fromEntries(j.orbit.elements.map(x => [x.name, +x.value]));
  const epoch = +j.orbit.epoch;
  const M0 = ((el.ma - el.n * (epoch - 2451545.0)) % 360 + 360) % 360;
  const o = by[name].orbit;
  row(name, 'orbit.a_au', o.a_au, el.a, 2e-4);
  row(name, 'orbit.e', o.e, el.e, 2e-3);
  row(name, 'orbit.i', o.i, el.i, 0.02);
  row(name, 'orbit.node', o.node, el.om, 0.05, true);
  row(name, 'orbit.peri', o.peri, el.w, 0.05, true);
  row(name, 'orbit.rate', o.rate, el.n, 2e-5);
  row(name, 'orbit.M0', o.M0, M0, 0.5, true);
  const d = (j.phys_par || []).find(p => p.name === 'diameter');
  if (d && by[name].radius_km) row(name, 'radius_km', by[name].radius_km, +d.value / 2, Math.max(0.01, +d.value * 0.02));
  const rot = (j.phys_par || []).find(p => p.name === 'rot_per');
  if (rot && by[name].rot_period) row(name, 'rot_period (days, sign = sense)', Math.abs(by[name].rot_period), +rot.value / 24, 0.002);
}

fs.writeFileSync(new URL('nums.json', import.meta.url), JSON.stringify(rows, null, 1));
const bad = rows.filter(r => r[4] === 'fix');
console.log(rows.length, 'rows,', bad.length, 'to fix');
for (const r of bad) console.log(r.join(' | '));
process.exit(0);
