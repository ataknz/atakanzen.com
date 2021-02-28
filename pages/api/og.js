import playwright from "playwright";

export default async (req, res) => {
  const {
    query: { title },
  } = req;

  const browser = await playwright["chromium"].launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
  });

  const page = await context.newPage();

  const url = `https://zengin.me/og?title=${title}`;

  await page.goto(url);
  await page.waitForSelector("img");

  const data = await page.screenshot({
    type: "png",
  });

  await browser.close();

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");

  res.end(data);
};
