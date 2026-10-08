// Build the review page from a report-data.json.
//   node build-report.mjs <review-dir>
// Reads <review-dir>/report-data.json, checks every suggested edit against data.json,
// and writes <review-dir>/report.html (publish that file as the artifact).
import fs from 'fs';
import path from 'path';
import { SKILL_DIR, readData, byName, getField, asText } from './lib.mjs';

const dir = process.argv[2];
if (!dir) { console.error('usage: node build-report.mjs <review-dir>'); process.exit(1); }
const report = JSON.parse(fs.readFileSync(path.join(dir, 'report-data.json'), 'utf8'));
const { data } = readData();
const objs = byName(data);

// Every exact-text suggestion must match data.json now, or accepting it later would fail.
const problems = [];
let checked = 0;
for (const o of report.DATA) {
  o.c.forEach((x, i) => {
    for (const e of x.sug?.e || []) {
      if (e.from === '*' || e.f === 'entry') continue;
      const obj = objs[o.n];
      if (!obj) { problems.push(`${o.n}#${i}: no object "${o.n}" in data.json`); continue; }
      const val = asText(getField(obj, e.f));
      if (val === undefined || !val.includes(e.from)) problems.push(`${o.n}#${i} ${e.f}: text not found: "${e.from.slice(0, 70)}"`);
      else checked++;
    }
  });
}
const counts = { ok: 0, fix: 0, bad: 0, unv: 0 };
report.DATA.forEach(o => o.c.forEach(x => counts[x.v]++));

const tpl = fs.readFileSync(path.join(SKILL_DIR, 'template.html'), 'utf8');
// keep a "</script" inside the data from closing the page's script block
const json = JSON.stringify(report).replace(/<\/(script)/gi, '<\\/$1');
const html = tpl.replace('/*__REPORT_DATA__*/null', json).replace('__TITLE__', report.meta.title || 'OUniverse fact check');
fs.writeFileSync(path.join(dir, 'report.html'), html);

console.log(`claims: ${counts.ok} confirmed, ${counts.fix} needs correction, ${counts.bad} contradicted, ${counts.unv} unverified`);
console.log(`suggested edits matched in data.json: ${checked}`);
if (problems.length) { console.log(`PROBLEMS (${problems.length}):\n  ` + problems.join('\n  ')); process.exitCode = 2; }
console.log('wrote ' + path.join(dir, 'report.html'));
