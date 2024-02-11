import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input<{ error?: boolean }>`
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

export const ShowPasswordButton = styled.button`
  all: unset;
  position: absolute;
  right: 10px;
  top: 23%;
  cursor: pointer;
  color: ${({ theme }) => theme.text.colors.primary};
`;
