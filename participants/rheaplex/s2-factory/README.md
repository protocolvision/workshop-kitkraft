# Aesthetic spec from a pitch

Job: turns a two-to-four-reference pitch into a versioned aesthetic spec — layer table, named tokens, terms with examples and anti-examples — that an agent can build from and a person can judge against.
For: anyone who can say what a thing should feel like but not yet what its type, colour or motion should be: artists, designers, people briefing an agent to build a site, a deck or a generative piece.
Inputs: two to four references joined by "plus" and a "not a copy" clause, or one axis to explore variants along; the medium (web page, generative piece, deck, print); any hard constraints (no build step, palette limits, accessibility); where the spec file should go.
Outputs: `aesthetic-spec.md` at the path the person names (a demonstration run writes it beside the skill instead), version 1 on first run, bumped on every later change. Before a review its token values are provisional: the shape is right, the numbers are a starting point.
Exports: `aesthetic-spec.md` — pitch, layer table (which reference owns which layer, what to take, what to leave), named tokens, layout (specified or discovered), do-nots, and, for generative or repeated work, terms with examples and anti-examples. Another factory reads the tokens to build, and reads the terms as prompts.
Interface: rung 1, a skill (a folder of instructions, not a program) — hand this folder to your assistant and run SKILL.md on examples/input.md.
Adapts to: your references and "not a copy" clause, your medium and your constraints, given when SKILL.md step 1 asks or read from a brief you point it at; then your verdicts on the first slice, given when step 8 asks.
Example run: see `examples/` — two synthetic briefs, `input.md` (a web page) and `input-generative.md` (a generative series), each with the spec an agent produced from it cold, given only this README and SKILL.md.
Not for: choosing an aesthetic for you, judging output, or copying a named designer's or artist's work. It records the aesthetic you state and keeps the verdicts with you.
