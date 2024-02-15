import * as S from "./alert.styles";

interface AlertProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Alert: React.FC<AlertProps> = ({ children, style }) => {
  return (
    <S.AlertModalForeground>
      <S.AlertModalContainer style={style}>{children}</S.AlertModalContainer>
    </S.AlertModalForeground>
  );
};
