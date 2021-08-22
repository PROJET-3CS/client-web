import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Resetpassword from '../views/auth/Password_reset'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import UserMan from '../views/UserMan'

import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
import medicalFolder from '../views/medicalFolder/medicalFolder'
import _404 from '../views/_404'
import EditMedicalFolder from '../views/EditMedicalFolder'

const RootRoute: FC = () => {
 return (
  <Router>
   <Switch>
    <Route path="/" component={Home} exact />

    <PublicRoute path="/login" component={Signin} exact />
    <PublicRoute path="/signup" component={Signup} exact />
    <PublicRoute path="/resetpassword" component={Resetpassword} exact />

    <PrivateRoute path="/dashboard" component={Dashboard} exact />
    <PrivateRoute path="/folder" component={medicalFolder} exact />
    <PublicRoute path="/folder/edit" component={EditMedicalFolder} exact />
    <PrivateRoute path="/management" component={UserMan} exact />

    <Route component={_404} />
   </Switch>
  </Router>
 )
}

export default RootRoute
