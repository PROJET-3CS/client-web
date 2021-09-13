import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../../components/Header'
import { getFolder } from '../../../store/selectors'
import { syncFolder } from '../../../store/slices/folder'
import Layout from '../../layouts/Layout'
import Medications from './Medications'
import PatientInfo from './PatientInfo'

const Prescription: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { folder, patient } = useSelector(getFolder)

 //  const { id } = useParams<{ id: string }>()

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _syncFolder = () => {
  dispatch(syncFolder('1'))
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

 return (
  <>
   <Layout>
    <Header />
    <h2 className="main-heading">Medical Examinations</h2>
    <div className="prescription__container">
     <Medications />
     <PatientInfo patient={patient} folder={folder} />
    </div>
   </Layout>
  </>
 )
}

export default Prescription
