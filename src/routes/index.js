import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import MyProjects from '../pages/MyProjects';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/myprojects" exact component={MyProjects} />
      <Route path="/*" component={NotFound} />
    </Switch>
  ); 
}
