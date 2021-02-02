export const getOpenGraphImage = (title) => ({
  url: `https://zengin.me/api/og?title=${encodeURIComponent(title)}`,
  width: 1200,
  height: 630,
});
