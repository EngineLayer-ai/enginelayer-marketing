import { writeFileSync, mkdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import https from "https";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGO_URL = "https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyL2YxNTZmYzUzLTQ3NWYtNDAzMi1iM2VmLTA4Y2U5Y2NlZTMzMy9sb2dvLWhvc3QvIiwic2lkIjoiZjE1NmZjNTMtNDc1Zi00MDMyLWIzZWYtMDhjZTljY2VlMzMzIiwiZXhwIjoxNzcyNjY0NzIxfQ.azelbetX00doRtASlh2UFI0QG870kpD1h7n-jpmtxig/web/direct-files/computer/f156fc53-475f-4032-b3ef-08ce9ccee333/logo-host/logo.png";

function download(url) {
  return new Promise((resolve, reject) => {
    const follow = (u) => {
      https.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          follow(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error("HTTP " + res.statusCode));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      }).on("error", reject);
    };
    follow(url);
  });
}

const buf = await download(LOGO_URL);
const outDir = resolve(__dirname, "..", "public");
mkdirSync(outDir, { recursive: true });
const outPath = resolve(outDir, "logo.png");
writeFileSync(outPath, buf);
console.log("Wrote " + buf.length + " bytes to " + outPath);
