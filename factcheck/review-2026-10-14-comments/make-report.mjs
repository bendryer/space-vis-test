// Builds report-data.json for the colleague-comments review of 2026-10-14: every comment from the
// shared wording spreadsheet (and the Teams chat and emails folded into it) as a suggested edit.
//   node factcheck/review-2026-10-14-comments/make-report.mjs <sbdb-dir>
// <sbdb-dir> holds JPL SBDB answers (<number>.json, with discovery=1) for the naming citations.
import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const SBDB = process.argv[2];
const citation = n => JSON.parse(fs.readFileSync(path.join(SBDB, `${n}.json`), 'utf8'))
  .discovery.citation.replace(/<\/?i>/g, '').replace(/\s+/g, ' ').trim();

const SHAPE = ' The shape model of this object is awaiting further study - and it may or may not be accurately represented in this visualisation.';
const cite = (n, opening, lead = 'Its official naming citation reads:') =>
  `${opening} ${lead} “${citation(n)}”${SHAPE}`;

// --- Comments by object ---------------------------------------------------------------
// v: fix = wording change, bad = correction of fact, unv = needs your input, ok = for information.
const c = (f, v, q, note, who, sug) => ({ f, v, q, note, flag: who, ...(sug ? { sug } : {}) });
const edit = (f, from, to, why) => ({ e: [{ f, from, to }], ...(why ? { why } : {}) });
const keep = text => ({ keep: text });

const DATA = [];
const add = (n, m, ...claims) => DATA.push({ n, m, c: claims });

add('General comments', 'whole app',
  c('style', 'unv', 'The text is a bit wordy and could be snappier without becoming chatty. "OU" is fine instead of "the Open University" each time. Could we write in the first person ("We do abc. Our researchers discovered xyz")?',
    'Simeon also suggests showing a body’s general text after its heading and before the OU text: that is a change to the details panel, not to data.json.', 'Simeon Barber (email)',
    keep('No change to data.json in this review. Choose “Different change” to ask for a style pass (for example “OU” throughout, or first person).')),
  c('scope', 'ok', 'Things we are working on putting into space are fine to include too, and there are plenty already in the app.', '', 'Dave Rothery (Teams)',
    keep('For information. No change.')),
  c('spelling', 'unv', 'Simeon converted a few US spellings to UK in the sheet (applied object by object below). Others remain in data.json: specializes, characterize, utilized, analyzing, kilometers (Earth-Sun L2) and more.',
    'Quoted asteroid naming citations should keep their original spelling.', 'Simeon Barber (email)',
    keep('Choose “Different change” to have Claude do a UK spelling pass over all text outside quoted citations.')),
  c('honorary asteroids', 'unv', 'Simon Green’s rule for asteroid captions (OU connection first, then the official citation) is applied below to the 11 asteroids in the spreadsheet. Fourteen more honorary asteroids in the app were not in the spreadsheet: 3202 Graff, 9159 McDonnell, 158589 Snodgrass, 15834 McBride, 8463 NaomiMurdoch, 11469 Rozitis, 30226 SamuelLeeJackson, 5497 SaraRussell, 6580 PhilBland, 7552 Sephton, 7635 CarolineSmith, 42772 Kokotanekova.',
    'Simon offered to help with names Ben doesn’t know.', 'Simon Green (email)',
    keep('Choose “Different change” to have Claude draft the same treatment for these, to check with Simon.')),
  c('teaching', 'unv', 'Highlight OU courses informed by the research in the visualisation; add something about the OU’s mission. Simeon: an entry about our teaching ("might be politic to highlight that we don’t do research entirely for the sake of it"), and possibly one on knowledge exchange, terrestrial benefits and impact.',
    'Not an object yet. The spreadsheet had an "OU and You" placeholder row for it.', 'Spreadsheet + Simeon Barber (email)',
    keep('Needs a decision on form (a new entry, a panel, a button that highlights teaching facilities and missions). No change in this review.')),
  c('sample analysis', 'unv', 'Could there be an entry on sample analysis? It isn’t a mission, but Simeon and Mahesh are keen to show the links between sample analysis, sample return and in situ analysis.',
    '', 'Simeon Barber (email)', keep('Needs text from Simeon and Mahesh. No change in this review.')),
);

add('Mercury', 'planet',
  c('ou_involvement', 'bad', 'An OU scientist is the UK lead for BepiColombo’s MIXS X-ray spectrometer.',
    'Dave’s BepiColombo wording names the University of Leicester as instrument lead, with the OU a development partner and now Co-Investigators on MIXS.', 'Dave Rothery (Teams)',
    edit('ou_involvement', "An OU scientist is the UK lead for BepiColombo's MIXS X-ray spectrometer, which will map the elements on Mercury's surface.",
      "OU scientists are Co-Investigators on BepiColombo's MIXS X-ray spectrometer, which will map the elements on Mercury's surface.")),
);

