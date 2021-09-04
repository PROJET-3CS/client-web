import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputProps, Modal, ModalBody, Alert, Spinner } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'

import { User } from '../../helpers/types'
import { getUsersManagement } from '../../store/selectors'
import { rejectUser } from '../../store/slices/usersManagement'

interface Props {
 buttonLabel: string
 isOpen: boolean
}

const RejectUserModal: FC<InputProps & Props> = ({ isOpen, toggle, user }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { loading, error } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _rejectUser = (payload: User) => {
  dispatch(rejectUser(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [open, setOpen] = useState(false)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleSubmit = () => {
  console.log(user)

  _rejectUser(user)
  if (!error && !loading) setTimeout(toggle, 2000)
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================

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
 }, [loading, error])

 return (
  <div>
   <Modal
    isOpen={isOpen}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={() => {
     toggle(null)
    }}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <div className="newappointment__resultmodal-header">
      <p>Accept User</p>
      <FontAwesomeIcon
       onClick={() => {
        toggle(null)
       }}
       icon={faWindowClose}
       color="primary"
      />
     </div>
     <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
      {!error ? '🎉 User Account  was successfuly rejected !' : '🤕 Sorry something went wrong !'}
     </Alert>
     <div>
      <AwesomeButton onClick={handleSubmit}>
       {loading ? <Spinner animation="border" /> : 'Reject User'}
      </AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default RejectUserModal
