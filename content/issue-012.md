# Short Stack #12 — Thu, Oct 29, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. GitHub Copilot Fusion picks the model for you, and it's live on every plan
Announced at GitHub Universe on Oct 28: choose Copilot Fusion in the model picker plus an effort level (Standard, High or Max), and Copilot decides which models handle each prompt. It may use one model, escalate from a cheap draft, or have a second model critique the first. You pay each model's normal rate, with 30% off for a limited time on paid plans. GitHub's claim: Fusion Max came within two points of Claude Code with Opus 5.5 Max at about half the cost per task.
**Try this in 10 min:** Update VS Code or Copilot CLI, pick Copilot Fusion at Standard, and rerun a task you did yesterday. Compare the result and the cost.
Source: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/
Image: /issues/issue-012/pick-1.jpg | Image from github.blog: Copilot Fusion launch card with the effort-level picker

### 2. Gemini 4 Carbon is Google's new top model, but cyber defenders get it first
Google DeepMind announced Gemini 4 Carbon on Oct 28, two weeks after Argon. Google says it's built for long-horizon coding and security work and leads benchmarks for finding, exploiting and patching vulnerabilities. Cyber defenders get access first; developers later, at Argon's introductory $2/$10 per million tokens, then $4/$20.
**Try this in 10 min:** Write down one bug from the last month that took you days to root-cause. Keep it as your first test when Carbon reaches the API.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
Image: /issues/issue-012/pick-2.jpg | Image from blog.google: Gemini 4 Carbon launch art

### 3. Any developer can now apply to put their app inside Gemini and Google Search
Google opened its Connected Apps Platform on Oct 28, a public beta for US developers via waitlist. Hook up a cloud-hosted MCP server, or Android's AppFunctions, then register, test and submit in the Google Connected Console. You pick Search, Gemini or both, and get traffic, latency and error dashboards. Gemini already has 50+ connected apps; they come to Search over the next few weeks.
**Try this in 10 min:** List the three actions users would most want from your product inside a chat. That's your first MCP tool set.
Source: https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/
Image: /issues/issue-012/pick-3.svg | Illustration: a search panel wired to a row of app tiles, with an empty slot for one more

### 4. GitHub's design team open-sourced Replica, a prototyping tool that uses your design system
Replica, released Oct 28 under the MIT license, turns plain-language requests in the GitHub Copilot app into interactive prototypes. Designers point it at the team's components, patterns and docs, so mockups look like the real product. An optional self-hosted Replica Hub lets teammates open prototypes and leave comments.
**Try this in 10 min:** Open the repo at github.com/github/replica, read the setup guide, and list which of your components and docs it would need to know.
Source: https://github.blog/changelog/2026-10-28-introducing-replica-an-open-source-ai-prototyping-tool/
Image: /issues/issue-012/pick-4.jpg | Image from github.blog: Replica launch card with a prototype of an issues page

### 5. Nvidia's free Nemotron 3.5 Transcribe labels who said what in your recordings
Nvidia released Nemotron 3.5 Transcribe on Oct 28, an open-weight model that transcribes 40 languages, translates 31 to or from English, handles hour-long recordings and labels up to eight speakers. You steer it with plain prompts like "label each speaker." Nvidia says it ranks first among open-weight models on Hugging Face's English ASR leaderboard. It works on recorded audio only, not live streams.
**Try this in 10 min:** Upload a short meeting clip to the Hugging Face demo and ask for a transcript with speaker labels. Check the names and speaker changes against the audio.
Source: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary
Image: /issues/issue-012/pick-5.jpg | Image from huggingface.co: Nemotron 3.5 Transcribe sound-wave artwork

**Also notable:** Anthropic launched reports that show enterprise managers what a team produced with Claude, what it cost and where workflows broke down, plus pooled group budgets for token spend. https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
