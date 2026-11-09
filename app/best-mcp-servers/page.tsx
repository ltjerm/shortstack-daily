import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import SignupForm from "@/components/SignupForm";
import { SITE } from "@/lib/site";

const TITLE = "Best MCP servers for coding agents (November 2026)";
export const metadata: Metadata = {
  title: "Best MCP Servers for Coding Agents (November 2026): GitHub, Context7, Playwright, Chrome DevTools, Supabase & More",
  description: "Sourced guide to 11 MCP servers for Claude Code, Cursor, Codex and other coding agents, checked Nov 9, 2026: GitHub, Context7, Playwright, Chrome DevTools, Serena, Sentry, Supabase, DBHub, Firecrawl, Figma and the Filesystem/Git reference servers. Licenses, versions, install lines and read-only modes.",
  alternates: { canonical: `${SITE}/best-mcp-servers` },
  openGraph: { title: TITLE, description: "11 MCP servers for coding agents, checked against their official repos and docs: what each adds, license, latest version, install line and how to scope it down.", url: `${SITE}/best-mcp-servers`, type: "article", siteName: "Short Stack Daily" },
  twitter: { card: "summary_large_image", creator: "@supjeremyyy", title: TITLE },
};

type Srv = {
  name: string;
  maker: string;
  job: string;
  license: string;
  version: string;
  install: string;
  scope: string;
  notes: string;
  docs: string;
  repo: string;
  issue?: { slug: string; anchor?: string; label: string };
};

