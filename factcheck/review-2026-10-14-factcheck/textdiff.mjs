// Text changes since the first review (7ebc404), ignoring the OU/UK-spelling passes.
import fs from 'fs';
const dir = new URL('.', import.meta.url);
const base = JSON.parse(fs.readFileSync(new URL('base.json', dir)));
const cur = JSON.parse(fs.readFileSync('public/data.json'));
const norm = t => (t || '').replace(/\bThe Open University\b/g, 'The OU').replace(/\bthe Open University\b/g, 'the OU')
  .replace(/\bOpen University\b/g, 'OU').replace(/iz(e|es|ed|ing|ation)\b/g, 'is$1').replace(/yz(e|es|ed|ing)\b/g, 'ys$1')
  .replace(/utilized/g, 'used').replace(/kilometers/g, 'kilometres').replace(/meters/g, 'metres').replace(/\bhonor\b/g, 'honour')
  .replace(/\bcolor/g, 'colour').replace(/fueled/g, 'fuelled').replace(/\bprogram\b/g, 'programme').replace(/percent/g, 'per cent')
  .replace(/catalogs/g, 'catalogues').replace(/analyz/g, 'analys');
const b = Object.fromEntries(base.map(o => [o.name, o]));
for (const o of cur) {
  if (o.type === 'credits') continue;
  const p = b[o.name];
  if (!p) { console.log('NEW', o.name); continue; }
  for (const f of ['description', 'ou_involvement']) if (norm(p[f]) !== norm(o[f])) console.log('CHANGED', o.name, f);
}
