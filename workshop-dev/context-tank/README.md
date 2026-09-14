# Context tank

Everything the workshop draws on, in one place, so whoever builds a slide or answers a question in the room can find the source.

- `resources.md` — the master list: annotated resources for every session, the standards table, the organizational history behind Session 2, and the bibliography. Add new sources here first, with one line on what they contribute and which session uses them.
- Source material — notes, excerpts, diagrams, and openly licensed documents added while developing slides go directly in this folder, named so they sort by topic (for example `s2-shafts-to-wires-notes.md`).
- `local/` — **not committed.** This repo is public, so committing someone else's paper or book republishes it. Put PDFs and other material that is not licensed for redistribution in `local/`; git ignores everything in it except its README. Cite them in `resources.md` so others can find their own copy.

If a document is openly licensed (for example Creative Commons, or published by the author for free redistribution), it can live in the main folder. When unsure, use `local/`.
