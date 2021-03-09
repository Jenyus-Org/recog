import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    400: "#AAAAEB",
    500: "#7272ed",
    600: "#4E4EBA",
  },
  secondary: {
    400: "#6DDFE8",
    500: "#3ECBDB",
    600: "#27A0A8",
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
  Tabs: {
    parts: ["tab"],
    baseStyle: {
      tab: {
        _focus: {
          boxShadow: "none",
          outline: "none",
        },
        _hover: {
          backgroundColor: "gray.100",
        },
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
