import { faCheck, faEye, faPills, faPlus, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import Header from '../../../components/Header'
import { getFolder } from '../../../store/selectors'
import { syncFolder } from '../../../store/slices/folder'
import Layout from '../../layouts/Layout'
import MedicalInfo from '../../medicalFolder/MedicalInfo'

const Prescription: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { folder, patient } = useSelector(getFolder)

 //  const { id } = useParams<{ id: string }>()

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _syncFolder = () => {
  dispatch(syncFolder('1'))
 }

 // ===========================================================================
 // State
 // ===========================================================================

 // ===========================================================================
 // Handlers
 // ===========================================================================

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _syncFolder()
 }, [])

 return (
  <>
   <Layout>
    <Header />
    <h2 className="main-heading">Medical Examinations</h2>
    <div className="prescription__container">
     <div className="prescription__medications">
      <h3>Medication</h3>
      <div className="prescription__medications-container">
       <ul className="prescription__medications-list">
        <li className="prescription__medications-list--item">
         <div className="prescription__medications-content">
          <div className="prescription__medications-icon--container prescription__medications-icon--container--serop">
           <FontAwesomeIcon
            icon={faPrescriptionBottleAlt}
            className="prescription__medications-icon prescription__medications-icon"
           />
          </div>
          <div className="prescription__medications-content--container">
           <span className="prescription__medications-content--title">
            Ator 40 mg comp.peli.sec
           </span>
           <span className="prescription__medications-content--dosage">
            Dosage: 1 comprimé / jours
           </span>
          </div>
         </div>
         <div className="prescription__medications-qsp">
          <span className="prescription__medications-content--date">08/04/2021</span>
          <span className="prescription__medications-content--qsp">QSP: 3 mois</span>
         </div>
        </li>

        <li className="prescription__medications-list--item">
         <div className="prescription__medications-content">
          <div className="prescription__medications-icon--container prescription__medications-icon--container--pills">
           <FontAwesomeIcon
            icon={faPills}
            className="prescription__medications-icon prescription__medications-icon"
           />
          </div>
          <div className="prescription__medications-content--container">
           <span className="prescription__medications-content--title">
            Ator 40 mg comp.peli.sec
           </span>
           <span className="prescription__medications-content--dosage">
            Dosage: 1 comprimé / jours
           </span>
          </div>
         </div>
         <div className="prescription__medications-qsp">
          <span className="prescription__medications-content--date">08/04/2021</span>
          <span className="prescription__medications-content--qsp">QSP: 3 mois</span>
         </div>
        </li>
       </ul>
       <div className="prescription__medications-action">
        <AwesomeButtonIcon icon={faEye} text="Preview Prescription" />
        <AwesomeButtonIcon icon={faPlus} text="Add medication" />
       </div>
      </div>
      <div className="prescription__actions">
       <AwesomeButtonIcon icon={faCheck} text="Save Prescription" />
      </div>
     </div>
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
    </div>
   </Layout>
  </>
 )
}

export default Prescription
