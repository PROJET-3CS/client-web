import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import '../../styles/main.scss'

const IdrvRow: FC = () => {
 return (
  <div className="doctor-container-left-secondrow-IRDV-row">
   <p className="doctor-container-left-secondrow-IRDV-row-txt">10:00 AM</p>
   <div className="doctor-container-left-secondrow-IRDV-row-rdv">
    <img
     src="/img/userRect.png"
     alt="userpic"
     className="doctor-container-left-secondrow-IRDV-pic"
    />
    <div className="doctor-container-left-secondrow-IRDV-details">
     <p className="doctor-container-left-secondrow-IRDV-details-name">jhon snow</p>
     <p className="doctor-container-left-secondrow-IRDV-details-role">jhon snow</p>
    </div>
    <FontAwesomeIcon icon={faEllipsisV} className="doctor-container-left-secondrow-IRDV-icon" />
   </div>
  </div>
 )
}

export default IdrvRow
