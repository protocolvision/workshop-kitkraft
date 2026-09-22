# Sprungbrett — factory demo

Source: `participants/geraldinehackmayer/s2-factory/sprungbrett-spec.md` (Geraldine Hackmayer, 2026-09-22), adapted.

Job: show one factory running end to end, on invented data, in two minutes.
For: a room watching Session 2, and anyone who reads the repo afterwards.
Inputs: one of three invented profiles, plus a city, a German level, other languages and a target sector.
Outputs: a roles table, a gaps panel and an outreach list on screen, and three CSVs with every listing scored.

Exports: `shortlist.csv`, `gaps.csv` and `outreach.csv`, all schema v1, plus the four JSON intermediates `profile.json`, `credentials.json`, `archetypes.json` and `scored.json`. Rejects included, score kept in four separate components.
Interface: a static page. Open `app/index.html` in a desktop browser. The exports are file handoffs in the column orders printed on the page and fixed in `app/shortlist.schema.json`, `app/gaps.schema.json` and `app/outreach.schema.json`.
Adapts to: the city, German level, languages and sector, which re-run the scoring while you watch. Not the profile: the three profiles are fixtures.

**This is a demo of a factory, not a factory.** Nobody can hand it to their assistant and get their own shortlist. The first three of the six steps are judgement written down in advance and looked up; steps 4 to 6 run live. The page itself carries none of this vocabulary, by decision — see "No disclaimers on the page" and the last bullet of "What the critiques changed" in the spec.

Example run: see `spec_rafa_v2.md`, section "The result".
Not for: real job seeking. Every listing and employer here is invented, and every employer string carries `(fictional)`. Nothing on the page is a real opening, and step 2 is not recognition advice — free official counselling is at anerkennung-in-deutschland.de. The sign-in is a mock chooser of demo accounts: no branding, no credentials, nothing fetched.

- `spec_rafa_v2.md` — what it does, how it is built, and what three critiques changed.
- `app/` — the page itself.
