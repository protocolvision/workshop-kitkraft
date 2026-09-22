# Sprungbrett — factory demo spec (rafa v2)

**Source:** `participants/geraldinehackmayer/s2-factory/sprungbrett-spec.md` (Geraldine Hackmayer, 2026-09-22), adapted. Her spec makes the product case: problem, personas, metrics, roadmap. This one drops all of that and keeps only what a demo needs.

**Status:** round 2, after critiques on usability, fidelity to the workshop's definition of a factory, and feasibility. What changed, and what I decided where the critiques disagreed, is at the end.

## What this is

One static page, desktop only, that runs a small factory end to end on invented data and shows its working. Somebody watches it for two minutes and sees what a factory is: a job arriving, stations handing work to each other, and a file at the end that another factory could pick up.

It is a demo of a factory, not a factory. Nobody can hand this to their assistant and get their own shortlist. Saying that plainly is part of the demo.

No branding, no objectives, no metrics, no roadmap, no accounts, no backend.

**Interface reference:** whatwatercosts.org. It opens with filters already set and thousands of rows already on screen. Data first, interaction second, no marketing copy.

## The flow: three states

The page has three states, one after another, in one column. Never more than one of them is asking for attention.

**1. Sign in.** The page opens nearly empty: the product line, one sentence, and one button, **Continue with LinkedIn**. Clicking it opens an inline chooser listing three demo accounts by profession and years — "Registered nurse, general care · qualified outside the EU · 12 years". Choosing one imports that profile.

The chooser is plain HTML in the page, not a popup and not a second screen. It is a mock: no logo, no LinkedIn colours, no imitation of anybody's sign-in screen, no fake linkedin.com chrome, and no field that asks for an email or a password — the page has no credential input anywhere, and nothing is fetched. The chooser's own heading is "Choose a demo account", so the button cannot be mistaken for a real connection. That heading is the one honesty left standing at the front of the flow, and it stays, because a sign-in that lies about what it does is the one thing on this page a visitor could be fooled by.

**2. A few questions.** The sign-in area collapses to one quiet line naming who is signed in, with a **switch** link. Four fields appear, prefilled from the profile and all editable: city, German level, other languages, and target sector. One primary button under them, **Find roles**, and nothing else competing with it.

Other languages does real work rather than decorating the form. A listing carries a `working_language`, so an English-only post scores well for somebody who works in English and badly for somebody who does not, and a German-and-English team forgives part of a German shortfall. The languages ride along into `profile.json` so the intermediate stays truthful.

**3. Results.** The questions collapse into one summary line — city · level · languages · sector, with **change** — and the results take the page: the roles table, what you're missing, who to approach, then the closed disclosure holding the steps and the downloads. Changing anything re-runs in place; the recorded steps do not move.

```
state 1                     state 2                       state 3
┌──────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│ Find roles that      │   │ Find roles that ...      │   │ Find roles that ...      │
│ match your quals...  │   │ Signed in as nurse,      │   │ Signed in as nurse  switch│
│                      │   │   12 years.     switch   │   │ Berlin · B1 · English ·  │
│ [Continue with       │   │                          │   │   Pflege        change   │
│  LinkedIn]           │   │ City ▾  German ▾         │   ├──────────────────────────┤
│                      │   │ Other languages ☑ ☐ ☐    │   │ 8 roles for a registered │
│ Choose a demo account│   │ Target sector ▾          │   │ roles table   ← the hero │
│  nurse · 12 years    │   │                          │   │ above the fold           │
│  engineer · 8 years  │   │ [Find roles]             │   ├──────────────────────────┤
│  developer · 5 years │   │                          │   │ What you're missing      │
│                      │   │                          │   │ Who to approach          │
│                      │   │                          │   │ + How this was worked out│
└──────────────────────┘   └──────────────────────────┘   └──────────────────────────┘
```

Page max width about 1040px, one column, left aligned. Body text 16px, table text a notch larger for projection, nothing on hover only, because the back row cannot see a cursor. On a 1280×800 desktop the first three rows of the table are visible without scrolling.

## The interface, in three layers

1. **The answer, immediately.** In state 3 the roles table is the hero and it is above the fold. The setup above it is two quiet lines, not a block of cards.
2. **The reasoning, one click away.** Under each role, the archetype and a one-line reason as secondary text. What you're missing and who to approach follow as their own quiet sections: headings only, no card chrome.
3. **The working, tucked away.** The six steps collapse into one closed disclosure at the bottom, "How this was worked out", holding the steps with their counts and every download. A presenter opens it on stage; a first-time reader is never blocked by it.

