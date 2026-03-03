import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read 8 base64 parts and concatenate
let b64 = "";
for (let i = 1; i <= 8; i++) {
  const part = readFileSync(resolve(__dirname, `logo_p${i}.txt`), "utf-8").trim();
  b64 += part;
}

const buf = Buffer.from(b64, "base64");
const outDir = resolve(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, "logo.png");
writeFileSync(outPath, buf);
console.log(`Wrote ${buf.length} bytes to ${outPath}`);
