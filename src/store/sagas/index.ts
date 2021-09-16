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
 activateSuccess,
 activateError,
 activate,
 updatePasswordSuccess,
 updatePasswordError,
 updatePassword,
 register,
 registerSuccess,
 registerError,
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
 addAntecedentError,
 addAntecedentSuccess,
 addAntecedent,
} from '../slices/folder'
import { getAuth, getFolder, getUsersManagement, getAppointment, getExam } from '../selectors'
import { getToken, removeToken, setToken, mixAppointments, getUrlAnteced } from '../../helpers/api'
import {
 fetchUsers,
 fetchUsersSuccess,
 fetchUsersError,
 archiveUser,
 archiveUserError,
 archiveUserSuccess,
 createUser,
 createUserError,
 createUserSuccess,
 fetchRegistrationRequestsSuccess,
 fetchRegistrationRequests,
 acceptUser,
 acceptUserError,
 acceptUserSucces,
 rejectUser,
 rejectUserError,
 rejectUserSucces,
} from '../slices/usersManagement'
import { reset, resetError, resetSuccess } from '../slices/resetPass'
import { active, activeError, activeSuccess } from '../slices/active'

import {
 addAppointmentSuccess,
 addAppointmentError,
 addAppointment,
 syncAppointmentSuccess,
 syncAppointmentError,
 syncAppointment,
 fetchAllUsers,
 fetchAllUsersSuccess,
 fetchAllUsersError,
} from '../slices/appointment'
import { addExamError, addExamSuccess, updateInfoConclusion } from '../slices/exam'

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

function* activateUser() {
 try {
  const { token } = yield select(getAuth)
  const { data } = yield axios.get(`/users/confirm/${token}`)
  if (data.status === 'success') {
   yield put(activateSuccess(data.body))
  } else {
   yield put(activateError('Something went wrong !'))
  }
 } catch (Err) {
  yield put(activateError('Something went wrong !'))
 }
}

function* registerUser() {
 try {
  const { currentUser } = yield select(getAuth)
  const { data } = yield axios.post('/users/request', currentUser)
  if (data.status === 'success') {
   yield put(registerSuccess())
  } else {
   yield put(registerError('Something went wrong !'))
  }
 } catch (Err) {
  yield put(registerError('Something went wrong !'))
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
  const { routeQueries } = yield select(getUsersManagement)

  const { data } = yield axios.get(`/users?page=${routeQueries.page}&items=${routeQueries.items}`)
  if (data.status === 'success') {
   yield put(fetchUsersSuccess(data.body))
  } else {
   yield put(fetchUsersError())
  }
 } catch (error) {
  yield put(fetchUsersError())
 }
}

function* getAllUsers() {
 try {
  const { data } = yield axios.get('/users/all')
  if (data.status === 'success') {
   yield put(fetchAllUsersSuccess(data.body))
  } else {
   yield put(fetchAllUsersError())
  }
 } catch (error) {
  yield put(fetchAllUsersError())
 }
}

