import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
 ExamState,
 ExamPayload,
 infoInterrogationType,
 infoConditionType,
 infoDiagnosticType,
 infoConclusionType,
 PrescriptionType,
} from '../../helpers/types'

export const initialState: ExamState = {
 loading: true,
 error: false,
 msg: '',
 exam: {},
 infoCondition: { fever: 0, pulsation: 0, pressure: 0, weight: 0, state: '' },
 infoInterrogation: {
  reason: '',
  startedAt: '',
  painPlace: '',
  intensity: 0,
  interrogationNote: '',
 },
 infoDiagnostic: {
  inspection: '',
  auscultation: '',
  percussion: '',
  palpation: '',
  diagnosticNote: '',
 },
 infoConclusion: {
  conclusion: '',
  file: undefined,
 },
 prescription: [],
}

const examSlice = createSlice({
 name: 'folder',
 initialState,
 reducers: {
  syncExam: (state) => {
   state.loading = true
  },

  syncExamSuccess: (state, { payload }: PayloadAction<ExamPayload>) => {
   state.loading = false
   state.error = false
   state.exam = payload.exam
  },

  syncExamError: (state) => {
   state.loading = false
   state.error = true
   state.exam = {}
  },

  updateInfoInterrogation: (state, { payload }: PayloadAction<infoInterrogationType>) => {
   state.infoInterrogation = payload
  },

  updateInfoCondition: (state, { payload }: PayloadAction<infoConditionType>) => {
   state.infoCondition = payload
  },

  updateInfoDiagnostic: (state, { payload }: PayloadAction<infoDiagnosticType>) => {
   state.infoDiagnostic = payload
  },

  updateInfoConclusion: (state, { payload }: PayloadAction<infoConclusionType>) => {
   state.infoConclusion = payload
  },

  addPrescription: (state, { payload }: PayloadAction<PrescriptionType>) => {
   state.prescription = [...state.prescription, payload]
  },

  removePrescription: (state, { payload }: PayloadAction<PrescriptionType>) => {
   state.prescription = state.prescription.splice(state.prescription.indexOf(payload))
  },

  addExam: (state) => {
   state.loading = true
   state.error = false
  },

  addExamError: (state, { payload }: PayloadAction<string>) => {
   state.loading = false
   state.error = true
   state.msg = payload
  },

  addExamSuccess: (state) => {
   state.loading = false
   state.exam = {}
   state.infoCondition = { fever: 0, pulsation: 0, pressure: 0, weight: 0, state: '' }
   state.infoInterrogation = {
    reason: '',
    startedAt: '',
    painPlace: '',
    intensity: 0,
    interrogationNote: '',
   }
   state.infoDiagnostic = {
    inspection: '',
    auscultation: '',
    percussion: '',
    palpation: '',
    diagnosticNote: '',
   }
   state.infoConclusion = {
    conclusion: '',
    file: undefined,
   }
   state.prescription = []
   state.error = false
   state.msg = 'Your appointment has been successfuly added '
  },
 },
})

export const {
 syncExam,
 syncExamSuccess,
 syncExamError,
 updateInfoInterrogation,
 updateInfoCondition,
 updateInfoDiagnostic,
 updateInfoConclusion,
 addPrescription,
 removePrescription,
 addExam,
 addExamError,
 addExamSuccess
} = examSlice.actions

export default examSlice.reducer
