export const getOpenGraphImage = (title) => ({
  url: `https://atakanzen.com/api/og?title=${encodeURIComponent(title)}`,
  width: 1200,
  height: 630,
})
