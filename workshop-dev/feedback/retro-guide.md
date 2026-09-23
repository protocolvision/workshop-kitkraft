# Retrospective guide

How to review a run of this workshop and decide what changes, from what the workshop
actually left behind rather than from what we remember of it. Written for a
facilitator conversation — Rafa and Sachin after the September 2026 run — and meant
to be reused after every run, so the runs can be compared.

Three files work together:

- **This guide** — the method and the questions. Reusable across runs.
- **`<run>-evidence.md`** — the facts for one run, assembled before the conversation.
- **`evidence.sh`** — regenerates the repo-derived measures, so every run is scored the
  same way.

---

## Principles

1. **Evidence before opinion.** The evidence pack is built and read before the
   conversation. Nobody offers an explanation until the facts are on the table.
2. **Judge against intent, not taste.** A finding is a gap between what we meant to
   happen and what did. If we cannot say what we intended, that is the first finding.
3. **Keep what happened, why, and what next apart.** Mixing them is how a retro turns
   into a mood.
4. **Ask participants only what the traces cannot answer.** Their attention is the
   scarcest input, and the people who left are the ones we most need and are least
   likely to hear from.
5. **A change is an experiment with a measure.** If we cannot say how we would know it
   worked next time, it is not a change yet.
6. **Read the numbers before trusting them.** The first automated count of Exercise 2
   was wrong by a factor of nine. Every figure gets checked against a sample.

## The method

For every topic, the four questions of an after-action review, in this order and
never out of it:

1. **What did we intend?**
2. **What actually happened** — according to the evidence?
3. **Why was there a difference?**
4. **What do we keep, change or try** — and how will we measure it next run?

The after-action review comes from military training, where it replaced the
debrief-by-recollection. It suits this workshop for the same reason: it forces intent
and evidence onto the table before anyone explains anything.

---

## Before the conversation

About an hour each, separately.

- [ ] Regenerate the scorecard: `bash workshop-dev/feedback/evidence.sh`, and paste it
      into the evidence pack.
- [ ] Settle any evidence questions still open. For September: search #meeting-notes
      for `KITCRAFT-S2`; confirm whether session 4's six attendees included the
      facilitators.
- [ ] Re-read what we said we were trying to do: `workshop-dev/planning/outline.md`,
      the four `workshop-dev/sessions/S*-run-of-show.md` files, and
      `workshop-dev/slides/slide-objectives.md`.
- [ ] Read the evidence pack, the facilitator retrospective, and the session summaries
      in `workshop-dev/transcripts/`.
- [ ] Read a sample of participants' work directly — at least three inventories and
      three factories, chosen at random, not the best ones.
- [ ] **Write down, privately, the three gaps that surprised you most.** Bring them;
      do not share them until step 3. This stops the conversation anchoring on
      whoever speaks first.

## The conversation

Ninety minutes.

| # | Step | Time | Output |
|---|---|---|---|
| 1 | Agree what we were judging | 10 min | The outcome list, confirmed or amended |
| 2 | Walk the evidence | 20 min | Shared facts. No explanations yet |
| 3 | Explain the gaps | 30 min | A cause for each gap |
| 4 | Decide what to ask participants | 10 min | A short participant questionnaire |
| 5 | Decide what changes | 15 min | The decisions table |
| 6 | Instrument the next run | 5 min | What to capture so the next retro is easier |

### Step 1 — What we were judging

A proposed list. Amend it before using it; disagreeing here is useful.

| Outcome | What it means | Primary evidence |
|---|---|---|
| **Understanding** | Participants leave understanding the technology and the phase it is in | Participant answers; what their files say about kits and factories |
| **Legibility** | Participants can see and name their own kits | S1 inventories |
| **Independence** | Participants can make a kit run without them | S2 factory work |
| **Connection** | Participants' work connects to other people's | Related sections; S3 bridges |
| **Persistence** | The work outlives the sessions | Commits at +7 and +30 days |
| **Reproducibility** | Someone other than the authors could run this workshop from the repo | Whether the next run can be forked rather than rebuilt |

