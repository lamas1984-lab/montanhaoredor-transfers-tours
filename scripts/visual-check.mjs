import { chromium } from "playwright-core";

const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium", args: ["--no-sandbox"] });
const results = {};

for (const viewport of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({ viewport });
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo(0, y);
      await new Promise((resolve) => window.setTimeout(resolve, 80));
    }
  });
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
  }
  await page.waitForFunction(() => [...document.images].every((image) => image.complete));
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  const base = await page.evaluate(() => ({
    title: document.title,
    lang: document.documentElement.lang,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.getAttribute("src")),
    restrictedTerms: /volkswagen|id[ .-]?buzz|\bvw\b/i.test(document.body.innerText),
    casaLink: document.querySelector(".header-house-link")?.getAttribute("href"),
    airportImage: document.querySelector(".journey-image-wrap img")?.getAttribute("src"),
    comfortImage: document.querySelector(".comfort-image img")?.getAttribute("src"),
  }));

  if (viewport.name === "mobile") {
    await page.locator(".menu-button").click();
    await page.waitForTimeout(250);
    const menuOpen = await page.locator(".mobile-panel").evaluate((element) => element.classList.contains("open"));
    await page.locator(".close-button").click();
    results[viewport.name] = { ...base, menuOpen };
  } else {
    await page.getByRole("button", { name: "Idioma EN" }).click();
    const englishHeadline = await page.locator("h1").innerText();
    await page.getByRole("button", { name: "Idioma DE" }).click();
    const germanHeadline = await page.locator("h1").innerText();
    await page.getByRole("button", { name: "Idioma NL" }).click();
    const dutchHeadline = await page.locator("h1").innerText();
    results[viewport.name] = { ...base, englishHeadline, germanHeadline, dutchHeadline };
  }

  await page.screenshot({ path: `/home/ubuntu/montanhaoredor-transfers-tours/preview-${viewport.name}-full.png`, fullPage: true });
  await page.close();
}

await browser.close();

const failures = [];
for (const [name, result] of Object.entries(results)) {
  if (result.scrollWidth > result.clientWidth) failures.push(`${name}: horizontal overflow`);
  if (result.brokenImages.length) failures.push(`${name}: broken images ${result.brokenImages.join(", ")}`);
  if (result.restrictedTerms) failures.push(`${name}: restricted vehicle terminology`);
  if (result.casaLink !== "https://www.montanhaoredor.com") failures.push(`${name}: Casa do Lagar link incorrect`);
  if (result.airportImage !== "/assets/airport-welcome-casual.webp") failures.push(`${name}: casual welcome image missing`);
  if (result.comfortImage !== "/assets/private-comfort-forward.webp") failures.push(`${name}: forward-facing seats image missing`);
}
if (!results.mobile.menuOpen) failures.push("mobile: menu did not open");
if (!results.desktop.englishHeadline.includes("Portugal begins")) failures.push("desktop: English switch failed");
if (!results.desktop.germanHeadline.includes("Portugal beginnt")) failures.push("desktop: German switch failed");
if (!results.desktop.dutchHeadline.includes("Portugal begint")) failures.push("desktop: Dutch switch failed");

console.log(JSON.stringify({ ok: failures.length === 0, failures, results }, null, 2));
if (failures.length) process.exit(1);
