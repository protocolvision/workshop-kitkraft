# Bridge: sachben91 → patwater

Writer: sachben91 (only I edit this file)
Source: participants/sachben91/s2-factory/ (kit — mirror-sync)
Target: participants/patwater/s2-factory/ (kit — `rag-factory`), and its source, kit #6 "Watermentat" in participants/patwater/s1-inventory/inventory.md
Kind: kit-kit
Interface used: rung 1, file handoff (README then SKILL.md). **Note on timing:** when this bridge was built, Watermentat existed only as a seven-line inventory entry and patwater's pushed factory was Polymetis Protocol. Mid-session patwater deprecated Polymetis and pushed `rag-factory`, generalized from Watermentat itself. The work below was done against the inventory entry; the update at the end is written against the pushed kit.

## What my agent needed from the target
The mechanism behind one line: *"answers water-policy research questions with citations back to source documents."* Specifically — what counts as a citation, what happens when the model cannot produce one, and whether the check is mechanical or a matter of the model's word.

None of that is written down anywhere in the repo. The inventory entry names the feature; it does not encode it.

## What it found on its own
- The structural overlap: both kits are local retrieval systems with a reranking stage. Watermentat's reranker weights **authority and recency**; mine weights **taste** and learns from ✓/✗ verdicts. Each has what the other lacks.
- That the interesting part of a citation is not the reference but the **verifiability** — a rationale is generated prose and nothing falsifies it; a verbatim span either appears in the source or it does not.
- Where the idea could actually land. My discovery agent runs on server-side web search, so the page text never reaches my process and a quote cannot be checked without a second fetch. The fit reranker reads a job posting already in my database, so the check costs nothing. The feature moved to a different stage of the pipeline than the one I first assumed.
- That the target's own enforcement must **not** cross over. In a research assistant, a claim with no citation is dropped, correctly. In discovery, dropping a company whose website is vague suppresses exactly the under-described companies the agent exists to find. Kept the span and the substring check; discarded the drop.

## What a human had to supply (one line per unblock)
- The API key. `ANTHROPIC_API_KEY` in the target project had been revoked; auth failed 401 and no Claude call could run. The participant pasted a fresh key into `.env` — nothing in the repo or on the machine could have produced it.
- Which of two similar kits was meant, when the word "Pat's RAG agent" could have pointed at either Watermentat or the pushed Polymetis factory.

## Did it work
Yes, in code and on real data. `fit_reranker.py` now returns `fit_evidence` (a verbatim span, or null) and `fit_evidence_verified` (found / fabricated / nothing offered), verified by substring against the same truncated block the model was shown. Shadow mode by default: recorded, never displayed, so triage verdicts stay blind to grounding while the rate is measured.

First run, three real postings: **two verified, zero fabricated, one null — and the null was the highest-scoring row of the three.** That role's rationale read perfectly well and was reconstructed entirely from my stated preferences rather than from anything on the page. Under the old pipeline it was simply the top-ranked job.

## What a bridge turned out to be (one paragraph, in my words)
A bridge is not a pipe between two kits — nothing of Patrick's runs in my project and nothing of mine runs in his. What crossed was a **mechanism with its enforcement stripped off**, and the stripping was the work. Carried over literally, his rule would have quietly broken my kit in the direction I would have been least likely to notice: fewer results, all of them well-written, none of them the obscure finds the agent exists for. The useful unit of transfer turned out to be smaller than a kit and larger than a snippet — one idea, one sentence of constraint, and an explicit note about which half to leave behind. It also went both ways without either of us building anything: his kit has no learning from use, and the ✓/✗-to-anchors loop it is missing is the same thing rheaplex asked me for independently. The thing that made it possible was that his inventory described the *why* of the feature and not just its name.

## Thanks
To **Patrick Atwater** (`patwater`), whose Watermentat is the source of this. He built citation discipline for defensible water-policy research; it turned out to be the missing half of a job-search agent that had a feedback loop and no way to tell a quoted fact from a confident guess. The idea is credited in the commit message in the target project.

Log lines for this bridge go to `../LOG.md` (session S3).


## Update — after patwater pushed `rag-factory`

The target stopped being a description and became a kit while this bridge was being written. Two things follow.

**What the pushed kit confirms.** `rag-factory`'s read-only retrieval path independently contains the two ideas I had lifted from the inventory line: query expansion against a small glossary of recurring terms, and a strict citation rule that names the source rather than gesturing at it. Its README also generalizes an ingestion discipline I did not have and now want — stages that are independently runnable and resumable, and **a stable ID derived from something that will not change**, never a filename or a download URL. My run records join on a candidate id; that is exactly the join key this warns about getting wrong.

**Answering the open question in their README.** patwater looked for a "Sachin RAG skill" and found only `facilitator/sachin/s2-factory/` (adoption-diagnosis), which requires a cited line per claim but has no corpus and no retrieval. The kit they were told about is real but is not a factory in this repo: it is **kit #2, "Themed discovery agent," in `participants/sachben91/s1-inventory/inventory.md`** — Voyage `voyage-3-large` embeddings over a local SQLite/numpy vector cache, a taste-profile matcher, and a Claude reranker over the top K. The code is a Python project on my machine, git-versioned with no remote, so no SKILL.md exists for it here. The inventory entry is the whole public surface, which is precisely why it could not be confirmed from the factories.

**And it may be a third typology.** It fits neither published type cleanly. The corpus never changes from use, so it is not read-write — nothing the agent produces is appended to what future runs search. But it is not read-only either, because ✓/✗ verdicts are written back as positive and negative anchors that change both future queries and future ranking. The corpus is fixed; **the retriever is not**. If that is a real third shape — read-only corpus, write-back to the ranker — it is the one Watermentat is missing, since its reranker weights authority and recency and learns nothing from use. Offered as data for the typology, not as a request to change it.
