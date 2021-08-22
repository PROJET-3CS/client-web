import React, { FC } from 'react'
import { Col, Row, FormGroup, Label } from 'reactstrap'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import PrimaryCheckBox from '../../components/PrimaryInput/PrimaryCheckBox'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'

const InfoMedical: FC = () => {
 return (
  <Collapses title="Informations Médicales">
   <Col className="editfolder__collapse-card--col">
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput name="folder-number" type="number" label="N° Folder" placeholder="ex. Yacine" />
     <PrimaryInput
      name="soc-sec-number"
      type="number"
      label="Social Security Number"
      placeholder="ex. Kharroubi"
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput name="height" type="number" label="Height (in cm)" placeholder="ex. 173" />
     <PrimaryInput name="weight" type="number" label="Weight" placeholder="ex. 60.3kg" />
    </Row>
    <Row className="editfolder__collapse-card--row">
     <FormGroup className="Primary__form-group ">
      <Label className="Primary__form-label">Blood Type</Label>
      <PrimaryCheckBox />
     </FormGroup>
    </Row>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default InfoMedical