add('BepiColombo', 'mission · En Route · 2018',
  c('ou_involvement', 'fix', 'Dave’s rewrite: M-CAM work is finished, so emphasise the orbital phase and the science instruments.',
    'Merges his Teams wording with the point he added in the sheet (leading ESA’s Mercury Surface and Composition Working Group). His sheet edit called the award an STFC grant.', 'Dave Rothery (Teams + sheet)',
    edit('ou_involvement', '*', "OU academics were members of BepiColombo's M-CAM monitoring camera team, analysing images returned during the spacecraft's Mercury flybys, and have led ESA's Mercury Surface and Composition Working Group. The Open University was also a development partner, alongside instrument lead the University of Leicester, in building the Mercury Imaging X-ray Spectrometer (MIXS). OU scientists are now Co-Investigators on MIXS and on MERTIS (the Mercury Thermal Infrared Spectrometer), associates on SIMBIO-SYS (the orbiter's spectrometer and imaging system), and hold a share of a £3 million STFC 'Astronomy Large Award' to do science from Mercury orbit.")),
  c('description', 'fix', 'Dave’s edits in the sheet: fully commissioned by April 2027; "uses" for "utilizes"; volatiles instead of "unique geological evolution".', '', 'Dave Rothery (sheet)',
    { e: [
      { f: 'description', from: 'due to enter orbit around Mercury on 21 November 2026.', to: 'due to enter orbit around Mercury on 21 November 2026 and to be fully commissioned by April 2027.' },
      { f: 'description', from: 'The mission utilizes two', to: 'The mission uses two' },
      { f: 'description', from: "oversized core and its unique geological evolution.", to: "oversized core and its richness in volatile materials." },
    ] }),
  c('description', 'fix', 'The 3D model shows the moment the Mio orbiter is released; later the MOSIF sunshield is released and the MPO flies free. Reply on Teams: the model was likely based on an artist’s impression; fine for this purpose, but the caption could explain it.',
    'There is no caption field, so the suggestion adds a sentence to the general text.', 'Dave Rothery (Teams)',
    edit('description', "magnetic field to date.",
      "magnetic field to date. The model shows the moment JAXA's Mio orbiter is released; after that, the MOSIF sunshield separates and ESA's Mercury Planetary Orbiter (MPO) flies free.")),
);

add('Moon', 'moon of Earth',
  c('description', 'fix', 'Simeon’s new general text for the Moon.', '', 'Simeon Barber (sheet)',
    edit('description', '*', "Since its formation 4.5 billion years ago, the Moon has been our nearest neighbour in space. Its cratered surface preserves a historical record of the near-Earth environment long since lost on our home planet. The Moon influences our planet's tides and rotational stability, our culture and our scientific understanding of our place in the Universe. It is the only celestial body that humans have visited, and is widely regarded as a potential stepping stone into deep space.")),
);

add('PROSPECT', 'mission · Planned · 2027',
  c('ou_involvement', 'fix', 'New OU text from the sheet.', 'Written in the first person ("Our mass spectrometers"); the suggestion keeps the app’s third person.', 'Sheet (unsigned)',
    edit('ou_involvement', '*', "The OU is leading the design and development of ProSPA, a miniature laboratory to analyse samples in situ on the Moon. The instrument heats and processes lunar soil in the same way that meteorites and returned samples are analysed in laboratories on Earth. Its mass spectrometers identify, quantify and isotopically characterise water ice and other volatiles of high interest for science and exploration.")),
  c('description', 'fix', 'New general text from the sheet.', '', 'Sheet (unsigned)',
    edit('description', '*', "PROSPECT is the European Space Agency's exploration science payload for finding and analysing water ice and other materials on the Moon. An Italian drill collects samples from up to a metre below the surface, for analysis in the OU-provided ProSPA instrument. The package will be delivered to a south polar region of the Moon by the Intuitive Machines IM-4 lander in 2028.")),
  c('launch_year', 'bad', 'The new text says IM-4 delivers PROSPECT in 2028; the app says 2027.', '', 'Sheet (unsigned)',
    edit('launch_year', '2027', '2028')),
);

