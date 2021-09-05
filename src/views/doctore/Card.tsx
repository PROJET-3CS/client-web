import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

const CardStat: FC<{ type: string }> = ({ type }) => {
 return (
  <div>
   {type === 'low' && (
    <div className="doctor-container-left-firstrow-card-low">
     <p>New Requests</p>
     <div className="doctor-container-left-firstrow-card-stats">
      <p className="doctor-container-left-firstrow-card-stats-1">55</p>
      <p className="doctor-container-left-firstrow-card-stats-low">
       <FontAwesomeIcon icon={faSortDown} />
       22
      </p>
     </div>
    </div>
   )}
   {type === 'up' && (
    <div className="doctor-container-left-firstrow-card-up">
     <p>New Requests</p>
     <div className="doctor-container-left-firstrow-card-stats">
      <p className="doctor-container-left-firstrow-card-stats-1">55</p>
      <p className="doctor-container-left-firstrow-card-stats-up">
       <FontAwesomeIcon icon={faSortUp} />
       22
      </p>
     </div>
    </div>
   )}
  </div>
 )
}

export default CardStat
