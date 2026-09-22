---
name: downloads-folder-triage
description: Reorganizes a large, unsorted Downloads (or similar) folder into a format-and-topic structure, deduplicates by verified content rather than filename, and never deletes without a reversible step first. Use when someone hands you a folder with thousands of loose, unsorted files and asks you to clean it up, organize it, find duplicates, or free up space.
---

## When to use
The person has a folder — usually Downloads, but any similarly-accumulated folder works — with hundreds or thousands of files never sorted past the browser's save-here default. They want it organized, deduplicated, or trimmed, and they care about not losing anything in the process.

## Steps
1. **Scope it first.** Before touching anything, ask: what's explicitly out of scope (a folder they've already organized, a file type they don't want touched)? What should "delete" mean — OS Trash, a quarantine folder, or permanent? Take these as given context; don't assume.
2. **Survey before acting.** Inventory the tree — counts, sizes, extensions, existing subfolder structure. Propose a top-level taxonomy (format-first: Documents/Images/Audio/Video/Data/Spreadsheets/Archives, or whatever mirrors how the person already thinks about their files) with topic subfolders inside. Get it confirmed before moving a single file.
3. **Deduplicate by content, not filename.** Hash files first for exact matches. For same-named-but-different-hash files (the common case — re-downloads from journals, receipts, SSRN etc. are rarely byte-identical even when they're "the same" file), extract and diff the actual text content. A matching filename, even an exact one, is not evidence of identical content — verify before treating two files as duplicates. Two files can share a name and be completely unrelated (e.g. two toll statements for different billing periods saved under the same generic name).
4. **Never delete on the first pass.** Move confirmed duplicates and clearly-superseded items to a reversible quarantine folder. Only convert a quarantine into an actual delete when the person explicitly says so — and even then, prefer the OS Trash over a permanent delete, so there's still a way back.
5. **For "which version is final" calls, use a rule the person states, not a guess.** Draft sequences, CVs, syllabi — don't assume the newest file is the one to keep, or that older ones are safe to discard. Ask what "keep the final version" should mean for them (e.g. "keep the 3-4 versions that show the biggest actual change between them," or "keep every dated version"), then apply that rule consistently.
6. **Verify before merging anything ambiguous.** A same-named file might belong to a different person, or be a different document with a coincidentally similar title. Check content and, where relevant, explicit ownership markers (an author byline, a name in the body) before treating two files as interchangeable.
7. **Report before and after every irreversible or ambiguous step.** State exactly what will move, what will be deleted, and why, before doing it — especially for anything that isn't a simple, reversible move.

## Constraints
- Every delete goes through a reversible step first (Trash or an explicit quarantine folder) — never a direct, permanent remove.
- A "these are duplicates" claim must be backed by a hash match or a measured text-similarity comparison, not a matching filename alone.
- A folder holding identifiable records belonging to someone other than the person you're working with (student records, a colleague's files, anything with a name that isn't theirs) stays intact as its own unit — don't flatten it into general material.
- Confirm the taxonomy with the person before the first file moves; confirm again before any bulk delete.

## Do not
- Do not assume two files with the same name are the same file.
- Do not silently overwrite a file at a destination on a naming collision — rename to disambiguate, or route to quarantine, instead.
- Do not force an ambiguous file into a folder because it's "close enough" — flag it and ask instead.
- Do not treat "newer" as automatically "better" for draft/version sequences without the person's own rule for what counts as final.