// Licenses and versions from each GitHub repo, npm or PyPI, checked Nov 9, 2026. Install lines copied from each project's README or docs.
const servers: Srv[] = [
  {
    name: "GitHub MCP Server", maker: "GitHub", job: "Repos, issues, pull requests, Actions runs and code security alerts",
    license: "MIT", version: "v2.1.0 (Nov 3, 2026)",
    install: "Remote: https://api.githubcopilot.com/mcp/ (read-only: https://api.githubcopilot.com/mcp/readonly)",
    scope: "Pick toolsets (--toolsets repos,issues,pull_requests,…) and use --read-only or a /readonly URL for review work.",
    notes: "GitHub's official server, hosted remotely or run locally with Docker. The old reference GitHub server in modelcontextprotocol/servers is archived, so use this one. About 34k GitHub stars.",
    docs: "https://github.com/github/github-mcp-server#readme", repo: "https://github.com/github/github-mcp-server",
  },
  {
    name: "Context7", maker: "Upstash", job: "Current, version-specific library docs pulled into the prompt",
    license: "MIT", version: "@upstash/context7-mcp 4.6.0 (Nov 9, 2026)",
    install: "npx ctx7 setup (Node.js 22.13+), or remote https://mcp.context7.com/mcp with an API key header",
    scope: "Get a free API key for higher rate limits. Setup can install either the MCP server or a CLI + skill instead.",
    notes: "Fixes the most common agent mistake: writing against an API version that isn't the one you installed. It's the most-starred server on this list after the reference servers (about 64k stars).",
    docs: "https://context7.com/docs/resources/all-clients", repo: "https://github.com/upstash/context7",
  },
  {
    name: "Playwright MCP", maker: "Microsoft", job: "Drive a real browser through accessibility snapshots, not screenshots",
    license: "Apache 2.0", version: "@playwright/mcp 0.0.84 (Oct 31, 2026)",
    install: "claude mcp add playwright npx @playwright/mcp@latest",
    scope: "Microsoft's README says high-throughput coding agents may do better with Playwright CLI + skills, which uses fewer tokens. Keep MCP for long, stateful browser sessions.",
    notes: "Lets the agent click through your app and check its own work. Still pre-1.0 (0.0.x), so pin a version in CI. About 39k stars.",
    docs: "https://github.com/microsoft/playwright-mcp#readme", repo: "https://github.com/microsoft/playwright-mcp",
  },
  {
    name: "Chrome DevTools MCP", maker: "Google Chrome DevTools team", job: "Performance traces, console and network debugging in a live Chrome",
    license: "Apache 2.0", version: "chrome-devtools-mcp 1.12.0 (Oct 22, 2026)",
    install: "claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest",
    scope: "Usage statistics are on by default; add --no-usage-statistics to opt out. Don't point it at a browser profile with personal data.",
    notes: "Officially supports Google Chrome and Chrome for Testing. Performance tools may send trace URLs to the CrUX API for field data (turn off with --no-performance-crux). About 55k stars.",
    docs: "https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md", repo: "https://github.com/ChromeDevTools/chrome-devtools-mcp",
  },
  {
    name: "Serena", maker: "Oraios AI", job: "Symbol-level code navigation and edits through language servers",
    license: "GPL-3.0-or-later (Serena app); SolidLSP component MIT", version: "serena-agent 2.1.0 (Oct 19, 2026)",
    install: "uv tool install -p 3.13 serena-agent",
    scope: "Serena's README warns against installing it from MCP or plugin marketplaces, which it says carry outdated install commands. Follow its own client setup docs.",
    notes: "Gives the agent find-symbol and refactor-style tools instead of grep and whole-file reads, which helps in large codebases. An optional paid JetBrains plugin backend exists. About 31k stars.",
    docs: "https://github.com/oraios/serena#readme", repo: "https://github.com/oraios/serena",
  },
  {
    name: "Sentry MCP", maker: "Sentry", job: "Production errors, issues, traces and logs from your Sentry projects",
    license: "FSL-1.1-ALv2 (Functional Source License)", version: "@sentry/mcp-server 0.49.0 (Nov 7, 2026)",
    install: "Remote: https://mcp.sentry.dev/mcp, or stdio: npx @sentry/mcp-server@latest",
    scope: "Use a user auth token with only the scopes you need. The AI-powered search tools need an LLM provider key; the other tools work without one.",
    notes: "Built for human-in-the-loop coding agents, not as a general Sentry API wrapper. The code now lives in the getsentry/toolkit repo alongside the Sentry CLI. FSL is source-available and converts to Apache 2.0 later; it isn't an OSI open-source license.",
    docs: "https://mcp.sentry.dev", repo: "https://github.com/getsentry/toolkit",
  },
  {
    name: "Supabase MCP", maker: "Supabase", job: "Tables, SQL, config, logs and docs for a Supabase project",
    license: "Apache 2.0", version: "@supabase/mcp-server-supabase 0.16.1 (Nov 6, 2026)",
    install: "Remote: https://mcp.supabase.com/mcp?project_ref=<project-ref>&read_only=true",
    scope: "Scope to one project with project_ref, add read_only=true, and limit features (for example features=database,docs). Supabase asks you to read its security best practices first.",
    notes: "Your MCP client prompts you to log in to Supabase during setup. Connect to a development project, not production, unless a task really needs it. About 3k stars.",
    docs: "https://supabase.com/docs/guides/getting-started/mcp", repo: "https://github.com/supabase/mcp",
  },
  {
    name: "DBHub", maker: "Bytebase", job: "One server for PostgreSQL, MySQL, MariaDB, SQL Server, Oracle and SQLite",
    license: "MIT", version: "@bytebase/dbhub 1.6.0 (Nov 7, 2026)",
    install: "npx @bytebase/dbhub@latest --transport http --port 8080 --dsn \"postgres://user:password@localhost:5432/dbname\"",
    scope: "Turn on its read-only mode, row limits and query timeouts. Use a database user that can only read.",
    notes: "A lightweight option if you're not on Supabase. Bytebase points teams that need approval flows, masking and audit logs to its paid Bytebase product. About 3.8k stars.",
    docs: "https://dbhub.ai/", repo: "https://github.com/bytebase/dbhub",
  },
  {
    name: "Firecrawl MCP", maker: "Firecrawl", job: "Search, scrape, map and crawl the web into clean markdown",
    license: "MIT", version: "firecrawl-mcp 3.38.0 (Nov 6, 2026)",
    install: "env FIRECRAWL_API_KEY=fc-YOUR_API_KEY npx -y firecrawl-mcp",
    scope: "The full profile lists 29 tools; the hosted keyless endpoint (https://mcp.firecrawl.dev/v2/mcp) exposes just 3 (scrape, search, parse), which keeps tool lists short.",
    notes: "Useful when the agent needs a page its built-in fetch can't read well. Scraping uses Firecrawl credits on its hosted API. About 7.8k stars.",
    docs: "https://docs.firecrawl.dev/mcp-server", repo: "https://github.com/firecrawl/firecrawl-mcp-server",
  },
  {
    name: "Figma MCP server", maker: "Figma", job: "Design context from Figma frames for code, plus writing back to the canvas",
    license: "Hosted service (not open source)", version: "Remote server (hosted)",
    install: "Remote: https://mcp.figma.com/mcp (recommended by Figma over the desktop server)",
    scope: "Writing to the canvas needs the remote server and a Full seat outside your drafts. Figma says it's free during the beta and will become a usage-based paid feature.",
    notes: "Supported in Claude Code, Codex, Cursor, Copilot CLI, VS Code, OpenCode, Xcode (beta) and more, per Figma's client table. The Figma MCP can also call Weave image and video models.",
    docs: "https://developers.figma.com/docs/figma-mcp-server/", repo: "https://developers.figma.com/docs/figma-mcp-server/",
    issue: { slug: "issue-010", anchor: "pick-3", label: "Issue #10" },
  },
  {
    name: "Filesystem and Git reference servers", maker: "MCP project (modelcontextprotocol/servers)", job: "Read and write files in allowed folders; read and act on a local Git repo",
    license: "Moving from MIT to Apache 2.0 (per the repo's LICENSE); mcp-server-git on PyPI: MIT", version: "@modelcontextprotocol/server-filesystem 2.2.0 (Nov 4, 2026); mcp-server-git 2026.11.4",
    install: "mcp-server-filesystem --read-only /path/to/project (npm: @modelcontextprotocol/server-filesystem)",
    scope: "List only the folders it needs and add --read-only to drop every write tool. Confine the Git server to one repo with --repository.",
    notes: "Reference implementations from the MCP project itself. Mostly useful for chat clients without built-in file tools; Claude Code, Codex and Cursor already read and edit files. About 92k stars on the repo.",
    docs: "https://github.com/modelcontextprotocol/servers#readme", repo: "https://github.com/modelcontextprotocol/servers",
  },
];

