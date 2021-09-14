/* eslint-disable max-lines */
import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Card, Col, Form, Row } from 'reactstrap'

import { getExam } from '../../../store/selectors'

import { infoDiagnosticType, ReactChangeEvent, ReactSubmitEvent } from '../../../helpers/types'
import { updateInfoDiagnostic } from '../../../store/slices/exam'

import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import Illnesses from '../../../components/ExaminationComponents/Illnesses'
import Interrogatory from '../../../components/ExaminationComponents/Interrogatory'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'

const IllnessDiagnostic: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { infoDiagnostic } = useSelector(getExam)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const { id } = useParams<{ id: string }>()
 const history = useHistory()
 const dispatch = useDispatch()

 const _updateInfoDiagnostic = (payload: infoDiagnosticType) => {
  dispatch(updateInfoDiagnostic(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: infoDiagnosticType = {
  inspection: infoDiagnostic?.inspection ? infoDiagnostic.inspection : '',
  auscultation: infoDiagnostic?.auscultation ? infoDiagnostic.auscultation : '',
  percussion: infoDiagnostic?.percussion ? infoDiagnostic.percussion : '',
  palpation: infoDiagnostic?.palpation ? infoDiagnostic.palpation : '',
  diagnosticNote: infoDiagnostic?.diagnosticNote ? infoDiagnostic.diagnosticNote : '',
 }

 const initPage = {
  type: 'general',
  appareil: '',
 }

 const [state, setState] = useState(initState)
 const [page, setPage] = useState(initPage)

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleChange = (e: ReactChangeEvent | ChangeEvent<HTMLTextAreaElement>) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectType = (value: string) => {
  setPage({
   ...page,
   type: value,
  })
 }

 const handleSelectAppareil = (value: string) => {
  setPage({
   ...page,
   appareil: value,
  })
 }

 const submitInfoDiagnostic = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _updateInfoDiagnostic(state)
  history.push(`/examination/${id}/conclusion`)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <>
   <Header />
   <Form className="createExamination" onSubmit={submitInfoDiagnostic}>
    <Card className="createExamination__PatInterro-card">
     <h1>Clinical Examination</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Interrogatory
       btn1text="I want specific Illness"
       btn2text="Just general physical examination"
       handleSelect={handleSelectType}
      />
     </Col>
    </Card>

    <Card
     className="createExamination__PatInterro-card"
     style={{ display: page.type === 'general' ? 'flex' : 'none' }}
    >
     <h1>General Physical Examination</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="inspection"
        type="text"
        name="inspection"
        label="Inspection"
        placeholder="ex. Yacine Kharroubi"
        value={state.inspection}
        onChange={handleChange}
        required
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="auscultation"
        name="auscultation"
        label="Cardiac/pulmonary auscultation"
        placeholder="ex. Yacine Kharroubi"
        value={state.auscultation}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="percussion"
        name="percussion"
        label="Abdominal percussion"
        placeholder="ex. Yacine Kharroubi"
        value={state.percussion}
        onChange={handleChange}
        required
       />
      </Col>

      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="palpation"
        name="abdos-palpation"
        label="Abdominal palpation"
        placeholder="ex. Yacine Kharroubi"
        value={state.palpation}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
    </Card>

    <Card
     className="createExamination__PatInterro-card"
     style={{ display: page.type === 'specific' ? 'flex' : 'none' }}
    >
     <h1>Illnesses</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Illnesses handleSelect={handleSelectAppareil} />
    </Card>

    <Card
     className="createExamination__PatInterro-card"
     style={{ display: page.type === 'specific' && page.appareil !== '' ? 'flex' : 'none' }}
    >
     <h1>Specific Physical Examination</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        name="qst1"
        label="Antécédent cardiovasculaire du malade?"
        placeholder="ex: Oui"
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="qst2" label="Antécédents familiaux du malade?" placeholder="ex: IDM" />
      </Col>
     </Row>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="qst3" label="Y a-t-il une syndrome coronarien ?" placeholder="ex: Oui" />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="qst4" label="Mode de vie du patient ?" placeholder="ex: Sportif..." />
      </Col>
     </Row>

     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        name="qst5"
        label="Ont-ils alcooliques ou bien Tabagique ?"
        placeholder="ex: Oui"
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        name="qst6"
        label="Avez-vous des douleurs thoracique ?"
        placeholder="ex: Oui"
       />
      </Col>
     </Row>

     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="qst7" label="Ont-ils une dyspnée ?" placeholder="ex: Oui" />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="qst8" label="Ont-ils une syncope lipothymie ?" placeholder="ex: Oui" />
      </Col>
     </Row>

     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput name="inspection" label="Inspection" placeholder="inspection" />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="palpation"
        name="abdos-palpation"
        label="Abdominal palpation"
        placeholder="ex. Yacine Kharroubi"
       />
      </Col>
     </Row>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="auscultation"
        name="auscultation"
        label="Cardiac/pulmonary auscultation"
        placeholder="ex. Yacine Kharroubi"
       />
      </Col>
     </Row>
     <div className="createExamination__PatInterro-card--addbutton">
      <AwesomeButtonIcon icon="plus" text="Add a question" />
     </div>
    </Card>
    <Card className="createExamination__PatInterro-card">
     <h1>Doctors Observation</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="1" className="createExamination__PatInterro-card--row">
       <textarea
        id="diagnosticNote"
        name="diagnosticNote"
        className="createExamination__PatInterro-card--textarea"
        placeholder="Enter all details..."
        value={state.diagnosticNote}
        onChange={handleChange}
        required
       />
      </Row>
     </Col>
    </Card>
    <AwesomeButtonIcon type="submit" icon="check" text="Save Changes" />
   </Form>
  </>
 )
}

export default IllnessDiagnostic
