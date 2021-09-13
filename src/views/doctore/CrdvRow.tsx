import { faChevronRight, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import Switch from 'react-switch'

const CrdvRow: FC = () => {
 const [cheked, setCheked] = useState(false)
 const handelchange = () => {
  setCheked(!cheked)
 }

 return (
  <div className="doctor-container-left-secondrow-CRDV">
   <div className="doctor-container-left-secondrow-CRDV-left">
    <div className="doctor-container-left-secondrow-CRDV-title">Collectif Examination</div>
    <div className="doctor-container-left-secondrow-CRDV-time">13:00 - 14:00</div>
    <div className="doctor-container-left-secondrow-CRDV-pics">
     <div className="doctor-container-left-secondrow-CRDV-pic">
      <img
       alt="user pic"
       className="doctor-container-left-secondrow-CRDV-img"
       src="/img/userRect.png"
      />
     </div>
     <div className="doctor-container-left-secondrow-CRDV-pic">
      <img
       alt="user pic"
       className="doctor-container-left-secondrow-CRDV-img"
       src="/img/userRect.png"
      />
     </div>
     <div className="doctor-container-left-secondrow-CRDV-pic">
      <img
       alt="user pic"
       className="doctor-container-left-secondrow-CRDV-img"
       src="/img/userRect.png"
      />
     </div>
     <div className="doctor-container-left-secondrow-CRDV-pic">+3</div>
    </div>
   </div>
   <div className="doctor-container-left-secondrow-CRDV-right">
    <Switch
     onChange={handelchange}
     checked={cheked}
     uncheckedIcon={false}
     checkedIcon={false}
     onColor="#cbc2ff"
     onHandleColor="#5B63F6"
     height={20}
     width={48}
    />
    <div className="doctor-container-left-secondrow-CRDV-btns">
     <button type="button" className="doctor-container-left-secondrow-CRDV-btns-1">
      <FontAwesomeIcon icon={faPen} />
     </button>
     <button type="button" className="doctor-container-left-secondrow-CRDV-btns-2">
      <FontAwesomeIcon icon={faChevronRight} />
     </button>
    </div>
   </div>
  </div>
 )
}

export default CrdvRow
