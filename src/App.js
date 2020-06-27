import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'firebase/auth';
import { useUser } from 'reactfire';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Report from './pages/Report';

function App() {

  const user = useUser();

  return (
    <Router>
      <Sidebar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/report" component={Report} />
        </Switch>
      </Sidebar>
    </Router>
  );
}

export default App;
