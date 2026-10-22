# Short Stack #7 — Thu, Oct 22, 2026
*5 AI picks. 1 for each kind of builder. Each one takes 10 minutes to try.*

---

### 1. AI-assisted research found two critical PHP flaws, and the patch is out
On Oct 21, PHP shipped 8.5.12, 8.4.27, 8.3.36 and 8.2.35 to fix CVE-2026-109618 and CVE-2026-109619. Under the right conditions, both let an unauthenticated attacker run code on a PHP server. The PHP Foundation credits reports from Calif, Wiz and OpenAI Codex Security, and says AI tools now help it validate a flood of incoming reports. PHP 8.1 and older get no upstream fix.
**Try this in 10 min:** Run `php -v` on every server, container image and host you or your clients use, upgrade anything below those versions, and redeploy.
Source: https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/
Image: /issues/issue-007/pick-1.svg | Illustration: a stack of servers next to a cobalt shield with a check mark

### 2. Flint is an open coding model built to run fast on your own machine
Recursive released Flint on Oct 21 under Apache 2.0: a mixture-of-experts model with 40B total parameters and 2.5B active per token. Recursive says it leads MoE models under 50B on agentic coding benchmarks and runs at 125+ tokens a second on an M4 Pro MacBook Pro (vendor claims). It works with llama.cpp, Ollama, LM Studio and vLLM, and Recursive says it needs more guidance than big closed models.
**Try this in 10 min:** If you have a high-memory Mac or GPU, pull a quantized Flint build from Hugging Face into Ollama or LM Studio and give it one small, well-scoped refactor.
Source: https://recursive.com/updates/introducing-recursive-flint
Image: /issues/issue-007/pick-2.jpg | Image from recursive.com: Flint, an open coding model for local machines

### 3. Gemini Notebook now lets you steer slide decks and videos before they render
Google said on Oct 21 that Gemini Notebook can walk you through a step-by-step flow for Slide Decks and Video Overviews. It suggests focus topics, formats and visual styles from your sources, and a Review toggle lets you edit the outline or producer notes before the final output. Rolling out gradually to Workspace and personal Google accounts.
**Try this in 10 min:** Drop one product doc into Gemini Notebook, ask for a slide deck with Review outline on, and rewrite the outline before you let it render.
Source: https://workspaceupdates.googleblog.com/2026/10/gain-more-creative-control-over-slide-Decks-and-Video-Overviews-in-Gemini-Notebook.html
Image: /issues/issue-007/pick-3.jpg | Image from workspaceupdates.googleblog.com: Gemini Notebook slide deck outline review

### 4. Stripe Treasury now lets agents like ChatGPT and Claude run your business banking
Stripe announced on Oct 21 that startups can let agents check balances, pay invoices, move money between accounts and convert currencies, via Stripe's MCP server. You pick which accounts an agent sees, whether it can read or act, and when money movement needs your approval. Card creation and agent spending limits are coming in the next few weeks.
**Try this in 10 min:** Write down the three money chores you repeat weekly, then connect a read-only agent to your Stripe data and ask it for a morning balance-and-failed-payments report.
Source: https://stripe.com/newsroom/news/treasury-for-agents
Image: /issues/issue-007/pick-4.jpg | Image from stripe.com: Introducing Stripe Treasury for agents

### 5. Hugging Face's Carbon-X lets you chat with DNA on a laptop
Hugging Face released Carbon-X on Oct 22, an open 14B model trained on DNA and plain English, so researchers can ask what a DNA change might do to gene activity. It runs locally, so no data leaves your machine, and takes about 50,000 base pairs at a time. Its makers say it hasn't been validated in wet-lab experiments yet.
**Try this in 10 min:** Read the Carbon-X release on Hugging Face's HuggingFaceBio page and list one question in your field that a small, local, domain-trained model could answer.
Source: https://www.wired.com/story/hugging-face-new-ai-biology-model-chat-with-dna/
Image: /issues/issue-007/pick-5.svg | Illustration: a DNA helix next to a chat bubble and a laptop

**Also notable:** OpenAI's GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna are coming to Google Cloud's Model Garden in private preview (Oct 21), billed through Google Cloud Marketplace. https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
