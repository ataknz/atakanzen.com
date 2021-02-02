import * as playwright from "playwright-aws-lambda";

export default async (req, res) => {
  const {
    query: { title },
  } = req;

  const browser = await playwright.launchChromium();

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      heigh: 630,
    },
  });

  const url = `https://zengin.me/og?title=${title}`;
  await page.goto(url, {
    timeout: 15 * 1000,
  });
  const data = await page.screenshot({
    type: "png",
  });

  await browser.close();

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");

  res.end(data);
};
