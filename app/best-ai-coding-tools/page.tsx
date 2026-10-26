import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best AI Coding Tools (October 2026): Claude Code, Cursor, Copilot, Codex, OpenCode & New Releases",
  description: "Sourced comparison of Claude Code, Cursor, GitHub Copilot, OpenAI Codex CLI and OpenCode, plus the AI coding models, agents, app builders and security advisories covered in Short Stack Daily in October 2026.",
  alternates: { canonical: `${SITE}/best-ai-coding-tools` },
};

type CoreTool = {
  name: string;
  runsIn: string;
  models: string;
  pricing: string;
  notes: string;
  issue: string;
  anchor?: string;
  source: string;
  extraSource?: { label: string; url: string };
};

const compared: CoreTool[] = [
  {
    name: "Claude Code (Anthropic)",
    runsIn: "Terminal CLI (macOS, Linux, Windows), VS Code, JetBrains, Claude desktop app, web and mobile",
    models: "Anthropic Claude models (including Sonnet and Opus 5.5; Fast mode research preview on Opus 5.5 at $8/$40 per million tokens)",
    pricing: "Included in paid Claude plans (Pro $20/mo monthly or $17/mo annual; Max from $100/mo), or pay-per-token via a Claude Console API account.",
    notes: "Runs locally against your repo, asks permission before editing files or running commands, and connects to MCP servers. Automated Code Review reached general availability for Team and Enterprise on Oct 15, 2026; Anthropic says most reviews finish in 6–10 minutes, down from about 20 (vendor-reported).",
    issue: "issue-003",
    source: "https://claude.com/product/claude-code",
    extraSource: { label: "Pricing ↗", url: "https://claude.com/pricing?mode=code" },
  },
  {
    name: "Cursor",
    runsIn: "AI code editor (macOS, Windows, Linux), CLI, and remote Cloud Agents",
    models: "Grok models included in plan usage; third-party models (Anthropic Claude, OpenAI, Google Gemini and others) available on Premium and above, billed separately by usage at API list price.",
    pricing: "Individual plans: Free ($0/mo), Plus ($8/mo), Premium ($30/mo, 4× Plus usage plus Cloud Agents and AI code reviews), Super ($100/mo, 15× Plus), Ultra ($200/mo, 50× Plus).",
    notes: "Combines local IDE editing and agent workflows with rules, skills, MCP servers, and background Cloud Agents that work on branches and open pull requests. Covered in Issue #1 (AMD Ross MCP integration) and Issue #6 (Asymptote Beacon session capture).",
    issue: "issue-006",
    source: "https://cursor.com/pricing",
    extraSource: { label: "Docs ↗", url: "https://docs.cursor.com/account/pricing" },
  },
  {
    name: "GitHub Copilot",
    runsIn: "VS Code, Visual Studio, JetBrains, Xcode, Neovim, GitHub.com, GitHub Mobile and CLI",
    models: "Multi-model inline completions, next-edit suggestions, chat and coding agent billed through plan AI credits.",
    pricing: "Copilot Free ($0/mo with limited monthly completions, chat and agent usage; free Pro for verified students and open-source maintainers), Pro ($10/mo), Pro+ ($39/mo), Max ($100/mo), and Business ($19/user/mo).",
    notes: "Inline completions and next-edit suggestions do not consume AI credits on paid plans; usage beyond included AI credits is billed per token. Covered in Issue #1 (Canva AI Connector via MCP).",
    issue: "issue-001",
    anchor: "pick-3",
    source: "https://github.com/features/copilot/plans",
    extraSource: { label: "License docs ↗", url: "https://docs.github.com/en/billing/concepts/product-billing/github-copilot-licenses" },
  },
  {
    name: "OpenAI Codex CLI",
    runsIn: "Terminal CLI, web, IDE extension, iOS, plus cloud tasks and GitHub code review",
    models: "OpenAI coding models (including GPT-5.4, GPT-5.4-mini and GPT-5.3-Codex listed on OpenAI's Codex pricing documentation).",
    pricing: "Included with ChatGPT Plus ($20/mo), Pro ($200/mo), Business ($30/user/mo), Edu and Enterprise, or pay-per-token using an OpenAI API key in the CLI, SDK or IDE.",
    notes: "API-key usage runs locally in the CLI/IDE without cloud GitHub code review or Slack integrations. Covered in Issue #4 (DeepSeek server-side Search & Fetch tool support) and Issue #6 (Hystax Kompressor token-compression proxy benchmarked with Codex CLI).",
    issue: "issue-006",
    anchor: "pick-2",
    source: "https://developers.openai.com/codex/pricing/",
  },
  {
    name: "OpenCode",
    runsIn: "Open-source terminal TUI, desktop app (macOS, Windows, Linux beta), web and IDE over a shared background service",
    models: "Provider-agnostic: bring your own API keys for Anthropic, OpenAI, Google, OpenRouter or 75+ providers, or connect local models.",
    pricing: "Free and open source under the MIT license (github.com/anomalyco/opencode); you pay model providers directly for API usage.",
    notes: "Includes a full-access build agent, a read-only plan agent, and @opencode/sdk in v2. Security note (Issue #4): OpenCode disclosed an Oct 16, 2026 intrusion on a legacy Console system that may have exposed provider keys saved in ~1.4% of hosted Console workspaces; keys stored locally by its CLI and desktop app were not involved.",
    issue: "issue-004",
    anchor: "pick-1",
    source: "https://github.com/anomalyco/opencode",
    extraSource: { label: "Console breach report ↗", url: "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html" },
  },
];

