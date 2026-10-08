---
name: factcheck-data
description: Fact-check OUniverse's data.json against public sources and research new facts (mission news, new OU involvement, missing missions), keeping every fact and its sources in a ledger so nothing is searched twice. Publishes a review page where the user accepts, keeps or rewrites each suggested change, then applies their decisions and updates the claims registry. Use when the user asks to fact-check, verify, update or research data.json, check new or changed missions, re-check unverified claims, or apply decisions from a fact-check review page.
---

# Fact-check data.json

OUniverse's objects and their text live in `public/data.json` (what the live site serves; see `DATA.md` for every field). This skill checks every factual claim in it against public sources, and researches new facts: mission news, new OU roles, missing missions. It then publishes a review page where the user decides on each suggested change, and applies those decisions. Two files carry the work forward. The registry records the status of every claim. The fact ledger records every fact found and its sources. So later reviews only research what is new, changed, out of date or still unverified.

Everything lives in this project:

| Path | What it is |
|---|---|
| `.claude/skills/factcheck-data/template.html` | The review page. `build-report.mjs` injects the data. |
| `.claude/skills/factcheck-data/*.mjs` | `registry.mjs`, `sources.mjs`, `build-report.mjs`, `apply-decisions.mjs`, shared `lib.mjs`. Run from the project root with `node`. |
| `factcheck/registry.json` | Every checked claim and its status, fingerprints of each object's fields, reviews held, and proposed new entries. |
| `factcheck/sources.json` | **The fact ledger.** Every researched fact: object, field, what the source says, the source links, when it was checked, whether it is volatile, and searches that found nothing. Read it before any web search. |
| `factcheck/review-YYYY-MM-DD/` | One review: `report-data.json`, `report.html`, `facts.json` (new facts for the ledger), `decisions/` (saved from the page), `overrides.json`. |

The first review (2026-09-30) is a worked example of every file: `factcheck/review-2026-09-30/`.

## Claim statuses (registry)

