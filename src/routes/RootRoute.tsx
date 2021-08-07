import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainTable from '../usermanagementcomponents/MainTable'
import Signin from '../views/auth/Signin'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import UserMan from '../views/UserMan'

const RootRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/login" component={Signin} exact />
    <Route path="/com1" component={MainTable} exact />
    <Route path="/userman" component={UserMan} exact />
   </Switch>
  </Router>
 )
}

export default RootRoute
