import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word itself: a grandma's real typo for the chatbot she keeps hearing
// about — warm, baffled, and unmistakably about AI. Written byte-exact:
// no trailing newline, no extra whitespace, so the gate sees one word.
const ENTRY = "ChatGTP";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
