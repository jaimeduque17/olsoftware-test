import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'firebase/auth';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Programation from './pages/Programation';
import Profile from './pages/Profile';
import Report from './pages/Report';
import User from './pages/User';
import Operation from './pages/Operation';

function App() {

  return (
    <Router>
      <Sidebar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programation" component={Programation} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/user" component={User} />
          <Route exact path="/operation" component={Operation} />
        </Switch>
      </Sidebar>
    </Router>
  );
}

export default App;
