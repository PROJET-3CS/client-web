import React, { FC } from 'react'

const PersonalInfo: FC = () => {
 return (
  <div className="folder__item">
   <div className="folder__item-content">
    <span className="folder__item-content--title">Etablissement</span>
    <span className="folder__item-content--value">ESI SBA</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Nom</span>
    <span className="folder__item-content--value">Mahdaoui</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Prénom</span>
    <span className="folder__item-content--value">Abdelouadoud</span>
   </div>

   <div className="folder__item-content">
    <span className="folder__item-content--title">Address</span>
    <span className="folder__item-content--value">Cité 70 log, Bt 05, N12</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">Né le</span>
    <span className="folder__item-content--value">08/02/2001</span>
   </div>
   <div className="folder__item-content">
    <span className="folder__item-content--title">à</span>
    <span className="folder__item-content--value">Blida</span>
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
