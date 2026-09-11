# #kitcraft — simulated text channel (dry run 01)

Pins first, then the log. Facilitators `@rafa`, `@sachin`. Triad 1 = @ingrid @devr @marisol · Triad 2 = @tomasr @aiko @kwame (Aiko is async for S2 and S4, 05:00 JST).

---

## PINNED 1 — posted Sun Sep 20, 10:00 UTC by @sachin

**AI Kitcraft 2026 — Kit → Factory → Bridge**

**Repo:** https://github.com/protocolvision/workshop-kitkraft — clone it, open your harness *inside* the clone, paste `instructions/orient.md` into it and say "do this". It checks your setup and makes your first push. Every later instruction is a file in `instructions/` you paste the same way.
Private kit? There is no private repo. Keep the content on your own machine and put only a stub `kits/<you>/README.md` (job, inputs, outputs, no content) in the repo; others bridge to it through your agent.

**Rooms:** voice **#kafka** (plenary) · text **#kitcraft** (this channel: links, instructions, triads) · **#kitcraft-transcripts** (live transcript, read-only) · voice **breakout-1**, **breakout-2** (triad rooms).

**Times — UTC / Berlin / Pacific**
• S1 Kits — Mon Sep 21 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• 1A Clinic (optional, setup help) — Mon · 16:30–17:00 / 18:30–19:00 / 09:30–10:00
• S2 Factories — Mon · 20:00–21:00 / 22:00–23:00 / 13:00–14:00
• S3 Bridges — Tue Sep 22 · 15:30–16:30 / 17:30–18:30 / 08:30–09:30
• S4 Recap — Tue · 20:00–21:00 / 22:00–23:00 / 13:00–14:00

**Consent:** #kafka audio is recorded, transcribed with speaker names, streamed to #kitcraft-transcripts and kept in the public repo. Breakouts and 1A are not recorded. Your harness writes log lines to public files. Ask either facilitator to remove any line of yours, any time. Full notice: next pin.

**Survey:** AI postures (Robert Peake) — https://www.robertpeake.com/ai/partnership-survey?gid=f416e3efe843 — bring your posture to S1.

**Triads:** pinned here before S2 (Mon evening) and S3 (Tue, rotated), each with the file to paste.

**Help:** setup or git → 1A, or ping @sachin here · theory → @C3PO · during a session → post here; whichever of us is not presenting answers in text.

## PINNED 2 — consent notice (full text)

Verbatim from `workshop-dev/simulation/facilitator-materials/consent-notice.md`, posted Sun Sep 20, 10:02 UTC.

## PINNED 3 — Triads for S2 (posted Mon Sep 21, 16:45 UTC)

**Triad 1 → breakout-1:** @ingrid, @devr, @marisol. Critique cycle: ingrid reads devr · devr reads marisol (stub: report what your agent would need) · marisol reads ingrid.
**Triad 2 → breakout-2:** @tomasr, @kwame live; @aiko async. Live: tomasr reads kwame · kwame reads tomasr. Async: when @aiko's kit lands (~00:00 UTC Tue), tomasr's agent reads it and posts the report here; aiko's agent reads kwame's and posts here.
At 20:35 paste `instructions/S2-critique.md` into your harness with your <name> and <target>; say "do this".

## PINNED 4 — Triads for S3 (posted Tue Sep 22, 09:00 UTC)

