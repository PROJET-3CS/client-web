import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, FC, useState } from 'react'
import { Button, Modal, ModalBody, FormGroup, Label, Row, Input } from 'reactstrap'
import AwesomeButton from '../../../components/AwesomeButton/AwesomeButton'
import SecondaryInput from '../../../components/PrimaryInput/SecondaryInput'

const CreatePrescModal: FC = (props: ComponentProps<typeof Input>['props']) => {
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
        Selectionner médicament
       </Label>
       <SecondaryInput name="name" placeholder="Ator 40mg" type="text" label="Médicament" />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Posologie</Label>
       <SecondaryInput name="name" placeholder="Sirop" type="text" label="Posologie" />
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Dosage</Label>
       <Row md="2">
        <div>
         <SecondaryInput name="start" placeholder="1 comprimé" type="text" label="Comprimé" />
        </div>
        <div>
         <SecondaryInput name="finish" placeholder="/jour" type="text" label="Chaque" />
        </div>
       </Row>
      </FormGroup>
      <FormGroup className="newappointment__resultmodal-formgroup">
       <Label className="newappointment__resultmodal-formgroup--label">Quantité</Label>
       <Row md="2">
        <div>
         <SecondaryInput name="start" placeholder="ex. 3" type="number" label="Nombre" />
        </div>
        <div>
         <SecondaryInput name="finish" placeholder="QSP" type="text" label="Type" />
        </div>
       </Row>
      </FormGroup>
      <AwesomeButton>Ajouter Médicament</AwesomeButton>
     </div>
    </ModalBody>
   </Modal>
  </div>
 )
}

export default CreatePrescModal
