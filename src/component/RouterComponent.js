import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Homepage';
import Readmore from '../pages/Readmore';
import Login from '../pages/Loginpage';
import Newpost from '../pages/Newpost';


export default function RouterComponent() {
  return(
    <Router>
      <Switch>
        <Route exact path="/newpost" component={Newpost} />
        <Route exact path="/readmore" component={Readmore} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

  );
}