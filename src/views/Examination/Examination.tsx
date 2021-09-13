import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import ExamLayout from '../layouts/ExamLayout'
import ExaminationConclusion from './CreateExamination/ExaminationConclusion'
import IllnessDiagnostic from './CreateExamination/IllnessDiagnostic'
import PatientCondition from './CreateExamination/PatientCondition'
import PatientInterro from './CreateExamination/PatientInterro'

const Examination: FC = () => {
 return (
  <ExamLayout>
   <Switch>
    <Route path="/examination/condition" component={PatientCondition} exact />
    <Route path="/examination/interrogation" component={PatientInterro} exact />
    <Route path="/examination/diagnostic" component={IllnessDiagnostic} exact />
    <Route path="/examination/conclusion" component={ExaminationConclusion} exact />
    <Route path="/examination" component={PatientInterro} exact />
   </Switch>
  </ExamLayout>
 )
}

export default Examination
