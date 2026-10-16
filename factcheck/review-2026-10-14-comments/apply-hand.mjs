// Hand-applied decisions from the 2026-10-14 comments review (custom notes and new entries).
// Run once from the project root after apply-decisions.mjs: node factcheck/review-2026-10-14-comments/apply-hand.mjs
import fs from 'fs';
import { readData, writeData } from '../../.claude/skills/factcheck-data/lib.mjs';

const { raw, data } = readData();
const get = n => { const o = data.find(o => o.name === n); if (!o) throw new Error('missing ' + n); return o; };
const replaceIn = (o, f, from, to) => {
  if (!o[f]?.includes(from)) throw new Error(`${o.name}.${f}: "${from}" not found`);
  o[f] = o[f].replace(from, to);
};
const decision = id => JSON.parse(fs.readFileSync(new URL(`decisions/${id}.json`, import.meta.url), 'utf8'));
const SHAPE = 'The shape model of this object is awaiting further study - and it may or may not be accurately represented in this visualisation.';

// --- Custom notes on single objects ---------------------------------------------------------

// Pillinger: Simon's layout, but "principal investigator" for "leader".
get('15614 Pillinger').description = decision('15614-Pillinger--1').suggestion[0].to
  .replace('and leader of the Beagle 2 Mars lander', 'and principal investigator (PI) of the Beagle 2 Mars lander');

// BepiColombo: Dave's rewrite without the grant.
{
  const to = decision('BepiColombo--0').suggestion[0].to;
  const cut = ", and hold a share of a £3 million STFC 'Astronomy Large Award' to do science from Mercury orbit.";
  if (!to.includes(cut)) throw new Error('BepiColombo grant clause not found');
  get('BepiColombo').ou_involvement = to.replace(cut, '.')
    .replace('OU scientists are now Co-Investigators on MIXS and on MERTIS (the Mercury Thermal Infrared Spectrometer), associates',
      'OU scientists are now Co-Investigators on MIXS and on MERTIS (the Mercury Thermal Infrared Spectrometer), and associates');
}

// ExoMars TGO: the coordinated-experiments sentence, snappier.
replaceIn(get('ExoMars TGO'), 'ou_involvement', 'This work involves international collaboration',
  'Some measurements are timed with other spacecraft: TGO measures methane from orbit while the Curiosity rover measures it on the ground. This work involves international collaboration');

// Genesis: Ian Franchi's account, without "roughly equivalent to Co-Investigators".
{
  const to = decision('Genesis--0').suggestion[0].to;
  const cut = 'OU scientists were members of the Genesis Science Team, roughly equivalent to Co-Investigators.';
  if (!to.includes(cut)) throw new Error('Genesis clause not found');
  get('Genesis').ou_involvement = to.replace(cut, 'OU scientists were members of the Genesis Science Team.');
}

// Europa: a line on the ocean research (Sym, Ramkissoon, Fox-Powell, Pearson & Melwani Daswani, ORO 95401/95399).
get('Europa').ou_involvement += " Researchers also model how the chemistry of Europa's ocean, and how habitable it is, may have changed over the moon's 4.5-billion-year history as the water reacted with the rock beneath.";

// --- The other honorary asteroids: Simon's layout, with a placeholder for the OU connection ---------

