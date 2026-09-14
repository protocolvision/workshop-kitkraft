# Landing page update — change plan (rev 2)

| | |
|---|---|
| **Page** | https://ai.protocolized.dev/kitcraft/ (source: `workshop-dev/site/index.html`, 614 lines) |
| **Issue** | protocolvision/workshop-kitkraft#2 · milestone *Workshop ready — Sep 21, 2026* |
| **Owner / reviewer** | Rafa (decisions + sign-off) · Sachin (theory copy) |
| **Source of truth** | `workshop-dev/planning/outline.md` (v8) and `README.md` on `main`, merged 2026-09-12 (`b0430ea`) |
| **Status** | **Approved and applied** 2026-09-12 — D1 drop the talk, D2 keep 10–15, D3 publish times, D4 link the repo; C11 skipped (a fifth card breaks the four-column grid) |
| **Deploy** | here.now slug `bold-steeple-73wb` → mounted at `ai.protocolized.dev/kitcraft` |
| **Rev 2** | Copy rewritten to put working together at the centre, in plain welcoming sentences (Rafa, 2026-09-12) |
| **Rev 3** | Rafa's own edits applied: the lede is "Everyone is using AI their own way today. What happens when we need to work together?"; chip reads "No handmade code needed"; first two do-bullets are his wording; the Tech Support note moved into Who it's for |

---

## Why now

The page was written in June, when the workshop was a context-hub-and-disposable-app build. The workshop has changed, and so has what it is *for*. A registrant who reads the page today and then opens the repo finds two different workshops. Registration is open, so every day the page is stale it recruits against the wrong expectation.

There is a second problem the first rev of this plan did not fix. The page describes artifacts — kits, factories, interfaces — as if the point were to produce them. The point is people learning to work together when each of them has a private way of using AI. The artifacts are how we get there. The copy below leads with that.

Nothing about the visual design, brand, or imagery changes. This is a copy and structure update.

## The gap in one table

| Topic | Page says today | Should say |
|---|---|---|
| What the workshop is about | building your first Kit | getting your way of working with AI to connect with someone else's |
| What a kit is | "a reusable bundle of workflows, disposable apps, and contexts" | the way you have already worked out how to do something, before anyone standardised it |
| Spine | "Play · Kit · Practice" | **Kit → Factory → Bridge**, each one explained in plain words as it appears |
| Sessions | Opening talk + Context Play, Kitcraft I, Kitcraft II, Show and Tell | S1 Kits · 1A Tech Support · S2 Factories · S3 Bridges · S4 Recap |
| Session length | "about 60 to 90 minutes" | 60 minutes, every session |
| Dates and times | absent | Mon Sep 21 and Tue Sep 22, two sessions a day, times fixed by the Symposium |
| Where it happens | "async on Discord" | a shared public repo and Discord; the repo is never linked from the page |
| Prerequisites | chatbots, Claude Code or Codex, GitHub account | plus git and gh, plus a paid Claude or ChatGPT plan, and we help if it fights you |
| Selection | "if oversubscribed, priority goes to applicants…" | open registration; nobody is being ranked |

---

## Voice and register

Everything below is written to be read by someone who is curious, busy, and not sure they belong in a workshop with "protocol" in the name. The rules I applied, and that any later edit should keep:

- **Normal sentences.** Say it the way you would say it out loud to a colleague.
- **Working together is the subject.** Kits, factories and bridges are how we get there, not the reason to come.
- **Introduce every term the first time it appears.** We keep the vocabulary; we never assume it. "A factory, which here just means a kit tidy enough that someone else can pick it up."
- **Second person, and generous.** "You already have one of these" beats "participants will produce".
- **No words that make people feel outside.** Out: stranger's agent, arbitrary agent, encode, artifact, cold read, declared interface, ship. In: someone else, their assistant, write down, what you made, try it, hand it over.
- **Admit the hard parts.** The setup can fight you; the clinic exists; nobody is being graded.

