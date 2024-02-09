import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  black: "#000",
  colors: {
    borderGray: "#e0e0e0",
    error: "#e00000",
    gray: "#ccc",
    primary: "#313131",
    primaryDark: "#0e0e0e",
    secondary: "#0099ff",
    secondaryDark: "#006db3",
    secondaryLight: "#4dc3ff",
    success: "#00be55",
  },
  shadow: {
    s: "0 2px 5px #0000001a",
  },
  white: "#fff",
  whiteBackground: "#f5f5f5",
  whiteText: "#f5f5f5",

  text: {
    size: {
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    colors: {
      primary: "#313131",
      secondary: "#0099ff",
      white: "#fff",
      black: "#000",
    },
  },
};
