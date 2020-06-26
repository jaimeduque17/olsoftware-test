import React from 'react';
import { useUser } from 'reactfire';
import Auth from './components/Auth';
import Header from './components/Header';
import Users from './pages/Users';

function App() {

  const user = useUser();

  return (
    <div>
      {user ? <Header name={user.email} /> : null}
      {!user && <Auth />}
      {user && <Users />}
    </div>
  );
}

export default App;
