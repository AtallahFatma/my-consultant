import React from 'react';
import { Link } from "react-router-dom";
import Layout from './components/layout/navigation/Layout';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/createUser">Add a user</Link> |{" "}
        <Link to="/listOfUsers">List of users</Link>
      </nav>
      <Login />
    </Layout>
  );
}

export default App;
