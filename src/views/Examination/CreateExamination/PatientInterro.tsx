import { FC } from 'react'
import { Card, Col, FormGroup, Row } from 'reactstrap'

import Header from '../../../components/Header'
import PrimaryDropdown from '../../../components/PrimaryDropdown/PrimaryDropdown'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'

const PatientInterro: FC = () => {
 return (
  <>
   <Header />
   <FormGroup className="createExamination">
    <Card className="createExamination__PatInterro-card">
     <h1>Symptomatologie</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown name="pain-onset" label="Onset of pain" placeholder="ex. 36.8°" />
       <PrimaryDropdown name="pain-place" label="Where exactly" placeholder="ex. 36.8°" />
      </Row>
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown name="pain-intensity" label="Intensity of pain" placeholder="ex. 36.8°" />
       <PrimaryDropdown name="pain-irradation" label="Irradation" placeholder="ex. 36.8°" />
      </Row>
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown
        name="analgesic-position"
        label="Analgesic position?"
        placeholder="ex. 36.8°"
       />
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
     <Col className="createExamination__PatInterro-card--col">
      <Row md="1" className="createExamination__PatInterro-card--row">
       <textarea
        name="conclusion"
        className="createExamination__PatInterro-card--textarea"
        placeholder="Enter all details..."
       />
      </Row>
     </Col>
    </Card>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </FormGroup>
  </>
 )
}

export default PatientInterro