add('Peregrine', 'mission · Lost · 2024',
  c('ou_involvement', 'fix', 'New OU text from the sheet.', 'Kept close to the original; "We successfully operated" becomes "OU researchers successfully operated" to match the app’s third person.', 'Sheet (unsigned)',
    edit('ou_involvement', '*', "The OU proposed and developed the Exospheric Mass Spectrometer (EMS) as a European contribution to NASA's PITMS instrument. EMS was funded by ESA and developed with RAL Space, on a fast-track process to meet tight budget and timescale constraints. Its aim was to measure the thin lunar exosphere and how it changes with both natural phenomena (such as the lunar day-night cycle) and the lander's own effects. OU researchers successfully operated the instrument in space to help diagnose the health of the spacecraft, and proved the technology ready for re-use on the upcoming PROSPECT mission.")),
  c('description', 'fix', 'New general text from the sheet (the sheet calls it Peregrine-1).', 'The object keeps the name Peregrine in the app.', 'Sheet (unsigned)',
    edit('description', '*', "Peregrine-1 was developed by Astrobotic under NASA's Artemis and Commercial Lunar Payload Services programmes. Launched in 2024, it aimed to be the first commercially developed spacecraft to land on the Moon. However, a propulsion system fault after launch ruled out a landing attempt, and instead the spacecraft was operated as a test flight for a week before a controlled disposal in Earth's atmosphere.",
      '"Commercial Lunar Services Programs" in the sheet is NASA’s Commercial Lunar Payload Services (CLPS) programme.')),
);

add('LUPEX', 'mission · Planned · In Dev',
  c('ou_involvement', 'bad', 'New OU text from the sheet. It names the instrument the Exospheric Mass Spectrometer (EMS-L), an ESA instrument; the app says "Exploration Mass Spectrometer", an instrument for JAXA.',
    'The sheet’s last sentence (how long LUPEX will operate) is about the mission, so it moves to the general text.', 'Sheet (unsigned, row 91)',
    edit('ou_involvement', '*', "The Open University is developing the Exospheric Mass Spectrometer for LUPEX (EMS-L), an ESA instrument for the JAXA-ISRO Lunar Polar Exploration (LUPEX) rover mission, currently targeted for launch no earlier than 2028. Building on the OU's heritage in miniature ion-trap mass spectrometry, EMS-L will measure water and other volatile species in the lunar exosphere and those released from the surface and subsurface during rover and drilling activities, helping to characterise the distribution and behaviour of volatiles in the Moon's south polar region.")),
  c('description', 'fix', 'New general text from the sheet, with the length of the mission.', '', 'Sheet (unsigned, rows 91-92)',
    edit('description', '*', "The Lunar Polar Exploration (LUPEX) mission is a joint JAXA-ISRO mission to investigate water and other resources in the Moon's south polar region. Currently targeted for launch no earlier than 2028, it will use a mobile rover to explore areas with differing illumination, temperature and geology, investigating the distribution, abundance and physical state of lunar water at several sites and at depths of up to about 1.5 metres. The rover is planned to operate for about 3.5 months after landing, and possibly for up to a year.")),
  c('launch_year', 'fix', 'Launch is targeted for no earlier than 2028; the app shows "In Dev".', '', 'Sheet (unsigned, row 91)',
    edit('launch_year', 'In Dev', '2028')),
);

add('NewAthena', 'mission · Planned · In Dev',
  c('description', 'bad', 'Launch is planned for 2038 (the app says around 2037). The comment also says it is at Earth-Sun L1, not L2: the app already has it at L1.', '', 'Sheet (unsigned)',
    edit('description', 'due for launch around 2037', 'due for launch in 2038')),
  c('model', 'unv', 'The 3D model is wrong: it looks more like two Athena spacecraft stuck end to end than the real design.', 'Needs a new model; nothing to change in the text.', 'Sheet (unsigned)',
    keep('Keep the current model until a better one is made.')),
);

add('ExoMars TGO', 'mission · Operational · 2016',
  c('ou_involvement', 'fix', 'Mention coordinated experiments with other spacecraft, such as measuring methane from orbit at the same time as Curiosity on the ground.', '', 'Sheet (unsigned)',
    edit('ou_involvement', 'This work involves international collaboration', 'Occasionally, coordinated experiments are carried out with other spacecraft, such as measuring methane from orbit at the same time as the Curiosity rover measures it on the ground. This work involves international collaboration')),
);

add('Perseverance', 'mission · Operational · 2020',
  c('ou_involvement', 'bad', 'More than one OU researcher was part of the group, and it did not advise on which samples were collected (that was always the Perseverance team’s job). It advised on what happened next.', '', 'Sheet (unsigned)',
    edit('ou_involvement', "An Open University researcher is part of the international NASA/ESA Mars Sample Return Campaign Science Group advising on which samples collected by Perseverance in Jezero Crater should be prioritised for return to Earth.",
      "Open University researchers were part of the NASA/ESA Mars Sample Return Campaign Science Group and the planetary protection efforts, planning how best to return the samples collected by Perseverance in Jezero Crater and analyse them once they are back on Earth.")),
);