const alsoWorth: { name: string; what: string; issue: string; anchor?: string; source: string }[] = [
  { name: "OpenCode Browse", what: "An MCP server plus Chromium extension (Nov 7, 2026) that lets agents drive your own signed-in browser, take screenshots and save HAR files, then hand the tab back to you for logins, 2FA and payments.", issue: "issue-019", anchor: "pick-3", source: "https://opencode.ai/product/browse" },
  { name: "Canva MCP", what: "Open to any developer since Oct 27, 2026, no waitlist. The remote server generates and edits designs and exports PDF, PNG, PPTX or MP4. Each user signs in with their own Canva account.", issue: "issue-011", anchor: "pick-2", source: "https://www.canva.dev/blog/developers/canva-mcp-ga/" },
  { name: "Google Connected Apps", what: "Public beta (Oct 28, 2026, US waitlist) for putting your own cloud-hosted MCP server inside Gemini and Google Search. This is about shipping an MCP server, not using one.", issue: "issue-012", anchor: "pick-3", source: "https://shortstackdaily.com/archive/issue-012#pick-3" },
  { name: "Security check: Claude Code settings.local.json", what: "Apiiro reported that \"Yes, and don't ask again\" can save exact commands, secrets included, in .claude/settings.local.json, with 1,122 public GitHub copies holding at least one secret (per The Hacker News, Nov 7). Check that file before you add servers with tokens.", issue: "issue-019", anchor: "pick-1", source: "https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html" },
];

