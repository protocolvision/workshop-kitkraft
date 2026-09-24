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

---

## Sachin's notes

*Added 2026-09-24. Sachin's own post-workshop notes, kept separate from Rafa's
dictated retro above.*

The main lesson from the workshop is that there are currently too many concepts competing for attention. The underlying ideas are strong, but the workshop asks participants to absorb too much new vocabulary before they can start working with the material. The next version should therefore be less about introducing a complete conceptual system and more about finding one strong frame through which the other ideas become intuitive.

### 1. Reduce the number of concepts

The workshop currently contains too many conceptual objects at once: factories, bridges, engineered arguments, records, supervision, data aging, intelligence, and so on.

“Bridges” in particular may have been one metaphor too many. Even if it is conceptually useful, introducing another named object increases the amount of internal vocabulary participants have to remember.

The next version should probably have:

* one dominant metaphor;
* a very small number of supporting concepts;
* ordinary language wherever a specialized term is not doing necessary work.

A useful test is whether participants can explain the workshop afterward without having to reproduce our vocabulary. If they understand the phenomenon but describe it in their own words, that is probably a success.

### 2. Keep the factory idea, but improve the metaphor

“Factory” seems to be a productive metaphor because it immediately suggests work, production, division of labor, inputs and outputs.

The problem is that people already have a very specific image of a factory: an industrial building containing machines, workers, assembly lines, raw materials, and standardized products. That imagery can push people toward thinking about AI primarily as automation.

What we actually want is closer to a factory for information.

The central question might be:

**What does an organization look like when intelligence itself becomes information-producing work?**

The metaphor needs to accommodate:

* records;
* supervision;
* information production;
* information passing between people and machines;
* data becoming stale or losing value over time;
* checking and verification;
* accumulated organizational knowledge;
* different kinds of human and machine competence.

The emphasis should therefore move away from “AI is a machine in the factory” and toward the organization itself becoming an information-production system.

The factory metaphor could potentially become something closer to a **records factory**, **information works**, or **intelligence works**: a place where information is produced, transformed, checked, stored, supervised, and eventually becomes obsolete.

### 3. Make records central

One promising way of tying several ideas together is through the concept of the record.

AI work constantly produces records: drafts, summaries, analyses, decisions, prompts, evaluations, tickets, documents, conversations, code, and database entries.

These records then become inputs into future work.

That gives us a relatively concrete cycle:

**work → record → reuse → supervision → aging**

A record is produced through some act of intelligence. Someone else—or an AI system—later encounters that record and has to decide whether it can be trusted, whether it remains current, and what can be done with it.

This might give us a much cleaner way of introducing ideas like memory, provenance, verification, supervision, and data aging without treating each as a separate concept.

### 4. Treat intelligence as information-producing work

Another useful simplification is to describe intelligence operationally rather than philosophically.

For the purposes of the workshop, intelligence can simply mean something like:

**work that produces useful information for subsequent action.**

That immediately makes human and machine work comparable without claiming that they are identical.

A researcher produces information.
A manager produces information.
A salesperson produces information.
A model produces information.

The interesting organizational question then becomes what happens to those outputs:

Who uses them?
Who checks them?
How long do they remain useful?
What records are created?
Which outputs require human judgment?
Which can safely become inputs into another automated process?

This seems much closer to the practical problem the workshop is trying to illuminate.

### 5. Start from clearly defined competencies

The exercises work better when participants understand what each person or agent in the scenario is actually capable of doing.

Rather than beginning with an abstract system and asking people to invent roles inside it, give them a setting in which the competencies are already legible.

For example:

* this person can make a particular kind of judgment;
* this model can classify or generate a particular kind of information;
* this database contains a particular set of records;
* this supervisor can verify certain outputs but not others.

Once competencies are explicit, participants can reason about coordination.

This also makes failures more interesting. The problem is no longer vaguely “AI made a mistake.” It becomes a question of whether a task was assigned to an agent without the competence, information, authority, or supervision required to perform it.

That should make the workshop feel much less abstract.

### 6. Supervision should be built into the model

Supervision should probably be presented as an ordinary part of information production rather than as a special “AI safety” layer added afterward.

Organizations already contain supervisory relationships because information-producing work has uncertain quality.

AI increases the amount of information that can be produced, which means that the scarce resource may increasingly become the ability to:

* inspect;
* verify;
* contextualize;
* authorize;
* correct;
* decide when something no longer deserves trust.

In that sense, supervision becomes a central production function.

This may also provide a natural bridge into questions of AI safety without requiring participants to first adopt a large theoretical framework.

### 7. Develop the data-aging idea

The idea that information ages seems particularly useful.

Not every record remains equally valuable indefinitely.

Some information:

* expires quickly;
* becomes less reliable as the surrounding world changes;
* remains historically useful but ceases to be operationally useful;
* requires periodic verification;
* gains authority simply because it has been repeatedly copied.

AI systems make this particularly important because old records can continue circulating and producing new records.

The workshop could ask participants to distinguish between:

* fresh information;
* verified information;
* stale information;
* inherited information;
* information whose provenance is unclear.

This gives the workshop a temporal dimension and connects naturally to records and supervision.

### 8. Add an explicit safety component

There should be some kind of safety audio or short safety module.

Part of this is substantive, but it is also important for making the workshop legible and marketable to a broader audience.

People encountering an AI workshop will reasonably want to know where questions of risk, oversight, responsibility, and failure enter the picture.

Rather than making safety an entirely separate theoretical framework, the safety component could connect directly to the workshop's central mechanics:

**What information are you willing to let this system produce? Who checks it? What happens if it is wrong? How long does that information persist? What decisions can subsequently be made from it?**

That would make safety feel native to the workshop rather than appended to it.

### 9. Make the workshop outward-facing

A larger positioning lesson is that the workshop should make sense to people who have never encountered our existing vocabulary.

The goal should not be to teach participants our conceptual language. The goal should be to give them a useful way of seeing something happening inside their own organizations.

That means moving from:

**“Here is our framework; learn its concepts.”**

toward:

**“Here is a problem you already have. Let's give you a way of seeing it.”**

Our vocabulary can remain useful internally for developing the workshop, but much of it may not need to appear in the workshop itself.

The strongest version will probably feel obvious in retrospect: participants recognize records, supervision, aging information, differing competencies, and information-producing work because these are already features of their organizations.

The workshop provides the structure that lets them see how AI changes the relationships between them.

### Emerging direction

The next iteration could potentially be organized around one basic proposition:

**An organization is an information-production system. AI changes who can produce information, how much can be produced, and therefore what kinds of records, supervision, and coordination the organization needs.**

From there, most of the other ideas can become consequences rather than independent concepts.

That feels like a simpler and more outward-facing foundation for the workshop.
