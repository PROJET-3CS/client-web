import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Modal, ModalBody, FormGroup, Label, Form, Alert } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { addAntecedent } from '../../../store/slices/folder'

import AwesomeButton from '../../../components/AwesomeButton/AwesomeButton'
import SecondaryInput from '../../../components/PrimaryInput/SecondaryInput'
import {
 AntecedentItem,
 ModalProps,
 ReactChangeEvent,
 ReactSubmitEvent,
} from '../../../helpers/types'
import { getFolder } from '../../../store/selectors'

interface Props {
 type: string | undefined
 // eslint-disable-next-line no-unused-vars
 toggle: (type?: string) => void
}

const IndAppointmentModal: FC<ModalProps & Props> = ({ modal, toggle, type }) => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error, antecedentItem } = useSelector(getFolder)

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _addAntecedent = (payload: AntecedentItem) => {
  dispatch(addAntecedent(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const initState = {
  title: '',
  cta: '',
 }

 const initAnteced: AntecedentItem = {
  title: antecedentItem?.title ? antecedentItem.title : '',
  date: '',
  details: antecedentItem?.details ? antecedentItem.details : '',
  type,
 }

 const [anteced, setAnteced] = useState(initAnteced)
 const [state, setState] = useState(initState)
 const [open, setOpen] = useState(true)

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleSubmitAnteced = (e: ReactSubmitEvent) => {
  e.preventDefault()
  _addAntecedent(anteced)
 }

 const handleChange = (e: ReactChangeEvent | ChangeEvent<HTMLTextAreaElement>) => {
  setAnteced({
   ...anteced,
   type,
   [e.target.id]: e.target.value,
  })
 }

 const getContent = () => {
  switch (type) {
   case 'affection':
    setState({
     ...state,
     title: 'Add Affection',
     cta: 'New Affection',
    })
    break

   case 'generale':
    setState({
     ...state,
     title: 'Add Maladie Générale',
     cta: 'New Maladie',
    })
    break
   case 'allergies':
    setState({
     ...state,
     title: 'Add Allergies',
     cta: 'New Allergie',
    })
    break

   case 'intervention':
    setState({
     ...state,
     title: 'Add Intervention',
     cta: 'New Intervention',
    })
    break

   default:
    setState({
     ...state,
     title: 'Add Affection',
     cta: 'New Affection',
    })
    break
  }
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  setOpen(!open)
  setTimeout(() => {
   setOpen(false)
  }, 5000)
 }, [antecedentItem])

 useEffect(() => {
  getContent()
 }, [type])

 return (
  <>
   <Modal
    isOpen={modal}
    modalTransition={{ timeout: 100 }}
    backdropTransition={{ timeout: 400 }}
    toggle={() => {
     return toggle(type)
    }}
    className="newappointment__resultmodal"
   >
    <ModalBody className="newappointment__resultmodal-body">
     <Alert isOpen={open} className="clinity-alert" color={!error ? 'success' : 'danger'}>
      {!error
       ? '🎉 Patient data was successfuly been updated !'
       : '🤕 Sorry something went wrong !'}
     </Alert>
     <Form onSubmit={handleSubmitAnteced}>
      <div className="newappointment__resultmodal-header">
       <p>{state.title}</p>
       <FontAwesomeIcon
        onClick={() => {
         return toggle(type)
        }}
        icon={faTimes}
        color="primary-color"
       />
      </div>
      <div>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">Title</Label>
        <SecondaryInput
         id="title"
         name="title"
         placeholder="Lorem Ipsum"
         type="text"
         label="What's this affection"
         className="anteced__add-input--title"
         onChange={handleChange}
         value={anteced.title}
         required
        />
       </FormGroup>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">Started From</Label>
        <SecondaryInput
         id="date"
         name="date"
         type="date"
         className="anteced__add-input--date"
         onChange={handleChange}
         value={new Date(anteced.date).getTime()}
         required
        />
       </FormGroup>
       <FormGroup className="newappointment__resultmodal-formgroup">
        <Label className="newappointment__resultmodal-formgroup--label">Details</Label>
        <SecondaryInput
         id="details"
         name="details"
         type="textarea"
         placeholder="Enter details..."
         rows="10"
         className="anteced__add-input--details"
         changeTextArea={(event) => {
          return handleChange(event)
         }}
         value={anteced.details}
         required
        />
       </FormGroup>
       <AwesomeButton>Add Antécédent</AwesomeButton>
      </div>
     </Form>
    </ModalBody>
   </Modal>
  </>
 )
}

export default IndAppointmentModal
