import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FolderState, FolderPayload } from '../../helpers/types'

export const initialState: FolderState = {
 loading: true,
 error: false,
 folder: {},
}

const folderSlice = createSlice({
 name: 'folder',
 initialState,
 reducers: {
  // eslint-disable-next-line
  getFolder: (state) => {
   state.loading = true
  },

  getFolderSuccess: (state, { payload }: PayloadAction<FolderPayload>) => {
   state.loading = false
   state.error = false
   state.folder = payload
  },

  getFolderError: (state) => {
   state.loading = false
   state.error = true
   state.folder = {}
  },
 },
})

export const { getFolder, getFolderSuccess, getFolderError } = folderSlice.actions

export default folderSlice.reducer
