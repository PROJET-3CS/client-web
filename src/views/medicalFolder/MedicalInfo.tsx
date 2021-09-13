import React, { FC } from 'react'
import { Folder, User } from '../../helpers/types'

interface Props {
 folder: Folder | undefined
 patient: User | undefined
}

const MedicalInfo: FC<Props> = ({ folder, patient }) => {
 const renderTxt = (array: Array<{name: string}>) => {
  if (array && array.length > 0) {
   return array.map(item => {return item.name}).join(', ')
  }

  return ''
 }

 return (
  <div className="folder__item">
   <h3 className="folder__item-title">Informations:</h3>
   <div className="folder__item-info">
    <span className="folder__item-info--title">N° Folder:</span>
    <span className="folder__item-info--value">{folder?.id}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Soc Security:</span>
    <span className="folder__item-info--value">03495 349394</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Gender:</span>
    <span className="folder__item-info--value">{patient?.gender}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Blood Type:</span>
    <span className="folder__item-info--value">{folder?.blood}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Allergies:</span>
    <span className="folder__item-info--value">{renderTxt(folder?.allergicReactions)}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Diseases:</span>
    <span className="folder__item-info--value">{renderTxt(folder?.generalIllnesses)}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Medication:</span>
    <span className="folder__item-info--value">{renderTxt(folder?.medicaments)}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Height:</span>
    <span className="folder__item-info--value">{folder?.tall}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Weight:</span>
    <span className="folder__item-info--value">{folder?.weight ? `${folder.weight} kg` : ''}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Fumeur:</span>
    <span className="folder__item-info--value">{folder?.smoker ? 'Yes' : 'No'}</span>
   </div>
   <div className="folder__item-info">
    <span className="folder__item-info--title">Anc Fumeur:</span>
    <span className="folder__item-info--value">{folder?.exSmoker ? 'Yes' : 'No'}</span>
   </div>
  </div>
 )
}

export default MedicalInfo
