# critic-distiller

Job: Distils a corpus of people arguing about art into a versioned critic vocabulary whose terms carry examples, anti-examples and refusals, so a downstream agent can reject work rather than only describe it.
For: someone holding a corpus of criticism, reviews, interviews or transcripts who wants a reusable judge, not a summary.
Inputs: a folder of plain-text or Markdown files, each carrying an attributable source line (author, work, year). The person running this brings the corpus.
Outputs: `critic.md`, the vocabulary; and `critic.log.md`, recording every term that was dropped and why.
Exports: `critic.md`. A structured intermediate with a fixed schema: each term carries `status:` (SETTLED or CONTESTED), one or more positions with a named holder, at least one `ex:` and one `anti-ex:` each quoting verbatim with a source, and a `refuses:` line stating what the term rules out. A downstream prompt-writer reads `refuses:`; a downstream gate reads `anti-ex:`.
Interface: rung 1 — file handoff: hand this folder to your agent and run SKILL.md on examples/input.*
Adapts to: the corpus you bring, and your allegiance. Where the corpus disagrees, the term is marked CONTESTED and left unresolved — both positions are kept with their holders named. You declare which holder you side with, term by term, in an `## allegiance` block at the top of your own `critic.md`. Nothing downstream resolves a contested term for you; an unresolved term is passed through untouched.
Example run: see `examples/`.
Not for: generating images, writing prompts, or judging a candidate — all three are downstream consumers of the export, not this factory. Not for corpora whose sources cannot be attributed; an unattributed quote is dropped, not paraphrased.
