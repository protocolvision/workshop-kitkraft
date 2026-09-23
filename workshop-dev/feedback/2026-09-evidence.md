# Evidence pack — September 2026 run

What the workshop left behind, assembled before the retrospective so the
conversation starts from facts. Aggregate throughout: this counts participants, it
does not rank them.

Regenerate the repo-derived part with `bash workshop-dev/feedback/evidence.sh`.
Re-run it at **+7 days (29 Sep)** and **+30 days (22 Oct)** — the "committed after the
workshop" row is meaningless one day out, and it is the only direct measure of whether
the work persisted.

---

## Attendance

| | Count | Source |
|---|---|---|
| Accounts on the session 1 roster | 16, including both facilitators | Session 1 recording |
| Participants on the session 1 roster | 14 | Same, facilitators removed |
| Attended session 4 | 6 | **Recalled.** Session 4 was not recorded, so there is no roster to check |
| Excused from session 4 | 2 | Recalled |

**Retention depends on the definition, so both are stated:**

- On raw attendance, 16 → 6 is a **62.5% drop**.
- Counting the two excused as retained, 8 of 16 stayed: **50% churn**.
- If the six in session 4 included both facilitators, participant attendance fell from
  14 to 4 — closer to **70%**. *To confirm.*

**The roster and the repository are different populations.** Roughly half the session 1
roster has no participant folder that can be matched to it, and several folders belong
to people who were not on the session 1 roster. Attendance and contribution overlap but
are not the same measure. Reconciling them exactly needs the map from Discord display
name to GitHub username, which the runbook deliberately keeps out of the repo — so it
cannot be done from the repository alone.

## Recording coverage

| Session | Captured |
|---|---|
| 1 | Full plenary |
| 2 | One breakout; no plenary recording found |
| 3 | Full plenary |
| 4 | Nothing |

Two of four plenaries, one breakout. Search #meeting-notes for `KITCRAFT-S2` before
treating session 2 as lost.

## Repository activity

## Scorecard — generated 2026-09-23T07:52Z from `origin/main`

Participant folders, excluding facilitators (rafaeldavid sachben91): **12**

| Stage | Participants | Share |
|---|---|---|
| Committed before the first session (pre-work) | 3 | 25% |
| S1 — inventory filled | 11 | 91% |
| S1 — Related section filled (Exercise 2) | 9 | 75% |
| S2 — factory work beyond the template | 7 | 58% |
| S3 — bridge opened | 3 | 25% |
| S4 — show-and-tell written | 2 | 16% |
| Committed after the workshop ended | 0 | 0% |

### Log rows by session tag (participants only)

| Tag | Rows |
|---|---|
| S1 | 28 |
| S2 | 18 |
| S3 | 14 |
| async | 25 |

**Read these numbers, don't just count them.** The first automated pass reported
Exercise 2 as done by one participant. The real figure is nine — the parser expected
bullet points and participants wrote prose. That row was corrected by reading. The others are
file-level counts against the template and have not all been read — a folder with a
changed file is not necessarily a folder with finished work. Read a sample before
relying on any of them.

## What the numbers say, before any explanation

- **The funnel narrows at every stage after session 1, and fastest at the end.** Almost
  everyone filled an inventory; just over half did factory work; a quarter opened a
  bridge; one in six wrote a show-and-tell.
- **Session 4 is the least-evidenced session of the four.** It was not recorded, it
  produced two written show-and-tells, and there is not one S4-tagged log row. The
  session designed to synthesise everything left the fewest traces.
- **The planned synthesis was not produced.** The runbook specified an S4
  `SYNTHESIS.md` built from the logs; `workshop-dev/transcripts/S4/` is empty.
- **Exercise 2 worked.** Nine of twelve wrote a Related section, and the one read in
  full is a genuine complement rather than a lookalike — it names another participant's
  worldview-generator as the distillation step their own notes kit lacks. This is the
  clearest evidence in the repo that participants read each other's work.
- **Logging tailed off in step with attendance**, from 28 rows in session 1 to 14 in
  session 3 and none tagged for session 4. Twenty-five of the 85 participant rows —
  about three in ten — were logged as `async`, outside any session.
- **Pre-work reached a quarter of participants** before the first session.
- **Factory output is extremely uneven.** One participant's factory is ninety-one files;
  several have none beyond the template. Averages will mislead here.

## What the evidence cannot show

These are gaps in the instrumentation, not in the facts, and each is an item for the
next run:

- **Who was in the room for sessions 2 and 4.** No roster.
- **Whether anyone opened the context tank, the glossary or the resources.** Git records
  writes, not reads. Nothing here can say whether the shared "brain" was used.
- **How much of session 1 was theory.** The recording exists; nobody has timed it.
- **Whether each inventory came from the harness reading history, or from the harness
  surveying the participant** — the exercise 1 bug. That needs a person to read all
  eleven.
- **Why people left.** Only the people who left can say.
