import { extendTheme, ThemeComponents, ThemeOverride } from "@chakra-ui/react";

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

const components: Partial<ThemeComponents> = {
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
  Menu: {
    parts: ["item"],
    baseStyle: {
      item: {
        _hover: { outline: "none" },
        _focus: { outline: "none" },
      },
    },
  },
  Input: {
    baseStyle: {
      _focus: { borderColor: "none", boxShadow: "none" },
    },
  },
};

const fonts = {
  body: "Oxygen, system-ui, sans-serif",
  heading: "Comfortaa, Georgia, serif",
};

const styles = {
  global: {
    body: {
      bg: "gray.100",
    },
  },
};

const customTheme: ThemeOverride = { colors, fonts, components, styles };

export const theme = extendTheme(customTheme);
