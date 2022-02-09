import React from 'react';
import Layout from './components/layout/navigation/Layout';
import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "src/graphql/Queries";
import List from './pages/List';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface UserData {
  fetchAllUsers: User[];
}

function App() {
  const { loading, error, data } = useQuery<UserData>(FETCH_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    

  return (
      <Layout>
        <List data={data} />
      </Layout>
  );
}

export default App;
