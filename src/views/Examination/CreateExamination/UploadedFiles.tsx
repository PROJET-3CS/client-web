import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/fr'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getExam, getFolder } from '../../../store/selectors'
import { PrescriptionType } from '../../../helpers/types'
import { removePrescription } from '../../../store/slices/exam'

moment.locale('fr')

const UploadedFiles: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { patient } = useSelector(getFolder)
 const { prescription } = useSelector(getExam)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _removePrescription = (payload: PrescriptionType) => {
  dispatch(removePrescription(payload))
 }

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleDelete = (payload: PrescriptionType) => {
  _removePrescription(payload)
 }

 return (
  <div className="createExamination__conclusion-uploaded">
   <h1>Uploaded Files</h1>
   {prescription.map((pres, idx) => {
    return (
     <div key={`presc-${idx + 1}`} className="createExamination__conclusion-uploaded--item">
      <div className="createExamination__conclusion-uploaded--body">
       <img
        className="createExamination__conclusion-uploaded--img"
        src="/img/notebook.svg"
        alt="notebook"
       />
       <div className="createExamination__conclusion-uploaded--content">
        <span className="createExamination__conclusion-uploaded--title">
         {`Presc_${patient.lastname}_${String(idx + 1).padStart(2, '0')}.pdf`}
        </span>
        <span className="createExamination__conclusion-uploaded--date">
         FILE UPLOADED:{' '}
         <span className="createExamination__conclusion-uploaded--date-main">
          {moment(pres.date).fromNow()}
         </span>
        </span>
        <span className="createExamination__conclusion-uploaded--modify">Modify</span>
       </div>
      </div>
      <FontAwesomeIcon onClick={() => {return handleDelete(pres)}} className="createExamination__conclusion-uploaded--delete" icon={faTrash} />
     </div>
    )
   })}
  </div>
 )
}

export default UploadedFiles
