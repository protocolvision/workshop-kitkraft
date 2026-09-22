---
name: conductor-query
description: Answers a question against the Vince's VR World synthetic corpus with a tier-and-recency-ranked, citation-required answer, then records a ✓/✗ verdict that reweights future queries in the same session. Use when asked to query, search, or ask the corpus/Conductor a question, or to test rag-factory's typology against its synthetic fixture.
---

## When to use
The person has a question about the Vince's VR World corpus (`../corpus/stockton-chronicles/vince-vr-world/`) — canon, a line's world-bible, an NPC, a session, or a rumor — and wants an answer grounded in that corpus, with citations checked rather than assumed, and with their feedback actually changing what the tool surfaces next time.

## Steps

1. **Load state.** Read `data/verdicts.json`. If it doesn't exist or is empty, treat every doc's verdict weight as neutral (1.0). Read every `.md` file under `../corpus/stockton-chronicles/vince-vr-world/` and its front matter (`id`, `doc_type`, `line`, `canon_tier`, `derived_from`, `created`, `summary`, and `speculative` where present).

2. **Ask the question**, if not already given.

3. **Rank candidates.** For every doc, score it on:
   - Keyword relevance: does the question's language actually appear in the doc's title, summary, or body — not just topical similarity.
   - Tier weight: tier 1–2 strongly outranks tier 4; tier 3 sits between and favors recency among near-equal matches.
   - Recency: within a tier, a more recent `created` date wins on freshness. Recency must never let a tier-4 doc outrank a tier-1/2 doc on the same fact — tier dominates recency, not the other way around.
   - Verdict weight from `data/verdicts.json`: a prior ✓ on a doc boosts it; a prior ✗ suppresses it, for this and future queries.

   Surface the top few candidates across tiers, not just the single top match — if a tier-4 rumor is relevant, it should still appear, clearly labeled, not hidden.

4. **Check citations.** For each claim the answer will make, locate the exact verbatim sentence in its source doc that supports it. Never paraphrase a claim into a citation. If the best support for a claim is a tier-4 doc and nothing in tier 1–3 corroborates it, say so in the answer rather than presenting it as settled fact — check whether a tier-1/2 doc contradicts it (the corpus plants at least one such contradiction per line) and surface that contradiction if found.

5. **Answer**, citing every substantive claim by doc id and tier, with the verbatim supporting sentence, and explicitly flagging any claim that rests only on an unverified or contradicted tier-4 source.

6. **Ask for a verdict.** After the answer, ask the person to mark it ✓ or ✗ (per cited doc, if they cite more than one). Write the result to `data/verdicts.json`: `{"<doc_id>": {"weight": <float>, "verdicts": [{"mark": "up"|"down", "at": "<ISO-8601>"}]}}`. A ✓ multiplies the doc's weight up (cap 2.0); a ✗ multiplies it down (floor 0.3). Never delete a prior verdict entry — append to its `verdicts` list.

7. **Loop** to step 2 for the next question, using the updated weights.

## Constraints
- Tier always dominates recency, and both are always checked before verdict weight is allowed to overrule them — a verdict can boost or suppress within reason, but should not be allowed alone to rank a tier-4 doc above tier-1 canon on a directly contradicted fact. If a verdict pressure would do that, answer it but note the tension explicitly rather than silently complying.
- Every claim needs a verbatim-quoted source. No citation, no claim.
- `data/verdicts.json` is append-only in spirit: existing verdict history is never deleted, only added to.

## Do not
- Do not invent a doc, a quote, or a citation not actually present in `../corpus/`.
- Do not treat a tier-4 rumor as settled fact, even if it's the only match found.
- Do not let a single ✗ permanently exclude a doc from ever surfacing again — floor the suppression, don't zero it out.
- Do not answer questions outside the corpus's scope by inventing corpus content to cover the gap; say the corpus doesn't cover it.
