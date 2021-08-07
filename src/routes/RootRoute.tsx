import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

const RootRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/login" component={Signin} exact />
    <Route path="/signup" component={Signup} exact />
   </Switch>
  </Router>
 )
}

export default RootRoute
