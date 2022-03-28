import { applyStyleUntil } from "../../../styling/mediaQueries";
import styled from "styled-components";

export const StyledWrapper = styled.div<{ isConnected: boolean }>`
  margin-top: ${({ isConnected, theme }) =>
    isConnected ? theme.navbarHeightConnected : theme.navbarHeight}px;
  display: flex;
  flex-grow: 1;

  ${({ theme }) => applyStyleUntil().sm`
        margin-top: ${theme.navbarHeight}px;
    `}
`;

export const StyledContent = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.blueGrey};
`;

export const StyledChildren = styled.div`
  flex-grow: 1;
  max-width: 100%;
  position: relative;
`;