add('ExoMars Rosalind Franklin', 'mission · Planned · 2028',
  c('ou_involvement', 'fix', 'Fuller roles: co-PI for PanCam, Interdisciplinary Scientist, operations simulations and field trials.', '', 'Sheet (unsigned)',
    edit('ou_involvement', '*', "Open University researchers are members of the Rosalind Franklin rover's science team, serving as co-principal investigator for its PanCam camera system, as an Interdisciplinary Scientist, and more generally in support of PanCam and the Enfys spectrometer. OU researchers are also leading and contributing to mission preparations through operations simulations and field trials.")),
);

add('MSL Curiosity', 'mission · Operational · 2011',
  c('ou_involvement', 'fix', 'OU academics are on the science and operations teams.', '', 'Sheet (unsigned)',
    edit('ou_involvement', 'members of the Mars Science Laboratory science team', 'members of the Mars Science Laboratory science and operations teams')),
  c('description', 'fix', 'It has recently passed 5,000 sols on Mars.', '', 'Sheet (unsigned)',
    edit('description', 'that has been exploring Gale Crater since 2012.', 'that has been exploring Gale Crater since 2012, recently passing 5,000 sols (Martian days) on the surface.')),
  c('description', 'ok', 'The commenter will say when Curiosity passes sol 5,111 and becomes the longest-serving rover on Mars, some time in spring 2027.', '', 'Sheet (unsigned)',
    keep('For information. Update the text then.')),
);

add('Rosetta', 'mission · Complete · 2004',
  c('description', 'fix', 'After the sentence on the orbiter, add that a lander was deployed to study the surface in situ.', '', 'Sheet (unsigned)',
    edit('description', 'as it travelled through the inner Solar System.', 'as it travelled through the inner Solar System. It also deployed a lander, Philae, to study the surface in situ, providing ground truth for the orbiter\'s measurements.')),
);

add('Europa', 'moon of Jupiter',
  c('ou_involvement', 'unv', 'The Europa text could include our ocean research, as we don’t only focus on the ice surfaces.', '', 'Vic Pearson (email)',
    keep('Ask Vic for a sentence on the ocean research, then add it.')),
);

add('Ganymede', 'moon of Jupiter',
  c('ou_involvement', 'bad', 'AstrobiologyOU has no active research on Ganymede, as the text suggests.',
    'The suggestion keeps only the OU’s hardware link, through the JANUS camera on JUICE (as in the JUICE entry).', 'Vic Pearson (email)',
    edit('ou_involvement', '*', "The Open University's Centre for Electronic Imaging developed and tested the image sensor in the JANUS camera on ESA's JUICE mission, which will study Ganymede from orbit.")),
);

add('JUICE', 'mission · En Route · 2023',
  c('ou_involvement', 'ok', 'Ask Mark Fox-Powell about science involvement in future icy-moon missions. Ben has asked Mark and Rachael.', '', 'Sheet (BD)',
    keep('For information. Waiting to hear back.')),
);

add('Genesis', 'mission · Complete · 2001',
  c('ou_involvement', 'bad', 'Ian Franchi and Colin Pillinger were Genesis Science Team members (roughly Co-Is): they developed some of the solar-wind collectors, new analytical techniques for the returned samples, and led contamination characterisation and clean-up after the crash landing. Contamination meant they could not make meaningful measurements.',
    'Ian thinks this is much better than the current text. The suggestion keeps the OU-research link from the old text as a last sentence, and names groups rather than individuals, as elsewhere.', 'Ian Franchi (email)',
    edit('ou_involvement', '*', "OU scientists were members of the Genesis Science Team, roughly equivalent to Co-Investigators. They developed some of the detectors used to collect the solar wind, developed new techniques for analysing the returned samples, and carried out extensive work to characterise and clean up surface contamination after the capsule's crash landing on Earth. The contamination meant the OU team could not make meaningful measurements, but the mission's finding that the Sun is richer in oxygen-16 than the Earth, Moon, Mars and meteorites remains a key reference point for OU research on oxygen isotopes.")),
);

add('Bennu', 'asteroid',
  c('ou_involvement', 'fix', 'Bennu was OSIRIS-REx’s target, so the OU information is the same as for that mission. Are separate entries needed?',
    'Bennu stays in the app (it has a real shape model). The suggestion gives it a short OU line that points to OSIRIS-REx.', 'Ian Franchi (email)',
    edit('ou_involvement', '*', "OU researchers helped choose where NASA's OSIRIS-REx spacecraft would sample Bennu, and are analysing the material it brought back to Earth (see OSIRIS-REx).")),
);
add('Ryugu', 'asteroid',
  c('ou_involvement', 'fix', 'Ryugu was Hayabusa2’s target, so the OU information is the same as for that mission. Are separate entries needed?',
    'The suggestion gives Ryugu a short OU line that points to Hayabusa2.', 'Ian Franchi (email)',
    edit('ou_involvement', '*', "The OU's oxygen isotope laboratory is one of the international groups analysing samples of Ryugu returned by JAXA's Hayabusa2 mission (see Hayabusa2).")),
);