---

## Decisions needed before build

| # | Decision | Recommendation | Blocks |
|---|---|---|---|
| **D1** | Is the opening talk **"Fog of War Kit Building"** still happening? It is on the page and in `announcement.md`, but not in outline v8, which starts at S1. | **Drop it.** Five 60-minute slots are already full, and the history material now lives inside S1. If you want to keep it, it needs a slot and the schedule changes. | C6, C7, C9 |
| **D2** | Participant cap. Page says 10–15; the Symposium post says capacity is set by the organiser. | Keep 10–15. It matches the outline's breakout arithmetic. | C4 |
| **D3** | Do we publish the session times on the page, or only in the pre-work email and Discord? | **Publish them.** They are fixed and will not move; people self-select on time zone, and a 00:30 start discovered on Monday is how you lose someone. | C7 |
| **D4** | Do we link the public repo from the page before registration closes? | **Link it.** It is public by design, and seeing it is the clearest possible explanation of what the two days are. | C9 |

---

## Changes

Priority: **P0** factually wrong or misleading · **P1** missing something a registrant needs · **P2** polish.

### C1 · P0 · Hero lead (line 307)

**Current**
> Move from ad-hoc AI use to building your first **Kit** — a reusable bundle of workflows, disposable apps, and contexts your team can run repeatedly and reliably. Then map a path to scale it.

**Proposed**
> Most of us have quietly worked out our own way of using AI at work — a handful of prompts, files and habits that make sense to us and to nobody else. This workshop is about getting those private ways of working to meet. Over two days you will write yours down, hand it to someone else, and find out what it takes for the two of you to actually work together.

**Why** It says what the two days are for in language anyone can read, and it puts collaboration in the first sentence. The current copy defines a kit as a bundle of things, which is both wrong and cold.

### C2 · P0 · Pull quote (lines 344–346)

**Current** "Play · Kit · Practice" / "Every level is touched by hand. Participants Play, build a Kit, and prepare to turn it into a Practice."

**Proposed** "Kit · Factory · Bridge" / "Write down how you actually work. Tidy it up so someone else can use it. Then try to reach each other."

**Why** Keeps the three words the workshop runs on and translates each into something a person can picture. Play/Kit/Practice is from the June design and appears nowhere else.

### C3 · P0 · Meta description and OG tags (lines 8–12)

**Proposed** "A two-day hands-on workshop about getting your own way of working with AI to connect with someone else's. Protocol Symposium 2026, online, free."

**Why** This is what people see when the link is shared in Discord or Slack. It should read like an invitation, not a product description.

### C4 · P1 · Hero chips (lines 313–316)

**Current** Online · two workshop days | 1 talk + 4 working sessions | 10–15 participants | No AI-engineering background

**Proposed** Online · Mon–Tue Sep 21–22 | 4 sessions of 60 min | 10–15 people | Nothing to build from scratch

**Why** Dates on the first screen are the cheapest time-zone filter. "Nothing to build from scratch" answers the fear behind "no AI-engineering background" instead of naming the fear. Depends on **D1**.

### C5 · P1 · Takeaways cards (lines 350–375)

| Card | Current | Proposed |
|---|---|---|
| 01 | At least one working Kit — "a reusable workflow you built and can re-run" | **Your own work, written down** — one thing you do regularly, captured clearly enough that a colleague, or a colleague's AI assistant, can pick it up and run it without asking you |
| 02 | The five-level model | **A sense of where you are** — the five-level maturity model, and an honest read on where your team sits and what the next step actually is |
| 03 | A path to capability — "one-page sketch…" | **The experience of connecting to someone else** — you will have tried to use a colleague's work through your own assistant, kept track of everywhere it got stuck, and helped the group work out what it takes |

**Why** Card 1 promises the old artifact and card 3 promises a sketch no session produces. The replacements are what the sessions really leave you with, said plainly.

### C6 · P0 · What you'll do (lines 377–393)

