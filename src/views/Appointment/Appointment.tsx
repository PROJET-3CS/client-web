import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'

import Header from '../../components/Header'
import Layout from '../layouts/Layout'
import IndAppointmentModal from './IndAppointmentModal'
import ChooseModal from './ChooseModal'
import { getAppointment } from '../../store/selectors'
import { AppointmentInfo, AppointmentItem, User } from '../../helpers/types'
import Toaster from '../../components/Toast/Toaster'
import ColAppointmentModal from './ColAppointmentModal'
import AppointmentCalendar from './AppointmentCalendar'
import { cancelAppointment, fetchAllUsers } from '../../store/slices/appointment'

const Appointment: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error, msg, appointment, users } = useSelector(getAppointment)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _fetchUsers = () => {
  dispatch(fetchAllUsers())
 }

 const _cancelAppointement = (payload: AppointmentItem) => {
  dispatch(cancelAppointment(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: AppointmentInfo = {
  medecins: [],
  patients: [],
  appointment: {
   type: '',
   doctorId: '',
   patientId: '',
   promo: '',
   group: '',
   targetEmail: '',
   description: '',
   date: new Date().getTime(),
   startTime: '',
   endTime: '',
  },
 }

 const [state, setState] = useState(initState)

 const [addInvModal, setAddInvModal] = useState(false)
 const [addColModal, setAddColModal] = useState(false)
 const [selectModal, setSelect] = useState(false)
 const [open, setOpen] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const sortUsers = () => {
  let medecins: User[] = []
  let patients: User[] = []

  if (users.length > 0) {
   medecins = users.filter((user) => {
    return user.role === 1
   })
   patients = users.filter((user) => {
    return user.role !== 1
   })
  }

  setState({
   ...state,
   medecins,
   patients,
  })
 }

 const toggleAddInd = () => {
  setSelect(false)
  setState({
   ...state,
   appointment: initState.appointment,
  })
  setAddColModal(false)
  setAddInvModal(!addInvModal)
 }

 const toggleAddCol = () => {
  setSelect(false)
  setState({
   ...state,
   appointment: initState.appointment,
  })
  setAddInvModal(false)
  setAddColModal(!addColModal)
 }

 const toggleSelect = () => {
  setAddInvModal(false)
  setSelect(!selectModal)
 }

 const handleCancel = (payload: AppointmentItem) => {
  _cancelAppointement(payload)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  if (users.length < 1) {
   _fetchUsers()
  }
 }, [])

 useMemo(() => {
  sortUsers()
 }, [users])

 const initialRender = useRef(true) // SOL from stackoverflow for excuting useEffect after the first renders
 useEffect(() => {
  if (initialRender.current) {
   initialRender.current = false
  } else {
   // initially called every time after the component renders
   setOpen(true)
   setTimeout(() => {
    setOpen(false)
   }, 5000)
  }
 }, [appointment])

 return (
  <Layout>
   <Header />
   <h2 className="main-heading">Appointments</h2>
   <div className="clinity-calendar">
    <IndAppointmentModal
     medecins={state.medecins}
     patients={state.patients}
     appointment={state.appointment}
     modal={addInvModal}
     toggle={toggleAddInd}
    />
    <ColAppointmentModal
     medecins={state.medecins}
     appointment={state.appointment}
     modal={addColModal}
     toggle={toggleAddCol}
    />
    <ChooseModal
     modal={selectModal}
     toggle={toggleSelect}
     toggleOne={toggleAddInd}
     toggleTwo={toggleAddCol}
    />

    {users.length >= 1 ? (
     <AppointmentCalendar toggleSelect={toggleSelect} users={users} handleCancel={handleCancel} />
    ) : (
     <Spinner />
    )}
   </div>
   {/* Toast for diplaying error msgs */}
   <Toaster modal={open} type={error ? 'danger' : 'success'}>
    {msg}
   </Toaster>
  </Layout>
 )
}

export default Appointment
