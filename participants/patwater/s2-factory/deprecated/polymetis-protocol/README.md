> **Deprecated within this workshop's S2 slot.** Superseded by `participants/patwater/s2-factory/` (rag-factory). Kept here as-is, unmodified, and reused as the Type B/C worked example in the rag-factory's typology.

# Polymetis Protocol

Job: turn a chosen practice mode — daily reflection, a one-question character check-in, or a rhetoric writing drill — into a structured session that pulls a verbatim anchor from the user's own personal knowledge log and logs the result back into it.
For: anyone who keeps an append-only, Karpathy-style personal log (Kindle highlights, journal entries, a growing corpus of reflections) and wants a structured practice session run against it.
Inputs: which mode to run (practice / character / rhetoric), chosen by the person each time; their own personal knowledge log to pull anchors and quotes from; for rhetoric mode, a reference list of rhetorical devices (e.g. excerpts from a chosen writing-craft text).
Outputs: a logged entry — the prompt plus the person's answer (or the question left unanswered), or for rhetoric mode a completed writing sample against the prompt — appended to the person's own log, in its existing format.
Exports: one logged practice entry (prompt + answer, or a completed exercise) in the shape the person's own log already uses, ready for a downstream factory (a review pass, a search index, a "what changed since last time" digest) to consume.
Interface: rung 1 — file handoff: hand this folder to your agent and run SKILL.md on examples/input.*
Adapts to: the mode the person picks, the location and format of their own personal knowledge log, and — for rhetoric mode — whichever writing-craft reference they supply; all given when SKILL.md step 1 and 2 ask.
Example run: see `examples/` — a synthetic log excerpt and mode choice as `input.md`, the resulting anchor, question and logged entry as `output.md`.
Not for: quantitative practice (Fermi estimation, Project Euler-style problems) — see Future development below; picking the mode automatically; inventing quotes or examples not present in the log.

## Future development
Quantitative estimation/practice modes belong in the same personal-development bucket but are out of scope for this factory today: Fermi-style estimation drills (see the Yak Collective's Fermi Gym, https://www.yakcollective.org/study-groups/fermi-gym) and Project Euler problems. A later rung could add either as a fourth mode alongside practice/character/rhetoric.

## Note on the underlying assumption
This factory presupposes the person already keeps something like Andrej Karpathy's append-only personal log (https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — one growing file of notes, reread and refactored over time, rather than scattered documents. It reads from and writes back to that log; it does not create one.
