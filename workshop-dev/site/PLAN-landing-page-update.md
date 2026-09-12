# Landing page update — change plan

| | |
|---|---|
| **Page** | https://ai.protocolized.dev/kitcraft/ (source: `workshop-dev/site/index.html`, 614 lines) |
| **Issue** | protocolvision/workshop-kitkraft#2 · milestone *Workshop ready — Sep 21, 2026* |
| **Owner / reviewer** | Rafa (decisions + sign-off) · Sachin (theory copy) |
| **Source of truth** | `workshop-dev/outline.md` (v8) and `README.md` on `main`, merged 2026-09-12 (`b0430ea`) |
| **Status** | Draft for review — no page changes made yet |
| **Deploy** | here.now slug `bold-steeple-73wb` → mounted at `ai.protocolized.dev/kitcraft` |

---

## Why now

The page was written in June, when the workshop was a context-hub-and-disposable-app build. The workshop is now **Kit → Factory → Bridge**, with a different session plan, different definitions, and a public repo at its centre. A registrant who reads the page today and then opens the repo finds two different workshops. Registration is open, so every day the page is stale it recruits against the wrong expectation.

Nothing about the visual design, brand, or imagery changes. This is a copy and structure update.

## The gap in one table

| Topic | Page says today | Repo says (v8) |
|---|---|---|
| What a kit is | "a reusable bundle of workflows, disposable apps, and contexts" | a technology in use before a standard product exists; loose components a user adapts to their own job |
| Spine | "Play · Kit · Practice" | **Kit → Factory → Bridge** |
| Sessions | Opening talk + Context Play, Kitcraft I, Kitcraft II, Show and Tell | S1 Kits · 1A Tech Support · S2 Factories · S3 Bridges · S4 Recap |
| Session length | "about 60 to 90 minutes" | 60 minutes, every session |
| Dates and times | absent | Mon Sep 21 and Tue Sep 22, two sessions a day, times fixed by the Symposium |
| What you build | a context hub, a disposable app, a Kit | an inventory, a **factory** (kit with a declared interface), a **bridge** to someone else's |
| Where it happens | "async on Discord" | a public GitHub repo + Discord `#workshop-kitkraft`; the repo is never linked from the page |
| Prerequisites | chatbots, Claude Code or Codex, GitHub account | plus **git** and **gh**, plus a paid Claude or ChatGPT plan, plus three recurring tasks |
| Selection | "if oversubscribed, priority goes to applicants…" | open registration through the form; no selection |

---

## Decisions needed before build

| # | Decision | Recommendation | Blocks |
|---|---|---|---|
| **D1** | Is the opening talk **"Fog of War Kit Building"** still happening? It is on the page and in `announcement.md`, but not in outline v8, which starts at S1. | **Drop it.** Five 60-minute slots are already full, and the history material now lives inside S1's theory segment. If you want to keep it, it needs a slot and the schedule changes. | C6, C7, C9 |
| **D2** | Participant cap. Page says 10–15; the Symposium post says capacity is set by the organiser. | Keep 10–15. It matches the outline's breakout arithmetic. | C4 |
| **D3** | Do we publish the session times on the page, or only in the pre-work email and Discord? | **Publish them.** They are fixed by the Symposium and will not move; people self-select on time zone, and Aiko-style 00:30 surprises are the main drop-out risk. | C7 |
| **D4** | Do we link the public repo from the page before registration closes? Anyone can then read other participants' inventories. | **Link it.** It is public by design and the consent notice already says so; seeing the repo is the clearest possible explanation of the workshop. | C10 |

---

## Changes

Priority: **P0** factually wrong or misleading · **P1** missing something a registrant needs · **P2** polish.

### C1 · P0 · Hero lead (line 307) — the kit definition

**Current**
> Move from ad-hoc AI use to building your first **Kit** — a reusable bundle of workflows, disposable apps, and contexts your team can run repeatedly and reliably. Then map a path to scale it.

**Proposed**
> You already have a kit: the prompts, contexts and steps you have adapted to one recurring task. Over two days you will write it down so another person's agent can run it, give it an interface, and try to reach someone else's. Kit → Factory → Bridge.

**Why** The current sentence defines a kit as an artifact bundle. The workshop now defines it as a stage of technology use, which is the whole thesis of the Kit phase section directly below it. The proposed copy also puts the spine in the hero, where it belongs.

