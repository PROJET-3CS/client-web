import React, { FC } from 'react'
import { Folder, User } from '../../../helpers/types'
import MedicalInfo from '../../medicalFolder/MedicalInfo'

interface Props {
 patient: User
 folder: Folder
}

const PatientInfo: FC<Props> = ({ patient, folder }) => {
 return (
  <div className="prescription__patientInfo">
   <h3>Patient Info</h3>
   <div className="prescription__patientInfo-container">
    <div className="folder__item">
     <img alt="user pic" className="folder__item-img" src="/img/userRect.png" />
     <div className="folder__item-profile">
      <span className="folder__item-profile--name">{`${patient.firstname} ${patient.lastname}`}</span>
      <span className="folder__item-profile--email">{`${patient.email}`}</span>
     </div>
    </div>

    <MedicalInfo folder={folder} patient={patient} />
   </div>
  </div>
 )
}

export default PatientInfo
