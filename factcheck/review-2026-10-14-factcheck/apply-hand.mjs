// Hand-applied decisions from the 2026-10-14 fact check (custom notes and structural edits).
// Run once from the project root after apply-decisions.mjs: node factcheck/review-2026-10-14-factcheck/apply-hand.mjs
import { readData, writeData } from '../../.claude/skills/factcheck-data/lib.mjs';

const { raw, data } = readData();
const get = n => { const o = data.find(o => o.name === n); if (!o) throw new Error('missing ' + n); return o; };
const replaceIn = (o, f, from, to) => {
  if (!o[f]?.includes(from)) throw new Error(`${o.name}.${f}: "${from}" not found`);
  o[f] = o[f].replace(from, to);
};

// Rozitis: the reviewer's note (PhD and postdoc at the OU, about 2007 to 2023).
replaceIn(get('11469 Rozitis'), 'description', 'named after Benjamin Rozitis, [TO ADD: OU connection]',
  'named after Benjamin Rozitis, who did his PhD and postdoctoral research at the OU');

// Enceladus: first person, without the name (one OU member on the committee).
get('Enceladus').ou_involvement = 'One of our planetary scientists sat on ESA’s Expert Committee that, in 2024, recommended Enceladus as the target of ESA’s next large mission: an orbiter and lander to search for signs of life, for launch in the early 2040s.';

// Hubble: the style rewrite, and NASA/ESA in the description.
get('Hubble').ou_involvement = 'Our astronomers use Hubble’s archive to study stellar populations and how distant galaxies evolve, and the work feeds into our astronomy teaching. The CCDs in Hubble’s WFC3 camera were built by Teledyne e2v, the UK company that partners with our Centre for Electronic Imaging on testing and radiation-hardening space detectors.';
replaceIn(get('Hubble'), 'description', "Hubble is one of NASA's most successful space telescopes", 'Hubble, a joint NASA/ESA mission, is one of the most successful space telescopes ever built, and');
replaceIn(get('Hubble'), 'description', 'and has spent over three decades providing', 'has spent over three decades providing');

// JUICE: the style rewrite without "detector maker".
get('JUICE').ou_involvement = 'Working with Teledyne e2v, our Centre for Electronic Imaging (CEI) helped develop and characterise the CIS115 sensor at the heart of the JANUS camera, testing it against the radiation, vibration and temperature extremes of the journey to Jupiter. We are the UK National Lead for JANUS.';

// DART: Simon Green's role from the literature (Murphy et al. 2023, PSJ 4, 243: VLT/MUSE ejecta).
get('DART').ou_involvement = 'Our planetary scientists helped study the aftermath of the impact from the ground, using the MUSE spectrograph on the Very Large Telescope to follow the cloud of debris thrown off Dimorphos over the following month, mapping its cone, spirals, clumps and tails.';

// OU Campus: the courses, from the OU's module pages.
get('OU Campus').ou_involvement = 'Research in this visualisation feeds into our teaching. On our BSc Natural Sciences (Astronomy and Planetary Science), students take modules such as Astronomy (S284) and Planetary science and the search for life (S283, becoming Planetary science, S287, from October 2027), and on Remote experiments in physics and space (SXPS288) they run their own projects with our radio telescope in Milton Keynes or our PIRATE telescope in Tenerife. Postgraduates on our S818 Space Science module work with real mission data, such as Gaia’s.';

// Structural: orbits now sourced; Hera's arrival.
delete get('AlSat-Nano').orbit.illustrative;
delete get('Hayabusa').orbit.illustrative;
const wp = get('Hera').trajectory.waypoints.find(w => w.at === 'Didymos');
if (wp.date !== '2026-10-12') throw new Error('Hera waypoint is ' + wp.date);
wp.date = '2026-11-01';

writeData(data, raw);
console.log('written');
