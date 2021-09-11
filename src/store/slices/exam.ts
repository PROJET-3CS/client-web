import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ExamState, ExamPayload, infoInterrogationType } from '../../helpers/types'

export const initialState: ExamState = {
 loading: true,
 error: false,
 msg: '',
 exam: {},
 infoCondition: {},
 infoInterrogation: {
  reason: '',
  startedAt: '',
  where: '',
  intensity: 0,
  note: '',
 },
 //  infoDiagnostic: {},
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
 },
})

export const { syncExam, syncExamSuccess, syncExamError, updateInfoInterrogation } = examSlice.actions

export default examSlice.reducer
