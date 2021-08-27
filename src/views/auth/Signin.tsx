import React, { FC, useState } from 'react'
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeButtonSecondary from '../../components/AwesomeButton/AwesomeButtonSecondary'

import { getAuth } from '../../store/selectors'
import { authData, ReactChangeEvent, ReactSubmitEvent } from '../../helpers/types'
import { loginError, login } from '../../store/slices/auth'

const Signin: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { error, isAuthenticated, currentUser } = useSelector(getAuth)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _login = (payload: authData) => {
  dispatch(login(payload))
 }

 const _loginError = (payload: string) => {
  dispatch(loginError(payload))
 }

 // ===========================================================================
 // State
 // ===========================================================================

 const [user, setUser] = useState({
  email: '',
  password: '',
 })

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleChange = (event: ReactChangeEvent) => {
  setUser({ ...user, [event.target.name]: event.target.value })
 }

 const handleSubmit = (event: ReactSubmitEvent): void => {
  event.preventDefault()

  const payload = { email: user.email.trim(), password: user.password }

  if (payload.email && payload.password) {
   _login(payload)
   console.log(currentUser)
  } else {
   _loginError('Empty email or password !')
  }
 }



 // ===========================================================================
 // Hooks
 // ===========================================================================

 if (isAuthenticated && currentUser.status === 'active') return <Redirect to="/dashboard" /> 
 if (isAuthenticated && currentUser.status !== 'active') return <Redirect to="/dashboard" /> 

 return (
  <div>
   <Row>
    <Col md="5" className="auth__side_1">
     <h2 className="auth__header">Clinity</h2>
     <Form className="auth__form" onSubmit={handleSubmit}>
      <div className="auth__form-heading">
       <h2 className="auth__form-heading--title">Log In.</h2>
       <p className="auth__form-heading--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, culpa.
       </p>
      </div>
      <FormGroup className="auth__form-group">
       <Label className="auth__form-group--label" for="email">
        Enter your email
       </Label>
       <Input
        className="auth__form-group--input"
        type="email"
        name="email"
        placeholder="name@example.com"
        onChange={handleChange}
        invalid={error}
       />
       <FormFeedback>Please enter a valid email !</FormFeedback>
      </FormGroup>
      <FormGroup className="auth__form-group">
       <Label className="auth__form-group--label" for="password">
        Enter your password
       </Label>
       <Input
        className="auth__form-group--input"
        type="password"
        name="password"
        placeholder="atleast 8 characters"
        onChange={handleChange}
        invalid={error}
       />
       <FormFeedback>Please enter a valid password !</FormFeedback>
      </FormGroup>
      <FormGroup className="auth__form-group--repass" inline>
       <Label check>
        <Input type="checkbox" /> Remember me
       </Label>
       <a href="/">Forget Password?</a>
      </FormGroup>
      <FormGroup className="auth__form-group--action" inline>
       <AwesomeButton>Log In</AwesomeButton>
      </FormGroup>
     </Form>
     <div className="auth__form-footer">
      <p className="auth__form-footer--text">Or login using</p>
      <AwesomeButtonSecondary>Google</AwesomeButtonSecondary>
     </div>
    </Col>
    <Col md="7" className="auth__side_2">
     <div className="auth__heading">
      <h2 className="auth__heading-title">Welcome Back</h2>
      <p className="auth__heading-subtitle">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet quo! Laudantium
       animi fugiat itaque?
      </p>
      <img
       className="auth__heading-illustration"
       src="/img/doctors.svg"
       alt="background_illustrattion"
      />
     </div>
    </Col>
   </Row>
  </div>
 )
}

export default Signin
