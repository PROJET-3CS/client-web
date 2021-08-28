import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import Header from '../../components/Header'
import Layout from '../layouts/Layout'
import IndAppointmentModal from './IndAppointmentModal'
import ChooseModal from './ChooseModal'
import { getManagement } from '../../store/selectors'
import { AppointmentType, User } from '../../helpers/types'
import { fetchUsers } from '../../store/slices/management'

interface Appointment {
 medecins: User[]
 patients: User[]
 appointment: AppointmentType
}

const Appointment: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users } = useSelector(getManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _fetchUsers = () => {
  dispatch(fetchUsers())
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: Appointment = {
  medecins: [],
  patients: [],
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
  sortUsers()
 }, [users])

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
     events={[
      {
       title: 'Mahdaoui Abdelouadoud', // a property!
       start: '2021-08-23T09:00:00+01:00', // a property!
       end: '2021-08-23T09:30:00+01:00', // a property! ** see important note below about 'end' **
       backgroundColor: 'rgba(14, 165, 233, .1)',
       textColor: '#0369A1',
      },
      {
       title: 'Yacine Kharoubi', // a property!
       start: '2021-08-26T08:00:00+01:00', // a property!
       end: '2021-08-26T08:15:00+01:00', // a property! ** see important note below about 'end' **
       backgroundColor: 'rgba(14, 165, 233, .1)',
       textColor: '#0369A1',
      },
     ]}
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
  </Layout>
 )
}

export default Appointment
