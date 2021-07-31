import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

const RouteRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/login" component={Signin} exact />
   </Switch>
  </Router>
 )
}

export default RouteRoute
