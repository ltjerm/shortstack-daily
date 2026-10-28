# Short Stack #11 — Wed, Oct 28, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. Replit Cloud Agents let anyone on your team send tested pull requests to the real codebase
Replit launched Cloud Agents for existing repos on Oct 27, for all Pro and Enterprise customers. Describe a change in plain language and the agent edits your company's code, clicks through the running app in a sandbox, then opens a GitHub PR or GitLab MR with screenshots and video attached. You can also start a change by mentioning @Replit in Slack.
**Try this in 10 min:** Connect one repo at replit.com/repos and ask for a small UI fix you've been putting off. Is the PR video enough to review it?
Source: https://replit.com/blog/anyone-can-bring-ideas-to-company-codebase
Image: /issues/issue-011/pick-1.jpg | Image from replit.com: Replit Cloud Agents launch card

### 2. Canva MCP is now open to any developer, no waitlist
As of Oct 27, you can create an app in Canva's Developer Portal, turn on Canva MCP and connect to its remote server without applying first. An AI assistant can then generate designs from a brief, edit existing ones and export to PDF, PNG, PPTX or MP4. Each user signs in with their own Canva account, and there's no service-account option.
**Try this in 10 min:** Point your MCP client at `https://api.canva.com/connect/v1/mcp`, list its tools, then ask for one social post from a short brief and export it as PNG.
Source: https://www.canva.dev/blog/developers/canva-mcp-ga/
Image: /issues/issue-011/pick-2.jpg | Image from canva.dev: Canva MCP developer portal screenshot

### 3. GitHub Copilot agents can now run as your organization, not as you
GitHub added server-to-server authentication for the Copilot SDK in public preview on Oct 27. Give a GitHub App the read-only `Copilot Requests` permission, install it on an org and pass a short-lived installation token. Usage is billed to the org and follows its model policies and budgets, so a bot no longer depends on one person's login.
**Try this in 10 min:** List every automation running on your personal Copilot or API key. Pick the one that would break if you left, and note what an org-owned app would need.
Source: https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/
Image: /issues/issue-011/pick-3.svg | Illustration: a key card handed from a single person icon to a building

### 4. Opera's WebAI lets websites run AI models on the visitor's own device
Opera introduced WebAI on Oct 27, a proposed web standard for running open-weight models like Gemma inside the browser, plus Apple's on-device model on Macs. It's an opt-in early preview in Opera One. Opera's pitch: no per-request AI bills, and data stays local. Speed depends on the user's hardware.
**Try this in 10 min:** Find one AI feature in your product that only classifies or summarizes short text. Estimate what it costs per month, the number a local model would save.
Source: https://techcrunch.com/2026/10/27/opera-introduces-a-new-web-standard-to-let-users-deploy-ai-locally-in-their-browser/
Image: /issues/issue-011/pick-4.svg | Illustration: a browser window with a small chip inside it and a crossed-out cloud

### 5. OpenAI and Anthropic both claim their models refuted a core computer science assumption
OpenAI released AI-generated work it says refutes the Exponential Time Hypothesis, a decades-old assumption about how hard certain logic puzzles are to solve. Hours later, Anthropic released its own refutation. Neither is peer-reviewed. MIT's Ryan Williams, who is organizing the field's review, told TechCrunch OpenAI said it checked and was reasonably confident it doesn't break any crypto systems.
**Try this in 10 min:** Ask your favorite model to explain the Exponential Time Hypothesis in five sentences, then ask what would change for a developer if it's false.
Source: https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/
Image: /issues/issue-011/pick-5.svg | Illustration: a tangled puzzle grid with a shortcut line cutting through it

**Also notable:** Ramp opened early access to Inspect, its cloud coding agent that turns a Slack, GitHub or Linear request into a reviewed PR. Ramp says it now accounts for 74% of its own merged PRs. https://ramp.com/blog/introducing-inspect

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
