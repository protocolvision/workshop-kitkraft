# Observations — dry run 01

Append-only. One line per gap, guess, rule break or surprise. Severity: **S1** would break the session · **S2** would cost >10 min or confuse people · **S3** cosmetic / nice-to-have.

| # | When | Who | Sev | What | Proposed fix |
|---|---|---|---|---|---|
| 1 | setup | meta | S2 | Outline v7 plans S1 at 90 min; the Symposium slot is 60 min. Ice-breaker 15 + situating 15 + theory 20 + exercise 30 + close 5 = 85 does not fit. | Cut: ice-breaker to 8 (posture + one word), situating to 10, theory to 12, exercise stays 25, close 5 = 60. |
| 2 | setup | meta | S2 | Outline assumes S2 on Tuesday morning; the schedule puts S2 Monday 20:00 UTC. Async 1 shrinks from overnight to ~3 h. Async 2 becomes overnight. | Move the README draft (Async 1) into the S1 exercise tail; make the v2 fix (Async 2) the overnight task. |
| 3 | setup | meta | S3 | Outline designs for 10–15 in pairs and 5–7 rooms; rehearsal is 6 in two triads, two rooms. Pair critique and S3 rotation need triad versions. | Triad critique: A reads B, B reads C, C reads A. S3: rotate one step so nobody bridges to the kit they critiqued. |
| 4 | setup | meta | S1 | No participant has write access yet (only the admin). Invites are the Sep 15 checklist item. | Send collaborator invites (Write role) as registrations arrive, not on one day. |
| 5 | setup | meta | S1 | No branch protection or ruleset on `main`; a force-push from any harness deletes everyone's work. | Ruleset: block force pushes and deletions on `main`; keep direct pushes allowed. |
| 6 | setup | meta | S2 | `AGENTS.md` push rule has no retry and does not say to commit before `pull --rebase` (which fails on uncommitted changes). | "Commit → pull --rebase → push; if rejected, repeat pull and push." |
| 7 | setup | meta | S2 | One `bridges/<a>-<b>.md` per pair, edited by two harnesses at once, appending to the same end-of-file section = rebase conflict. | One log per person: `bridges/<pair>/<name>.md`, or a named sole writer. |
| 8 | setup | meta | S2 | Fallback "portal upload form" is referenced in the outline and README; no portal exists. | Replace with "paste in #kitcraft, facilitator commits" or build the form. |
| 9 | setup | meta | S1 | The simulation branch was created locally and the facilitator agents were told to clone it before it had been pushed; both clones failed. The same mistake on the real day (repo private, invite not accepted, branch missing) blocks everyone at minute 0. | Keep the Sep 17 dry-run item: a facilitator clones from a FRESH machine/account before sending the pre-work email. |
