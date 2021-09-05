import { faBell, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import InfoDoc from './Info'

const RightContainer: FC = () => {
 const bioText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, odio hac diam dolor, sit. Eu purus hendrerit ultricies at aliquet vitae interdum porta. Mi vulputate malesuada cursus aliquet tincidunt mauris.'

 return (
  <div className="doctor-container-right">
   <div className="doctor-container-right-header">
    <FontAwesomeIcon className="doctor-container-right-header-icon" icon={faCog} />
    <FontAwesomeIcon className="doctor-container-right-header-icon-bell" icon={faBell} />
   </div>
   <div className="doctor-container-right-user">
    <img src="/img/userRect.png" alt="userpic" className="doctor-container-right-user-pic" />
    <p className="doctor-container-right-user-name">Jhon Snow</p>
    <p className="doctor-container-right-user-mail">medzino85@gmail.com</p>
   </div>
   <div className="doctor-container-right-bio">
    <p className="doctor-container-right-bio-title">Biography</p>
    <p className="doctor-container-right-bio-content">{bioText}</p>
   </div>
   <InfoDoc />
   <div className="doctor-container-right-diplome">
    <p>Diplomas & Certificates</p>
    <div className="doctor-container-right-diplome-box">
     <div className="doctor-container-right-diplome-box-1">.</div>
     <div className="doctor-container-right-diplome-box-txt">
      Docteur en medecine
      <p className="doctor-container-right-diplome-box-txt-1">Faculté de medecine - Blida</p>
      <p className="doctor-container-right-diplome-box-txt-1">August 2018 - September 2019</p>
     </div>
    </div>
   </div>
  </div>
 )
}

export default RightContainer
