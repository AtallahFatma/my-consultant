import {
  applyStyleFrom,
  applyStyleUntil,
} from "./../../../styling/mediaQueries";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  z-index: 60;
  border-top: 1px solid ${({ theme }) => theme.dark50};
`;

export const StyledFooterLinksBlock = styled.div`
  position: relative;
  padding: 48px 50px;
  color: ${({ theme }) => theme.light};
  ${applyStyleFrom().md`
        padding: 48px 70px;
    `}
  h2 {
    font-size: 25px;
    font-weight: 300;
    ${applyStyleFrom().md`
            margin-top: 0;
        `}
  }

  ul {
    list-style: none;
    padding-left: 0;
    font-size: 13px;
    text-transform: uppercase;

    li {
      margin-bottom: 11px;
      > i {
        font-size: 18px;
        vertical-align: top;
      }
    }
  }

  a {
    color: ${({ theme }) => theme.light};
  }
`;

export const StyledFooterUnderBar = styled.div`
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.primary};
  padding: 10px 70px;
  margin-right: 0;
  ${applyStyleUntil().md`
        padding:10px 20px;
    `}
`;

export const StyledAddress = styled.div`
  display: inline-block;
`;

export const StyledLinkBrand = styled.a`
  height: 37px;
  width: 35px;
  > i {
    height: 37px;
    width: 35px;
  }
  font-size: 35px;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  &:last-of-type {
    margin-right: 0px;
  }
`;
