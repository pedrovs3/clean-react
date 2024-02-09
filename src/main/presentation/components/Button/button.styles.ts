import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    box-shadow: ${({ theme }) => theme.shadow.s};
  }
`;
