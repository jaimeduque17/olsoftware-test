import React from 'react';
import { useUser } from 'reactfire';
import Auth from './components/Auth';
import Users from './pages/Users';

function App() {

  const user = useUser();

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <h1>OL Software</h1>
        {user && <p>{user.email}</p>}
        <Auth />
        <Users />
      </div>
    </div>
  );
}

export default App;
