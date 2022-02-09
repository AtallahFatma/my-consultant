import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query fetchAllUsers {
    fetchAllUsers {
      id
      first_name
      last_name
      email
    }
  }
`;
