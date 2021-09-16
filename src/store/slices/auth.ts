import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthState, updatePasswordPayload, User } from '../../helpers/types'

export const initialState: AuthState = {
 currentUser: {},
 user: {},
 isAuthenticated: undefined,
 error: false,
 msg: '',
 loading: true,
 token: '',
 newPassword: '',
 confirmNewPassword: '',
 redirect: false,
 activated: false,
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  verify: (state) => {
   state.loading = false
  },
  // eslint-disable-next-line
  verifySuccess: (state, { payload }: PayloadAction<any>) => {
   state.isAuthenticated = payload.isValid
   state.user = payload.user
  },
  // eslint-disable-next-line
  login: (state, { payload }: PayloadAction<any>) => {
   state.loading = true
   state.currentUser = payload
  },

  // eslint-disable-next-line
  loginSuccess: (state, { payload }: PayloadAction<any>) => {
   state.user = payload
   state.currentUser = {}
   state.isAuthenticated = true
   state.loading = false
   state.error = false
  },

  loginError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
   state.isAuthenticated = false
   state.loading = false
  },

  logout: (state) => {
   state.loading = true
  },

  logoutSuccess: (state) => {
   state.isAuthenticated = false
   state.currentUser = {}
   state.error = false
   state.msg = ''
   state.loading = false
  },

  activate: (state, { payload }: PayloadAction<string>) => {
   state.loading = true
   state.activated = true
   state.token = payload
  },

  activateSuccess: (state, { payload }: PayloadAction<User>) => {
   state.loading = false
   state.activated = true
   state.user = payload
   state.error = false
  },

  activateError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.user = {}
   state.activated = false
   state.error = true
   state.loading = false
  },

  updatePassword: (state, { payload }: PayloadAction<updatePasswordPayload>) => {
   state.loading = true
   state.isAuthenticated = false
   state.newPassword = payload.password
   state.confirmNewPassword = payload.confirmPassword
  },

  updatePasswordSuccess: (state) => {
   state.loading = false
   state.user = {}
   state.token = ''
   state.newPassword = ''
   state.confirmNewPassword = ''
   state.error = false
   state.redirect = true
  },

  updatePasswordError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.newPassword = ''
   state.confirmNewPassword = ''
   state.error = true
   state.loading = false
   state.redirect = false
  },

  register: (state, { payload }: PayloadAction<User>) => {
   state.loading = true
   state.redirect = false
   state.currentUser = payload
  },

  registerSuccess: (state) => {
   state.loading = false
   state.currentUser = {}
   state.redirect = true
   state.error = false
  },

  registerError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.currentUser = {}
   state.error = true
   state.redirect = false
   state.loading = false
  },

  updateProfile: (state) => {
   state.loading = true
  },

  updateProfileSuccess: (state, { payload }: PayloadAction<User>) => {
   state.loading = false
   state.user = payload
   state.error = false
  },

  updateProfileError: (state, { payload }: PayloadAction<string>) => {
   state.msg = payload
   state.error = true
   state.loading = false
  },
 },
})

export const {
 verify,
 verifySuccess,
 login,
 loginSuccess,
 loginError,
 logout,
 logoutSuccess,
 activate,
 activateError,
 activateSuccess,
 updatePassword,
 updatePasswordSuccess,
 updatePasswordError,
 register,
 registerSuccess,
 registerError,
 updateProfile,
 updateProfileSuccess,
 updateProfileError
} = authSlice.actions

export default authSlice.reducer
