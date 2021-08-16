import React, { FC } from 'react'

import Layout from '../layouts/Layout'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'

const medicalFolder: FC = () => {
 return (
  <Layout>
   <Header />
   <h2 className="main-heading">Medical Folder</h2>
   <div className="folder-container">
    <div className="folder__item">
     <img alt="user pic" className="folder__item-img" src="/img/userRect.png" />
     <div className="folder__item-profile">
      <span className="folder__item-profile--name">Mahdaoui Abdelouadoud</span>
      <span className="folder__item-profile--email">a.mahdaoui@esi-sba.dz</span>
     </div>
     <AwesomeButton className="folder__item-btn">Update profile</AwesomeButton>
    </div>
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
    <div className="folder__item">hello</div>
    <div className="folder__item">hello</div>
    <div className="folder__item">hello</div>
   </div>
  </Layout>
 )
}

export default medicalFolder
