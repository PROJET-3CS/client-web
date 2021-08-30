import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button, Modal, ModalBody, FormGroup, Label } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrimaryDropdown from '../../components/PrimaryDropdown/PrimaryDropdown'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'

const CreateUserModal = (props: { buttonLabel: string }) => {
 const { buttonLabel } = props

 const [modal, setModal] = useState(false)

 const toggle = () => {
  setModal(!modal)
 }

 return (
  <div>
   <Button color="danger" onClick={toggle}>
    {buttonLabel}
   </Button>
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
      <FontAwesomeIcon onClick={toggle} icon="window-close" color="primary-color" />
     </div>
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
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">enter patients mail</Label>
       <SecondaryInput
        name="email"
        placeholder="m.kharoubi@esi-sba.dz"
        type="email"
        label="Email"
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <PrimaryDropdown label="SELECT ROLE" placeholder="Select Role" name="role" />
      </FormGroup>
      <AwesomeButton>Create Appointment</AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default CreateUserModal