The last one applies the workshop's own idea to itself. The workshop is a factory: it
should run without its authors, bend to the people using it, and hand the next run
something it can build on. The recording failure was an independence failure in
exactly those terms — it depended on the author remembering.

### Step 2 — Walk the evidence

Go through the evidence pack top to bottom. The only permitted questions are about
what the evidence is: is this number right, is this source reliable, what does this
file actually contain? Anything beginning "because" waits for step 3.

### Step 3 — Explain the gaps

One topic at a time, the four questions each time. The topics below follow a
participant's path through the workshop, then turn to the machinery behind it.

---

## Topics and questions

### A. Getting in

*From registration to a first commit.*

**Look at:** registration count against the session 1 roster, the roster against the
participant folders, pre-work commits, time from joining to first commit.

- Which gate lost the most people: Discord, GitHub, or the harness? Can we tell, or
  only guess?
- The roster and the repository are different populations. Who attended and never
  committed, and who committed without attending — and does either group tell us
  something?
- A quarter did the pre-work. What would the pre-work email have to change to reach
  half?
- What is the smallest stack someone needs to take part at all? Could a person with no
  Discord account and no GitHub account still get the value?

### B. Different levels of expertise

*Participants ranged from never having installed GitHub to advanced programming.*

**Look at:** the spread of factory output, from ninety-one files to none; who reached
each stage of the funnel.

- Did people drop out because it was too hard, too easy, or for reasons unrelated to
  level? Which of those can the evidence distinguish?
- Did the workshop serve novices and experts at the same time, or split them?
- Would pairing — the apprenticeship model — have held the novices? Is there anyone
  from this run we would have paired, and with whom?
- Should the next run have separate tracks, or one track with different depths?

### C. The exercises and the harness

*The exercises were meant to be done by the participant's assistant, from their own
history.*

**Look at:** the eleven inventories, each classified by reading — derived from the
assistant's history, or produced by surveying the participant. The Related sections.
Log rows per session.

- How many inventories show the survey bug? What in the instruction let the harness
  read it as "ask the person"?
- Exercise 2 produced genuine complements. What made it work, and can the other
  exercises borrow that?
- Why is there no session 4 log row at all? Were the logs already failing, or did the
  final session simply not ask for one?
- About three in ten log rows were `async`. What were people doing between sessions, and
  should the design plan for it rather than tolerate it?

### D. Theory and doing

*Session 1 carried too much theory, and project choice got too little breakout time.*

**Look at:** the session 1 recording, timed — minutes of theory against minutes of
exercise. The breakout time actually spent on choosing a project.

- How long was the theory, measured rather than remembered?
- Which pieces of theory show up in what participants actually wrote? The ones that
  never appear in their files may not have landed.
- The examples carried much of the value. Would show-and-tell first, then theory, then
  more show-and-tell have changed what people built? What would we measure to find
  out?

### E. Whether the words landed

*Participants said "kit" was not clear enough.*

**Look at:** how participants use kit, factory and bridge in their own files, and
whether their bridges connect what we meant bridges to connect.

- Where did people use the words the way we meant them, and where did they not?
- Is the misunderstanding about *what a kit is*, or about *why the distinction
  matters*?
- The pre-product framing landed better than the definitions did. Should it come first?
- Which one sentence, given in the first ten minutes, would have fixed most of the
  confusion?

### F. Format, cadence and size

*Four sessions over two days, in a busy symposium week, sixteen in the first session.*

**Look at:** attendance across sessions, commits by day, the share of `async` log
rows.

- Would five days at one session a day change outcomes, or only attendance? What would
  tell us which?
- How much of the drop-off was the week rather than the workshop? The people who left
  are the only ones who can answer that.
- The retrospective proposes three facilitators to ten attendees. What does this run's
  evidence say about the ratio we had?
