// FILE TO INVESTIGATE VERCEL INTEGRATION

// UPDATE TO SEE IF IT SYNCS

// Create a Chromium browser
const { chromium } = require("playwright");

// Checkly supports top level await, but we wrap your code in an async function so you can run it locally too.
async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto("https://spacex.com");

  // If the page doesn't return a successful response code, we fail the check
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`);
  }

  // We snap a screenshot.
  await page.screenshot({ path: "screenshot.jpg" });

  // We close the page and browser. Setting the "runBeforeUnload" helps with collecting accurate web vitals.
  await page.close();
  await browser.close();
}

run();
