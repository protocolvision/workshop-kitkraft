# eric-alston

## Kits I use
### 1. Downloads Folder Triage
- What it is: Claude Code plus a generated Python script — file-type folders, keyword-based topic sub-folders, content-hash dedup (not just name/size matching), and junk-file cleanup, run behind upfront scoping questions and a dry-run before anything is touched.
- The job it does: Turns a multi-thousand-file, unsorted Downloads folder into a structure browsable by file type and topic, without risking real files.
- How often I use it: just started today
- What I adapted: caught and fixed a regex word-boundary bug live during the run — `\b` doesn't create a boundary between adjacent letters or across an underscore, so filenames like "EAlston..." and "article_consolidated_draft..." were silently misfiled into the generic catch-all bucket until the pattern was corrected.
- Who else uses it: shared more widely
- Where it lives: this session's generated script, not yet packaged as a saved skill

## Kit to convert
Downloads Folder Triage — it's the one actively being built and refined in this session, so it's the natural candidate to turn into a reusable Session 2 factory.

## Related
<two kits in the room that could complement yours; written in Session 1's second exercise>

## Posture
Partnership
