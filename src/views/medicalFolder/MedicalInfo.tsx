import React, { FC } from 'react'

const MedicalInfo: FC = () => {
 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Informations:</h3>
   <div className="folder__item-info">
    <span className="folder__item-info--title">N° Folder:</span>
    <span className="folder__item-info--value">03495 349394</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Soc Security:</span>
    <span className="folder__item-info--value">03495 349394</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Gender:</span>
    <span className="folder__item-info--value">Women</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Blood Type:</span>
    <span className="folder__item-info--value">O+ (Positive)</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Allergies:</span>
    <span className="folder__item-info--value">Milk, Penicilin</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Diseases:</span>
    <span className="folder__item-info--value">Diabetes</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Medication:</span>
    <span className="folder__item-info--value">Levoturox 100g, Aspirin, Dafalgan</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Height:</span>
    <span className="folder__item-info--value">1,87m</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Weight:</span>
    <span className="folder__item-info--value">65kg</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Fumeur:</span>
    <span className="folder__item-info--value">Non</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Anc Fumeur:</span>
    <span className="folder__item-info--value">Non</span>
   </div>
  </div>
 )
}

export default MedicalInfo
