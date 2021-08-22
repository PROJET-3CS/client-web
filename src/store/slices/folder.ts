import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FolderState, FolderPayload } from '../../helpers/types'

export const initialState: FolderState = {
 loading: true,
 error: false,
 folder: {},
 patient: {},
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
 },
})

export const { syncFolder, syncFolderSuccess, syncFolderError } = folderSlice.actions

export default folderSlice.reducer
