import React, { FC } from 'react'
import { Col, Form, FormFeedback, FormGroup, Row, Label } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'

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
            <PrimaryInput
              label="Enter your name"
              type="text"
              name="name"
              placeholder="ex. Kharroubi Yacine"
            />
            <PrimaryInput
              label="Enter your name"
              type="email"
              name="email"
              placeholder="ex. y.kharroubi@gmail.com"
            />
            <FormFeedback>Please enter a valid email</FormFeedback>
            <FormGroup className="signup__form-group--action" inline>
              <AwesomeButton>Request</AwesomeButton>
            </FormGroup>
            <div className="signup__form-footer">
              <Label className="signup__form-footer--label">
        Already have an account? &nbsp;
                <a href="/login">Sign In Now!</a>
              </Label>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Signup
