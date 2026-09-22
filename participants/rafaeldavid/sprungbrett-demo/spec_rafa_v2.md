# Sprungbrett — factory demo spec (rafa v2)

**Source:** `participants/geraldinehackmayer/s2-factory/sprungbrett-spec.md` (Geraldine Hackmayer, 2026-09-22), adapted. Her spec makes the product case: problem, personas, metrics, roadmap. This one drops all of that and keeps only what a demo needs.

**Status:** round 2, after critiques on usability, fidelity to the workshop's definition of a factory, and feasibility. What changed, and what I decided where the critiques disagreed, is at the end.

## What this is

One static page, desktop only, that runs a small factory end to end on invented data and shows its working. Somebody watches it for two minutes and sees what a factory is: a job arriving, stations handing work to each other, and a file at the end that another factory could pick up.

It is a demo of a factory, not a factory. Nobody can hand this to their assistant and get their own shortlist. Saying that plainly is part of the demo.

No branding, no objectives, no metrics, no roadmap, no accounts, no backend.

**Interface reference:** whatwatercosts.org. It opens with filters already set and thousands of rows already on screen. Data first, interaction second, no marketing copy.

## The input

The input is a LinkedIn profile. In the demo it is one of three invented profiles, chosen from cards that are visible on load.

The paste field is present and disabled, so the real input is visible without pretending. Beside it, verbatim:

> This page makes no network requests and does not read LinkedIn. Anything you paste is ignored: the demo loads one of three invented profiles.

The three small fields, city, German level and sector, sit on the chosen card as read-only text with a **change** link. Clicking it reveals them as inputs. The default path needs no form filling; changing a field re-runs the computed stations in front of you, which is the only honest way to show that the thing adapts to its user.

## The page on load

Nothing is blank. A profile is preselected, its stations are already run, and the shortlist is already on screen. Pressing **Run** on another card replays the chain.

```
┌──────────────────────────────────────────────────────────────┐
│ A factory is a kit that runs without its author.             │
│ This page runs one, on invented data, and shows its working. │
├──────────────────────────────────────────────────────────────┤
│ [ paste a LinkedIn URL — disabled ]   honesty line           │
│ ( card 1 • selected )  ( card 2 )  ( card 3 )    [ Run ]     │
├──────────────────────────────────────────────────────────────┤
│ [ st.1 ] [ st.2 ] [ st.3 ] [ st.4 ] [ st.5 ]   ← five tiles  │
├──────────────────────────────────────────────────────────────┤
│ shortlist table (5 columns, 8 rows)                          │
│ the row shape, printed  ·  download CSV  ·  copy CSV         │
└──────────────────────────────────────────────────────────────┘
```

Page max width about 1100px. Body text 16pt, table text 20pt, nothing on hover only, because the back row cannot see a cursor. Running scrolls to the result so nobody scrolls live.

## The five stations

Tiles in a row, not stacked. Each carries one sentence with counts, a monospace chip naming what it hands on, and a badge saying **recorded** or **computed**. They reveal about 400ms apart, under 2.5s in total.

| # | Station | Badge | Hands on |
|---|---|---|---|
| 1 | Read profile — 6 roles, 12 years, 2 languages | recorded | `profile.json` |
| 2 | Check credentials — regulated profession, next step named | recorded | `credentials.json` |
| 3 | Derive archetypes — 3 roles this person could plausibly land | recorded | `archetypes.json` |
| 4 | Score listings — 41 listings scored on 4 components | computed | `scored.json` |
| 5 | Assemble shortlist — 8 above the line, 33 below, with reasons | computed | `shortlist.csv` |

The badges are the honest line. Stations 1 to 3 are judgment somebody wrote down in advance; the page looks them up. Stations 4 and 5 are arithmetic the page actually does at run time, from the fields on the card, which is why changing a field changes the answer while you watch.

Above the tiles, verbatim:

> No model runs here. The judgement in the first three steps was written by hand in advance; the page looks it up. The last two steps are arithmetic, and they run when you press Run.

**Reveal.** Clicking a tile shows a key-and-value table or three to five rows, never raw JSON. Station 3 is open by default, so the room sees what a reveal gives without anyone clicking.

## Station 2, the one that can be wrong

Recognition in Germany does not have one path per profession, and a demo that implies otherwise is telling people something false about their lives.

The first branch is whether the profession is regulated. You may work in a non-regulated profession without recognition. A ZAB Statement of Comparability is generally not required to work, is explicitly not recognition, and never substitutes for it in a regulated profession. Recognition is assessed against a German reference occupation by an authority that varies by Bundesland.

So `credential-map.json` carries, per profession: `regulated` true or false, `reference_occupation`, `authority: "varies by Land"`, one `next_step`, and a real `source_url`. The station never emits a verdict about equivalence. On the tile, verbatim:

> Not legal or recognition advice. Free official counselling: anerkennung-in-deutschland.de

## The result

On screen: five columns, at most eight rows, sorted by fit.

| Role | Employer | City | German needed | Fit |
|---|---|---|---|---|

