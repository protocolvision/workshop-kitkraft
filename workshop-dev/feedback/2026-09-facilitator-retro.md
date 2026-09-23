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

### Capture failed in several places

- The final session discussion was not recorded at all.
- OpenRecapper was not set up per breakout room, so only one breakout was captured.
- Discord recordings do not reach the repository on their own. They have to be fished
  out of Discord by hand, mixed in with unrelated files.

Every room needs a recorder, set up before the session rather than during it. Getting
Discord recordings to stream or upload into the repo automatically would remove the
whole problem.

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
