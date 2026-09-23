# 2026-09-21 — Breakout: designing a job-search factory

A breakout from session 2, working one idea end to end: what an AI "factory" for
job searching would actually look like. This is the conversation the Sprungbrett
demo later came out of.

It is the only breakout from the whole workshop that was recorded. Session 2's
plenary was not captured, so this is the sole record of that session.

## The shape of the problem

The opening move was to treat a job search as a **closed loop** rather than a
pipeline. The inputs are a CV, a target role type, and — the part usually left out —
your network. Exporting contacts from LinkedIn and email lets you see where people
you already know have ended up: which employers, which industries, which kinds of
role. Much of the value sits in the **weak ties** rather than the close ones.

It closes because once you have narrowed to open roles or companies inside that
network, you go back and revise the CV against them. And revision is not only
editing: the output might be that to be credible for a target role you should spend
the next month on a specific project, and add that to the portfolio.

## MVP discipline

A warning raised early and repeatedly: the standing pitfall in AI projects is
over-optimising the design before anything exists. The minimum viable version is
roughly what CV-tailoring services already do. Finding better-matched companies, and
mining what former colleagues went on to do, are second and third iterations, not
part of the first build.

## Archetypes instead of listings

The design idea that carried the session. Rather than working listing by listing,
have the model surface a small number — around four — of **job archetypes** most
consistent with your CV and your network. Attach benchmarks to each: indicative pay,
example employers. Then let the human choose a direction, because that judgement is
the part worth keeping a person in.

Once an archetype is chosen, the system can be specific: here are roles you could
apply for directly; here are five people worth talking to first; here is where you
are under-qualified and what would close the gap.

This became the structure the later demo used.

## Two strategies in tension

The discussion surfaced a real disagreement about approach rather than a technical
one.

One position is volume: mass-apply, at least initially, and automate hard. The other
is selectivity, and it came with a method. Rather than chasing the roles everyone
chases, look for the **statistically improbable phrase** in your own CV — the unusual
thing — and project that through the space of advertised jobs to find the ones you
are uniquely qualified for. On that approach, mass-applying is actively wrong.

The reconciliation offered was a **human check** built into the protocol: the
factory gathers, narrows and drafts, and a person makes the selection before anything
is sent.

A three-stage mental model was offered alongside it: research and mapping, then
reduction to the roles actually worth pursuing, then reformatting the CV to lead with
what each one wants.

## Framing beats content

An illustration from the room that stuck: a candidate with a background porting games
to one platform applied broadly for games programming roles and got nothing. Once the
CV was reframed specifically around the porting speciality, offers followed. Identical
experience, different emphasis, matched to where the market was active.

Generalised, the factory's job is not only to filter what goes into a CV but to help
articulate the **simplest coherent version of your story** — the narrative that
explains why the next role follows from the last one. That story is what a human
interviewer needs, and it is harder to generate than a keyword match.

## Where the design gets uncomfortable

**AI detection.** If the factory writes the application, the application may be
filtered as machine-written before a human sees it. Detection tooling was named as a
live risk. The opposite failure was raised in the same breath: the model reading
applications first will discard anything boring, so bland-but-human is not safe
either.

**Data access.** How much can actually be extracted from LinkedIn is unresolved.
There may be no usable API; browser-control tooling could work; scraping tools were
raised with open uncertainty about whether they would hold up. The later demo settled
this by not fetching anything at all.

**Outreach.** One tactic discussed: find the hiring manager for a role, read their
recent posts, and draft an approach that responds to them — a way around the job
portal entirely. Noted here as what was discussed; the demo built afterwards
deliberately does not do this, and names roles and kinds of organisation rather than
individuals.

## What a good version would do

Two requirements, stated as the test: gather the context with **minimal effort from
the person**, and then say what the single highest-leverage action available right
now is. The worked example — if someone wants to move into robotics product
management and has never built a robot, the useful output is not a list of postings.
It is: build one, write a speculative product design for it, and put that in the CV.

The group agreed this was a good candidate to build quickly, and returned to the main
room.