**Current** context hub · disposable application · convert to a Kit · Kit trade · show-and-tell · async Discord

**Proposed**
- Take stock of the work you already do with AI, and pick the one piece worth writing down.
- Write it down properly, so it makes sense to someone who is not you.
- Hand it to a partner and watch what their assistant makes of it. The things that are obvious to you will not be obvious to it, and that is the useful part.
- Try to use their work to do something yours cannot do alone. Keep a note of everywhere it gets stuck.
- Compare notes with everyone else and work out together what it actually takes to collaborate this way.
- Carry on between sessions on Discord. Everything anyone makes goes in one shared, public place.

**Why** None of the current six bullets survives the redesign, and these read as things you will do with other people rather than deliverables you will produce.

### C7 · P0 · Format and sessions (lines 395–441)

**Lead, current** "Across the symposium's two workshop days, plus asynchronous co-working on Discord. Each session runs about 60 to 90 minutes."

**Lead, proposed** "Four sessions of an hour each, spread over the Symposium's two workshop days, with time to work in between. Times are UTC."

**Session blocks, proposed** (subject to D1 and D3)

| Slot | Title | Description |
|---|---|---|
| S1 · Mon 15:30 | **Kits** | Why the way you use AI is invisible to everyone around you, and what is worth writing down. You will leave with a short list of the work you do over and over. |
| 1A · Mon 16:30 | **Tech Support** *(optional)* | Half an hour for anyone whose setup is not cooperating. Come along; this is what it is for. |
| S2 · Mon 20:00 | **Factories** | Take one thing you do and tidy it up until someone else could run it. A factory here just means a kit that is clear enough to hand over. Then a partner's assistant tries it, and you find out what you forgot to say. |
| S3 · Tue 15:30 | **Bridges** | The interesting part. Use a colleague's work to do something yours cannot do alone, and keep track of everything that gets in the way. |
| S4 · Tue 20:00 | **Recap** | Everyone shares what they found. Together we write down what it really takes for two people's ways of working to meet. That written answer is the workshop's main output. |

Also delete the "Kitcraft Kit" paragraph at line 439, which describes a pre-session handout that no longer exists, and replace it with one line: what you need before Monday arrives by email, and everything else is in the repo.

**Why** The current five blocks describe a workshop we are not running. This is the highest-value change on the page. Each description now says what you will be doing with other people, and introduces "factory" in passing rather than assuming it.

### C8 · P1 · Who it's for (lines 444–467)

1. Replace the opening paragraph:

   **Current** "Analysts and managers from all backgrounds — project managers, operations and deployment leads, and AI-curious newcomers. No AI-engineering background is required, only regular chatbot use and a willingness to tinker."

   **Proposed** "Analysts, managers, project and operations leads — anyone who uses AI regularly at work and has noticed that none of what they have figured out is easy to pass on. You do not need an engineering background. You do need to be willing to try things and say when they break."

2. Delete the oversubscription note at line 456. Registration is open and nobody is being ranked.
3. Rewrite "Before you arrive" so it reads as help, not a gate:

   > **A little setup before Monday** — about twenty minutes, and Monday's Tech Support session exists for when it fights you.
   > - You use AI chatbots regularly, like ChatGPT or Claude.
   > - You have a GitHub account, and git and the GitHub command-line tool installed. The checklist in the repo has the commands for your system.
   > - You have one AI assistant installed — Claude Code or Codex. Both need a paid plan, so worth checking before Monday.
   > - You bring three things you do over and over at work. One of them becomes what you write down.

**Why** Two of the four current prerequisites are incomplete, and the paid-plan requirement is invisible. In the rehearsal that was the single biggest blocker: two of six people could not start because nobody had told them.

### C9 · P1 · New section: where it happens (insert after Format)

