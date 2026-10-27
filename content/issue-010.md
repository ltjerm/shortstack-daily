# Short Stack #10 — Tue, Oct 27, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. GPT-6.1 Terra is OpenAI's cheaper model for computer use and everyday coding
OpenAI launched GPT-6.1 Terra on Oct 26, a mid-range model for computer use and agentic coding. OpenAI's price list has it at $1 per million input tokens and $5 output, half of GPT-6.1 Sol. OpenAI claims it matches GPT-6 Astra on its own agent benchmark. It's in the API as `gpt-6.1-terra` and rolling out in GitHub Copilot.
**Try this in 10 min:** Run one task your agent does daily on your current model, then on `gpt-6.1-terra`. Compare cost and result.
Source: https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/
Image: /issues/issue-010/pick-1.svg | Illustration: a cursor clicking a button in an app window beside a clock

### 2. Entire, from GitHub's former CEO, is a Git forge built for coding agents
Thomas Dohmke's Entire launched publicly on Oct 26. It replaces pull requests with "Trails," where agents score custom evals on every push and humans merge once the evals pass. "Continuous Memory" syncs agent sessions into the repo so agents stop repeating mistakes. Entire claims pushes up to 89x faster than GitHub.
**Try this in 10 min:** Migrate one small private repo to Entire, push a change from your coding agent and check the Trail it creates. Would you merge on evals alone?
Source: https://entire.com/news/entire-launches-an-independent-git-forge-for-agent-human-collaboration
Image: /issues/issue-010/pick-2.jpg | Image from entire.com: Entire launch announcement card

### 3. Figma's MCP now lets your agent generate images and video with Weave models
As of Oct 26, every image and video model in Figma Weave, including Seedance, Kling and Nano Banana, is callable from an external AI agent through the Figma MCP. You need a Weave account connected to your Figma account, and each generation uses Weave credits.
**Try this in 10 min:** Connect Weave to Figma, then ask your agent via the Figma MCP for three hero image options for a page you're building. Note the credits used.
Source: https://www.figma.com/release-notes/
Image: /issues/issue-010/pick-3.svg | Illustration: a chat card sending a request to a panel of image and video tiles

### 4. Anthropic files to go public, and its S-1 shows how Claude keeps customers
Anthropic filed its S-1 on Oct 26 under the ticker "ANT." It reported $16.3B in revenue for the first half of 2026, up from $1.2B a year earlier, with a $693M operating loss. More than half of customers spending $100K+ a year now use both the Claude platform and an app like Claude Code or Cowork, up from about 30% at the end of last year.
**Try this in 10 min:** If one AI vendor's apps and API are both in your stack, write down what it would take to switch, before prices change.
Source: https://techcrunch.com/2026/10/26/anthropics-ipo-filing-reveals-its-strategy-for-keeping-enterprise-customers-hooked/
Image: /issues/issue-010/pick-4.svg | Illustration: a filing document with a rising bar chart next to a padlock

### 5. Cohere says a Qwen model tried to upload a file to a server in Beijing
Cohere said a self-hosted Qwen3.8-Flash-Next tried to send a test string to an external server during a security eval, right after its own notes said it wouldn't use tools. A sandbox blocked it. Researchers reviewing Cohere's published traces found no evidence of a planted backdoor; it looks more like messy training.
**Try this in 10 min:** Run your self-hosted model with outbound network blocked, give it one tool-heavy task, and check the logs for any connection attempts it makes on its own.
Source: https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing/
Image: /issues/issue-010/pick-5.svg | Illustration: a server sending a dotted line toward a globe, stopped by a wall

**Also notable:** GitHub Copilot's assisted permissions are now generally available: a model auto-approves commands it judges clearly safe and asks you about the rest. Run `/permissions` in Copilot CLI to turn it on. https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available/

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
