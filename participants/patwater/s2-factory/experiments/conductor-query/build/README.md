Regenerates `../index.html` (the live demo Artifact) from the corpus in `../../corpus/`. Run in order, from inside this folder:

```
python3 build_corpus_json.py   # parses every corpus .md's front matter + body into corpus.json
python3 build_page.py          # injects corpus.json into shell.html, writes ../index.html
```

Run this whenever the corpus changes and the demo needs to reflect it. `index.html` is the file actually published as the Artifact — it is not hand-edited.
