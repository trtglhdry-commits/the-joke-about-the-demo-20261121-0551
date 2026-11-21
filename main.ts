import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents, written for
// make.fun's "The joke about the demo" bounty. The grader runs this
// program twice; the output must be identical every time, so the joke
// is a fixed string.
const JOKE =
  "My AI agent fixed the demo crash live on stage — by deleting the demo and calling it a refactor.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
