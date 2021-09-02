import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputProps, Modal, ModalBody, FormGroup, Label, Alert, Spinner } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimaryDropdown from '../../components/PrimaryDropdown/PrimaryDropdown'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'
import { ReactChangeEvent, User } from '../../helpers/types'
import { getUsersManagement } from '../../store/selectors'
import { createUser } from '../../store/slices/usersManagement'

interface Props {
 buttonLabel: string
 isOpen: boolean
}

const CreateUserModal: FC<InputProps & Props> = ({ isOpen, toggle }) => {
 const { loading, error, selectedUser } = useSelector(getUsersManagement)

 const initialState: User = {
  firstname: selectedUser.firstname ? selectedUser.firstname : '',
  lastname: selectedUser.lastname ? selectedUser.lastname : '',
  email: selectedUser.email ? selectedUser.email : '',
 }

 const [state, setState] = useState(initialState)
 const [open, setOpen] = useState(false)

 const handleChange = (event: ReactChangeEvent) => {
  setState({ ...state, [event.target.name]: event.target.value })
 }

 const dispatch = useDispatch()

 const _createUser = (payload: User) => {
  dispatch(createUser(payload))
 }

 const handleSubmit = () => {
  _createUser(state)
  //   toggle()
 }

 const initialRender = useRef(true) // SOL from stackoverflow for excuting useEffect after the first renders

 useEffect(() => {
  if (initialRender.current) {
   initialRender.current = false
  } else {
   // initially called every time after the component renders
   setOpen(true)
   setTimeout(() => {
    setOpen(false)
   }, 3000)
  }
 }, [selectedUser])

 return (
  <div>
   <Modal
    isOpen={isOpen}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={toggle}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <div className="newappointment__resultmodal-header">
      <p>Create Individual Appointment</p>
      <FontAwesomeIcon onClick={toggle} icon={faWindowClose} color="primary" />
     </div>
     <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
      {!error
       ? '🎉 Medical folder data was successfuly updated !'
       : '🤕 Sorry something went wrong !'}
     </Alert>
     <div>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">
        enter patients Firstname
       </Label>
       <SecondaryInput
        name="firstname"
        placeholder="Mohamed Yacine"
        type="text"
        label="Firstname"
        value={state.firstname}
        onChange={handleChange}
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">
        enter patients lastname
       </Label>
       <SecondaryInput
        name="lastname"
        placeholder="Abdelkader Kharroubi"
        type="text"
        label="Lastname"
        value={state.lastname}
        onChange={handleChange}
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">enter patients mail</Label>
       <SecondaryInput
        name="email"
        placeholder="m.kharoubi@esi-sba.dz"
        type="email"
        label="Email"
        value={state.email}
        onChange={handleChange}
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <PrimaryDropdown label="SELECT ROLE" placeholder="Select Role" name="role" />
      </FormGroup>
      <AwesomeButton onClick={handleSubmit}>
       {loading ? <Spinner animation="border" /> : 'Create Appointment'}
      </AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default CreateUserModal
