import React, { FC, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

import Header from '../../components/Header'
import Layout from '../layouts/Layout'
import IndAppointmentModal from './IndAppointmentModal'
import ChooseModal from './ChooseModal'

const Appointment: FC = () => {
 const [addModal, setAddModal] = useState(false)
 const [selectModal, setSelect] = useState(false)

 const toggleAdd = () => {
  setSelect(false)
  setAddModal(!addModal)
 }

 const toggleSelect = () => {
  setAddModal(false)
  setSelect(!selectModal)
 }

 return (
  <Layout>
   <Header />
   <h2 className="main-heading">Appointments</h2>
   <div className="clinity-calendar">
    <IndAppointmentModal modal={addModal} toggle={toggleAdd} />
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
