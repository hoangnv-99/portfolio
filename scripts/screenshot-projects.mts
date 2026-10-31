// One-off: captures the live project sites used as card thumbnails.
// Usage: pnpm screenshots   (uses the locally installed Google Chrome)
import { chromium } from "playwright";
import { en } from "../src/content/en.ts";

const outDir = new URL("../public/projects/", import.meta.url).pathname;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 844 }, deviceScaleFactor: 1 });

for (const project of en.projects.items) {
  try {
    await page.goto(project.url, { waitUntil: "load", timeout: 60_000 });
    await page.waitForTimeout(3_000);
    await page.screenshot({ path: `${outDir}${project.slug}.jpg`, type: "jpeg", quality: 80 });
    console.log(`ok   ${project.slug}`);
  } catch (error) {
    console.error(`fail ${project.slug}: ${(error as Error).message.split("\n")[0]}`);
  }
}

await browser.close();
