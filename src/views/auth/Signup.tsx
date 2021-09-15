import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Form, FormFeedback, FormGroup, Row, Label } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import { ReactChangeEvent, ReactSubmitEvent, User } from '../../helpers/types'
// import { getAuth } from '../../store/selectors'
import { register } from '../../store/slices/auth'

const Signup: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 //  const { redirect } = useSelector(getAuth)
 // ===========================================================================
 // state
 // ===========================================================================
 const initState = {
  firstname: '',
  lastname: '',
  email: '',
 }
 const [state, setState] = useState(initState)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _register = (payload: User) => {
  dispatch(register(payload))
 }

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleChange = (e: ReactChangeEvent) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSubmit = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _register(state)
 }

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
     <Form className="signup__form" onSubmit={handleSubmit}>
      <div className="signup__form-heading">
       <h2 className="signup__form-heading--title">Request.</h2>
       <p className="signup__form-heading--text">
        Please note that to request a medical account, you must be eaither a student, a member of
        administration or an employee in this university.
       </p>
      </div>
      <PrimaryInput
       id="firstname"
       label="Enter your Firstame"
       type="text"
       name="name"
       placeholder="ex.Yacine"
       onChange={handleChange}
       value={state.firstname}
       required
      />
      <PrimaryInput
       id="lastname"
       label="Enter your Lastname"
       type="text"
       name="lastname"
       placeholder="ex. Kharoubi"
       onChange={handleChange}
       value={state.lastname}
       required
      />
      <PrimaryInput
       id="email"
       label="Enter your email"
       type="email"
       name="email"
       placeholder="ex. y.kharroubi@gmail.com"
       onChange={handleChange}
       value={state.email}
       required
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
