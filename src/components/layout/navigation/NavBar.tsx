import React from 'react';
import { Button } from "../..";
import { StyledItems, Title, Wrapper } from './NavBar.styled';

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