const TODO_OU = '[TO ADD: OU connection]';
const asteroids = {
  '9159 McDonnell': ['A main-belt asteroid', 'J. A. M. (Tony) McDonnell', 'J. A. M. (“Tony”) McDonnell (b. 1938) is recognized for his research on cosmic dust. With colleagues, he was the first to demonstrate the intact capture of space particulates in aerogel. He has flown instruments on a number of missions and has analyzed impact craters on lunar samples and satellite surfaces exposed to space.'],
  '158589 Snodgrass': ['A main-belt asteroid', 'Colin Snodgrass', 'Colin Snodgrass (b. 1981) is an astronomer at the European Southern Observatory. His work centers on the characterization of inactive cometary nuclei through photometry, measuring their sizes, colors and rotation periods. He is also active in observing exoplanetary systems.'],
  '15834 McBride': ['A main-belt asteroid on a steeply inclined orbit', 'Neil McBride', 'Neil McBride (b. 1966) has worked on many aspects of solar system dynamics, including meteor stream formation, interrelations between minor planets, comets and meteors, as well as the structure of the transneptunian region.'],
  '8463 NaomiMurdoch': ['An outer main-belt asteroid', 'Naomi Murdoch', 'Naomi Murdoch (b. 1984) completed her Ph.D. at The Open University, United Kingdom in 2012. Using microgravity flight experiments and numerical modeling, she investigated the behavior of granular material under minor-planet-like low-gravity surface conditions.'],
  '11469 Rozitis': ['A main-belt asteroid', 'Benjamin Rozitis', 'Benjamin Rozitis (b. 1984) is a research fellow at the Open University (UK) studying the physical and dynamical characterization of asteroid surfaces through spacecraft data, modeling, and microgravity experiments.'],
  '30226 SamuelLeeJackson': ['A main-belt asteroid', 'Samuel Lee Jackson', 'Samuel Lee Jackson (b. 1997) is a British researcher at The Open University, Milton Keynes, UK, who specializes in observations of near-Earth asteroids and the use of small robotic telescopes.'],
  '5497 SaraRussell': ['A main-belt asteroid', 'Sara Russell', 'As a researcher at the Natural History Museum in London, Sara Russell (b. 1966) studies the chemistry and mineralogy of meteorites to investigate the early solar system and origin of interstellar grains. She has collected meteorites in both hot and cold deserts and is principal editor of the Meteoritical Bulletin.'],
  '6580 PhilBland': ['A main-belt asteroid', 'Philip Bland', "Philip A. Bland (b. 1969), a research scientist at London's Imperial College, is involved in a variety of planetary and meteoritical studies. His fireball camera network offers an important glimpse into links between meteorites and minor planets."],
  '7552 Sephton': ['A main-belt asteroid', 'Mark Sephton', 'Mark A. Sephton (b. 1966) is a researcher in organic geochemistry and meteoritics at Imperial College, London. Through his research, he has determined new techniques for the analysis of organics in meteorites.'],
  '7635 CarolineSmith': ['A main-belt asteroid', 'Caroline Smith', 'Caroline Smith (b. 1976) the Head of Earth Sciences Collections and Principal Curator of Meteorites at the Natural History Museum in London. She studies mineralogy of meteorites, notably ureilites, to understand planetary processes, collected meteorites in Australia and has been principal editor of the Meteoritical Bulletin.'],
  '42772 Kokotanekova': ['A main-belt asteroid', 'Rosita Kokotanekova', 'Rosita Kokotanekova (b. 1991) is a Research Fellow at ESO in Garching, Germany. She studies surface characteristics of comets, trans-Neptunian objects, and other small solar system bodies using ground-based photometry.'],
};
for (const [name, [kind, who, citation]] of Object.entries(asteroids)) {
  get(name).description = `${kind} named after ${who}, ${TODO_OU}. Its official naming citation reads: “${citation}” ${SHAPE}`;
}
// 3202 Graff: JPL's database has no citation for it, so the old paraphrase stays after the placeholders.
replaceIn(get('3202 Graff'), 'description',
  'An outer main-belt asteroid of the Hilda group, named in honor of Gareth (Graff) Vaughan Williams before he came to the Open University. Working',
  `An outer main-belt asteroid of the Hilda group, named after Gareth (Graff) Vaughan Williams, ${TODO_OU}. [TO ADD: official naming citation; JPL's database has none, so the text below paraphrases the Minor Planet Center's.] Working`);

// --- New entries ------------------------------------------------------------------------------

const insertAfter = (afterName, entry) => {
  if (data.some(o => o.name === entry.name)) throw new Error('already present: ' + entry.name);
  data.splice(data.findIndex(o => o.name === afterName) + 1, 0, entry);
};
const gap = n => Object.fromEntries(JSON.parse(fs.readFileSync(new URL('report-data.json', import.meta.url), 'utf8'))
  .GAPS.find(g => g.n === n).kv);
