import styled from "styled-components";

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