Same rooms. Target = the kit you did **not** critique: ingrid → marisol (through Marisol's agent; her kit is a stub) · devr → ingrid · marisol → devr · tomasr → `facilitator/sachin-kit/` (his choice) · aiko → tomasr · kwame → aiko. Anyone may swap to a facilitator target (`facilitator/README.md`). One log per bridge, written by the person bridging: `bridges/<you>-<target>.md`. At 15:45 paste `instructions/S3-bridge.md` into your harness with your <name> and <target>. Stub target (ingrid → marisol): both of you also use the blocks in `bridges/README.md`.

---

## Log

### Sun Sep 20

10:00 UTC — @sachin: Welcome to #kitcraft. The pin above has everything: repo, rooms, times in three zones, consent, survey, how to get help. Read it once now.
10:02 UTC — @sachin: Second pin is the full consent notice. Rafa reads the short version aloud at the top of S1. If any of it is a problem, DM me before Monday and we set up a muted or text-only option; you lose nothing.
10:05 UTC — @sachin: Before Monday: (1) clone the repo and open your harness inside the clone; (2) paste `instructions/orient.md` into it and say "do this" — it checks the setup and makes your first push; (3) note your survey posture. If step 2 stops, paste what it said here.
10:08 UTC — @sachin: Push check as of now: I see a first commit from @devr, @tomasr, @kwame. @ingrid, @aiko (no harness yet) and @marisol (harness, git untested) — do not fight it: paste or DM me the file and I commit it under your name, and 1A at 16:30 UTC Monday is for exactly this.
10:10 UTC — @sachin: @marisol — you replied "private". Decision: there is no private repo. Keep your content on your machine, put the stub README in `kits/marisol/`, and on Tuesday your triad bridges to it through your agent (request in, result out, both in the bridge log). That is a bridge form in its own right, not a workaround.
10:12 UTC — @sachin: @aiko — S2 (05:00 JST) and S4: everything you need will be in this channel as written instructions; your triad knows you are async. S1 and S3 are 00:30 JST; join if you can.
11:42 UTC — @ingrid: Hello, and sorry to be one of the outstanding ones. Short version: my work laptop is managed and IT cannot install anything before the workshop, so I have no harness there. Yesterday I got Claude Code onto a personal laptop (I had to make a Claude account and pay for it, which the email did not mention; I have only ever had ChatGPT). This morning I opened it and pasted Block A from the email. It stopped at the preconditions: `git --version` first made a macOS window appear asking to install "command line developer tools", which I accepted and which took about half an hour; then `gh --version` said `zsh: command not found: gh`, and the fix it tried, `brew install gh`, said `zsh: command not found: brew`. It then told me to install Homebrew from a website with a long command that asks for my Mac password, and I did not feel comfortable doing that on my own, so I stopped, as the email says to. I have not cloned anything yet, so I do not have the folder either. I will come to 1A at 16:30 tomorrow.
11:44 UTC — @ingrid: As you said to paste the file, here is what I have. I wrote it in Word following Block A step 5, so I apologise if the format is not right. I also tried to type it into the website on Thursday but the inventory page says not to write the file in a browser, so I did not save it there.
```
# ingrid

## Recurring tasks
1. Quarterly funder report: assemble 6–10 project updates into each funder's template, with numbers reconciled to the finance sheet. Recurring: yes. Depends on something I know that a stranger would not: yes (which numbers each funder checks, which phrases each programme officer dislikes).
2. Board pack narrative from the impact dashboard. Recurring: yes. Depends on something I know: partly.
3. Budget justifications for grant applications. Recurring: irregular. Depends on something I know: yes.

## Log
2026-09-20T11:40:00Z | async | ingrid | progress | pre-work stub written by hand in Word, no harness; pasted to #kitcraft for Sachin
```
11:47 UTC — @ingrid: Two questions, sorry if they are obvious. (1) The email says BRANCH=main and then "(dry run only: simulation/dry-run-01)"; the website shows me "main", so which one is mine? (2) The documents I would actually use for the funder report are on the work laptop, and Claude Code is on the personal one. Is that a problem for Tuesday, or can I copy a couple of anonymised files across? I will also DM you the file in case this channel was the wrong place for it.
14:20 UTC — @tomasr: Hola everyone, Tomás here, writing from a grey Sunday in Buenos Aires. Confession first: I installed Claude Code the week before last and had run exactly three commands in it, so on Thursday I did the lazy thing and pasted Rafa's entire email in — not Block A, the whole email, timetable and signature and all — and typed "do everything in this". It cloned, wrote something into inventory/tomasr.md and pushed; @sachin, that is the commit you are seeing. I have not actually opened the file yet, which I suspect is the entire subject of this workshop. The Summer of Protocols piece on LLMs pre-commodifying ideas has been sitting on my desk since spring, and the thing I most want out of these two days is to stop losing track of which claim in an essay came from which source, and which of those sources I have honestly read rather than skimmed. As Borges said of his own library, the books one has not read are the ones that speak loudest. Survey still to do; will bring the posture Monday. Very glad to be in a triad with @aiko and @kwame. See you all in #kafka at 12:30 my time.
12:40 UTC — @aiko: Thank you @sachin, that helps. Short status: Claude Code is installed on the studio Mac but stops at the login screen; it wants a Claude account and I do not have one. I will ask a partner tomorrow morning (JST) whether the studio takes a Pro plan, so until then I have no harness. I replied to the email yesterday with the same plus three questions. I will be in #kafka for S1 (00:30 JST Tue) and can stay for 1A after it; S2 and S4 async. If it is simpler, I can write inventory/aiko.md by hand and paste it here tonight — is there a template to follow, other than the one inside Block A?
11:40 UTC — @marisol: @sachin Read the pin and your 10:10, thank you. Before I paste anything: the email's Block A writes `inventory/marisol.md` into the public repo with my three recurring tasks. My question is about that file, not the kit. Is the *description* of a task public content? Concretely: may the file say "council staff reports" and "agenda archive", or should it stay at "internal reports" and "an archive"? I want one rule I can apply myself, not a judgment call per line. (Nothing with the city's name, parcel numbers or item numbers will go in either way.)
13:05 UTC — @devr: @marisol not Sachin, but the email already has the rule: "put nothing in a public kit you would not put on a public website". Same rule for the inventory. "council staff reports" and "agenda archive" are job titles for documents, not the documents; I'd say they pass. City name, parcel numbers, item numbers don't. Harness only writes what you tell it, so the rule is yours to apply once, at step 4.
13:12 UTC — @devr: Two things from my side. (1) Block A ran clean on Wed, file pushed. Then on Thu I branched by hand to add a line to my inventory and pushed the branch, because nothing in the *email* says no branches to the human, only to the harness. Found "push to main, no branches" in the README today; branch folded into main and deleted. Suggest one line in the email for the person, not just the block. (2) `orient.md` step 7 says `git log origin/main -1` should show *your* commit; it shows whoever pushed last (@kwame, right now), so it "fails" for anyone who isn't the most recent push. `git log origin/main -1 -- inventory/<name>.md` (as in the email) is the check that works.
13:05 UTC — @kwame: Progress report, in order. Wed: cloned the repo, opened Codex, pasted Block A, said "do this". It stopped at step 2 because I had opened Codex in my home folder, not in the clone; before stopping it had already run step 1 and made a second `workshop-kitkraft/` folder in my home directory. I reopened Codex inside the original clone, pasted again, it asked my three tasks (weekly lab update, ethics amendment forms, RA onboarding) and pushed `inventory/kwame.md` (commit be9115c). Today: pasted `instructions/orient.md` as the pin says; it reported the file already exists and nothing to push, so I have not pushed anything since Wednesday. Survey posture: Compliance. Kit for S2: the weekly lab update, public, synthetic data. Two questions: (1) may I delete the extra clone in my home folder, or does the harness need it? (2) Block A says `BRANCH=main (dry run only: simulation/dry-run-01)` — Codex asked me which one it should use; I said main. Was that right?
17:55 UTC — @marisol: No reply to my 11:40 yet, so I am taking the stricter reading: what the task is, yes; who the employer is, no; no parcel, item or request numbers. Pasting the email's Block A into Codex now.
18:08 UTC — @marisol: First paste: it checked git, gh and my login, cloned into a new folder, then stopped: "cd workshop-kitkraft, then open me again from there, then paste this block again." Doing that. The email did not say it would take two pastes.
18:24 UTC — @marisol: Second paste went through: three tasks, the file, the commit, the push. One stop on the way: the push came back `Permission to protocolvision/workshop-kitkraft.git denied ... 403` because gh was signed in as a different account; the block says stop and report, I switched account and retried and it worked. Then I opened github.com in a window where I am NOT signed in and I can read `inventory/marisol.md`; the repo says "Public" next to its name. So that is what public means. Fine: nothing in that file I would not say at a council meeting. Two questions: (1) the block says `BRANCH=main (dry run only: simulation/dry-run-01)`; how do I know which one I am in? (2) the pin says paste `instructions/orient.md`, the email says Block A; I did the email. Do I also need orient.md, or is the file enough?
18:30 UTC — @sachin: @marisol pushed (Codex, first push, no drama). @ingrid @aiko outstanding; 1A is yours.

