import { createGlobalStyle } from "@xstyled/styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/icon?family=Google+Sans:300,400,500,700');

  html, body {
    font-family: 'Google Sans', system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
  }
`;

export default GlobalStyle;