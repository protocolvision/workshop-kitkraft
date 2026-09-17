# Prompt: build the slide skeleton in Claude Chat

Before you paste: in Claude Chat settings, turn on **Code execution and file creation** so Claude can make a downloadable `.pptx`. If web fetch is off, attach the six files listed under **Context** instead of relying on the links; the repo is public, so the links work either way.

Paste everything in the block below as your first message.

```
I'm building the slide deck for AI Kitcraft, a two-day hands-on workshop at the 2026 Protocol Symposium. I want a 16:9 PowerPoint skeleton I will import into Google Slides and finish there. Please produce a downloadable .pptx.

## Context
Read these six files first. They are public on GitHub:
1. What each slide is for: https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/slides/slide-objectives.md
2. What each slide leaves people with: https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/slides/slide-sequence.md
3–6. The detailed outline for each session, with on-screen text, a sample script and references per slide:
https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/sessions/S1-slides.md
https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/sessions/S2-slides.md
https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/sessions/S3-slides.md
https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/sessions/S4-slides.md
Plain-language definitions of every term, if you need one: https://raw.githubusercontent.com/protocolvision/workshop-kitkraft/main/workshop-dev/slides/glossary.md
The repo itself, for anything else: https://github.com/protocolvision/workshop-kitkraft

Files 1 and 2 are the source of truth for the slide order. They list the same 53 slides, line for line, in four sessions separated by "---". If you cannot read files 1 and 2, stop and tell me, and I will attach them. Do not build from memory or guess the content.

## What goes on each slide
- One slide per bullet in file 2, in the same order, plus a section-break slide before each session. That is 57 slides.
- Slide title: the bullet from file 2, word for word.
- Body: the "On screen" lines from the matching slide in files 3–6. The session outlines have fewer slides than files 1 and 2, so match them by meaning, not by position. If nothing matches, put a short placeholder in square brackets, like [body to write], and never invent content.
- Speaker notes: first the line "Objective:" followed by the matching bullet from file 1, then a blank line, then the "Say" script from files 3–6 where one matches.
- Every session follows the same rhythm: title, context, opening exercise, theory, session exercise, closing. Use the layout that fits each slide's role.

## Design
Build it on the slide master with these five layouts, and apply the layouts rather than styling slides one by one, so I can change the look in Google Slides later from Edit theme:
1. Title: session title large, a one-line subtitle.
2. Section break: full-bleed deep green background, white text.
3. Title and body: title with up to five short lines.
4. Exercise: title, plus the instruction in a tinted box, clearly marked as something participants do.
5. Closing: title and one short line.

Fonts (all on Google Fonts, so Google Slides has them): Instrument Serif for titles, Lora for body text, Outfit for small labels such as "Session 2" or "Exercise".

Colours, from the Protocol Institute brand kit:
- Background: paper #F9F8F5
- Title and body text: #2C2C2A; secondary text: #5F5E5A
- Accent and small labels: cobalt #0064FF
- Section breaks: deep green #085041 background, white #FFFFFF text
- Exercise box: green tint #E1F5EE with deep green #085041 text

Keep it Google Slides safe: plain text boxes and solid fills only. No gradients, shadows, transparency effects, SmartArt, embedded fonts or images. Leave room on the right of content slides for an image I may add later.

## When you're done
1. Give me the .pptx to download.
2. Tell me the slide count per session.
3. List every slide where the body or script is a placeholder, so I know what to write.
Do not add slides, reorder them, or rewrite any title.
```

## After you download it

Upload the file to Google Drive, right-click it and choose **Open with → Google Slides**, then **File → Save as Google Slides**. Open **Slide → Edit theme** and check the five layouts came through; change fonts or colours there so the whole deck updates at once.
