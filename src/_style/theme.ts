import { defaultTheme } from "@xstyled/styled-components";
import color from "./color";

const fontSizes = {
  ...defaultTheme.fontSizes,
  xxs: "9px",
  "extra-small": "11px",
  small: "14px",
  regular: "16px",
  h6: "20px",
  h5: "24px",
  h4: "28px",
  h3: "32px",
  h2: "40px",
  h1: "48px"
}

const fonts = {
  ...defaultTheme.fonts,
  sans: "Google Sans, system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
  display: "Google Sans, system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
  body: "Google Sans, system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'",
}

const theme = {
  ...defaultTheme,
  colors: {
    ...color
  },
  fontSizes,
};

export default theme;
