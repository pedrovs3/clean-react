import React from "react";

import * as S from "./input.styles";

import { Eye, EyeClosed } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  showPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  const [type, setType] = React.useState(props.type);

  const handleShowPassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <S.InputWrapper>
      <S.Input {...props} type={type} />
      {props.type === "password" && (
        <S.ShowPasswordButton onClick={handleShowPassword} type="button">
          {type === "password" ? <Eye size={24} /> : <EyeClosed size={24} />}
        </S.ShowPasswordButton>
      )}
    </S.InputWrapper>
  );
};