const text = n => { const g = gap(n); const t = { description: g.description }; if (!g.ou_involvement.startsWith('(none')) t.ou_involvement = g.ou_involvement; return t; };

insertAfter('ExoMars TGO', {
  name: 'Schiaparelli', parent: 'Mars', type: 'mission', icon: 'lander', status: 'Crashed', launch_year: '2016',
  orbit_type: 'landed', landed_coords: { lat: -2.052, lon: -6.208 },
  ...text('Schiaparelli'), radius: 0.2, size_m: 2.4, color: '#cccccc',
});
insertAfter('Schiaparelli', {
  name: 'I-MIM', parent: 'Mars', type: 'mission', status: 'Planned', launch_year: 'TBC',
  ...text('I-MIM'), radius: 0.3, size_m: 10, size_estimated: true, color: '#88ccff',
  orbit: { a_km: 3796.2, e: 0, i: 90, M0: 200, rate: 4380.044477, illustrative: true },
});
insertAfter('UKube-1', {
  name: 'AlSat-Nano', parent: 'Earth', type: 'mission', status: 'Complete', launch_year: '2016',
  ...text('AlSat-Nano'), model: '/models/cubesat.glb', motion: { mode: 'tumble' }, radius: 0.2, size_m: 0.34, color: '#999999',
  orbit: { a_km: 7058, e: 0, i: 98.2, M0: 120, rate: 5270.875786, node_rate: 0.9856, illustrative: true },
});
insertAfter('LUPEX', {
  name: 'MAGPIE', parent: 'Moon', type: 'mission', icon: 'rover', status: 'Planned', launch_year: '2029',
  orbit_type: 'landed', landed_coords: { lat: -85.5, lon: -30, illustrative: true },
  ...text('MAGPIE'), radius: 0.2, size_m: 2, size_estimated: true, color: '#99ddff',
});
insertAfter('MAGPIE', {
  name: 'Shackleton Rover', parent: 'Moon', type: 'mission', icon: 'rover', status: 'Planned', launch_year: '2030',
  orbit_type: 'landed', landed_coords: { lat: -89.2, lon: 130, illustrative: true },
  ...text('Shackleton Rover'), radius: 0.2, size_m: 2, size_estimated: true, color: '#aaddcc',
});
insertAfter('Hera', {
  name: 'DART', parent: 'Dimorphos', menu_parent: 'Didymos', type: 'mission', status: 'Complete', launch_year: '2021',
  orbit_type: 'landed', landed_coords: { lat: -8.84, lon: 264.3, illustrative: true },
  ...text('DART'), radius: 0.3, size_m: 19, color: '#bbbbbb',
});
insertAfter('Ryugu', {
  name: 'Itokawa', parent: 'Sun', type: 'asteroid', status: 'Natural', model: '/models/Asteroid2.glb',
  radius_km: 0.2675, color: '#8a7f70', rot_period: 0.50552,
  orbit: { a_au: 1.324052, e: 0.280178, i: 1.6209, M0: 44.3783, rate: 0.646914, node: 69.0745, peri: 162.8409 },
  ...text('Itokawa'),
});
insertAfter('Itokawa', {
  name: 'Hayabusa', parent: 'Itokawa', type: 'mission', status: 'Complete', launch_year: '2003',
  ...text('Hayabusa'), radius: 0.3, size_m: 5.7, color: '#ddccaa',
  orbit: { a_km: 7, e: 0, i: 0, M0: 100, rate: 0, illustrative: true },
});
insertAfter('Titan', {
  name: 'Enceladus', parent: 'Saturn', type: 'moon', status: 'Natural', radius_km: 252.1, gm: 7.211, color: '#f4f6fa',
  // JPL mean elements (SAT441, Laplace plane, epoch J2000): M0 and rate from the table, not fitted to Horizons.
  orbit: { a_km: 238400, e: 0.0047, i: 0, M0: 57, rate: +(360 / 1.370218).toFixed(6), node: 0, peri: 119.5,
    peri_rate: +(360 / (2.916 * 365.25)).toFixed(6), plane: { ra: 40.6, dec: 83.5 } },
  ...text('Enceladus'),
});
insertAfter('Mars Yard', {
  name: 'OU Campus', parent: 'Earth', type: 'mission', status: 'Operational', launch_year: '1969',
  orbit_type: 'landed', landed_coords: { lat: 52.0247, lon: -0.7105 },
  description: "The OU's campus at Walton Hall, Milton Keynes, is home to its planetary and space science laboratories and to the teams who write its distance-learning courses. [TO ADD: a sentence on the OU's mission, open to people, places, methods and ideas.]",
  ou_involvement: 'Research in this visualisation feeds into OU teaching. [TO ADD: the courses it informs, e.g. modules in astronomy and planetary science, and how students take part.]',
  radius: 0.2, size_m: 20, size_estimated: true, color: '#3399ff',
});

