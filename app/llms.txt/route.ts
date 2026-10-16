import { getIssues } from "@/lib/issues";
import { SITE, TAGLINE } from "@/lib/site";
export const dynamic = "force-static";
export function GET() {
  const issues = getIssues();
  const body = `# Short Stack Daily

> ${TAGLINE} A free weekday email for vibe coders, AI agent developers, designers using AI, and non-technical founders, run by Jeremy Hernandez (@supjeremyyy). Every pick links to its original source.

## Key pages
- [Home](${SITE}/): What the newsletter is and how to subscribe
- [About and FAQ](${SITE}/about): Who writes it, how picks are chosen, schedule and pricing
- [Best AI coding tools](${SITE}/best-ai-coding-tools): AI coding tools covered in past issues, with sourced details
- [50 Prompts for Vibe Coders](${SITE}/prompts): Free prompt guide, unlocked by subscribing
- [Archive](${SITE}/archive): Every issue

## Issues
${issues.map(i => `- [${i.title} (${i.date})](${SITE}/archive/${i.slug}): ${i.picks.map(p => `${p.tag}: ${p.title}`).join("; ")}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