> **Where it happens.** We work in one shared, public repository on GitHub, and we meet on Discord. Your AI assistant does the fiddly parts: every instruction is a file you paste into it and say "do this". We talk by voice in `#kafka` and write everything down in `#workshop-kitkraft`. Everything the group makes over the two days stays public afterwards, so you can go back to it, and so can anyone else.
>
> Repo: github.com/protocolvision/workshop-kitkraft · Discord: discord.gg/s2WbZBDqM

**Why** Depends on **D4**. The repo is where the workshop happens and the page never mentions it. It also quietly answers "will I be able to keep up?", because you can look at the instructions before you sign up.

### C10 · P2 · Apply section (lines 529–548)

- "point you at the beginner clinic" → "point you at Monday's Tech Support session".
- Add under the form button: "After you sign up we will send you a short email with the setup steps and an invite to the repo. It takes about ten minutes, plus one paste into your AI assistant."
- Soften the lead: "Registration is open. The form takes two minutes and asks for one thing you do over and over — that becomes the thing you write down on Monday."

**Why** Names the clinic as it is now called and sets expectations before people commit.

### C11 · P2 · Foundations cards (lines 496–527)

Add a fifth card for *Have Your Factory Call My Factory*, with a human gloss: "Two people, two piles of AI tooling, one working handoff. The piece this workshop's second day argues with."

---

## Out of scope

- Visual design, layout, palette, imagery, the hero collage.
- The registration form itself (record in `workshop-dev/registration/`).
- The lecture deck at `ai.protocolized.dev/townhallslidesjune2026`.
- Session mechanics still being tested in the rehearsal; the page stays at the level of what you will be doing with other people.

## Acceptance criteria

1. No sentence contradicts `workshop-dev/planning/outline.md` v8 or `README.md` on `main`.
2. A reader who knows nothing about the Symposium can say, after one pass, what the two days are for and what they will do with other people.
3. Kit, factory and bridge each appear with a plain-language gloss the first time they are used.
4. None of these appear anywhere: "disposable app", "context hub", "Kit trade", "Play · Kit · Practice", "60 to 90 minutes", "beginner clinic", "if oversubscribed", "declared interface", "arbitrary agent", "stranger's agent".
5. The page states the dates and times, the setup requirements including paid plans, and links the repo and Discord.
6. Every CTA still points at the Google sign-up form; the page has no other form.
7. Brand QC passes: `contrast-check.mjs`, `preflight.mjs`, and the Playwright pass in the brand kit's `scripts/qc.md` at 1280 and 390 px.
8. The live URL serves the new copy, verified with `curl`.

## Build and deploy runbook

1. Edit `workshop-dev/site/index.html` on a branch off `main`, one commit per change ID.
2. Run the brand kit's contrast check and preflight; fix anything they flag.
3. Serve locally, screenshot desktop and mobile, check hero legibility over the collage and the gutter nav contrast.
4. Open a PR against `main` referencing issue #2 and listing the change IDs applied.
5. After merge, publish from `workshop-dev/site/`: `bash ~/.claude/skills/here-now/scripts/publish.sh . --slug bold-steeple-73wb --client claude-code --title "AI Kitcraft — A Hands-On AI Tooling Workshop"`.
6. Verify `https://ai.protocolized.dev/kitcraft/` with `curl`, then re-check mobile.
7. Update the blurbs in `workshop-dev/site/announcement.md` to the same voice, and close issue #2.

## Risks

| Risk | Mitigation |
|---|---|
| Someone registered on the June description and expected a website build | The Discord welcome post and the pre-work email both describe the real shape |
| Publishing the repo link before registration closes invites drive-by pushes | Only invited collaborators can push; the ruleset blocks force-push and deletion |
| Session times on the page make the 22:00 Berlin slots visible and cost registrations | They would find out anyway; better now than on Monday night |
| Friendlier copy reads as vague about what people actually do | Every session block names a concrete thing you leave with; the takeaways cards stay specific |
| Copy drifts again as the rehearsal continues | The page stays at the level of purpose, sessions and setup. Mechanics live in the repo |
