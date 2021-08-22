import { FC } from 'react'
import { Col, Row, DropdownItem, Label, FormGroup } from 'reactstrap'
import AwesomeButtonIcon from '../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../components/Collapses/Collapses'
import PrimaryDropdown from '../components/PrimaryDropdown/PrimaryDropdown'
import PrimaryInput from '../components/PrimaryInput/PrimaryInput'
import Layout from './layouts/Layout'
import PrimaryCheckBox from '../components/PrimaryInput/PrimaryCheckBox'
import Header from '../components/Header'
import Medicament from '../components/EditFolderComponent/Medicament'
import Tabac from '../components/EditFolderComponent/Tabac'

const EditMedicalFolder: FC = () => {
 return (
  <Layout>
   <Header />
   <FormGroup className="editfolder-form">
    <div>
     <p className="editfolder-heading--title">Edit Medical Folder</p>
    </div>
    <Collapses title="Informations Générales">
     <Col className="editfolder__collapse-card--col">
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryInput name="first-name" type="text" label="Last Name" placeholder="ex. Yacine" />
       <PrimaryInput name="last-name" type="text" label="First Name" placeholder="ex. Kharroubi" />
      </Row>
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryInput name="gender" type="text" label="Gender" placeholder="ex. Yacine" />
       <PrimaryInput name="address" type="text" label="Address" placeholder="ex. Kharroubi" />
      </Row>
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryInput name="birthday" type="date" label="Birthday" placeholder="ex. 07/02/2001" />
       <PrimaryInput name="birth-place" type="text" label="In" placeholder="ex. Relizane" />
      </Row>
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryDropdown placeholder="Faculty" name="faculty" label="Faculty">
        <DropdownItem className="PrimaryDropdown__form-item">ESI-SBA</DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="PrimaryDropdown__form-item">MI</DropdownItem>
       </PrimaryDropdown>
       <PrimaryInput
        name="speciality"
        type="text"
        label="Speciality"
        placeholder="ex. Cycle Supérieur"
       />
      </Row>
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryDropdown placeholder="Situation" name="situation" label="Situation">
        <DropdownItem className="PrimaryDropdown__form-item">Marié (e)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="PrimaryDropdown__form-item">Célibataire</DropdownItem>
        <DropdownItem divider />
        <DropdownItem className="PrimaryDropdown__form-item">Divorcé (e)</DropdownItem>
       </PrimaryDropdown>
      </Row>
      <AwesomeButtonIcon icon="check" text="Save Changes" />
     </Col>
    </Collapses>
    <Collapses title="Informations Médicales">
     <Col className="editfolder__collapse-card--col">
      <Row md="2" className="editfolder__collapse-card--row">
       <PrimaryInput
        name="folder-number"
        type="number"
        label="N° Folder"
        placeholder="ex. Yacine"
       />
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
    <Collapses title="Antécédents Personnels">
     <Col className="editfolder__collapse-card--col">
      <div>
       <p className="editfolder__collapse-card--contentsubtitle">Tabac</p>
       <Tabac />
      </div>
      <div>
       <p className="editfolder__collapse-card--contentsubtitle">Médicaments</p>
       <Medicament />
      </div>
      <AwesomeButtonIcon icon="check" text="Save Changes" />
     </Col>
    </Collapses>
   </FormGroup>
  </Layout>
 )
}

export default EditMedicalFolder