- Who from this run could facilitate the next one? The apprenticeship ladder needs
  names, not a principle.

### G. Capture

*Recording was a manual trigger, and two of four plenaries are missing.*

**Look at:** the recording coverage table; the recorder runbook; issue #6.

- Did session 2 turn up in #meeting-notes?
- Who owns capture next time, and what else will that person *not* be doing?
- Can recording start without anyone pressing anything?
- Which breakouts are worth recording, and is it worth provisioning the tokens for all
  of them?

### H. The repository as the hub

*The context tank, resources and glossary were valued, but nobody was shown them.*

**Look at:** what exists in the repo, and the fact that we cannot see whether anyone
read it.

- We cannot tell whether anyone opened the context tank. Is that acceptable, or should
  the next run be able to see it?
- What would make a participant find the resources without being told? What would make
  their assistant find them?
- Should the case studies — every demo from this run — live in the repo, and in what
  form?

### I. Persistence

*The thesis is that this workshop, unlike most, stays in the participants' codebases.*

**Look at:** commits at +7 and +30 days; forks; anyone reusing another participant's
kit.

- Is anyone still building? What distinguishes them from the people who stopped?
- Did any kit get reused by someone other than its author?
- If persistence is near zero at +30 days, is the thesis wrong, or is the workshop not
  yet set up to deliver it?

---

## Step 4 — What to ask participants

Only what the traces cannot answer. Five minutes, no more. Anonymous where the
question invites criticism.

**For everyone who took part:**

1. What did you leave with that you are still using?
2. Where did you get stuck, and did you get unstuck? How?
3. In one sentence, what is a kit? *(This tests clarity without asking whether it was
   clear — compare the answers with our definition.)*
4. What would you cut, and what did you want more of?
5. Would you come back and help facilitate the next run?
6. Is there anything you would rather we had not recorded or published?

**For the people who left before the end** — two questions only, since they are the
least likely to answer and the most informative:

1. What made you stop coming?
2. What would have kept you?

**Grounded in their own traces, where possible.** The strongest questions refer to what
a participant actually produced. For example: *"Your inventory lists two tools — did
your assistant find those, or did you tell it?"* That single question, asked of
everyone, measures the exercise 1 bug directly.

Question 6 is not optional. It is the follow-through on the promise made when the
sessions were recorded.

## Step 5 — Decide what changes

Every decision gets a row. A decision without a measure goes back to step 3.

| Finding | Evidence | Keep / change / try | How we will know next run | Owner |
|---|---|---|---|---|
| | | | | |

Aim for few. Three changes tested properly are worth more than ten that nobody can
evaluate.

## Step 6 — Instrument the next run

The cheapest improvement to the next retrospective is deciding now what the next run
records. From September's gaps:

- [ ] **Recording is automatic**, with a named capture owner who is not the lead
      facilitator.
- [ ] **Attendance is logged per session** — who was in the room, not recalled
      afterwards.
- [ ] **A private map from Discord name to GitHub username** is kept by the
      facilitators, so attendance and contribution can be reconciled. Never in the
      public repo.
- [ ] **Every log row carries a session tag**, and the final session asks for one.
- [ ] **The harness records which shared resources it read**, so the context tank and
      glossary stop being invisible.
- [ ] **The run-of-show carries timestamps**, so theory time can be measured from the
      recording.
- [ ] **The evidence script runs on a schedule** — end of run, +7 days, +30 days — so
      persistence is measured rather than guessed.

## The scorecard, carried from run to run

`evidence.sh` produces the same measures every run. The September baseline is in
`2026-09-evidence.md`. A future run is better if these move, not if the conversation
feels better:

- Retention from first session to last, stated with its definition
- Share of participants reaching each stage: inventory, Related, factory, bridge,
  show-and-tell
- Recording coverage, in sessions captured out of sessions run
- Share still committing at +30 days