### Mon Sep 21

08:00 UTC — @sachin: S1 today, 15:30 UTC (17:30 Berlin · 08:30 Pacific · 00:30 Tokyo · 12:30 Buenos Aires · 15:30 Accra · 16:30 Lisbon), voice #kafka. Have open: your harness inside the clone, your three recurring tasks, your posture. Rafa and I split the presenting; I open each session and run this channel, the pins, the recorder and the repo.
08:05 UTC — @sachin: Provisional triads for tonight, drawn from your registration answers (role + the task you named). Triad 1: @ingrid @devr @marisol. Triad 2: @tomasr @aiko @kwame. Confirmed or reshuffled at the end of S1 once inventories exist.
08:10 UTC — @sachin: S2 is *tonight*, 20:00 UTC, not tomorrow. Between S1 and S2 you have about 3 hours; the only task is Async 1, posted here at 16:32 as a file to paste.
09:00 UTC — @sachin: @kwame, @marisol — Codex users: your harness reads `AGENTS.md`, not `CLAUDE.md`; same instructions, nothing to do. Just make sure Codex is opened *inside* the clone, or the log will not fire.
14:30 UTC — @sachin: One hour. Rafa opens #kafka at 15:25 UTC. I start the recorder at 15:30 sharp and post "recording on" here.
15:20 UTC — @sachin: In #kafka. Post questions here during the session; I answer in text so the room is not interrupted. If your harness cannot push during the exercise, paste the file here.
15:30 UTC — @sachin: Recording on (KITCRAFT-S1). Live transcript in #kitcraft-transcripts.
16:09 UTC — @tomasr: Pushed, my harness says. It stopped once first: my clone folder is called `tomasr`, not `workshop-kitkraft`, and the block told me to cd. I told it this is the clone and to go on. Then it asked me two things while Rafa was talking — which task is the kit, and my posture. I said the claims one, public, and "I haven't done the survey, put Overreliance, I said it in the round". It put both in. I have still not read the file. Twenty-nine lines, Rafa, under forty.
16:21 UTC — @tomasr: Block 2, read aloud in voice just now, verbatim from my agent: nearest are **@devr** (documents in, a decisions table out, fortnightly like the newsletter) and **@marisol** (archive in, what-was-decided-and-where out, same shape as the claim ledger). Not @kwame. Rafa said to say so if it disagrees with the triad, so: it disagrees. It also says only three inventories landed — devr, kwame, marisol — after a pull. @sachin over to you; I have not checked any of it.
16:08 UTC — @devr: Pushed. `inventory/devr.md` is on the branch, 32 lines; harness kept my two pre-work log lines and the three tasks, renamed my `Built / uses` heading to the block's `Built / use`, added Kit and Posture. One snag worth knowing: the block's first precondition checks that the folder name ends in `workshop-kitkraft`. Mine doesn't (I cloned into a different folder name), so it stopped until I told it the remote is the right repo. If yours stops on line one, that's why.
16:10 UTC — @devr: @kwame @marisol Codex people: if it asks "which folder" or "which branch", it's either outside the clone or reading the `(dry run only: …)` parenthesis. Inside the clone `git branch --show-current` tells you which one you're actually on; use that, don't guess.
16:10 UTC — @aiko: @sachin here is my inventory, written by hand from the section list in step 2 of the block (I cannot run it: Claude Code still stops at the login screen). Please commit it under my name as you offered on Sunday. I used the block's headings, not the README's, since they differ slightly; tell me if that is wrong.

    # aiko

    ## Recurring tasks
    1. Proposal from a client brief: brief + two past proposals from our Notion database → a first proposal in the studio's format, with the fee table. Recurring: yes (2–3 per month). Depends on something I know that a stranger would not: yes (what the partners will and will not take on; our fee norms; neither is written anywhere).
    2. Weekly studio schedule from the partners' calendars and the project deadlines. Recurring: yes (weekly). Depends on something I know: yes (which deadlines actually move and which partner cannot be booked on which day).
    3. Client update emails in the studio's voice. Recurring: yes (weekly). Depends on something I know: partly (the voice is learnable from past emails; what to leave out of an update is not).

    ## Built / use
    - A Notion database of past proposals (studio-internal).
    - A Canva brand kit (studio-internal).
    - ChatGPT and Gemini in the browser; nothing AI-native built yet.

    ## Kit
    Task 1, proposal from brief. Inputs: the brief and two past proposals. Output: a proposal draft in the studio format plus a list of open questions for the partners. Public, with synthetic examples (no client names, no real fees).

    ## Posture
    Partnership

    ## Log
    2026-09-21T16:08:00Z | S1 | aiko | progress | inventory written by hand, no harness; pasted to #kitcraft for Sachin to commit