function* archiverUser() {
 try {
  const { selectedUser } = yield select(getUsersManagement)

  const { data } = yield axios.get(`/users/archive/${selectedUser.id}`)

  if (data.status === 'success') {
   yield put(archiveUserSuccess())
   yield call(getUsers)
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

function* _updatePassword() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { user, newPassword, confirmNewPassword, token } = yield select(getAuth)
  const uri = `/users/forgot_password/${user.id}/${token}`
  const { data } = yield axios.post(
   uri,
   {
    password: newPassword,
    passwordConfirmation: confirmNewPassword,
   },
   {
    headers: { Authorization: authToken },
   }
  )

  if (data.status === 'success') {
   yield put(updatePasswordSuccess())
  } else {
   yield put(updatePasswordError(data.body))
  }
 } catch {
  yield put(updatePasswordError('invalid password'))
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

function* _createUser() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`
  const { selectedUser } = yield select(getUsersManagement)
  const { data } = yield axios.post('/users', selectedUser, {
   headers: { Authorization: authToken },
  })
  if (data.status === 'success') {
   yield put(createUserSuccess())
  } else {
   yield put(createUserError())
  }
 } catch (Err) {
  yield put(createUserError())
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

function* _addAntecedent() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { antecedentItem, folder } = yield select(getFolder)

  let type = ''
  if (antecedentItem.type === 'affection') {
   type = 'congenital'
  } else if (antecedentItem.type === 'generale') {
   type = 'genral'
  }
  const payload = {
   name: antecedentItem.title,
   description: antecedentItem.details,
   type,
  }

  const url = getUrlAnteced(antecedentItem.type, folder.userId)

  const { data } = yield axios.post(url, payload, {
   headers: { Authorization: authToken },
  })

  if (data.status === 'success') {
   yield put(addAntecedentSuccess())
   yield call(loadFolder)
  } else {
   yield put(addAntecedentError(data.body))
  }
 } catch (Err) {
  yield put(addAntecedentError('Sorry something went wrong !'))
 }
}

function* _updatePatient() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { infoGeneral, patient } = yield select(getFolder)
  const userUpdated = { ...patient, ...infoGeneral }
  const { data } = yield axios.post(`/users/update/${patient.id}`, userUpdated, {
   headers: { Authorization: authToken },
  })

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
   yield put(updateFolderSuccess(data.message))
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
   description: 'Please dont forget to put your mask on !',
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

// registration requests
function* loadRegistrationRequests() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`
  const { routeQueries } = yield select(getUsersManagement)

  const { data } = yield axios.get(`/users/requests/${routeQueries.page}`, {
   headers: { Authorization: authToken },
  })

  if (data.status === 'success') {
   yield put(fetchRegistrationRequestsSuccess(data.body.requests))
  } else {
   yield put(syncAppointmentError())
  }
 } catch (Err) {
  yield put(addAppointmentError('Sorry something went wrong !'))
 }
}

function* acceptRegistrationRequest() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`
  const { selectedUser } = yield select(getUsersManagement)

  const { data } = yield axios.get(`/users/request/${selectedUser.id}`, {
   headers: { Authorization: authToken },
  })

  if (data.success === 'success') {
   yield put(acceptUserSucces())
   yield call(loadRegistrationRequests)
  } else {
   yield put(acceptUserError())
  }
 } catch (Err) {
  yield put(acceptUserError())
 }
}

function* rejectRegistrationRequest() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`
  const { selectedUser } = yield select(getUsersManagement)

  const { data } = yield axios.delete(`/users/request/${selectedUser.id}`, {
   headers: { Authorization: authToken },
  })

  if (data.success === 'success') {
   yield put(rejectUserSucces())
   yield call(loadRegistrationRequests)
  } else {
   yield put(rejectUserError())
  }
 } catch (Err) {
  yield put(rejectUserError())
 }
}

function* _addExam() {
 try {
  const USER_TOKEN = getToken()
  const authToken = `Bearer ${USER_TOKEN}`

  const { infoCondition, infoDiagnostic, infoConclusion, infoInterrogation, prescription } =
   yield select(getExam)
  const { folder, patient } = yield select(getFolder)
  const { user } = yield select(getAuth)
  const payload = {
   medicalFolderId: folder.id,
   doctorId: user.id,
   ...infoInterrogation,
   startedAt: moment(infoInterrogation.startedAt).format(),
   ...infoCondition,
   ...infoDiagnostic,
   ...infoConclusion,
  }

  const url = `/medical_exam/${patient.id}`

  const { data } = yield axios.post(url, payload, {
   headers: { Authorization: authToken },
  })

  if (data.status === 'success') {
   const presUrl = `/medical_exam/rescritpions/${patient.id}`

   // eslint-disable-next-line no-restricted-syntax
   for (const pres of prescription) {
    const presPayload = {
     doctorId: user.id,
     medicalExamId: data.body.id,
     medicaments: pres.medications,
    }

    yield axios.post(presUrl, presPayload, {
     headers: { Authorization: authToken },
    })
   }

   yield put(addExamSuccess())
  } else {
   yield put(addExamError(data.body))
  }
 } catch (Err) {
  yield put(addExamError('Sorry something went wrong !'))
 }
}

// If any of these functions are dispatched, invoke the appropriate saga
// eslint-disable-next-line
function* rootSaga() {
 yield all([
  takeLatest(login.type, loginUser),
  takeLatest(logout.type, logoutUser),
  takeLatest(verify.type, verifyUser),
  takeLatest(activate.type, activateUser),
  takeLatest(fetchUsers.type, getUsers),
  takeLatest(archiveUser.type, archiverUser),
  takeLatest(syncFolder.type, loadFolder),
  takeLatest(updatePatient.type, _updatePatient),
  takeLatest(updateInfoAntecedent.type, _updateFolder),
  takeLatest(updateInfoMedical.type, _updateFolder),
  takeLatest(addAntecedent.type, _addAntecedent),
  takeLatest(addAppointment.type, _addAppointment),
  takeLatest(syncAppointment.type, loadAppointment),
  takeLatest(fetchAllUsers.type, getAllUsers),
  takeLatest(reset.type, resetPassword),
  takeLatest(updatePassword.type, _updatePassword),
  takeLatest(active.type, activateAcc),
  takeLatest(createUser.type, _createUser),
  takeLatest(fetchRegistrationRequests.type, loadRegistrationRequests),
  takeLatest(acceptUser.type, acceptRegistrationRequest),
  takeLatest(rejectUser.type, rejectRegistrationRequest),
  takeLatest(updateInfoConclusion.type, _addExam),
  takeLatest(register.type, registerUser),
 ])
}

export default rootSaga
