import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
 error : false,
 id: ''
}

const activeSlice = createSlice({
 name: 'activePass',
 initialState,
 reducers: {
 
  activeError: (state, { payload }: PayloadAction<string>) => {
   
   state.error = true
  },
  activeSuccess: (state, { payload }: PayloadAction<string>) => {
   state.error = false
  },
  active: (state, { payload }: PayloadAction<string>) => {
   state.error = false
  },
 
 }
})


export const { activeError , active , activeSuccess } =
 activeSlice.actions

export default activeSlice.reducer
