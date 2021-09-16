import React, { FC, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useDispatch, useSelector } from 'react-redux'
import { getAppointment } from '../../store/selectors'
import { syncAppointment } from '../../store/slices/appointment'
import { Appointment, eventType, User } from '../../helpers/types'
import EventModal from './EventModal'

interface Props {
 toggleSelect: () => void
 // eslint-disable-next-line no-unused-vars
 handleCancel: (payload: Appointment) => void
 users: User[]
}

const AppointmentCalendar: FC<Props> = ({ toggleSelect, users, handleCancel }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { appointments } = useSelector(getAppointment)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const history = useHistory()
 const dispatch = useDispatch()

 const _syncAppointments = () => {
  dispatch(syncAppointment())
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================

 const [events, setEvents] = useState<eventType[]>([])
 const [open, setOpen] = useState(false)
 const [buffer, setBuffer] = useState<Appointment>({})

 const getUser = (id: string | number) => {
  const user = users.find((el) => {
   return el.id === id
  })

  return `${user?.firstname} ${user?.lastname}`
 }

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const handleRedirect = () => {
  history.push('/requests')
 }

 const toggle = () => {
  setOpen(!open)
 }

 const toggleEvent = (id: string) => {
  const appoint = appointments.find((el: Appointment) => {
   return el.id === Number(id)
  })
  setBuffer(appoint)
  toggle()
 }

 const handledDelete = () => {
  handleCancel(buffer)
  toggle()
 }

 const generateEvents = () => {
  if (appointments?.length > 0) {
   const CalendarEvents = appointments.map((appoint: Appointment) => {
    let event
    if (appoint.type === 'individual' && appoint.status !== 'Accepted') {
     event = {
      id: appoint.id,
      title: getUser(appoint.patientId), // a property!
      start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
      end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
      backgroundColor: 'rgba(241, 146, 62, .1)',
      borderColor: '#F1923E',
      textColor: '#F1923E',
     }
    }
    if (appoint.type === 'collectif' && appoint.status !== 'Accepted') {
     event = {
      id: appoint.id,
      title: 'Collectif appointment', // a property!
      start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
      end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
      backgroundColor: 'rgba(235, 87, 87, .1)',
      borderColor: '#eb5757',
      textColor: '#eb5757',
     }
    }

    if (appoint.status === 'Accepted') {
     event = {
      id: appoint.id,
      title: appoint.type === 'individual' ? getUser(appoint.patientId) : 'Collectif appointment', // a property!
      start: `${appoint.date}T${appoint.start_time}+01:00`, // a property!
      end: `${appoint.date}T${appoint.end_time}+01:00`, // a property! ** see important note below about 'end' **
      backgroundColor: 'rgb(39, 174, 96, .1)',
      borderColor: '#27AE60',
      textColor: '#27AE60',
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
  <>
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
     list: {
      text: '|||',
      click() {
       handleRedirect()
      },
     },
    }}
    events={events}
    eventClick={(info) => {
     toggleEvent(info.event.id)
    }}
    headerToolbar={{
     left: 'prev,next today',
     center: 'title',
     right: 'add list',
    }}
    slotDuration="00:15:00"
    slotMinTime="08:00:00"
    slotMaxTime="17:00:00"
    displayEventEnd
    allDaySlot={false}
    initialView="timeGridWeek"
   />
   <EventModal
    modal={open}
    toggle={toggle}
    handleAccept={toggle}
    handleCancelAction={handledDelete}
    appointment={buffer}
    getUser={getUser}
   />
  </>
 )
}

export default AppointmentCalendar
