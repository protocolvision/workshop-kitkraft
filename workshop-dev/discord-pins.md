# Pinned messages — #kitcraft

Four pins (Discord caps a message at 2000 characters): the main pin, the consent notice, the S2 triads, the S3 triads. Sachin posts pins 1–2 on Sun Sep 20, pin 3 at S1 close (Mon 16:45 UTC), pin 4 on Tue at 09:00 UTC. Every block is a file in `instructions/`; pins carry the path, never the block. Rooms: breakout-1 … breakout-5 (one per triad or pair).

## PIN 1 — main (Sun Sep 20, 10:00 UTC)

**AI Kitcraft 2026 — Kit → Factory → Bridge**

**Repo:** https://github.com/protocolvision/workshop-kitkraft — clone it, copy `PARTICIPANT_TEMPLATE/` to `participants/<you>/`, open your harness at the clone root (the folder with `AGENTS.md`), paste `instructions/orient.md` into it and say "do this". It checks your setup and makes your first push (or reports "already done" if the pre-work email did it). Every later instruction is a file in `instructions/` you paste the same way. Everything goes straight to `main`: no branches, no PRs.
No harness or no GitHub account? `instructions/no-harness.md`: write the file by hand, paste it here, a facilitator commits it under your name.
Private kit? There is no private repo. Keep the content on your own machine and put only a stub `participants/<you>/kit/README.md` (job, inputs, outputs, no content) in the repo; others bridge to it through your agent.

**Rooms:** voice **#kafka** (plenary) · text **#kitcraft** (this channel: links, instructions, triads) · **#kitcraft-transcripts** (live transcript, read-only) · voice **breakout-1 … breakout-5** (triad rooms).

**Times — UTC / Berlin / Pacific**
• S1 Kits — Mon Sep 21 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• 1A Clinic (optional, setup help) — Mon · 16:30–17:00 / 18:30–19:00 / 09:30–10:00
• S2 Factories — Mon · 20:00–21:00 / 22:00–23:00 / 13:00–14:00
• S3 Bridges — Tue Sep 22 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• S4 Recap — Tue · 20:00–21:00 / 22:00–23:00 / 13:00–14:00
Your local time: https://www.timeanddate.com/worldclock/fixedtime.html?iso=20260921T1530

**Consent:** #kafka audio is recorded, transcribed with speaker names, streamed to #kitcraft-transcripts and kept in the public repo. Breakouts and 1A are not recorded. Your harness writes log lines to public files. Ask either facilitator to remove any line of yours, any time. Full notice: next pin.

**Survey:** AI postures (Robert Peake) — https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 — bring your posture to S1.

**Triads:** pinned here before S2 (Mon 16:45 UTC) and S3 (Tue 09:00 UTC, rotated), each with the file to paste.

**Recorder:** every start and stop is announced here as `Recording on (KITCRAFT-S<n>)` / `Recording off`.

**Help:** setup or git → 1A, or ping @sachin here · theory → @C3PO · during a session → post here; whichever of us is not presenting answers in text.

## PIN 2 — consent notice (Sun Sep 20, 10:02 UTC)

Verbatim: the "Full notice" section of `workshop-dev/sessions/consent-notice.md`.

## PIN 3 — triads for S2 (Mon Sep 21, 16:45 UTC)

**Triads for tonight, confirmed from the inventories.** Critique ring inside each triad: A reads B, B reads C, C reads A. A pair reads each other.
<triads: one line per group — **Triad 1 → breakout-1:** @a, @b, @c. a reads b · b reads c · c reads a. Mark stubs: "(stub: report what your agent would need)". Mark anyone absent: "@x async — see the block's ABSENT variant".>
At 20:35 paste `instructions/S2-critique.md` into your harness with your <name> and <target>; say "do this". It pushes your factory, uses the target through its declared interface (README + SKILL.md, example run cold), gives you a 5-line report on where the interface was insufficient to read aloud, then logs the blockers about your own kit when you say "log mine".

## PIN 4 — triads for S3 (Tue Sep 22, 09:00 UTC)

Same rooms. Target = the kit you did **not** critique (the S2 ring reversed: A → C, B → A, C → B). Pairs: both bridge to a facilitator kit.
<triads: one line per group — **Triad 1 → breakout-1:** a → c's kit · b → a's kit · c → b's kit. Stub targets: "(through <owner>'s agent; both of you also use the blocks in `instructions/S3-bridge.md`)".>
Anyone may swap to a facilitator target (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`); say so in your log. One log per bridge, written by the person bridging: `participants/<you>/bridges/<target>.md`. At 15:45 paste `instructions/S3-bridge.md` into your harness with your <name> and <target>; say "do this". Hypothesis for tomorrow, stated at 15:43: *a bridge is a protocol between two factories — the smallest thing both sides agree not to change.*

## Pre-written posts (not pinned)

**Mon 16:32 UTC, after S1 — Async 1:** Recording off. **Async 1, before 20:00 UTC:** open your harness at the clone root, paste the whole of `instructions/async-1.md`, say "do this". It asks which kit you will convert into a factory tonight — your own (`## Kit` task or `## Built / use` item) or a facilitator kit (`facilitator/rafa/kit/`, `facilitator/sachin/kit/`) — and drafts the README's Job and Interface lines. Then rewrite the Job line by hand. That is all. S2 at 20:00 UTC; triads pinned above. 1A now in #kafka for anyone whose push did not work.

**Mon 20:58 UTC, after S2 — Async 2:** Recording off. **Async 2, before 15:30 UTC Tuesday:** paste `instructions/async-2.md` into your harness, say "do this". It reads the blocker lines your triad logged, proposes one fix per blocker, waits for your "go", pushes v2. Async readers: push your factory first (`instructions/S2-factory.md` block); your reader's harness posts the report here; run async-2 when it appears. S3 triads pinned at 09:00 UTC.

**Tue 16:29 UTC, after S3 — Async 3:** Recording off. Finish your bridge log and push by 20:00 UTC. Optional hard mode: rerun the bridge with no human chat and log it as a second section in the same file. S4 at 20:00 UTC: 90 seconds per bridge, then the room's definition against the hypothesis.
