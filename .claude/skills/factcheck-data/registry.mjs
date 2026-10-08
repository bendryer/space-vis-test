// The claims registry: what has been checked, what is still unverified, and what changed since.
//   node registry.mjs status                 what the next review must look at
//   node registry.mjs record <review-dir>    fold a finished review into factcheck/registry.json
//
// Claim statuses:
//   verified      a public source confirms it
//   corrected     was wrong or imprecise; replaced with sourced text
//   unverified    no public source found; kept in data.json (flag again in every review)
//   user-supplied text written from the reviewer's inside knowledge; not publicly sourced (flag again)
//   disputed      a source disagrees but the reviewer kept it (flag again)
//   removed       taken out of data.json pending verification (the gap is flagged)
import fs from 'fs';
import path from 'path';
import { REGISTRY_FILE, readData, objects, byName, hash, TRACKED, today, readJson } from './lib.mjs';

const FLAGGED = ['unverified', 'user-supplied', 'disputed', 'removed'];
const emptyRegistry = () => ({ schema: 1, dataFile: 'public/data.json', reviews: [], objects: {}, candidates: [] });

function record(dir) {
  const report = JSON.parse(fs.readFileSync(path.join(dir, 'report-data.json'), 'utf8'));
  const ddir = path.join(dir, 'decisions');
  const decisions = {};
  if (fs.existsSync(ddir)) for (const f of fs.readdirSync(ddir)) {
    const j = JSON.parse(fs.readFileSync(path.join(ddir, f), 'utf8'));
    const r = j.data ?? j; decisions[r.id] = r;
  }
  // overrides.json: { "renames": {"Old": "New"}, "claims": { "<Object>#<i>": {"status", "note"} }, "artifact": url }
  const ov = readJson(path.join(dir, 'overrides.json'), {});
  const renames = ov.renames || {};
  const date = report.meta.reviewDate || report.meta.checked || today();
  const reg = readJson(REGISTRY_FILE, emptyRegistry());
  const { data } = readData();
  const objs = byName(data);
  const slug = s => s.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const missingStatus = [];

  for (const o of report.DATA) {
    const name = renames[o.n] || o.n;
    const prev = reg.objects[name] || reg.objects[o.n] || { claims: [] };
    const entry = { renamedFrom: [...new Set([...(prev.renamedFrom || []), ...(name !== o.n ? [o.n] : [])])], lastChecked: date, hashes: {}, claims: [] };
    o.c.forEach((x, i) => {
      const key = `${o.n}#${i}`;
      const d = decisions[`${slug(o.n)}--${i}`];
      let status;
      if (ov.claims?.[key]?.status) status = ov.claims[key].status;
      else if (!d) status = x.v === 'ok' ? 'verified' : x.v === 'unv' ? 'unverified' : 'disputed';
      else if (d.choice === 'accept') status = x.v === 'ok' ? 'verified' : 'corrected';
      else if (d.choice === 'keep') status = x.v === 'unv' ? 'unverified' : x.v === 'ok' ? 'verified' : 'disputed';
      else { status = 'needs-status'; missingStatus.push(`${key} (${d.choice}: ${d.note})`); }
      const before = prev.claims.find(c => c.field === x.f && c.claim === x.q);
      entry.claims.push({
        field: x.f, claim: x.q, status,
        since: FLAGGED.includes(status) ? (before && FLAGGED.includes(before.status) ? before.since : date) : undefined,
        sources: x.s || [], note: ov.claims?.[key]?.note || x.note || undefined,
        decision: d ? d.choice : undefined, reviewerNote: d?.note || undefined, review: date,
      });
    });
    const cur = objs[name];
    if (cur) for (const f of TRACKED) if (cur[f] !== undefined) entry.hashes[f] = hash(cur[f]);
    entry.missingOu = cur ? (cur.type === 'mission' && !cur.ou_involvement) : undefined;
    delete reg.objects[o.n];
    reg.objects[name] = entry;
  }
  // proposed new entries not yet added
  for (const g of report.GAPS || []) {
    if (!g.addable) continue;
    const d = decisions[`gap--${slug(g.n)}`];
    const c = reg.candidates.find(x => x.name === g.n) || (reg.candidates.push({ name: g.n, firstProposed: date }), reg.candidates.at(-1));
    Object.assign(c, { why: g.why, sources: g.s, fields: Object.fromEntries(g.kv), lastReview: date,
      status: ov.candidates?.[g.n] || (d ? ({ add: 'added', skip: 'skipped', custom: 'added-with-changes' }[d.choice]) : 'proposed'), reviewerNote: d?.note || undefined });
  }
  reg.reviews = reg.reviews.filter(r => r.date !== date);
  reg.reviews.push({ date, dir: path.relative(path.dirname(REGISTRY_FILE), dir).replace(/\\/g, '/'), artifact: ov.artifact || report.meta.artifact });
  fs.writeFileSync(REGISTRY_FILE, JSON.stringify(reg, null, 1) + '\n');
  const tally = {};
  Object.values(reg.objects).forEach(e => e.claims.forEach(c => (tally[c.status] = (tally[c.status] || 0) + 1)));
  console.log('registry updated:', JSON.stringify(tally));
  if (missingStatus.length) { console.log(`\nNEEDS STATUS (add to overrides.json "claims"):\n  ` + missingStatus.join('\n  ')); process.exitCode = 2; }
}

