import React from "react";

import { FieldError, UseFormRegister } from "react-hook-form";

import * as S from "./input.styles";

import { Eye, EyeClosed } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  fieldName: string;
  register: UseFormRegister<any>;
}

export function Input({ fieldName, register, ...props }: InputProps) {
  const [type, setType] = React.useState(props.type);

  const handleShowPassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <>
      <S.InputWrapper>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error*/}
        <S.Input {...props} type={type} {...register(fieldName)} />
        {props.type === "password" && (
          <S.ShowPasswordButton
            error={!!props.error}
            onClick={handleShowPassword}
            type="button"
          >
            {type === "password" ? <Eye size={24} /> : <EyeClosed size={24} />}
          </S.ShowPasswordButton>
        )}
        {props.error && <S.Error>{props.error.message}</S.Error>}
      </S.InputWrapper>
    </>
  );
}
