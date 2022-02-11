import React from 'react';
import Layout from './components/layout/navigation/Layout';
import CreateUser from './pages/CreateUser';
import ListOfUsers from './pages/ListOfUsers';
import Login from './pages/Login';

function App() {
  return (
      <Layout>
        <CreateUser />
        <Login />
        <ListOfUsers />
      </Layout>
  );
}

export default App;