### C2 · P0 · Pull quote (lines 344–346) — the spine

**Current** "Play · Kit · Practice" / "Every level is touched by hand. Participants Play, build a Kit, and prepare to turn it into a Practice."

**Proposed** "Kit · Factory · Bridge" / "Every step is touched by hand. You write down the kit you already have, give it an interface, and try to reach someone else's."

**Why** Play/Kit/Practice is from the June design and appears nowhere else in the current material. The spine appears in every other artifact.

### C3 · P0 · Meta description and OG tags (lines 8–12)

Rewrite to match C1. One sentence, no "disposable apps".

**Why** This is what shows in Discord, Slack and search previews of the registration link.

### C4 · P1 · Hero chips (lines 313–316)

**Current** Online · two workshop days | 1 talk + 4 working sessions | 10–15 participants | No AI-engineering background

**Proposed** Online · Mon–Tue Sep 21–22 | 4 sessions of 60 min | 10–15 participants | No AI-engineering background

**Why** Depends on **D1**; the talk disappears if it is dropped. Adding the dates to the first screen is the cheapest possible time-zone filter.

### C5 · P1 · Takeaways cards (lines 350–375)

| Card | Current | Proposed |
|---|---|---|
| 01 | At least one working Kit — "a reusable workflow you built and can re-run" | **A factory another agent can use** — your kit written down as a folder an arbitrary agent can read: a README, a SKILL.md, and one worked example |
| 02 | The five-level model — unchanged | keep as is |
| 03 | A path to capability — "one-page sketch for turning your Kit into an organizational capability" | **A bridge you tried, and what you learned from it** — a public log of your agent reaching another person's factory, and the room's own answer to what a bridge turned out to be |

**Why** Card 1 promises the old artifact; card 3 promises a one-page sketch that no session produces. Both are now produced by S2 and S3 respectively.

### C6 · P0 · What you'll do (lines 377–393) — rewrite the six bullets

**Current** context hub · disposable application · convert to a Kit · Kit trade · show-and-tell · async Discord

**Proposed**
- Write an **inventory** of three recurring tasks from your own work, and pick the one worth encoding.
- Convert one kit into a **factory**: a folder with a declared interface that a stranger's agent can use without talking to you.
- Read a partner's factory **cold, through your own agent**, and report where it failed.
- Build a **bridge**: make your agent use someone else's factory to do one thing yours cannot.
- Bring what you found to a closing **synthesis** the room writes together.
- Work **async on Discord** between sessions; everything lands in a public repo as you go.

**Why** None of the current six bullets survives the redesign. These are literally the artifacts each session produces.

### C7 · P0 · Format and sessions (lines 395–441)

Replace the lead and all five session blocks.

**Lead, current** "Across the symposium's two workshop days, plus asynchronous co-working on Discord. Each session runs about 60 to 90 minutes."

**Lead, proposed** "Four sessions of 60 minutes across the Symposium's two workshop days, with async work in between. All times UTC."

**Session blocks, proposed** (subject to D1 and D3)

| Slot | Title | One-line description |
|---|---|---|
| S1 · Mon 15:30 | **Kits** | What the Kit phase is, why your practice is private, and an inventory of the recurring work worth encoding. |
| 1A · Mon 16:30 | **Tech Support** *(optional)* | Thirty minutes for anyone whose setup is not behaving. |
| S2 · Mon 20:00 | **Factories** | Turn one kit into a factory with a declared interface, then have a partner's agent read it cold. |
| S3 · Tue 15:30 | **Bridges** | Make your agent use someone else's factory to do something yours cannot, and log every step. |
| S4 · Tue 20:00 | **Recap** | Each pair reports; the room writes its own definition of a bridge from the logs. |

Also delete the "Kitcraft Kit" paragraph at line 439 (it describes a pre-session handout that no longer exists) and replace with one line pointing at the repo and the pre-work email.

**Why** The current five blocks describe a workshop we are not running. This is the single highest-value change on the page.

### C8 · P1 · Who it's for (lines 444–467)

