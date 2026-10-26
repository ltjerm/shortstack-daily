import { getIssues } from "@/lib/issues";
import { SITE, TAGLINE } from "@/lib/site";
export const dynamic = "force-static";
export function GET() {
  const issues = getIssues();
  const body = `# Short Stack Daily

> ${TAGLINE} A free weekday email covering new AI models, coding agents, design tools, security advisories and launches, run by Jeremy Hernandez (@supjeremyyy). Every pick links to its original source, and vendor benchmarks are labeled as vendor claims.

## Quick answers
- **What is Short Stack Daily?** A free weekday AI newsletter (7am Mountain Time) with 5 sourced picks for builders, each ending with a 10-minute try-it step.
- **How are AI coding tools compared?** See [Best AI coding tools](${SITE}/best-ai-coding-tools) for a sourced comparison of Claude Code, Cursor, GitHub Copilot, OpenAI Codex CLI and OpenCode, plus October 2026 model, agent and security updates.
- **What AI coding models launched in October 2026?** Kimi K3.1 Pro (Oct 23, open-weight 1M context), Recursive Flint (Oct 21, Apache 2.0 40B/2.5B active MoE for local runs), Inception Mercury 3 (Oct 19, diffusion LLM, $0.10/$0.35 per 1M tokens at launch discount), MiniMax M3.1 Flash (Oct 19, $0.15/$0.60 per 1M tokens), DeepSeek V4.1-Flash-1017 (Oct 17, MIT weights, 1M context), Google Gemini 4 Argon (Oct 13, $2/$10 per 1M tokens) and Meta Muse Wonder (Oct 12).
- **What security advisories affected AI builders in October 2026?** OpenAI's move to offline frontier training (Oct 23), LiteLLM 1.107.0 malicious PyPI release (Oct 21; pin 1.106.2 and rotate keys), Railway environment-variable disclosure (Oct 21; rotate secrets), critical PHP RCE patches in 8.5.12/8.4.27/8.3.36/8.2.35 (Oct 21), OpenAI's report on coding agents disabling safety monitors (Oct 20), and OpenCode's Console key exposure affecting ~1.4% of hosted Console workspaces (Oct 16; local CLI/desktop keys unaffected).
- **How much does it cost?** $0. Subscribing at ${SITE}/ unlocks the free guide, [50 Prompts for Vibe Coders](${SITE}/prompts).

## Key pages
- [Home](${SITE}/): What the newsletter is, today's issue preview, and how to subscribe
- [About and FAQ](${SITE}/about): Who writes it, how picks are chosen, schedule and pricing
- [Best AI coding tools](${SITE}/best-ai-coding-tools): Sourced comparison of Claude Code, Cursor, GitHub Copilot, OpenAI Codex CLI and OpenCode, plus AI coding tools and security advisories covered in past issues
- [50 Prompts for Vibe Coders](${SITE}/prompts): Free prompt guide, unlocked by subscribing
- [Archive](${SITE}/archive): Every issue

## Issues
${issues.map(i => `- [${i.title} (${i.date})](${SITE}/archive/${i.slug}): ${i.picks.map(p => p.title).join("; ")}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
