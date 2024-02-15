import { ThemeProvider } from "styled-components";

import Login from "@/main/presentation/pages/login/Login.tsx";
import { theme } from "@/main/presentation/styles";
import { render } from "@testing-library/react";

describe("Login Component", () => {
  test("should render the login page", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    expect(getByTestId("login")).toBeTruthy();
  });
});
