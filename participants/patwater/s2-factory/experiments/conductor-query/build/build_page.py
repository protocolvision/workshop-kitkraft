with open("shell.html", encoding="utf-8") as f:
    shell = f.read()
with open("corpus.json", encoding="utf-8") as f:
    corpus = f.read()
out = shell.replace("__CORPUS_JSON__", corpus)
with open("../index.html", "w", encoding="utf-8") as f:
    f.write(out)
print("wrote", len(out), "chars to index.html")