Borders are a last resort: sections are separated by whitespace and type weight. One accent, cobalt, for the single primary action and the focus rings. Green carries fit and nothing else. Three type sizes, two weights, one spacing scale in multiples of 8. Fit is three dots plus a word, never colour alone. Motion is one 250ms highlight on what just changed, and it honours `prefers-reduced-motion`.


## The six steps

Numbered rows inside the **How this was worked out** disclosure, which is closed on load. Each carries one sentence with counts, the name of the file it produces, and a download and a copy for that file.

| # | Step | Kind | Produces |
|---|---|---|---|
| 1 | Read profile — 6 roles, 12 years, 2 languages | recorded | `profile.json` |
| 2 | Check credentials — regulated profession, next step named | recorded | `credentials.json` |
| 3 | Derive archetypes — 3 roles this person could plausibly land | recorded | `archetypes.json` |
| 4 | Score listings — 41 listings scored on 4 components, for a city and a level | computed | `scored.json` |
| 5 | Find gaps — what the profile is missing, per archetype | computed | `gaps.csv` |
| 6 | Assemble outputs — 8 above the line, 33 below, three files out | computed | `shortlist.csv` |

Steps 1 to 3 are judgment somebody wrote down in advance; the page looks them up. Steps 4 to 6 are arithmetic the page actually does at run time, from the three fields, which is why changing a field changes the answer while you watch. Step 4 prints the city and the level it used, so you can see it move.

The kind column lives in this spec, not on the page: the recorded and computed badges were cut with the rest of the explanatory chrome.

**Step 5, find gaps.** For each archetype, compare the profile against that archetype's stated requirements and produce what is missing: a German level short of what the role asks, a recognition step not started, and one or two certifications or courses. Each gap carries what it is, why it matters for that archetype, roughly how long it takes, and a next step. Durations are ranges, always hedged with *typically*. Real certificates and procedures are named factually — a telc or Goethe B2 certificate, a Kenntnisprüfung or an Anpassungslehrgang, chamber registration for a protected title — because naming what exists is useful. Nothing invents a certificate, states a price, or promises an outcome.

**Step 6, assemble outputs.** The roles table, the gaps, the outreach list, and the three CSVs.

**Working.** Each step can show its working as a key-and-value table of three to eight rows, never raw JSON. All of it starts closed: a presenter opens it on stage, and a first-time reader is never blocked by it.

## Step 2, the one that can be wrong

Recognition in Germany does not have one path per profession, and a demo that implies otherwise is telling people something false about their lives.

The first branch is whether the profession is regulated. You may work in a non-regulated profession without recognition. A ZAB Statement of Comparability is generally not required to work, is explicitly not recognition, and never substitutes for it in a regulated profession. Recognition is assessed against a German reference occupation by an authority that varies by Bundesland.

So `credential-map.json` carries, per profession: `regulated` true or false, `reference_occupation`, `authority: "varies by Land"`, one `next_step`, and a real `source_url`. The step never emits a verdict about equivalence: it carries `equivalence_verdict: "not assessed here"` and says so in its working. The not-advice line that used to sit on this tile went with the other disclaimers; the `source_url` stayed, because a link to free official counselling is useful rather than defensive.

## The result

On screen: five columns, at most eight rows, sorted by fit. The table is the hero and it is above the fold.

| Role | Employer | City | German needed | Fit |
|---|---|---|---|---|

The one-line reason sits under the role as secondary text rather than as columns, and it names the archetype. Fit shows as three filled dots plus a word, never colour alone. When nothing clears the line the table says so and suggests a different city, sector or level, rather than showing an empty box.

Under the disclosure, the full row shape of each CSV is printed in a fixed block: that block is the interface. The first two lines of each CSV render inline, because nobody at a podium opens a downloaded file. There is a download and a copy-to-clipboard fallback for each.

## What it exports

Three CSVs and four JSON intermediates, and every one of them is reachable from the page. A downstream factory usually wants the profile or the scored set, not the finished shortlist: the last file is the least reusable thing in the chain, because somebody else's weights are baked into it. So each step hands over its own output, and the shortlist is only the one that happens to be last.

The files are work in progress, not finished answers, so they carry the rejects too and keep the score in parts rather than blending it away.

