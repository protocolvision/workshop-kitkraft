# Sprungbrett — factory demo

Source: `participants/geraldinehackmayer/s2-factory/sprungbrett-spec.md` (Geraldine Hackmayer, 2026-09-22), adapted.

Job: show one factory running end to end, on invented data, in two minutes.
For: a room watching Session 2, and anyone who reads the repo afterwards.
Inputs: one of three invented profiles, plus a city, a German level and a sector.
Outputs: a shortlist on screen, and `shortlist.csv` with every listing scored.

Exports: `shortlist.csv`, schema v1, rejects included, score kept in four separate components.
Interface: a static page. Open `app/index.html` in a desktop browser. The export is a file handoff in the column order printed on the page and fixed in `app/shortlist.schema.json`.
Adapts to: the city, German level and sector on the card, which re-run the scoring while you watch. Not the profile: the three profiles are fixtures, and the page says so.

**This is a demo of a factory, not a factory.** Nobody can hand it to their assistant and get their own shortlist. The first three steps are judgement written down in advance and looked up; only the scoring runs live. The page states both.

Example run: see `spec_rafa_v2.md`, section "The result".
Not for: real job seeking. Every listing and employer here is invented. Nothing on the page is a real opening, and station 2 is not recognition advice — free official counselling is at anerkennung-in-deutschland.de.

- `spec_rafa_v2.md` — what it does, how it is built, and what three critiques changed.
- `app/` — the page itself.