add('Ariel', 'mission · Planned · 2029',
  c('ou_involvement', 'fix', 'Jo’s suggested OU text (the app has none).', 'The second half of her note (launch 2031, first large population studies) is general text; the description already covers it.', 'Jo Barstow (sheet + email)',
    edit('ou_involvement', '*', "Members of the OU Astronomy group have served as science advisory team members and working group leads for Ariel, which will study the atmospheres of about 1,000 exoplanets. It will allow the first large population studies of exoplanet atmospheres, helping us understand more about how planets form and evolve.")),
  c('launch_year', 'bad', 'Jo says Ariel is due to launch in 2031; the app says 2029.', '', 'Jo Barstow (sheet)',
    edit('launch_year', '2029', '2031')),
);

add('AKARI', 'mission · Decommissioned · 2006',
  c('description', 'fix', 'UK spelling.', '', 'Simeon Barber (sheet spellcheck)', edit('description', 'catalogs', 'catalogues')));
add('Spitzer', 'mission · Decommissioned · 2003',
  c('ou_involvement', 'fix', 'UK spelling.', '', 'Simeon Barber (sheet spellcheck)', edit('ou_involvement', 'OU scientists analyze', 'OU scientists analyse')));
add('Earth-Sun L1', 'reference point',
  c('description', 'fix', 'UK spelling.', '', 'Simeon Barber (sheet spellcheck)', edit('description', '1.5 million kilometers', '1.5 million kilometres')));

// Honorary asteroids: Simeon's spellings, then Simon Green's structure (OU connection, then the citation).
const spell = (from, to) => c('description', 'fix', `UK spelling: "${to}".`, 'Superseded if you accept the rewrite below.', 'Simeon Barber (sheet spellcheck)', edit('description', from, to));
const restructure = (n, num, opening, extra = {}) => c('description', 'fix',
  'Simon Green: OU connection first, then the official citation, which stays as written.', extra.note || '', extra.who || 'Simon Green (email)',
  { e: [{ f: 'description', from: '*', to: cite(num, opening, extra.lead) }], why: extra.why || 'The citation is quoted from the JPL Small-Body Database. The opening sentence comes from the current text; the fact check will confirm each role.' });

add('4731 MonicaGrady', 'honorary asteroid',
  restructure('4731 MonicaGrady', 4731, 'A main-belt asteroid named after Monica Grady, Emeritus Professor at the Open University.', {
    lead: 'Its official citation, written while she was curator of the meteorite collection at the Natural History Museum in London, reads:',
    note: 'Dave Rothery (Teams): Monica is surely no longer an NHM curator; insert "former"? Simon’s structure answers this without changing the citation.',
    who: 'Simon Green (email) + Dave Rothery (Teams)' }));
add('20386 IanFranchi', 'honorary asteroid', spell('named in honor of', 'named in honour of'),
  restructure('', 20386, 'A main-belt asteroid named after Ian Franchi, Emeritus Professor at the Open University.'));
add('20617 RichardGreenwood', 'honorary asteroid', spell('asteroid honoring', 'asteroid honouring'),
  restructure('', 20617, 'A main-belt asteroid named after Richard Greenwood, a senior research fellow at the Open University.'));
add('20626 Rider-Stokes', 'honorary asteroid',
  c('description', 'fix', 'UK spelling: "honouring", "analogues".', 'Superseded if you accept the rewrite below.', 'Simeon Barber (sheet spellcheck)',
    { e: [{ f: 'description', from: 'asteroid honoring', to: 'asteroid honouring' }, { f: 'description', from: 'meteoritic analogs', to: 'meteoritic analogues' }] }),
  restructure('', 20626, 'A main-belt asteroid named after Ben Rider-Stokes, a post-doctoral researcher at the Open University.'));
add('69423 OpenUni', 'honorary asteroid', spell('Named in honor of', 'Named in honour of'),
  restructure('', 69423, 'A main-belt asteroid named after the Open University itself.'));
add('10230 AndrewNorton', 'honorary asteroid', spell('asteroid honoring', 'asteroid honouring'),
  restructure('', 10230, 'A main-belt asteroid named after Andrew Norton, formerly a Professor at the Open University.'));
