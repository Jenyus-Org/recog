import { extendTheme } from "@chakra-ui/react";

const colors = {};

const fonts = {
  body: "Oxygen, system-ui, sans-serif",
  heading: "Comfortaa, Georgia, serif",
};

const customTheme = { colors, fonts };

export const theme = extendTheme(customTheme);
