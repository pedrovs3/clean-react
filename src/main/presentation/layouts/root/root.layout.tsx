import { Outlet } from "react-router-dom";

import * as S from "./root.layout.styles";

export function RootLayout() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}
