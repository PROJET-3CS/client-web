import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppointmentState, AppointmentPayload, AppointmentType, User } from '../../helpers/types'

export const initialState: AppointmentState = {
 loading: true,
 appointments: [],
 appointment: {},
 users: [],
 error: false,
 msg: '',
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
   state.appointments = payload.appointments
   state.error = false
  },

  addAppointment: (state, { payload }: PayloadAction<AppointmentType>) => {
   state.loading = true
   state.error = false
   state.msg = ''
   state.appointment = payload
  },

  addAppointmentError: (state, { payload }: PayloadAction<string>) => {
   state.loading = false
   state.appointment = {}
   state.error = true
   state.msg = payload
  },

  addAppointmentSuccess: (state, { payload }: PayloadAction<AppointmentPayload>) => {
   state.loading = false
   state.appointments = payload
   state.appointment = {}
   state.error = false
   state.msg = 'Your appointment has been successfuly added '
  },

  fetchAllUsers: (state) => {
   state.loading = true
   state.users = []
  },

  fetchAllUsersSuccess: (
   state,
   { payload }: PayloadAction<User[]>
  ) => {
   state.loading = false
   state.error = false
   state.users = payload
  },
  fetchAllUsersError: (state) => {
   state.loading = false
   state.error = false
   state.users = []
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
 fetchAllUsers,
 fetchAllUsersSuccess,
 fetchAllUsersError
} = appointmentSlice.actions

export default appointmentSlice.reducer
