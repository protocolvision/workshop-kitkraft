# Example output — `mirror-sync` on the three pieces above

## 1. Drift report (the export)

Built the site first; fetched three posts with a browser UA, paced.

| slug | post id | state | what differs |
|---|---|---|---|
| the-rule-of-the-second-door | 148392011 | **site ahead** | last paragraph rewritten in the repo; post still carries the old sentence |
| the-tessellated-hour | 148392044 | **platform ahead** | one word: `recieved` → `received`, fixed in the Substack editor |
| nine-kinds-of-weather | 148392098 | **both ahead** | repo: opening line rewritten · platform: a subscribe widget inserted mid-story |

## 2. `push` — the-rule-of-the-second-door

- Located the target paragraph by exact match: **1 node matched**. (Zero or two would have aborted here.)
- Applied the replacement as a transaction on the editor's document model.
- Triggered the update; the context died with `Inspected target navigated or closed` — the success signal. Held for 12s without navigating.
- **Verified against `/api/v1/posts/by-id/148392011`:** body now normalises to `d77c…30f`, matches the built site. Publish date still `2026-03-04`, byline unchanged.
- Sidecar updated to `d77c…30f` — written only after that verification.

State: **in sync**.

## 3. `pull` — the-tessellated-hour

Converted the live body to Markdown into a scratch file outside the article tree. Proposed diff, for approval — nothing has been written to the repo:

```diff
- The letter he recieved was dated three years after it arrived.
+ The letter he received was dated three years after it arrived.
```

One line, no structural change from the HTML round trip. Frontmatter untouched. **Awaiting approval.**

## 4. `nine-kinds-of-weather` — refused

Both sides moved. Not merged, not guessed at. The two changes are not the same kind of thing and only a human can say what the post should end up containing:

- repo: `It rained in nine ways that year.` → `It rained in nine languages that year.`
- platform: a subscribe widget inserted between paragraphs four and five.

Likely resolution — keep the repo's line, drop the widget, `push` — but that is a decision, not an inference.

## 5. Human steps this run surfaced, and did not attempt

- **Twelve bylines** are waiting on a team invitation being accepted. The kit does not touch bylines: an author must hold the Byline role first, and the editor's own picker only sends a guest invite. Invite → accept → then script.
- **Three art-credit removals** are ordinary body edits and belong in a `push` once the repo's Markdown drops the credit paragraph — the repo moves first, always.
