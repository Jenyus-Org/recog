const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      comfortaa: ["Comfortaa"],
    },
    extend: {
      fontFamily: {
        sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: "#AAAAEB",
          DEFAULT: "#6464EE",
          dark: "#4E4EBA",
        },
        secondary: {
          light: "#59DADB",
          DEFAULT: "#3ECBDB",
          dark: "#27A0A8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
