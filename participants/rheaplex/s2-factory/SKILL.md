---
name: rheaplex-aesthetic-spec
description: Turn a pitch of two to four references ("X plus Y plus Z, not a copy") into a versioned aesthetic spec — layer table, named tokens, terms with examples and anti-examples — before building a site, deck, generative piece or other designed artefact. Use when someone describes how a thing should look or feel in references and adjectives rather than in type, colour and motion, or when an agent's output keeps drifting off an aesthetic nobody has written down.
---

## When to use

Someone can say what a thing should feel like, in references, but nothing is written down that an agent can build from or a person can judge against. Use it at the start of a piece, or partway through when output keeps drifting.

Two ways in: they already have references, or they do not. With none, settle the pitch first — generate a handful of variants along one axis, let them pick, write the pitch back from the winners — then start here.

## Steps

1. **Ask for the context.** Ask for, and write down verbatim: the references (two to four) or, if there are none, one axis to explore along; the medium; hard constraints; where `aesthetic-spec.md` should go. If a brief already holds these, read it and confirm what you found instead of asking again. Hands on: the context block.
2. **Get the pitch.** Write one line: the references joined by "plus", ending in a "not a copy" clause. Turn that clause into at least one do-not per reference in step 8. Hands on: one pitch line.
3. **Build the layer table.** Give every reference exactly one layer — for a visual medium: structure, density, mood; for other media, name the layers the medium actually has. One row per reference: layer, reference, what to take, what to leave. If two references want the same layer, ask which one wins; do not split a layer. Fewer references than layers: leave the spare layer empty and say in the table which reference the build should fall back to for it. More references than layers: name one further layer the medium actually has (for a visual medium, usually motion or material) or, if there is none, ask which reference to drop. Hands on: the layer table.
4. **Compile the tokens.** Turn each row into named tokens for this medium: type (one or more families), ground, ink, one signal colour, grid or canvas, motion. Give each category to the row whose "what to take" governs it, and label the token groups with that row's layer so the mapping is visible; motion goes to whichever row carries temporal behaviour. A category with nothing behind it in the table stays empty rather than being filled in. Every token traces to a row; if one does not, drop it or add the row. Derive each value from that row's "what to take", in the medium's own units, and mark every value provisional: first-run numbers are a starting point that step 7 corrects, so write them to be overruled, not defended. A constraint that has no value form (no build step, no framework) is not a token — carry it into Do not instead. Hands on: the token block, in the medium's own form (CSS variables, a prompt frame, a theme file).
5. **Write the terms** (generative or repeated work, or whenever the person names terms they want defined; otherwise skip and say so). One term per recurring feature: a definition of two to four sentences, two or three examples, two or three anti-examples, and a version number carried in its heading as `(v<n>)`. The definition text is what gets handed to a model, so write it for that reader. Hands on: the terms.
6. **Build one slice.** Build the smallest real thing the tokens describe — one page, one plate, one slide. Offer options where the tokens do not decide; keep every change small and reversible. Hands on: the slice, plus the questions the tokens could not answer.
7. **Review with the person.** They look at the slice and give the verdict; you do not. Record which references they cite while judging, and any token they overrule. Hands on: their verdicts and citations.
8. **Promote and emit.** A reference cited repeatedly in step 7 becomes a touchstone, with what it is a touchstone for. An overruled token is rewritten. A changed definition bumps the `(v<n>)` in its heading, and a changed spec bumps the file's own `Version:`. Write `aesthetic-spec.md` to the path from step 1, in this shape:

   ```markdown
   # <work> — aesthetic spec
   <!-- the phrases after each heading below say what goes in it; they are not text to emit -->

   ## Pitch            one line: references joined by "plus", ending in the not-a-copy clause
   ## Layers           the table from step 3: layer | reference | what to take | what to leave
   ## Tokens           the block from step 4, in the medium's form, each group labelled with its layer
   ## Terms            one `### <term> (v<n>)` each: definition, examples, anti-examples
   ## Touchstones      references cited during review, and what each is a touchstone for
   ## Do not           the not-a-copy clauses, the constraints with no value form, the review rules
   ## Changelog        `v<n> — <date> — what changed and why`, newest first

   Version: <n>
   ```

   Write it to the path from step 1. When the run is a demonstration rather than real work, write it beside the skill as `examples/output.md` with a first line saying which path it stands in for. On a first run there are no verdicts yet, so Touchstones reads "none yet — no review has happened", every token value is marked provisional, and the Changelog holds one line for v1. That file is what this factory exports.

## Constraints

- Verdicts come from the person, always. Record them in their words.
- Token values before a review are provisional. Say so in the spec, and never defend a provisional value against the person's eye.
- Version any term or spec you change, and record what changed in the spec's own Changelog, so the file stands alone without its repository.
- Honour the stated constraints (no build step, dependency limits, palette limits) even when a richer option exists.
- The spec is short enough to read in one sitting. If it is not, there are too many terms; move the rare ones out.

## Do not

- Do not clean up, repair or re-render output before the person sees it; the raw result is the evidence.
- Do not cherry-pick a best-of-N, or quietly regenerate until something passes.
- Do not assign verdicts, tags or scores yourself, and do not talk them out of a verdict.
- Do not pastiche a reference, reproduce a named artist's or designer's work, or treat a reference as a target to match.
- Do not carry another project's tokens, palette or house style into this spec. Any example shipped beside this skill shows the shape of the file, never its values.
- Do not add a build step, framework or dependency that the constraints did not ask for.
