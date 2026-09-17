# Content alignment framework — AI Kitcraft deck

A slide is *aligned* when its objective, title, body, and the words spoken over it
all carry the same single claim, and a participant can tell at a glance what kind of
slide they are looking at and what they are expected to do.

Drawn from four established sources:

- **Assertion–evidence** (Michael Alley, Penn State): the title is a full declarative
  sentence stating one claim; the body is *evidence* for that claim, not a topic label
  followed by a bullet list.
- **Multimedia learning principles** (Richard Mayer): *signaling* (consistent cues for
  structure), *redundancy* (don't duplicate the spoken words on screen), *coherence*
  (nothing on the slide that doesn't serve the claim), *segmenting* (chunk into
  learner-paced units).
- **One idea per slide** (Duarte, Reynolds): if a slide needs "and" to describe its
  point, it is two slides.
- **Instructional sequencing** (Gagné): state the objective, present the material,
  give guided practice, give feedback — and make the transitions visible.

## The eight checks

Each check has a binary pass test. A slide fails alignment if any check fails.

**1. Objective entailment.**
The title asserts what the speaker-notes objective says the slide is for.
*Test:* read the objective, then the title. Same claim, no extra claim?

**2. Assertion, not label.**
The title is a complete sentence with a verb, in plain English.
*Test:* does it stand alone as a statement a participant could repeat?

**3. Body serves the title.**
Every block on the slide is evidence, example, or instruction for the title's claim.
*Test:* can you say "…which shows that <title>" after each block?

**4. No restatement.**
No element repeats another. In particular the eyebrow never paraphrases the title,
and the slide never reproduces the script.
*Test:* delete any element — is information actually lost?

**5. Consistent signalling.**
Every slide uses the same frame, so position tells you what a thing is:
- **top-left** — where you are (`Session N · <name>`, or `Exercise N · <name>`)
- **top-right** — what kind of slide it is, or how long the activity takes
- **title** — the claim
- **body** — the evidence, in grouped cards, never loose bullets
- **footer** — source or logistics, plus the slide number
*Test:* could a participant joining late orient themselves in under three seconds?

**6. Segmenting.**
At most six top-level groups; at most two levels of hierarchy.
*Test:* count the groups, not the sentences.

**7. Task slides are complete.**
There are two kinds of task slide, and each has its own required set.

*Build tasks* — anything done with an assistant, alone or in a pair — carry five parts
in this order: ask (title) → **how long** → **steps** → **the exact prompt to paste** →
**done when**.
*Test:* could a participant complete it with the facilitator muted?

*Discussion rounds* — spoken or typed answers, no artefact produced — carry three:
ask (title) → **how long** → **the sentence to finish or the options to choose from**.
They have no "done when", because the round is finished when the room has gone round;
adding a success criterion to a show-of-hands is false precision.
*Test:* does every participant know exactly what to say and for how long?

**8. Claims are attributable.**
Any figure, quotation, or research claim names its source in the footer.
*Test:* is there a name or URL a participant could follow afterwards?

## Review of the 55 slides, and what was changed

| Finding | Slides | Action |
| --- | --- | --- |
| Eyebrow did three different jobs — navigation, teaching-role, timing — so position stopped carrying meaning (check 5) | 33 content slides | Split into a fixed pair: session locator top-left, slide type top-right |
| Eyebrow restated the title (check 4) | 8, 23, 35, 44, 47, 51, 52, 53, 55 | Eyebrow is now the locator; the type label carries the signal |
| Build task had no success criterion, so "done" was unstated (check 7) | 6, 21, 28, 29, 34, 42, 48, 50 | Added a **Done when** card |
| Discussion rounds had no duration (check 7) | 17, 30, 43, 54 | Added duration to the top-right slot. These are the three-part kind and correctly carry no "done when" |
| Four awareness checks were structurally different from each other (check 5) | 17, 30, 43 | Made identical; 54 stays distinct as the final, retrospective round |
| Titles already pass checks 1–2 — they are the verbatim objective-aligned sentences from `slide-sequence.md` | all | Left unchanged by design |
| Terms were used before being defined, and one slide asked people to apply criteria given on the next slide (checks 1, 3) | 11 slides across S1–S3 | Reordered within sessions: kit defined before the word is used; the factory definition before the two examples; the intermediates principle before the Rao → Dixon example; the four-quadrant lens moved beside the awareness check that uses it |

### Known residual misalignments, for the author to resolve

These are content gaps in the source material, not layout problems:

- **Slide 10** — objective is "Show real examples of a kits" (plural) but the slide
  argues a single example has several entry points. One of the two is wrong.
- **Slide 48** — objective asks how the bridge "evolved"; the title asks for one word.
  A single word cannot answer an evolution question.
- **Slides 1–2** — no objective exists in `slide-objectives.md`; both were added.
