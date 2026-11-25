# Short Stack #31 — Wed, Nov 25, 2026
*5 AI picks. Each one takes 10 minutes to try.*

---

### 1. MCP servers can now ship skills to Claude
Anthropic put Skills over MCP in public beta on Nov 24: a server can publish skills (workflows, playbooks) next to its tools, and Claude loads one only when needed. Tasks (long-running work in the background) and Elicitation (pause and ask the user mid-call) are now GA on Pro, Max and Ultra. They're part of the open MCP spec, not Claude-only.
**Try this in 10 min:** Add one skill to an MCP server you run, then make its riskiest tool ask for confirmation with Elicitation before it acts.
Source: https://claude.com/resources/articles/skills-over-mcp-tasks-and-more
Image: /issues/issue-031/pick-1.svg | Illustration: a plug connector carrying a small open playbook and a gear into a cobalt circle

### 2. Cognition's SWE-2.1 coding model is free in Devin until Dec 8
Cognition released SWE-2.1 (RL-trained on Kimi K3). In Cognition's own table it goes from 24.1 to 41.3 on FrontierCode 2.0, still behind Claude Opus 5.5, Gemini 4 Neon and GPT-6.2 Sol. A Cerebras-served Ultrafast version runs 10× faster. It's free through Dec 8 on Devin Desktop and CLI.
**Try this in 10 min:** In the Devin CLI, give SWE-2.1 one stale bug from your backlog and compare its fix with what your usual agent produced.
Source: https://cognition.com/blog/swe-2-1
Image: /issues/issue-031/pick-2.svg | Illustration: a terminal window with a lightning bolt racing along a code line

### 3. Framer sites can now run agent jobs on their own
Framer launched Automations: agent workflows triggered on a schedule or by events like publishing or a form submission. Connectors let the agent read and act in Slack, Notion and Ahrefs, and a `@Framer` Slack app answers questions or makes quick site edits.
**Try this in 10 min:** In Site Settings > Automations, set an SEO audit to run on every publish and post the results to a Slack channel.
Source: https://www.framer.com/updates/automations-connectors-slack
Image: /issues/issue-031/pick-3.svg | Illustration: a website frame with a clock and a looping arrow feeding a chat bubble

### 4. Your agent can now set AI Gateway budgets through Vercel MCP
Since Nov 24, agents connected to Vercel MCP can manage AI Gateway in plain language: create virtual models (a reusable model ID with saved settings), add routing rules that redirect or block requests, and set spend budgets for teams, projects and members. Change a virtual model later without redeploying.
**Try this in 10 min:** Ask your agent to create a virtual model `coding-agent` with Zero Data Retention, then set a monthly budget for one project.
Source: https://vercel.com/changelog/agents-can-now-manage-ai-gateway-through-vercel-mcp
Image: /issues/issue-031/pick-4.svg | Illustration: a robot hand turning a dial on a gauge beside stacked coins

### 5. OpenAI says GPT-6 can design proteins with only reasoning and code
In a new preprint, OpenAI reports its GPT-6 models designed protein shapes and sequences without calling specialized biology models, and that GPT-6.2-based designs showed binding across five targets in lab tests with Onava. OpenAI notes specialized models still filtered candidates.
**Try this in 10 min:** Read the "Limitations" section, then ask your model of choice to explain one claim and one caveat in plain English.
Source: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/
Image: /issues/issue-031/pick-5.svg | Illustration: a folded ribbon chain docking into a cup-shaped target

---

**Also notable:** Claude's "Install as app" beta turns an artifact into a Mac or Windows app with its own icon and window, from the artifact's Share menu. https://claude.com/resources/articles/install-as-app

---
*Short Stack is free. Want to sponsor an issue? Reply to this email. Follow [@supjeremyyy](https://x.com/supjeremyyy).*
