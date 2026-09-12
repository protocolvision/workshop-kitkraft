# Recorder runbook — OpenRecapper

Operator: Sachin (co-facilitator), from a laptop that is in #kafka for the whole session. Backup operator: Rafa. Both have `/record-access`. Recordings land in named folders because `RECORD_MEETING_NAMES` includes `KITCRAFT-S1,KITCRAFT-S2,KITCRAFT-S3,KITCRAFT-S4` (Rafa's Sep 14 item; **confirm**, see notes). Live transcript target: #kitcraft-transcripts.

Two facts shape everything: **one bot = one voice connection**, so breakouts are never recorded; and the bot **auto-stops when #kafka empties and after 20 min of silence**, so every breakout longer than a few minutes gets an explicit `/stop` before and a fresh `/record` after.

## Commands

| Step | Command (typed in any text channel by the operator) |
|---|---|
| Start | `/record channel:#kafka name:KITCRAFT-S<n>` |
| Stop | `/stop` |
| Resume after a breakout | `/record channel:#kafka name:KITCRAFT-S<n>` again (second segment) |
| Verify | live lines appearing in #kitcraft-transcripts within ~30 s of speech |

Every start is confirmed in #kitcraft with `Recording on (KITCRAFT-S<n>)` and every stop with `Recording off`; that line is what participants rely on.

## Per session (UTC)

| Session | Record | Stop | Record again | Stop | Notes |
|---|---|---|---|---|---|
| S1 Kits | 15:30 | 16:30 | — | — | No breakouts. Exercise is silent work in #kafka; 17 min of near-silence is under the 20-min timeout but close: **someone speaks every 15 min** (Rafa's time calls do this). |
| 1A Clinic | — | — | — | — | **Not recorded** (setup clinic; `1A-clinic.md`). The consent notice says so. |
| S2 Factories | 20:00 | 20:35 (rooms open) | 20:48 (reconvene) | 21:00 | Breakout 13 min. Two segments. |
| S3 Bridges | 15:30 | 15:45 (rooms open) | 16:25 (reconvene) | 16:30 | Breakout 40 min. Two segments; second is 5 min. |
| S4 Recap | 20:00 | 21:00 | — | — | No breakouts. The synthesis reads the live channel text, not the final transcript (below). |

## Around a breakout, exact sequence (Sachin)

1. Post in #kitcraft: "Rooms open — breakout-1: … breakout-2: … Instructions above. Back at hh:mm."
2. `/stop`. Post "Recording off".
3. Move people (drag in the Discord member list, or they self-move; the pin names the rooms).
4. Facilitators split the rooms between them (Rafa the low-numbered, Sachin the high-numbered), then swap once.
5. At reconvene time − 1 min: post "Reconvene in #kafka now". Move stragglers.
6. `/record channel:#kafka name:KITCRAFT-S<n>`. Post "Recording on". Wait for the first live line before Rafa resumes.

## Where transcripts go, who copies

- After **each** `/stop`, the bot posts a transcript file and (if the relay is configured) a summary. Sachin downloads both and commits within 30 min of session end:
  `transcripts/S<n>/transcript.md` (segments concatenated, segment boundary marked `--- segment 2, hh:mm UTC ---`), `transcripts/S<n>/summary.md`, `transcripts/S<n>/awareness-check.md` (the close round's answers, tallied by quadrant — the S4 profile needs them).
  Commit message: `S<n>: sachin: transcript + summary`.
- Raw audio: pruned by the bot after 7 days; nobody copies it.

## S4 special case

The synthesis is read back at 20:38, but the S4 transcript only exists after `/stop` at 21:00. So the S4 synthesis is built from the repo (`LOG.md` files, `participants/*/bridges/*.md`, `transcripts/S1–S3/`, `awareness-check.md` files) plus the **live text of #kitcraft-transcripts**, which Sachin selects and pastes into a scratch file on his machine at 20:24 (not committed). The final `SYNTHESIS.md` v2, with the S4 transcript folded in, is pushed within 48 h.

## Confirm at the Sep 17 tech rehearsal (unknowns)

- Whether a second `/record` with the same `name:` appends to the same folder or overwrites it. If it overwrites, use `KITCRAFT-S2B`, `KITCRAFT-S3B` and add them to `RECORD_MEETING_NAMES`.
- Whether the relay/summary is configured; if not, Sachin's agent writes `summary.md` from the transcript.
- That Discord display names in the diarized transcript can be matched to GitHub usernames: keep the name map (form name, GitHub username, Discord name) in the facilitator notes, not in the repo.
