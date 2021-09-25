import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@xstyled/styled-components";
import theme from "../src/_style/theme";
import GlobalStyle from "../src/_style/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
addDecorator((storyFn) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  )
});