import React, { FC } from 'react'

const MedicalInfo: FC = () => {
 return (
  <div className="prescription__folder__item ">
   <div className="folder__item-info">
    <span className="folder__item-info--title">Soc Security:</span>
    <span className="folder__item-info--value">03495 349394</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Gender:</span>
    <span className="folder__item-info--value">male</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Blood Type:</span>
    <span className="folder__item-info--value">O-</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Allergies:</span>
    <span className="folder__item-info--value">no</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Diseases:</span>
    <span className="folder__item-info--value">text</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Medication:</span>
    <span className="folder__item-info--value">klk</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Height:</span>
    <span className="folder__item-info--value">0.11</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Weight:</span>
    <span className="folder__item-info--value">39kg</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Fumeur:</span>
    <span className="folder__item-info--value">Yes</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Anc Fumeur:</span>
    <span className="folder__item-info--value"> Yes</span>
   </div>
  </div>
 )
}

export default MedicalInfo
