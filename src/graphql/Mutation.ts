import { gql } from "@apollo/client";

export const SET_USER = gql`
  mutation setUser(
    $first_name: String
    $last_name: String
    $email: String
    $password: String
  ) {
    setUser(
      input: {
        first_name: $first_name
        last_name: $last_name
        email: $email
        password: $password
      }
    ) {
      first_name
      last_name
      email
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $email: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      email: $email
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