`verified` (public source confirms), `corrected` (was wrong; replaced with sourced text), `unverified` (no public source; kept), `user-supplied` (the reviewer's own knowledge; not public), `disputed` (a source disagrees but the reviewer kept it), `removed` (taken out pending verification; the gap is flagged).

**The last four are flagged.** Every review must show them again with a `flag` label ("Unverified since 2026-09-30") until a source turns up or the user removes them. The user asked for this explicitly: unverified claims stay flagged in future reviews.

## Part 1: run a review

1. **See what needs checking.** `node .claude/skills/factcheck-data/registry.mjs status` lists:
   - `newObjects`: objects not in the registry. Check every claim.
   - `changedFields`: fields whose text changed since the last review. Re-check those fields.
   - `flagged`: claims still unverified, user-supplied, disputed or removed. Try a fresh search. Otherwise carry them forward with a `flag`.
   - `timeSensitive`: statuses, launch years, `status_timeline` dates and dated future wording. Always re-check these against today's date.
   - `missingOu`: missions with no `ou_involvement`. Research what the OU actually did.
   - `candidates`: proposed missions not yet added. Re-offer them on the Missing missions tab.

   Unchanged, verified claims don't need new research. Carry them into the report as confirmed with their registry sources, so the page still covers the whole file. If the user asks for a full re-check, research everything.

   Then run `node .claude/skills/factcheck-data/sources.mjs stale --days 90`. It lists volatile facts (statuses, dates, counts, funding) whose check is older than 90 days; re-search those.

2. **Check the ledger before searching.** For each object to check, run `node .claude/skills/factcheck-data/sources.mjs object "<name>"`. To find a fact across objects, use `sources.mjs lookup <text>`. Then for each claim:
   - A matching fact that is **not volatile** (history, physical values, naming citations, instrument roles on past missions) is settled. Cite its ledger sources and don't search again.
   - A **volatile** fact checked within 90 days: reuse it. If older, re-check it (often one fetch of the recorded source).
   - A **not-found** record lists the searches already tried. Don't repeat them; try different sources or queries, or carry the claim forward as unverified.
   - No matching fact: research it (step 3).

3. **Research what the ledger doesn't cover.** Use WebSearch and WebFetch. Tell the user what you're checking every few minutes; this is long work. Record a link for every verdict. Sources that worked well:
   - **Planet physical values:** NASA fact sheets (`nssdc.gsfc.nasa.gov/planetary/factsheet/`).
   - **Small bodies and asteroid naming citations** (compare word for word): the JPL SBDB API, `https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=<number>&discovery=1`.
   - **CEI (Centre for Electronic Imaging) roles:** `https://university.open.ac.uk/science/research/cei/missions/` and its subpages. That index also lists missions the file may lack.
   - **Author lists and affiliations:** `curl -s https://api.crossref.org/works/<doi>`. This is the way to test "the OU led / contributed to paper X".
   - **Status and dates:** ESA/NASA/JAXA mission pages first, then Wikipedia for the latest dated statement.
   - **OU news:** `open.ac.uk/blogs/news`, `research.open.ac.uk/news`, `oro.open.ac.uk`.
   - Some sites return 403 to WebFetch (le.ac.uk, parliament.uk). Use the search snippet and say so.
   - PDFs saved by WebFetch can be read with `pdftotext`.

   Judge claims strictly: "OU led" needs a source that says the OU led. A co-author or participant is not a leader. Check tense and date against today: launched, arrived and re-entered all change. Physical claims such as "stable point" and moon counts get checked too.

4. **Research new facts.** Checking what data.json says is only half the job; also look for what it should say now.
   - **New objects:** research every field `DATA.md` lists for its type (status, launch year, placement such as `landed_coords` or orbit, physical values for bodies, description, OU involvement), not just the text someone wrote.
   - **Missions that are active, planned or en route:** search for news since the last review date (in `registry.json` → `reviews`): launches, delays, arrivals, end of mission, re-entry, new results.
   - **OU involvement:** for every mission, and first for those in `missingOu` or with `removed` claims, search OU news, the CEI mission pages and ORO for new or confirmed OU roles, grants and papers. A found source can turn a flagged claim into a verified one.
   - **Missing missions:** check the CEI mission index and OU space news for missions with OU involvement that aren't in data.json, and re-check the `candidates` list.

   Present what you find as suggestions on the page. An addition extends a sentence (`from` the sentence, `to` the sentence plus the new fact), or uses `"*"` to rewrite a field. New status dates go into `status_timeline`, and missing missions go on the Missing missions tab. Don't add anything to data.json until the user accepts it.

5. **Write the new facts to the ledger.** Put every fact researched in this review into `factcheck/review-<today>/facts.json`: confirmations, corrections, new facts, and searches that found nothing (`"status": "not-found"` with `"searched"`). The format is at the top of `sources.mjs`. Then run `node .claude/skills/factcheck-data/sources.mjs add factcheck/review-<today>/facts.json`.
   - Write each fact as what the source says, in one or two sentences, with a short `quote` where the wording matters (roles, figures, dates).
   - Set `volatile` for anything that can change (status, dates, counts, funding, "currently").
   - Never record a fact without a source unless it is `not-found`. The reviewer's own knowledge goes in the registry as `user-supplied`, not in the ledger.

6. **Write `factcheck/review-<today>/report-data.json`:**
   ```json
   { "meta": { "title": "OUniverse fact check", "checked": "YYYY-MM-DD", "reviewDate": "YYYY-MM-DD",
               "dataFile": "public/data.json", "entries": 81, "statusNote": "Status is judged as of …" },
     "DATA": [ { "n": "<exact object name>", "m": "mission · Operational · 2018",
                 "c": [ { "f": "description|ou_involvement|status|launch_year|landed_coords|orbit.e|…",
                          "v": "ok|fix|bad|unv", "q": "the claim, short", "note": "what the source says",
                          "s": [ { "t": "link label", "u": "https://…" } ],
                          "flag": "Unverified since 2026-09-30",
                          "sug": { "e": [ { "f": "field", "from": "exact text in data.json", "to": "replacement" } ], "why": "optional" }
                          /* or "sug": { "keep": "Keep. Confirm with <who>." } */ } ] } ],
     "NUMS": [ ["Body", "field", "data.json value", "reference value", "ok|fix"] ],
     "GAPS": [ { "n": "Mission", "why": "…", "addable": true, "kv": [["type","mission"],["parent","Moon"],["status","…"],["launch_year","…"],["description","…"],["ou_involvement","…"]],
                 "s": [ { "t": "…", "u": "…" } ], "note": "optional check" } ] }
   ```
   - Give every claim that isn't `ok` a `sug`. Write `from` as the exact text currently in data.json, and keep it as short as makes it unique (a clause, not the whole paragraph). `"from": "*"` replaces the whole field. For non-string fields (numbers, coordinates), `from` and `to` are JSON text, e.g. `{"lat":43.06,"lon":-51.92}`. `"f": "entry"` marks a structural change (rename, replace an entry), which Claude applies by hand.
   - Unverified claims get `"keep"` with who could confirm them, or a softened rewrite when the claim is strong.
   - Write replacements in plain English, in the file's style (British spelling), with no claims beyond the source.
   - Gaps: fill the fields `DATA.md` requires for a new object (`type`, `parent`, `status`, `launch_year`, placement: `orbit` or `orbit_type` with `landed_coords` etc., `description`, `ou_involvement`), each sourced. Set `"addable": false` on info-only cards.

7. **Build the page:** `node .claude/skills/factcheck-data/build-report.mjs factcheck/review-<date>`. It must report no PROBLEMS. A problem means a `from` text doesn't match data.json, and accepting that suggestion would fail. Fix the text and rebuild.

8. **Publish** `factcheck/review-<date>/report.html` with the Artifact tool:
   - Load the `artifact-design` skill first if this session hasn't.
   - Pass `capabilities: {"db": {}, "downloads": true}` and `icon: "checklist"`.
   - Use a new artifact per review (its own file path), so each review has its own decisions.
   - Put the URL in `overrides.json` as `"artifact"` later.

   Give the user the link and a short summary (what's wrong, what's unverified, what's missing). The page saves each choice to its `decisions` collection. Submitting writes `submissions/latest`.

## Part 2: apply the user's decisions

1. **Save the decisions** into the review folder:
   - Call ArtifactData with `action: "list"`, the artifact `url`, `collection: "decisions"`, `query: {"limit": 1000}` and `out_dir: "<project>/factcheck/review-<date>"`. That writes `decisions/*.json`. An out_dir in the session scratchpad is refused; the project folder works.
   - Also `get` `submissions/latest` to confirm the user submitted.
2. **Dry run:** `node .claude/skills/factcheck-data/apply-decisions.mjs factcheck/review-<date> --dry`. Then run it for real. It applies every `accept` with exact edits and writes data.json in the file's own style: indent, line endings, `motion` on one line. It lists the rest for you.
3. **Handle the rest by hand**, using `readData` and `writeData` from `lib.mjs` so the formatting survives:
   - `custom`: follow the user's note. Write any new text as carefully as a suggestion. Don't add claims the note didn't give or a source doesn't support.
   - `keep`: no change; record it in the registry.
   - Structural (`entry`), renames and new entries (`add`, `custom` on a gap): names are keys. When renaming, also update credits `subject`, any `parent` or `menu_parent` that points at the old name, and `grep` `src/` and `public/mission-guide.html` for the old name. Record `"renames"` in `overrides.json`. Ask before a structural change the user didn't explicitly accept.
   - Status that should change on a known date: use `status_timeline` (see `DATA.md`), not a hand edit later.
   - Coordinates that must stay apart in the scene (landers on one body): keep the real site accurate. Nudge a failed or never-landed craft instead, and say so.
4. **Check the result:**
   - `git diff --stat public/data.json` should show only the intended lines; a whole-file diff means formatting broke.
   - `npm run lint`.
   - Load `http://localhost:5173/space-vis-test/` and `/mission-guide.html` (dev server; headless system Chrome per `CLAUDE.md`) and check for page errors, renamed objects and statuses. A 404 already exists on the page; compare against the unchanged file before blaming the edit.
5. **Record the review:**
   - Write `factcheck/review-<date>/overrides.json`: `renames`, `candidates` (e.g. `{"<gap name>": "added"}`), and a status for every `custom` decision: `"<Object>#<index>": {"status": "...", "note": "..."}`. Use `user-supplied` for the user's own knowledge, `removed` for deletions, `corrected` for sourced rewrites, `unverified` for "keep but flag", and `unverified` for accepted softenings that still lack a source.
   - Run `node .claude/skills/factcheck-data/registry.mjs record factcheck/review-<date>`. It must not print NEEDS STATUS. It also refreshes each object's field fingerprints from the edited data.json.
   - Keep the ledger in step. For each rename, run `sources.mjs rename "<old>" "<new>"`. If applying a decision took new research (a fresh source for the user's rewrite, say), add those facts with `sources.mjs add`.
6. **Tell the user** what changed, what you did with each custom note, what's still flagged, and anything that needs their input. The change reaches the live site at its next deploy (see `CLAUDE.md`). Don't commit unless asked.

## Rules

- Never edit data.json while researching; only in Part 2, from the user's decisions.
- Don't flip `USE_NAMED_ASTEROID_MODELS` or change privacy-related fields.
- Report faithfully. "Unverified" means no public source was found, not that the claim is wrong. Say which searches were tried.

## Sharing the wording with colleagues

`python .claude/skills/factcheck-data/export-wording.py` writes `factcheck/OUniverse wording - comments welcome.xlsx` from the current data.json and registry. It's a plain spreadsheet for OU academics on SharePoint, with one row per planet or mission: what it is, the OU text, the general text, a yellow Feedback column, a "Can you confirm?" column listing the registry's unverified claims, and yellow boxes near the top for missing missions. Needs `openpyxl`. Treat returned comments like `custom` decisions: apply them by hand and record their status in the registry (`user-supplied` unless a source is found).
