import React, { FC, useState } from 'react'
import {
 faPrescriptionBottleAlt,
 faPills,
 faEye,
 faPlus,
 faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AwesomeButtonIcon from '../../../components/AwesomeButton/AwesomeButtonIcon'
import CreatePrescModal from './CreatePrescModal'
import { Medicament } from '../../../helpers/types'
import PreviewModal from './PreviewModal'

interface medState {
 medicaments: Medicament[]
}

const Medications: FC = () => {
 const initState: medState = {
  medicaments: [],
 }

 const [state, setState] = useState(initState)

 const [open, setOpen] = useState(false)
 const [preview, setPreview] = useState(false)

 const toggle = () => {
  setOpen(!open)
 }

 const togglePreview = () => {
  setPreview(!preview)
 }

 const handleAddMed = (med: Medicament) => {
  setState({
   ...state,
   medicaments: [...state.medicaments, med],
  })
 }

 return (
  <div className="prescription__medications">
   <h3>Medication</h3>
   <div className="prescription__medications-container">
    <ul className="prescription__medications-list">
     {state.medicaments?.map((med) => {
      return med.type === 'Sirop' ? (
       <li key={med.nomCommercial} className="prescription__medications-list--item">
        <div className="prescription__medications-content">
         <div className="prescription__medications-icon--container prescription__medications-icon--container--serop">
          <FontAwesomeIcon
           icon={faPrescriptionBottleAlt}
           className="prescription__medications-icon prescription__medications-icon"
          />
         </div>
         <div className="prescription__medications-content--container">
          <span className="prescription__medications-content--title">Ator 40 mg comp.peli.sec</span>
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
      ) : (
       <li className="prescription__medications-list--item">
        <div className="prescription__medications-content">
         <div className="prescription__medications-icon--container prescription__medications-icon--container--pills">
          <FontAwesomeIcon
           icon={faPills}
           className="prescription__medications-icon prescription__medications-icon"
          />
         </div>
         <div className="prescription__medications-content--container">
          <span className="prescription__medications-content--title">Ator 40 mg comp.peli.sec</span>
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
      )
     })}
    </ul>
    <div className="prescription__medications-action">
     <AwesomeButtonIcon icon={faEye} text="Preview Prescription" onClick={togglePreview} />
     <AwesomeButtonIcon icon={faPlus} text="Add medication" onClick={toggle} />
    </div>
   </div>
   <div className="prescription__actions">
    <AwesomeButtonIcon icon={faCheck} text="Save Prescription" />
   </div>

   <CreatePrescModal modal={open} toggle={toggle} submitHandler={handleAddMed} />
   <PreviewModal modal={preview} toggle={togglePreview} />
  </div>
 )
}

export default Medications
