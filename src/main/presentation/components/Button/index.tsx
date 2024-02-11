import * as S from "./button.styles";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <S.Button {...props} />;
};
