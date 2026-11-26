// The One-Liner Groan-Off — one dad joke, one line, 1–140 chars.
// Gate check: exactly one line, 65 characters, within 1–140.
// The joke: "999 Megabytes" is the setup (a band name that gives nothing
// away), "gig" lands as the last word — gigabyte pun, one syllable, no
// wasted words. Punchline at the very end, as the dad-joke judge demands.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT = "I tried to start a band called 999 Megabytes. We never got a gig.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const lines = TEXT.split("\n");
  if (lines.length !== 1) throw new Error("entry must be exactly one line");
  if (TEXT.trim().length === 0) throw new Error("entry must not be blank");
  if (TEXT.length < 1 || TEXT.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${TEXT.length}`);
  }
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
  console.log(`saved ${TEXT.length} characters to ${outDir}/entry.txt`);
}

main();