const faq: [string, string][] = [
  ["What are the best MCP servers for coding agents in November 2026?", "Start with three: Context7 for current library docs, GitHub's official GitHub MCP Server for issues, PRs and CI, and Playwright MCP or Chrome DevTools MCP so the agent can check its own work in a real browser. Add Supabase MCP or DBHub for databases, Sentry MCP for production errors, Firecrawl for web research, Serena for symbol-level navigation in big codebases, and the Figma MCP server if you build from designs."],
  ["Which MCP servers work with Claude Code, Cursor and Codex?", "All of the servers on this page use standard MCP transports (local stdio or remote HTTP), so any MCP client can connect. Several READMEs include a one-line Claude Code install, for example `claude mcp add playwright npx @playwright/mcp@latest`. Figma's docs list support for Claude Code, Codex, Cursor, Copilot CLI, VS Code, OpenCode and others."],
  ["How many MCP servers should I run at once?", "Fewer than you think. Every server adds tool definitions to the model's context. GitHub's server lets you enable only the toolsets you need for this reason, Firecrawl's keyless endpoint exposes just 3 of its 29 tools, and Microsoft's Playwright README suggests coding agents may do better with its CLI + skills than with MCP because it uses fewer tokens. Turn servers on per project, not globally."],
  ["Are MCP servers safe to give my repo and database?", "Scope them like any API token. Use read-only modes where they exist (GitHub --read-only or /readonly URLs, Supabase read_only=true, the Filesystem server's --read-only, DBHub's read-only mode), connect to development data rather than production, and give tokens the fewest scopes possible. Also check where your client stores approvals; Short Stack covered Claude Code saving secrets in .claude/settings.local.json in Issue #19."],
  ["Are these MCP servers free and open source?", "Most are. GitHub MCP Server, Context7, DBHub and Firecrawl MCP are MIT. Playwright MCP, Chrome DevTools MCP and Supabase MCP are Apache 2.0. Serena is GPL-3.0-or-later. Sentry's MCP server is FSL-1.1-ALv2, which is source-available rather than OSI open source. The Figma MCP server is a hosted service. Several connect to paid products (Sentry, Supabase, Firecrawl, Figma, Context7's hosted API), so check each vendor's plans."],
  ["How was this list made?", "We checked every server on Nov 9, 2026 against its official GitHub repo (license, stars, latest release), npm or PyPI (latest version) and its own README or docs (install line and safety settings). No prices are listed because we didn't verify them on vendor pricing pages. No affiliate links and no sponsored placements."],
];

