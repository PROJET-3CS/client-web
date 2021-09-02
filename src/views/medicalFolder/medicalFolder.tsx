import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import Layout from '../layouts/Layout'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PersonalInfo from './PersonalInfo'
import MedicalInfo from './MedicalInfo'
import Antecedent from './Antecedent'
import Examination from './Examination'

import { getFolder } from '../../store/selectors'
import { syncFolder } from '../../store/slices/folder'

const medicalFolder: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { folder, patient, error } = useSelector(getFolder)

 const { id } = useParams<{ id: string }>()

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _syncFolder = () => {
  dispatch(syncFolder(id))
 }

 // ===========================================================================
 // State
 // ===========================================================================

 // ===========================================================================
 // Handlers
 // ===========================================================================

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _syncFolder()
 }, [])

 console.log(useSelector(getFolder))

 if (error || !folder) {
  return <Layout>Sorry Something went wrong</Layout>
 }

 return (
  <Layout>
   <Header />
   <h2 className="main-heading">Medical Folder</h2>
   <div className="folder-container">
    <div className="folder__item">
     <img alt="user pic" className="folder__item-img" src="/img/userRect.png" />
     <div className="folder__item-profile">
      <span className="folder__item-profile--name">{`${patient.firstname} ${patient.lastname}`}</span>
      <span className="folder__item-profile--email">{`${patient.email}`}</span>
     </div>
     <Link to={`/folder/${patient.id}/edit`}>
      <AwesomeButton className="folder__item-btn">Update profile</AwesomeButton>
     </Link>
    </div>

    <PersonalInfo patient={patient} />

    <MedicalInfo folder={folder} patient={patient} />

    <Antecedent />

    <Examination />
   </div>
  </Layout>
 )
}

export default medicalFolder
