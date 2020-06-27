import React from 'react';
import { useUser } from 'reactfire';
import Auth from '../components/Auth';
import Users from '../components/Users';

const Home = () => {

  const user = useUser();

  return (
    <div>
      {!user && <Auth />}
      {user && <Users />}
    </div>
  );
}

export default Home;