import {
  defaultTheme,
  generateHexAlphaVariants,
} from "@xstyled/styled-components";

const color = {
  ...defaultTheme.colors,
  ...generateHexAlphaVariants({
    watermelon: "#fd4f5d",
    lemon: "#FED330",
    skyblue: "#1cb7fc",
    emerald: "#00b900",
    tangerine: "#ff9500",
    "dust-black": "#25282B",
  }),
};

export default color;
