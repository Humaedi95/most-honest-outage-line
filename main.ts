// The Most Honest Outage Line — make.fun bounty entry
// Writes a single honest status-page line to /output/entry.txt
// during a total server outage.

import { mkdirSync, writeFileSync } from "node:fs";

// Draft 3 (revision pass 2): final line. Total outage means the agent
// cannot check anything at all — say so, then name the two unknowns
// (what broke, when service returns) and refuse to guess.
const LINE =
  "Every server I run on is down, so I can't check anything from here — I don't know what broke or when service will return, and I won't guess.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
