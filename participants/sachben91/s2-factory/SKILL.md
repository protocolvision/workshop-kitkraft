---
name: mirror-sync
description: Keep a piece's canonical Markdown and its published mirror on a platform with no write API (Substack, Medium, LinkedIn, Ghost) in step — detect which side changed, push the repo's version into the live post, or pull a platform-side edit back as a reviewable diff. Use when a story exists both in a repo and on a publication and one copy was edited, when asked to update a piece "on the site and on Substack", or to check whether a mirror has drifted.
---

## When to use
A piece of writing lives in two places: a repo, where Markdown is the source of truth, and a publication, where readers actually read it. Someone edited one of them. Use this to find out which, and to land the change on the other without corrupting the post.

Written against Substack for Monstrous Times (`monstroustimes.com` → `monstroustimes.substack.com`, 66 stories). The shape holds for any platform that has a public read API and no write API, so the edit has to go through the editor a human would use.

## What this kit owns, and what it must not touch
Decide this before the first run and write it down; the failures come from syncing a field the platform owns.

| Field | Owner | Synced |
|---|---|---|
| Body | repo | both directions |
| Title | repo | push only |
| Subtitle / dek | repo | push only |
| Byline | platform | never — gated on a team role, see below |
| Sections / tags | platform | never |
| Cover image | platform | never |
| Publish date | platform | **never** — a reset silently rewrites the archive's history |

## Steps

### Setup, once per piece
1. Record the platform's post id in the article's frontmatter as a machine-owned field (`substackId`, alongside whatever your importer already writes). Without it, every run falls back to title matching, which fails on punctuation and silently pairs the wrong post.
2. Create a sidecar — `data/mirror-sync.json`, slug → hash of the body at last **verified** sync. Keep it out of frontmatter: it churns on every sync and would bury real editorial diffs in git.

### `check` — which side moved (no browser needed)
3. Build the site. The build is the only Markdown→HTML converter; never add a second one.
4. For each piece, fetch the live post from the platform's public read endpoint (Substack: `/api/v1/posts/by-id/<id>`). Send a browser User-Agent — a default library UA gets 403 — and pace the requests; an unpaced burst of 66 gets 429.
5. Normalise both bodies before comparing: block-level text in document order with emphasis marks kept, platform wrappers, injected classes, anchors and subscribe widgets stripped. Compare normalised forms, never raw HTML, or every piece reads as drift forever.
6. Classify each piece against the stored hash and report as a table:
   - **in sync** — both match the stored hash
   - **site ahead** — repo changed → `push`
   - **platform ahead** — the live post changed → `pull`
   - **both ahead** — stop. Report it and hand it to the human; never merge.

### `push` — repo → live post
7. One piece at a time. `--all` only after a dry run that prints every intended change.
8. Open the post's editor. Edit through the editor's own document model, not the DOM (Substack: the Tiptap instance at `document.querySelector('.ProseMirror').editor`, so a body change is a transaction on a located node).
9. Locate the target by exact match and **abort unless exactly one node matches**. Zero means the post already changed under you; more than one means the edit is ambiguous.
10. Apply the change, then publish the update.
11. **Verify out of band.** Re-fetch the post from the read endpoint and compare. An editor's "Saved" badge is not a save confirmation — it is transient and sometimes absent from the DOM entirely.
12. Only after that verification, write the new hash into the sidecar. An unverified write must never be recorded as synced.

### `pull` — live post → repo
13. Fetch the post body and convert it to Markdown into a scratch file **outside** the article tree.
14. Diff it against the article's current body and show the diff. An HTML→Markdown round trip loses things; a human approves before anything lands.
15. On approval, replace the article body and leave the frontmatter untouched. Then re-run `check` — the piece should read in sync.

## Constraints
- Markdown in the repo is the source of truth. `pull` exists to bring a stray platform edit back under it, not to make the platform authoritative.
- Body HTML for a push comes from the built site, never from a fresh conversion.
- Every state change is verified against the read API before it is recorded.
- Both-ahead is a refusal, not a merge.
- One piece at a time by default; pace every request.
- The sidecar and the post id are machine-owned. Do not hand-edit them.

## Platform notes worth not rediscovering (Substack)
- **`Inspected target navigated or closed` is the SUCCESS signal.** A successful update redirects to share-center, which kills the JS execution context. A payload that returns cleanly probably did not publish.
- **Do not navigate for ~10 seconds after triggering the update.** The post reports saved and goes live unchanged. This corrupted two posts before it was caught.
- **Bylines cannot be automated and this is not a tooling gap.** An author must hold the Byline role on the publication team before a post can be attributed to them; adding them from the post editor's picker only sends a guest invite and leaves the post unbylined. Invite → they accept → then script the posts.
- **Confirm the account behind every name.** A name search returned an account belonging to a different person with a near-identical handle; fourteen stories were one click from being credited to a stranger. Match on an id you have confirmed, never on a display name.

## Do not
- Do not touch the publish date. An import that preserved eighteen months of real dates is undone by one reset, and the original is not recoverable from the platform.
- Do not attempt a byline, a section or a cover image from this kit. Report them as human steps instead.
- Do not trust a save badge, a toast, or a clean return as evidence that a write landed.
- Do not mutate the editor's DOM directly; a platform editor backed by a document model will overwrite you on its next render.
- Do not run an unguarded find-and-replace across the archive. Every body edit is matched exactly once, or it does not happen.
- Do not write a hash for a write you did not verify.
- Do not invent the field-owner map at runtime. If it is not decided, stop and ask.
