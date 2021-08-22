import { FC, useEffect } from 'react'
import { FormGroup } from 'reactstrap'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Layout from './layouts/Layout'
import Header from '../components/Header'
import { getFolder } from '../store/selectors'
import { syncFolder } from '../store/slices/folder'
import InfoGeneral from './editMedicalFolder/InfoGeneral'
import InfoMedical from './editMedicalFolder/InfoMedical'
import Antecedent from './editMedicalFolder/Antecedent'

const EditMedicalFolder: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { patient } = useSelector(getFolder)
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

 return (
  <Layout>
   <Header />
   <FormGroup className="editfolder-form">
    <div>
     <p className="editfolder-heading--title">Edit Medical Folder</p>
    </div>

    <InfoGeneral patient={patient} />

    <InfoMedical />
    
    <Antecedent />

   </FormGroup>
  </Layout>
 )
}

export default EditMedicalFolder
