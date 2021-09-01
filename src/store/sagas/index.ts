/* eslint-disable max-lines */
// This file for all async call funct in store
import { all, put, takeLatest, select, call } from 'redux-saga/effects'
import axios from 'axios'
import moment from 'moment'

import {
 login,
 loginSuccess,
 loginError,
 logout,
 logoutSuccess,
 verifySuccess,
 verify,
} from '../slices/auth'
import {
 syncFolder,
 syncFolderSuccess,
 syncFolderError,
 updatePatientError,
 updatePatientSuccess,
 updatePatient,
 updateFolderSuccess,
 updateFolderError,
 updateInfoAntecedent,
 updateInfoMedical,
} from '../slices/folder'
import { getAuth, getFolder, getManagement, getReset, getAppointment} from '../selectors'
import { getToken, removeToken, setToken, mixAppointments } from '../../helpers/api'
import {
 fetchUsers,
 fetchUsersSuccess,
 fetchUsersError,
 archiveUser,
 archiveUserError,
 archiveUserSuccess,
} from '../slices/management'
import {
 reset,
 resetError,
 resetSuccess,
 change,
 changeError,
 changeSuccess,
} from '../slices/resetPass'
import { active, activeError, activeSuccess } from '../slices/active'

import {
 addAppointmentSuccess,
 addAppointmentError,
 addAppointment,
 syncAppointmentSuccess,
 syncAppointmentError,
 syncAppointment,
} from '../slices/appointment'

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

//

function* getUsers() {
 try {
  const { data } = yield axios.get('/users/get_users/0')
  if (data.status === 'success') {
   // const users = (data.body.length === 1) ? [data.body] : data.body
   yield put(fetchUsersSuccess(data.body.users))
  } else {
   yield put(fetchUsersError())
  }
 } catch (error) {
  yield put(fetchUsersError())
 }
}

function* archiverUser() {
 try {
  const { selectedUser } = yield select(getManagement)
  const uri = `medical_folder/activate${selectedUser.id}`
  const { data } = yield axios.delete(uri)
  if (data.status === 'success') {
   yield put(archiveUserSuccess(data))
  } else {
   yield put(archiveUserError())
  }
 } catch {
  yield put(archiveUserError())
 }
}

function* resetPassword() {
 try {
  const { user } = yield select(getAuth)
  const uri = `users/forgot_password/${user.email}`
  const { data } = yield axios.get(uri)
  yield put(resetSuccess(data))
 } catch {
  yield put(resetError('invalid email'))
 }
}

function* changePassword() {
 try {
  const { user } = yield select(getAuth)
  const { password } = yield select(getReset)
  const uri = `users/forgot_password/${user.id}/${password}`
  const { data } = yield axios.get(uri)
  yield put(changeSuccess(data))
 } catch {
  yield put(changeError('invalid password'))
 }
}

function* activateAcc() {
 try {
  const { user } = yield select(getAuth)
  const uri = `medical_folder/activate/${user.id}/`
  const { data } = yield axios.get(uri)
  yield put(activeSuccess(data))
 } catch {
  yield put(activeError('invalid password'))
 }
}
// If any of these functions are dispatched, invoke the appropriate saga
// eslint-disable-next-line

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

function* _updatePatient() {
 try {
  //   const USER_TOKEN = getToken()
  //   const authToken = `Bearer ${USER_TOKEN}`

  const { infoGeneral, patient } = yield select(getFolder)
  const updatedUser = { ...patient, ...infoGeneral }
  //   const { data } = yield axios.post(`/users/${patient.id}`, updatedUser, {
  //    headers: { Authorization: authToken },
  //   })

  // this should be removed later
  const data = {
   status: 'success',
   body: updatedUser,
  }

  if (data.status === 'success') {
   yield put(updatePatientSuccess(data.body))
  } else {
   yield put(updatePatientError())
  }
 } catch (Err) {
  yield put(updatePatientError())
 }
}

function* _updateFolder() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { infoMedical, folder, patient, antecedent } = yield select(getFolder)
  const updatedFolder = { ...folder, ...infoMedical, ...antecedent }
  const { data } = yield axios.post(`/medical_folder/${patient.id}`, updatedFolder, {
   headers: { Authorization: authToken },
  })

  if (data.status === 'success') {
   yield put(updateFolderSuccess(data.body))
  } else {
   yield put(updateFolderError())
  }
 } catch (Err) {
  yield put(updateFolderError())
 }
}

function* loadAppointment() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { data } = yield axios.get('/appointment', {
   headers: { Authorization: authToken },
  })

  if (data.success === 'success') {
   const payload = mixAppointments(
    data.response?.individualAppointment,
    data.response?.collectifAppointment
   )
   yield put(syncAppointmentSuccess(payload))
  } else {
   yield put(syncAppointmentError())
  }
 } catch (Err) {
  yield put(addAppointmentError('Sorry something went wrong !'))
 }
}

function* _addAppointment() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { appointment } = yield select(getAppointment)
  const payload = {
   doctorId: Number(appointment.doctorId),
   patientId: Number(appointment.patientId),
   promo: Number(appointment.promo),
   group: Number(appointment.group),
   description: 'Please don\'t forget to put your mask on !',
   date: moment(appointment.date).format(),
   start_time: appointment.startTime,
   end_time: appointment.endTime,
  }

  const url = `/appointment/demand_appointment${
   appointment?.type === 'collectif' ? '_collectif' : ''
  }/`

  const { data } = yield axios.post(url, payload, {
   headers: { Authorization: authToken },
  })

  if (data.success === 'success') {
   yield put(addAppointmentSuccess(data.body))
   yield call(loadAppointment)
  } else {
   yield put(addAppointmentError(data.body))
  }
 } catch (Err) {
  yield put(addAppointmentError('Sorry something went wrong !'))
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
  takeLatest(archiveUser.type, archiverUser),
  takeLatest(syncFolder.type, loadFolder),
  takeLatest(updatePatient.type, _updatePatient),
  takeLatest(updateInfoAntecedent.type, _updateFolder),
  takeLatest(updateInfoMedical.type, _updateFolder),
  takeLatest(addAppointment.type, _addAppointment),
  takeLatest(syncAppointment.type, loadAppointment),
  takeLatest(reset.type, resetPassword),
  takeLatest(change.type, changePassword),
  takeLatest(active.type, activateAcc),
 ])
}

export default rootSaga
