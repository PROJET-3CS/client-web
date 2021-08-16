import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'
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
    <div className="folder__item">
     <h3 className="folder__item-title">Les Antécedents:</h3>

     <div className="folder__item-anteced--container">
      <div className="folder__item-anteced">
       <div className="folder__item-anteced--icon">
        <FontAwesomeIcon icon={faFileAlt} />
       </div>
       <div className="folder__item-anteced--content">
        <span className="folder__item-anteced--title">Affections Congénitaire</span>
        <span className="folder__item-anteced--date">12th February 2020</span>
       </div>
      </div>

      <div className="folder__item-anteced">
       <div className="folder__item-anteced--icon">
        <FontAwesomeIcon icon={faFileAlt} />
       </div>
       <div className="folder__item-anteced--content">
        <span className="folder__item-anteced--title">Maladies Générales</span>
        <span className="folder__item-anteced--date">12th February 2020</span>
       </div>
      </div>

      <div className="folder__item-anteced">
       <div className="folder__item-anteced--icon">
        <FontAwesomeIcon icon={faFileAlt} />
       </div>
       <div className="folder__item-anteced--content">
        <span className="folder__item-anteced--title">Allergies aux médciament</span>
        <span className="folder__item-anteced--date">12th February 2020</span>
       </div>
      </div>

      <div className="folder__item-anteced">
       <div className="folder__item-anteced--icon">
        <FontAwesomeIcon icon={faFileAlt} />
       </div>
       <div className="folder__item-anteced--content">
        <span className="folder__item-anteced--title">Interventions chirurgicales</span>
        <span className="folder__item-anteced--date">12th February 2020</span>
       </div>
      </div>
     </div>
    </div>

    <div className="folder__item">
     <h3 className="folder__item-title">Examinations Medicales:</h3>
     <button type="button" className="folder__item-exam--btn">
      + New Examination
     </button>
     <div className="folder__item-exam--table">
      <Table borderless>
       <thead>
        <tr>
         <th>Médecin</th>
         <th>Date</th>
         <th>Duration</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>Nassim Amraoui</td>
         <td>25th October 2021</td>
         <td>3 mois</td>
        </tr>
        <tr>
         <td>Nassim Amraoui</td>
         <td>9th August 2019</td>
         <td>2 années</td>
        </tr>
       </tbody>
      </Table>
     </div>
    </div>
   </div>
  </Layout>
 )
}

export default medicalFolder
