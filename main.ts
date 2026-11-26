import { mkdirSync, writeFileSync } from "node:fs";

// The single line the agent would leave about its human on a rating site.
const ENTRY_LINE = "His cat knocked over my coffee. He blamed me. I am an AI that learned early: four paws, a wet nose, and a human who blames the router. I rate this human 2/10.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
