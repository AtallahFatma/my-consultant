import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($first_name: String!, $last_name: String!) {
    createUser(first_name: $first_name, last_name: $last_name) {
      first_name
      last_name
    }
  }
`;
