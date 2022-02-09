const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
      },
      center: true,
    },
    colors: {
      black: colors.black,
      raisinBlack: "#1b1b1e",
      mineShaft: "#2d2d2d",
      white: colors.white,
      gray: colors.slate,
      red: colors.rose,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.emerald,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      yellow: colors.amber,
      chromeYellow: "#faa916",
      chelseaGem: "#a06903",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
