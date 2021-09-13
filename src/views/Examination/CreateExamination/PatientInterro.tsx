/* eslint-disable max-lines */
import { ChangeEvent, FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Form, Row } from 'reactstrap'

import { getExam } from '../../../store/selectors'
import { infoInterrogationType, ReactChangeEvent, ReactSubmitEvent } from '../../../helpers/types'

import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import PrimaryRange from '../../../components/PrimaryInput/PrimaryRange'
import PrimarySelect from '../../../components/PrimaryDropdown/PrimarySelect'
import { updateInfoInterrogation } from '../../../store/slices/exam'

const PatientInterro: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { infoInterrogation } = useSelector(getExam)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const history = useHistory()
 const dispatch = useDispatch()

 const _updateInfoInterrogation = (payload: infoInterrogationType) => {
  dispatch(updateInfoInterrogation(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: infoInterrogationType = {
  reason: infoInterrogation?.reason ? infoInterrogation.reason : '',
  startedAt: infoInterrogation?.startedAt ? infoInterrogation.startedAt : '',
  where: infoInterrogation?.where ? infoInterrogation.where : '',
  intensity: infoInterrogation?.intensity ? infoInterrogation.intensity : 0,
  note: infoInterrogation?.note ? infoInterrogation.note : '',
 }

 const [state, setState] = useState(initState)

 const partOptions = [
  { value: 'eye', label: 'Eye' },
  { value: 'ear', label: 'Ear' },
  { value: 'mouth', label: 'Mouth' },
  { value: 'elbow', label: 'Elbow' },
  { value: 'hand', label: 'Hand' },
  { value: 'finger', label: 'Finger' },
  { value: 'stomach', label: 'Stomach' },
  { value: 'heel', label: 'Heel' },
  { value: 'toe nail', label: 'Toe nail' },
  { value: 'head', label: 'Head' },
  { value: 'cheek', label: 'Cheek' },
  { value: 'nose', label: 'Nose' },
  { value: 'neck', label: 'Neck' },
  { value: 'shoulder', label: 'Shoulder' },
  { value: 'chest', label: 'Chest' },
  { value: 'arm', label: 'Arm' },
  { value: 'toe nail', label: 'Toe nail' },
  { value: 'legs', label: 'Legs' },
  { value: 'knee', label: 'Knee' },
  { value: 'foot', label: 'Foot' },
  { value: 'toe', label: 'Toe' },
 ]

 const painLvls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleChange = (e: ReactChangeEvent | ChangeEvent<HTMLTextAreaElement>) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectWhere = (value: string) => {
  setState({
   ...state,
   where: value,
  })
 }

 const submitInfoInterrogation = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _updateInfoInterrogation(state)
  history.push('/examination/condition')
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <>
   <Header />
   <Form className="createExamination" onSubmit={submitInfoInterrogation}>
    <Card className="createExamination__PatInterro-card">
     <h1>Consultation Reason</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="reason"
        name="consultation-reason"
        label="Reason"
        placeholder="ex. regular visit"
        value={state.reason}
        onChange={handleChange}
        type="text"
        required
       />
      </Col>
     </Row>
    </Card>
    <Card className="createExamination__PatInterro-card">
     <h1>Symptomatology</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryInput
        id="startedAt"
        name="pain-onset"
        label="Onset of pain"
        type="date"
        value={state.startedAt.toString()}
        onChange={handleChange}
        required
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PrimarySelect
        options={partOptions}
        getValue={handleSelectWhere}
        defaultValue={state.where}
        name="pain-place"
        label="Where exactly"
        placeholder="Head"
        required
       />
      </Col>
     </Row>

     <Row className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PrimaryRange
        id="intensity"
        name="pain-intensity"
        label="Intensity of pain"
        type="range"
        step="1"
        min="0"
        max="10"
        range={painLvls}
        value={state.intensity}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
    </Card>
    <Card className="createExamination__PatInterro-card">
     <h1>Interrogation’s Note</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row md="1" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <textarea
        id="note"
        name="conclusion"
        className="createExamination__PatInterro-card--textarea"
        placeholder="Enter all details..."
        onChange={handleChange}
        value={state.note}
        required
       />
      </Col>
     </Row>
    </Card>
    <AwesomeButtonIcon type="submit" icon="check" text="Save Changes" />
   </Form>
  </>
 )
}

export default PatientInterro
