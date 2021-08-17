import React, { FC } from 'react'

import { Link } from 'react-router-dom'

import Layout from '../layouts/Layout'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PersonalInfo from './PersonalInfo'
import MedicalInfo from './MedicalInfo'
import Antecedent from './Antecedent'
import Examination from './Examination'

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
     <Link to="/folder/edit">
      <AwesomeButton className="folder__item-btn">Update profile</AwesomeButton>
     </Link>
    </div>

    <PersonalInfo />

    <MedicalInfo />

    <Antecedent />

    <Examination />
   </div>
  </Layout>
 )
}

export default medicalFolder
