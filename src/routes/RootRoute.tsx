import React, { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'

const RootRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <PublicRoute path="/" component={Home} exact />
    <PublicRoute path="/login" component={Signin} exact />
    <PublicRoute path="/signup" component={Signup} exact />

    <PrivateRoute path="/dashboard" component={Dashboard} exact />
   </Switch>
  </Router>
 )
}

export default RootRoute
