import React, { FC, useEffect, useMemo, useState } from 'react'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointment, getUsersManagement } from '../../store/selectors'
import { syncAppointment } from '../../store/slices/appointment'
import { Appointment, eventType } from '../../helpers/types'

interface Props {
 toggleSelect: () => void
}

const AppointmentCalendar: FC<Props> = ({ toggleSelect }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users } = useSelector(getUsersManagement)
 const { appointments } = useSelector(getAppointment)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _syncAppointments = () => {
  dispatch(syncAppointment())
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================

 const [events, setEvents] = useState<eventType[]>([])

 const getUser = (id: string | number) => {
  const user = users.find((el) => {
   return el.id === id
  })

  return `${user?.firstname} ${user?.lastname}`
 }

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const generateEvents = () => {
  if (appointments?.length > 0) {
   const CalendarEvents = appointments.map((appoint: Appointment) => {
    let event
    if (appoint.type === 'individual') {
     event = {
      title: getUser(appoint.patientId), // a property!
      start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
      end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
      backgroundColor: 'rgba(14, 165, 233, .1)',
      textColor: '#0369A1',
     }
    } else if (appoint.type === 'collectif') {
     event = {
      title: 'Collectif appointment', // a property!
      start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
      end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
      backgroundColor: 'rgba(241, 146, 62, .1)',
      borderColor: '#F1923E',
      textColor: '#F1923E',
     }
    }

    return event
   })

   setEvents(CalendarEvents)
  }
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 useEffect(() => {
  _syncAppointments()
 }, [])

 useMemo(() => {
  generateEvents()
 }, [appointments])

 return (
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
   events={events}
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
 )
}

export default AppointmentCalendar
