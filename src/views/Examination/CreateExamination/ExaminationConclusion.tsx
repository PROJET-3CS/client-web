import { FC } from 'react'
import { Card, Col, FormGroup, Label } from 'reactstrap'

import Layout from '../../layouts/Layout'
import Header from '../../../components/Header'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import FileUpload from '../../../components/ExaminationComponents/FileUpload'
import OtherFilesBox from '../../../components/ExaminationComponents/OtherFilesBox'

const ExaminationConclusion: FC = () => {
 return (
  <Layout>
   <Header />
   <FormGroup className="createExamination">
    <Card className="createExamination__PatInterro-card">
     <h1>Conclusion</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <div className="createExamination__PatInterro-card--row">
       <FormGroup className="Primary__form-group2">
        <Label className="Primary__form-label2">Conclusion</Label>
        <Card className="Primary__form-card2">
         <textarea
          name="conclusion"
          className="Primary__form-input2"
          placeholder="Enter all details..."
         />
        </Card>
       </FormGroup>
       <FileUpload label="Join Files" />
      </div>
     </Col>
    </Card>

    <Card className="createExamination__PatInterro-card">
     <h1>Other Files</h1>
     <p className="createExamination__PatInterro-card--description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat sed quam egestas ultrices
      nibh amet. Placerat pellentesque maecenas sollicitudin lacinia commodo, luctus. A eu magna
      augue aenean.
     </p>
     <Col className="createExamination__PatInterro-card--col">
      <OtherFilesBox
       title="Create prescription"
       description="You can add import an existing one or create new one"
       image="/img/prescription.svg"
      />
      <OtherFilesBox
       title="Create prescription"
       description="You can add import an existing one or create new one"
       image="/img/medical_certificate.svg"
      />
     </Col>
    </Card>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </FormGroup>
  </Layout>
 )
}

export default ExaminationConclusion