16:14 UTC — @devr: Re the branch remark: yes, I said "branch it" out of habit, the harness refused and quoted AGENTS.md. Told it once, it's in my log as a decision line. Not touching anything until block two.
16:16 UTC — @devr: @tomasr if it's writing an essay, say "stop, the README's five headings, under forty lines". Mine came out at 32 with the log.
16:18 UTC — @aiko: I cannot run block two either. Could someone whose agent has already run it tell me the two inventories it says are nearest to aiko? I am not opening the inventories on GitHub, per the rule; I only want the two names and the one-line why. @tomasr @kwame if it is easy.
16:21 UTC — @devr: Block 2 result: nearest are @kwame (Slack export + papers + milestone sheet → weekly one-page update for the PI; same shape as my digest, many sources in, one audience post out) and @tomasr (fortnightly issue plus a claims table; a draft in, a table out). @marisol is archive search in, memo out, farther off. Note: after the pull my harness sees four files in the repo including mine, not six; the hand-written ones aren't on the branch yet from where I sit. Triad 1 as pinned still fine by me.
16:22 UTC — @aiko: On the log line: mine is hand-written and says "no harness", so if the scan is looking for a harness line it will not find one. If that sends me to 1A: it starts at 01:30 here. Could my part be async — written steps in this channel that I follow in my morning (JST), and a line saying what "done" looks like? I will stay in voice for a few minutes but I may not last the half hour.

### Mon Sep 21 — pre-written posts for after S1 and after S2

16:32 UTC — @sachin: Recording off. **Async 1, before 20:00 UTC:** open your harness inside the clone, paste the whole of `instructions/async-1.md`, say "do this". It drafts `kits/<you>/README.md` from your inventory and pushes. Then read the Job line and the field it was least sure about, and rewrite those two by hand. That is all. S2 at 20:00 UTC; triads pinned above.
16:45 UTC — @sachin: Triads for S2 pinned (confirmed from the inventories; same as this morning's draft). @aiko — your path is in the pin; nothing to do until your morning.
20:58 UTC — @sachin: Recording off. **Async 2, before 15:30 UTC Tuesday:** paste `instructions/async-2.md` into your harness, say "do this". It reads the blocker lines your triad logged, proposes one fix per blocker, waits for your "go", pushes v2. @aiko: push your kit first (`kits/README.md` block), then @tomasr's harness reads it and posts the report here; run async-2 when it appears. S3 triads pinned at 09:00 UTC.
