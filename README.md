# Sore UI

Sore UI is a simple ui library for your react app.

## Installation

```bash
npm install sore-ui
```

or

```bash
yarn add sore-ui
```

## Usage

```javascript
import { Button } from "sore-ui";

function Component() {
  return <Button mb="10px">Button</Button>;
}
```

**Use default theme**

```javascript
// In your app.jsx
import { ThemeProvider } from "@xstyled/styled-components";
import { defaultTheme, GlobalStyle } from "sore-ui";
// ...

ReactDOM.render(
  document.getElementById("root"),
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
