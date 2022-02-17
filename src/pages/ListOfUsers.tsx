import { useQuery } from '@apollo/client';
import React from 'react';
import { AUTH_TOKEN } from 'src/constants/constants';
import { FETCH_USERS } from 'src/graphql/Queries';
import { useNavigate } from "react-router-dom";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface UserData {
  fetchAllUsers: User[];
}
function ListOfUsers() {
    const navigate = useNavigate();

    const { loading, error, data } = useQuery<UserData>(FETCH_USERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    if (!localStorage.getItem(AUTH_TOKEN)) {
      navigate('/')
    }

    return (
      <>
        <h3>Users list</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.fetchAllUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
}

export default ListOfUsers;