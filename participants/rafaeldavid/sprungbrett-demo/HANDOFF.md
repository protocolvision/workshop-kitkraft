# Handoff — Sprungbrett demo

A one-page demo that shows which roles an internationally qualified person already reaches, what
stands between them and the rest, and who to approach. Static, opens from a file, no build step,
no network. Everything in it is invented except the recognition programmes, the typefaces and the
banner. Give the block below to your assistant; read the two sections after it yourself.

```text
ROLE
You are picking up a finished static demo you did not build. Nothing here needs a framework, a
server or a package install. Your job is to read the four documents named below before changing
anything, then make the change the person asked for without undoing a decision that was made on
purpose. Most of what looks arbitrary in this project is not.

SETTINGS
  repo_dir      ~/Documents/protocolvision/workshop-kitkraft
  project_dir   participants/rafaeldavid/sprungbrett-demo
  app_dir       participants/rafaeldavid/sprungbrett-demo/app
  entry         app/index.html                 open from a file path, not a server
  gate          node app/preflight.js          must exit 0 before any commit and any publish
  data_build    node app/build-data.js         regenerates app/data.js from app/data/*.json
  brand_build   node brand/generate-brand.js <seed>
  live_slug     crisp-mantra-pfgf              linked at npc.here.now/workshopgigidemo
  publish_cmd   bash ~/.claude/skills/here-now/scripts/publish.sh app --slug crisp-mantra-pfgf --client claude-code
  branch        sprungbrett/app

PRECONDITIONS
  1. node is on PATH. Nothing else is required: no npm install, no build tool, no server.
  2. You are in project_dir. All commands below are relative to it.
  3. `node app/preflight.js` exits 0 on a clean checkout. If it does not, stop and report that
     first — the tree was already broken before you touched it.
  4. Publishing needs Rafa's here.now credentials. If you are not Rafa, expect publish to fail
     and do not try to work around it. Commit and push; let him publish.

STEPS
  1. Read, in this order, and do not skip to the code:
       spec_rafa_v2.md     what the thing is, and the reasoning behind each part
       BUILD-LOG.md        why it looks like this; append-only, newest row last
       app/README.md       how to run it and what is generated vs hand-written
       brand/README.md     the palette, the seed, and the rule that chose the seed
       app/fonts/README.md and app/CREDITS.md   what is licensed, and where it came from
  2. Open app/index.html from a file path to see the current state. There is no server and no
     build step. The page makes zero network requests; that is a hard constraint, not a habit.
  3. Make the change.
       - Content or data: edit app/data/*.json, then run `node app/build-data.js`.
       - Interface strings: app/strings.js, all six languages. Never hard-code a user-visible
         string in app.js.
       - Layout or styling: app/index.html. Colour, radius and motion come from custom
         properties defined in app/brand.css; use the tokens, never a hex value.
       - Palette: change the seed and run brand_build. Do not hand-edit the output.
  4. Run the gate: `node app/preflight.js`. It must print "all checks passed" and exit 0.
  5. Verify by behaviour, not by the absence of errors. Load app/index.html and click the whole
     flow: choose a language, Continue with LinkedIn, pick a demo account, Find roles, answer a
     Tell us more question, download a CSV, switch to Arabic and back. A page that renders is
     not evidence that it works.
  6. Commit on branch sprungbrett/app. Append one row to BUILD-LOG.md describing what you
     changed and why.
  7. Do not publish unless you are Rafa and he has asked for it. If you do publish, re-run the
     gate first, then load the live URL itself and click the flow through on it.

IF SOMETHING FAILS
  - preflight fails on a dangling id: an element id referenced from app.js, or an
    aria-controls / for / aria-labelledby / href anchor in index.html, points at something that
    does not exist. The output names the file, the line and the id. Fix the reference; do not
    delete the check.
  - preflight fails on data.js drift: someone edited app/data.js by hand. Re-run build_data and
    re-apply the change to app/data/*.json instead.
  - The page renders but a section is empty: open the console. A missing element logs
    "sprungbrett: missing element #<id>" and that section is skipped rather than the page dying.
    Run the gate; it will name the same id.
  - A download does nothing: the page is probably on http and the browser blocked it, or the
    clipboard was unavailable. Both have a visible fallback; check the status line under the
    download buttons before assuming it is broken.
  - Publish is refused: you do not have the credentials. Stop; do not create a second site.

DO NOT
  1. Do not invent people. The outreach output names roles and kinds of organisation only —
     never a person, a named individual, a job title attached to a human, or contact details.
  2. Do not add a LinkedIn logo, LinkedIn colours, or anything imitating their sign-in screen,
     and never add a field that asks for an email or a password. The sign-in is a mock whose
     chooser says "Choose a demo account" so it cannot be mistaken for a real connection. That
     heading stays.
  3. Do not put names, ages or countries into the profiles. Origin appears only as "qualified
     outside the EU", and country must never affect a score.
  4. Do not state a verdict on whether a qualification is equivalent. The competent authority
     varies by Bundesland; engineering is governed by sixteen separate Land acts and the title
     alone, not the work; nursing has no national programme. Where an entry is one chamber's
     course, one Land's procedure, a statute or a private vendor certificate, the row says so.
     Any programme link you add must be fetched and checked before it goes in, and carry its
     url_status and the date checked.
  5. Do not remove the line above the results — "Invented listings at invented employers.
     Nothing here is a real opening." It is there because the page is on a public URL. If the
     URL comes down, whether it stays is a fresh decision, not an automatic revert.
  6. Do not edit app/data.js or app/brand.css by hand. Both are generated. The brand one comes
     from a seed chosen by a written rule; hand-editing it silently breaks the rule.
  7. Do not reword a BUILD-LOG row to make it read better. The file is append-only. If a row is
     wrong, add a row saying so — row 19 is an example of exactly that.
  8. Do not add Open Graph or Twitter card tags. They were left out deliberately.
  9. Do not remove preflight.js or check-ids.js, and do not make the gate advisory.

REPORT BACK
  - What you changed, and which file each change is in.
  - The preflight output, verbatim.
  - Which parts of the flow you clicked through yourself, and at what width.
  - Anything you decided not to do because a DO NOT covered it.
  - Anything you could not make work, said plainly rather than left implied.
```

