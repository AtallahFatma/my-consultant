import React from 'react';
import Link from 'next/link'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { AUTH_TOKEN } from 'src/constants/constants';
import Layout from 'src/components/layout/navigation/Layout';
import Login from './Login';

const httpLink = createHttpLink({
    uri: 'http://localhost:6969/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// This middleware will be invoked every time ApolloClient sends a request to the server. 
//Apollo Links allow us to create middlewares that modify requests before they are sent to the server.
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}

export default function HomePage() {

  return (<ApolloProvider client={client}>
    <React.StrictMode>
      <Layout>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
          <Link href="/createUser">
            <a>Add a user</a>
          </Link> |{" "}
          <Link href="/listOfUsers">
            <a>List of users</a>
          </Link>
      </nav>
      <Login />
      </Layout>
    </React.StrictMode>
  </ApolloProvider>)
}
