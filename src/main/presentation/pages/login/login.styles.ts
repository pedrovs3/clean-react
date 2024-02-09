import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import LogoSvg from "/assets/logo.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.whiteBackground};

  font-size: 14px;
`;

export const Header = styled.div`
  border-top: 40px solid ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding: 40px 30px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 12px;
  width: 400px;
`;

export const Footer = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.img.attrs({
  src: `${LogoSvg}`,
})`
  width: 50px;
  height: 30px;
`;
export const Title = styled.h1<{ center?: boolean }>`
  color: ${({ theme }) => theme.black};
  text-align: ${({ center }) => (center ? "center" : "start")};
  font-size: 1.5rem;
  padding: 0 20px;
`;

export const LogoTitle = styled(Title)`
  color: ${({ theme }) => theme.whiteText};
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  cursor: pointer;
`;
