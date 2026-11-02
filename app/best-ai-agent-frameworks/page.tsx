import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best AI Agent Frameworks (November 2026): LangGraph, OpenAI Agents SDK, Claude Agent SDK, Google ADK, CrewAI, Mastra & More",
  description: "Sourced comparison of 10 AI agent frameworks as of Nov 2, 2026: LangGraph, Deep Agents, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework, CrewAI, Pydantic AI, Mastra and the Vercel AI SDK. Languages, licenses, latest versions and when to pick each.",
  alternates: { canonical: `${SITE}/best-ai-agent-frameworks` },
  openGraph: { title: "Best AI agent frameworks (November 2026)", description: "10 agent frameworks compared from their official repos and docs: languages, licenses, latest versions and when to pick each.", url: `${SITE}/best-ai-agent-frameworks`, type: "article", siteName: "Short Stack Daily", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Short Stack Daily" }] },
  twitter: { card: "summary_large_image", creator: "@supjeremyyy", title: "Best AI agent frameworks (November 2026)", images: ["/opengraph-image"] },
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

// Versions from PyPI / npm and licenses from each GitHub repo, checked Nov 2, 2026.
const frameworks: Fw[] = [
  {
    name: "LangGraph", maker: "LangChain", langs: "Python, TypeScript (LangGraph.js)", license: "MIT",
    version: "langgraph 1.2.19 (Oct 30, 2026); @langchain/langgraph 1.6.0",
    bestFor: "Long-running, stateful workflows where you need explicit control over every step.",
    notes: "You model the agent as a graph of nodes and edges over typed state. The docs cover durable execution, human-in-the-loop approvals and short- and long-term memory; tracing and evals come from LangSmith (separate product). About 44k GitHub stars.",
    docs: "https://docs.langchain.com/oss/python/langgraph/overview", repo: "https://github.com/langchain-ai/langgraph",
  },
  {
    name: "Deep Agents", maker: "LangChain", langs: "Python", license: "MIT",
    version: "deepagents 0.7.32 (Oct 23, 2026)",
    bestFor: "A ready-made harness for long tasks (planning, subagents, a file system) on top of LangGraph.",
    notes: "LangChain calls it “the batteries-included agent harness.” The docs center on planning, spawning subagents and a virtual filesystem for context. Short Stack covered LangChain's ScaleDown middleware for Deep Agents in Issue #1.",
    docs: "https://docs.langchain.com/deepagents", repo: "https://github.com/langchain-ai/deepagents",
    issue: { slug: "issue-001", anchor: "pick-2", label: "Issue #1" },
  },
  {
    name: "OpenAI Agents SDK", maker: "OpenAI", langs: "Python, TypeScript", license: "MIT",
    version: "openai-agents 0.24.0 (Oct 15, 2026); @openai/agents 0.21.0",
    bestFor: "Lean agents with handoffs between specialists, especially if you already build on OpenAI.",
    notes: "Core pieces in the docs: agents, handoffs, guardrails, sessions, tracing and realtime voice agents. It's still pre-1.0, so pin versions. About 30k GitHub stars on the Python repo.",
    docs: "https://openai.github.io/openai-agents-python/", repo: "https://github.com/openai/openai-agents-python",
  },
  {
    name: "Claude Agent SDK", maker: "Anthropic", langs: "Python, TypeScript", license: "Python SDK: MIT. TypeScript package: see the license in its README.",
    version: "claude-agent-sdk 0.2.176 (Oct 31, 2026); @anthropic-ai/claude-agent-sdk 0.3.316",
    bestFor: "Coding and computer-work agents that should behave like Claude Code: tools, files, terminal.",
    notes: "It runs the same agent loop as Claude Code. The Python package bundles the Claude Code CLI. The docs cover subagents, hooks, permissions and MCP servers. Related: Claude Code v2.1.316's subagent effort setting (Issue #14).",
    docs: "https://platform.claude.com/docs/en/agent-sdk/overview", repo: "https://github.com/anthropics/claude-agent-sdk-python",
    issue: { slug: "issue-014", anchor: "pick-4", label: "Issue #14" },
  },
  {
    name: "Agent Development Kit (ADK)", maker: "Google", langs: "Python, TypeScript, Go, Java", license: "Apache 2.0",
    version: "google-adk 2.13.0 (Oct 23, 2026); @google/adk 2.4.0",
    bestFor: "Teams that want one framework in four languages, or that deploy on Google Cloud.",
    notes: "A code-first toolkit for building, evaluating and deploying agents, including multi-agent setups. There are separate official repos for Python, Go, Java and JS. About 22k GitHub stars on the Python repo.",
    docs: "https://google.github.io/adk-docs/", repo: "https://github.com/google/adk-python",
  },
  {
    name: "Microsoft Agent Framework", maker: "Microsoft", langs: "Python, .NET", license: "MIT",
    version: "agent-framework 1.24.0 (Python, Oct 30, 2026)",
    bestFor: ".NET and Azure shops, and anyone moving off AutoGen or Semantic Kernel.",
    notes: "Microsoft's docs describe it as the successor that combines AutoGen and Semantic Kernel, with agents plus graph-based workflows. About 14k GitHub stars.",
    docs: "https://learn.microsoft.com/en-us/agent-framework/overview/", repo: "https://github.com/microsoft/agent-framework",
  },
  {
    name: "CrewAI", maker: "CrewAI", langs: "Python (3.10–3.13)", license: "MIT",
    version: "crewai 1.15.34 (Nov 1, 2026)",
    bestFor: "Fast prototypes of role-based multi-agent teams.",
    notes: "Two building blocks: Crews (agents with roles working together) and Flows (event-driven, more controlled orchestration). A paid enterprise platform sits on top. About 60k GitHub stars, the most on this list.",
    docs: "https://docs.crewai.com", repo: "https://github.com/crewAIInc/crewAI",
  },
  {
    name: "Pydantic AI", maker: "Pydantic", langs: "Python (3.11+)", license: "MIT",
    version: "pydantic-ai 2.64.0 (Oct 30, 2026)",
    bestFor: "Python teams that want typed, testable agents that feel like normal application code.",
    notes: "Typed end to end with structured outputs and dependency injection. The docs also cover MCP, durable execution and observability through Pydantic Logfire (separate product). About 21k GitHub stars.",
    docs: "https://ai.pydantic.dev", repo: "https://github.com/pydantic/pydantic-ai",
  },
  {
    name: "Mastra", maker: "Mastra", langs: "TypeScript", license: "Apache 2.0, except ee/ directories under a separate enterprise license",
    version: "@mastra/core 1.81.0 (Nov 2, 2026)",
    bestFor: "TypeScript teams that want agents, workflows, memory, RAG and a local Studio in one package.",
    notes: "Read the license split: the core is Apache 2.0, but enterprise features under ee/ (such as auth) have their own license. About 29k GitHub stars.",
    docs: "https://mastra.ai/docs", repo: "https://github.com/mastra-ai/mastra",
  },
  {
    name: "AI SDK", maker: "Vercel", langs: "TypeScript", license: "Apache 2.0",
    version: "ai 7.0.159",
    bestFor: "Web apps that need streaming chat UIs plus tool-calling agents, across many model providers.",
    notes: "One API across model providers. It has a ToolLoopAgent class for agent loops and UI hooks like useChat for React and other frameworks. Pairs with Vercel AI Gateway, whose session logs we covered in Issue #4. About 28k GitHub stars.",
    docs: "https://ai-sdk.dev/docs", repo: "https://github.com/vercel/ai",
    issue: { slug: "issue-004", label: "Issue #4" },
  },
];

const alsoWorth: { name: string; what: string; issue: string; anchor?: string; source: string }[] = [
  { name: "Pipecat (voice agents)", what: "BSD-2-Clause framework for real-time voice and multimodal agents (pipecat-ai 1.15.0, Oct 29, 2026). Deepgram announced it's acquiring Pipecat's maker, Daily, on Oct 29, and both companies say Pipecat stays open source.", issue: "issue-013", anchor: "pick-5", source: "https://github.com/pipecat-ai/pipecat" },
  { name: "LlamaIndex", what: "MIT-licensed framework for document-heavy and retrieval-heavy agents, with event-driven Workflows (llama-index 0.14.25, Sep 21, 2026).", issue: "", source: "https://github.com/run-llama/llama_index" },
  { name: "GitHub Copilot SDK", what: "Server-to-server auth went into public preview Oct 27, 2026. A GitHub App can run Copilot-powered agents billed to the org, not to one person's login.", issue: "issue-011", anchor: "pick-3", source: "https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/" },
  { name: "Perplexity SPACE (sandbox)", what: "Apache 2.0 Firecracker microVM sandbox for running agent code over an HTTP API. Not a framework, but a place for your agent's code to run.", issue: "issue-003", anchor: "pick-2", source: "https://github.com/perplexityai/SPACE" },
  { name: "DeepSeek dsh-superagent", what: "MIT research prototype (Oct 31, 2026) that takes requests from approved people in a GitHub repo and replies with work like pull requests. Worth reading as a reference design for agent permissions.", issue: "issue-014", anchor: "pick-2", source: "https://github.com/deepseek-ai/dsh-superagent-prototype" },
];

const faq: [string, string][] = [
  ["What is the best AI agent framework in November 2026?", "There's no single winner, so pick by language and how much control you need. For durable, stateful workflows with human approvals: LangGraph (MIT, Python and TypeScript). For lean OpenAI-native agents with handoffs: OpenAI Agents SDK (MIT, pre-1.0). For coding and computer-work agents: Claude Agent SDK. For typed Python agents: Pydantic AI (MIT). For TypeScript: Mastra (Apache 2.0 core) or Vercel's AI SDK (Apache 2.0). For .NET and Azure: Microsoft Agent Framework (MIT). For Go or Java, or Google Cloud: Google ADK (Apache 2.0). For fast role-based prototypes: CrewAI (MIT)."],
  ["Which AI agent frameworks support TypeScript?", "LangGraph.js, OpenAI Agents SDK (@openai/agents), Claude Agent SDK (@anthropic-ai/claude-agent-sdk), Google ADK (@google/adk), Mastra and Vercel's AI SDK all ship official TypeScript packages. CrewAI, Pydantic AI and Deep Agents are Python-only. Microsoft Agent Framework covers Python and .NET."],
  ["Are these agent frameworks free and open source?", "Yes for the frameworks themselves. LangGraph, Deep Agents, OpenAI Agents SDK, Microsoft Agent Framework, CrewAI and Pydantic AI are MIT. Google ADK and Vercel's AI SDK are Apache 2.0. Mastra is Apache 2.0 except its ee/ enterprise directories. The Claude Agent SDK for Python is MIT, and its TypeScript package points to the license in its README. You still pay for model API usage and for optional hosted products like LangSmith, Logfire or CrewAI's enterprise platform."],
  ["What replaced AutoGen and Semantic Kernel?", "Microsoft Agent Framework. Microsoft's docs describe it as the successor that brings AutoGen and Semantic Kernel together, with Python and .NET SDKs (Python package agent-framework 1.24.0 as of Oct 30, 2026)."],
  ["Do I need an agent framework at all?", "Not always. If your workflow is short and predictable, a provider SDK plus normal code (a loop, a queue, a database and logging) is often easier to maintain. Frameworks start to pay off when you need resumable state, approvals, subagents or tracing across many steps."],
  ["How was this list made?", "We checked every framework against its official GitHub repo (license, stars), PyPI or npm (latest version) and its docs on Nov 2, 2026. There are no affiliate links and no sponsored placements. Updated as new versions and Short Stack Daily coverage land."],
];

export default function Frameworks() {
  const items = [...frameworks.map(f => ({ name: f.name, url: f.repo })), ...alsoWorth.map(a => ({ name: a.name, url: a.source }))];
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: "Best AI agent frameworks (November 2026)", itemListElement: items.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.url })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "Best AI agent frameworks (November 2026)", datePublished: "2026-11-02", dateModified: "2026-11-02", author: { "@type": "Person", name: "Jeremy Hernandez", url: "https://x.com/supjeremyyy" }, publisher: { "@type": "Organization", name: "Short Stack Daily", url: SITE }, mainEntityOfPage: `${SITE}/best-ai-agent-frameworks` }} />
    <p className="eyebrow mono">Evergreen guide · updated Nov 2, 2026</p>
    <h1>Best AI <i className="serif">agent frameworks</i></h1>
    <p className="sub">Ten frameworks builders actually search for, compared from their official repos, package registries and docs: LangGraph, Deep Agents, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework, CrewAI, Pydantic AI, Mastra and Vercel&apos;s AI SDK. Versions and licenses checked Nov 2, 2026. No affiliate links.</p>

    <section className="p-sec">
      <h2>Quick pick</h2>
      <ul className="tools">
        <li><p><strong>Durable, stateful workflows with approvals:</strong> LangGraph</p></li>
        <li><p><strong>Lean agents with handoffs on OpenAI:</strong> OpenAI Agents SDK</p></li>
        <li><p><strong>Coding and computer-work agents:</strong> Claude Agent SDK</p></li>
        <li><p><strong>Typed Python:</strong> Pydantic AI · <strong>TypeScript:</strong> Mastra or Vercel AI SDK</p></li>
        <li><p><strong>.NET and Azure:</strong> Microsoft Agent Framework · <strong>Go, Java or Google Cloud:</strong> Google ADK</p></li>
        <li><p><strong>Quick role-based prototype:</strong> CrewAI</p></li>
      </ul>
    </section>

    <section className="p-sec">
      <h2>Frameworks compared</h2>
      <p className="dim">Latest versions from PyPI and npm, licenses from each GitHub repo, as of Nov 2, 2026.</p>
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
    <p className="dim">Looking for coding agents like Claude Code, Cursor or Copilot instead? See <a className="ul" href="/best-ai-coding-tools">Best AI coding tools</a>.</p>
    <section className="cta"><h2>Get new agent tools every weekday.</h2><SignupForm compact placement="guide_agent_frameworks" /></section>
  </main>);
}