// --- Whole-file passes on the text (outside quoted naming citations) -----------------------------

const UK = [
  [/\bcharacteriz(e|es|ed|ing|ation)\b/g, 'characteris$1'], [/\bCharacteriz/g, 'Characteris'],
  [/\bspecializ(e|es|ed|ing)\b/g, 'specialis$1'], [/\blocaliz(e|es|ed|ing)\b/g, 'localis$1'],
  [/\bminiaturiz(e|es|ed|ing)\b/g, 'miniaturis$1'], [/\boptimiz(e|es|ed|ing)\b/g, 'optimis$1'],
  [/\brevolutioniz(e|es|ed|ing)\b/g, 'revolutionis$1'], [/\brecogniz(e|es|ed|ing)\b/g, 'recognis$1'],
  [/\borganiz(e|es|ed|ing|ation|ations)\b/g, 'organis$1'], [/\banalyz(e|es|ed|ing)\b/g, 'analys$1'],
  [/\butilized\b/g, 'used'], [/\butilizes\b/g, 'uses'], [/\butilize\b/g, 'use'],
  [/\bkilometers\b/g, 'kilometres'], [/\bkilometer\b/g, 'kilometre'], [/\bmeters\b/g, 'metres'], [/\bmeter\b/g, 'metre'],
  [/\bcentimeters\b/g, 'centimetres'], [/\bmillimeters\b/g, 'millimetres'],
  [/\bhonor\b/g, 'honour'], [/\bcolor(s?)\b/g, 'colour$1'], [/\bfueled\b/g, 'fuelled'],
  [/\bbehavior\b/g, 'behaviour'], [/\bmodeling\b/g, 'modelling'], [/\bmodeled\b/g, 'modelled'],
  [/\bcatalog(s?)\b/g, 'catalogue$1'], [/\btraveled\b/g, 'travelled'], [/\btraveling\b/g, 'travelling'],
  [/\bprogram(s?)\b/g, 'programme$1'], [/\b99 percent\b/g, '99 per cent'], [/\bpercent\b/g, 'per cent'],
];
const OU = [
  [/\bThe Open University's\b/g, "The OU's"], [/\bthe Open University's\b/g, "the OU's"],
  [/\bThe Open University\b/g, 'The OU'], [/\bthe Open University\b/g, 'the OU'],
  [/\bOpen University\b/g, 'OU'],
];
const passes = [...UK, ...OU];
const counts = {};
for (const o of data) {
  for (const f of ['description', 'ou_involvement']) {
    if (typeof o[f] !== 'string') continue;
    // Leave quoted naming citations as written.
    o[f] = o[f].split(/(“[^”]*”)/).map(part => part.startsWith('“') ? part : passes.reduce((t, [re, to]) =>
      t.replace(re, (...m) => { counts[re] = (counts[re] || 0) + 1; return m[0].replace(re, to); }), part)).join('');
  }
}
writeData(data, raw);
for (const [re, n] of Object.entries(counts)) console.log(String(n).padStart(3), re);
console.log('written');
