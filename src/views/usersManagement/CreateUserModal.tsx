import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputProps, Modal, ModalBody, FormGroup, Label, Alert, Spinner } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimarySelect from '../../components/PrimaryDropdown/PrimarySelect'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'
import { userTypes } from '../../helpers/db'
import { OptionType, ReactChangeEvent, User } from '../../helpers/types'
import { getUsersManagement } from '../../store/selectors'
import { createUser } from '../../store/slices/usersManagement'

interface Props {
 buttonLabel: string
 isOpen: boolean
}

const CreateUserModal: FC<InputProps & Props> = ({ isOpen, toggle }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { loading, error, selectedUser } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _createUser = (payload: User) => {
  dispatch(createUser(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initialState: User = {
  firstname: selectedUser.firstname ? selectedUser.firstname : '',
  lastname: selectedUser.lastname ? selectedUser.lastname : '',
  email: selectedUser.email ? selectedUser.email : '',
  role: selectedUser.role ? selectedUser.role : '',
 }

 const [state, setState] = useState(initialState)
 const [open, setOpen] = useState(false)
 const [option, setOption] = useState<OptionType[]>([])

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleChange = (event: ReactChangeEvent) => {
  setState({ ...state, [event.target.name]: event.target.value })
 }

 const handleSubmit = () => {
  _createUser(state)
  //   toggle()
 }

 const handleSelectRole = (value: string) => {
  setState({
   ...state,
   role: value,
  })
 }

 const formatOptions = () => {
  const roleArr: OptionType[] = []
  userTypes.forEach((el) => {
   roleArr.push({ value: String(el.id), label: el.role })
  })

  setOption(roleArr)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

 const initialRender = useRef(true) // SOL from stackoverflow for excuting useEffect after the first renders

 useEffect(() => {
  formatOptions()
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
      <p>Create new user</p>
      <FontAwesomeIcon onClick={toggle} icon={faWindowClose} color="primary" />
     </div>
     <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
      {!error ? '🎉 User was successfuly created !' : '🤕 Sorry something went wrong !'}
     </Alert>
     <div>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Firstname</Label>
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
       <Label className="newappointment__resultmodal-formgroup--label">Lastname</Label>
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
       <Label className="newappointment__resultmodal-formgroup--label">Email</Label>
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
       <PrimarySelect options={option} getValue={handleSelectRole} label='Select role' defaultValue={String(selectedUser.role)} />
      </FormGroup>
      <AwesomeButton onClick={handleSubmit}>
       {loading ? <Spinner animation="border" /> : 'Create user'}
      </AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default CreateUserModal
