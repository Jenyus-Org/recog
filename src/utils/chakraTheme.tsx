import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    400: "#AAAAEB",
    600: "#7272ed",
    800: "#4E4EBA",
  },
  secondary: {
    400: "#6DDFE8",
    600: "#3ECBDB",
    800: "#27A0A8",
  },
};

const components = {
  Button: {
    variants: {
      "menu-button": {
        fontWeight: "normal",
        _focus: { outline: "none", boxShadow: "none" },
        backgroundColor: "gray.300",
      },
      "upvote-button": {
        _focus: { outline: "none" },
        borderRadius: "5px",
      },
    },
  },
};

const fonts = {
  body: "Oxygen, system-ui, sans-serif",
  heading: "Comfortaa, Georgia, serif",
};

const customTheme = { colors, fonts, components };

export const theme = extendTheme(customTheme);
