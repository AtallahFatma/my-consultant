import React from 'react';

function ListOfUsers({data}) {
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
            {console.log(data && data.fetchAllUsers)}
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