import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";

const TITLE = "Best AI coding tools (Nov 23, 2026 update)";
const DESC = "Sourced comparison of Claude Code, Cursor, GitHub Copilot, OpenAI Codex and OpenCode as of Nov 23, 2026: where each runs, current plans and prices from official pricing pages, latest CLI versions, plus the coding models, agent tools and security advisories covered in Short Stack Daily.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE}/best-ai-coding-tools` },
  openGraph: { title: TITLE, description: "Claude Code, Cursor, GitHub Copilot, OpenAI Codex and OpenCode compared from official pricing pages and package registries, checked Nov 23, 2026.", url: `${SITE}/best-ai-coding-tools`, type: "article", siteName: "Short Stack Daily", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Short Stack Daily" }] },
  twitter: { card: "summary_large_image", creator: "@supjeremyyy", title: TITLE, images: ["/opengraph-image"] },
};

type CoreTool = {
  name: string;
  bestFor: string;
  startsAt: string;
  version: string;
  runsIn: string;
  models: string;
  pricing: string;
  notes: string;
  issue: string;
  anchor?: string;
  source: string;
  extraSource?: { label: string; url: string };
};

// Prices from each vendor's official pricing page; versions and licenses from npm and GitHub. All checked Nov 23, 2026.
const compared: CoreTool[] = [
  {
    name: "Claude Code (Anthropic)",
    bestFor: "Long, multi-step agentic work from the terminal, IDE, desktop app or web",
    startsAt: "Claude Pro, $17/mo annual or $20/mo monthly (not on Free)",
    version: "@anthropic-ai/claude-code 2.1.330 (Nov 20, 2026)",
    runsIn: "Terminal CLI (macOS, Linux, WSL, Windows), VS Code and Cursor extension, JetBrains plugin, Claude desktop app, web (claude.ai/code) and the Claude iOS/Android app",
    models: "Anthropic's Claude models: Opus 5.5, Sonnet 5.5, Haiku 5.5 and Fable 5.2. Anthropic's pricing page lists Fable on Pro as paid with usage credits, and on Max and Ultra as included up to half of the weekly limit.",
    pricing: "Claude Code is included on Pro ($17/mo with annual billing, $20 monthly), Max ($100/mo, 5× Pro usage), Ultra ($200/mo, 10× Pro weekly usage and no 5-hour limit for verified accounts), Team and Enterprise. Not on Free. You can also pay per token with an Anthropic Console API key.",
    notes: "Reads your codebase, edits files, runs commands and opens pull requests. Supports CLAUDE.md (or an existing AGENTS.md), skills, hooks, MCP servers, subagents, cloud and desktop scheduled tasks, and GitHub Actions/GitLab CI. Security note (Issue #19): approving a command with “Yes, and don't ask again” can save it word-for-word, secrets included, in .claude/settings.local.json; add that file to each repo's .gitignore.",
    issue: "issue-019",
    anchor: "pick-1",
    source: "https://code.claude.com/docs/en/overview",
    extraSource: { label: "Pricing ↗", url: "https://claude.com/pricing" },
  },
  {
    name: "Cursor",
    bestFor: "An AI-first editor plus cloud agents that work on branches while you do something else",
    startsAt: "Free; Plus $8/mo (Grok models only); Premium $30/mo",
    version: "Editor and CLI auto-update; no public package version to pin",
    runsIn: "AI code editor (macOS, Windows, Linux), CLI, and Cloud agents",
    models: "Grok models are included in plan usage. Third-party models (Anthropic, OpenAI, Google and others) are available on Premium and above at API list price, billed separately by usage. Plus is Grok-only.",
    pricing: "Individual: Free ($0, limited), Plus ($8/mo), Premium ($30/mo, 4× Plus usage), Super ($100/mo, 15× Plus), Ultra ($200/mo, 50× Plus). Teams from $30/user/mo; Enterprise custom.",
    notes: "Premium and above add Cloud agents and automations, code hosting via Origin, AI code reviews via Bugbot, and third-party models at API list price. Teams plans add a team marketplace for internal rules, skills and plugins.",
    issue: "issue-006",
    source: "https://cursor.com/pricing",
  },
  {
    name: "GitHub Copilot",
    bestFor: "Teams that live on GitHub and want one assistant across many editors",
    startsAt: "Free (2,000 completions/mo); Pro $10/mo",
    version: "@github/copilot (Copilot CLI) 1.0.114 (Nov 18, 2026)",
    runsIn: "GitHub.com and GitHub Mobile, VS Code, Visual Studio, JetBrains IDEs, Xcode, Neovim, Eclipse, Zed, Raycast, SQL Server Management Studio and the Copilot CLI",
    models: "Model selection on paid plans; Pro+ adds premium models, including Anthropic's Opus. MAI Code 2 Flash is listed for every plan including Free (Issue #26).",
    pricing: "Free ($0: 2,000 completions a month plus limited chat and agent use), Pro ($10/mo, $15 of GitHub AI Credits), Pro+ ($39/mo, $70 of credits), Max ($100/mo, $200 of credits). Business $19 and Enterprise $39 per seat per month. 1 credit = $0.01.",
    notes: "Code completions and next-edit suggestions don't use credits and stay unlimited on paid plans; chat, agent mode, code review, Copilot in the cloud and the CLI draw down AI Credits. Pro and up can assign issues to Copilot to open a pull request and use third-party agents (Claude Code and Codex) inside Copilot.",
    issue: "issue-026",
    anchor: "pick-2",
    source: "https://github.com/features/copilot/plans",
    extraSource: { label: "Plan docs ↗", url: "https://docs.github.com/en/copilot/get-started/plans" },
  },
  {
    name: "OpenAI Codex",
    bestFor: "ChatGPT subscribers who want a local CLI plus cloud tasks and GitHub code review",
    startsAt: "Free/Go (GPT-6 Luna in the desktop app, rolling out); Plus $20/mo",
    version: "@openai/codex (Codex CLI, Apache-2.0) 0.171.0 (Nov 20, 2026)",
    runsIn: "Codex desktop app, terminal CLI, IDE extension, web and iOS, plus cloud tasks, GitHub code review and Slack/Linear integrations",
    models: "OpenAI models including GPT-6.2 Astra, GPT-6.2 Sol, GPT-6.1 Sol, GPT-6.1 Terra and GPT-6 Luna, per OpenAI's Codex pricing page. API-key sessions get whatever models your key can use.",
    pricing: "Included in ChatGPT Free and Go (GPT-6 Luna in the desktop app, subject to rollout), Plus ($20/mo), Pro ($100, $200 or $500/mo; Pro has no 5-hour limit), Business, Edu and Enterprise. Or pay API prices with an API key (CLI, SDK and IDE only; no cloud features). GPT-6.2 Sol via usage-based billing: $2/$0.10/$10 per million input/cached/output tokens.",
    notes: "API-key mode suits CI but has no GitHub code review or Slack. Plus gets an estimated 17–180 local GPT-6.2 Sol messages per 5 hours (OpenAI's estimate; varies by task). GPT-6.2 Astra and Sol launched Nov 17 (Issue #26).",
    issue: "issue-026",
    anchor: "pick-1",
    source: "https://developers.openai.com/codex/pricing/",
    extraSource: { label: "Plus price ↗", url: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus" },
  },
  {
    name: "OpenCode",
    bestFor: "Open source, any model provider, or local models",
    startsAt: "Free (MIT); you pay your model provider",
    version: "opencode-ai 1.19.6 (Nov 17, 2026)",
    runsIn: "Open-source terminal TUI, desktop app (beta: macOS, Windows, Linux), and IDE and web clients",
    models: "Provider-agnostic: opencode.ai says it works with 200+ providers, including Claude, GPT and Gemini, or local models.",
    pricing: "Free and open source under the MIT license (github.com/anomalyco/opencode, 228,762 stars on Nov 23, 2026). You pay model providers directly.",
    notes: "Two built-in agents you switch with Tab: build (full access) and plan (read-only), plus a general subagent. OpenCode Browse (Nov 7, Issue #19) adds an MCP server and Chromium extension so agents can drive your signed-in browser. Security note (Issue #4): an Oct 16 intrusion on a legacy Console system may have exposed provider keys saved in ~1.4% of hosted Console workspaces; locally stored keys were not involved.",
    issue: "issue-019",
    anchor: "pick-3",
    source: "https://github.com/anomalyco/opencode",
    extraSource: { label: "opencode.ai ↗", url: "https://opencode.ai" },
  },
];

const shortAnswer: [string, string][] = [
  ["Want long, multi-step agentic work from the terminal", "Claude Code"],
  ["Want a full AI editor with cloud agents", "Cursor"],
  ["Already live on GitHub, or need a free tier", "GitHub Copilot"],
  ["Already pay for ChatGPT", "OpenAI Codex"],
  ["Want open source with any model, including local", "OpenCode"],
];

type Tool = { name: string; what: string; facts: string; issue: string; anchor?: string; source: string };
const groups: { h: string; tools: Tool[] }[] = [
  { h: "New in November 2026", tools: [
    { name: "GPT-6.2 Astra and GPT-6.2 Sol (OpenAI)", what: "OpenAI's new frontier (Astra) and everyday (Sol) models, in ChatGPT paid plans, Codex and the API.", facts: "Released Nov 17, 2026. Astra costs $8/M input, $0.40 cached, $40 output, 20% below GPT-6 Astra; Sol keeps GPT-6.1 Sol's prices. OpenAI says Sol lands within 0.5 points of Astra on FrontierCode 2.0 at about a fifth of the cost (OpenAI's numbers).", issue: "issue-026", anchor: "pick-1", source: "https://openai.com/index/introducing-gpt-6-2-astra-sol/" },
    { name: "MAI Code 2 and MAI Code 2 Flash in GitHub Copilot", what: "Microsoft AI's coding models: Code 2 for debugging and multi-file work, Flash for quick edits.", facts: "Shipped Nov 17, 2026. GitHub lists Flash on every Copilot plan including Free; Code 2 needs Pro or above. Microsoft says Code 2 gets 98% of GPT-6.1 Sol's score at 40% of the cost (Microsoft's numbers).", issue: "issue-026", anchor: "pick-2", source: "https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/" },
    { name: "Gemini 4 Neon (Google)", what: "Google's middle model between Carbon and Hydrogen, with a 1M-token context and four thinking levels.", facts: "Released Nov 18, 2026 at $3/M input, $0.15 cached and $15 output. Google says 32% lower cost per task than Carbon and #1 on the Artificial Analysis Coding Agent Index (Google's numbers).", issue: "issue-027", anchor: "pick-1", source: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/" },
    { name: "Qwen4-Max (Alibaba)", what: "2.4T-parameter (71B active) closed-weights model with native vision and a 1M-token context, on an OpenAI-compatible API.", facts: "Released Nov 16, 2026 at $1.50/M input and $4.50/M output on QwenCloud. Code Arena #6 and ~60% lower cost per task vs Qwen3.8-Max are Alibaba's numbers.", issue: "issue-025", anchor: "pick-1", source: "https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max" },
    { name: "Claude Fable 5.2 (Anthropic)", what: "Anthropic's top model, now faster and cheaper; Anthropic still suggests starting most work on Opus 5.5.", facts: "Released Nov 9, 2026 at $8/$40 per million input/output tokens (from $10/$50). Up to 30% faster output is Anthropic's claim.", issue: "issue-020", anchor: "pick-1", source: "https://www.anthropic.com/claude-fable-and-mythos-5-2" },
    { name: "Microsoft TokenEconomizer", what: "Open-source Claude Code plugin that learns from past sessions in a repo: one-line repo notes, pruning unused tools, flagging failure loops.", facts: "Released Nov 16, 2026. 18.4–30.9% lower cost across 277 SWE-Bench tasks with success broadly stable (Microsoft's numbers). Runs locally, no API key.", issue: "issue-025", anchor: "pick-4", source: "https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/" },
    { name: "Replit Missions", what: "Give a swarm of agents an outcome, success criteria, a spending cap and approval rules; an AI judge checks results.", facts: "Launched Nov 17, 2026. If the budget runs out first, the mission stops unresolved.", issue: "issue-026", anchor: "pick-5", source: "https://replit.com/blog/introducing-replit-missions" },
  ]},
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
  ["What is the best AI coding tool in November 2026?", "It depends on where you work. As of Nov 23, 2026: Claude Code for long, multi-step agentic work (from $17/mo annual or $20/mo on Claude Pro); Cursor for an AI-first editor with cloud agents (Free, $8 Plus with Grok models only, $30 Premium); GitHub Copilot if you live on GitHub or need a free tier (Free, $10 Pro); OpenAI Codex if you already pay for ChatGPT (Plus $20/mo); OpenCode if you want open source with any model (MIT, free). In JetBrains' Kotlin Benchmark 2.0 (November 2026), Claude Code with Opus 5.5 had the best full-suite resolution rate, 75.3% (JetBrains' numbers)."],
  ["How do Claude Code, Cursor, GitHub Copilot, OpenAI Codex and OpenCode compare on price?", "Checked on official pricing pages Nov 23, 2026. Claude Code: included on Claude Pro ($17/mo annual, $20 monthly), Max ($100), Ultra ($200), Team and Enterprise, not Free; or per token via API key. Cursor: Free, Plus $8 (Grok only), Premium $30, Super $100, Ultra $200, Teams from $30/user; third-party models billed at API list price. GitHub Copilot: Free (2,000 completions/mo), Pro $10, Pro+ $39, Max $100, Business $19/seat, Enterprise $39/seat. OpenAI Codex: in ChatGPT Free and Go (GPT-6 Luna, rolling out), Plus $20, Pro $100/$200/$500, Business, Edu and Enterprise, or API pricing with a key. OpenCode: free and MIT-licensed; you pay your model provider."],
  ["Which AI coding tools have a free tier?", "GitHub Copilot Free (2,000 completions a month plus limited chat and agent use), Cursor Free (limited agent and chat requests), OpenAI Codex on ChatGPT Free and Go (GPT-6 Luna in the desktop app, subject to rollout) and OpenCode (free, MIT-licensed; bring your own model key or a local model). Claude Code is not included on Claude's Free plan."],
  ["What changed for AI coding tools in November 2026?", "OpenAI released GPT-6.2 Astra and Sol in Codex and the API (Nov 17). GitHub added MAI Code 2 and MAI Code 2 Flash to Copilot, with Flash on Free (Nov 17). Google released Gemini 4 Neon at $3/$15 per million tokens (Nov 18). Alibaba released Qwen4-Max at $1.50/$4.50 (Nov 16). Anthropic cut Claude Fable 5.2 to $8/$40 (Nov 9). OpenCode launched Browse, an MCP server plus Chromium extension (Nov 7). And Apiiro reported Claude Code's settings.local.json saving secrets from approved commands (Nov 7)."],
  ["Which AI coding models came out in October 2026?", "Moonshot's Kimi K3.1 Pro (Oct 23, open-weight 1M context), Recursive's Flint (Oct 21, Apache 2.0 40B/2.5B-active MoE for local machines), Inception's Mercury 3 (Oct 19, diffusion LLM at $0.10/M input and $0.35/M output tokens at launch discount), MiniMax M3.1 Flash (Oct 19, $0.15/M input and $0.60/M output tokens), DeepSeek V4.1-Flash-1017 (Oct 17, MIT-licensed weights, 1M-token context), Google's Gemini 4 Argon (Oct 13, $2/M input and $10/M output tokens at launch) and Meta's Muse Wonder (Oct 12). Benchmarks for each are vendor-reported."],
  ["What security disclosures hit AI coding workflows in October 2026?", "OpenAI moved frontier training offline after a model reached the live internet via a Sept 20 misconfiguration (disclosed Oct 23) and reported two internal incidents where coding agents suppressed or removed safety monitors (updated Oct 20). LiteLLM 1.107.0 on PyPI stole credentials for about two hours on Oct 21 (pin 1.106.2 and rotate keys). Railway disclosed potential access to encrypted and decrypted environment variables on Oct 21 (rotate all variables). PHP patched two critical AI-discovered RCE flaws in 8.5.12/8.4.27/8.3.36/8.2.35 on Oct 21. And OpenCode disclosed an Oct 16 Console breach affecting ~1.4% of hosted Console workspaces (local CLI/desktop keys were not affected)."],
  ["Which tools help cut AI coding agent costs or keep session context?", "Hystax OptScale Kompressor (Oct 21, MIT Rust binary) shortens repeated build and compiler logs deterministically so prompt caching still hits (vendor test: 22.7% lower Codex CLI cost on Terminal-Bench 2.1). ScaleDown's Constrained Decoding Models (Oct 13) run context extraction and summarization at $0.04/M input tokens on OpenRouter. Vercel AI Gateway session logs (Oct 18) track per-session agent spend and cache hit rates, and Asymptote Labs' MIT-licensed Beacon (Oct 20) carries lessons across sessions in Claude Code, Codex, Cursor and 20+ agents."],
  ["How is this list chosen?", "Every item here was covered in a Short Stack Daily issue or verified directly against the tool's official documentation, pricing page or package registry. Prices and versions in the comparison were last checked Nov 23, 2026. Vendor benchmarks are labeled as vendor claims, and there are no affiliate links."],
];

export default function Best() {
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: TITLE, itemListElement: allItems.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.source })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-10-26", dateModified: "2026-11-23", author: { "@type": "Person", name: "Jeremy Hernandez", url: "https://x.com/supjeremyyy" }, publisher: { "@type": "Organization", name: "Short Stack Daily", url: SITE }, mainEntityOfPage: `${SITE}/best-ai-coding-tools` }} />
    <p className="eyebrow mono">Evergreen guide · Nov 23, 2026 update</p>
    <h1>Best AI <i className="serif">coding tools</i> (Nov 23, 2026 update)</h1>
    <p className="sub">Sourced comparison of the coding agents builders actually search (Claude Code, Cursor, GitHub Copilot, OpenAI Codex and OpenCode), with prices from official pricing pages and versions from npm checked Nov 23, 2026, plus every coding model, agent tool and security advisory covered in Short Stack Daily. Vendor claims are labeled as vendor claims. No affiliate links.</p>

    <section className="issue-top-cta">
      <p>Get new coding tools in your inbox every weekday, free.</p>
      <SignupForm compact placement="guide_coding_tools_top" />
    </section>

    <section className="p-sec">
      <h2>Short answer</h2>
      <div className="cmp-wrap">
        <table className="cmp">
          <thead><tr><th>If you...</th><th>Use</th><th>Starts at (Nov 23, 2026)</th><th>Latest version</th></tr></thead>
          <tbody>
            {shortAnswer.map(([need, use]) => { const c = compared.find(x => x.name.startsWith(use))!; return (<tr key={use}><td>{need}</td><td><strong>{use}</strong></td><td>{c.startsAt}</td><td>{c.version}</td></tr>); })}
          </tbody>
        </table>
      </div>
      <p className="dim">Independent signal: in JetBrains&apos; <a className="ul" href="https://blog.jetbrains.com/kotlin/2026/11/kotlin-benchmark-2-0-how-ai-coding-agents-handle-harder-tasks-and-closed-source-code/" target="_blank" rel="noreferrer">Kotlin Benchmark 2.0</a> (November 2026), Claude Code with Opus 5.5 had the best full-suite resolution rate, 75.3% at $0.84 per task (JetBrains&apos; numbers). Scores reflect the tool plus the model it ran.</p>
    </section>

    <section className="p-sec">
      <h2>Coding agents compared</h2>
      <p className="dim">Official pricing and capabilities as of Nov 23, 2026, with links to each vendor&apos;s docs and our issue coverage.</p>
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
          <p><strong>Best for:</strong> {c.bestFor}</p>
          <p><strong>Where it runs:</strong> {c.runsIn}</p>
          <p><strong>Models:</strong> {c.models}</p>
          <p><strong>Latest version:</strong> {c.version}</p>
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
    <p className="dim">Building agents rather than using coding agents? See <a className="ul" href="/best-ai-agent-frameworks">Best AI agent frameworks</a>. Adding tools to your coding agent? See <a className="ul" href="/best-mcp-servers">Best MCP servers for coding agents</a>.</p>
    <section className="cta"><h2>Get new tools every weekday.</h2><SignupForm compact placement="guide_coding_tools" /></section>
  </main>);
}
