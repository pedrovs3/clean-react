import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { Router } from "@/main/presentation/components/Router";
import { GlobalStyles, theme } from "@/main/presentation/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
