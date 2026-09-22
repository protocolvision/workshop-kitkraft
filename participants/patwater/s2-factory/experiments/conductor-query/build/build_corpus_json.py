import json, re, glob, os

root = os.path.join("..", "..", "corpus", "stockton-chronicles", "vince-vr-world")
docs = []
for path in sorted(glob.glob(os.path.join(root, "**", "*.md"), recursive=True)):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    m = re.match(r"^---\n(.*?)\n---\n\n(.*)$", text, re.DOTALL)
    fm_raw, body = m.group(1), m.group(2).strip()
    fm = {}
    for line in fm_raw.split("\n"):
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        k = k.strip()
        v = v.strip()
        if "#" in v and k == "speculative":
            v = v.split("#")[0].strip()
        if v.startswith("[") and v.endswith("]"):
            inner = v[1:-1].strip()
            v = [x.strip() for x in inner.split(",")] if inner else []
        elif v in ("true", "false"):
            v = (v == "true")
        elif re.match(r"^\d+$", v):
            v = int(v)
        fm[k] = v
    fm["body"] = body
    docs.append(fm)

with open("corpus.json", "w", encoding="utf-8") as f:
    json.dump(docs, f, ensure_ascii=False)
print(f"wrote {len(docs)} docs")
