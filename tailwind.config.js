module.exports = {
  purge: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: "1rem",
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
