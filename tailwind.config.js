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
      flex: {
        full: "0 0 100%",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
      },
      colors: {
        primary: {
          light: "#AAAAEB",
          DEFAULT: "#7272ed",
          dark: "#4E4EBA",
        },
        secondary: {
          light: "#6DDFE8",
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
