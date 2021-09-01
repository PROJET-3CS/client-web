import { FC } from 'react'
import { Card, Col, FormGroup, Row } from 'reactstrap'

import Layout from '../../layouts/Layout'
import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import PrimaryDropdown from '../../../components/PrimaryDropdown/PrimaryDropdown'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import Illnesses from '../../../components/ExaminationComponents/Illnesses'
import Interrogatory from '../../../components/ExaminationComponents/Interrogatory'

const IllnessDiagnostic: FC = () => {
 return (
  <Layout>
   <Header />
   <FormGroup className="createExamination">
    <Card className="createExamination__PatInterro-card">
     <h1>Interrogatory</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Interrogatory btn1text="I want specific Illness" btn2text="Just general physical examination"/>
     </Col>
     <h1>Illnesses</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Illnesses />
    </Card>

    <Card className="createExamination__PatInterro-card">
     <h1>General Physical Examination</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown name="inspection" label="Inspection" placeholder="ex. Yacine Kharroubi" />
       <PrimaryDropdown
        name="cardiac-auscultation"
        label="Cardiac/pulmonary auscultation"
        placeholder="ex. Yacine Kharroubi"
       />
      </Row>
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown
        name="abdos-percussion"
        label="Abdominal percussion"
        placeholder="ex. Yacine Kharroubi"
       />
       <PrimaryDropdown
        name="abdos-palpation"
        label="Abdominal palpation"
        placeholder="ex. Yacine Kharroubi"
       />
      </Row>
     </Col>
    </Card>

    <Card className="createExamination__PatInterro-card">
     <h1>Specific Physical Examination</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown name="dos" label="Le dos" placeholder="Good" />
       <PrimaryDropdown name="head" label="The head" placeholder="Bad" />
      </Row>
      <Row md="2" className="createExamination__PatInterro-card--row">
       <PrimaryDropdown name="jambes" label="Les jambes" placeholder="Good" />
       <PrimaryDropdown name="eyes" label="The eyes" placeholder="Really good" />
      </Row>
      <div className="createExamination__PatInterro-card--addbutton">
       <AwesomeButtonIcon icon="plus" text="Add a place" />
      </div>
     </Col>
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
       <PrimaryInput
        name="observation-details"
        type="text"
        label="Observation details"
        placeholder="Enter details..."
       />
      </Row>
     </Col>
    </Card>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </FormGroup>
  </Layout>
 )
}

export default IllnessDiagnostic
