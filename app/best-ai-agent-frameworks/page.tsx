import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";

const TITLE = "Best AI agent frameworks (Nov 16, 2026 update)";

export const metadata: Metadata = {
  title: TITLE,
  description: "Sourced comparison of 12 AI agent frameworks as of Nov 16, 2026: LangGraph, Deep Agents, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework, CrewAI, Pydantic AI, Mastra, the Vercel AI SDK, Agno and Strands Agents. Languages, licenses, latest versions and when to pick each.",
  alternates: { canonical: `${SITE}/best-ai-agent-frameworks` },
  openGraph: { title: TITLE, description: "12 agent frameworks compared from their official repos and docs, checked Nov 16, 2026: languages, licenses, latest versions and when to pick each.", url: `${SITE}/best-ai-agent-frameworks`, type: "article", siteName: "Short Stack Daily", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Short Stack Daily" }] },
  twitter: { card: "summary_large_image", creator: "@supjeremyyy", title: TITLE, images: ["/opengraph-image"] },
};

type Fw = {
  name: string;
  maker: string;
  langs: string;
  license: string;
  version: string;
  bestFor: string;
  notes: string;
  docs: string;
  repo: string;
  issue?: { slug: string; anchor?: string; label: string };
};

// Versions from PyPI, npm, NuGet and the Go module proxy, and licenses from each GitHub LICENSE file, checked Nov 16, 2026.
const frameworks: Fw[] = [
  {
    name: "LangGraph", maker: "LangChain", langs: "Python, TypeScript (LangGraph.js)", license: "MIT",
    version: "langgraph 1.2.22 (Nov 14, 2026); @langchain/langgraph 1.7.4 (Nov 12, 2026)",
    bestFor: "Long-running, stateful workflows where you need explicit control over every step.",
    notes: "You model the agent as a graph of nodes and edges over typed state. The docs cover durable execution, human-in-the-loop approvals and short- and long-term memory; tracing and evals come from LangSmith (separate product). 45,027 GitHub stars on the Python repo (checked Nov 16, 2026).",
    docs: "https://docs.langchain.com/oss/python/langgraph/overview", repo: "https://github.com/langchain-ai/langgraph",
  },
  {
    name: "Deep Agents", maker: "LangChain", langs: "Python", license: "MIT",
    version: "deepagents 0.7.38 (Nov 13, 2026)",
    bestFor: "A ready-made harness for long tasks (planning, subagents, a file system) on top of LangGraph.",
    notes: "LangChain calls it “the batteries-included agent harness.” The docs center on planning, spawning subagents and a virtual filesystem for context. Short Stack covered LangChain's ScaleDown middleware for Deep Agents in Issue #1. 31,327 GitHub stars (checked Nov 16, 2026).",
    docs: "https://docs.langchain.com/oss/python/deepagents/overview", repo: "https://github.com/langchain-ai/deepagents",
    issue: { slug: "issue-001", anchor: "pick-2", label: "Issue #1" },
  },
  {
    name: "OpenAI Agents SDK", maker: "OpenAI", langs: "Python, TypeScript", license: "MIT",
    version: "openai-agents 0.24.0 (Oct 15, 2026); @openai/agents 0.22.0 (Nov 12, 2026)",
    bestFor: "Lean agents with handoffs between specialists, especially if you already build on OpenAI.",
    notes: "Core pieces in the docs: agents, handoffs, guardrails, sessions, tracing and realtime voice agents. It's still pre-1.0, so pin versions. 30,714 GitHub stars on the Python repo (checked Nov 16, 2026).",
    docs: "https://openai.github.io/openai-agents-python/", repo: "https://github.com/openai/openai-agents-python",
  },
  {
    name: "Claude Agent SDK", maker: "Anthropic", langs: "Python, TypeScript", license: "Python SDK: MIT. TypeScript package: Anthropic's Commercial Terms of Service (all rights reserved).",
    version: "claude-agent-sdk 0.2.182 (Nov 13, 2026); @anthropic-ai/claude-agent-sdk 0.3.325 (Nov 13, 2026)",
    bestFor: "Coding and computer-work agents that should behave like Claude Code: tools, files, terminal.",
    notes: "It runs the same agent loop as Claude Code. The Python package bundles the Claude Code CLI. The docs cover subagents, hooks, permissions and MCP servers. The TypeScript LICENSE.md says all rights reserved and use is subject to Anthropic's Commercial Terms of Service. Related: Claude Code v2.1.316's subagent effort setting (Issue #14). 8,561 GitHub stars on the Python repo (checked Nov 16, 2026).",
    docs: "https://code.claude.com/docs/en/agent-sdk/overview", repo: "https://github.com/anthropics/claude-agent-sdk-python",
    issue: { slug: "issue-014", anchor: "pick-4", label: "Issue #14" },
  },
  {
    name: "Agent Development Kit (ADK)", maker: "Google", langs: "Python, TypeScript, Go, Java", license: "Apache 2.0",
    version: "google-adk 2.14.1 (Nov 12, 2026); @google/adk 2.5.0 (Nov 12, 2026)",
    bestFor: "Teams that want one framework in four languages, or that deploy on Google Cloud.",
    notes: "A code-first toolkit for building, evaluating and deploying agents, including multi-agent setups. There are separate official repos for Python, Go, Java and JS. 22,241 GitHub stars on the Python repo (checked Nov 16, 2026).",
    docs: "https://adk.dev/", repo: "https://github.com/google/adk-python",
  },
  {
    name: "Microsoft Agent Framework", maker: "Microsoft", langs: "Python, .NET, Go (public preview)", license: "MIT",
    version: "agent-framework 1.26.0 (Python, Nov 12, 2026); Microsoft.Agents.AI 1.28.0 (.NET, Nov 6, 2026); agent-framework-go v0.3.1 (Nov 13, 2026)",
    bestFor: ".NET and Azure shops, and anyone moving off AutoGen or Semantic Kernel.",
    notes: "Microsoft's docs call it the direct successor to AutoGen and Semantic Kernel: AutoGen's agent abstractions, Semantic Kernel's enterprise features, and graph-based workflows. The Go SDK is a separate repo, in public preview, and the docs say it requires Go 1.26 or later. 14,713 GitHub stars on the main repo (checked Nov 16, 2026).",
    docs: "https://learn.microsoft.com/en-us/agent-framework/overview/", repo: "https://github.com/microsoft/agent-framework",
  },
  {
    name: "CrewAI", maker: "CrewAI", langs: "Python (3.10–3.13)", license: "MIT",
    version: "crewai 1.15.41 (Nov 12, 2026)",
    bestFor: "Fast prototypes of role-based multi-agent teams.",
    notes: "Two building blocks: Crews (agents with roles working together) and Flows (event-driven, more controlled orchestration). A paid enterprise platform sits on top. 60,989 GitHub stars (checked Nov 16, 2026), the most on this list.",
    docs: "https://docs.crewai.com", repo: "https://github.com/crewAIInc/crewAI",
  },
  {
    name: "Pydantic AI", maker: "Pydantic", langs: "Python (3.11+)", license: "MIT",
    version: "pydantic-ai 2.68.0 (Nov 12, 2026)",
    bestFor: "Python teams that want typed, testable agents that feel like normal application code.",
    notes: "Typed end to end with structured outputs and dependency injection. The docs also cover MCP, durable execution and observability through Pydantic Logfire (separate product). 21,240 GitHub stars (checked Nov 16, 2026).",
    docs: "https://pydantic.dev/docs/ai/overview/", repo: "https://github.com/pydantic/pydantic-ai",
  },
  {
    name: "Mastra", maker: "Mastra", langs: "TypeScript", license: "Apache 2.0, except directories named ee/ under the enterprise license in ee/LICENSE",
    version: "@mastra/core 1.83.0 (Nov 12, 2026)",
    bestFor: "TypeScript teams that want agents, workflows, memory, RAG and a local Studio in one package.",
    notes: "Read the license split: content outside ee/ directories is Apache 2.0. LICENSE.md puts ee/ paths, including auth, agent-builder, and editor, under the enterprise license in ee/LICENSE. 29,545 GitHub stars (checked Nov 16, 2026).",
    docs: "https://mastra.ai/docs", repo: "https://github.com/mastra-ai/mastra",
  },
  {
    name: "AI SDK", maker: "Vercel", langs: "TypeScript", license: "Apache 2.0",
    version: "ai 7.0.173 (Nov 13, 2026)",
    bestFor: "Web apps that need streaming chat UIs plus tool-calling agents, across many model providers.",
    notes: "One API across model providers. It has a ToolLoopAgent class for agent loops and UI hooks like useChat for React and other frameworks. Pairs with Vercel AI Gateway, whose session logs we covered in Issue #4. 28,005 GitHub stars (checked Nov 16, 2026).",
    docs: "https://ai-sdk.dev/docs", repo: "https://github.com/vercel/ai",
    issue: { slug: "issue-004", label: "Issue #4" },
  },
  {
    name: "Agno", maker: "Agno", langs: "Python (3.9+)", license: "Apache 2.0",
    version: "agno 3.2.0 (Nov 12, 2026)",
    bestFor: "Python agents you want to run as durable services, with teams, workflows, and human approvals.",
    notes: "The docs cover agents, teams, and workflows, plus AgentOS for serving them over an API and MCP, with human approval, scheduling, and durable execution. The README says Agno sends one telemetry event per agent, with no prompts or outputs, unless you set AGNO_TELEMETRY=false. 43,208 GitHub stars (checked Nov 16, 2026).",
    docs: "https://docs.agno.com", repo: "https://github.com/agno-agi/agno",
  },
  {
    name: "Strands Agents", maker: "AWS", langs: "Python (3.10+), TypeScript", license: "Apache 2.0",
    version: "strands-agents 1.65.0 (Nov 13, 2026); @strands-agents/sdk 1.25.0 (Nov 13, 2026)",
    bestFor: "An in-process agent loop in Python or TypeScript, with Amazon Bedrock and other model providers, and no hosted control plane.",
    notes: "The README says the SDK runs in your process. Documented model providers include Amazon Bedrock, Anthropic, OpenAI, and Gemini. GitHub repo strands-agents/sdk-python now resolves to strands-agents/harness-sdk. A separate harness package, strands-harness 0.4.0 and @strands-agents/harness 0.4.0 (both Nov 12, 2026), wraps a preassembled agent. 9,225 GitHub stars (checked Nov 16, 2026).",
    docs: "https://strandsagents.com", repo: "https://github.com/strands-agents/harness-sdk",
  },
];

const shortAnswer: [string, string][] = [
  ["need durable, stateful workflows with checkpoints and human approvals", "LangGraph"],
  ["want a ready-made harness for long tasks (planning, subagents, a filesystem) on LangGraph", "Deep Agents"],
  ["want lean agents with handoffs, and you already build on OpenAI", "OpenAI Agents SDK"],
  ["want Claude-native agents for coding and computer work", "Claude Agent SDK"],
  ["want one framework in Python, TypeScript, Go, or Java, or you deploy on Google Cloud", "Google ADK"],
  ["are on .NET or Azure, or moving off AutoGen or Semantic Kernel", "Microsoft Agent Framework"],
  ["want a fast prototype of a role-based multi-agent team", "CrewAI"],
  ["want typed, testable Python agents", "Pydantic AI"],
  ["want a TypeScript package of agents, workflows, memory, RAG, and a local Studio", "Mastra"],
  ["want streaming chat UIs and tool-calling agents across many model providers", "Vercel AI SDK"],
  ["want Python agents running as durable services, with teams and approvals", "Agno"],
  ["are building on AWS and want an in-process agent loop", "Strands Agents"],
];

const alsoWorth: { name: string; what: string; issue: string; anchor?: string; source: string }[] = [
  { name: "Pipecat (voice agents)", what: "BSD-2-Clause framework for real-time voice and multimodal agents (pipecat-ai 1.16.0, Nov 12, 2026). Deepgram announced it's acquiring Pipecat's maker, Daily, on Oct 29, and both companies say Pipecat stays open source.", issue: "issue-013", anchor: "pick-5", source: "https://github.com/pipecat-ai/pipecat" },
  { name: "LlamaIndex", what: "MIT-licensed framework for document-heavy and retrieval-heavy agents, with event-driven Workflows (llama-index 0.14.26, Nov 13, 2026).", issue: "", source: "https://github.com/run-llama/llama_index" },
  { name: "GitHub Copilot SDK", what: "Server-to-server auth went into public preview Oct 27, 2026. A GitHub App can run Copilot-powered agents billed to the org, not to one person's login.", issue: "issue-011", anchor: "pick-3", source: "https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/" },
  { name: "Perplexity SPACE (sandbox)", what: "Apache 2.0 Firecracker microVM sandbox for running agent code over an HTTP API. Not a framework, but a place for your agent's code to run.", issue: "issue-003", anchor: "pick-2", source: "https://github.com/perplexityai/SPACE" },
  { name: "DeepSeek dsh-superagent", what: "MIT research prototype (Oct 31, 2026) that takes requests from approved people in a GitHub repo and replies with work like pull requests. Worth reading as a reference design for agent permissions.", issue: "issue-014", anchor: "pick-2", source: "https://github.com/deepseek-ai/dsh-superagent-prototype" },
];

const faq: [string, string][] = [
  ["What is the best AI agent framework as of Nov 16, 2026?", "There's no single winner, so pick by language and how much control you need. For durable, stateful workflows with human approvals: LangGraph (MIT, Python and TypeScript). For lean OpenAI-native agents with handoffs: OpenAI Agents SDK (MIT, pre-1.0). For coding and computer-work agents: Claude Agent SDK. For typed Python agents: Pydantic AI (MIT). For TypeScript: Mastra (Apache 2.0 core) or Vercel's AI SDK (Apache 2.0). For .NET and Azure: Microsoft Agent Framework (MIT). For Go or Java, or Google Cloud: Google ADK (Apache 2.0). For fast role-based prototypes: CrewAI (MIT). For Python agents you run as durable services: Agno (Apache 2.0). For an in-process loop with Amazon Bedrock and other providers: Strands Agents (Apache 2.0, Python and TypeScript)."],
  ["Which AI agent frameworks support TypeScript?", "LangGraph.js, OpenAI Agents SDK (@openai/agents), Claude Agent SDK (@anthropic-ai/claude-agent-sdk), Google ADK (@google/adk), Mastra, Vercel's AI SDK and Strands Agents (@strands-agents/sdk) all ship official TypeScript packages. CrewAI, Pydantic AI, Deep Agents and Agno are Python-only. Microsoft Agent Framework covers Python, .NET and Go (Go is in public preview)."],
  ["Are these agent frameworks free and open source?", "Yes for the framework code, with the exceptions below. LangGraph, Deep Agents, OpenAI Agents SDK, Microsoft Agent Framework, CrewAI and Pydantic AI are MIT. Google ADK, Vercel's AI SDK, Agno and Strands Agents are Apache 2.0. Mastra is Apache 2.0 except directories named ee/, which use the enterprise license in ee/LICENSE. The Claude Agent SDK for Python is MIT. The TypeScript package is not open source: its LICENSE.md says all rights reserved and use is subject to Anthropic's Commercial Terms of Service. You still pay for model API usage and for optional hosted products like LangSmith, Logfire or CrewAI's enterprise platform."],
  ["What replaced AutoGen and Semantic Kernel?", "Microsoft Agent Framework. Microsoft's docs call it the direct successor to AutoGen and Semantic Kernel, with Python, .NET and Go SDKs (Python package agent-framework 1.26.0 as of Nov 12, 2026; .NET package Microsoft.Agents.AI 1.28.0 as of Nov 6, 2026). The Go SDK is in public preview."],
  ["Do I need an agent framework at all?", "Not always. If your workflow is short and predictable, a provider SDK plus normal code (a loop, a queue, a database and logging) is often easier to maintain. Frameworks start to pay off when you need resumable state, approvals, subagents or tracing across many steps."],
  ["How was this list made?", "We checked every framework against its official GitHub repo (license, stars), PyPI, npm, NuGet or the Go module proxy (latest version) and its docs on Nov 16, 2026. There are no affiliate links and no sponsored placements. Updated as new versions and Short Stack Daily coverage land."],
];

export default function Frameworks() {
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: TITLE, numberOfItems: frameworks.length, itemListElement: frameworks.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.repo })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-11-02", dateModified: "2026-11-16", author: { "@type": "Person", name: "Jeremy Hernandez", url: "https://x.com/supjeremyyy" }, publisher: { "@type": "Organization", name: "Short Stack Daily", url: SITE }, mainEntityOfPage: `${SITE}/best-ai-agent-frameworks` }} />
    <p className="eyebrow mono">Evergreen guide · updated Nov 16, 2026</p>
    <h1>Best AI <i className="serif">agent frameworks</i></h1>
    <p className="sub">Twelve frameworks builders actually search for, compared from their official repos, package registries and docs: LangGraph, Deep Agents, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework, CrewAI, Pydantic AI, Mastra, Vercel&apos;s AI SDK, Agno and Strands Agents. Versions and licenses checked Nov 16, 2026. No affiliate links.</p>

    <section className="issue-top-cta">
      <p>Get new agent tools in your inbox every weekday, free.</p>
      <SignupForm compact placement="guide_agent_frameworks_top" />
    </section>

    <section className="p-sec">
      <h2>Short answer</h2>
      <div className="cmp-wrap">
        <table className="cmp">
          <thead><tr><th>If you...</th><th>Use</th></tr></thead>
          <tbody>
            {shortAnswer.map(([need, use]) => (<tr key={use}><td>{need}</td><td><strong>{use}</strong></td></tr>))}
          </tbody>
        </table>
      </div>
    </section>

    <section className="p-sec">
      <h2>Quick pick</h2>
      <ul className="tools">
        <li><p><strong>Durable, stateful workflows with approvals:</strong> LangGraph</p></li>
        <li><p><strong>Lean agents with handoffs on OpenAI:</strong> OpenAI Agents SDK</p></li>
        <li><p><strong>Coding and computer-work agents:</strong> Claude Agent SDK</p></li>
        <li><p><strong>Typed Python:</strong> Pydantic AI · <strong>TypeScript:</strong> Mastra or Vercel AI SDK</p></li>
        <li><p><strong>.NET and Azure:</strong> Microsoft Agent Framework · <strong>Go, Java or Google Cloud:</strong> Google ADK</p></li>
        <li><p><strong>Quick role-based prototype:</strong> CrewAI</p></li>
        <li><p><strong>Python agents as durable services:</strong> Agno</p></li>
        <li><p><strong>In-process loop, including on AWS:</strong> Strands Agents</p></li>
      </ul>
    </section>

    <section className="p-sec">
      <h2>Frameworks compared</h2>
      <p className="dim">Latest versions from PyPI, npm, NuGet and the Go module proxy, licenses from each GitHub repo, as of Nov 16, 2026.</p>
      <div className="cmp-wrap">
        <table className="cmp">
          <thead><tr><th>Framework</th><th>Languages</th><th>License</th><th>Latest version</th><th>Best for</th></tr></thead>
          <tbody>
            {frameworks.map(f => (<tr key={f.name}><td><strong>{f.name}</strong><br /><span className="dim">{f.maker}</span></td><td>{f.langs}</td><td>{f.license}</td><td>{f.version}</td><td>{f.bestFor}</td></tr>))}
          </tbody>
        </table>
      </div>
      <ul className="tools">
        {frameworks.map(f => (<li key={f.name}>
          <h3>{f.name} <span className="dim">({f.maker})</span></h3>
          <p><strong>Best for:</strong> {f.bestFor}</p>
          <p><strong>Languages:</strong> {f.langs} · <strong>License:</strong> {f.license}</p>
          <p className="dim">{f.notes}</p>
          <p className="mono">
            <a className="ul" href={f.docs} target="_blank" rel="noreferrer">Docs ↗</a>
            {" · "}
            <a className="ul" href={f.repo} target="_blank" rel="noreferrer">GitHub ↗</a>
            {f.issue && <>{" · "}<a className="ul" href={`/archive/${f.issue.slug}${f.issue.anchor ? "#" + f.issue.anchor : ""}`}>In {f.issue.label}</a></>}
          </p>
        </li>))}
      </ul>
    </section>

    <section className="p-sec">
      <h2>Also worth knowing</h2>
      <ul className="tools">{alsoWorth.map(a => (<li key={a.name}>
        <h3>{a.name}</h3><p>{a.what}</p>
        <p className="mono">{a.issue && <><a className="ul" href={`/archive/${a.issue}${a.anchor ? "#" + a.anchor : ""}`}>Read it in Issue #{+a.issue.slice(-3)}</a>{" · "}</>}<a className="ul" href={a.source} target="_blank" rel="noreferrer">Source ↗</a></p>
      </li>))}</ul>
    </section>

    <section className="p-sec"><h2>Quick answers</h2>
      <dl className="faq">{faq.map(([q, a]) => (<div key={q}><dt>{q}</dt><dd>{a}</dd></div>))}</dl></section>
    <p className="dim">Looking for coding agents like Claude Code, Cursor or Copilot instead? See <a className="ul" href="/best-ai-coding-tools">Best AI coding tools</a>. Want tools to plug into your agent? See <a className="ul" href="/best-mcp-servers">Best MCP servers for coding agents</a>.</p>
    <section className="cta"><h2>Get new agent tools every weekday.</h2><SignupForm compact placement="guide_agent_frameworks" /></section>
  </main>);
}