function status() {
  const reg = readJson(REGISTRY_FILE, emptyRegistry());
  const { data } = readData();
  const list = objects(data);
  const now = today(), year = +now.slice(0, 4);
  const out = { lastReview: reg.reviews.at(-1)?.date || null, newObjects: [], changedFields: [], unchanged: 0, removedObjects: [], flagged: [], missingOu: [], timeSensitive: [], candidates: [] };
  const seen = new Set();
  for (const o of list) {
    const e = reg.objects[o.name];
    if (!e) { out.newObjects.push(o.name); continue; }
    seen.add(o.name);
    const changed = TRACKED.filter(f => (o[f] === undefined ? undefined : hash(o[f])) !== e.hashes[f]);
    if (changed.length) out.changedFields.push({ name: o.name, fields: changed }); else out.unchanged++;
    for (const c of e.claims) if (FLAGGED.includes(c.status)) out.flagged.push({ name: o.name, field: c.field, status: c.status, since: c.since, claim: c.claim, reviewerNote: c.reviewerNote });
    if (o.type === 'mission' && !o.ou_involvement) out.missingOu.push(o.name);
  }
  for (const n of Object.keys(reg.objects)) if (!seen.has(n) && !list.some(o => o.name === n)) out.removedObjects.push(n);
  for (const o of list) {
    if (o.type !== 'mission') continue;
    const ly = parseInt(o.launch_year, 10);
    if (o.status === 'Planned' && ly && ly <= year) out.timeSensitive.push(`${o.name}: Planned with launch_year ${o.launch_year}. Has it launched or slipped?`);
    if (['Launched', 'En Route'].includes(o.status)) out.timeSensitive.push(`${o.name}: status ${o.status}. Check the current phase.`);
    for (const s of o.status_timeline || []) out.timeSensitive.push(`${o.name}: status_timeline ${s.from} → ${s.status} (${s.from <= now ? 'now in effect' : 'upcoming'}). Is the date still right?`);
    if (/\b(due|will|planned|expected|upcoming)\b/i.test(o.description || '') && /\b20\d\d\b/.test(o.description || '')) out.timeSensitive.push(`${o.name}: description has dated future wording. Re-check it.`);
  }
  out.candidates = reg.candidates.filter(c => c.status === 'proposed').map(c => c.name);
  console.log(JSON.stringify(out, null, 1));
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'record' && arg) record(arg);
else if (cmd === 'status') status();
else { console.error('usage: node registry.mjs status | record <review-dir>'); process.exit(1); }
