import { execSync } from "child_process";
import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const scripts = readdirSync(__dirname).filter(f => f.startsWith("gen_") && f.endsWith(".mjs"));
for (const s of scripts) {
  execSync(`node ${join(__dirname, s)}`, { stdio: "inherit" });
}
