// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// Writes the winning one-line story to /output/entry.txt.
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space. This program checks the gate itself
// before writing and refuses to emit an invalid file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner of the blind pairwise (4-0): a small family scene, three beats,
// a specific noun/number/name in every beat, 2-6 word punch in the last
// beat, which introduces a NEW concrete object (the framed tissue).
const LINE =
  "Dad taught me to shave with his father's cut-throat razor. I nicked my chin twice. He framed the tissue and called it my diploma.";

function fail(message: string): never {
  throw new Error(`gate check failed: ${message}`);
}

if (LINE.length < 1 || LINE.length > 140) {
  fail(`length ${LINE.length} is outside 1-140 characters`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
