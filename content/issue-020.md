# Short Stack #20 — Tue, Nov 10, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Claude Fable 5.2 is out, faster and cheaper than 5.1
Anthropic released Claude Fable 5.2 and Mythos 5.2 on Nov 9. Same model; Fable has extra cyber and biology safeguards and is open to all, Mythos is for vetted orgs. Anthropic says outputs come up to 30% faster than 5.1, and the price drops to $8 / $40 per million input/output tokens (from $10 / $50). Anthropic still suggests starting most work on Opus 5.5.
**Try this in 10 min:** Swap `claude-fable-5-2` into one hard prompt that Opus 5.5 struggles with, and compare the answer and cost side by side.
Source: https://www.anthropic.com/claude-fable-and-mythos-5-2
Image: /issues/issue-020/pick-1.svg | Illustration: a tall stack of blocks with a speed arrow and a falling price tag

### 2. Meta's Muse Ember is a 10-cent model for agent busywork
Meta launched Muse Ember on Nov 9 as `muse-ember-1.0` on the Meta Model API: $0.10 per million input tokens and $0.50 output, with a 1M-token context and up to 512K output tokens. It's built for agent subtasks: tool calls, routing, extraction. Meta claims it matches Claude Haiku 5.5's top Artificial Analysis score at about a third of the cost.
**Try this in 10 min:** Point one subagent in your harness (file reads, test runs, or JSON extraction) at Muse Ember, and log its cost and error rate against your current small model.
Source: https://research.meta.ai/blog/muse-ember
Image: /issues/issue-020/pick-2.svg | Illustration: a small glowing ember feeding many tiny gears in a row

### 3. Automattic's Spacefast hosts what your AI builds, live in seconds
Automattic spun out Spacefast on Nov 9. Keep building in ChatGPT, Claude, Cursor or Codex; Spacefast gives your agent starter instructions and a database, then publishes to a private link your team can comment on. Free to start; Go is $5 a month and Pro is $15 per member. Auth and transactional email are "coming in the next few weeks."
**Try this in 10 min:** Ask your coding agent to set up Spacefast and ship a one-page landing page, then leave a comment on the live link and have the agent fix it.
Source: https://www.prnewswire.com/news-releases/automattic-launches-spacefast-a-new-company-that-gets-apps-and-websites-live-in-seconds-302933038.html
Image: /issues/issue-020/pick-3.svg | Illustration: a rocket lifting off from a browser window with a speech-bubble comment pinned to it

### 4. Autodesk Flow Studio now makes 3D assets inside ChatGPT
Autodesk put Flow Studio into ChatGPT as a plugin on Nov 9. You can go from text or a sketch to a 3D model (up to four drafts at a time), remesh to a target polygon count, retexture with a prompt. You need a paid Flow Studio plan, and generations use your credits.
**Try this in 10 min:** Install the plugin, then prompt "@Flow Studio create a stylized 3D coffee mug for my app's empty state" and remesh your favorite draft to 20,000 triangles.
Source: https://blogs.autodesk.com/media-and-entertainment/2026/11/09/introducing-autodesk-flow-studio-mcp-create-3d-assets-in-chatgpt/
Image: /issues/issue-020/pick-4.svg | Illustration: a chat bubble opening into a wireframe 3D cube and a potion bottle

### 5. Gemini's help page says humans can review your connected Gmail and Drive data
A Nov 9 Hacker News thread spotlighted Google's Gemini Connected Apps help page. It says a subset of connected-app data, including summaries and excerpts of emails and files, is reviewed by human reviewers, and that for brief or very relevant items "the summary may just be the email or file." A claim that Gemini pulls files without being asked is unverified.
**Try this in 10 min:** Open Gemini's Connected Apps settings, disconnect anything holding client or company files, and turn off Keep Activity if you don't want future chats used for training.
Source: https://support.google.com/gemini/answer/16836988?hl=en
Image: /issues/issue-020/pick-5.svg | Illustration: a document under a large magnifying glass with an eye shape in the lens

**Also notable:** GitHub secret scanning now checks completed Actions workflow logs for leaked secrets, in public preview for Enterprise Cloud with Secret Protection or Advanced Security (Nov 9). https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
