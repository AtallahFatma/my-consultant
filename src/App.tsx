import React from 'react';
import { Link } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/createUser">Add a user</Link> |{" "}
        <Link to="/listOfUsers">List of users</Link>
      </nav>
      <Login />
    </>
  );
}

export default App;
