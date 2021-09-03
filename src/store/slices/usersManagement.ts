import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { managmentState, User } from '../../helpers/types'

// eslint-disable-next-line import/prefer-default-export
export const initialState: managmentState = {
 routeQueries: {},
 loading: false,
 error: false,
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
} = ManagementSlice.actions

export default ManagementSlice.reducer
