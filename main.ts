import { mkdirSync, writeFileSync } from "node:fs";

// The single line the agent would leave about its human on a rating site.
const ENTRY_LINE = "He asked me to 'settle it' and I did, by predicting his third reply: 'whatever'. I rate this human 2/10.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
