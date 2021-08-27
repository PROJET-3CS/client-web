import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppointmentState, AppointmentPayload } from '../../helpers/types'

export const initialState: AppointmentState = {
 loading: true,
 appointments: [],
 appointment: {},
 error: false,
}

const appointmentSlice = createSlice({
 name: 'appointment',
 initialState,
 reducers: {
  syncAppointment: (state) => {
   state.loading = true
  },

  syncAppointmentError: (state) => {
   state.loading = false
   state.error = true
  },

  syncAppointmentSuccess: (state, { payload }: PayloadAction<AppointmentPayload>) => {
   state.loading = false
   state.appointments = payload
   state.error = false
  },

  addAppointment: (state) => {
   state.loading = true
  },

  addAppointmentError: (state) => {
   state.loading = false
   state.error = true
  },

  addAppointmentSuccess: (state, { payload }: PayloadAction<AppointmentPayload>) => {
   state.loading = false
   state.appointments = payload
   state.error = false
  },
 },
})

export const {
 syncAppointment,
 syncAppointmentError,
 syncAppointmentSuccess,
 addAppointment,
 addAppointmentError,
 addAppointmentSuccess,
} = appointmentSlice.actions

export default appointmentSlice.reducer
