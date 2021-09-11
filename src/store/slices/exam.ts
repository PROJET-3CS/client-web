import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
 ExamState,
 ExamPayload,
 infoInterrogationType,
 infoConditionType,
 infoDiagnosticType,
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
  where: '',
  intensity: 0,
  note: '',
 },
 infoDiagnostic: {
  inspection: '',
  auscultation: '',
  percussion: '',
  palpation: '',
  note: '',
 },
 //  infoConclusion: {},
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
   state.loading = true
   state.infoInterrogation = payload
  },

  updateInfoCondition: (state, { payload }: PayloadAction<infoConditionType>) => {
   state.loading = true
   state.infoCondition = payload
  },

  updateInfoDiagnostic: (state, { payload }: PayloadAction<infoDiagnosticType>) => {
   state.loading = true
   state.infoDiagnostic = payload
  },
 },
})

export const {
 syncExam,
 syncExamSuccess,
 syncExamError,
 updateInfoInterrogation,
 updateInfoCondition,
 updateInfoDiagnostic
} = examSlice.actions

export default examSlice.reducer
