import React, { FC } from 'react'
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'

import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeButtonSecondary from '../../components/AwesomeButton/AwesomeButtonSecondary'

const Signup: FC = () => {
 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <div>
   <Row>
    <Col md="7" className="signup__side_2">
     <div className="signup__heading">
      <h2 className="signup__heading-title">Request Account</h2>
      <p className="signup__heading-subtitle">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet quo! Laudantium
       animi fugiat itaque?
      </p>
      <img
       className="signup__heading-illustration"
       src="/img/request.svg"
       alt="request_background_illustrattion"
      />
     </div>
    </Col>
    <Col md="5" className="signup__side_1">
     <h2 className="signup__header">Clinity</h2>
     <Form className="signup__form">
      <div className="signup__form-heading">
       <h2 className="signup__form-heading--title">Request.</h2>
       <p className="signup__form-heading--text">
        Please note that to request a medical account, you must be eaither a student, a member of
        administration or an employee in this university.
       </p>
      </div>
      <FormGroup className="signup__form-group">
       <Label className="signup__form-group--label">Enter your fullname</Label>
       <Input
        className="signup__form-group--input"
        type="text"
        name="name"
        placeholder="ex. Yacine Kharroubi"
       />
      </FormGroup>
      <FormGroup className="signup__form-group">
       <Label className="signup__form-group--label">Enter your email</Label>
       <Input
        className="signup__form-group--input"
        type="email"
        name="email"
        placeholder="ex. y.kharroubi@gmail.com"
       />
      </FormGroup>
      <FormFeedback>Please enter a valid email</FormFeedback>
      <FormGroup className="signup__form-group--repass" inline>
       <a href="/">Forgot Password?</a>
      </FormGroup>
      <FormGroup className="auth__form-group--action" inline>
       <AwesomeButton>Request</AwesomeButton>
      </FormGroup>
     </Form>
     <div className="signup__form-footer">
      <p className="signup__form-footer--text">Or login using</p>
      <AwesomeButtonSecondary>Google</AwesomeButtonSecondary>
     </div>
    </Col>
   </Row>
  </div>
 )
}

export default Signup
