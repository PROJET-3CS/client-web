/* eslint-disable max-lines */
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import Header from '../../components/Header'
import Layout from '../layouts/Layout'
import IndAppointmentModal from './IndAppointmentModal'
import ChooseModal from './ChooseModal'
import { getAppointment, getManagement } from '../../store/selectors'
import { AppointmentInfo, User } from '../../helpers/types'
import { fetchUsers } from '../../store/slices/management'
import Toaster from '../../components/Toast/Toaster'
import { syncAppointment } from '../../store/slices/appointment'

export interface AppointmentItem {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 [anyProp: string]: any
}

const Appointment: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users } = useSelector(getManagement)
 const { error, msg, appointment, appointments } = useSelector(getAppointment)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _fetchUsers = () => {
  dispatch(fetchUsers())
 }

 const _syncAppointments = () => {
  dispatch(syncAppointment())
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: AppointmentInfo = {
  medecins: [],
  patients: [],
  events: [],
  appointment: {
   doctorId: '',
   patientId: '',
   targetEmail: '',
   description: '',
   date: new Date().getTime(),
   startTime: '',
   endTime: '',
  },
 }

 const [state, setState] = useState(initState)

 const [addModal, setAddModal] = useState(false)
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
    return user.role === 2
   })
  }

  setState({
   ...state,
   medecins,
   patients,
  })
 }

 const getUser = (id: string | number) => {
  const user = users.find((el) => {
   return el.id === id
  })

  return `${user?.firstname} ${user?.lastname}`
 }

 const generateEvents = () => {
  if (appointments?.length > 0) {
   const events = appointments.map((appoint: AppointmentItem) => {
    return {
     title: getUser(appoint.patientId), // a property!
     start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
     end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
     backgroundColor: 'rgba(14, 165, 233, .1)',
     textColor: '#0369A1',
    }
   })

   setState({
    ...state,
    events,
   })
  }
 }

 const toggleAdd = () => {
  setSelect(false)
  setState({
   ...state,
   appointment: {
    doctorId: '',
    patientId: '',
    targetEmail: '',
    description: '',
    date: new Date().getTime(),
    startTime: '',
    endTime: '',
   },
  })
  setAddModal(!addModal)
 }

 const toggleSelect = () => {
  setAddModal(false)
  setSelect(!selectModal)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  if (users.length < 1) {
   _fetchUsers()
  }
 }, [users])

 useEffect(() => {
  _syncAppointments()
 }, [])

 useMemo(() => {
  sortUsers()
  generateEvents()
 }, [users, appointments])

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
     modal={addModal}
     toggle={toggleAdd}
    />
    <ChooseModal
     modal={selectModal}
     toggle={toggleSelect}
     toggleOne={toggleAdd}
     toggleTwo={toggleAdd}
    />
    <FullCalendar
     locale="fr"
     plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
     customButtons={{
      add: {
       text: '+ New Appointment',
       click() {
        toggleSelect()
       },
      },
     }}
     events={state.events}
     headerToolbar={{
      left: 'prev,next today',
      center: 'title',
      right: 'add',
     }}
     slotDuration="00:15:00"
     slotMinTime="08:00:00"
     slotMaxTime="17:00:00"
     displayEventEnd
     allDaySlot={false}
     initialView="timeGridWeek"
    />
   </div>
   {/* Toast for diplaying error msgs */}
   <Toaster modal={open} type={error ? 'danger' : 'success'}>
    {msg}
   </Toaster>
  </Layout>
 )
}

export default Appointment
