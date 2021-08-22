// This file for all async call funct in store
import { all, put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
 login,
 loginSuccess,
 loginError,
 logout,
 logoutSuccess,
 verifySuccess,
 verify,
} from '../slices/auth'
import { syncFolder, syncFolderSuccess, syncFolderError } from '../slices/folder'
import { getAuth, getFolder } from '../selectors'
import { getToken, removeToken, setToken } from '../../helpers/api'

// Hit the Express endpoint to get the current user from the cookie

function* verifyUser() {
 try {
  const token = getToken()
  const { data } = yield axios.post('/auth/verify_token', {
   token,
  })
  yield put(verifySuccess(data))
 } catch (Err) {
  yield put(verifySuccess({ user: {}, isValid: false }))
 }
}

function* loginUser() {
 try {
  const { currentUser } = yield select(getAuth)
  const { data } = yield axios.post('/auth/login', {
   email: currentUser.email,
   password: currentUser.password,
  })
  if (data.status === 'success') {
   setToken(data.body.token)
   yield put(loginSuccess(data.body.user))
  } else {
   yield put(loginError('Something went wrong !'))
  }
 } catch (error) {
  yield put(loginError('Something went wrong !'))
 }
}

// Remove the access token cookie from Express
function* logoutUser() {
 try {
  // PS: to fix later
  // yield axios('/api/auth/logout')
  yield removeToken()

  yield put(logoutSuccess())
 } catch (error) {
  yield put(logoutSuccess())
 }
}

function* loadFolder() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { patient } = yield select(getFolder)
  const { data } = yield axios.get(`/users/${patient.id}`, {
   headers: { Authorization: authToken },
  })
  if (data.status === 'success') {
   yield put(syncFolderSuccess(data.body))
  } else {
   yield put(syncFolderError())
  }
 } catch (Err) {
  yield put(syncFolderError())
 }
}

// If any of these functions are dispatched, invoke the appropriate saga
// eslint-disable-next-line
function* rootSaga() {
 yield all([
  takeLatest(login.type, loginUser),
  takeLatest(logout.type, logoutUser),
  takeLatest(verify.type, verifyUser),
  takeLatest(syncFolder.type, loadFolder),
 ])
}

export default rootSaga