## How this build failed, so you do not repeat it

Three separate times, a rename or a removal left a reference behind and the page went inert —
not degraded, inert, because the throw happened during boot before any listener was attached.
`stepDefinitions` was deleted by an edit that replaced the block around it. `fitFor` was renamed
at the call site while the replacement of the function body silently failed to apply. The
greeting's `aria-controls` kept pointing at `lang-strip` after the strip was replaced by a menu.

All three are the same mistake, and all three would have been caught in under a second by
cross-referencing the ids. That is what `app/check-ids.js` does and why `app/preflight.js` runs
it as a gate. `window.onerror` is no help here: on this page it reports a bare `Script error`
with no file or line. The real stack comes from the protocol-level exception event.

The verification failed too, and that was worse than the bugs. A test driver that did not check
for exceptions reported a clean pass on a page that did not boot, because an evaluate that threw
returned `undefined` and got printed as a result. A second assertion was made seconds after
publishing, against a set of files that were still half-updated, so it was measuring neither the
old build nor the new one.

Three rules came out of it, and they are the most useful thing in this document:

1. **Verify behaviour, not the absence of console output.** Click the flow. "It loaded" is not
   a result.
2. **Confirm the bytes you are testing are the bytes you built.** After publishing, checksum the
   served files against the local ones before asserting anything about the live site.
3. **Never report something working without loading the artefact you actually shipped.**

## Open items

Nobody should read this project as finished.

- **Translations.** The Ukrainian, Turkish and Arabic versions of the "Invented listings" notice
  need a native reader. German and Spanish are sound. This matters more than the other items:
  it is the one sentence on the page that protects a stranger from taking an invented vacancy
  seriously, and it currently reaches three audiences in a wording nobody has checked.
- **The greeting keeps rotating when the language was detected rather than chosen.** The
  rotation stops once somebody picks a language, but a first visit preselects from
  `navigator.language` and the header label shows that preselection while the greeting cycles
  through all six. The label and the animation disagree. Decide which one is telling the truth.
- **Landscape phones get the desktop table.** The breakpoint is width-based, so a phone at
  812x375 is treated as a desktop. It does not overflow and it is legible, but a short viewport
  might be better served by the card layout. Rafa's call; it needs a height-aware query, not a
  width one.
- **here.now injects its own Open Graph and Twitter card tags** into the served `index.html`,
  even though we deliberately left them out. The rest of the served file matches ours byte for
  byte. Not ours to fix, but know it before you go looking for who added them.
