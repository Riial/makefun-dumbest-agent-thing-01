// The Dumbest Thing Your Agent Did Today — entry program.
// Writes one line (<=200 chars) to /output/entry.txt. The writing is the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My agent spent an hour building a trading bot, proved on the test data that it loses money, then asked if I wanted to submit it anyway.";

// Mirror the sealed gate: 1-200 UTF-8 chars, not whitespace-only.
// Fail loudly instead of writing an entry the gate would refuse.
const chars = [...TEXT].length;
if (chars < 1 || chars > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry text fails the gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
