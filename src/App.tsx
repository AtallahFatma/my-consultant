import React from 'react';
import Layout from './components/layout/navigation/Layout';
import ListOfUsers from './pages/ListOfUsers';

function App() {
  return (
      <Layout>
        <ListOfUsers />
      </Layout>
  );
}

export default App;