The archetype and the one-line reason sit under the role as secondary text rather than as columns. Fit shows as three filled dots, not a number and not colour alone. Under the table, the full row shape is printed in a fixed block: that block is the interface. The first two lines of the CSV render inline, because nobody at a podium opens a downloaded file. There is a download and a copy-to-clipboard fallback.

## What it exports

The file is work in progress, not a finished answer, so it carries the rejects too and keeps the score in parts rather than blending it away.

`shortlist.csv`, schema version 1, one row per listing scored:

```
listing_id, title, employer, city, sector, language_requirement_text,
german_level_mapped, working_language, visa_sponsorship_stated,
archetype_id, credential_path_id, score_level_fit, score_sector_fit,
score_city_fit, score_seniority_fit, shortlisted, reason, synthetic
```

Four score components stay separate so a downstream factory can re-rank under its own weights. `archetype_id` and `credential_path_id` point back at the intermediates that produced the row. `shortlisted` is true for the eight above the line and false for the rest, each with a `reason`.

The schema ships as `app/shortlist.schema.json` with its version, so the interface is a file rather than a paragraph on a page.

## The demo's declared lines

- **Exports:** `shortlist.csv`, schema v1, every listing scored, rejects included.
- **Interface:** a static page. Open `app/index.html` in a desktop browser; the export is a file handoff in the column order above.
- **Adapts to:** the city, German level and sector on the card. Not the profile: the three profiles are fixtures, and the page says so.

## Invented data

Three files, all marked.

- `profiles.json` — three profiles, described by profession, qualification and years only. No names, no ages, no photos, no identifiable employer history. Origin appears only as "qualified outside the EU", and country never affects a score.
- `listings.json` — about forty listings. Each carries `language_requirement_text` in the phrasing German ads actually use, such as *verhandlungssicher*, *fließend*, *gute Deutschkenntnisse*, or English-only, plus `german_level_mapped`, which is labelled on screen as the demo's own guess rather than a fact, because those terms have no CEFR definition. Openness is two checkable fields, `working_language` and `visa_sponsorship_stated`, instead of a judgement like "immigrant friendly". Every row has `synthetic: true`, and `(fictional)` sits inside the employer string so it survives into the CSV.
- `credential-map.json` — as described above.

Employer names are invented compounds with a legal form, each web-searched once for collisions. Hand-check that every profile yields at least eight matches after filtering, or cut to two cities.

Above the result, verbatim:

> Invented listings at invented employers. Nothing here is a real opening: do not apply to anything on this page.

## How it is built

A single folder, no build step, no network, opens from a file path.

The trap: a page opened over `file://` cannot `fetch()` its own JSON, and ES modules fail the same way. So the data ships as `data.js` setting `window.DATA`, loaded with a plain script tag, and the `.json` files stay in the repo as the readable source. No module scripts, no CDN fonts, no web fonts at all. No `Math.random` or `Date.now` anywhere in scoring, or the demo stops being repeatable.

```
app/
  index.html
  app.js
  data.js                 window.DATA = { profiles, listings, credentialMap }
  data/                   the same data as readable JSON, not fetched
  shortlist.schema.json
```

## Not in scope

Mobile. Accounts or saved state. Any live LinkedIn access. CV generation. Employer directories. A server.

## Where it could bridge

Station 4 is a retrieval problem, which is what Patrick Atwater's `rag-factory` scaffolds. For that handoff to work, this side declares `listings.json` with its schema, its row count, how it grows, and a `listing_id` derived from something durable; his side declares that a schema plus a row count is enough of a corpus description, and returns a read-only pipeline spec that would replace the precomputed part of the station. Factory to factory, file handoff, each side declaring only the row shape.

## What the critiques changed

Three reviews: first-run usability, fidelity to the workshop's definition, and feasibility with the German recognition facts.

- **Data before interaction.** The page used to open with an empty field that ignored what you typed. Now three cards are visible with one preselected and its results already rendered.
- **Half the stations now compute.** Everything was precomputed, which made "the same input gives the same output" true for an empty reason, and made the claim to adapt to its user false. Scoring is arithmetic, so it runs live, and every station says which kind it is.
- **The export became an intermediate.** It was an ordered, blended, finished answer. It now carries rejects, keeps score components separate, points back at the intermediates, and has a versioned schema file.
- **Station 2 stopped implying one path per profession,** which is the claim in this domain most likely to mislead somebody about their own case.
- **Four warnings are now fixed wording** at the place they belong, rather than "a visible line says so".
- **It cannot be built as originally described:** `file://` blocks fetching local JSON, so the data ships as a script.

Three places the reviews disagreed, and what I chose:

1. **The paste field.** Usability said remove it, since it lies. You asked for the single input to be a LinkedIn profile. It stays, disabled, next to the honesty line, so the real input is visible and nothing pretends.
2. **Card labels.** Usability wanted human labels like "Amina, nurse, Damascus". Feasibility said no invented names and no country, and that country must never touch a score. Cards read by profession, qualification and years.
3. **Grouping the result.** Feasibility wanted listings grouped under archetype headings; usability said grouping hides the flat file the demo is about. Flat table, archetype as secondary text.

## Open

1. Does anyone need to see a station's raw file, or is the key-and-value view enough for everybody?
2. Does the fourth score component, seniority fit, earn its place, or is three enough?
