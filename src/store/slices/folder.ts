import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
 FolderState,
 FolderPayload,
 InfoGeneralType,
 User,
 InfoMedicalType,
 Folder,
 AntecedentType,
 AntecedentItem,
} from '../../helpers/types'

export const initialState: FolderState = {
 loading: true,
 error: false,
 added: false,
 updated: false,
 msg: '',
 folder: {},
 patient: {},
 infoGeneral: {},
 infoMedical: {},
 antecedent: {},
 antecedentItem: {
  title: '',
  date: '',
  details: '',
 },
}

const folderSlice = createSlice({
 name: 'folder',
 initialState,
 reducers: {
  syncFolder: (state, { payload }: PayloadAction<string>) => {
   state.loading = true
   state.patient = { id: payload }
  },

  syncFolderSuccess: (state, { payload }: PayloadAction<FolderPayload>) => {
   state.loading = false
   state.error = false
   state.folder = payload.medicalFolder
   state.patient = payload.user
  },

  syncFolderError: (state) => {
   state.loading = false
   state.error = true
   state.folder = {}
   state.patient = {}
  },

  updatePatient: (state, { payload }: PayloadAction<InfoGeneralType>) => {
   state.loading = true
   state.updated = false
   state.infoGeneral = payload
  },

  updatePatientSuccess: (state, { payload }: PayloadAction<User>) => {
   state.loading = false
   state.error = false
   state.updated = true
   state.patient = payload
   state.infoGeneral = {}
  },

  updatePatientError: (state) => {
   state.loading = false
   state.updated = true
   state.error = true
   state.infoGeneral = {}
  },

  updateInfoMedical: (state, { payload }: PayloadAction<InfoMedicalType>) => {
   state.loading = true
   state.infoMedical = payload
  },

  updateInfoAntecedent: (state, { payload }: PayloadAction<AntecedentType>) => {
   state.loading = true
   state.antecedent = payload
  },

  updateFolderSuccess: (state, { payload }: PayloadAction<Folder>) => {
   state.loading = false
   state.error = false
   state.folder = payload
   state.infoMedical = {}
   state.antecedent = {}
  },

  updateFolderError: (state) => {
   state.loading = false
   state.error = true
   state.infoMedical = {}
   state.antecedent = {}
  },

  addAntecedent: (state, { payload }: PayloadAction<AntecedentItem>) => {
   state.loading = true
   state.added = false
   state.antecedentItem = payload
  },

  addAntecedentSuccess: (state) => {
   state.loading = false
   state.error = false
   state.msg = ''
   state.added = true
   state.antecedentItem = {
    title: '',
    date: '',
    details: '',
   }
  },

  addAntecedentError: (state, { payload }: PayloadAction<string>) => {
   state.loading = false
   state.error = true
   state.added = false
   state.msg = payload
  },
 },
})

export const {
 syncFolder,
 syncFolderSuccess,
 syncFolderError,
 updatePatient,
 updatePatientSuccess,
 updatePatientError,
 updateInfoAntecedent,
 updateInfoMedical,
 updateFolderError,
 updateFolderSuccess,
 addAntecedent,
 addAntecedentSuccess,
 addAntecedentError,
} = folderSlice.actions

export default folderSlice.reducer
