import { FC } from 'react'
import { Card, Col, FormGroup, Row } from 'reactstrap'

import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import PatientStateBox from '../../../components/ExaminationComponents/PatientStateBox'

const PatientCondition: FC = () => {
 return (
  <>
   <Header />
   <FormGroup className="createExamination">
    <Card className="createExamination__PatInterro-card">
     <h1>Consultation Reason</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryInput
        name="consultation-reason"
        label="Reason"
        placeholder="ex. legs pain"
        type="text"
       />
      </Row>
     </Col>
    </Card>
    <Card className="createExamination__PatInterro-card">
     <h1>Patient General Condition</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryInput name="fever" label="Fever" placeholder="ex. 36.8°" type="number" />
       <PrimaryInput name="pulsation" label="Pulsation" placeholder="ex. 36.8°" type="number" />
      </Row>
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryInput name="pressure" label="Pressure" placeholder="ex. 36.8°" type="number" />
       <PrimaryInput name="weight" label="Weight" placeholder="ex. 56kg" type="number" />
      </Row>
     </Col>
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
        title="Patient en etat de choque"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        title="Patient en etat de comma"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
     </Row>

     <Row md="2" className="createExamination__PatInterro-card--row">
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        title="Patient en etat de fatigue"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
      <Col className="createExamination__PatInterro-card--col">
       <PatientStateBox
        title="Patient en etat normal"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus ornare posuere. Mauris fermentum non lig."
       />
      </Col>
     </Row>
    </Card>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </FormGroup>
  </>
 )
}

export default PatientCondition
