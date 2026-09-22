---
name: critic-distiller
description: Distil a corpus of people arguing about art into a versioned critic vocabulary of terms carrying examples, anti-examples and refusals. Use when someone has a folder of criticism, reviews, interviews or transcripts and wants a reusable judge that can reject work, rather than a summary of it. Produces critic.md for a downstream prompt-writer or gate to consume.
---

## When to use

Someone hands you a folder of people writing or talking about art and wants the taste in it made operable. A summary tells you what the corpus says. This produces something that can refuse: a vocabulary where every term states what it rules out, in the corpus's own words, with the source attached.

Use it when the corpus has more than one voice in it. A single-author corpus works but yields no contested terms, which is where most of the information is.

## Steps

1. **Survey.** List every file, its source line (author, work, year), and its length. Name who is in the corpus and what they appear to be arguing about. Write this to `critic.log.md` before extracting anything. If a file has no attributable source, record it as dropped and do not read further into it.

2. **Extract, one pass per file.** For each file, pull candidate terms — words the writer is using as load-bearing judgement, not description. For each candidate record: the term, a verbatim quote using it approvingly (`ex:`), a verbatim quote using it to reject something (`anti-ex:`), and the source of each. Quote exactly; never paraphrase into the quote field. A candidate with no `anti-ex:` anywhere in the corpus is recorded in `critic.log.md` as dropped, with the reason `no refusal found`.

3. **Contest.** Cluster candidates across files by term. Where two sources use the same term to opposite ends, mark it `status: CONTESTED` and keep both positions, each under its named holder. Where the corpus agrees, mark it `status: SETTLED`. Do not average, reconcile or pick a winner.

4. **Refuse.** For each position, write one `refuses:` line: what a work would have to do for this holder to reject it, stated as a rule, derived only from the `anti-ex:` quote. This is the line a downstream gate acts on. If you cannot write it from the quote alone, drop the term and log it.

5. **Version and write.** Write `critic.md` with a `version:` integer, the corpus manifest, and an empty `## allegiance` block for the person to fill. Increment `version:` on every re-run; never overwrite an earlier `critic.md` in place — write alongside it.

## Constraints

- Every `ex:` and `anti-ex:` is a verbatim quote with a source. No quote, no term.
- Every term carries at least one `anti-ex:` and one `refuses:` line. A term that only says what is good is a glossary entry; drop it.
- Contested terms stay contested. The holder names stay attached.
- `critic.log.md` records every drop with its reason. The drops are a finding, not waste.
- Output is Markdown against the schema in `examples/output.md`, so a downstream agent can parse it.

## Do not

- Do not resolve a contested term, even when one side is obviously stronger. Resolution is the run-time allegiance of whoever uses the export.
- Do not write a quote you did not read in the corpus. If a position needs a quote the corpus does not contain, the position does not exist.
- Do not smooth the critic's voice or soften a refusal. The refusals are the product.
- Do not generate images, write image prompts, or judge a candidate work. All three are downstream.
- Do not read anything outside the corpus folder to fill a gap.
