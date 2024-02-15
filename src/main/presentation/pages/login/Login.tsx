import React from "react";

import * as S from "./login.styles";

import { Alert } from "@/main/presentation/components/Alert";
import { Button } from "@/main/presentation/components/Button";
import { Input } from "@/main/presentation/components/Input";
import { Loader } from "@/main/presentation/components/loader";

type StateProps = {
  isLoading: boolean;
};

const Login: React.FC = () => {
  const [isLoading] = React.useState<StateProps>({
    isLoading: true,
  });

  return (
    <>
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
      {isLoading && (
        <Alert
          style={{
            flexDirection: "column",
          }}
        >
          <Loader />
          <p>Carregando...</p>
        </Alert>
      )}
    </>
  );
};

export default Login;
