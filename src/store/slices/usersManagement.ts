import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { managmentState, User } from '../../helpers/types'

// eslint-disable-next-line import/prefer-default-export
export const initialState: managmentState = {
 routeQueries: {},
 loading: false,
 error: false,
 notify: false,
 usersCount: 0,
 totalPages: 0,
 users: [],
 selectedUser: {},
}

const ManagementSlice = createSlice({
 name: 'management',
 initialState,
 reducers: {
  fetchUsersSuccess: (
   state,
   { payload }: PayloadAction<{ users: User[]; count: number; totalPages: number }>
  ) => {
   state.loading = false
   state.error = false
   state.users = payload.users
   state.usersCount = payload.count
   state.totalPages = payload.totalPages
  },
  fetchUsers: (state, { payload }) => {
   state.routeQueries = payload
   state.loading = true
   state.users = []
  },
  fetchUsersError: (state) => {
   state.loading = false
   state.error = false
   state.users = []
  },

  archiveUser: (state, { payload }: PayloadAction<User>) => {
   state.loading = true
   state.selectedUser = payload
  },
  archiveUserSuccess: (state) => {
   state.loading = false
   state.error = false
  },
  archiveUserError: (state) => {
   state.loading = false
   state.error = true
  },

  createUser: (state, { payload }) => {
   state.loading = true
   state.selectedUser = payload
  },

  createUserSuccess: (state) => {
   state.loading = false
   state.error = false
   state.selectedUser = {}
  },

  createUserError: (state) => {
   state.loading = false
   state.error = true
  },
  fetchRegistrationRequests: (state, { payload }) => {
   state.loading = true
   state.users = []
   state.routeQueries = payload
  },
  fetchRegistrationRequestsSuccess: (state, { payload }) => {
   state.loading = false
   state.users = payload
  },
  fetchRegistrationRequestsError: (state) => {
   state.loading = false
   state.error = true
  },

  acceptUser: (state, { payload }: PayloadAction<User>) => {
   state.loading = true
   state.notify = false
   state.selectedUser = payload
  },

  acceptUserSucces: (state) => {
   state.loading = false
   state.notify = true
   state.selectedUser = {}
   state.error = false
  },

  acceptUserError: (state) => {
   state.loading = false
   state.notify = true
   state.error = true
  },
  rejectUser: (state, { payload }: PayloadAction<User>) => {
   state.loading = true
   state.notify = false
   state.selectedUser = payload
  },

  rejectUserSucces: (state) => {
   state.loading = false
   state.selectedUser = {}
   state.error = false
   state.notify = true
  },

  rejectUserError: (state) => {
   state.loading = false
   state.error = true
   state.notify = false
  },
 },
})

export const {
 fetchUsersSuccess,
 fetchUsers,
 fetchUsersError,
 archiveUser,
 archiveUserError,
 archiveUserSuccess,
 createUser,
 createUserSuccess,
 createUserError,
 fetchRegistrationRequests,
 fetchRegistrationRequestsError,
 fetchRegistrationRequestsSuccess,
 acceptUser,
 acceptUserSucces,
 acceptUserError,
 rejectUser,
 rejectUserSucces,
 rejectUserError,
} = ManagementSlice.actions

export default ManagementSlice.reducer