`shortlist.csv`, schema version 1, one row per listing scored:

```
listing_id, title, employer, city, sector, language_requirement_text,
german_level_mapped, working_language, visa_sponsorship_stated,
archetype_id, credential_path_id, score_level_fit, score_sector_fit,
score_city_fit, score_seniority_fit, shortlisted, reason, synthetic
```

Four score components stay separate so a downstream factory can re-rank under its own weights. `archetype_id` and `credential_path_id` point back at the intermediates that produced the row. `shortlisted` is true for the eight above the line and false for the rest, each with a `reason`.

`gaps.csv`, schema version 1, one row per missing item:

```
archetype_id, gap_type, item, why, typical_duration, next_step, synthetic
```

`gap_type` is one of language, recognition, certification, course or document. It is computed, not looked up: change the German level and the language rows and their durations change with it.

`outreach.csv`, schema version 1, one row per thing worth approaching:

```
archetype_id, target_type, target, organisation, why, synthetic
```

`target_type` is one of role, body, chamber or network. For a shortlisted employer it is the role to approach, never a person: no names, no individual titles, no contact details. For everything else it is a category of organisation, except where naming the real kind is a plain fact, such as a chamber of commerce existing in every German city.

The schemas ship as `app/shortlist.schema.json`, `app/gaps.schema.json` and `app/outreach.schema.json`, each with its version, so the interface is a file rather than a paragraph on a page.

## No disclaimers on the page

Four warnings were specified as fixed wording, written, and then cut. The decision: this is a demo of an app shown in a workshop, and the visible product should look like a product, so the interface carries no disclaimer copy and no explanation of itself. That is a deliberate call about a room, not a claim that the caveats do not matter, and it only holds because the demo is shown by a presenter and lives in a repo rather than being a public tool. If it ever ships to the public, the warnings come back first.

What carries the markers instead:

- **The data.** `synthetic: true` on every profile, listing and generated row, and `(fictional)` inside every employer string.
- **The exports.** A `synthetic` column in all three CSVs.
- **The HTML.** A comment at the top of `index.html` and of `data.js` saying the data is invented, that nothing is fetched from LinkedIn, and that no model runs.
- **Title and metadata.** `<title>Sprungbrett — demo (synthetic data)</title>` and a meta description saying the same. Tab and metadata only, nothing rendered.
- **`app/README.md`,** which keeps the full account of what is invented and what is precomputed.

Three things stayed visible, because removing them would make the page mislead rather than merely look clean:

1. **The sign-in chooser says "Choose a demo account".** A sign-in that implies it read your real profile is the one thing here a visitor could be fooled by.
2. **`(fictional)` stays inside the employer string,** on screen as well as in the CSV. A job advert that reads as real is the one thing on this page somebody could act on.
3. **One line under "What you're missing"** saying the requirements are set by the competent authority, vary by Bundesland, and can be checked free at anerkennung-in-deutschland.de. That panel tells somebody what they are missing in a regulated profession, which is the claim in this domain most likely to mislead a person about their own case.

None of the three reads as a disclaimer block. They are one heading, one parenthesis and one line of small text.

### The condition was met, on 2026-09-22

The paragraph above says the decision only holds because the demo is presenter-led and lives in
a repo, and that if it ever ships to the public the warnings come back first. That happened: the
page was published to `npc.here.now/workshopgigidemo` to be shared during a workshop session.

So the rule was applied rather than quietly dropped. The form it took is **one line above the
results**, in all six interface languages:

> Invented listings at invented employers. Nothing here is a real opening.

One line rather than four, because three of the original four are already covered by the markers
that stayed visible — the demo-account chooser, `(fictional)` inside every employer string, and
the authority line under "What you're missing" — and the fourth, about no model running, is not
what a stranger following a link is at risk from. What they are at risk from is taking an
invented vacancy seriously, and that is the one this line addresses. It is styled as a statement
of fact in the page's own voice, not as an alert.

It lives in `strings.js` with every other interface string, because a warning that appears only
in English on a page built for six languages reaches exactly the readers least likely to need it.

**If the URL comes down, whether the line stays is a fresh decision, not an automatic revert.**

## Tell us more

A section under the roles table. Four questions the page asks back — shifts including nights, moving city, a driving licence, a fixed-term contract to start — each answerable Yes, No or Skip, and a free-text box. Answering re-runs the scoring immediately and a quiet line above the table reports the delta for two seconds: "+3 roles · 1 requirement met". Rows that have just joined get a brief accent edge.

