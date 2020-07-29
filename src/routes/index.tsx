import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import Logout from '../pages/Logout'
import Profile from '../pages/Profile'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Login} />
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/home" component={Main} />
        <PrivateRoute path="/profile/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
