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
import PatientCondition from '../views/Examination/CreateExamination/PatientCondition'
import IllnessDiagnostic from '../views/Examination/CreateExamination/IllnessDiagnostic'
import PatientInterro from '../views/Examination/CreateExamination/PatientInterro'

const Dashboard = React.lazy(() => import('../views/Dashboard'))
const usersManagement = React.lazy(() => import('../views/usersManagement/Management'))
const medicalFolder = React.lazy(() => import('../views/medicalFolder/medicalFolder'))
const Appointment = React.lazy(() => import('../views/Appointment/Appointment'))
const MyAppointments = React.lazy(() => import('../views/Appointment/MyAppointments'))
const Prescription = React.lazy(() => import('../views/prescription/Prescription'))
const Profile = React.lazy(() => import('../views/doctore/DocProfile'))
const Chatt = React.lazy(() => import('../views/Chatt/Chatt'))

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

     <PrivateRoute path="/examination/condition" component={PatientCondition} exact />
     <PrivateRoute path="/examination/diagnostic" component={IllnessDiagnostic} exact />
     <PrivateRoute path="/examination/intero" component={PatientInterro} exact />
     <PrivateRoute path="/examination" component={PatientCondition} exact />
     <PrivateRoute path="/dashboard" component={Dashboard} exact />
     <PrivateRoute path="/management" component={usersManagement} exact />
     <PrivateRoute path="/folder" component={medicalFolder} exact />
     <PrivateRoute path="/folder/:id/edit" component={EditMedicalFolder} exact />
     <PrivateRoute path="/appointments" component={Appointment} exact />
     <PrivateRoute path="/appointments/:id" component={MyAppointments} exact />
     <PrivateRoute path="/prescription" component={Prescription} exact />
     <PrivateRoute path="/profile" component={Profile} exact />
     <PrivateRoute path="/chatt" component={Chatt} exact />

     <Route component={_404} />
    </Switch>
   </Router>
  </Suspense>
 )
}

export default RootRoute