add('9831 SimonGreen', 'honorary asteroid', spell('asteroid honoring', 'asteroid honouring'),
  restructure('', 9831, 'A main-belt asteroid named after Simon Green, Emeritus Professor at the Open University.'));
add('15614 Pillinger', 'honorary asteroid', spell('Named in honor of', 'Named in honour of'),
  restructure('', 15614, 'A main-belt asteroid named after Colin Pillinger (1943-2014), Professor at the Open University and leader of the Beagle 2 Mars lander.'));
add('20594 Pemartin', 'honorary asteroid', spell('asteroid honoring', 'asteroid honouring'),
  (() => {
    const x = restructure('', 20594, 'A main-belt asteroid named after Pierre-Etienne Martin, now a Postdoctoral Research Associate at the Open University, for his earlier work.', {
      who: 'Simon Green + Pierre-Etienne Martin (emails)',
      note: 'Pierre-Etienne asked for "(CMs)" to be removed: CM stands for Mighei-like chondrites, not carbonaceous meteorites. That alters the quoted citation; the suggestion removes it as he asked. His role is from his email signature.' });
    x.sug.e[0].to = x.sug.e[0].to.replace(' (CMs).', '.');
    return x;
  })());
add('17920 Zarnecki', 'honorary asteroid', spell('Named in honor of', 'Named in honour of'),
  restructure('', 17920, 'A main-belt asteroid named after space scientist John Zarnecki, formerly of the Open University.'));
add('25275 Jocelynbell', 'honorary asteroid',
  restructure('', 25275, 'A main-belt asteroid named after astrophysicist Jocelyn Bell Burnell, Head of Physics at the Open University from 1991 to 2001.', {
    note: 'Andrew Norton pointed this asteroid out (via Simon Green). The current text also lists her presidencies (RAS, IoP, RSE), which this drops. The citation spells Hewish’s first name "Anthony"; he was Antony.' }));

