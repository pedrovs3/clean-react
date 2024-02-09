import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import Login from "@/main/presentation/pages/login/Login.tsx";
import { GlobalStyles, theme } from "@/main/presentation/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Login />
  </ThemeProvider>
);
