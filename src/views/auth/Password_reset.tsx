import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { Col, Form, FormFeedback, FormGroup, Row, Label, Input, Alert } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import { ReactSubmitEvent } from '../../helpers/types'
import { change, changeError } from '../../store/slices/resetPass'

const Resetpassword: FC = () => {
 // ===========================================================================
 // Hooks
 // ===========================================================================

 const dispatch = useDispatch()
 const [password , setPassword] = useState('')
 const [password2 , setPassword2] = useState('')
 const [visible, setVisible] = useState(false)
 const [redirection , setRedirection] = useState(false)



 const _changepassword = () => {
  dispatch(change(password))
 }
 const _changeError = () => {
  dispatch(changeError('non valide password'))
 }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.currentTarget.value)
 }

 const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword2(e.currentTarget.value)
 }

 const handleSubmit = (event: ReactSubmitEvent): void => {
  event.preventDefault()
  if (password === password2 || password.length < 8) {
   _changepassword()
   //  setRedirection(true)
   setRedirection(true)
  } else 
   setVisible(true)
  _changeError()
 }

 

 if (redirection) return <Redirect to='/dashboard' />



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
        Enter your password
       </Label>
       <Input
        className="auth__form-group--input"
        type="password"
        name="password"
        placeholder="atleast 8 characters"
        onChange={handleChange}
       />
       <FormFeedback>Please enter a valid password !</FormFeedback>
      </FormGroup> <FormGroup className="auth__form-group">
       <Label className="auth__form-group--label" for="password">
        Enter your password
       </Label>
       <Input
        className="auth__form-group--input"
        type="password"
        name="password"
        placeholder="atleast 8 characters"
        onChange={handleChange2}
       />
       <FormFeedback>Please enter a valid password !</FormFeedback>
      </FormGroup>
      <FormFeedback>Please enter a valid email</FormFeedback>
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
     <Alert color="danger" isOpen={visible} >
        confirm your password correctly
     </Alert>
    </Col>
   </Row>
  </div>
 
 )
}

export default Resetpassword
