# Decision log — examples/input/ triage (synthetic, 8 files)

This is the log SKILL.md produces for every run: what moved where, what was
checked before calling something a duplicate, and what was deliberately left
for the person to decide. Real runs also open with step 1 (scope questions)
asked directly to the person; this synthetic run states the defaults used
in their place, since there's no one to ask.

## Assumed scope (would normally be asked, step 1)
- "Delete" means quarantine only for this worked example — nothing here
  gets removed outright, everything questionable goes to `_Quarantine/`.
- Topic taxonomy: Financial & Receipts, Academic Papers & Readings,
  Own Drafts, Teaching & Syllabi, Images — inferred from the file names
  in this small example; a real run confirms this list with the person
  before moving anything.

## Survey (step 2)
8 files, all plain text in this synthetic set (standing in for the mixed
PDF/docx/image files a real Downloads folder would have).

## Duplicate check (step 3) — content, not filename
- `Invoice - Widget Co.txt` and `Invoice - Widget Co (1).txt`: identical
  content (same invoice #4471, date, total). **Exact duplicate** — the
  "(1)" copy is the repeat-download pattern.
- `Invoice - Widget Co (2).txt`: same naming pattern as the two above, but
  **different content** — invoice #4502, a different date, a different
  amount. This is a separate invoice that happens to share a name prefix,
  not a duplicate. Filename similarity alone would have called this a
  triple-duplicate; checking content caught the difference.

## What moved where (step 2/4)
| File | Destination | Why |
|---|---|---|
| Invoice - Widget Co.txt | Documents/Financial & Receipts/ | receipt |
| Invoice - Widget Co (2).txt | Documents/Financial & Receipts/ | different receipt, same folder |
| Invoice - Widget Co (1).txt | _Quarantine/ | confirmed exact duplicate of the file above |
| Reading - Smith 2019 Institutions.txt | Documents/Academic Papers & Readings/ | someone else's published work |
| My Draft - Governance Paper v1.txt | Documents/Own Drafts/ | the person's own draft |
| My Draft - Governance Paper v3.txt | Documents/Own Drafts/ | the person's own draft, later version |
| Course Syllabus - Econ 101.txt | Documents/Teaching & Syllabi/ | course material |
| Random Photo.txt | Images/ | format-first bucket |

## Left alone on purpose (step 5)
`My Draft - Governance Paper v1.txt` and `v3.txt` are both kept, not
collapsed into "just keep the newest." v3 is a substantial rewrite of v1
(different structure, new sections), not a trivial resave — and no rule
for "what counts as final" was given in this run. A real run asks the
person that question directly (e.g. "keep every version" vs. "keep the
N versions with the biggest actual change") rather than guessing.

## Result
7 files sorted into topic folders under Documents/ and Images/; 1 file
quarantined as a confirmed exact duplicate; 0 files deleted.
