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
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
      },
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
