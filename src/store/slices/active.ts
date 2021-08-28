import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
 error : false,
 id: '',
 msg : '',
}

const activeSlice = createSlice({
 name: 'activePass',
 initialState,
 reducers: {
 
  activeError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
  },
  activeSuccess: (state, { payload }: PayloadAction<string>) => {
   state.id = payload
   state.error = false
  },
  active: (state, { payload }: PayloadAction<string>) => {
   state.error = false
   state.id = payload
  },
 
 }
})


export const { activeError , active , activeSuccess } =
 activeSlice.actions

export default activeSlice.reducer
