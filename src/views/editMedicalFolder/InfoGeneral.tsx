import React, { FC } from 'react'
import { Col, Row } from 'reactstrap'

import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import Collapses from '../../components/Collapses/Collapses'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'

import { User } from '../../helpers/types'
import PrimarySelect from '../../components/PrimaryDropdown/PrimarySelect'

interface Props {
 patient: User | undefined
}

const InfoGeneral: FC<Props> = ({ patient }) => {
 const options = [
  { value: 'marie', label: 'Marié (e)' },
  { value: 'celibataire', label: 'Célibataire' },
  { value: 'divorce', label: 'Divorcé (e)' },
 ]

 return (
  <Collapses title="Informations Générales">
   <Col className="editfolder__collapse-card--col">
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      defaultValue={patient?.firstname}
      name="firstname"
      type="text"
      label="Last Name"
      placeholder="ex. Yacine"
     />
     <PrimaryInput
      defaultValue={patient?.lastname}
      name="lastname"
      type="text"
      label="First Name"
      placeholder="ex. Kharroubi"
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      defaultValue={patient?.gender}
      name="gender"
      type="text"
      label="Gender"
      placeholder="ex. Yacine"
     />
     <PrimaryInput
      defaultValue={patient?.adress}
      name="adress"
      type="text"
      label="Address"
      placeholder="ex. Kharroubi"
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimaryInput
      defaultValue={patient?.birthDay}
      name="birthDay"
      type="date"
      label="Birthday"
      placeholder="ex. 07/02/2001"
     />
     <PrimaryInput
      defaultValue={patient?.birthPlace}
      name="birthPlace"
      type="text"
      label="In"
      placeholder="ex. Relizane"
     />
    </Row>
    <Row md="2" className="editfolder__collapse-card--row">
     <PrimarySelect label='Situation' options={options} name="situation" placeholder="Situation..." />

     <PrimaryInput
      defaultValue={patient?.speciality}
      name="speciality"
      type="text"
      label="Speciality"
      placeholder="ex. Cycle Supérieur"
     />
    </Row>
    <AwesomeButtonIcon icon="check" text="Save Changes" />
   </Col>
  </Collapses>
 )
}

export default InfoGeneral
