# Facilitator retrospective — September 2026 run

First round, dictated by Rafa shortly after the workshop. Four sessions over two
days, 21–22 September 2026, sixteen attendees in session one.

---

## What worked

**The framing.** Less focus on building a tool, more on understanding the technology
and the phase it is currently in. This was the right call and should survive into the
next version.

**The examples.** A large part of the value came from showing many different things
people had actually built — which raises the question of sequencing below.

**Participants took their own initiative.** People were inspired, picked up new
ideas, and used the time to develop their own skills. Around seven people were still
there in the final session, and all of them had gone off and built something of their
own. That is the outcome the workshop exists for.

**The inventory exercise** was valuable, even with the harness problem described
below.

**AI mediation through a central hub repository.** The core mechanism — everyone
working through their own assistant against one shared repo — worked.

**The context tank, the resources and the glossary.** These gave participants a brain
they could ask questions of. All three should be kept and improved.

**The participant template plus a folder per participant** worked well enough to keep.

**Having `workshop-dev/` at all** — slides, planning, registration, the website — was
worth it.

**The pre-product framing.** Describing this as the pre-product phase of the
technology, where tinkering explorations are neither platforms nor products, landed
reasonably well as a descriptor. It still needs sharpening.

---

## What did not work

### The stack is a gate, and we did not notice because we are inside it

Discord was a gate: not everyone has an account. GitHub was a second gate for the
same reason. The technology stack the Protocols for Business group uses internally is
not a stack other people have already adopted, and the same applies to the coding
tooling we assumed.

This cost real session time and it was avoidable.

### Expertise ranged far wider than the design assumed

Sixteen attendees spanning people who had never installed GitHub through to people
doing fairly advanced programming. The workshop needs to hold that spread
deliberately rather than pitching at a middle that serves nobody.

### Four sessions over two days was too compressed

Not only the timeline. The week itself was crowded — other workshops, other lectures,
a symposium running around it. A calmer week with **one session a day over five days**
would be better than four sessions crammed into two.

### Session one carried too much theory

And as a consequence the breakouts did not get enough time, particularly on the part
that matters most: **identifying the project each participant wants to do**. That
choice needs real time and did not get it.

### The harness was not integrated deeply enough

Participants were not sufficiently set up in the repo to start producing logs, which
was supposed to be automatic.

**And exercise one had a genuine bug.** The harness misread the instructions and
began running a *survey* of the participant — asking them what tools they used.
The intent was the opposite: the inventory should pull from the assistant's own
history to surface what the person has already built or already depends on. Direct
user input is not useless, but the whole point is to make the harness do the heavy
lifting. The instructions need rewriting so that cannot happen.

### Recording was a manual trigger, and half the sessions are missing

*Corrected 2026-09-23. The dictated retro counted one missed session. Checking the
recordings we have against the runbook shows two.*

| Session | Captured |
|---|---|
| 1 | Full plenary |
| 2 | One breakout only. No plenary recording found |
| 3 | Full plenary |
| 4 | Nothing |

This was the design, not bad luck. The recorder runbook
(`workshop-dev/sessions/recorder-runbook.md`) had recording started and stopped by
hand with typed `/record` and `/stop` commands, and the operator was the lead
facilitator, who had the most to do at exactly the moments those commands were due.

Three things in that design made misses close to certain:

- **More manual commands were due exactly when attention was busiest.** Sessions 2
  and 3 each needed four manual commands because of their breakouts, and the
  procedure around a breakout was six steps long, carried out while moving people
  between rooms. No plenary recording has been found for session 2, the first session
  that needed it.
- **The bot stops itself when the plenary channel empties**, and a breakout always
  empties it. So every breakout guaranteed a stop, and recovery depended on someone
  remembering to restart on reconvene.
- **Nothing flagged a missing recording.** The runbook's checks were a person looking
  for live transcript lines within thirty seconds, and a "Recording on" line posted to
  the channel. If that line never appears, nothing prompts anyone, and nobody was
  assigned to watch for it.

Session 4 needed a single start command and no breakout procedure, and was missed
anyway, at the end of a long second day. That is the other half of the lesson: however
simple a manual step is, if it depends on the lead facilitator remembering it
mid-session, it will eventually get dropped.

Breakouts made it worse. Recording a breakout room needs a separate bot token per
room, so the plan defaulted to plenary only, with at most one sample room. That is why
exactly one breakout survives.

And what was captured did not reach the repository on its own. It had to be dug out
of Discord by hand, mixed in with unrelated files.

**Before treating session 2 as lost:** the runbook sends live transcript lines to
#meeting-notes under the meeting name `KITCRAFT-S2`. Search there before concluding it
was never recorded.

**What the next run should do**

- **Take capture off the lead facilitator entirely.** In the three-facilitator shape
  proposed below, one of the two practitioner facilitators owns recording and nothing
  else during transitions.
- **Record by default rather than on command.** Start it automatically at session
  start, or at the least from a checklist the capture owner runs before anyone speaks.
- **Never let the plenary empty.** Keep the bot, and a person, in the main room
  through every breakout, so the auto-stop never fires.
- **Make a missing recording obvious.** A second person confirms "Recording on" within
  the first minute of every session and every reconvene.
- **Decide breakout recording in advance and provision for it**, one token per room,
  rather than recording whichever room happens to be possible.
- **Route recordings straight into the repository**, so nothing has to be dug out by
  hand.

The open decision is issue #6, which still describes plenary-only recording started by
hand as the plan. Revisit it with this in mind.

### Nobody explored the repository

The case studies, the resources and the glossary were there, and we never gave people
a reason or a moment to go and find them. That is a facilitation failure rather than
a content one.

### "Kit" was not clear enough

Participant feedback, and fair. The concept did not land cleanly enough for people to
act on it.

---

## The shape the next run should take

### Sequence

**Inventory → choose a project → build the project.**

And reconsider where the examples sit. The examples carried much of the value, so
the better order may be: **show and tell first, then theory, then more show and
tell.** Open with what people have actually built, rather than arriving at it.

### Size

Roughly **three facilitators to ten attendees** — one lead facilitator plus two
reasonably capable AI practitioners.

This is heavy on facilitation, and deliberately so. **Learning AI is apprenticeship-
shaped, not hard-skill-shaped.** It is not a set of exercises to be drilled the way a
spreadsheet course would be. The format should lean into that rather than fight it.

### Growing, without growing the room

Do not try to run this for thirty people in one room. Instead, an **apprenticeship
ladder**: attend the first workshop, then come back to the second as a facilitator.
That is how the facilitator-to-attendee ratio gets sustained as more people come
through.

---

## Changes to make to the repository

**Restructure `workshop-dev/` around runs.** Keep `workshop-dev/`, and put this run
inside it as its own folder — a September 2026 workshop directory holding the slides,
planning, registration and everything specific to it. The next run then starts by
forking what we learned here rather than inheriting an undifferentiated pile.

**Put the case studies in the repo.** All the demos from this run should be there.

**Refine and professionalise the glossary**, informed properly by Protocol Institute
theory, talks, lectures and essays rather than assembled ad hoc.

**Extend and harden the resources page.**

---

## Still open

Articulating what a kit is, well enough that a participant can recognise one of their
own within the first hour. The pre-product framing is part of the answer but not the
whole of it.
