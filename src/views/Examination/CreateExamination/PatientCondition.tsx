import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, Col, Form, Row } from 'reactstrap'

import { updateInfoCondition } from '../../../store/slices/exam'
import { getExam } from '../../../store/selectors'

import { infoConditionType, ReactChangeEvent, ReactSubmitEvent } from '../../../helpers/types'

import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import PatientStateBox from '../../../components/ExaminationComponents/PatientStateBox'

const PatientCondition: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { infoCondition } = useSelector(getExam)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const history = useHistory()
 const dispatch = useDispatch()

 const _updateInfoCondition = (payload: infoConditionType) => {
  dispatch(updateInfoCondition(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: infoConditionType = {
  fever: infoCondition?.fever ? infoCondition.fever : undefined,
  pulsation: infoCondition?.pulsation ? infoCondition.pulsation : undefined,
  pressure: infoCondition?.pressure ? infoCondition.pressure : undefined,
  weight: infoCondition?.weight ? infoCondition.weight : undefined,
  state: infoCondition?.state ? infoCondition.state : '',
 }

 const [state, setState] = useState(initState)

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleChange = (e: ReactChangeEvent) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectState = (value: string) => {
  setState({
   ...state,
   state: value,
  })
 }

 const submitInfoCondition = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _updateInfoCondition(state)
  history.push('/examination/diagnostic')
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <>
   <Header />
   <Form className="createExamination" onSubmit={submitInfoCondition}>
    <Card className="createExamination__PatInterro-card">
     <h1>Patient General Condition</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="fever"
        name="fever"
        label="Fever"
        placeholder="ex. 36.8°"
        type="number"
        min={0}
        value={state.fever}
        onChange={handleChange}
        required
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="pulsation"
        name="pulsation"
        label="Pulsation"
        placeholder="ex. 36.8°"
        type="number"
        min={0}
        value={state.pulsation}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="pressure"
        name="pressure"
        label="Pressure"
        placeholder="ex. 36.8°"
        type="number"
        min={0}
        value={state.pressure}
        onChange={handleChange}
        required
       />
      </Col>

      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="weight"
        name="weight"
        label="Weight"
        placeholder="ex. 56kg"
        type="number"
        min={0}
        value={state.weight}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
    </Card>

    <Card className="createExamination__PatInterro-card">
     <h1>Patient’s State</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        onSelect={handleSelectState}
        value={state.state}
        payload="choque"
        title="Patient en etat de choque"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        onSelect={handleSelectState}
        value={state.state}
        payload="comma"
        title="Patient en etat de comma"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
     </Row>

     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        onSelect={handleSelectState}
        value={state.state}
        payload="fatigue"
        title="Patient en etat de fatigue"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        onSelect={handleSelectState}
        value={state.state}
        payload="normale"
        title="Patient en etat normal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
     </Row>
    </Card>
    <AwesomeButtonIcon type='submit' icon="check" text="Save Changes" />
   </Form>
  </>
 )
}

export default PatientCondition
