#!/usr/bin/env bash
# Repo-derived measures for a workshop retrospective.
#
#   bash workshop-dev/feedback/evidence.sh [git-ref]      (default: origin/main)
#
# Prints an aggregate scorecard as markdown. Aggregate on purpose: it counts
# participants, it does not rank them. Edit the four settings below for each run.
#
# A file counts as real work only if it differs from PARTICIPANT_TEMPLATE, because
# every participant folder is scaffolded from the template and a file existing
# proves nothing. Every number this prints should still be checked by reading a
# sample: the first version of this count got Exercise 2 wrong by a factor of nine.

set -euo pipefail

REF="${1:-origin/main}"
FACILITATORS="rafaeldavid sachben91"
START="2026-09-21T00:00:00Z"        # first session, UTC
END="2026-09-23T00:00:00Z"          # day after the last session, UTC
TEMPLATE="PARTICIPANT_TEMPLATE"

cd "$(git rev-parse --show-toplevel)"

is_facilitator() { local f; for f in $FACILITATORS; do [ "$1" = "$f" ] && return 0; done; return 1; }

real_files() {  # participant, section -> number of files differing from the template
  local p="$1" sec="$2" n=0 f rel pb tb
  while IFS= read -r f; do
    [ -z "$f" ] && continue
    rel="${f#participants/$p/}"
    pb=$(git rev-parse -q --verify "$REF:$f" 2>/dev/null || true)
    tb=$(git rev-parse -q --verify "$REF:$TEMPLATE/$rel" 2>/dev/null || true)
    [ "$pb" != "$tb" ] && n=$((n + 1))
  done < <(git ls-tree -r --name-only "$REF" "participants/$p/$sec" 2>/dev/null || true)
  echo "$n"
}

related_filled() {  # participant -> 1 if the inventory has a non-empty Related section
  local body
  body=$(git show "$REF:participants/$1/s1-inventory/inventory.md" 2>/dev/null \
    | awk 'tolower($0) ~ /^#+ *related/ {f=1; next} /^#+ / {f=0} f && NF' || true)
  [ -n "$body" ] && echo 1 || echo 0
}

participants=()
while IFS= read -r p; do
  case "$p" in README.md|_example) continue ;; esac
  is_facilitator "$p" && continue
  participants+=("$p")
done < <(git ls-tree --name-only "$REF" participants/ | sed 's|participants/||')

total=${#participants[@]}
inv=0; rel=0; fac=0; br=0; st=0; pre=0; post=0
for p in "${participants[@]}"; do
  [ "$(real_files "$p" s1-inventory)" -gt 0 ]     && inv=$((inv + 1))
  [ "$(related_filled "$p")" -eq 1 ]              && rel=$((rel + 1))
  [ "$(real_files "$p" s2-factory)" -gt 0 ]       && fac=$((fac + 1))
  [ "$(real_files "$p" s3-bridges)" -gt 0 ]       && br=$((br + 1))
  [ "$(real_files "$p" s4-show-and-tell)" -gt 0 ] && st=$((st + 1))
  [ -n "$(git log "$REF" --until="$START" --format=%h -1 -- "participants/$p" 2>/dev/null)" ] && pre=$((pre + 1))
  [ -n "$(git log "$REF" --since="$END"   --format=%h -1 -- "participants/$p" 2>/dev/null)" ] && post=$((post + 1))
done

echo "## Scorecard — generated $(date -u +%Y-%m-%dT%H:%MZ) from \`$REF\`"
echo
echo "Participant folders, excluding facilitators ($FACILITATORS): **$total**"
echo
echo "| Stage | Participants | Share |"
echo "|---|---|---|"
row() { printf "| %s | %s | %s%% |\n" "$1" "$2" "$(( total > 0 ? $2 * 100 / total : 0 ))"; }
row "Committed before the first session (pre-work)" "$pre"
row "S1 — inventory filled" "$inv"
row "S1 — Related section filled (Exercise 2)" "$rel"
row "S2 — factory work beyond the template" "$fac"
row "S3 — bridge opened" "$br"
row "S4 — show-and-tell written" "$st"
row "Committed after the workshop ended" "$post"
echo
echo "### Log rows by session tag (participants only)"
echo
echo "| Tag | Rows |"
echo "|---|---|"
for p in "${participants[@]}"; do
  git show "$REF:participants/$p/LOG.md" 2>/dev/null | grep '^| 20' || true
done | awk -F'|' '{gsub(/ /, "", $3); print $3}' | sort | uniq -c \
  | awk '{printf "| %s | %s |\n", $2, $1}'
