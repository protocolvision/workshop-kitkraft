# Log — append-only, written by the harness
| time | session | name | type | note |
|---|---|---|---|---|
| 2026-09-16T19:21:12Z | S1 | sachben91 | progress | inventory written by harness |
| 2026-09-21T16:29:40Z | S2 | sachben91 | progress | inventoried the Monstrous Times repo (11 scripts, session ritual, status.md runbook) for kit candidates; six surfaced, ranked |
| 2026-09-21T16:29:40Z | S2 | sachben91 | decision | kit chosen: mirror-sync, keeping canonical Markdown and a Substack mirror in step; rejected session rituals (mature, but no product gap) and the archive import chain (one-off, not recurring) |
| 2026-09-21T16:29:40Z | S2 | sachben91 | decision | Markdown stays the source of truth; pull exists to bring a stray platform edit back under it, and both-sides-changed is a refusal rather than a merge |
| 2026-09-21T16:29:40Z | S2 | sachben91 | memory | the platform failures are the kit: a save badge is not a save, verify out of band against the read API; a dead JS context is the publish success signal; never navigate for ~10s after an update |
| 2026-09-21T16:29:40Z | S2 | sachben91 | decision | kit generalised one notch to any platform with no write API, with Substack as the worked example; public-repo cut: no account ids, no tokens, no contributor names or handles |
| 2026-09-21T16:29:40Z | S2 | sachben91 | progress | SKILL.md, README.md and a synthetic examples/ pair written to participants/sachben91/s2-factory/ |
| 2026-09-22T03:00:55Z | S3 | sachben91 | progress | bridge to patwater: Watermentat's citation rule translated into a verified-span check in my own discovery agent's reranker; shipped as commit 4bfa31f in that project |
| 2026-09-22T03:00:55Z | S3 | sachben91 | decision | took the mechanism (verbatim span + substring check), rejected the enforcement (drop rows with no quote) — dropping would suppress the vague-copy companies a discovery agent exists to find |
| 2026-09-22T03:00:55Z | S3 | sachben91 | decision | sited the change in the fit reranker, not the discovery agent: discovery runs on server-side web search so the page text never reaches my process and a quote cannot be verified without a second fetch |
| 2026-09-22T03:00:55Z | S3 | sachben91 | unblock | a human supplied a fresh ANTHROPIC_API_KEY — the one in the target project was revoked (401) and no Claude call could run; nothing in the repo or on the machine could produce it |
| 2026-09-22T03:00:55Z | S3 | sachben91 | unblock | a human disambiguated which of patwater's two kits was meant by "Pat's RAG agent" |
| 2026-09-22T03:00:55Z | S3 | sachben91 | progress | first shadow run on three real postings: 2 verified, 0 fabricated, 1 null — and the null was the highest-scoring row, ranked on model priors rather than on anything the posting said |
| 2026-09-22T03:00:55Z | S3 | sachben91 | memory | target changed mid-bridge: patwater deprecated Polymetis and pushed rag-factory, generalized from Watermentat; bridge file header and an update section written against the pushed kit |
| 2026-09-22T03:00:55Z | S3 | sachben91 | question | answered patwater's open question (README: "Sachin RAG source could not be confirmed") — it is kit #2 in my S1 inventory, code local with no remote; and it may be a third typology: read-only corpus, write-back to the ranker |
