import React from 'react';
import styled from "styled-components";
import { Button } from "../..";
import colors from "../../../styling/colors";
import { applyStyleFrom } from "../../../styling/mediaQueries";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #0f6378;
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${colors.light};
  border-bottom: 1px solid ${colors.dark50};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 21;
  height: ${colors.navbarHeight}px;

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

const StyledItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <StyledItems>
        <li>
          <img
            src="//dam.malt.com/rebranding2020/flags/flag-FR"
            alt="FR"
            className="ls-country-flag"
          />
          <span className="ls-code">fr</span>
        </li>
        <li>
          <Button variant="secondary" href="/create-profile">
            Je suis freelance
          </Button>
        </li>
        <li>
          <Button href="#">Me connecter</Button>
        </li>
        <li>
          <Button variant="main" href="/signup">
            Créer mon compte
          </Button>
        </li>
      </StyledItems>
    </Wrapper>
  );
}

export default Header;