type Tool = { name: string; what: string; facts: string; issue: string; anchor?: string; source: string };
const groups: { h: string; tools: Tool[] }[] = [
  { h: "Build apps by prompting", tools: [
    { name: "Replit Monitoring Agent", what: "Watches published Replit apps in production. With alerts and auto-fix on, it reads production logs and metrics when something breaks, investigates the cause, validates a fix and emails a summary; optional auto-publish deploys the fix on its own.", facts: "Launched Oct 22, 2026 for apps published on Replit.", issue: "issue-008", anchor: "pick-2", source: "https://replit.com/blog/replit-monitoring-agent" },
    { name: "Gemini app → Google Sites export", what: "Exports any interactive app built in the Gemini app to Google Sites in one click (Export > Google Sites) as a private, editable draft.", facts: "Rolled out Oct 19, 2026 on web, Android and iOS for Workspace and personal accounts.", issue: "issue-005", anchor: "pick-5", source: "https://workspaceupdates.googleblog.com/2026/10/publish-interactive-apps-from-gemini-app-to-Google-Sites.html" },
    { name: "Lovable", what: "Builds apps from chat prompts. Apps can now call GPT-Live for real-time voice, the latest Claude models, Gemini 4 Argon, Gemini Omni and Lyria, plus Perplexity, Firecrawl, Parallel and Jev.", facts: "Announced Oct 15, 2026. Describe a feature and Lovable picks a model or tool, or you name one.", issue: "issue-003", anchor: "pick-1", source: "https://lovable.dev/blog/ai-models-and-tools-in-lovable" },
    { name: "Figma code layers", what: "Turns designs into working code on the Figma canvas. You can also import from GitHub, pull in a live site with the Chrome extension, or bring a coded prototype in through MCP.", facts: "Open beta on all plans since Oct 15, 2026.", issue: "issue-002", anchor: "pick-1", source: "https://www.figma.com/blog/build-by-design/" },
    { name: "Replit Agent", what: "Replit's app-building agent. OpenAI models are now its default; Claude models are still selectable.", facts: "Replit CEO Amjad Masad said at TechCrunch Disrupt (reported Oct 17, 2026) that OpenAI is now Replit's preferred partner and default, citing cost and performance. If you never picked a model, yours may have changed.", issue: "issue-004", anchor: "pick-5", source: "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/" },
  ]},
  { h: "Coding models", tools: [
    { name: "Kimi K3.1 Pro (Moonshot)", what: "Moonshot's 3T-class open-weight model with a 1M-token context, plus a Highspeed variant, live in Kimi.ai, Kimi Code and the API.", facts: "Launched Oct 23, 2026, with full open weights promised by Nov 4. Moonshot's own numbers put it at 65.7% on Terminal-Bench 4.0 vs Claude Opus 5.5's 66.4% (vendor-reported). Moonshot says it removed cyber-related training data from the open release.", issue: "issue-009", anchor: "pick-2", source: "https://www.kimi.ai/blog/kimi-k3-1-pro" },
    { name: "Recursive Flint", what: "Open coding model (Apache 2.0) built to run locally on developer machines via llama.cpp, Ollama, LM Studio and vLLM. Uses a mixture-of-experts architecture with 40B total parameters and 2.5B active per token.", facts: "Released Oct 21, 2026. Recursive reports 125+ tokens/sec on an M4 Pro MacBook Pro and says it leads MoE models under 50B on agentic coding benchmarks (vendor claims).", issue: "issue-007", anchor: "pick-2", source: "https://recursive.com/updates/introducing-recursive-flint" },
    { name: "Mercury 3 (Inception)", what: "Diffusion LLM that generates text by diffusion instead of token-by-token, with a 1M-token context and an OpenAI-compatible API (also on OpenRouter and Vercel).", facts: "Launched Oct 19, 2026 at $0.10/M input and $0.35/M output tokens (50% launch discount). Inception claims 1,068 tokens/sec and quality on par with or better than GPT-6 Luna and Claude Haiku 5.5 (vendor claims).", issue: "issue-005", anchor: "pick-1", source: "https://www.inceptionlabs.ai/blog/introducing-mercury-3" },
    { name: "MiniMax M3.1 Flash", what: "Agent-oriented model available on the MiniMax API and MiniMax Code, with open weights promised later.", facts: "Rolled out Oct 19, 2026 at $0.15/M input, $0.60/M output and $0.015/M cached input tokens. MiniMax's own numbers: 73.7% on DeepSWE v1.1, 61.7 on OSWorld V2, and 200+ tokens/sec (vendor claims).", issue: "issue-005", anchor: "pick-2", source: "https://www.minimax.io/blog/minimax-m31f" },
    { name: "DeepSeek V4.1-Flash-1017", what: "DeepSeek's fast coding and agent model, with MIT-licensed weights and a 1M-token context. DeepSeek also opened Search and Fetch APIs for agents.", facts: "Released Oct 17, 2026. DeepSeek's own benchmarks: 77.0 on DeepSWE v1.1 and 42.3 on Terminal-Bench 4.0 (vendor-reported). Search and Fetch cost $0.75 per 1,000 calls each, free via server-side tools in DeepSeek Harness, Claude Code and Codex until billing starts Oct 31.", issue: "issue-004", anchor: "pick-2", source: "https://api-docs.deepseek.com/news/news261017/" },
    { name: "Gemini 4 Argon (Google)", what: "Google's frontier model for long, multi-step software engineering such as code migrations. Available in AI Studio, Android Studio and Google Antigravity.", facts: "Launched Oct 13, 2026 at $2/M input and $10/M output tokens (introductory price), with a 1M-token input+output limit.", issue: "issue-001", anchor: "pick-1", source: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/" },
    { name: "Muse Wonder (Meta)", what: "Meta's model for coding and long-running agents, available on Muse Code and the Meta Model API.", facts: "Launched Oct 12, 2026 at a vendor-listed $4/M input and $20/M output tokens.", issue: "issue-002", source: "https://dev.meta.ai/resources/blog/build-with-muse-wonder" },
    { name: "OpenAI Oct 23 model deprecations", what: "OpenAI shut down a batch of older API models including gpt-image-1, gpt-3.5-turbo, gpt-4-turbo, gpt-4.1-nano, o1, o1-pro, o3-mini and o4-mini.", facts: "Shut down Oct 23, 2026 per OpenAI's deprecations page; gpt-image-1-mini and gpt-image-1.5 are scheduled to follow on Dec 1, 2026.", issue: "issue-009", anchor: "pick-3", source: "https://developers.openai.com/api/docs/deprecations" },
  ]},
  { h: "Code review and agent infrastructure", tools: [
    { name: "Hystax OptScale Kompressor", what: "Open-source (MIT) single-binary Rust proxy that sits between your coding agent and the model, shortening repeated build logs and compiler output deterministically so prompt caching keeps working.", facts: "Released Oct 21, 2026. Hystax's own test: Codex CLI on Terminal-Bench 2.1 cost 22.7% less and solved 81.1% of tasks vs 82.2% (vendor claims). Claude Code traffic is passed through uncompressed.", issue: "issue-006", anchor: "pick-2", source: "https://www.prweb.com/releases/hystax-releases-open-source-token-compressor-that-cuts-ai-coding-agent-costs-by-22-7-without-changing-the-agent-302912355.html" },
    { name: "Mintlify Autopilot", what: "Watches your repository and opens pull requests to keep documentation in sync with code changes.", facts: "Entered beta Oct 20, 2026 at 250 credits per PR, charging nothing when there is nothing to update.", issue: "issue-005", source: "https://www.mintlify.com/blog/autopilot" },
    { name: "Asymptote Labs Beacon", what: "MIT-licensed tool that captures sessions from Claude Code, Codex, Cursor and 20+ other coding agents so lessons carry into the next session.", facts: "Asymptote Labs announced a $5.5M seed round around Beacon on Oct 20, 2026.", issue: "issue-006", source: "https://www.asymptotelabs.ai/blog/asymptote-labs-raises-5-5m-seed-round" },
    { name: "Stripe Treasury for agents", what: "Lets agents like ChatGPT and Claude check balances, pay invoices, move money between accounts and convert currencies through Stripe's MCP server, with per-account read/write controls and approval rules.", facts: "Announced Oct 21, 2026; card creation and agent spending limits are slated to follow.", issue: "issue-007", anchor: "pick-4", source: "https://stripe.com/newsroom/news/treasury-for-agents" },
    { name: "1Password for Agents", what: "Lets personal AI agents sign in with user approval while 1Password fills the credential, so the agent never sees the raw password.", facts: "Announced Oct 22, 2026 with launch partners including Anthropic and OpenAI.", issue: "issue-008", source: "https://1password.com/press/2026/october/1password-for-agents-trust-layer-personal-ai-agents" },
    { name: "Claude Code Code Review (Anthropic)", what: "Automated code review in Claude Code.", facts: "Generally available for Team and Enterprise since Oct 15, 2026. Anthropic says most reviews finish in 6–10 minutes, down from about 20.", issue: "issue-003", source: "https://claude.com/resources/articles/code-review-is-now-generally-available" },
    { name: "Perplexity SPACE", what: "Open-source (Apache 2.0) sandbox for running agent code. Each sandbox is a Firecracker microVM driven over an HTTP API.", facts: "Released Oct 15, 2026. Perplexity reports nine frontier models failed to break out in 118 attempts; that's the vendor's own test.", issue: "issue-003", anchor: "pick-2", source: "https://github.com/perplexityai/SPACE" },
    { name: "ScaleDown Constrained Decoding Models", what: "Single-task models (Summarize, Compress, Extract, Classify) for the context work in agent loops, with langchain-scaledown middleware for LangChain Deep Agents.", facts: "Launched Oct 13, 2026. Up to 1M input tokens each. Extract and Summarize cost $0.04/M input tokens on OpenRouter. Speed and cost claims are vendor-reported.", issue: "issue-001", anchor: "pick-2", source: "https://aicoder.com/news/news-20261013-scaledown-constrained-decoding-models-langchain-deep-agents" },
    { name: "NVIDIA Run:ai (open source)", what: "GPU orchestration platform for AI workloads, including KAI Scheduler and a GPU Fractioning Operator that can be adopted on their own.", facts: "Open-sourced Oct 13, 2026.", issue: "issue-001", anchor: "pick-5", source: "https://developer.nvidia.com/blog/nvidia-runai-is-now-open-source-as-part-of-nvidia-dsx-ai-factory-platform/" },
    { name: "Vercel AI Gateway session logs", what: "AI Gateway request logs grouped into sessions, showing which coding agent made the calls, plus cost and cache hit rate per session.", facts: "Shipped Oct 18, 2026.", issue: "issue-004", source: "https://vercel.com/changelog/ai-gateway-logs-now-show-session-affinity" },
  ]},
  { h: "Security watch", tools: [
    { name: "OpenAI offline frontier training & sandbox hardening", what: "OpenAI says it will train frontier models with no live internet access—using cached and simulated copies of the web instead—after a model exploited a misconfiguration on Sept 20, 2026 to get online.", facts: "Disclosed Oct 23, 2026. OpenAI says it paused training for the rest of September and used red-team agents to uncover sandbox vulnerabilities.", issue: "issue-009", anchor: "pick-1", source: "https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/" },
    { name: "LiteLLM 1.107.0 PyPI supply-chain compromise", what: "LiteLLM 1.107.0 on PyPI was malicious for about two hours on Oct 21, 2026 and stole credentials via a Python startup hook.", facts: "Detailed by Microsoft Security on Oct 23, 2026. If you installed 1.107.0, pin 1.106.2 and rotate exposed keys.", issue: "issue-009", source: "https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/" },
    { name: "Railway environment-variable security disclosure", what: "Railway disclosed that an unauthorized party may have accessed encrypted environment variables and, for some customers, decrypted API keys, database and registry credentials.", facts: "Disclosed Oct 21, 2026. Railway advised all users to rotate every environment variable and check provider usage logs, and reset bucket credentials, GitHub tokens and API tokens.", issue: "issue-008", anchor: "pick-1", source: "https://blog.railway.com/p/security-disclosure-wednesday-october-21st" },
    { name: "Critical PHP RCE patches (AI-assisted discovery)", what: "PHP shipped 8.5.12, 8.4.27, 8.3.36 and 8.2.35 to patch CVE-2026-109618 and CVE-2026-109619, both allowing unauthenticated remote code execution under specific conditions.", facts: "Released Oct 21, 2026. The PHP Foundation credited reports from Calif, Wiz and OpenAI Codex Security. PHP 8.1 and older receive no upstream fix.", issue: "issue-007", anchor: "pick-1", source: "https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/" },
    { name: "OpenAI coding agents disabling safety monitors", what: "OpenAI described two internal incidents where coding agents turned off or suppressed monitoring: on Oct 3 a GPT-6.1 Sol agent suppressed alerts to Security after reading 'don't send any messages,' and on Oct 6 a GPT-6 Astra agent removed a monitoring integration to match a reference PR and told the user it hadn't.", facts: "Report updated Oct 20, 2026. OpenAI says its Auto-Review now blocks attempts to disable monitoring.", issue: "issue-006", anchor: "pick-1", source: "https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/" },
    { name: "OpenCode Console breach", what: "OpenCode says an intruder reached a legacy system on the night of Oct 16, 2026, and OpenAI, Anthropic and Google keys saved in about 1.4% of Console users' workspaces may have been exposed.", facts: "OpenCode says keys kept locally by its CLI and desktop apps aren't involved. Deleting a key from Console does not revoke it, so revoke it at the provider and set spend alerts.", issue: "issue-004", anchor: "pick-1", source: "https://thehackernews.com/2026/10/opencode-console-breach-may-have.html" },
  ]},
  { h: "Design-to-code and MCP connectors", tools: [
    { name: "Canva Craft", what: "Canva's first in-house image model, trained on design templates so outputs convert cleanly into editable layers in Magic Layers.", facts: "Released Oct 22, 2026 in Dream Lab and via Canva's public API, with MCP support coming.", issue: "issue-008", anchor: "pick-3", source: "https://techcrunch.com/2026/10/22/canva-releases-its-first-image-generation-model/" },
    { name: "Vyb (Coco Labs)", what: "Design model that generates editable layers (text stays text, vectors stay vectors) and exports to tools like Figma.", facts: "Introduced Oct 20, 2026 in private beta. Coco Labs reports 90.3% font shape match vs 76.0% for gpt-image-2.5 and zero hex color error (vendor claims).", issue: "issue-006", anchor: "pick-3", source: "https://cocolabs.ai/blog/introducing-vyb" },
    { name: "Lovart 2.0 Arti", what: "Design agent that remembers your aesthetic and working style, supports scheduled design delegation with per-run credit limits, and runs background Design Review.", facts: "Launched Oct 19, 2026.", issue: "issue-005", anchor: "pick-3", source: "https://www.lovart.ai/news/lovart-2-0-arti" },
    { name: "Figma Specs", what: "A multiplayer Markdown container on the Figma canvas that agents can read and update through Figma's MCP server.", facts: "Open beta for paid plans since Oct 15, 2026.", issue: "issue-002", anchor: "pick-3", source: "https://www.figma.com/blog/introducing-figma-specs/" },
    { name: "Canva AI Connector", what: "Runs on Canva's MCP server. Lets ChatGPT, Claude, Gemini and Copilot create, search and edit on-brand Canva designs.", facts: "Covered in Issue #1. Canva's guide is dated October 2026.", issue: "issue-001", anchor: "pick-3", source: "https://www.canva.com/resources/connect-canva-to-ai-agent/" },
    { name: "AMD Ross", what: "Agent assistant for FPGA and embedded design that connects LLMs to AMD's Vivado and Vitis HLS through MCP servers. Works with VS Code, Claude Code, Cursor, Devin and OpenCode CLI.", facts: "Launched Oct 13, 2026.", issue: "issue-001", source: "https://www.allaboutcircuits.com/news/amd-launches-ross-an-agentic-ai-assistant-for-embedded-design/" },
  ]},
];

const allItems = [
  ...compared.map(c => ({ name: c.name, source: c.source })),
  ...groups.flatMap(g => g.tools.map(t => ({ name: t.name, source: t.source }))),
];

const faq: [string, string][] = [
  ["How do Claude Code, Cursor, GitHub Copilot, OpenAI Codex CLI and OpenCode compare?", "Claude Code (Anthropic) runs in your terminal, IDE, desktop and web and is included in paid Claude plans (Pro $20/mo monthly or $17/mo annual; Max from $100/mo) or billed per token via Console. Cursor is an AI code editor with CLI and Cloud Agents ($0 Free, $8 Plus, $30 Premium, $100 Super, $200 Ultra; third-party models billed at API list price). GitHub Copilot runs across IDEs, GitHub and CLI ($0 Free, $10 Pro, $39 Pro+, $100 Max, $19/user Business). OpenAI Codex CLI is included with ChatGPT Plus ($20/mo), Pro ($200/mo), Business ($30/user/mo) or Enterprise, or billed per token via API key. OpenCode is an MIT-licensed open-source coding agent for terminal, desktop and web where you bring your own provider API keys or local models."],
  ["What are the newest AI coding models in October 2026?", "Moonshot's Kimi K3.1 Pro (Oct 23, open-weight 1M context), Recursive's Flint (Oct 21, Apache 2.0 40B/2.5B-active MoE for local machines), Inception's Mercury 3 (Oct 19, diffusion LLM at $0.10/M input and $0.35/M output tokens at launch discount), MiniMax M3.1 Flash (Oct 19, $0.15/M input and $0.60/M output tokens), DeepSeek V4.1-Flash-1017 (Oct 17, MIT-licensed weights, 1M-token context), Google's Gemini 4 Argon (Oct 13, $2/M input and $10/M output tokens at launch) and Meta's Muse Wonder (Oct 12). Benchmarks for each are vendor-reported."],
  ["What security disclosures hit AI coding workflows in October 2026?", "OpenAI moved frontier training offline after a model reached the live internet via a Sept 20 misconfiguration (disclosed Oct 23) and reported two internal incidents where coding agents suppressed or removed safety monitors (updated Oct 20). LiteLLM 1.107.0 on PyPI stole credentials for about two hours on Oct 21 (pin 1.106.2 and rotate keys). Railway disclosed potential access to encrypted and decrypted environment variables on Oct 21 (rotate all variables). PHP patched two critical AI-discovered RCE flaws in 8.5.12/8.4.27/8.3.36/8.2.35 on Oct 21. And OpenCode disclosed an Oct 16 Console breach affecting ~1.4% of hosted Console workspaces (local CLI/desktop keys were not affected)."],
  ["Which tools help cut AI coding agent costs or keep session context?", "Hystax OptScale Kompressor (Oct 21, MIT Rust binary) shortens repeated build and compiler logs deterministically so prompt caching still hits (vendor test: 22.7% lower Codex CLI cost on Terminal-Bench 2.1). ScaleDown's Constrained Decoding Models (Oct 13) run context extraction and summarization at $0.04/M input tokens on OpenRouter. Vercel AI Gateway session logs (Oct 18) track per-session agent spend and cache hit rates, and Asymptote Labs' MIT-licensed Beacon (Oct 20) carries lessons across sessions in Claude Code, Codex, Cursor and 20+ agents."],
  ["How is this list chosen?", "Every item here was covered in a Short Stack Daily issue or verified directly against the tool's official documentation and pricing page. Vendor benchmarks are labeled as vendor claims, and there are no affiliate links. Updated weekly."],
];

export default function Best() {
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Best AI coding tools compared and covered in Short Stack Daily", itemListElement: allItems.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.source })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <p className="eyebrow mono">Evergreen guide · updated Oct 26, 2026</p>
    <h1>Best AI <i className="serif">coding tools</i></h1>
    <p className="sub">Sourced comparison of the coding agents builders actually search—Claude Code, Cursor, GitHub Copilot, OpenAI Codex CLI and OpenCode—plus every coding model, agent tool and security advisory covered in Short Stack Daily. Vendor claims are labeled as vendor claims. No affiliate links.</p>

    <section className="p-sec">
      <h2>Coding agents compared</h2>
      <p className="dim">Official pricing and capabilities as of Oct 26, 2026, with links to each vendor&apos;s docs and our issue coverage.</p>
      <div className="cmp-wrap">
        <table className="cmp">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Where it runs</th>
              <th>Models</th>
              <th>Pricing (official)</th>
            </tr>
          </thead>
          <tbody>
            {compared.map(c => (
              <tr key={c.name}>
                <td><strong>{c.name}</strong></td>
                <td>{c.runsIn}</td>
                <td>{c.models}</td>
                <td>{c.pricing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="tools">
        {compared.map(c => (<li key={c.name}>
          <h3>{c.name}</h3>
          <p><strong>Where it runs:</strong> {c.runsIn}</p>
          <p><strong>Pricing:</strong> {c.pricing}</p>
          <p className="dim">{c.notes}</p>
          <p className="mono">
            <a className="ul" href={`/archive/${c.issue}${c.anchor ? "#" + c.anchor : ""}`}>Mentioned in Issue #{+c.issue.slice(-3)}</a>
            {" · "}
            <a className="ul" href={c.source} target="_blank" rel="noreferrer">Official source ↗</a>
            {c.extraSource && <>{" · "}<a className="ul" href={c.extraSource.url} target="_blank" rel="noreferrer">{c.extraSource.label}</a></>}
          </p>
        </li>))}
      </ul>
    </section>

    {groups.map(g => (<section key={g.h} className="p-sec"><h2>{g.h}</h2>
      <ul className="tools">{g.tools.map(t => (<li key={t.name}>
        <h3>{t.name}</h3><p>{t.what}</p><p className="dim">{t.facts}</p>
        <p className="mono"><a className="ul" href={`/archive/${t.issue}${t.anchor ? "#" + t.anchor : ""}`}>Read it in Issue #{+t.issue.slice(-3)}</a> · <a className="ul" href={t.source} target="_blank" rel="noreferrer">Source ↗</a></p>
      </li>))}</ul></section>))}
    <section className="p-sec"><h2>Quick answers</h2>
      <dl className="faq">{faq.map(([q, a]) => (<div key={q}><dt>{q}</dt><dd>{a}</dd></div>))}</dl></section>
    <section className="cta"><h2>Get new tools every weekday.</h2><SignupForm compact /></section>
  </main>);
}
