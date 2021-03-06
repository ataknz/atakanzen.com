const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
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
      white: colors.white,
      gray: colors.blueGray,
      red: colors.rose,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.emerald,
      blue: colors.blue,
      lightBlue: colors.lightBlue,
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
