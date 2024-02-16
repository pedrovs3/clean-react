import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import * as S from "./login.styles";

import { useUpdateRecurrence } from "@/infra/http/react-query/mutations/login.mutation.tsx";
import { Alert } from "@/main/presentation/components/Alert";
import { Button } from "@/main/presentation/components/Button";
import { Input } from "@/main/presentation/components/Input";
import { Loader } from "@/main/presentation/components/loader";
import {
  LoginSchema,
  LoginSchemaType,
} from "@/validation/usecases/login.validation.ts";

const Login: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginData = useUpdateRecurrence();

  const onSubmit = (data: LoginSchemaType) => {
    loginData.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <S.Header>
        <S.Logo />
        <S.LogoTitle>4Dev - Enquete para programadores</S.LogoTitle>
      </S.Header>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title center>Acesso</S.Title>

        <Input
          error={errors.email}
          fieldName="email"
          placeholder="Digite seu e-mail"
          register={register}
          type="email"
        />
        <Input
          error={errors.password}
          fieldName="password"
          placeholder="Digite sua senha"
          register={register}
          type="password"
        />
        <Button type="submit">Entrar</Button>

        <S.Divider />

        <S.Link>Esqueceu sua senha?</S.Link>
        <S.Link>Criar conta</S.Link>
      </S.Form>
      <S.Footer />

      {loginData.isPending && (
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
