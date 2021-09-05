import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {FC} from 'react'








const InfoDoc: FC = () => {


 return (
  <div className="doctor-container-right-info">
   <div className="doctor-container-right-info-row">
    <div className="doctor-container-right-info-row-icon">
               .
    </div>
    <p className='doctor-container-right-info-row-title'>User name</p>
    <p className='doctor-container-right-info-row-data'>Sarah Montenon</p>
    <FontAwesomeIcon className='doctor-container-right-info-row-icon2' icon={faChevronRight} />
   </div>
   <div className="doctor-container-right-info-row">
    <div className="doctor-container-right-info-row-icon">
               .
    </div>
    <p className='doctor-container-right-info-row-title'>Birthday</p>
    <p className='doctor-container-right-info-row-data'>July 22, 2000</p>
    <FontAwesomeIcon className='doctor-container-right-info-row-icon2' icon={faChevronRight} />
   </div>
   <div className="doctor-container-right-info-row">
    <div className="doctor-container-right-info-row-icon">
               .
    </div>
    <p className='doctor-container-right-info-row-title'>E-mail</p>
    <p className='doctor-container-right-info-row-data'>m.sarah@gmail.com</p>
    <FontAwesomeIcon className='doctor-container-right-info-row-icon2' icon={faChevronRight} />
   </div>
   <div className="doctor-container-right-info-row">
    <div className="doctor-container-right-info-row-icon">
               .
    </div>
    <p className='doctor-container-right-info-row-title'>Numero Tel</p>
    <p className='doctor-container-right-info-row-data'>+213 546705960</p>
    <FontAwesomeIcon className='doctor-container-right-info-row-icon2' icon={faChevronRight} />
   </div>
   <div className="doctor-container-right-info-row">
    <div className="doctor-container-right-info-row-icon">
               .
    </div>
    <p className='doctor-container-right-info-row-title'>Address</p>
    <p className='doctor-container-right-info-row-data'>4140 Parker Rd. Allentown...</p>
    <FontAwesomeIcon className='doctor-container-right-info-row-icon2' icon={faChevronRight} />
   </div>
  </div>
 )
}

export default InfoDoc
