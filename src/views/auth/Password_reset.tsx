import React, { FC } from 'react'
import { Col, Form, FormFeedback, FormGroup, Row, Label } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'

const Resetpassword: FC = () => {
 // ===========================================================================
 // Hooks
 // ===========================================================================

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
     <Form className="signup__form">
      <div className="signup__form-heading">
       <h2 className="signup__form-heading--title">Reset Password.</h2>
       <p className="signup__form-heading--text">
        Please note that to request a medical account, you must be eaither a student, a member of
        administration or an employee in this university.
       </p>
      </div>
      <PrimaryInput
       label="Enter your new password"
       type="password"
       name="password"
       placeholder="at least 8 caracters"
      />
      <PrimaryInput
       label="Re-enter your password"
       type="password"
       name="re-password"
       placeholder="at least 8 caracters"
      />
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
    </Col>
   </Row>
  </div>
 )
}

export default Resetpassword
