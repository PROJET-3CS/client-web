import { FC } from 'react'
import { Modal, ModalBody, FormGroup, Label } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import SecondaryInput from '../../components/PrimaryInput/SecondaryInput'
import { ModalProps } from '../../helpers/types'

const IndAppointmentModal: FC<ModalProps> = ({ modal, toggle }) => {
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
      <p>Add Affection</p>
      <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
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
        className='anteced__add-input--title'
       />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Started From</Label>
       <SecondaryInput id="date" name="date" type="date" className='anteced__add-input--date' />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Details</Label>
       <SecondaryInput id="details" name="details" type="textarea" placeholder='Enter details...' rows='10' className='anteced__add-input--details' />
      </FormGroup>
      <AwesomeButton>Add Antécédent</AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </>
 )
}

export default IndAppointmentModal
