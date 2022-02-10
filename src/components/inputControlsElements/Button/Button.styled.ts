import { applyStyleFrom } from "./../../../styling/mediaQueries";
import styled from "styled-components";

const ButtonContainer = styled.a<{ variant?: string }>`
  font-family: Moderat, Arial, Helvetica, sans-serif;
  transition: background-color 0.4s, border 0.4s;
  min-height: 53px;
  padding: 5px 10px;
  font-size: 12px;
  ${applyStyleFrom().md`
    font-size: 17px;
    padding: 10px 20px;
  `}
  border-radius: 26px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  opacity: 1;
  position: relative;
  color: ${({ variant, theme }) => {
    if (variant === "main") return theme.light;
    else if (variant === "secondary") return theme.secondaryBlue;
    return theme.light;
  }};
  background-color: ${({ variant, theme }) => {
    if (variant === "main") return theme.primary;
    else if (variant === "secondary") return "transparent";
    return theme.secondaryBlue;
  }};
  border: 2px solid
    ${({ variant, theme }) => {
      if (variant === "secondary") return theme.secondaryBlue;
      return "transparent";
    }};
`;

export default ButtonContainer;
