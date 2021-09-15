import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { Col, Form, FormFeedback, FormGroup, Row, Label, Input } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeSuccess from '../../components/AwesomeModal/AwesomeSuccess'
import { ReactChangeEvent, ReactSubmitEvent, updatePasswordPayload } from '../../helpers/types'
import { getAuth } from '../../store/selectors'
import { updatePassword } from '../../store/slices/auth'

const Resetpassword: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { user, redirect } = useSelector(getAuth)

 // ===========================================================================
 // dispatch
 // ===========================================================================
 const dispatch = useDispatch()

 const _updatePassword = (payload: updatePasswordPayload) => {
  dispatch(updatePassword(payload))
 }

 // ===========================================================================
 // state
 // ===========================================================================
 const initState = {
  password: '',
  confirmPassword: '',
  validPassword: true,
  match: true,
 }
 const [state, setState] = useState(initState)

 // ===========================================================================
 // handlers
 // ===========================================================================
 // Handle change & verify inputs
 const handleChange = (event: ReactChangeEvent) => {
  let payload = {
   ...state,
   password: state.password,
   confirmPassword: state.confirmPassword,
   [event.target.id]: event.target.value,
  }

  if (payload.password.length >= 8) {
   payload = { ...payload, validPassword: true, [event.target.id]: event.target.value }
  } else {
   payload = { ...payload, validPassword: false, [event.target.id]: event.target.value }
  }

  if (payload.password === payload.confirmPassword) {
   payload = { ...payload, match: true, [event.target.id]: event.target.value }
  } else {
   payload = { ...payload, match: false, [event.target.id]: event.target.value }
  }

  setState({
   ...state,
   ...payload,
  })
 }
 const handleSubmit = (event: ReactSubmitEvent) => {
  event.preventDefault()
  if (state.match && state.validPassword) {
   _updatePassword({
    password: state.password,
    confirmPassword: state.confirmPassword,
   })
  }
 }

 if (!user) {
  return <Redirect to="/401" />
 }

 return (
  <div>
   <Row>
    <Col md="7" className="signup__side_2">
     <div className="signup__heading">
      <h2 className="signup__heading-title">Reset Password</h2>
      <p className="signup__heading-subtitle">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet quo! Laudantium
       animi fugiat itaque?
      </p>
      <img
       className="signup__heading-illustration"
       src="/img/reset_password.svg"
       alt="request_background_illustrattion"
      />
     </div>
    </Col>
    <Col md="5" className="signup__side_1">
     <h2 className="signup__header">Clinity</h2>
     <Form className="signup__form" onSubmit={handleSubmit}>
      <div className="signup__form-heading">
       <h2 className="signup__form-heading--title">Reset Password.</h2>
       <p className="signup__form-heading--text">
        Please note that to request a medical account, you must be eaither a student, a member of
        administration or an employee in this university.
       </p>
      </div>
      <FormGroup className="auth__form-group">
       <Label className="auth__form-group--label" for="password">
        Enter new password
       </Label>
       <Input
        id="password"
        className="auth__form-group--input"
        type="password"
        name="password"
        placeholder="atleast 8 characters"
        onChange={handleChange}
        invalid={!state.validPassword}
        required
       />
       <FormFeedback>Password must be at least 8 characters !</FormFeedback>
      </FormGroup>
      <FormGroup className="auth__form-group">
       <Label className="auth__form-group--label" for="password">
        Confirm your password
       </Label>
       <Input
        id="confirmPassword"
        className="auth__form-group--input"
        type="password"
        name="password"
        placeholder="atleast 8 characters"
        onChange={handleChange}
        invalid={!state.match}
        required
       />
       <FormFeedback>Please make sure your password match !</FormFeedback>
      </FormGroup>
      <FormGroup className="signup__form-group--action" inline>
       <AwesomeButton>Reset Password</AwesomeButton>
      </FormGroup>
      <div className="signup__form-footer">
       <Label className="signup__form-footer--label">
        Or you can &nbsp;
        <a href="/login">Log In Here</a>
       </Label>
      </div>
     </Form>
    </Col>
   </Row>
   <AwesomeSuccess modal={redirect} title='Password changed' text='Your password have been succefully updated, Enjoy your experience with us.' imgPath='/img/completedRequest.svg' actionTxt='Go back Login' actionPath='/login' />
  </div>
 )
}

export default Resetpassword
