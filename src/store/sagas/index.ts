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
import { getAuth } from '../selectors'
import { getToken, removeToken, setToken } from '../../helpers/api'
import { fetchUsers, fetchUsersSuccess, fetchUsersError , archiveUser , archiveUserError , archiveUserSuccess } from '../slices/management'

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
    setToken(data.token)
    yield put(loginSuccess(data))
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

//


function* getUsers() {
  try {
    const {data} = yield axios.get( '/users/get_users/0')
    if (data.status === 'success') {
     
      // const users = (data.body.length === 1) ? [data.body] : data.body  
      yield put(fetchUsersSuccess(data.body.users))
    }
    else {
      yield put(fetchUsersError())
    }
    
  } catch (error) {
    yield put(fetchUsersError())
  }
}

function* archiverUser(action:any) {
 
  try {
    const uri = `medical_folder/activate${action.value.id}`
    const {data} = yield axios.delete(uri)
    if (data.status === 'success') {  
      yield put(archiveUserSuccess(data))
    }
    else {
      yield put(archiveUserError())
    }
  } 
  catch {
    yield put(archiveUserError())
  }
} 
// If any of these functions are dispatched, invoke the appropriate saga
// eslint-disable-next-line
function* rootSaga() {
  yield all([
    takeLatest(login.type, loginUser),
    takeLatest(logout.type, logoutUser),
    takeLatest(verify.type, verifyUser),
    takeLatest(fetchUsers.type, getUsers),
    takeLatest(archiveUser.type, archiverUser)
  ])
}

export default rootSaga
