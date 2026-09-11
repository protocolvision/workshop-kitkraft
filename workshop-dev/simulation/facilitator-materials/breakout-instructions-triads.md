# Breakout instructions — triads (paste into #kitcraft before each breakout)

Rewritten from `workshop-dev/breakout-instructions.md` (pairs) for two triads and 60-minute slots. Cycle in a triad: **A reads B, B reads C, C reads A**; in S3 the cycle is rotated one step so you bridge to the kit you did not critique. Rooms: breakout-1 (triad 1), breakout-2 (triad 2). Sachin moves people at the minute stated and posts "rooms open" here. A facilitator drops into each room once; the text below is the facilitator the rest of the time.

---

## S2 — triad critique (13 min, 20:35–20:48 UTC)

**Triad 1 → breakout-1:** ingrid reads devr · devr reads marisol · marisol reads ingrid
**Triad 2 → breakout-2:** tomasr reads kwame · kwame reads tomasr (aiko async, see below)

1. **(0:00)** Everyone pushes what they have, even if unfinished: "commit and push my kit". Then `git pull --rebase` so you have the others' kits.
2. **(0:01)** Ask your agent, exactly: *"Read `kits/<target>/README.md` and `SKILL.md` cold. Run the example in `kits/<target>/examples/`. Report, in five lines or fewer, where you were uncertain, what you had to assume, and where you failed."* Do not explain the kit to your agent. Do not explain it to the owner yet.
   - If the target is a stub (marisol): ask instead *"From this README alone, what would you need from the owner to run this job? List it."*
3. **(0:06)** Read your agent's report aloud to the owner. Owner asks their own agent: *"Append each of these as a `blocker` line in my `kits/<me>/LOG.md`."* Three reports, two minutes each, in cycle order.
4. **(0:12)** Each person writes one sentence for the plenary: *what the other agent got wrong about my kit.* Keep it; Rafa asks for it at 20:48.
5. **(0:13)** Push. Back to #kafka when Sachin posts "reconvene".

**If a member is absent** (aiko in triad 2): the two present read each other. The absent member's kit is read as soon as it lands: the reader posts the agent's report in #kitcraft tagged to the owner; the owner appends the `blocker` lines when online. The absent member reads the kit of the person who read theirs (aiko reads kwame) and posts the report here. Same words, same limits.

**Rules:** the reading agent gets only what is in the repo. No screen share of your kit. Nothing the owner says out loud counts until it is in the kit.

---

## S3 — bridge (40 min, 15:45–16:25 UTC)

**Triad 1:** ingrid → marisol (stub; goes through Marisol's agent) · devr → ingrid · marisol → devr
**Triad 2:** tomasr → `facilitator/sachin-kit/` · aiko → tomasr · kwame → aiko
Anyone may switch to a facilitator target in `facilitator/README.md`. Say so in your log.

1. **(0:00)** Copy `bridges/TEMPLATE.md` to `bridges/<you>-<target>.md`. **You are the only writer of that file.** Fill the header now: target, interface (file handoff for every kit in this repo).
2. **(0:02)** Decide one thing your kit cannot do alone that the target kit can. Say it out loud to the triad in one sentence; put it in the log under "What my agent needed".
3. **(0:04)** Ask your agent: *"Using `kits/<target>/` (read README then SKILL.md), do <the one thing>. Log every step in `bridges/<you>-<target>.md`. If you need something that is not in the repo, stop and tell me what it is."*
4. When it stops: get the missing thing from the owner **in the room** (they are next to you; that is the point of a triad), give it to your agent, and have it log one `unblock` line. Continue. Repeat.
   - **Stub target (ingrid → marisol):** Ingrid's agent writes a request (input + what it wants back) under `## Request` in `bridges/ingrid-marisol.md` and pushes. Marisol pulls, runs her private kit locally on the request, and her agent appends the output under `## Response` in the same file, then pushes. This is the transmittal pattern; the bridge log records both halves. Ingrid pushes before Marisol touches the file; Marisol pushes before Ingrid touches it again.
5. **(0:30)** Stop building. Fill "Did it work" and "What a bridge turned out to be" in one paragraph each. Speak it to your triad first, then write it.
6. **(0:38)** Push. Reconvene when Sachin posts.

**Rules:** agent → repo → agent. Humans talk only to unblock, and every unblock is one logged line. Do not paste your kit into the other person's agent. Do not edit anyone else's kit or bridge file.

**Hard mode (optional, before S4):** rerun the bridge with no human chat at all; if it stops, the answer must be put into the repo (target kit or your own), never said aloud. Log it as a second section in the same file.
