/* eslint-disable arrow-body-style */
import React, { FC, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from '../views/auth/Signin'
import Signup from '../views/auth/Signup'
import Resetpassword from '../views/auth/Password_reset'
// import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
// import medicalFolder from '../views/medicalFolder/medicalFolder'
import _404 from '../views/_404'
import EditMedicalFolder from '../views/EditMedicalFolder'
import PasswordConfirmation from '../views/PasswordConfirmation'
import EmailConfirmation from '../views/EmailConfirmation'
import RegistrationRequestsManagement from '../views/usersManagement/RegistrationRequestsManagement'
import Examination from '../views/Examination/Examination'
import Prescription from '../views/Examination/Prescription/Prescription'
import Examinations from '../views/Examination/Examinations'
import UserConfirmed from '../views/UserConfirmed'
import _401 from '../views/_401'
import Requests from '../views/Appointment/Requests'

const Dashboard = React.lazy(() => import('../views/Dashboard'))
const usersManagement = React.lazy(() => import('../views/usersManagement/UsersManagement'))
const medicalFolder = React.lazy(() => import('../views/medicalFolder/medicalFolder'))
const Appointment = React.lazy(() => import('../views/Appointment/Appointment'))

const RootRoute: FC = () => {
 return (
  <Suspense fallback={<p>loading...</p>}>
   <Router>
    <Switch>
     <Route path="/" component={Home} exact />

     <PublicRoute path="/login" component={Signin} exact />
     <PublicRoute path="/signup" component={Signup} exact />

     <Route path="/passwordReset" component={Resetpassword} exact />
     <Route path="/confirmation" component={PasswordConfirmation} exact />
     <Route path="/confirmation2" component={EmailConfirmation} exact />
     <Route path="/users/confirm/:token" component={UserConfirmed} />

     <PrivateRoute path="/registrations" component={RegistrationRequestsManagement} exact />

     <PrivateRoute path="/examination/:id" component={Examination} />
     <PrivateRoute path="/examinations" component={Examinations} />
     <PrivateRoute path="/prescription/:id" component={Prescription} />
     <PrivateRoute path="/dashboard" component={Dashboard} exact />
     <PrivateRoute path="/users_management" component={usersManagement} exact />
     <PrivateRoute path="/folder/:id" component={medicalFolder} exact />
     <PrivateRoute path="/folder/:id/edit" component={EditMedicalFolder} exact />
     <PrivateRoute path="/appointments" component={Appointment} exact />
     <PrivateRoute path="/requests" component={Requests} exact />
     <Route path="/401" component={_401} exact />

     <Route component={_404} />
    </Switch>
   </Router>
  </Suspense>
 )
}

export default RootRoute