// --- New objects ----------------------------------------------------------------------
const GAPS = [
  { n: 'Schiaparelli', why: 'Suggested in the sheet’s "missing a mission" boxes.', addable: true,
    kv: [['type', 'mission'], ['parent', 'Mars'], ['status', 'Crashed'], ['launch_year', '2016'], ['orbit_type', 'landed'],
      ['landed_coords', '{"lat":-2.052,"lon":-6.208} (crash site, Meridiani Planum)'], ['model', 'none yet (generic placeholder); icon lander'],
      ['description', "Schiaparelli was ESA's Entry, Descent and Landing Demonstrator Module, carried to Mars with the ExoMars Trace Gas Orbiter in 2016. It returned data throughout its descent through the Martian atmosphere, but a fault in its guidance software ended its parachute phase too early, and it crashed onto Meridiani Planum on 19 October 2016."],
      ['ou_involvement', "The OU was part of the team behind DREAMS, Schiaparelli's suite of environmental sensors designed to measure the weather at the surface of Mars. OU scientists were also heavily involved in analysing the entry, descent and landing data to work out the state of the Martian atmosphere when it arrived."]],
    note: 'The general text and crash site are drafted by Claude; the fact check will confirm them.' },
  { n: 'I-MIM', why: 'Suggested in the sheet’s "missing a mission" boxes.', addable: true,
    kv: [['type', 'mission'], ['parent', 'Mars'], ['status', 'Planned'], ['launch_year', 'TBC'],
      ['orbit', 'illustrative low Mars orbit (a_km 3,796, i 90)'], ['model', 'none yet (hologram placeholder)'],
      ['description', 'The International Mars Ice Mapper (I-MIM) is a proposed orbiter, led by NASA with international partners, that would use radar to map water ice buried near the surface of Mars and help choose landing sites for future human missions.'],
      ['ou_involvement', "The OU is leading the analysis of the CHROMA-D detector for imaging the surface of Mars on the I-MIM mission. OU researchers are characterising the detector's performance and its sensitivity to radiation, to assess how well it suits the mission."]],
    note: 'Check the mission’s status in the fact check: its funding has been uncertain.' },
  { n: 'AlSat-Nano', why: 'Suggested in the sheet’s "missing a mission" boxes.', addable: true,
    kv: [['type', 'mission'], ['parent', 'Earth'], ['status', 'Complete'], ['launch_year', '2016'],
      ['orbit', 'illustrative Sun-synchronous orbit (a_km 7,058, i 98.2)'], ['model', '/models/cubesat.glb (as UKube-1)'], ['size_m', '0.34'],
      ['description', 'AlSat-Nano was a joint UK-Algerian mission to build and operate a 3U CubeSat, launched in 2016. The project was designed to train Algerian students, drawing on UK engineering experience.'],
      ['ou_involvement', "The OU provided the C3D2 camera payload, based on the C3D camera flown on UKube-1. It took pictures of the Earth's surface while advancing the technology readiness of commercial camera sensors, and also monitored the CubeSat's deployable AstroTube boom."]],
    note: 'Launch year and orbit drafted by Claude; check in the fact check.' },
  { n: 'DART', why: 'In the sheet’s suggestion boxes (name only). Simon Green was involved.', addable: true,
    kv: [['type', 'mission'], ['parent', 'Dimorphos'], ['status', 'Complete'], ['launch_year', '2021'],
      ['orbit_type', 'landed (on Dimorphos, at an illustrative impact site)'], ['model', 'none yet (generic placeholder)'], ['menu_parent', 'Didymos (beside Hera)'],
      ['description', "NASA's Double Asteroid Redirection Test (DART) was the first test of planetary defence by changing an asteroid's path. Launched in November 2021, it deliberately crashed into Dimorphos, the small moon of the asteroid Didymos, on 26 September 2022, shortening its orbit by about 32 minutes. ESA's Hera mission was sent to study the aftermath."],
      ['ou_involvement', '(none yet: ask Simon Green)']],
    note: 'DART no longer exists, so showing it sitting on Dimorphos is a stand-in for the impact site. Choose "Add with changes" if you would rather show it another way, or wait for Simon’s OU text.' },
  { n: 'MAGPIE', why: 'Added to the sheet by a colleague (rows 89).', addable: true,
    kv: [['type', 'mission'], ['parent', 'Moon'], ['status', 'Planned'], ['launch_year', '2029'], ['orbit_type', 'landed'],
      ['landed_coords', 'illustrative south-pole site, kept clear of PROSPECT and LUPEX'], ['model', 'none yet (hologram placeholder); icon rover'],
      ['description', "MAGPIE is ESA's first lunar rover, designed to operate for up to 10 Earth days at the lunar south pole, where it will drill into the subsurface to analyse material for water and other volatiles. The rover is being built by ispace Europe and is scheduled to launch with Intuitive Machines in 2029."],
      ['ou_involvement', "The Open University is contracted to develop the Volatile Analyser (VA), a key element of the Lunar Volatiles Science (LVS) payload for ESA's MAGPIE rover. Building on the OU's heritage in ion-trap mass spectrometry, the instrument will analyse lunar material to identify and measure water and other volatiles, helping to characterise their abundance and how they vary with depth at the Moon's south pole."]],
    note: 'Simeon Barber: Simon Sheridan is the contact for MAGPIE, and the team should have proper renders for a model.' },
  { n: 'Shackleton Rover', why: 'Added to the sheet by a colleague (row 90).', addable: true,
    kv: [['type', 'mission'], ['parent', 'Moon'], ['status', 'Planned'], ['launch_year', '2030'], ['orbit_type', 'landed'],
      ['landed_coords', 'illustrative, near Shackleton crater at the south pole'], ['model', 'none yet (hologram placeholder); icon rover'],
      ['description', "Taking inspiration from Sir Ernest Shackleton's 1914 expedition, and in coordination with his family, Shackleton Rover is a proposed UK-led mission to the lunar south pole. It would showcase and develop the UK's technological, scientific and industrial capabilities in space exploration while inspiring the next generation of space scientists and engineers. By establishing a long-lived experiment on the Moon, it would also give the UK a voice in the responsible exploration of the Moon and its resources."],
      ['ou_involvement', 'Open University scientists are involved in defining the payload and the mission for the Shackleton Rover, a concept for an entirely UK-built and operated rover system for the lunar south pole.']],
    note: 'Simeon Barber: there are very few graphics yet (only the pitch deck at shackletonrover.co.uk); he is encouraging the team to design something, and suggests an animation like the Beagle 2 one. The 2030 launch year was typed in the sheet.' },
  { n: 'Itokawa', why: 'Ben Rider-Stokes (email): he was recently allocated Itokawa particles, and Monica Grady has studied them before.', addable: true,
    kv: [['type', 'asteroid'], ['parent', 'Sun'], ['status', 'Natural'], ['radius_km', '0.2675 (half its 535 m length)'],
      ['orbit', 'from JPL SBDB: a_au 1.324052, e 0.280178, i 1.6209, node 69.0745, peri 162.8409, rate 0.646914, M0 44.3783'],
      ['rot_period', '0.50552 (12.13 h)'], ['model', '/models/Asteroid2.glb (generic)'],
      ['description', 'Itokawa is a small, peanut-shaped near-Earth asteroid about 535 metres long, named after Hideo Itokawa, the father of Japanese rocketry. In 2005 it was visited by JAXA\'s Hayabusa spacecraft, which in 2010 brought back the first samples ever collected from an asteroid. Its surface of boulders and gravel suggests it is a rubble pile, reassembled from the fragments of an earlier collision.'],
      ['ou_involvement', "OU researchers have been allocated particles of Itokawa returned by Hayabusa, to study what the asteroid is made of and how it formed."]],
    s: [{ t: 'JPL SBDB: 25143 Itokawa', u: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=25143' }] },
  { n: 'Hayabusa', why: 'Goes with Itokawa (Ben Rider-Stokes).', addable: true,
    kv: [['type', 'mission'], ['parent', 'Itokawa'], ['status', 'Complete'], ['launch_year', '2003'],
      ['orbit', 'hovering beside Itokawa (as Hayabusa2 at Ryugu)'], ['model', 'none yet (generic placeholder)'],
      ['description', "Hayabusa was a JAXA mission that launched in 2003 and reached the near-Earth asteroid Itokawa in 2005. Despite many technical setbacks, it returned a capsule containing tiny grains of the asteroid to Earth in 2010: the first asteroid samples ever brought back."],
      ['ou_involvement', 'OU researchers study grains of Itokawa returned by Hayabusa (see Itokawa).']] },
  { n: 'Enceladus', why: 'Dave Rothery (Teams): ask Rachael Hamp, who is on the team for ESA’s proposed L4 Enceladus Orbilander (2050s). Vic Pearson (email) also flagged the L4 Enceladus work as missing.', addable: true,
    kv: [['type', 'moon'], ['parent', 'Saturn'], ['status', 'Natural'], ['radius_km', '252.1'], ['gm', '7.211'],
      ['orbit', 'from JPL mean elements: a_km 238,400, e 0.0047, rate 262.7319; Laplace plane'], ['texture', 'none (plain icy sphere)'],
      ['description', "Enceladus is a small, bright icy moon of Saturn, about 500 km across. Jets of water vapour and ice grains erupt from cracks near its south pole, fed by a salty ocean beneath its icy crust, and the Cassini spacecraft sampled them by flying through the plume. Its ocean contains many of the ingredients thought to be needed for life, making it a prime target in the search for habitable worlds."],
      ['ou_involvement', '(none yet: ask Rachael Hamp for a few words on the OU’s part in the proposed L4 Enceladus mission)']],
    note: 'The Orbilander itself is a 2050s proposal, so the suggestion is the moon, with the mission work in its OU text once Rachael supplies it.' },
];

const report = {
  meta: {
    title: 'OUniverse colleague comments', h1: 'Colleagues’ comments: approve the changes',
    eyebrow: 'Wording review · 14 October 2026',
    lede: 'Every comment from the "OUniverse wording - comments welcome" spreadsheet, with the Teams chat and emails folded into it, turned into a suggested change to data.json. Accept, keep or give your own instruction for each, and choose which new objects to add. Once applied, a fresh comment-free spreadsheet is exported from the app’s text. A fact check of the changed and new text follows.',
    statusText: 'Each comment below has a suggested change. Choose accept, keep, or write your own instruction. Choices save as you go. Submit when you’re done, then tell Claude in chat to apply them.',
    labels: { fix: 'Wording change', bad: 'Correction', unv: 'Needs your input', ok: 'For information' },
    tabLabels: { claims: 'Comments by object', unv: 'Needs your input', gaps: 'New objects', method: 'About' },
    hideTabs: ['nums'],
    unvLede: 'Comments that need a decision or more text from someone before anything changes.',
    gapsLede: 'Objects colleagues asked for that aren’t in the app yet. Each card gives the values data.json needs. Text in the colleague’s words where they gave it, otherwise drafted by Claude for the fact check to confirm. Placements marked illustrative are stand-ins.',
    method: [
      'Sources: the shared spreadsheet as it stood on 14 October 2026 (comments in its yellow boxes and edits made directly in its text columns), the Teams chat, and two email chains (in VisMessages).',
      'Wording changes keep the colleague’s words where they gave them, tidied to the app’s style (third person, UK spelling). The note on each says what was adapted.',
      'Asteroid naming citations are quoted from the JPL Small-Body Database.',
      'Not in this review: asset notes (models, renders), asteroid face-model permissions, and the suggested name change.',
      'Nothing has been fact-checked yet. That is the next step, on whatever you accept here.',
    ],
    checked: '2026-10-14', reviewDate: '2026-10-14', dataFile: 'public/data.json',
  },
  DATA, NUMS: [], GAPS,
};
fs.writeFileSync(path.join(DIR, 'report-data.json'), JSON.stringify(report, null, 1) + '\n');
console.log(`${DATA.reduce((a, o) => a + o.c.length, 0)} comments on ${DATA.length} objects, ${GAPS.length} new objects`);