The free text is read by a literal keyword map in `data/context-map.json`: night or shift, relocate or umzug, driving licence, Teilzeit, remote. No model, no randomness, no inference. A phrase matching nothing is still recorded and shown back as a chip that says so, because claiming to have understood something is worse than saying you did not.

**It has to move the numbers, or it is theatre.** The answers feed a fifth score component, `score_context_fit`, weighted at 0.17, which reads listing fields that exist for the purpose: `requires_shift_work`, `requires_licence`, `contract_type`, `part_time_possible`, `remote_possible`. Unanswered is 0.6 on a constrained listing, because not knowing is not the same as a no; the binding constraint wins, so the component is a minimum rather than an average. Willingness to move raises the floor on city fit from 0.4 to 0.8 instead. A yes to the driving licence closes the licence gap in "What you're missing". Where an answer would do nothing for a profile, it does nothing.

The answers, the notes and the derived facts all go into `profile.json`, and the fifth component into `scored.json` and `shortlist.csv`, so the downloads keep telling the truth about what produced the result.

## Languages

Six interface languages, offered as autonyms — the language written in itself — with the English name beneath: Deutsch, English, Українська, Türkçe, العربية, Español. Strings live in `app/strings.js`, loaded with a plain script tag like the data.

Interface strings only. Listing text, employer names, credential procedures and gap content stay in their source language, because those are real German-language sources and translating them here would be inventing a translation nobody checked. A section whose content stays German still gets a translated heading.

**Not flags.** A flag is a country, not a language: German needs three, Spanish twenty-odd, Arabic more than twenty. The failure mode is not neutral either — a Russian flag shown to a Ukrainian speaker is the worst possible opening for exactly the people this page is for. `showFlags` sits in `strings.js`, default `false`, so the question can be looked at rather than argued about; switched on it renders an emoji, never an image, so nothing loads either way.

**The chooser.** On a first visit, a row of six large targets under the headline, preselected from `navigator.language` on the primary subtag and falling back to English. After a choice it collapses into a compact control in the header, remembered in `localStorage` inside a try/catch, with a "change language" link in the footer as a second route. The greeting under the headline is itself the control: italic, lighter and smaller than the headline, clickable, opening the chooser in place.

**Arabic mirrors completely.** `dir` is set on the root and the CSS uses logical properties throughout, so the header, the table, the right-hand meta column and the scroll-spy underline all turn round together. Arabic renders upright in the greeting: it has no italic form, and a browser faking one by slanting the glyphs reads as broken. Each greeting carries its own `lang` while it is shown, so a screen reader pronounces it correctly. The rotation stops once a language is chosen, because cycling to Ukrainian while the English chip is marked current contradicts the selection.

## The brand

The demo had been wearing the Protocol Institute's colours. It should not: it is a standalone product inside the demo, and the workshop's palette carries meaning it has no business borrowing.

So Sprungbrett has its own, and it is generated rather than chosen. `brand/generate-brand.js` derives a palette, a radius step, a hairline alpha, a motion duration and the wordmark's weight and tracking from one integer seed, deterministically. The seed is picked by a rule written down in `brand/README.md`: the first seed from 1 whose palette passes every contrast pair the app actually uses at WCAG AA. That is **789**, after 788 rejections, 571 of them on white-on-primary alone.

The app reads custom properties from `app/brand.css` and contains no hex value of its own, so reseeding is one command. The seed does not pick the typeface: Inter is already chosen and licensed, and the wordmark is the name set plainly, nothing more. Sprungbrett means springboard, which is the whole idea.

Honest limit, recorded in the brand README: the rule tests contrast and nothing else, and at 789 the supporting hue landed a warm rust rather than the green a "fit" colour is usually expected to be. The fix for that is a hue constraint added to the rule, not a hand-edited value.

## What the programmes are, and are not

"What you're missing" names real programmes, link-checked on 2026-09-22; every row carries its `url`, its `url_status` and the date it was checked.

The rule from step 2 applies to all of it: **never imply one path per profession.** So where an entry is one chamber's course, one Land's procedure, a statute rather than a course, or a private vendor certificate, the row says so in its own words.

