// Follow-up edits after the 2026-10-14 fact check: Shackleton Rover in the first person,
// Sentinel-2 and -3 out, Sentinel-4, Chandrayaan-2, MMX and Spektr-UV in.
// Run once from the project root: node factcheck/review-2026-10-14-factcheck/apply-new.mjs
import { readData, writeData } from '../../.claude/skills/factcheck-data/lib.mjs';

const { raw, data } = readData();
const idx = n => { const i = data.findIndex(o => o.name === n); if (i < 0) throw new Error('missing ' + n); return i; };
const insertAfter = (n, o) => {
  if (data.some(x => x.name === o.name)) throw new Error('already there: ' + o.name);
  data.splice(idx(n) + 1, 0, o);
};

// Shackleton Rover: first person.
data[idx('Shackleton Rover')].ou_involvement = 'We’re helping to define the payload and the mission for Shackleton Rover, a concept for a rover system for the lunar south pole that would be built and operated entirely in the UK.';

// Sentinel-2 and -3 out (no OU involvement), Sentinel-4 in their place (OU text to come).
const s2 = idx('Sentinel-2');
data.splice(s2, 0, {
  name: 'Sentinel-4',
  parent: 'Earth',
  type: 'mission',
  status: 'Launched',
  launch_year: '2025',
  description: 'Sentinel-4 is a Copernicus mission to monitor air quality over Europe from geostationary orbit, 36,000 km above the equator. Its ultraviolet, visible and near-infrared spectrometer flies on EUMETSAT’s Meteosat Third Generation Sounder satellite (MTG-S1), launched on 1 July 2025, and measures ozone, nitrogen dioxide, sulphur dioxide, formaldehyde and aerosols every hour.',
  ou_involvement: '[TO ADD: OU involvement, needs input]',
  radius: 0.5,
  size_m: 5,
  size_estimated: true,
  color: '#66ddaa',
  orbit: { a_km: 42164.2, e: 0, i: 0, M0: 0, rate: 360.985647, illustrative: true }
});
data.splice(idx('Sentinel-2'), 1);
data.splice(idx('Sentinel-3'), 1);
for (const o of data) {
  for (const v of Object.values(o)) {
    if (!v || typeof v !== 'object') continue;
    for (const list of Object.values(v)) {
      if (!Array.isArray(list)) continue;
      for (let i = list.length - 1; i >= 0; i--) {
        if (/^Sentinel-[23]$/.test(list[i]?.subject)) list.splice(i, 1);
      }
    }
  }
}

// Spektr-UV (WSO-UV): geosynchronous, 51.6° (Shustov et al. 2018), placed illustratively.
insertAfter('CASTOR', {
  name: 'Spektr-UV',
  parent: 'Earth',
  type: 'mission',
  status: 'Planned',
  launch_year: '2031',
  description: 'Spektr-UV, also known as the World Space Observatory–Ultraviolet (WSO-UV), is a planned Russian-led space telescope with a 1.7-metre mirror. It will observe at ultraviolet wavelengths, between 115 and 310 nanometres, that are blocked by our atmosphere, taking spectra and images of stars, galaxies and planets. After many delays, it is now expected to launch no earlier than 2031.',
  ou_involvement: 'Our Centre for Electronic Imaging (CEI) contributed to the detector technology for WSO-UV’s Spectrographs Unit. Its CCD cameras must collect light for up to an hour and read out very faint signals with very little noise, and we studied how radiation damage in orbit would affect the sensors’ ability to do that.',
  radius: 0.5,
  size_m: 8,
  size_estimated: true,
  color: '#9966ff',
  orbit: { a_km: 42164.2, e: 0, i: 51.6, M0: 120, rate: 360.985647, illustrative: true }
});

// Chandrayaan-2: orbiter in a ~100 km polar orbit, turned 90° from Chandrayaan-1's.
insertAfter('Chandrayaan-1', {
  name: 'Chandrayaan-2',
  parent: 'Moon',
  type: 'mission',
  status: 'Operational',
  launch_year: '2019',
  description: 'Chandrayaan-2 is India’s second mission to the Moon, launched in July 2019. Its lander, Vikram, crashed during its descent that September, but the orbiter has been mapping the Moon ever since from a polar orbit about 100 km up, studying its surface, its minerals and the elements it is made of.',
  ou_involvement: 'Our Centre for Electronic Imaging (CEI) helped prepare the CCD236 X-ray detectors in the orbiter’s CLASS spectrometer, the successor to Chandrayaan-1’s C1XS, which maps the elements in the Moon’s surface. We characterised the detectors and tested them against radiation, and by finding the best temperatures, readout speeds and voltages we doubled their resistance to radiation damage.',
  radius: 0.4,
  size_m: 3,
  size_estimated: true,
  color: '#ffcc66',
  orbit: { a_km: 1837.4, e: 0, i: 90, M0: 180, rate: 4401.015474, node: 90 }
});

// MMX: launches 20 October 2026 (JAXA, 20 Aug 2026); shown in a Phobos-like orbit round Mars.
insertAfter('LightShip-1', {
  name: 'MMX',
  parent: 'Mars',
  type: 'mission',
  status: 'Planned',
  launch_year: '2026',
  description: 'Martian Moons eXploration (MMX) is a JAXA mission to Mars’s two moons, Phobos and Deimos, due to launch in October 2026 and reach Mars about a year later. It will study both moons from close by, land on Phobos to collect at least 10 grams of its surface and bring the sample back to Earth in 2031, to help settle whether the moons are captured asteroids or debris from a giant impact on Mars. It also carries IDEFIX, a small French-German rover that will drive on Phobos.',
  ou_involvement: 'One of our planetary scientists is on MMX’s science team. In 2023 ESA chose nine European scientists to join the mission’s Science Strategy Teams, and ours is the member for Mars science.',
  radius: 0.4,
  size_m: 4,
  size_estimated: true,
  color: '#ff9966',
  orbit: { a_km: 9376, e: 0.0151, i: 1.08, M0: 60, rate: 1128.8445, illustrative: true },
  status_timeline: [{ from: '2026-10-20', status: 'En Route' }]
});

writeData(data, raw);
console.log('written');
