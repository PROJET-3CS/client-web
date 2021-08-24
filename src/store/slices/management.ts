import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { managementState } from '../../helpers/types'

// eslint-disable-next-line import/prefer-default-export
export const initialState: managementState = {
 loading: false,
 error: '',
 users: [],
}

const ManagementSlice = createSlice({
 name: 'management',
 initialState,
 reducers: {
  fetchUsersSuccess: (state, { payload }: PayloadAction<any>) => {
   state.loading = false
   state.error = ''
   state.users = payload
  },
  fetchUsers: (state) => {
   state.loading = true
  },
  fetchUsersError: (state) => {
   state.loading = false
   state.error = ''
   state.users = []
  },
  archiveUserSuccess: (state, { payload }: PayloadAction<any>) => {
   state.loading = false
   state.error = ''
   state.users = payload
  },
  archiveUser: (state, { payload }: PayloadAction<any>) => {
   state.loading = true
  },
  archiveUserError: (state) => {
   state.loading = false
   state.error = ''
   state.users = []
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
} = ManagementSlice.actions

export default ManagementSlice.reducer
