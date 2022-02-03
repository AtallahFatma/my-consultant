import styled from "styled-components";
import colors from "../../../styling/colors";

const ButtonContainer = styled.a<{ variant?: string }>`
  font-family: Moderat, Arial, Helvetica, sans-serif;
  transition: background-color 0.4s, border 0.4s;
  min-height: 53px;
  padding: 10px 20px;
  font-size: 17px;
  border-radius: 26px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  opacity: 1;
  position: relative;
  color: ${({ variant }) => {
    if (variant === "main") return colors.light;
    else if (variant === "secondary") return colors.secondaryBlue;
    return colors.light;
  }};
  background-color: ${({ variant }) => {
    if (variant === "main") return colors.primary;
    else if (variant === "secondary") return "transparent";
    return colors.secondaryBlue;
  }};
  border: 2px solid
    ${({ variant }) => {
      if (variant === "secondary") return colors.secondaryBlue;
      return "transparent";
    }};
`;

export default ButtonContainer;
