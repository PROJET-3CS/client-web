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
import CreatePrescModal from '../views/Examination/Prescription/CreatePrescModal'

const Dashboard = React.lazy(() => import('../views/Dashboard'))
const usersManagement = React.lazy(() => import('../views/usersManagement/UsersManagement'))
const medicalFolder = React.lazy(() => import('../views/medicalFolder/medicalFolder'))
const Appointment = React.lazy(() => import('../views/Appointment/Appointment'))
const MyAppointments = React.lazy(() => import('../views/Appointment/MyAppointments'))

const RootRoute: FC = () => {
 return (
  <Suspense fallback={<p>loading...</p>}>
   <Router>
    <Switch>
     <Route path="/" component={Home} exact />

     <PublicRoute path="/login" component={Signin} exact />
     <PublicRoute path="/signup" component={Signup} exact />

     <Route path="/resetpassword" component={Resetpassword} exact />
     <Route path="/confirmation" component={PasswordConfirmation} exact />
     <Route path="/confirmation2" component={EmailConfirmation} exact />
     <Route path="/addpresc" component={CreatePrescModal} exact />

     

     <PrivateRoute path="/examination" component={Examination} />     
     <PrivateRoute path="/dashboard" component={Dashboard} exact />
     <PrivateRoute path="/users_management" component={usersManagement} exact />
     <PrivateRoute path="/registration_requests" component={RegistrationRequestsManagement} exact />
     <PrivateRoute path="/folder/:id" component={medicalFolder} exact />
     <PrivateRoute path="/folder/:id/edit" component={EditMedicalFolder} exact />
     <PrivateRoute path="/appointments" component={Appointment} exact />
     <PrivateRoute path="/appointments/:id" component={MyAppointments} exact />

     <Route component={_404} />
    </Switch>
   </Router>
  </Suspense>
 )
}

export default RootRoute
