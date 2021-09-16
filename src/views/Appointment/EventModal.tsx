import React, { FC, ReactEventHandler } from 'react'
import moment from 'moment'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, ModalBody } from 'reactstrap'
import { Appointment, InputProps } from '../../helpers/types'

interface Props extends InputProps {
 modal: boolean
 toggle: ReactEventHandler
 handleAccept: () => void
 handleCancelAction: () => void
 appointment: Appointment
 // eslint-disable-next-line no-unused-vars
 getUser: (id: string | number) => string
}

const EventModal: FC<Props> = ({
 modal,
 toggle,
 handleAccept,
 handleCancelAction,
 appointment,
 getUser,
}) => {
 const tConvert = (time: string) => {
  let newTime = ''
  // Check correct time format and split into components
  if (time) {
   const textArr = time.split(':')
   newTime = `${textArr[0]}:${textArr[1]} ${Number(textArr[0]) > 12 ? 'PM' : 'AM'}`
  }

  return newTime
 }

 return (
  <Modal
   isOpen={modal}
   modalTransition={{ timeout: 100 }}
   backdropTransition={{ timeout: 400 }}
   toggle={toggle}
   className="newappointment_event"
  >
   <ModalBody className="newappointment_event-body">
    <div className="newappointment_event-header">
     <p className="newappointment_event-header-title">Appointment details</p>
     <FontAwesomeIcon className="newappointment_event-header-icon" onClick={toggle} icon={faWindowClose} color="primary" />
    </div>
    <div className="newappointment_event-main">
     <div className="newappointment_event-main--date">
      <span className="newappointment_event-main--date-title">Date et heure</span>
      <span className="newappointment_event-main--date-text">
       {moment(appointment.date).format('LL')}. From {tConvert(appointment.start_time)} to{' '}
       {tConvert(appointment.end_time)}
      </span>
     </div>
     <div className="newappointment_event-main--medecin">
      <span className="newappointment_event-main--medecin-title">Chez medecin</span>
      <span className="newappointment_event-main--medecin-text">
       Dr. {getUser(appointment.doctorId)}
      </span>
     </div>
    </div>
    <div className="newappointment_event--action">
     <button
      type="button"
      onClick={handleCancelAction}
      className="newappointment_event--action--btn newappointment_event--action--btn-reject"
     >
      Cancel Appointment
     </button>
     <button
      type="button"
      onClick={handleAccept}
      className="newappointment_event--action--btn newappointment_event--action--btn-accept"
     >
      Edit details
     </button>
    </div>
   </ModalBody>
  </Modal>
 )
}

export default EventModal
