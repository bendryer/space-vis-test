// The fact ledger (factcheck/sources.json): every researched fact, the sources that support it,
// when it was checked, and whether it can change over time. Check here before searching the web.
//
//   node sources.mjs lookup <text...>        facts whose object, field or text matches (case-insensitive)
//   node sources.mjs object <name>           every fact recorded for one object
//   node sources.mjs stale [--days 90]       volatile facts not checked within N days (re-search these)
//   node sources.mjs add <facts.json>        merge new or re-checked facts (format below)
//   node sources.mjs seed <review-dir>       build facts from a review's report-data.json (first run only)
//   node sources.mjs rename <old> <new>      move facts to an object's new name (after a rename in data.json)
//   node sources.mjs stats                   counts
//
// facts.json for `add`: [ { "object": "SMILE", "field": "description", "fact": "Launched 19 May 2026 on Vega-C.",
//   "sources": [ { "t": "ESA: Smile set to launch on 19 May", "u": "https://…" } ],
//   "quote": "optional short excerpt from the source", "checked": "YYYY-MM-DD",
//   "volatile": true, "status": "confirmed|correction|not-found" } ]
// status: confirmed (matches data.json when checked), correction (the source differed from data.json
// when checked; the fact is what the source says), not-found (nothing public found: give
// "searched": ["query or site tried", …] instead of sources, so the same searches aren't repeated).
// A fact with the same object, field and fact text replaces the old record (its sources are merged).
import fs from 'fs';
import path from 'path';
import { FACTCHECK_DIR, readJson, today } from './lib.mjs';

const FILE = path.join(FACTCHECK_DIR, 'sources.json');
const load = () => readJson(FILE, { schema: 1, facts: [], sources: {} });
const save = led => {
  led.facts.sort((a, b) => a.object.localeCompare(b.object) || a.field.localeCompare(b.field));
  fs.writeFileSync(FILE, JSON.stringify(led, null, 1) + '\n');
};

// Facts that can go out of date: statuses, dates, counts, "now/currently/planned" wording.
const VOLATILE_FIELDS = ['status', 'status_timeline', 'launch_year', 'trajectory'];
const VOLATILE_TEXT = /\b(launch(ed|es)?|due|planned|expected|upcoming|currently|now|still|operat\w*|en route|arriv\w*|re-?ent\w*|decommission\w*|moons?|status|funding|awarded|£|€|\$|20[2-9]\d)\b/i;
export const isVolatile = (field, text) => VOLATILE_FIELDS.includes(field) || VOLATILE_TEXT.test(text || '');

const key = f => `${f.object}|${f.field}|${f.fact}`.toLowerCase();

function merge(led, incoming) {
  let added = 0, updated = 0;
  for (const f of incoming) {
    // "not-found" records a search that turned up nothing: it needs the searches tried instead of sources
    const notFound = f.status === 'not-found';
    const sources = Array.isArray(f.sources) ? f.sources : [];
    if (!f.object || !f.field || !f.fact || (notFound ? !f.searched?.length : !sources.length)) {
      console.warn(`skipped (needs object, field, fact and ${notFound ? '"searched"' : 'at least one source'}):`, JSON.stringify(f).slice(0, 120)); continue;
    }
    const rec = { object: f.object, field: f.field, fact: f.fact, quote: f.quote || undefined,
      sources: sources.map(s => s.u), searched: f.searched || undefined, checked: f.checked || today(),
      volatile: f.volatile ?? isVolatile(f.field, f.fact), status: f.status || 'confirmed' };
    for (const s of sources) {
      const e = (led.sources[s.u] ??= { title: s.t, firstUsed: rec.checked });
      e.title = s.t || e.title; e.lastUsed = rec.checked;
    }
    const i = led.facts.findIndex(x => key(x) === key(rec));
    if (i >= 0) { rec.sources = [...new Set([...led.facts[i].sources, ...rec.sources])]; led.facts[i] = rec; updated++; }
    else { led.facts.push(rec); added++; }
  }
  return { added, updated };
}

function show(list, led) {
  for (const f of list) {
    console.log(`\n${f.object} · ${f.field}${f.volatile ? ' · volatile' : ''} · ${f.status} · checked ${f.checked}\n  ${f.fact}`);
    if (f.quote) console.log(`  “${f.quote}”`);
    if (f.searched) console.log(`  searched: ${f.searched.join(' | ')}`);
    for (const u of f.sources) console.log(`  - ${led.sources[u]?.title || ''} <${u}>`);
  }
  console.log(`\n${list.length} fact(s)`);
}

const [cmd, ...args] = process.argv.slice(2);
const led = load();
if (cmd === 'lookup') {
  const q = args.join(' ').toLowerCase();
  show(led.facts.filter(f => `${f.object} ${f.field} ${f.fact} ${f.quote || ''}`.toLowerCase().includes(q)), led);
} else if (cmd === 'object') {
  const n = args.join(' ').toLowerCase();
  show(led.facts.filter(f => f.object.toLowerCase() === n), led);
} else if (cmd === 'stale') {
  const i = args.indexOf('--days'); const days = i >= 0 ? +args[i + 1] : 90;
  const cutoff = new Date(Date.now() - days * 864e5).toISOString().slice(0, 10);
  show(led.facts.filter(f => f.volatile && f.checked < cutoff), led);
} else if (cmd === 'add' && args[0]) {
  const r = merge(led, JSON.parse(fs.readFileSync(args[0], 'utf8'))); save(led);
  console.log(`added ${r.added}, updated ${r.updated}; ledger now ${led.facts.length} facts from ${Object.keys(led.sources).length} sources`);
} else if (cmd === 'seed' && args[0]) {
  const rep = JSON.parse(fs.readFileSync(path.join(args[0], 'report-data.json'), 'utf8'));
  const checked = rep.meta.checked || today();
  const renames = readJson(path.join(args[0], 'overrides.json'), {}).renames || {};
  const facts = [];
  for (const o of rep.DATA) for (const c of o.c) {
    if (!c.s?.length) continue; // nothing to cite (unverified): the registry keeps those
    const fact = c.note && c.v !== 'ok' ? `${c.note}` : c.q;
    facts.push({ object: renames[o.n] || o.n, field: c.f, fact, sources: c.s, checked,
      status: c.v === 'ok' ? 'confirmed' : 'correction', volatile: isVolatile(c.f, `${c.q} ${c.note || ''}`) });
  }
  for (const g of rep.GAPS || []) if (g.s?.length && g.addable) {
    facts.push({ object: g.n, field: 'proposed-entry', fact: `${g.why} ${g.kv.map(k => `${k[0]}: ${k[1]}`).join('; ')}`, sources: g.s, checked, volatile: true });
  }
  const r = merge(led, facts); save(led);
  console.log(`seeded: added ${r.added}, updated ${r.updated}; ledger now ${led.facts.length} facts from ${Object.keys(led.sources).length} sources`);
} else if (cmd === 'rename' && args.length === 2) {
  let n = 0; for (const f of led.facts) if (f.object === args[0]) { f.object = args[1]; n++; }
  save(led); console.log(`renamed ${n} fact(s): ${args[0]} -> ${args[1]}`);
} else if (cmd === 'stats') {
  const v = led.facts.filter(f => f.volatile).length;
  console.log(`${led.facts.length} facts (${v} volatile), ${Object.keys(led.sources).length} sources, ${new Set(led.facts.map(f => f.object)).size} objects`);
} else {
  console.error('usage: node sources.mjs lookup <text> | object <name> | stale [--days N] | add <facts.json> | seed <review-dir> | rename <old> <new> | stats');
  process.exit(1);
}
