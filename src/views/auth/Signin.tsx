import React, { FC } from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Signin: FC = () => {
 return (
  <div>
   <Row>
    <Col md="4" className="auth__side_1">
     <h2 className="auth__header">Clinity</h2>
     <Form className="auth__form">
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
       />
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
       />
      </FormGroup>
      <FormGroup className="auth__form-group--repass" inline>
       <Label check>
        <Input type="checkbox" /> Remember me
       </Label>
       <a href="/">Forget Password?</a>
      </FormGroup>
      <FormGroup className="auth__form-group--action" inline>
       <button type="button" color="primary" className="auth__form-group--action-btn" id="active">
        Log In
       </button>
      </FormGroup>
     </Form>
     <div className="auth__form-footer">
      <p className="auth__form-footer--text">Or login using</p>
      <button type="button" color="primary" className="auth__form-group--action-btn" id="active">
       Google
      </button>
     </div>
    </Col>
    <Col md="8" className="auth__side_2">
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