- **Engineering has no single recognition procedure.** Sixteen Land acts govern the title *Ingenieur*, working as an engineer is generally unrestricted, and for most employers the practical gap is a ZAB comparability statement plus an anabin lookup rather than a recognition decision. One Land chamber is cited, and reads as an example.
- **Nursing has no national programme.** The authority and the shape of the compensation measure, adaptation course or knowledge examination, are set per Bundesland, which is why those rows point at the Anerkennungs-Finder and the counselling search rather than a named course.
- The §71 SGB XI row is the statute, not a course. The Elektrofachkraft and IHK Externenprüfung rows are each one chamber's page.
- The two AWS certificates are a private vendor signal, listed only because no public body certifies those roles.
- Durations that could not be stood behind were dropped rather than invented, and no fee is recorded anywhere.

## The demo's declared lines

- **Exports:** `shortlist.csv` (schema v1, plus `score_context_fit`), `gaps.csv` (schema v2) and `outreach.csv` (schema v1), plus the four JSON intermediates `profile.json`, `credentials.json`, `archetypes.json` and `scored.json`. Every listing scored, rejects included.
- **Interface:** a static page. Open `app/index.html` in a desktop browser; the exports are file handoffs in the column orders above.
- **Adapts to:** the city, German level and sector. Not the profile: the three profiles are fixtures.

## Invented data

Three files, all marked.

- `profiles.json` — three profiles, described by profession, qualification and years only. No names, no ages, no photos, no identifiable employer history. Origin appears only as "qualified outside the EU", and country never affects a score.
- `listings.json` — about forty listings. Each carries `language_requirement_text` in the phrasing German ads actually use, such as *verhandlungssicher*, *fließend*, *gute Deutschkenntnisse*, or English-only, plus `german_level_mapped`, which is labelled on screen as the demo's own guess rather than a fact, because those terms have no CEFR definition. Openness is two checkable fields, `working_language` and `visa_sponsorship_stated`, instead of a judgement like "immigrant friendly". Every row has `synthetic: true`, and `(fictional)` sits inside the employer string so it survives into the CSV.
- `credential-map.json` — as described above.

Employer names are invented compounds with a legal form. Hand-check that every profile yields at least eight matches after filtering, or cut to two cities.

Every employer string keeps `(fictional)` inside it, on screen and in the CSV. The line that used to sit above the result went with the other disclaimers; the marker inside the string did not, because a job advert that reads as real is the one thing on this page somebody could act on.

## How it is built

A single folder, no build step, no network, opens from a file path.

The trap: a page opened over `file://` cannot `fetch()` its own JSON, and ES modules fail the same way. So the data ships as `data.js` setting `window.DATA`, loaded with a plain script tag, and the `.json` files stay in the repo as the readable source. No module scripts, no CDN fonts, no web fonts at all. No `Math.random` or `Date.now` anywhere in scoring, or the demo stops being repeatable.

```
app/
  index.html
  app.js
  data.js                 window.DATA = { profiles, listings, archetypes, credentialMap }
  build-data.js           node only: regenerates data.js from data/*.json
  data/                   the same data as readable JSON, never fetched
  shortlist.schema.json
  gaps.schema.json
  outreach.schema.json
```

`data.js` is generated, never hand-edited. `node app/build-data.js` rebuilds it from `data/*.json` and is byte-stable, so the readable copy and the loaded copy cannot drift.

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
- **The four fixed warnings were written, then cut.** See "No disclaimers on the page" below: the decision reversed late, and what replaced them is markers in the data rather than copy in the interface.
- **It cannot be built as originally described:** `file://` blocks fetching local JSON, so the data ships as a script.
- **The interface carries none of the workshop's vocabulary.** No factory, kit, bridge, station or intermediate anywhere a visitor can see. The demo has to stand on its own for somebody who has never heard of the workshop, and the framing stays in these documents, where it belongs. Stations became steps; the badges went; the page reads as a product.

Three places the reviews disagreed, and what I chose:

1. **The paste field.** Usability said remove it, since it lies. You asked for the single input to be a LinkedIn profile. It stays, disabled, next to the honesty line, so the real input is visible and nothing pretends.
2. **Card labels.** Usability wanted human labels like "Amina, nurse, Damascus". Feasibility said no invented names and no country, and that country must never touch a score. Cards read by profession, qualification and years.
3. **Grouping the result.** Feasibility wanted listings grouped under archetype headings; usability said grouping hides the flat file the demo is about. Flat table, archetype as secondary text.

## Open

1. Does anyone need to see a station's raw file, or is the key-and-value view enough for everybody?
2. Does the fourth score component, seniority fit, earn its place, or is three enough?
