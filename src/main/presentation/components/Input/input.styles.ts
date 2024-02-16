import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input<
  { error?: boolean } & UseFormRegisterReturn<string>
>`
  padding: 10px ${({ type }) => (type === "password" ? "40px" : "20px")} 10px
    20px;
  height: 20px;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.borderGray};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  transition: 0.1s;
  animation: ${({ error }) => (error ? "shakeError 0.2s" : "none")};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ShowPasswordButton = styled.button<{ error?: boolean }>`
  all: unset;
  position: absolute;
  right: 10px;
  top: ${(props) => (props.error ? "16%" : "23%")};
  cursor: pointer;
  color: ${({ theme }) => theme.text.colors.primary};
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
`;
