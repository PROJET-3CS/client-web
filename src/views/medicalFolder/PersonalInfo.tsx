import React, { FC } from 'react'
import moment from 'moment'

import { User } from '../../helpers/types'

interface Props {
 patient: User | undefined
}

const PersonalInfo: FC<Props> = ({ patient }) => {
 return (
  <div className="folder__item">
   <div className="folder__item-content">
    <span className="folder__item-content--title">Etablissement</span>
    <span className="folder__item-content--value">ESI SBA</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Nom</span>
    <span className="folder__item-content--value">{patient?.lastname}</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Prénom</span>
    <span className="folder__item-content--value">{patient?.firstname}</span>
   </div>

   <div className="folder__item-content">
    <span className="folder__item-content--title">Address</span>
    <span className="folder__item-content--value">{patient?.adress}</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Né le</span>
    <span className="folder__item-content--value">
     {patient?.birthDay ? moment(patient.birthDay).format('l') : ''}
    </span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">à</span>
    <span className="folder__item-content--value">{patient?.birthPlace}</span>
   </div>

   <div className="folder__item-content">
    <span className="folder__item-content--title">Situation Familiale</span>
    <span className="folder__item-content--value">Célibataire</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Admis à</span>
    <span className="folder__item-content--value">ESI-SBA</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Filliére</span>
    <span className="folder__item-content--value">Cycle Supérieur</span>
   </div>
  </div>
 )
}

export default PersonalInfo
