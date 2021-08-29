/* eslint-disable max-lines */
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalBody, FormGroup, Label, Row, Col } from 'reactstrap'
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
 appointment: AppointmentType
}

const ColAppointmentModal: FC<Props> = ({ modal, toggle, medecins, appointment }) => {
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
  type: 'collectif',
  doctorId: appointment?.doctorId ? appointment.doctorId : '',
  promo: appointment?.promo ? appointment.promo : '',
  group: appointment?.group ? appointment.group : '',
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
  setState({
   ...state,
   [e.target.id]: e.target.value,
  })
 }

 const handleSelectPromo = (value: string) => {
  setState({
   ...state,
   promo: value,
  })
 }

 const handleSelectGroup = (value: string) => {
  if (state.promo) {
   setState({
    ...state,
    group: value,
   })
  }
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

 const promoOptions = [
  { value: '1', label: '1CPI' },
  { value: '2', label: '2CPI' },
  { value: '3', label: '1CS' },
  { value: '4', label: '2CS' },
  { value: '5', label: '3CS' },
 ]

 const groupOptions = [
  { value: '1', label: 'G01' },
  { value: '2', label: 'G02' },
  { value: '3', label: 'G03' },
  { value: '4', label: 'G04' },
  { value: '5', label: 'G05' },
  { value: '6', label: 'G06' },
  { value: '7', label: 'G07' },
  { value: '8', label: 'G08' },
  { value: '9', label: 'G09' },
  { value: '10', label: 'G10' },
  { value: '11', label: 'G11' },
  { value: '12', label: 'G12' },
  { value: '13', label: 'G13' },
  { value: '14', label: 'G14' },
  { value: '15', label: 'G15' },
 ]

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
      <p>Create Collectif Appointment</p>
      <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
     </div>
     <div>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Select by group</Label>
       <Row>
        <Col>
         <SecondarySelect
          id="promo"
          name="promo"
          label="promo"
          placeholder="Promo..."
          options={promoOptions}
          getValue={handleSelectPromo}
          defaultValue={state.promo}
         />
        </Col>
        <Col>
         <SecondarySelect
          id="group"
          name="group"
          label="group"
          placeholder="Group..."
          options={groupOptions}
          getValue={handleSelectGroup}
          defaultValue={state.group}
         />
        </Col>
       </Row>
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

export default ColAppointmentModal
