import { ChangeEvent, FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

import { updateInfoConclusion } from '../../../store/slices/exam'
import { getExam } from '../../../store/selectors'
import {
 infoConclusionType,
 ReactChangeEvent,
 ReactSubmitEvent,
 File,
} from '../../../helpers/types'

import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import FileUpload from '../../../components/ExaminationComponents/FileUpload'
import OtherFilesBox from '../../../components/ExaminationComponents/OtherFilesBox'
import UploadedFiles from './UploadedFiles'
import AwesomeSuccess from '../../../components/AwesomeModal/AwesomeSuccess'

const ExaminationConclusion: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { infoConclusion, prescription } = useSelector(getExam)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const { id } = useParams<{ id: string }>()
 const dispatch = useDispatch()

 const _updateInfoConclusion = (payload: infoConclusionType) => {
  dispatch(updateInfoConclusion(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: infoConclusionType = {
  conclusion: infoConclusion?.conclusion ? infoConclusion.conclusion : '',
  file: infoConclusion?.file ? infoConclusion.file : undefined,
 }

 const [state, setState] = useState(initState)

 const [icon, setIcon] = useState(true)
 const [success, setSuccess] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const toggleSuccess = () => {
  setSuccess(!success)
 }

 const handleChange = (e: ReactChangeEvent | ChangeEvent<HTMLTextAreaElement>) => {
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectFile = (file: File) => {
  setState({
   ...state,
   file,
  })
 }

 const handleRemoveFile = () => {
  setState({
   ...state,
   file: undefined,
  })
 }

 const submitInfoConclusion = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _updateInfoConclusion(state)
  toggleSuccess()
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 return (
  <>
   <Header />
   <Form className="createExamination" onSubmit={submitInfoConclusion}>
    <Card className="createExamination__PatInterro-card">
     <h1>Conclusion</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Row className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <FormGroup className="Primary__form-group2">
        <Label className="Primary__form-label2">Conclusion</Label>
        <Card className="Primary__form-card2">
         <textarea
          id="conclusion"
          name="conclusion"
          className="Primary__form-input2"
          placeholder="Enter all details..."
          onChange={handleChange}
          value={state.conclusion}
         />
        </Card>
       </FormGroup>
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <FileUpload label="Join Files" handleDrop={handleSelectFile} />
       <div
        className="createExamination__PatInterro-file"
        style={{ display: state.file ? 'flex' : 'none' }}
        onMouseEnter={() => {
         return setIcon(false)
        }}
        onMouseLeave={() => {
         return setIcon(true)
        }}
       >
        <FontAwesomeIcon icon={faFileAlt} className="createExamination__PatInterro-file--icon" />
        <div className="createExamination__PatInterro-file--content">
         <span className="createExamination__PatInterro-file--title">{state.file?.name}</span>
         <span className="createExamination__PatInterro-file--size">{`${parseFloat(
          String(state.file?.size / 1000000)
         ).toFixed(2)} mb`}</span>
        </div>
        {icon ? (
         <FontAwesomeIcon
          icon={faCheck}
          color="#219653"
          className="createExamination__PatInterro-file--check"
         />
        ) : (
         <FontAwesomeIcon
          icon={faTrash}
          color="#dd4b39"
          onClick={handleRemoveFile}
          className="createExamination__PatInterro-file--check"
         />
        )}
       </div>
      </Col>
     </Row>
    </Card>

    <Card className="createExamination__PatInterro-card">
     <h1>Other Files</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <div className="createExamination__PatInterro-card--col createExamination__conclusion-fileContainer">
      <OtherFilesBox
       title="Create prescription"
       description="You can add import an existing one or create new one"
       image="/img/prescription.svg"
      />
      <OtherFilesBox
       title="Create Certificate"
       description="You can add import an existing one or create new one"
       image="/img/medical_certificate.svg"
      />
     </div>
     {prescription.length >= 1 ? <UploadedFiles /> : ''}
    </Card>
    <AwesomeButtonIcon icon="check" text="Finish Examination" />
   </Form>
   <AwesomeSuccess
    modal={success}
    toggle={toggleSuccess}
    title="Examination created"
    text="The examination have been succefully created, you can still check it."
    imgPath="/img/completed.svg"
    actionPath={`/folder/${id}`}
    actionTxt="Check examinations"
   />
  </>
 )
}

export default ExaminationConclusion
