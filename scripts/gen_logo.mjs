import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

let b64 = "";
for (let i = 1; i <= 16; i++) {
  const part = readFileSync(resolve(__dirname, `logo_s${i}.txt`), "utf-8").trim();
  b64 += part;
}

const buf = Buffer.from(b64, "base64");
const outDir = resolve(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, "logo.png");
writeFileSync(outPath, buf);
console.log(`Wrote ${buf.length} bytes to ${outPath}`);
