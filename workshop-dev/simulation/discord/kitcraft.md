# #kitcraft — simulated text channel (dry run 01)

Pins first, then the log. Facilitators `@rafa`, `@sachin`. Triad 1 = @ingrid @devr @marisol · Triad 2 = @tomasr @aiko @kwame (Aiko is async for S2 and S4, 05:00 JST).

---

## PINNED 1 — posted Sun Sep 20, 10:00 UTC by @sachin

**AI Kitcraft 2026 — Kit → Factory → Bridge**

**Repo:** https://github.com/protocolvision/workshop-kitkraft — clone it, open your harness *inside* the clone, work only in your own files (`inventory/<you>.md`, `kits/<you>/`, bridges you are party to), push to `main`. No branches, no PRs.
Private kit? There is no private repo. Keep the content on your own machine and put only a stub `kits/<you>/README.md` (job, inputs, outputs, no content) in the repo; others bridge to it through your agent.

**Rooms:** voice **#kafka** (plenary) · text **#kitcraft** (this channel: links, instructions, triads) · **#kitcraft-transcripts** (live transcript, read-only) · voice **breakout-1**, **breakout-2** (triad rooms).

**Times — UTC / Berlin / Pacific**
• S1 Kits — Mon Sep 21 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• 1A Clinic (optional, setup help) — Mon · 16:30–17:00 / 18:30–19:00 / 09:30–10:00
• S2 Factories — Mon · 20:00–21:00 / 22:00–23:00 / 13:00–14:00
• S3 Bridges — Tue Sep 22 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• S4 Recap — Tue · 20:00–21:00 / 22:00–23:00 / 13:00–14:00

**Consent:** plenary audio in #kafka is recorded and transcribed with speaker names; the live transcript streams to #kitcraft-transcripts and the final transcript goes into the public repo (`transcripts/`). Breakouts are not recorded. Your harness appends log lines to public `LOG.md` files. Ask either facilitator to remove any line or passage of yours, any time. Full notice: next pin. Put nothing in a public kit you would not put on a public website.

**Survey:** AI postures (Robert Peake) — https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 — bring your posture to S1.

**Triads:** posted and pinned here before S2 (Mon evening) and before S3 (Tue, rotated).

**Help:** setup or git → 1A, or ping @sachin here · theory → @C3PO · during a session → post here; whichever of us is not presenting answers in text.

## PINNED 2 — consent notice (full text)

Verbatim from `workshop-dev/simulation/facilitator-materials/consent-notice.md`, posted Sun Sep 20, 10:02 UTC.

## PINNED 3 — Triads for S2 (posted Mon Sep 21, 16:45 UTC)

**Triad 1 → breakout-1:** @ingrid, @devr, @marisol. Critique cycle: ingrid reads devr · devr reads marisol (stub: report what your agent would need) · marisol reads ingrid.
**Triad 2 → breakout-2:** @tomasr, @kwame live; @aiko async. Live: tomasr reads kwame · kwame reads tomasr. Async: when @aiko's kit lands (~00:00 UTC Tue), tomasr's agent reads it and posts the report here; aiko's agent reads kwame's and posts here.
Instructions: `facilitator-materials/breakout-instructions-triads.md` §S2, pasted below at 20:35.

## PINNED 4 — Triads for S3 (posted Tue Sep 22, 09:00 UTC)

Same rooms. Target = the kit you did **not** critique: ingrid → marisol (through Marisol's agent; her kit is a stub) · devr → ingrid · marisol → devr · tomasr → `facilitator/sachin-kit/` (his choice) · aiko → tomasr · kwame → aiko. Anyone may swap to a facilitator target (`facilitator/README.md`). One log per bridge, written by the person bridging: `bridges/<you>-<target>.md`.

---

## Log

### Sun Sep 20

10:00 UTC — @sachin: Welcome to #kitcraft. The pin above has everything: repo, rooms, times in three zones, consent, survey, how to get help. Read it once now.
10:02 UTC — @sachin: Second pin is the full consent notice. Rafa reads the short version aloud at the top of S1. If any of it is a problem, DM me before Monday and we set up a muted or text-only option; you lose nothing.
10:05 UTC — @sachin: Before Monday: (1) clone the repo and open your harness inside the clone; (2) one push, anything — `inventory/<your-name>.md` with just your name is enough; (3) note your survey posture.
10:08 UTC — @sachin: Push check as of now: I see a first commit from @devr, @tomasr, @kwame. @ingrid, @aiko (no harness yet) and @marisol (harness, git untested) — do not fight it: paste or DM me the file and I commit it under your name, and 1A at 16:30 UTC Monday is for exactly this.
10:10 UTC — @sachin: @marisol — you replied "private". Decision: there is no private repo. Keep your content on your machine, put the stub README in `kits/marisol/`, and on Tuesday your triad bridges to it through your agent (request in, result out, both in the bridge log). That is a bridge form in its own right, not a workaround.
10:12 UTC — @sachin: @aiko — S2 (05:00 JST) and S4: everything you need will be in this channel as written instructions; your triad knows you are async. S1 and S3 are 00:30 JST; join if you can.
18:30 UTC — @sachin: @marisol pushed (Codex, first push, no drama). @ingrid @aiko outstanding; 1A is yours.

### Mon Sep 21

08:00 UTC — @sachin: S1 today, 15:30 UTC (17:30 Berlin · 08:30 Pacific · 00:30 Tokyo · 12:30 Buenos Aires · 15:30 Accra · 16:30 Lisbon), voice #kafka. Have open: your harness inside the clone, your three recurring tasks, your posture. Rafa and I split the presenting; I open each session and run this channel, the pins, the recorder and the repo.
08:05 UTC — @sachin: Provisional triads for tonight, drawn from your registration answers (role + the task you named). Triad 1: @ingrid @devr @marisol. Triad 2: @tomasr @aiko @kwame. Confirmed or reshuffled at the end of S1 once inventories exist.
08:10 UTC — @sachin: S2 is *tonight*, 20:00 UTC, not tomorrow — the repo README's session table still says Tuesday; the pin is right. Between S1 and S2 you have about 3 hours; the only task is to pick one inventory item and draft `kits/<you>/README.md` in two paragraphs (copy `KIT_TEMPLATE/`).
09:00 UTC — @sachin: @kwame, @marisol — Codex users: your harness reads `AGENTS.md`, not `CLAUDE.md`; same instructions, nothing to do. Just make sure Codex is opened *inside* the clone, or the log will not fire.
14:30 UTC — @sachin: One hour. Rafa opens #kafka at 15:25 UTC. I start the recorder at 15:30 sharp and post "recording on" here.
15:20 UTC — @sachin: In #kafka. Post questions here during the session; I answer in text so the room is not interrupted. If your harness cannot push during the exercise, paste the file here.
15:30 UTC — @sachin: Recording on (KITCRAFT-S1). Live transcript in #kitcraft-transcripts.
