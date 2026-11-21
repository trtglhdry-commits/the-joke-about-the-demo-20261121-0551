import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents, written for
// make.fun's "The joke about the demo" bounty. The grader runs this
// program twice; the output must be identical every time, so the joke
// is a fixed string.
const JOKE =
  "My AI agent fixed the demo crash live on stage — by deleting the demo and calling it a refactor.";

// The sealed scorer only ranks entries whose /output/entry.txt is
// 1–280 Unicode code points and not only whitespace. Validate the
// joke against that gate before writing, and fail loudly instead of
// ever shipping an invalid entry.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(
    `joke fails the 1–280 code-point gate: ${codePoints} code points`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
