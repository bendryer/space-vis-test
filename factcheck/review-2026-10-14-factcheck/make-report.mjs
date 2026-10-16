// Builds report-data.json for the fact check of 2026-10-14 (after the colleague-comments review):
// new and changed text, statuses, numbers, flagged claims, plus first-person, snappier rewrites.
//   node factcheck/review-2026-10-14-factcheck/make-report.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(DIR, '../../public/data.json'), 'utf8'));
const by = Object.fromEntries(data.map(o => [o.name, o]));
const meta = o => [o.type, o.status, o.launch_year].filter(Boolean).join(' · ');

// ---- sources ----
const S = {
  sbdb: n => ({ t: `JPL SBDB: ${n}`, u: `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=${n}&discovery=1` }),
  heraEsa: { t: 'ESA: Hera targets early arrival at Didymos', u: 'https://www.esa.int/Space_Safety/Hera/ESA_s_Hera_targets_early_arrival_at_Didymos_asteroids' },
  heraOps: { t: 'ESA: Hera operations', u: 'https://www.esa.int/Enabling_Support/Operations/Hera_operations' },
  heraSpace: { t: 'Space.com: Hera on course for November rendezvous', u: 'https://www.space.com/astronomy/asteroids/like-accelerating-from-stationary-to-supersonic-flight-europes-hera-probe-boosts-speed-stays-on-course-for-november-asteroid-rendezvous' },
  bepiWiki: { t: 'Wikipedia: BepiColombo', u: 'https://en.wikipedia.org/wiki/BepiColombo' },
  bepiEpsc: { t: 'EPSC 2026 session TP18: BepiColombo nears Mercury', u: 'https://meetingorganizer.copernicus.org/EPSC2026/session/59247' },
  smile: { t: 'Cislunar Space: SMILE launched 19 May 2026', u: 'https://cislunarspace.cn/en/space-news/2026/05/2026-05-19-smile-satellite-launch-success/' },
  roman: { t: 'Sci.News: Roman launches', u: 'https://www.sci.news/astronomy/roman-space-telescope-launch-15027.html' },
  romanDate: { t: 'SpacePolicyOnline: NASA sets launch date for Roman', u: 'https://spacepolicyonline.com/news/nasa-sets-launch-date-for-roman-space-telescope/' },
  swiftNoGo: { t: 'SpacePolicyOnline: No-go for Katalyst reboost of Swift', u: 'https://spacepolicyonline.com/?p=90438' },
  swiftLikely: { t: 'Nature World News: Swift will likely re-enter this year', u: 'https://www.natureworldnews.com/articles/73189/20260821/nasa-says-swift-observatory-will-likely-reenter-earths-atmosphere-this-year-after-commercial-boost.htm' },
  im4: { t: 'NASA: CLPS flight Intuitive Machines IM-4 (2027)', u: 'https://www.nasa.gov/event/clps-flight-intuitive-machines-im-4' },
  prospectEsa: { t: 'ESA video: Prospect mission (June 2026)', u: 'https://www.esa.int/ESA_Multimedia/Videos/2026/06/Prospect_mission' },
  prospectRide: { t: 'ESA: European drill and mini lab secure ride to the Moon', u: 'https://www.esa.int/Newsroom/Press_Releases/European_drill_and_mini_lab_secure_ride_to_the_Moon' },
  plato: { t: 'ESA: Plato’s launch on Ariane 6 (start of 2027)', u: 'https://www.esa.int/ESA_Multimedia/Videos/2026/03/Plato_s_launch_on_Ariane_6' },
  hy2: { t: 'Planetary Society: Hayabusa2', u: 'https://www.planetary.org/space-missions/hayabusa2' },
  hy2Dlr: { t: 'DLR: Hayabusa2# flyby of Torifune (July 2026)', u: 'https://www.dlr.de/en/latest/news/2026/hayabusa2-asteroid-probe-spectacular-high-speed-flyby-of-the-mini-asteroid-torifune' },
  arielWiki: { t: 'Wikipedia (March 2026 snapshot): Ariel, likely delayed to 2031', u: 'https://wiki.krisyotam.com/content/wikipedia_en_all_nopic_2026-03/ARIEL' },
  arielOu: { t: 'OU news: Ariel space mission moves one step closer to reality', u: 'https://www.open.ac.uk/blogs/news/science-mct/space/ariel-space-mission-moves-one-step-closer-to-reality/' },
  juiceFlyby: { t: 'Sky at Night: Juice Earth flyby, 28 September 2026', u: 'https://www.skyatnightmagazine.com/news/juice-earth-flyby-2026' },
  lupex: { t: 'ThePrint: JAXA-ISRO Chandrayaan-5 review', u: 'https://theprint.in/science/jaxa-isro-scientists-mission-interface-chandrayaan-5-partnership/3001095/' },
  sheridan: { t: 'OU profile: Simon Sheridan (EMS-L, LUPEX)', u: 'https://profiles.open.ac.uk/simon-sheridan' },
  magpieWiki: { t: 'Wikipedia: MAGPIE (rover)', u: 'https://en.wikipedia.org/wiki/MAGPIE_(rover)' },
  magpieIspace: { t: 'ispace: ESA awards ispace-EUROPE contract for MAGPIE', u: 'https://www.ispace-inc.com/2026/07/24/esa-awards-ispace-europe-contract-for-execution-of-magpie-esas-first-lunar-rover/' },
  magpieTum: { t: 'TUM: Lunar Volatiles Scout on MAGPIE (OU Volatile Analyzer)', u: 'https://www.asg.ed.tum.de/en/lpe/research/lvs-on-magpie/' },
  athenaFact: { t: 'ESA: NewAthena factsheet (launch 2037)', u: 'https://www.esa.int/Science_Exploration/Space_Science/NewAthena_factsheet' },
  athenaSched: { t: 'ESA Cosmos: NewAthena schedule', u: 'https://www.cosmos.esa.int/web/athena/schedule' },
  imimOu: { t: 'OU news: £1.2 million for Mars imaging technology (Dec 2025)', u: 'https://www.open.ac.uk/blogs/news/science-mct/ou-space-researchers-awarded-1-2-million-to-advance-imaging-technology-supporting-the-future-human-exploration-of-mars/' },
  imimWiki: { t: 'Wikipedia: International Mars Ice Mapper', u: 'https://en.wikipedia.org/wiki/International_Mars_Ice_Mapper_Mission' },
  shack: { t: 'Shackleton Rover (pitch site)', u: 'https://shackletonrover.co.uk/' },
  alsatGov: { t: 'UK Space Agency: launch success for AlSat-Nano', u: 'https://gov.uk/government/news/launch-success-for-alsat-nano' },
  alsatOro: { t: 'ORO: Development and flight results from the C3D2 imager on AlSat Nano', u: 'https://oro.open.ac.uk/56500' },
  alsatSky: { t: 'Gunter’s Space Page: AlSat-Nano (orbit 661 × 700 km, 98.2°)', u: 'https://space.skyrocket.de/doc_sdat/alsat-nano.htm' },
  dreams: { t: 'ESA: DREAMS MetMast (team credit)', u: 'https://exploration.esa.int/web/mars/-/56538-metmast-with-sensors-annotated' },
  amelia: { t: 'OU digital archive: AMELIA (Schiaparelli descent)', u: 'https://www.open.ac.uk/library/digital-archive/program/video:SHL00095' },
  aboudan: { t: 'Aboudan et al. 2018, Space Sci. Rev.: Schiaparelli trajectory and atmosphere reconstruction', u: 'https://research.unipd.it/bitstream/11577/3277352/2/ExoMars-2016-Schiaparelli-Module-Trajectory-and-Atmospheric-Profiles-Reconstruction-Analysis-of-the-Onboard-Inertial-and-Radar-Measurements2018Space-Science-Reviews.pdf' },
  schiaSite: { t: 'Sci.News: Schiaparelli crash site (2.07° S, 353.79° E)', u: 'https://www.sci.news/space/schiaparellis-crash-site-04299.html' },
  itokawaOrg: { t: 'Chan et al. 2021, Sci. Rep.: Organic matter and water from asteroid Itokawa', u: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7933418/' },
  itokawaNasa: { t: 'NASA NTRS: Itokawa organics (OU Raman spectroscopy)', u: 'https://ntrs.nasa.gov/citations/20210022845' },
  hayabusaDarts: { t: 'JAXA DARTS: Hayabusa (home position about 7 km)', u: 'https://darts.isas.jaxa.jp/planet/project/hayabusa' },
  l4: { t: 'ESA L4 Expert Committee report: Moons of the Giant Planets (2024)', u: 'https://europeanspaceflight.com/wp-content/uploads/2024/04/ESA_L4_Expert_Committee_report_Voyage_2050_Moons_of_the_Giant_Planets.pdf' },
  l4astro: { t: 'Astronomy: Inside ESA’s L4 mission to Enceladus', u: 'https://www.astronomy.com/science/target-enceladus/' },
  satElem: { t: 'JPL: Planetary satellite mean elements', u: 'https://ssd.jpl.nasa.gov/sats/elem/' },
  dartImpact: { t: 'NASA NTRS: DART impact site', u: 'https://ntrs.nasa.gov/citations/20230000707' },
  ouWiki: { t: 'Wikipedia: The Open University', u: 'https://en.wikipedia.org/wiki/Open_University' },
  ouMission: { t: 'OU: Mission, vision and values', u: 'https://about.open.ac.uk/node/16' },
  waltonHall: { t: 'OU Estates: Walton Hall', u: 'https://university.open.ac.uk/estates/our-estate/walton-hall-east-campus' },
  msrCsg: { t: 'OU news: OU academic joins team advising on Mars samples', u: 'https://www.open.ac.uk/blogs/news/science-mct/ou-academic-joins-international-team-of-experts-to-advise-on-samples-to-be-returned-from-mars' },
  rfOu: { t: 'OU research news: OU to support mission to search for signs of ancient life on Mars', u: 'https://research.open.ac.uk/news/ou-support-mission-search-signs-ancient-life-mars' },
  janusOu: { t: 'OU news: the JANUS camera on JUICE', u: 'https://www.open.ac.uk/blogs/news/science-mct/the-janus-camera-on-the-juice-spacecraft-observes-a-cosmic-visitor-on-its-way-to-jupiter/' },
  janusCei: { t: 'CEI: JUICE', u: 'https://university.open.ac.uk/science/research/cei/missions/juice' },
  beagleEss: { t: 'ORO: The Beagle 2 environmental sensors', u: 'https://oro.open.ac.uk/5401' },
  beagleCordis: { t: 'CORDIS: Beagle 2 leaves the UK (ESS PI: Leicester)', u: 'https://cordis.europa.eu/article/id/94546-beagle-2-leaves-the-uk-to-join-mars-express-for-mission-to-red-planet/de' },
  hirime: { t: 'OU news: OU leads the way to future high-resolution orbital imaging of Mars', u: 'https://www.open.ac.uk/blogs/news/science-mct/ou-leads-the-way-to-future-high-resolution-orbital-imaging-of-mars/' },
  change5: { t: 'OU news: OU space expert among world’s first to receive Moon rock samples', u: 'https://www.open.ac.uk/blogs/news/science-mct/ou-space-expert-among-worlds-first-to-receive-moon-rock-samples-for-research' },
  euclidOu: { t: 'OU news: Euclid mission reveals spectacular new space discoveries', u: 'https://www.open.ac.uk/blogs/news/science-mct/euclid-mission-reveals-spectacular-new-space-discoveries' },
  euclidAa: { t: 'A&A 696, A214 (2025): Euclid strong lenses with CNNs (OU first affiliation)', u: 'https://www.aanda.org/10.1051/0004-6361/202453152' },
  oxia1: { t: 'ORO: ExoMars landing site selection (Quantin-Nataf et al. 2021)', u: 'https://oro.open.ac.uk/74820' },
  oxia2: { t: 'ORO: High-resolution map of Oxia Planum (Fawdon et al. 2024)', u: 'https://oro.open.ac.uk/97016' },
  bennuWiki: { t: 'Wikipedia: 101955 Bennu (565 × 535 × 508 m)', u: 'https://en.wikipedia.org/wiki/101955_Bennu' },
  bennuNaif: { t: 'NAIF: Bennu shape constants', u: 'https://naif.jpl.nasa.gov/pub/naif/ORX/kernels/pck/bennu_v14.tpc' },
  mcdonnell: { t: 'Wikipedia: Tony McDonnell', u: 'https://en.wikipedia.org/wiki/Tony_McDonnell_(space_scientist)' },
  snodgrass: { t: 'Colin Snodgrass CV', u: 'https://www.roe.ac.uk/~csn/snodgrass-CV.pdf' },
  mcbride: { t: 'NHBS: An Introduction to the Solar System (editors)', u: 'https://www.nhbs.com/title/183130' },
  murdoch: { t: 'ISAE-SUPAERO: Naomi Murdoch', u: 'https://pagespro.isae-supaero.fr/naomi-murdoch/' },
  rozitis: { t: 'ORO: Benjamin Rozitis', u: 'https://oro.open.ac.uk/view/person/br2427.html' },
  jackson: { t: 'OU STEM blog: asteroid officially named after the OU', u: 'https://blog.stem.open.ac.uk/?p=6668' },
  russell: { t: 'NHM: Sara Russell', u: 'https://nhm.ac.uk/our-science/people/sara-russell.html' },
  bland: { t: 'Australian Space Agency: Phil Bland career story', u: 'https://www.space.gov.au/Phil-Bland' },
  sephton: { t: 'Imperial: Mark Sephton', u: 'https://profiles.imperial.ac.uk/m.a.sephton' },
  csmith: { t: 'NHM: Caroline Smith', u: 'https://www.nhm.ac.uk/our-science/people/caroline-smith' },
  koko: { t: 'ORO: Kokotanekova PhD thesis (2018)', u: 'https://oro.open.ac.uk/57371' },
  graff: { t: 'Wikipedia: Gareth V. Williams', u: 'https://en.wikipedia.org/wiki/Gareth_V._Williams' },
  europaOro: { t: 'ORO 95401: Composition and habitability of Europa’s ocean over time', u: 'https://oro.open.ac.uk/95401' },
};

// ---- helpers ----
const DATA = [];
const add = (n, ...claims) => {
  const o = by[n];
  if (!o) throw new Error('missing ' + n);
  let entry = DATA.find(d => d.n === n);
  if (!entry) DATA.push(entry = { n, m: meta(o), c: [] });
  entry.c.push(...claims);
};
const ok = (f, q, note, s = []) => ({ f, v: 'ok', q, note, s });
const fix = (f, q, note, s, e, why) => ({ f, v: 'fix', q, note, s, sug: { e, why } });
const bad = (f, q, note, s, e, why) => ({ f, v: 'bad', q, note, s, sug: { e, why } });
const unv = (f, q, note, s, keep, flag) => ({ f, v: 'unv', q, note, s, flag, sug: { keep } });
const STYLE_NOTE = 'First person ("we" is the OU) and shorter. Same facts; filler removed.';
const sty = (f, to, note = STYLE_NOTE) => ({ f, v: 'sty', q: f === 'ou_involvement' ? 'OU text in the first person, snappier' : 'Snappier text', note, s: [], sug: { e: [{ f, from: '*', to }] } });

// ---- 1. Time-sensitive: statuses and dates ----
add('Hera',
  fix('trajectory', 'Arrives at Didymos on 12 October 2026 (last waypoint)', 'ESA now says Hera arrives in November 2026, a month earlier than first planned; its operations page still describes an "impulsive rendezvous" in October, and secondary reports put the braking burns in late October. The app has Hera reaching Didymos on 12 October, before today, so it already shows Hera in orbit.',
    [S.heraEsa, S.heraOps, S.heraSpace], [{ f: 'entry', from: 'waypoint 2026-10-12 "Rendezvous with Didymos"', to: 'waypoint date 2026-11-01 (ESA: "November 2026"; exact day not published)' }], 'Changed by hand in trajectory.waypoints. Replace with the real date once ESA announces arrival.'));
add('Swift',
  fix('description', 'Swift is still operating; it re-enters on 1 January 2027 (status_timeline)', 'NASA and Katalyst called off the reboost on 19 August 2026 after Katalyst’s LINK spacecraft lost attitude control. NASA says Swift will likely re-enter later in 2026; no date has been published. Most science operations were paused in February 2026 to slow the decay.',
    [S.swiftNoGo, S.swiftLikely],
    [{ f: 'description', from: 'The mission has been operating for over 20 years, contributing significantly to our understanding of black hole formation and neutron star mergers.', to: 'Over more than 20 years it has transformed our understanding of black hole formation and neutron star mergers. With its orbit decaying faster than expected, a commercial mission to boost it was called off in August 2026, and Swift is expected to re-enter the atmosphere by the end of the year.' }],
    'The status_timeline date (2027-01-01 → Re-entered) stays as a placeholder; set the real date when NASA announces it.'));
add('Roman',
  fix('description', 'Roman "will provide"…; status Launched', 'Roman launched on a Falcon Heavy on 30 August 2026, bound for Sun-Earth L2. "Launched" is right; the description doesn’t say it has flown.',
    [S.roman, S.romanDate],
    [{ f: 'description', from: 'The Nancy Grace Roman Space Telescope will provide', to: 'The Nancy Grace Roman Space Telescope, launched on 30 August 2026, will provide' }]));
add('SMILE', ok('description', 'Launched 19 May 2026 (Vega-C)', 'Confirmed: launched 03:52 UTC on 19 May 2026 from Kourou on Vega-C (one secondary source; ESA pages agree on the May launch).', [S.smile]));
add('BepiColombo', ok('status_timeline', 'Mercury orbit insertion 21 November 2026', 'Still planned for 21 November 2026; the two orbiters separate on 9–10 December and the MPO reaches its science orbit in March 2027.', [S.bepiWiki, S.bepiEpsc]));
add('JUICE', ok('trajectory', 'Earth flyby 2026-09-28', 'Confirmed: closest approach over the Indian Ocean on 28 September 2026 at 11:45 UTC, about 8,640 km up. Next: Earth again in January 2029, then Jupiter in July 2031.', [S.juiceFlyby]));
add('PLATO', ok('launch_year', 'Launch 2027', 'ESA now plans launch at the start of 2027 (January) on Ariane 6.', [S.plato]));
add('Hayabusa2',
  fix('description', 'Hayabusa2 "was" a mission; status En Route', 'The description is all in the past tense, but the spacecraft is on an extended mission (Hayabusa2#): it flew past asteroid Torifune on 5 July 2026 and is due at the 11-metre asteroid 1998 KY26 in 2031, after Earth flybys in 2027 and 2028.',
    [S.hy2, S.hy2Dlr],
    [{ f: 'description', from: 'The mission provided invaluable insights into the composition of carbon-rich asteroids and the history of the early Solar System.', to: 'The mission provided invaluable insights into the composition of carbon-rich asteroids and the history of the early Solar System. The spacecraft is now on an extended mission: it flew past asteroid Torifune on 5 July 2026 and is due to reach the tiny asteroid 1998 KY26 in 2031.' }]));
add('PROSPECT',
  bad('launch_year', 'launch_year 2028 (and "by the Intuitive Machines IM-4 lander in 2028")', 'Today’s comments changed this from 2027 to 2028, but NASA still lists IM-4 for 2027, and ESA’s June 2026 Prospect video still describes the IM-4 flight. No public source gives 2028. Keep 2028 only if the PROSPECT team has newer information.',
    [S.im4, S.prospectEsa, S.prospectRide],
    [{ f: 'launch_year', from: '2028', to: '2027' }, { f: 'description', from: 'by the Intuitive Machines IM-4 lander in 2028', to: 'by the Intuitive Machines IM-4 lander, planned for 2027' }]));
add('NewAthena',
  bad('description', 'Due for launch in 2038', 'Today’s comments changed 2037 to 2038, but ESA’s factsheet says "Planned launch: 2037 on an Ariane 6.4", and the schedule page gives adoption in early 2027 with launch in early 2037.',
    [S.athenaFact, S.athenaSched],
    [{ f: 'description', from: 'due for launch in 2038', to: 'due for launch in 2037' }], 'Keep 2038 if the commenter knows of a newer slip.'));
add('Ariel',
  unv('launch_year', 'Launch 2031', 'Jo Barstow gave 2031. A March 2026 Wikipedia snapshot says that as of January 2026 Ariel was "likely to be delayed until 2031"; the OU’s own news story on the move to implementation still gives 2029. No ESA source either way.',
    [S.arielWiki, S.arielOu], 'Keep 2031 (from the Ariel Science Working Group Lead). Confirm with ESA’s Ariel page when it’s updated.'));
add('LUPEX', ok('description', 'Launch no earlier than 2028', 'A JAXA-ISRO review in July 2026 kept the 2028 target (secondary sources).', [S.lupex]),
  ok('ou_involvement', 'OU develops EMS-L for LUPEX', 'Simon Sheridan’s OU profile: science lead developing the EMS-L mass spectrometer for JAXA’s LUPEX mission.', [S.sheridan]));

// ---- 2. New objects ----
add('MAGPIE',
  bad('description', 'Launches "with Intuitive Machines in 2029"', 'MAGPIE (Mission for Advanced Geophysics and Polar Ice Exploration) flies on ispace’s own Mission 4 lander in 2029, under a €65 million ESA contract to ispace-EUROPE. Nothing links it to Intuitive Machines.',
    [S.magpieWiki, S.magpieIspace],
    [{ f: 'description', from: 'The rover is being built by ispace Europe and is scheduled to launch with Intuitive Machines in 2029.', to: 'The rover is being built by ispace Europe and is due to fly on ispace’s Mission 4 lander in 2029.' }]),
  unv('description', 'Operates "for up to 10 Earth days"', 'No source found for MAGPIE’s surface lifetime (searched ESA, ispace and Wikipedia).', [S.magpieWiki], 'Keep; ask Simon Sheridan.'),
  fix('ou_involvement', 'Volatile Analyser in the "Lunar Volatiles Science (LVS) payload"', 'TUM, which leads the drill, calls it the Lunar Volatiles Scout (LVS): an instrumented drill with a built-in ion-trap mass spectrometer, the Volatile Analyser provided by the OU.',
    [S.magpieTum], [{ f: 'ou_involvement', from: 'Lunar Volatiles Science (LVS) payload', to: 'Lunar Volatiles Scout (LVS) drill' }]),
  sty('ou_involvement', 'We’re developing the Volatile Analyser, the ion-trap mass spectrometer in the Lunar Volatiles Scout drill on ESA’s MAGPIE rover. Building on our heritage in ion-trap mass spectrometry, it will identify and measure water and other volatiles in lunar soil, and how they vary with depth at the Moon’s south pole.', STYLE_NOTE + ' Includes the LVS correction.'));
add('Shackleton Rover',
  ok('description', 'UK-led south-pole rover inspired by Shackleton, with his family', 'The project’s site describes it as the first British mission to the Moon’s surface, aimed at the south pole, with Shackleton’s granddaughter Alexandra Shackleton as patron.', [S.shack]),
  unv('launch_year', 'launch_year 2030', 'Typed into the spreadsheet; the project’s site gives no launch date.', [S.shack], 'Keep as a placeholder; confirm with Simeon Barber.'),
  unv('ou_involvement', 'OU scientists help define the payload and mission', 'From Simeon Barber’s comment; not on the project’s public site.', [S.shack], 'Keep (colleague’s own knowledge).'),
  sty('description', 'Shackleton Rover is a proposed UK-led mission to the Moon’s south pole, inspired by Sir Ernest Shackleton’s 1914 expedition, with his granddaughter as patron. It would build the UK’s space technology, science and industry and inspire the next generation, and as a long-lived experiment on the Moon it would give the UK a voice in how the Moon and its resources are explored.'),
  sty('ou_involvement', 'We’re helping to define the payload and the mission for Shackleton Rover, a concept for an entirely UK-built and UK-operated rover at the lunar south pole.'));
add('Schiaparelli',
  ok('description', 'Crashed on Meridiani Planum on 19 October 2016 after its parachute phase ended too early', 'Confirmed: the heat shield and parachute worked, but the parachute was released early and the thrusters fired only briefly.', [S.aboudan]),
  fix('landed_coords', 'Crash site -2.052, -6.208', 'MRO imaged the impact mark at 2.07° S, 353.79° E (6.21° W), about 5.4 km west of the intended landing point.',
    [S.schiaSite], [{ f: 'landed_coords', from: '{"lat":-2.052,"lon":-6.208}', to: '{"lat":-2.07,"lon":-6.21}' }]),
  bad('ou_involvement', 'The OU was part of the DREAMS team', 'ESA’s credit for DREAMS lists INAF, CISAS, LATMOS, ESA-ESTEC, Oxford, FMI and INTA; no source puts the OU on it. The OU’s documented role is AMELIA: Stephen Lewis (OU) was a co-PI of the team that reconstructed the atmosphere from Schiaparelli’s entry and descent data.',
    [S.dreams, S.amelia, S.aboudan],
    [{ f: 'ou_involvement', from: '*', to: 'OU scientists co-led AMELIA, the team that used Schiaparelli’s entry and descent data to reconstruct the Martian atmosphere it flew through, measuring its density, pressure and temperature from higher up than ever before.' }]),
  sty('ou_involvement', 'We co-led AMELIA, the team that used Schiaparelli’s entry and descent data to reconstruct the Martian atmosphere it flew through, measuring its density, pressure and temperature from higher up than ever before.', STYLE_NOTE + ' Includes the AMELIA correction.'));
add('I-MIM',
  bad('description', '"Led by NASA with international partners"', 'NASA withdrew its funding in its FY2023 budget proposal (March 2022). The OU’s December 2025 news describes I-MIM as "led by the space agencies of Canada, the USA, Japan, Italy and the Netherlands", with the OU representing the UK alongside the University of Bern.',
    [S.imimOu, S.imimWiki],
    [{ f: 'description', from: 'is a proposed orbiter, led by NASA with international partners, that would use radar', to: 'is a proposed orbiter, planned by the space agencies of Canada, the USA, Japan, Italy and the Netherlands, that would use radar' }]),
  bad('ou_involvement', 'OU leads analysis of the "CHROMA-D" detector', 'No source names CHROMA-D. The OU’s news: Manish Patel’s group won £1.2 million from the UK Space Agency (December 2025) to develop a combined visible-infrared imager, with a Teledyne e2v detector, for missions such as I-MIM and LightShip-1; it can tell water ice from carbon dioxide ice.',
    [S.imimOu],
    [{ f: 'ou_involvement', from: '*', to: 'The OU is developing a combined visible-infrared imager, with a detector made by Teledyne e2v, for future Mars missions such as I-MIM and ESA’s LightShip-1. It can tell water ice from carbon dioxide ice on the surface. In December 2025 the UK Space Agency awarded the OU £1.2 million for the next phase.' }]),
  unv('status', 'Status Planned, launch TBC', 'No 2026 status found; NASA’s funding was withdrawn in 2022 and Wikipedia’s launch window (2031–2033) is unsourced.', [S.imimWiki], 'Keep "Planned"; consider dropping I-MIM if it’s no longer going ahead.'),
  sty('ou_involvement', 'We’re developing a combined visible-infrared imager, with a detector made by Teledyne e2v, for future Mars missions such as I-MIM and ESA’s LightShip-1. It can tell water ice from carbon dioxide ice on the surface, and in December 2025 the UK Space Agency awarded us £1.2 million for the next phase.', STYLE_NOTE + ' Includes the imager correction.'));
add('AlSat-Nano',
  ok('description', 'Joint UK-Algerian 3U CubeSat launched in 2016 to train Algerian students', 'Confirmed: launched 26 September 2016 on PSLV-C35; UK Space Agency funded, Surrey Space Centre built the platform, part of a joint education programme with Algeria.', [S.alsatGov, S.alsatSky]),
  ok('ou_involvement', 'OU C3D2 camera, based on UKube-1’s C3D, imaged Earth and the AstroTube boom', 'Confirmed: the OU’s Centre for Electronic Imaging led the C3D2 payload; it imaged the boom’s deployment. It also served as a remote experiment for the OU’s Open Science Laboratory.', [S.alsatOro, S.alsatSky]),
  fix('orbit', 'Orbit a_km 7,058, i 98.2 (illustrative)', 'The real orbit was 661 × 700 km at 98.2°, so a_km 7,058 is right (e ≈ 0.003): the orbit can drop its illustrative flag.',
    [S.alsatSky], [{ f: 'entry', from: 'orbit.illustrative true', to: 'remove illustrative (orbit is sourced)' }]),
  sty('ou_involvement', 'We provided AlSat-Nano’s C3D2 camera, a successor to the C3D camera on UKube-1. Its three cameras imaged the Earth, tested commercial camera sensors in space and watched the CubeSat’s AstroTube boom unfold, and it also served as a remote experiment for our students in the Open Science Laboratory.'));
add('DART',
  fix('description', 'Shortened Dimorphos’s orbit "by about 32 minutes"', 'The measured change is 33 ± 1 minutes (32 was the first estimate); Didymos and Dimorphos already say 33.',
    [S.dartImpact], [{ f: 'description', from: 'by about 32 minutes', to: 'by about 33 minutes' }]),
  unv('landed_coords', 'Impact site lat -8.84, lon 264.3 (illustrative)', 'The published impact site coordinates weren’t found in an accessible source; the PDS frame for Dimorphos may also differ from the model’s.', [S.dartImpact], 'Keep illustrative.'),
  unv('ou_involvement', 'No OU text yet', 'Waiting for Simon Green.', [], 'Leave empty until Simon replies.'));
add('Itokawa',
  ok('description', 'About 535 m long, named after Hideo Itokawa, visited 2005, samples returned 2010', 'Confirmed by the naming citation and the mission record.', [S.sbdb(25143), S.hayabusaDarts]),
  fix('ou_involvement', 'OU researchers have been allocated Itokawa particles', 'True but thin. Monica Grady co-authored the 2021 Scientific Reports paper (led by Royal Holloway) that found water and extraterrestrial organic matter in an Itokawa grain; the OU did the initial Raman spectroscopy on the allocated particles.',
    [S.itokawaOrg, S.itokawaNasa],
    [{ f: 'ou_involvement', from: '*', to: 'OU researchers analysed particles of Itokawa returned by Hayabusa, carrying out the first Raman spectroscopy on the grains they were allocated. Working with a team led by Royal Holloway, University of London, they found water and organic matter of extraterrestrial origin in one of them.' }]),
  sty('ou_involvement', 'We analysed particles of Itokawa returned by Hayabusa, carrying out the first Raman spectroscopy on the grains we were allocated. With a team led by Royal Holloway, University of London, we found water and organic matter of extraterrestrial origin in one of them.', STYLE_NOTE + ' Includes the sourced detail above.'));
add('Hayabusa',
  ok('description', 'Launched 2003, reached Itokawa 2005, returned grains in 2010', 'Confirmed.', [S.hayabusaDarts]),
  fix('orbit', 'Hovering 7 km from Itokawa (illustrative)', 'JAXA: Hayabusa moved to its "home position" about 7 km from the surface on 30 September 2005. The orbit can drop its illustrative flag.',
    [S.hayabusaDarts], [{ f: 'entry', from: 'orbit.illustrative true', to: 'remove illustrative (7 km home position is sourced)' }]),
  sty('ou_involvement', 'We study grains of Itokawa returned by Hayabusa (see Itokawa).'));
add('Enceladus',
  ok('orbit', 'JPL mean elements, Laplace plane', 'Matches JPL’s SAT441 mean elements (a 238,400 km, P 1.370218 d, Laplace pole RA 40.6°, Dec 83.5°).', [S.satElem]),
  fix('ou_involvement', 'No OU text yet', 'Rachael Hamp (OU) sat on ESA’s Expert Committee for the L4 large mission, which in 2024 recommended Enceladus as the target: an orbiter and lander for launch in the early 2040s.',
    [S.l4, S.l4astro],
    [{ f: 'ou_involvement', from: '*', to: 'OU planetary scientist Rachael Hamp sat on ESA’s Expert Committee that, in 2024, recommended Enceladus as the target of ESA’s next large mission: an orbiter and lander to search for signs of life, for launch in the early 2040s.' }], 'Drafted from public sources; Rachael may want to add to it.'),
  sty('ou_involvement', 'Our planetary scientist Rachael Hamp sat on ESA’s Expert Committee that, in 2024, recommended Enceladus as the target of ESA’s next large mission: an orbiter and lander to search for signs of life, for launch in the early 2040s.'));
add('OU Campus',
  ok('launch_year', '1969', 'The OU was established in 1969; its Walton Hall land was leased from 1 September 1969.', [S.ouWiki, S.waltonHall]),
  fix('description', '[TO ADD: a sentence on the OU’s mission…]', 'The OU’s published mission is "to be open to people, places, methods and ideas".',
    [S.ouMission],
    [{ f: 'description', from: "[TO ADD: a sentence on the OU's mission, open to people, places, methods and ideas.]", to: 'The OU’s mission is to be open to people, places, methods and ideas.' }]),
  sty('ou_involvement', 'Our research in this visualisation feeds into our teaching. [TO ADD: the courses it informs, e.g. modules in astronomy and planetary science, and how students take part.]'));

// ---- 3. Honorary asteroids: fill the OU-connection placeholders ----
const ph = (n, who, link, src, note) => add(n, fix('description', `"named after ${who}, [TO ADD: OU connection]"`, note, src,
  [{ f: 'description', from: `named after ${who}, [TO ADD: OU connection]`, to: `named after ${who}, ${link}` }]));
ph('9159 McDonnell', 'J. A. M. (Tony) McDonnell', 'formerly Professor of Planetary and Space Sciences at the OU', [S.mcdonnell, S.sbdb(9159)], 'He was Professor of Space Sciences at Kent and later Professor of Planetary and Space Sciences at the OU (inaugural lecture 2002).');
ph('158589 Snodgrass', 'Colin Snodgrass', 'a research fellow at the OU from 2014 to 2018', [S.snodgrass, S.sbdb(158589)], 'His CV: OU posts 2014–2018 (Ernest Rutherford Fellow, then Senior Research Fellow); now at Edinburgh.');
ph('15834 McBride', 'Neil McBride', 'formerly a lecturer at the OU and co-editor of its textbook An Introduction to the Solar System', [S.mcbride, S.sbdb(15834)], 'The OU textbook’s publisher lists him as a former OU lecturer and co-editor.');
ph('8463 NaomiMurdoch', 'Naomi Murdoch', 'who did her PhD at the OU', [S.murdoch, S.sbdb(8463)], 'PhD 2009–2012 jointly at the OU and the Université Côte d’Azur.');
ph('11469 Rozitis', 'Benjamin Rozitis', 'a planetary scientist at the OU', [S.rozitis, S.sbdb(11469)], 'The citation calls him an OU research fellow; the OU repository lists 63 of his papers, including recent ones. His current job title wasn’t found, so the wording stays general.');
ph('30226 SamuelLeeJackson', 'Samuel Lee Jackson', 'who did his PhD at the OU, observing asteroids with its PIRATE telescope in Tenerife', [S.jackson, S.sbdb(30226)], 'OU news credits PhD student Samuel Jackson with imaging asteroid Openuni using the OU’s PIRATE telescope.');
ph('5497 SaraRussell', 'Sara Russell', 'who did her PhD at the OU with Colin Pillinger and was later a Visiting Professor there', [S.russell, S.sbdb(5497)], 'NHM profile: PhD, Open University, 1989–1992; Visiting Professor at the OU 2014–2019; her PhD was on presolar grains with Pillinger.');
ph('6580 PhilBland', 'Philip Bland', 'who was the OU’s curator of meteorites and did his PhD there', [S.bland, S.sbdb(6580)], 'He began with a three-year post as the OU’s curator of meteorites and was awarded his PhD there in 1995.');
ph('7552 Sephton', 'Mark Sephton', 'who did his PhD at the OU and was a lecturer there from 2000 to 2005', [S.sephton, S.sbdb(7552)], 'Imperial profile: PhD, Open University 1993–1996; postdoc at the OU; Lecturer, Open University 2000–2005.');
ph('7635 CarolineSmith', 'Caroline Smith', 'who did her PhD at the OU', [S.csmith, S.sbdb(7635)], 'NHM profile: PhD, Open University (completed 2002).');
ph('42772 Kokotanekova', 'Rosita Kokotanekova', 'who did her PhD at the OU on the nuclei of comets', [S.koko, S.sbdb(42772)], 'Her 2018 OU thesis: "Bulk Properties and Evolution of Jupiter-Family Comet Nuclei".');
add('3202 Graff', fix('description', 'Two placeholders (OU connection, citation)', 'Gareth V. Williams did his PhD at the OU, awarded in 2013. JPL holds no naming citation, so the paraphrase can be introduced as the reason for the name.',
  [S.graff, S.sbdb(3202)],
  [{ f: 'description', from: 'named after Gareth (Graff) Vaughan Williams, [TO ADD: OU connection]. [TO ADD: official naming citation; JPL\'s database has none, so the text below paraphrases the Minor Planet Center\'s.] Working', to: 'named after Gareth (Graff) Vaughan Williams, who later did his PhD at the OU. It was named for his earlier work: working' }]));

// ---- 4. Today’s colleague text and newer additions ----
add('ExoMars Rosalind Franklin',
  fix('ou_involvement', '"co-principal investigator for its PanCam camera system"', 'The OU’s own news gives Matt Balme’s role as Deputy Principal Investigator of PanCam; Susanne Schwenzer is a Co-Investigator and one of the UK’s Interdisciplinary Scientists.',
    [S.rfOu], [{ f: 'ou_involvement', from: 'serving as co-principal investigator for its PanCam camera system', to: 'serving as deputy principal investigator for its PanCam camera system' }]),
  sty('ou_involvement', 'We’re on the Rosalind Franklin rover’s science team: as deputy principal investigator for its PanCam camera system, as one of the UK’s Interdisciplinary Scientists, and in support of PanCam and the Enfys spectrometer. We’re also leading and contributing to preparations through operations simulations and field trials.', STYLE_NOTE + ' Includes the deputy-PI correction.'));
add('Perseverance', ok('ou_involvement', 'OU researchers on the MSR Campaign Science Group', 'Confirmed: Susanne Schwenzer (OU) is one of the 16 members of the NASA/ESA Mars Sample Return Campaign Science Group.', [S.msrCsg]));
add('Beagle 2',
  bad('ou_involvement', '"The OU also led the Environmental Sensor Suite (ESS)"', 'Beagle 2’s Environmental Sensors PI was at Leicester (as was the X-ray spectrometer’s); the OU led the mission and the Gas Analysis Package. OU scientists did work on the ESS: its description paper and the UV-sensor study (Patel et al. 2004) are OU-authored.',
    [S.beagleCordis, S.beagleEss],
    [{ f: 'ou_involvement', from: 'The OU also led the Environmental Sensor Suite (ESS),', to: 'OU scientists also worked on the Environmental Sensor Suite (ESS),' }]),
  unv('ou_involvement', 'Lessons from Beagle 2 informed later landers including ExoMars', 'Still no source found (flagged since 2026-09-30).', [], 'Keep, flagged.', 'Unverified since 2026-09-30'),
  sty('ou_involvement', 'Beagle 2 was conceived and led by our own Colin Pillinger, and we designed its Gas Analysis Package (GAP): a miniaturised mass spectrometer with twelve ovens, built to detect isotopic signs of past life in Martian soil. Fitting a laboratory-scale instrument into a probe the size of a dinner plate took major feats of miniaturisation. Our scientists also worked on its Environmental Sensor Suite, which was to measure the weather and look for dust devils. Contact was lost after the 2003 landing, but the lessons learned informed later landers, including ExoMars.', STYLE_NOTE + ' Includes the ESS correction.'));
add('JUICE', unv('ou_involvement', '"The OU is the UK National Lead for the JANUS instrument"', 'The OU supplies and characterises JANUS’s UK-built detectors (Palumbo, Italy, leads JANUS with a consortium including the UK), but no public source uses "UK National Lead".', [S.janusOu, S.janusCei], 'Keep (added since the last review); confirm the title with the JANUS team.'));
add('LightShip-1',
  unv('ou_involvement', 'The same group "leads the Dust Environment Spectral Imager", imaging Mars every 10 minutes', 'No source found for this instrument (searched OU news, ESA LightShip and SpotLight material). HiRIME is confirmed.', [S.hirime], 'Keep (added since the last review); confirm with Manish Patel.'),
  unv('ou_involvement', 'Group name "Atmospheric Research and Space Exploration"', 'The OU’s December 2025 news calls Manish Patel’s group the "Atmospheric Research and Surface Exploration" group; earlier OU news used "Space Exploration". EnVision uses the same name.', [S.imimOu], 'Check which is current and use it in both entries.'));
add('Huygens', fix('ou_involvement', '"The OU was the Principal Investigator"', 'An institution can’t be a PI; the source says the OU provided the PI (John Zarnecki).', [],
  [{ f: 'ou_involvement', from: 'The OU was the Principal Investigator for the Surface Science Package (SSP)', to: 'The OU provided the Principal Investigator for the Surface Science Package (SSP)' }]));

// ---- 5. Flagged claims: re-searched ----
add("Chang'e-5", ok('ou_involvement', 'Measuring C, N, O and noble-gas isotopes to test the giant-impact theory', 'Now sourced: OU news on Mahesh Anand’s loan of Chang’e-5 samples gives exactly these aims.', [S.change5]));
add('Euclid', ok('ou_involvement', 'OU astronomers lead research groups finding gravitational lenses in Euclid surveys', 'Now sourced: OU news names Stephen Serjeant and Ruby Pearce-Casey in the Euclid lens search, and the 2025 A&A CNN lens-finding paper has the OU as first affiliation.', [S.euclidOu, S.euclidAa]));
add('Mars', ok('ou_involvement', 'OU supports agencies in selecting landing sites', 'Now sourced for ExoMars: OU researchers (Balme, Fawdon) were on the Oxia Planum selection paper and lead its geological mapping. Sample-return site selection still has no source.', [S.oxia1, S.oxia2]));
add('Europa', ok('ou_involvement', 'Ocean chemistry and habitability over time (added today)', 'OU conference abstracts by Sym, Ramkissoon, Fox-Powell, Pearson and Melwani Daswani; not yet a peer-reviewed paper.', [S.europaOro]));
for (const [n, q] of [['Titan', 'OU astrobiologists study Titan as an ocean world'], ['TRUTHS', 'The CIS120 is "being evaluated for TRUTHS"'], ['Mars Yard', 'launch_year 2017'], ['Earth', 'OU machine learning on satellite imagery'], ['Hubble', 'OU use of the Hubble archive'], ['Planck', 'OU cosmology with Planck and Euclid'], ['Earth-Sun L2', 'OU uses L2 as a virtual laboratory']]) {
  add(n, unv(n === 'Mars Yard' ? 'launch_year' : 'ou_involvement', q, 'Searched again today; still no public source.', [], 'Keep, flagged.', 'Unverified since 2026-09-30'));
}

// ---- 6. Numbers ----
add('Bennu', fix('radius_km', 'radius_km 0.2524', 'Bodies drawn from a model use half their longest side. Bennu is 565 × 535 × 508 m (NAIF’s newer shape: about 564 × 536 × 498 m), so half its longest side is 0.282 km; 0.2524 is closer to its mean radius.',
  [S.bennuWiki, S.bennuNaif], [{ f: 'radius_km', from: '0.2524', to: '0.282' }]));
add('25275 Jocelynbell', fix('orbit.rate', 'rate 0.2709', 'DATA.md asks for 6 decimals (a rounded rate drifts degrees since 2000); SBDB gives 0.270921.', [S.sbdb(25275)], [{ f: 'orbit.rate', from: '0.2709', to: '0.270921' }]));

// ---- 7. Style: first person, snappier ----
const OU = {
  Sun: 'Our Centre for Electronic Imaging (CEI) developed and tested the X-ray camera detectors on SMILE, the ESA–CAS mission studying how the solar wind meets Earth’s magnetic field. How particles from the Sun damage detectors in space is one of the CEI’s core research areas, and we test detectors against space radiation for missions across the Solar System.',
  Mercury: 'We have studied Mercury’s surface composition for decades, using spectroscopy of data from visiting spacecraft to map its chemical elements and trace the planet’s early volcanic history. Our scientists are Co-Investigators on BepiColombo’s MIXS X-ray spectrometer, which will map the elements on its surface.',
  BepiColombo: 'We were on BepiColombo’s M-CAM monitoring camera team, analysing images from its Mercury flybys, and have led ESA’s Mercury Surface and Composition Working Group. With instrument lead the University of Leicester, we helped build the Mercury Imaging X-ray Spectrometer (MIXS). Our scientists are now Co-Investigators on MIXS and on MERTIS, the Mercury Thermal Infrared Spectrometer, and associates on SIMBIO-SYS, the orbiter’s imaging and spectrometer system.',
  Venus: 'We’re helping to prepare ESA’s EnVision mission to Venus. With a £2.3 million ESA grant, our team leads the testing of the detectors in the VenSpec-U ultraviolet spectrometer, which will study the sulphur chemistry of Venus’s clouds, and we take part in the mission’s science preparations.',
  Earth: 'We use Earth observation data to monitor environmental change, developing machine learning to track deforestation, urban growth and glacial retreat in satellite images. The work also feeds our teaching on technology and environmental sustainability.',
  ISS: 'Our scientists took part in BIOMEX, a DLR-led experiment outside the ISS that exposed bacteria, algae, lichens and fungi to the vacuum, UV radiation and temperature extremes of space for about 18 months. The samples came home with British astronaut Tim Peake in June 2016, and the results helped show whether such organisms (and, by extension, life on Mars) could survive travelling between planets.',
  Hubble: 'Our astronomers use Hubble’s archive to study stellar populations and how distant galaxies evolve, and the work feeds into our astronomy teaching. The CCDs in Hubble’s WFC3 camera were built by Teledyne e2v, the UK company that partners with our Centre for Electronic Imaging on testing and radiation-hardening space detectors.',
  CASTOR: 'Our Centre for Electronic Imaging (CEI) won £2.1 million to lead the testing and space qualification of the CIS303 and CIS120 UV detectors, built by Teledyne e2v, for CASTOR, a Canadian-led 1-metre UV/optical telescope targeting launch around 2030. We test and optimise the detectors, and measure how well different UV coatings work and how they degrade, to get the sensors ready for spaceflight.',
  TRUTHS: 'Our Centre for Electronic Imaging (CEI) tests how radiation damages the Teledyne e2v CIS120 CMOS sensor, which is being evaluated for TRUTHS and other next-generation missions. We measure its dark current, noise and sensitivity before and after gamma and proton irradiation, at a range of temperatures, to check it can keep the high calibration accuracy TRUTHS needs over a multi-year mission.',
  SMILE: 'Our Centre for Electronic Imaging (CEI) developed and tested the twin CCD370 detectors (4,510 × 4,510 pixels, derived from the CCD270s developed for PLATO) at the heart of SMILE’s Soft X-ray Imager. We’re now part of the mission’s operations team, working with the imager’s team to get the most science from the detectors.',
  'UKube-1': 'Our Compact CMOS Camera Demonstrator (C3D) won one of only three science payload slots on UKube-1, the UK Space Agency’s first CubeSat. Launched in July 2014, its three cameras made the first in-orbit demonstration of a European 0.18-micron CMOS imaging technology. Radiation testing showed the sensor degrading much like a CCD, along with effects unique to CMOS such as single-event upsets, and the data has since informed the design of more radiation-tolerant space CMOS sensors.',
  Moon: 'Our analysis of Apollo samples helped show that the Moon is not as dry as once thought: water is locked inside lunar minerals. Drawing on instruments we built for Beagle 2 and Rosetta, we now develop miniature laboratories to measure what the Moon is made of. We also study how lunar soil could supply water, oxygen and fuel, and be used to build on the Moon, to support sustainable exploration.',
  'Chandrayaan-1': 'Our Centre for Electronic Imaging (CEI) assessed how protons would damage the 24 CCD54 X-ray detectors in the C1XS instrument, modelling the shielding, temperature and voltages they needed. We tested 14 candidate detector modules before launch, recommended the ten best for flight, and advised on how the detectors coped with radiation in orbit.',
  "Chang'e-5": 'In April 2025 we became one of only seven institutions outside China chosen to borrow Chang’e-5 samples. In our laboratories we’re measuring the isotopes of carbon, nitrogen, oxygen and noble gases in the grains, to test the giant-impact theory of the Moon’s origin and trace the history of volatiles in the Earth-Moon system.',
  PROSPECT: 'We lead the design and development of ProSPA, a miniature laboratory that will analyse samples on the Moon itself. It heats lunar soil just as meteorites and returned samples are analysed in laboratories on Earth, and its mass spectrometers identify, measure and isotopically characterise water ice and other volatiles.',
  LUPEX: 'We’re developing EMS-L, the Exospheric Mass Spectrometer for LUPEX, an ESA instrument on the JAXA-ISRO rover. Building on our heritage in miniature ion-trap mass spectrometry, it will measure water and other volatiles in the thin lunar exosphere and those released as the rover drives and drills, to show how volatiles are spread and behave at the Moon’s south pole.',
  'Earth-Sun L2': 'We treat L2 as a natural laboratory for how deep space affects spacecraft components, following the performance of detectors we characterised for missions stationed there. What we learn improves the detectors we’re developing for future flagship missions.',
  JWST: 'Our astronomers use JWST to study the atmospheres of planets around other stars. We were part of the international teams that analysed JWST’s first detailed observations of the giant planet WASP-39b, revealing its clouds and chemistry, and research we funded has studied the small rocky planet L 98-59 d, where JWST found possible signs of volcanic gases.',
  Gaia: 'Before launch, our Centre for Electronic Imaging (CEI) modelled how radiation damage would trap charge in Gaia’s CCDs, and we’ve since analysed its in-flight radiation data for the mission’s data processing. Gaia’s detectors turned out less damaged than ground tests predicted, a puzzle we’re still investigating to improve how future missions are tested. Our PhD students use Gaia’s catalogues to study star clusters and binary stars, our researchers use its alerts to find transient objects, and students on our S818 Space Science module follow up Gaia targets with our remote telescope in Tenerife.',
  Euclid: 'Our Centre for Electronic Imaging (CEI) played a lead role in characterising the CCD273 detectors in Euclid’s VIS instrument, and developed ‘trap pumping’, now used in orbit. It pinpoints individual radiation-damage defects in the detectors to within a fraction of a pixel, so images can be corrected and kept precise enough to trace dark matter through gravitational lensing. Our astronomers also lead searches of Euclid’s surveys for rare gravitational lenses.',
  NewAthena: 'Our Centre for Electronic Imaging (CEI) is working with partners worldwide to design and test graded-Z shielding for NewAthena’s Wide Field Imager: layers of heavy and light materials that block high-energy particles and the secondary radiation they produce. We model how the shielding will perform in orbit with the GEANT4 toolkit, checked against real detector tests.',
  HWO: 'Our Centre for Electronic Imaging (CEI) is developing low-noise UV and photon-counting detectors for HWO’s faint imaging, building on our CASTOR work. We’re also part of the UK consortium awarded £3 million in 2026 to develop one of the telescope’s core instruments.',
  PLATO: 'We lead population studies, funded by the UK Space Agency, to weed out false positives such as blended eclipsing binaries that could be mistaken for planets in PLATO’s fields. Our Centre for Electronic Imaging (CEI) also works on the detectors’ performance, calibration and radiation tolerance, and our robotic telescopes could follow up candidate stars once PLATO is flying.',
  Roman: 'From 2014 to 2019, under contract to JPL, our Centre for Electronic Imaging (CEI) characterised, designed and tested the EM-CCD sensor for Roman’s coronagraph, leading to the CCD311 chosen for flight: a radiation-hardened version of the CCD201. We continue to refine the ‘trap-pumping’ techniques we developed for Euclid to counter radiation damage to these sensors.',
  Mars: 'We have a long history of Mars research, from building lander instruments to analysing atmospheric data from orbit. Our researchers study the planet’s volatile cycles and whether its subsurface could be habitable, and help space agencies choose landing sites, as for the Rosalind Franklin rover at Oxia Planum.',
  'ExoMars TGO': 'We designed and led the development of UVIS, the ultraviolet channel of TGO’s NOMAD spectrometer, and one of our planetary scientists is a Co-Principal Investigator for NOMAD. We also help operate the CaSSIS stereo camera. We use UVIS data to track ozone, water vapour and trace gases such as methane, to understand how Mars loses its water to space. Some measurements are timed with other spacecraft: TGO measures methane from orbit while Curiosity measures it on the ground.',
  Perseverance: 'Our researchers were on the NASA/ESA Mars Sample Return Campaign Science Group and worked on planetary protection, planning how best to bring Perseverance’s Jezero Crater samples to Earth and analyse them. We also use the rover’s images and remote sensing to study the minerals of the ancient river delta, including clays and carbonates formed by water, and share this research with our students.',
  'MSL Curiosity': 'Our academics are on Curiosity’s science and operations teams, focusing on noble gases and on how Martian rocks reacted with ancient water, which bears on whether Mars was habitable. Others combine the rover’s weather data with ExoMars Trace Gas Orbiter observations to model Mars’s dust and water cycles.',
  Europa: 'Our astrobiologists study Europa as one of the Solar System’s most promising ocean worlds. We develop new cryogenic laboratory techniques and simulation facilities to study icy surface materials down to the microscale, and our fieldwork in polar places such as the Canadian High Arctic shows how ice and salts brought to the surface by cryovolcanism can reveal conditions in the ocean far below. We also model how the ocean’s chemistry, and how habitable it is, may have changed over 4.5 billion years as the water reacted with the rock beneath.',
  Ganymede: 'Our Centre for Electronic Imaging (CEI) helped develop and tested the image sensor in JANUS, the camera on ESA’s JUICE mission, which will study Ganymede from orbit.',
  JUICE: 'Working with detector maker Teledyne e2v, our Centre for Electronic Imaging (CEI) helped develop and characterise the CIS115 sensor at the heart of the JANUS camera, testing it against the radiation, vibration and temperature extremes of the journey to Jupiter. We are the UK National Lead for JANUS.',
  Saturn: 'We helped calibrate Cassini’s Cosmic Dust Analyser and studied the composition of dust around Saturn. One of our scientists, John Zarnecki, led the Surface Science Package on the Huygens probe, which landed on Titan, Saturn’s largest moon.',
  Titan: 'Titan’s first global geomorphological map, published in Nature Astronomy in 2019, used Cassini data to identify six major terrain types, from plains to dune fields. Our astrobiologists study Titan as one of the icy ocean worlds, exploring how its surface chemistry and methane cycle relate to conditions for life.',
  Cassini: 'Our planetary scientists use Cassini’s datasets to study the habitability and chemistry of Saturn’s icy moons. We helped calibrate its Cosmic Dust Analyser and studied the dust around Saturn, and we still use Cassini’s archive to train students in planetary science.',
  Huygens: 'One of our scientists, John Zarnecki, was Principal Investigator for the Surface Science Package (SSP), which made the first measurements on Titan’s surface: its density, temperature and physical state as Huygens landed. We have continued to lead analysis of this unique dataset to understand Titan’s surface and organic chemistry.',
  Rosetta: 'With RAL Space, we co-developed Ptolemy, the gas analyser on the Philae lander that measured the isotopes of carbon, nitrogen and oxygen in the comet. We also contributed to the MUPUS and GIADA instruments, coordinated the mission’s worldwide campaign of ground-based observations, and have explored why comet 67P’s dust and gas jets follow a day-night cycle.',
  Philae: 'With RAL Space, we designed and built the Ptolemy gas analyser, which with the COSAC instrument made the first analysis of organic matter on a comet’s surface. Our academics lead the interpretation of its data in the search for life’s chemical building blocks, work that has made our name in miniature planetary laboratories and comet science.',
  Hera: 'Our researchers were on the Hera Science Team’s management board.',
  AKARI: 'We were one of the international partners on JAXA’s AKARI infrared satellite, alongside Nagoya University, the University of Tokyo, ESA and other UK institutions. We used its all-sky infrared survey and spectra to study interstellar dust, polycyclic aromatic hydrocarbons and the earliest star formation in galaxies: part of the cosmic chemical cycle that eventually leads to habitable worlds.',
  Spitzer: 'Our scientists analyse Spitzer’s archived light curves to study the atmospheres and orbits of transiting exoplanets, and use the data to teach infrared astronomy and the search for habitable worlds. The work also helps choose targets for new missions such as Ariel.',
  Herschel: 'Our astronomers used data from SPIRE, the camera and spectrometer built for Herschel by an international consortium led by Cardiff University, to study distant galaxies at sub-millimetre wavelengths and trace the history of star formation.',
  Planck: 'We use Planck’s maps of the cosmic microwave background to study the large-scale structure of the early Universe and how galaxy clusters are spread. Our cosmologists combine Planck’s data with newer missions such as Euclid to research dark matter and dark energy, and it underpins our teaching of cosmology.',
  Peregrine: 'We proposed and developed the Exospheric Mass Spectrometer (EMS), Europe’s contribution to NASA’s PITMS instrument, with ESA funding and RAL Space, on a fast track to meet a tight budget and timescale. It was built to measure the Moon’s thin exosphere and how it changes over the lunar day and with the lander’s own effects. When Peregrine couldn’t land, we ran EMS in space to help diagnose the spacecraft, proving the technology ready to fly again on PROSPECT.',
  'Comet Interceptor': 'We’re a Co-Investigator institution for DISC, the instrument that will measure the size, mass and speed of dust particles as the spacecraft flies past its comet. Our Light-Gas Gun fires particles at several kilometres per second to check DISC’s dust shield can survive real high-speed impacts.',
  EnVision: 'Our Atmospheric Research and Space Exploration group leads the testing of the UV detectors for VenSpec-U, part of EnVision’s VenSpec suite, with a £2.3 million ESA grant. We also take part in the mission’s science preparations ahead of its launch in the early 2030s.',
  'LightShip-1': 'Our Atmospheric Research and Space Exploration group is leading the design phase of HiRIME, the High-Resolution Imager for Mars Exploration, which will take detailed images of the Martian surface for geology. The same group also leads the Dust Environment Spectral Imager, which will image the whole of Mars about every 10 minutes to watch its atmosphere and dust storms.',
  OGRE: 'Our Centre for Electronic Imaging (CEI) characterises and optimises the four EM-CCD sensors in OGRE’s X-ray camera, built by the UK company XCAM to survive the violent vibrations of launch. We research radiation damage, charge transfer and photon counting with these fast detectors for soft X-ray astronomy.',
  Hayabusa2: 'Our oxygen isotope laboratory was invited to join "Team Kochi", one of three Japanese-led teams that made the first analyses of the Ryugu samples. We’re measuring oxygen isotopes in the grains, showing that Ryugu-like material may have delivered water to the early Earth.',
  'OSIRIS-REx': 'We worked with the OSIRIS-REx team to help choose Bennu’s Nightingale sample site, predicting surface temperatures so the spacecraft and samples wouldn’t overheat during collection. We’re also analysing the returned Bennu material to learn about the early Solar System’s chemistry and the origin of Earth’s water and organic molecules.',
  Stardust: 'We were among the first in the world to analyse material from Stardust, using infrared, UV/visible and Raman spectroscopy to study the minerals in dust grains captured from Comet Wild 2 in aerogel. With studies of the samples’ organic content, this work made us a leading UK centre for comet sample science.',
  Bennu: 'We helped choose where OSIRIS-REx sampled Bennu, and we’re analysing the material it brought back to Earth (see OSIRIS-REx).',
  Ryugu: 'Our oxygen isotope laboratory is one of the international groups analysing Ryugu samples returned by JAXA’s Hayabusa2 (see Hayabusa2).',
  Genesis: 'Our scientists were on the Genesis Science Team. We developed some of the collectors that captured the solar wind and new techniques to analyse the returned samples, and after the capsule’s crash landing we worked extensively to characterise and clean off the contamination. The contamination stopped us making meaningful measurements, but Genesis’s finding that the Sun is richer in oxygen-16 than the Earth, Moon, Mars and meteorites is a key reference point for our oxygen isotope research.',
  Ariel: 'Our astronomers have served on Ariel’s science advisory team and led its working groups. Ariel will study the atmospheres of about 1,000 exoplanets, the first large survey of its kind, to show how planets form and evolve.',
  'Open Science Observatories': 'We own and run these telescopes, a cornerstone of our distance-learning astronomy teaching. Our academics use them to monitor variable stars and to support space missions such as Ariel from the ground, and students use them to gain real experience of collecting and analysing astronomical data.',
  'Mars Yard': 'Part of our teaching, the Mars Yard lets students drive robotic rovers across a simulated Martian landscape from their own homes, making space science hands-on for learners anywhere.',
};
for (const [n, to] of Object.entries(OU)) add(n, sty('ou_involvement', to));

const DESC = {
  BepiColombo: 'BepiColombo, a joint ESA-JAXA mission, is due to enter orbit around Mercury on 21 November 2026 and to be fully commissioned by April 2027. Its two orbiters will make the most complete study yet of Mercury’s surface, composition and magnetic field, mapping it at many wavelengths to explain the planet’s oversized core and its richness in volatile materials. The model shows the moment JAXA’s Mio orbiter is released; after that, the MOSIF sunshield separates and ESA’s Mercury Planetary Orbiter (MPO) flies free.',
  LUPEX: 'LUPEX is a joint JAXA-ISRO mission to look for water and other resources at the Moon’s south pole. Due to launch no earlier than 2028, its rover will explore sites with different lighting, temperatures and geology, measuring how much water there is, where, and in what form, down to about 1.5 metres. It should work for about 3.5 months after landing, and possibly for up to a year.',
  Rosetta: 'ESA’s Rosetta made the first long-term study of a comet’s nucleus, orbiting Comet 67P for over two years as it travelled through the inner Solar System. Its lander, Philae, studied the surface directly, giving ground truth for the orbiter’s measurements. Together they revealed the physical and chemical make-up of comets and their possible part in the origin of life.',
};
for (const [n, to] of Object.entries(DESC)) add(n, sty('description', to, 'Shorter; same facts.'));

// The panel heading, if the OU text goes into the first person.
const general = { n: 'General', m: 'Applies to the whole app', c: [{
  f: 'details panel heading', v: 'sty', q: 'Heading "Open University Involvement" above the OU text',
  note: 'If you accept the first-person rewrites, the heading reads oddly above "We…". Suggest "Our part in it" or "Our involvement". This is a code change in src/apps/showcase/details.js, made by hand.',
  s: [], sug: { e: [{ f: 'entry', from: 'Open University Involvement', to: 'Our involvement' }] } }] };
DATA.unshift(general);

// Physical values tab from nums.mjs (radius rows of modelled bodies are by design).
const NUMS = JSON.parse(fs.readFileSync(path.join(DIR, 'nums.json'), 'utf8')).map(r => {
  if (r[1] === 'radius_km' && r[0] !== 'Bennu') return [r[0], r[1] + ' (half longest side)', r[2], r[3] + ' (SBDB mean radius)', 'ok'];
  if (r[1].startsWith('rot_period') && r[0] === 'Comet 67P') return [r[0], r[1], r[2], r[3] + ' (SBDB, pre-2015; it has since shortened to about 12.06 h)', 'ok'];
  if (r[1] === 'radius_km' && r[0] === 'Bennu') return [r[0], r[1], r[2], '0.282 (half of 565 m longest side)', 'fix'];
  return r;
});
for (const m of ['Io', 'Europa', 'Titan']) {
  const r = NUMS.find(x => x[0] === m && x[1] === 'orbit.rate');
  if (r) { r[3] += ' (sidereal; data.json’s is the anomalistic rate fitted to Horizons, as DATA.md says)'; r[4] = 'ok'; }
}

const GAPS = [
  { n: 'Apollo and Luna samples (sample analysis)', why: 'Simeon Barber and Mahesh Anand want the links between sample analysis, sample return and in situ analysis shown. The app now covers returned samples from Genesis, Stardust, Hayabusa, Hayabusa2, OSIRIS-REx and Chang’e-5, and Apollo samples in the Moon’s OU text. An "Apollo samples" entry on the Moon would round it off.', addable: false,
    note: 'Not drafted: say if you want it, and who should supply the OU text (Mahesh Anand).', kv: [], s: [S.change5] },
];

const report = {
  meta: {
    title: 'OUniverse fact check', checked: '2026-10-14', reviewDate: '2026-10-14', dataFile: 'public/data.json', entries: data.length - 1,
    statusNote: 'Status is judged as of 14 October 2026.',
    lede: 'A fact check of everything new or changed since 30 September, including today’s colleague comments and the nine new objects, plus statuses, numbers and flagged claims. Style rewrites put the OU text in the first person ("we") and make it shorter; accept them one by one.',
  },
  DATA, NUMS, GAPS,
};
fs.writeFileSync(path.join(DIR, 'report-data.json'), JSON.stringify(report, null, 1));
const n = { ok: 0, fix: 0, bad: 0, unv: 0, sty: 0 };
DATA.forEach(o => o.c.forEach(x => n[x.v]++));
console.log(DATA.length, 'objects', n);
