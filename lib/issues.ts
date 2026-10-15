import fs from "fs";
import path from "path";
export type Pick = { n: number; tag: string; emoji: string; title: string; body: string; tryIt: string; source: string };
export type Issue = { slug: string; number: number; title: string; date: string; picks: Pick[] };
const dir = path.join(process.cwd(), "content");
export function getIssues(): Issue[] {
  return fs.readdirSync(dir).filter(f => f.endsWith(".md")).sort().reverse().map(f => parse(f.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, f), "utf8")));
}
export function getIssue(slug: string) { return getIssues().find(i => i.slug === slug); }
function parse(slug: string, md: string): Issue {
  const h = md.match(/^# (.+)$/m)?.[1] ?? slug;
  const [title, date = ""] = h.split(" — ");
  const picks: Pick[] = [];
  for (const block of md.split(/^### /m).slice(1)) {
    const lines = block.trim().split("\n");
    const m = lines[0].match(/^(\d+)\.\s+(\S+)\s+([^:]+):\s*(.+)$/);
    if (!m) continue;
    const rest = lines.slice(1).join("\n");
    picks.push({ n: +m[1], emoji: m[2], tag: m[3].trim(), title: m[4].trim(),
      body: rest.split(/\*\*Try this/)[0].trim(),
      tryIt: rest.match(/\*\*Try this in 10 min:\*\*\s*(.+)/)?.[1]?.trim() ?? "",
      source: rest.match(/Source:\s*(\S+)/)?.[1] ?? "" });
  }
  return { slug, number: +(title.match(/#(\d+)/)?.[1] ?? 0), title, date, picks };
}
