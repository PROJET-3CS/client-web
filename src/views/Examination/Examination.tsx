import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch, useParams } from 'react-router'
import { syncFolder } from '../../store/slices/folder'
import ExamLayout from '../layouts/ExamLayout'
import ExaminationConclusion from './CreateExamination/ExaminationConclusion'
import IllnessDiagnostic from './CreateExamination/IllnessDiagnostic'
import PatientCondition from './CreateExamination/PatientCondition'
import PatientInterro from './CreateExamination/PatientInterro'

const Examination: FC = () => {
 // ===========================================================================
 // Selectors
 // ==========================================================================

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
  <ExamLayout>
   <Switch>
    <Route path="/examination/:id/condition" component={PatientCondition} exact />
    <Route path="/examination/:id/interrogation" component={PatientInterro} exact />
    <Route path="/examination/:id/diagnostic" component={IllnessDiagnostic} exact />
    <Route path="/examination/:id/conclusion" component={ExaminationConclusion} exact />
    <Redirect to="/404" />
   </Switch>
  </ExamLayout>
 )
}

export default Examination
