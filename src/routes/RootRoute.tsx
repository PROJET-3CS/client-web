/* eslint-disable arrow-body-style */
import React, { FC, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Resetpassword from '../views/auth/Password_reset'
// import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import UserMan from '../views/UserMan'
import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
// import medicalFolder from '../views/medicalFolder/medicalFolder'
import _404 from '../views/_404'
import EditMedicalFolder from '../views/EditMedicalFolder'
import EmailConfirmation from '../views/EmailConfirmation'

const Dashboard = React.lazy(() => import('../views/Dashboard'))
const medicalFolder = React.lazy(() => import('../views/medicalFolder/medicalFolder'))

const RootRoute: FC = () => {
 return (
  <Suspense fallback={<p>loading...</p>}>
   <Router>
    <Switch>
     <Route path="/" component={Home} exact />

     <PublicRoute path="/login" component={Signin} exact />
     <PublicRoute path="/signup" component={Signup} exact />
     <PublicRoute path="/resetpassword" component={Resetpassword} exact />
     <PublicRoute path="/confirmation" component={EmailConfirmation} exact />

     <PrivateRoute path="/dashboard" component={Dashboard} exact />
     <PrivateRoute path="/folder/:id" component={medicalFolder} exact />
     <PrivateRoute path="/folder/:id/edit" component={EditMedicalFolder} exact />
     <PrivateRoute path="/management" component={UserMan} exact />

     <Route component={_404} />
    </Switch>
   </Router>
  </Suspense>
 )
}

export default RootRoute
