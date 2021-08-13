import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Resetpassword from '../views/auth/Password_reset'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'

const RootRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <Route path="/" component={Home} exact />
    
    <PublicRoute path="/login" component={Signin} exact />
    <PublicRoute path="/signup" component={Signup} exact />
    <PublicRoute path="/resetpassword" component={Resetpassword} exact />

    <PrivateRoute path="/dashboard" component={Dashboard} exact />
   </Switch>
  </Router>
 )
}

export default RootRoute
