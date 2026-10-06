// Renders resume/resume.html to public/petrut-ivanoiu-resume.pdf with headless Chromium.
// Run with `pnpm resume`. First time on a machine: `pnpm exec playwright install chromium`.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const MAX_PAGES = 2;
const source = fileURLToPath(new URL("./resume.html", import.meta.url));
const output = fileURLToPath(new URL("../public/petrut-ivanoiu-resume.pdf", import.meta.url));

let browser;
try {
  browser = await chromium.launch();
} catch (error) {
  console.error("Could not start Chromium. Run `pnpm exec playwright install chromium` and try again.");
  console.error(error.message);
  process.exit(1);
}

try {
  const page = await browser.newPage();
  await page.goto(`file://${source}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: output, preferCSSPageSize: true, printBackground: true });
} finally {
  await browser.close();
}

// Chromium writes each page as a `/Type /Page` object, so counting them gives the page count.
const pages = (await readFile(output, "latin1")).match(/\/Type\s*\/Page\b/g)?.length ?? 0;
console.log(`Wrote ${output} (${pages} page${pages === 1 ? "" : "s"})`);
if (pages > MAX_PAGES) {
  console.error(`Warning: the resume is ${pages} pages, the limit is ${MAX_PAGES}.`);
  process.exitCode = 1;
}
