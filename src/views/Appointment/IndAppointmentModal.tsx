/* eslint-disable max-lines */
import { FC, useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, FormGroup, Label, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import DoctorBox from '../../components/AppointmentComponents/DoctorBox'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'
import { AppointmentType, ReactChangeEvent, User } from '../../helpers/types'
import { addAppointment } from '../../store/slices/appointment'
import SecondarySelect from '../../components/PrimaryDropdown/SecondarySelect'

interface Props {
 modal: boolean
 toggle: () => void
 medecins: User[]
 patients: User[]
 appointment: AppointmentType
}

const IndAppointmentModal: FC<Props> = ({ modal, toggle, medecins, appointment, patients }) => {
 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _addAppointment = (payload: AppointmentType) => {
  dispatch(addAppointment(payload))
  toggle()
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState: AppointmentType = {
  doctorId: appointment?.doctorId ? appointment.doctorId : '',
  patientId: appointment?.patientId ? appointment.patientId : '',
  date: appointment?.date ? appointment.date : new Date().getTime(),
  startTime: appointment?.startTime ? appointment.startTime : '',
  endTime: appointment?.endTime ? appointment.endTime : '',
 }

 const [state, setState] = useState(initState)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleChange = (e: ReactChangeEvent) => {
  if (e.target.id === 'date') {
   setState({
    ...state,
    [e.target.id]: new Date(e.target.value).getTime.toString(),
   })
  }

  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectPatient = (value: string) => {
  setState({
   ...state,
   patientId: value,
  })
 }

 const selectDoctor = (payload: string) => {
  setState({
   ...state,
   doctorId: payload,
  })
 }

 const createAppointment = () => {
  _addAppointment(state)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 useEffect(() => {
  setState(initState)
 }, [appointment])

 const options = useMemo(() => {
  return patients.map((el) => {
   return {
    value: el?.id,
    label: `${el?.firstname} ${el?.lastname}`,
   }
  })
 }, [patients])

 return (
  <>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <div className="newappointment__resultmodal-header">
      <p>Create Individual Appointment</p>
      <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
     </div>
     <div>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Patient</Label>
       <SecondarySelect
        id="patientId"
        name="name"
        label="name"
        options={options}
        getValue={handleSelectPatient}
        defaultValue={state.patientId}
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Assigned to</Label>
       <Row>
        {medecins.map((med) => {
         return (
          <DoctorBox
           key={med.id}
           doctor={med.id}
           selectedDoctor={state.doctorId}
           name={`Dr ${med.lastname}`}
           id="doctorId"
           selectDoctor={selectDoctor}
           speciality="Generaliste"
           image="/img/doctor1.png"
          />
         )
        })}
       </Row>
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Date</Label>
       <SecondaryInput
        id="date"
        onChange={handleChange}
        value={state.date.toString()}
        name="finish"
        placeholder="Yacine Kharroubi"
        type="date"
        label="In"
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select Time</Label>
       <Row md="2">
        <div>
         <SecondaryInput
          id="startTime"
          onChange={handleChange}
          value={state.startTime.toString()}
          min="08:00"
          max="16:50"
          name="start"
          placeholder="Yacine Kharroubi"
          type="time"
          label="From"
         />
        </div>
        <div>
         <SecondaryInput
          id="endTime"
          min="8:10"
          max="17:00"
          onChange={handleChange}
          value={state.endTime.toString()}
          name="finish"
          placeholder="Yacine Kharroubi"
          type="time"
          label="To"
         />
        </div>
       </Row>
      </FormGroup>
      <AwesomeButton onClick={createAppointment}>Create Appointment</AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </>
 )
}

export default IndAppointmentModal
