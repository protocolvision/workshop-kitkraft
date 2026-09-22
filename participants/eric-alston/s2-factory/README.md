# Downloads Folder Triage

Job: Turn a multi-thousand-file, unsorted Downloads folder into a structure browsable by file type and topic — with duplicates found by content, not filename, and nothing deleted without a reversible safety net.
For: Someone with a large, chaotic Downloads folder, working with a coding-capable AI assistant that has local shell and file access.
Inputs: An unsorted folder tree of arbitrary file types (documents, images, audio, video, spreadsheets, archives).
Outputs: The same tree, reorganized into format-first top-level folders (e.g. Documents/Images/Audio/Video/Data/Spreadsheets/Archives) with topic subfolders inside each.
Exports: The reorganized tree, plus a plain-language decision log — what moved where and why, what was verified as a duplicate and how, what was flagged but deliberately left alone. The log is the intermediate: what another agent, or the person themself picking this back up later, needs to audit, resume, or extend the work without re-deriving it.
Interface: rung 1, a skill — hand this folder to your assistant and run SKILL.md against your own Downloads folder, or cold against `examples/input/`.
Adapts to: the person's own folder tree, their own topic/category boundaries (course codes, project names, client folders — whatever theirs are), and their own risk tolerance for delete-vs-flag-for-review. Risk tolerance and out-of-scope areas are supplied when SKILL.md step 1 asks; topic/category boundaries are confirmed in step 2, once the survey gives both sides something concrete to agree on.
Example run: see `examples/` — a synthetic 8-file Downloads folder, sorted, with the decision log it produced.
Not for: shared or multi-user drives where files belong to other people, anything needing a formal chain-of-custody beyond a move log, or sorting inside a git-tracked source repo (git already carries that history).
