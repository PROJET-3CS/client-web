import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
 FolderState,
 FolderPayload,
 InfoGeneralType,
 User,
 InfoMedicalType,
 Folder,
 AntecedentType,
} from '../../helpers/types'

export const initialState: FolderState = {
 loading: true,
 error: false,
 folder: {},
 patient: {},
 infoGeneral: {},
 infoMedical: {},
 antecedent: {},
}

const folderSlice = createSlice({
 name: 'folder',
 initialState,
 reducers: {
  // eslint-disable-next-line
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
   state.infoGeneral = payload
  },

  updatePatientSuccess: (state, { payload }: PayloadAction<User>) => {
   state.loading = false
   state.error = false
   state.patient = payload
   state.infoGeneral = {}
  },

  updatePatientError: (state) => {
   state.loading = false
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
} = folderSlice.actions

export default folderSlice.reducer
