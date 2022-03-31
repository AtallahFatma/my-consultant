import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AUTH_TOKEN } from '../../../constants/constants';
import { Button } from "../..";
import { StyledItems, Title, Wrapper } from './NavBar.styled';

function Header() {
  const router = useRouter();
  // on SSR localStorage is not defined on the window object, and Next.js performs a server render before the client render.
  let authTokenRef = useRef('');

  useEffect(() => {
  // Perform localStorage action
  // useEffect will only run on the client side, so you can safely access localStorage here.
  authTokenRef.current = localStorage.getItem(AUTH_TOKEN) as string;
  }, []);

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <StyledItems>
        <li>
          <div className="flex flex-fixed">
            {authTokenRef.current ? (
              <Button
                className="ml1 pointer black"
                onPress={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  router.push("/");
                }}
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button className="ml1 no-underline black">Login</Button>
              </Link>
            )}
          </div>
        </li>
        {/* <li>
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
        </li> */}
      </StyledItems>
    </Wrapper>
  );
}

export default Header;
