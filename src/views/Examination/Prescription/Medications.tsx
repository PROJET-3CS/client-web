import React, { FC, useState } from 'react'
import {
 faPrescriptionBottleAlt,
 faPills,
 faEye,
 faPlus,
 faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
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
   <h3 className="prescription__title">Medication</h3>
   <div className="prescription__medications-container">
    <ul className="prescription__medications-list">
     {state.medicaments?.length === 0 ? (
      <div className='prescription__empty'>
       <img className='prescription__empty-img' src="/img/empty.svg" alt="empty" />
       <span className='prescription__empty-txt'>Hmm... Your prescription is empty!</span>
      </div>
     ) : (
      ''
     )}
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
          <span className="prescription__medications-content--title">{med.nomCommercial}</span>
          <span className="prescription__medications-content--dosage">
           Dosage: {med.type} {med.foisParJours}x / Jour(s)
          </span>
         </div>
        </div>
        <div className="prescription__medications-qsp">
         <span className="prescription__medications-content--date">{moment().format('l')}</span>
         <span className="prescription__medications-content--qsp">
          {med.qntType === 'qsp' ? `QSP: ${med.qnt} Mois` : `${med.qnt} Boites`}
         </span>
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
          <span className="prescription__medications-content--title">{med.nomCommercial}</span>
          <span className="prescription__medications-content--dosage">
           Dosage: {med.type} {med.foisParJours}x / Jour(s)
          </span>
         </div>
        </div>
        <div className="prescription__medications-qsp">
         <span className="prescription__medications-content--date">{moment().format('l')}</span>
         <span className="prescription__medications-content--qsp">
          {med.qntType === 'qsp' ? `QSP: ${med.qnt} Mois` : `${med.qnt} Boite(s)`}
         </span>
        </div>
       </li>
      )
     })}
    </ul>
    <div className="prescription__medications-action">
     <AwesomeButtonIcon icon={faEye} text="Preview Prescription" onClick={togglePreview} disabled={state.medicaments.length === 0} />
     <AwesomeButtonIcon icon={faPlus} text="Add medication" onClick={toggle} />
    </div>
   </div>
   <div className="prescription__actions">
    <AwesomeButtonIcon icon={faCheck} text="Save Prescription" />
   </div>

   <CreatePrescModal modal={open} toggle={toggle} submitHandler={handleAddMed} />
   <PreviewModal modal={preview} toggle={togglePreview} medications={state.medicaments} />
  </div>
 )
}

export default Medications
