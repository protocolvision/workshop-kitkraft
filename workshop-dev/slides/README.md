# Slides

The AI Kitcraft deck: 57 slides across four sessions, plus the files it was built from.

## The deck

| File | What it is |
|---|---|
| `ai-kitcraft-slides.html` | The deck itself, and the source of truth. One self-contained file: open it in a browser, no server needed. Arrow keys to navigate, `S` for speaker notes, print to PDF. |
| `ai-kitcraft-slides-editable.pptx` | For editing in Google Slides. Real text boxes on five slide layouts, so copy can be changed and the look adjusted from Edit theme. Visuals are simplified: cards and grids flatten to text. |
| `speaker-notes.md` | All 57 notes as text, each with its objective and script. |
| `content-alignment-framework.md` | The eight checks used to review the deck, and what the review changed. |
| *Image-based `.pptx`* | Looks exactly like the HTML, one image per slide, text not editable. **Not in the repo** because it is 19 MB and everyone clones this. Download it from the [latest release](https://github.com/protocolvision/workshop-kitkraft/releases). |

| Session | Slides |
|---|---|
| Opening | 1–2 |
| 1 — Kits | 3–20 |
| 2 — Factories | 21–33 |
| 3 — Bridges | 34–47 |
| 4 — Show and tell | 48–57 |

Each session runs title → context → opening exercise → theory → session exercise → closing.

**Editing.** Edit the HTML and re-export the PowerPoint files from it, not the other way round. Speaker notes live on each slide in the HTML, so they travel with a slide when it moves. Fonts are Instrument Serif (titles), Lora (body) and Outfit (labels), all on Google Fonts. Colours: paper `#F9F8F5`, ink `#2C2C2A`, secondary `#5F5E5A`, cobalt `#0064FF`, deep green `#085041`, green tint `#E1F5EE`.

**Still to fill.** Four slides carry empty image slots for screenshots not yet taken: the `participants/` tree on slide 33, and three files on slide 49. Drag an image onto a slot in the HTML.

## What the deck was built from

- `slide-sequence.md` — what each slide leaves people with. Slide titles come from here.
- `slide-objectives.md` — what each slide is for. Speaker notes open with the matching objective.
- `glossary.md` — plain definitions of every term, for participants.
- `claude-chat-prompt.md` — a ready-to-paste prompt that rebuilds a Google-Slides-safe skeleton from the two lists above.

Both lists hold the same 53 entries line for line; the deck adds four slides (an opening pair and section breaks). Source material for the slides is in `../context-tank/`.
