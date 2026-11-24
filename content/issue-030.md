# Short Stack #30 — Tue, Nov 24, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Claude Ship takes a pull request from review to approval
Anthropic launched Claude Ship on Nov 23. It bundles Code Review (GA) with two beta agents: PR Steward fixes failing checks, merge conflicts and review feedback without merging, and Claude Approvals applies an approval policy you keep as a file in your repo. It's on Team and Enterprise plans for GitHub repos and is billed on tokens.
**Try this in 10 min:** On a ready branch, run `/ship` in Claude Code (Team or Enterprise), or run `/code-review` on any plan to see what it flags.
Source: https://claude.com/resources/articles/introducing-claude-ship
Image: /issues/issue-030/pick-1.svg | Illustration: a small paper boat carrying a checkmark along a branching line of commits

### 2. Canva MCP is now open to every agent and developer
Canva MCP is generally available with no waitlist, alongside new REST APIs, an expanded Canva CLI and service accounts. Agents can generate editable designs, images and video, remove backgrounds, resize and export. Canva says 72% of typed CLI commands in October came from agents.
**Try this in 10 min:** Sign up in the Canva Developer Portal, enable MCP access, then ask your agent for three launch-post sizes from one brief.
Source: https://www.canva.com/newsroom/news/canva-mcp-update/
Image: /issues/issue-030/pick-2.svg | Illustration: a robot arm placing colored shapes onto a blank canvas with a plug cable

### 3. Vercel AI Gateway now pulls typed fields out of PDFs and images
Since Nov 23, AI Gateway supports extraction models, starting with ScaleDown Extract-1. You describe fields like invoice number or line items and get back values with 0-to-1 confidence scores, from text, images or PDFs. It works through the AI SDK only for now (`ai@7.0.176`+).
**Try this in 10 min:** Call `experimental_extract` with model `scaledown/extract-1` on one invoice PDF and flag any field under 0.8 confidence.
Source: https://vercel.com/changelog/ai-gateway-now-supports-extraction-models
Image: /issues/issue-030/pick-3.svg | Illustration: a document with arrows pulling neat boxes out of it into a tidy column

### 4. Figma's agent now works in FigJam and Slides
Figma's agent is generally available in FigJam and Figma Slides on all paid plans, with connectors (like Hex, Slack and Asana) and attachments. It can turn a messy board into a Spec with next steps and draft a deck from a Spec plus your brand template, speaker notes included.
**Try this in 10 min:** Open a messy FigJam board, ask the agent to group the stickies into themes, then turn the result into a 5-slide deck.
Source: https://www.figma.com/blog/introducing-figma-agent-in-figjam-and-slides/
Image: /issues/issue-030/pick-4.svg | Illustration: scattered sticky notes flowing into a neat stack of slides

### 5. Teams of Gemini agents found faster quantum algorithms, proven in Lean
Google DeepMind ran teams of Gemini 4 agents on quantum algorithm problems, checked every idea in the Lean theorem prover, and had teams swap ideas every four hours. DeepMind reports an 11.8× cheaper circuit for a fusion calculation and a 290× speedup for an arcsin routine, and is open-sourcing its Lean library.
**Try this in 10 min:** Copy the setup for your own code: two agents propose fixes to one slow function, and your test suite is the verifier that decides which idea survives.
Source: https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/
Image: /issues/issue-030/pick-5.svg | Illustration: two small groups of circles exchanging arrows around a glowing checkmark

---

**Also notable:** Anthropic opened Enterprise Frontier Safeguards in public beta: misuse monitoring for Claude's top models while prompts and responses stay in storage you own. https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
