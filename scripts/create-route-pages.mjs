import { copyFile, mkdir, writeFile } from "node:fs/promises";

const routes = [
  "admin",
  "faq",
  "fitting-request",
  "fonts",
  "member",
  "order-summary",
  "ordering-process",
  "showcase",
  "styles",
];

for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}

await copyFile("dist/index.html", "dist/404.html");
await writeFile("dist/CNAME", "rigorertw.com\n");
await writeFile("dist/.nojekyll", "");