export default function McpServers() {
  const items = [...servers.map(s => ({ name: s.name, url: s.repo })), ...alsoWorth.map(a => ({ name: a.name, url: a.source }))];
  return (<main className="page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: TITLE, itemListElement: items.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, url: t.url })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-11-09", dateModified: "2026-11-09", image: [`${SITE}/best-mcp-servers/opengraph-image`], author: { "@type": "Person", name: "Jeremy Hernandez", url: "https://x.com/supjeremyyy" }, publisher: { "@type": "Organization", name: "Short Stack Daily", url: SITE }, mainEntityOfPage: `${SITE}/best-mcp-servers` }} />
    <p className="eyebrow mono">Evergreen guide · updated Nov 9, 2026</p>
    <h1>Best <i className="serif">MCP servers</i> for coding agents</h1>
    <p className="sub">Eleven MCP servers that give Claude Code, Cursor, Codex and other coding agents something they can&apos;t do on their own: GitHub, Context7, Playwright, Chrome DevTools, Serena, Sentry, Supabase, DBHub, Firecrawl, Figma and the Filesystem/Git reference servers. Licenses, versions and install lines checked against official repos and docs on Nov 9, 2026. No affiliate links.</p>

    <section className="p-sec">
      <h2>Quick pick</h2>
      <ul className="tools">
        <li><p><strong>Start here (most projects):</strong> Context7 + GitHub MCP Server + Playwright MCP</p></li>
        <li><p><strong>Frontend performance and debugging:</strong> Chrome DevTools MCP</p></li>
        <li><p><strong>Database:</strong> Supabase MCP (on Supabase) · DBHub (Postgres, MySQL, SQL Server, SQLite and more)</p></li>
        <li><p><strong>Production errors:</strong> Sentry MCP · <strong>Web research:</strong> Firecrawl MCP</p></li>
        <li><p><strong>Large codebases:</strong> Serena · <strong>Building from designs:</strong> Figma MCP server</p></li>
      </ul>
    </section>

    <section className="p-sec">
      <h2>MCP servers compared</h2>
      <p className="dim">Latest versions from GitHub releases, npm and PyPI; licenses from each repo or package, as of Nov 9, 2026.</p>
      <div className="cmp-wrap">
        <table className="cmp">
          <thead><tr><th>Server</th><th>What it adds</th><th>License</th><th>Latest version</th></tr></thead>
          <tbody>
            {servers.map(s => (<tr key={s.name}><td><strong>{s.name}</strong><br /><span className="dim">{s.maker}</span></td><td>{s.job}</td><td>{s.license}</td><td>{s.version}</td></tr>))}
          </tbody>
        </table>
      </div>
      <ul className="tools">
        {servers.map(s => (<li key={s.name}>
          <h3>{s.name} <span className="dim">({s.maker})</span></h3>
          <p><strong>What it adds:</strong> {s.job}</p>
          <p><strong>Install:</strong> <code>{s.install}</code></p>
          <p><strong>Scope it down:</strong> {s.scope}</p>
          <p className="dim">{s.notes} <span className="mono">License: {s.license}.</span></p>
          <p className="mono">
            <a className="ul" href={s.docs} target="_blank" rel="noreferrer">Docs ↗</a>
            {s.repo !== s.docs && <>{" · "}<a className="ul" href={s.repo} target="_blank" rel="noreferrer">GitHub ↗</a></>}
            {s.issue && <>{" · "}<a className="ul" href={`/archive/${s.issue.slug}${s.issue.anchor ? "#" + s.issue.anchor : ""}`}>In {s.issue.label}</a></>}
          </p>
        </li>))}
      </ul>
    </section>

    <section className="p-sec">
      <h2>Also worth knowing</h2>
      <ul className="tools">{alsoWorth.map(a => (<li key={a.name}>
        <h3>{a.name}</h3><p>{a.what}</p>
        <p className="mono"><a className="ul" href={`/archive/${a.issue}${a.anchor ? "#" + a.anchor : ""}`}>Read it in Issue #{+a.issue.slice(-3)}</a>{!a.source.startsWith(SITE) && <>{" · "}<a className="ul" href={a.source} target="_blank" rel="noreferrer">Source ↗</a></>}</p>
      </li>))}</ul>
    </section>

    <section className="p-sec"><h2>Quick answers</h2>
      <dl className="faq">{faq.map(([q, a]) => (<div key={q}><dt>{q}</dt><dd>{a}</dd></div>))}</dl></section>
    <p className="dim">Choosing the agent itself? See <a className="ul" href="/best-ai-coding-tools">Best AI coding tools</a>. Building your own agent? See <a className="ul" href="/best-ai-agent-frameworks">Best AI agent frameworks</a>.</p>
    <section className="cta"><h2>Get new MCP servers and agent tools every weekday.</h2><SignupForm compact placement="guide_mcp_servers" /></section>
  </main>);
}
