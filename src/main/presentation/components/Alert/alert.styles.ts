import styled from "styled-components";

export const AlertModalForeground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const AlertModalContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 30px 20px;
  min-height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.s};
  width: 300px;
  text-align: center;
`;
