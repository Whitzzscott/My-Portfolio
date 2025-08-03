import { render } from "preact";
import { App } from "./app";
import "./GlobalStyles.css";

import { ThemeProvider } from "@mui/material/styles";
import { GetTheme } from "./theme";

const theme = GetTheme();

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")!
);
