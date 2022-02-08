import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:6969/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query getUsers {
        getUsers {
          id
          first_name
          last_name
        }
      }
    `
  })
  .then(result => console.log(result));


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
