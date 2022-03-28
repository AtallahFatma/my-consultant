import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../constants/constants';
import { Button } from "../..";
import { StyledItems, Title, Wrapper } from './NavBar.styled';

function Header() {
  let navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <StyledItems>
        <li>
          <div className="flex flex-fixed">
            {authToken ? (
              <Button
                className="ml1 pointer black"
                onPress={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  navigate("/");
                }}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/login"
                className="ml1 no-underline black"
              >
                <Button>Login</Button>
              </Link>
            )}
          </div>
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
