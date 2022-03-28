import { applyStyleFrom } from "../../../styling/mediaQueries";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #0f6378;
  padding-left: 10px;
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.light};
  border-bottom: 1px solid ${({ theme }) => theme.dark50};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 21;
  height: ${({ theme }) => theme.navbarHeight}px;

  // to move code
  font-family: Moderat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  ${applyStyleFrom().md`
        font-size: 17px;
    `}
  font-size: 12px;
  color: #333330;
  line-height: 1.25;
`;

export const StyledItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  li {
    padding: 10px;
  }
`;