1. Delete the oversubscription note at line 456: *"If oversubscribed, priority goes to applicants who arrive with a concrete recurring task and a working tooling setup."* Registration is open and nobody is being ranked.
2. Rewrite "Before you arrive" to match `workshop-dev/sessions/setup-checklist.md`:
   - Regular use of **AI chatbots**.
   - **git** and the GitHub CLI **gh** installed, and a **GitHub account**.
   - One AI assistant, a.k.a. harness: **Claude Code** (paid Claude plan) or **Codex** (paid ChatGPT plan).
   - **Three recurring tasks** from your own work to bring with you.
   - Link: the full setup checklist in the repo.

**Why** Two of the four current prerequisites are incomplete, and the paid-plan requirement is invisible. In the rehearsal this was the single biggest blocker: two of six participants could not start because nobody told them a paid plan was needed.

### C9 · P1 · New section: where it happens (insert after Format)

A short block, three lines plus two links:

> The workshop runs in a public GitHub repository and on Discord. Your AI assistant works inside the repo; every instruction is a file you paste into it. Plenary is in the voice channel `#kafka`, and everything written is in `#workshop-kitkraft`.
>
> Repo: github.com/protocolvision/workshop-kitkraft · Discord: discord.gg/s2WbZBDqM

**Why** Depends on **D4**. The repo is the workshop; the page currently never mentions it. It is also the most persuasive thing we have: a sceptical registrant can look at the template and the instructions before signing up.

### C10 · P2 · Apply section (lines 529–548)

- "point you at the beginner clinic" → "point you at 1A Tech Support on Monday".
- Add one line under the form button: "You will get a repo invite and a pre-work email; the pre-work takes about ten minutes plus one paste into your assistant."

**Why** Names the clinic as it is now called, and sets the pre-work expectation before people commit.

### C11 · P2 · Foundations cards (lines 496–527)

Add a fifth card linking *Have Your Factory Call My Factory*, which is the source of the factory and bridge framing and is already the optional pre-work read.

---

## Out of scope

- Visual design, layout, palette, imagery, the hero collage. No changes.
- The registration form itself (separate record in `workshop-dev/registration/`).
- The lecture deck at `ai.protocolized.dev/townhallslidesjune2026`, which is a separate artifact.
- Anything about the workshop that is still being decided in the rehearsal (S2–S4 mechanics beyond the one-line descriptions above).

## Acceptance criteria

1. No sentence on the page contradicts `workshop-dev/outline.md` v8 or `README.md` on `main`.
2. The page states the spine, the five slots with dates and times, the prerequisites including paid plans, and links the repo.
3. No occurrence of: "disposable app", "context hub", "Kit trade", "Play · Kit · Practice", "60 to 90 minutes", "beginner clinic", "if oversubscribed".
4. Every CTA still points at the Google sign-up form; the page has no other form.
5. Brand QC passes: `node scripts/contrast-check.mjs` and `node scripts/preflight.mjs` from the brand kit, plus the Playwright pass in its `scripts/qc.md` at 1280 and 390 px.
6. Live URL serves the new copy, verified with `curl`, not with the publisher's "unchanged" line.

## Build and deploy runbook

1. Edit `workshop-dev/site/index.html` on a branch off `main`, one commit per change ID above.
2. Run the brand kit's contrast check and preflight against the file; fix anything they flag.
3. Serve locally and screenshot desktop and mobile; check the hero text over the collage and the gutter nav contrast.
4. Open a PR against `main` referencing issue #2, listing the change IDs applied.
5. After merge, publish from `workshop-dev/site/`: `bash ~/.claude/skills/here-now/scripts/publish.sh . --slug bold-steeple-73wb --client claude-code --title "AI Kitcraft — A Hands-On AI Tooling Workshop"`.
6. Verify `https://ai.protocolized.dev/kitcraft/` with `curl` and re-check the mobile rendering.
7. Update `workshop-dev/site/announcement.md` blurbs to match, and close issue #2.

## Risks

| Risk | Mitigation |
|---|---|
| Someone registered on the June description and expected a website build | The Discord welcome post and the pre-work email both describe the real shape; nobody is surprised on Monday |
| Publishing the repo link before registration closes invites drive-by pushes | Only invited collaborators can push; the ruleset blocks force-push and deletion |
| Session times on the page make the 22:00 Berlin slots visible and cost European registrations | They would discover it anyway; better before signing up than on Monday night |
| Copy drifts again as the rehearsal continues | Keep the page to what is stable: the spine, the slots, the prerequisites. Mechanics stay in the repo |
