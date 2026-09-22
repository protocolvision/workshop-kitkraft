# wip-abramson

## Kits I use
### 1. notes-processing
- What it is: A suite of tools for capturing, organizing and gardening my thoughts. Three separate Python services: one for capturing individual notes, one for processing these notes into projects and assigning labels and tags, and one for wandering around my notes, connecting them together and generating new ideas. It includes bulk import of notes from Signal messages (notes to self, which I copy and paste), a skill for the AI to do an initial processing over the unprocessed notes that I can then review, and an MCP tool so my AI harness can access the captured notes within its context.
- The job it does: A suite of tools to seed, grow and curate my thoughts, ideas and projects.
- How often I use it: 3 times a week
- What I adapted: Over time I added additional user interfaces, e.g. for gardening my processed thoughts, and added MCP so my AI harness can interface directly with my thoughts and ideas. I also want to host it and expose a mobile UI over a VPN so I can capture directly into the tool rather than Signal, but Signal works pretty well.
- Who else uses it: only me
- Where it lives: a private repo on my machine

### 2. whatsapp-processing
- What it is: An AI-generated suite of Python scripts for taking a WhatsApp chat export and transforming it into various media outputs: mostly different markdown formats with inlined photo content, but also taking YouTube and Spotify links and autogenerating playlists on both platforms for the joint set. I also wanted to experiment with GPS content, but understandably this gets stripped.
- The job it does: Streamline various media generation from a WhatsApp chat export.
- How often I use it: every now and then
- What I adapted: Over time I have explored adding new scripts to the toolkit to extract and render different aspects of a chat transcript depending on my use case. The main insight for me: chat is a very simple, conversational format to capture live thoughts, and being able to easily transform that into a digital artifact through a series of scripts felt powerful.
- Who else uses it: only me
- Where it lives: a private repo on GitHub

## Kit to convert
undecided — both are good, but both are mostly custom scripts AI wrote for me to do something repeatable rather than custom prompts, so I am not sure either is properly in the vein of a kit.

## Related
zakhap/worldview-generator — it takes a corpus of imported documents and crystallizes it into a commonplace book and a character sheet; my notes-processing captures and gardens notes but stops at connections and new ideas, so this is the distillation step mine does not have, running on exactly what my capture produces.
rafaeldavid/here.now publishing — both my kits end at files in a private repo (processed notes, markdown with inlined photos); this turns an agent's output folder into a live URL with passcodes for private pages, which is the missing last step for sharing a chat artifact with the people in the chat, and closer to the hosted UI I want for capture.

## Posture
Partnership
