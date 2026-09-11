# adoption-diagnosis

Job: turn one discovery-interview transcript about how an organization actually uses AI into a one-page adoption-diagnosis memo — where they sit on the AI CMM, the evidence, which recurring tasks could become kits, and the one gate they are stuck at.
For: adoption consultants and internal AI leads after a first conversation with a team; facilitators reading a participant's inventory.
Inputs: one interview transcript or interview notes (markdown or plain text), any length; optionally one line of context (sector, headcount). Comes from the consultant's own notes; never from a recording the interviewee has not agreed to.
Outputs: `<org>-diagnosis.md`, under 40 lines: level with quoted evidence, kit candidates that pass the two tests (recurring? tacit?), the gate, one next action. Goes back to the consultant; nothing is sent anywhere.
Interface: file handoff (rung one). Hand this folder to your agent and give it a transcript.
Example run: see `examples/` — `input.md` (a synthetic interview, 20 lines) → `output.md`.
Not for: strategy decks, tool or vendor selection, anything without a transcript, scoring an organization above level 2 without an encoded artifact in evidence.
Public / private: public. Owner: Sachin. Bridge target for S3 (`facilitator/README.md`).
