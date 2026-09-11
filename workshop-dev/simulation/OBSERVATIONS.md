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

## Checkpoint 1 — after prep (2026-09-11)

Facilitator observations: 33 rows in `observations/rafa.md`, 29 in `observations/sachin.md`. Counting the 9 above, **71 findings before a single participant has done anything.** Grouped:

**Would break a session (S1):** no `git push` authentication path for beginners (rafa 5); `workshop-kitkraft-private` promised in the sent email and pinned, does not exist (rafa 6, sachin 23); README/outline say S1 = 90 min and S2 = Tuesday (rafa 10–11, sachin 3); `AGENTS.md` forbids the co-facilitator's own work in `facilitator/`, `transcripts/`, `bridges/SYNTHESIS.md` (sachin 2, rafa 30); recorder: no `/stop` before breakouts, same-name re-record unknown, 25 silent minutes in S1 (sachin 12, rafa 22); no facilitator kit folders existed as bridge targets (rafa 14, sachin 19); briefing agents before the branch existed (rafa 1–3, sachin 1).

**Decisions only Rafa can make (asked at this checkpoint):** lead per session (rafa 12, sachin 28); private repo: create or drop (rafa 6, sachin 23); after-Tuesday disposition for the consent notice (rafa 19, sachin 16); awareness-grid axes (rafa 18); registry schema for `rafa-kit` (rafa 25).

**Decided by the facilitator agents, recorded as assumptions:** 1A not recorded (sachin 29); Async 1 = the 3-hour gap, README only (sachin 21); explicit `/stop` before every breakout and a facilitator speaks every ≤15 min (sachin 12); provisional triads from the form, confirmed at S1 close (sachin 7); stub kit goes to the strongest reader, transmittal procedure for bridging to a stub (sachin 8–9); triad absence rule (sachin 10); one bridge log per bridger, single writer (sachin 11, rafa 16); hypothesis decision rule (sachin 26); synthesis in two versions (sachin 13); `Interface:` line added to kit READMEs (sachin 25).

**Rehearsal-only rule (meta):** participant agents treat `simulation/dry-run-01` as `main`; every reference to `main` in `AGENTS.md`/pins means this branch for the dry run (rafa 20). Both facilitator agents push as one GitHub account; authorship lives in the commit author field (sachin 27).

### Decisions from Rafa at checkpoint 1 (2026-09-11)
1. **Lead roles:** Sachin does the opener; sections are split by expertise (Sachin: kit-phase thesis, precommodification, protocol fiction / Jamverse, historical analogies; Rafa: CMM mapping, kit standard, traces, logistics, water registry). A per-slide presenter column goes into every run-of-show.
2. **Private repo: dropped.** No `workshop-kitkraft-private`. Private content stays on the participant's machine; a stub README goes public; bridges to a stub run through the owner's agent. Every reference to the private repo is removed from participant-facing text.
3. **After Tuesday:** repo stays public; synthesis posted in Discord within 48 h; nothing else. Consent notice says exactly that.
4. **Awareness-grid axes confirmed:** External/Internal × Archive/Live. Remove the "assumed" flag.
5. **Agent-actionable everything (added by Rafa after checkpoint 1):** every participant-facing artifact, the pre-work email included, is written so the participant can hand it to their harness and say "do this". Standard: ≤5-line human header + a fenced agent block (role line, preconditions, numbered steps with exact commands and paths, expected artifact per step, failure handling, do-nots, report-back). The rehearsal tests this directly: participant agents receive materials only through this path.
