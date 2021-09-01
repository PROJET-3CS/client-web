import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
 email: '',
 error: false,
 msg: '',
 password: '',
}

const resetSlice = createSlice({
 name: 'resetPass',
 initialState,
 reducers: {
  resetError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
  },
  resetSuccess: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = false
   state.email = ''
  },
  reset: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = false
   state.email = ''
  },
  changeError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
  },
  changeSuccess: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = false
   state.password = ''
  },
  change: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = false
   state.password = ''
  },
 },
})

export const { resetError, reset, resetSuccess, change, changeError, changeSuccess } =
 resetSlice.actions

export default resetSlice.reducer
