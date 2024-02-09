import React from "react";

import * as S from "./login.styles";

import { Button } from "@/main/presentation/components/Button";
import { Input } from "@/main/presentation/components/Input";

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.LogoTitle>4Dev - Enquete para programadores</S.LogoTitle>
      </S.Header>
      <S.Form>
        <S.Title center>Acesso</S.Title>
        <Input error placeholder="Digite seu e-mail" type="email" />
        <Input placeholder="Digite sua senha" type="password" />
        <Button>Entrar</Button>

        <S.Divider />

        <S.Link>Esqueceu sua senha?</S.Link>
        <S.Link>Criar conta</S.Link>
      </S.Form>
      <S.Footer />
    </S.Container>
  );
};

export default Login;
