import React from 'react';
import Link from "next/link";
import Login from 'pages/Login';
import './index.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
