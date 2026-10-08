// Apply the reviewer's accepted suggestions to data.json.
//   node apply-decisions.mjs <review-dir> [--dry]
// Reads <review-dir>/decisions/*.json (saved from the artifact's `decisions` collection).
// Applies every `accept` with exact-text edits. Lists everything else (custom notes,
// keeps, structural "entry" edits, new entries) for Claude to handle by hand.
import fs from 'fs';
import path from 'path';
import { readData, writeData, byName, getField, setField, asText } from './lib.mjs';

const dir = process.argv[2];
const dry = process.argv.includes('--dry');
if (!dir) { console.error('usage: node apply-decisions.mjs <review-dir> [--dry]'); process.exit(1); }
const ddir = path.join(dir, 'decisions');
const rows = fs.readdirSync(ddir).filter(f => f.endsWith('.json')).map(f => {
  const j = JSON.parse(fs.readFileSync(path.join(ddir, f), 'utf8'));
  return j.data ?? j; // files saved by ArtifactData wrap the document in {id, data, version}
});

const { raw, data } = readData();
const objs = byName(data);
// follow renames made during the review (overrides.json "renames": {"Old": "New"})
let renames = {};
try { renames = JSON.parse(fs.readFileSync(path.join(dir, 'overrides.json'), 'utf8')).renames || {}; } catch { /* none */ }
for (const [from, to] of Object.entries(renames)) if (!objs[from] && objs[to]) objs[from] = objs[to];
const applied = [], already = [], failed = [], manual = [], keep = [];

for (const r of rows) {
  if (r.kind === 'new-entry') { if (r.choice !== 'skip') manual.push(r); continue; }
  if (r.choice === 'keep') { keep.push(r); continue; }
  if (r.choice !== 'accept') { manual.push(r); continue; }
  for (const e of r.suggestion || []) {
    const tag = `${r.object} · ${e.f}`;
    if (e.f === 'entry') { manual.push({ ...r, note: 'structural: ' + e.to }); continue; }
    const obj = objs[r.object];
    if (!obj) { failed.push(`${tag}: object not found (renamed?)`); continue; }
    const cur = getField(obj, e.f);
    const curText = asText(cur);
    if (e.from === '*') {
      if (cur === e.to) { already.push(tag); continue; }
      setField(obj, e.f, e.to); applied.push(tag); continue;
    }
    if (typeof cur === 'string') {
      if (cur.includes(e.from)) { setField(obj, e.f, cur.replace(e.from, e.to)); applied.push(tag); }
      else if (cur.includes(e.to)) already.push(tag);
      else failed.push(`${tag}: text not found: "${e.from.slice(0, 60)}"`);
      continue;
    }
    // non-string fields (numbers, coordinates): `to` is JSON
    let to; try { to = JSON.parse(e.to); } catch { to = e.to; }
    if (curText === asText(to)) { already.push(tag); continue; }
    if (curText !== e.from) { failed.push(`${tag}: current value ${curText} is not ${e.from}`); continue; }
    setField(obj, e.f, to); applied.push(tag);
  }
}

if (!dry && applied.length) writeData(data, raw);
const say = (h, a, f = x => x) => a.length && console.log(`\n${h} (${a.length}):\n  ` + a.map(f).join('\n  '));
console.log(`${dry ? '[dry run] ' : ''}${rows.length} decisions read.`);
say('Applied', applied);
say('Already in data.json', already);
say('FAILED', failed);
say('For Claude to handle (custom notes, structural changes, new entries)', manual, r => `${r.object} · ${r.field ?? 'new entry'} · ${r.choice}: ${r.note || '(no note)'}`);
say('Kept as is (record as still unverified or disputed)', keep, r => `${r.object} · ${r.field}: ${(r.claim || '').slice(0, 80)}`);
if (failed.length) process.exitCode = 2;
