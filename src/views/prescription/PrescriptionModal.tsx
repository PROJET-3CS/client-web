import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Select from 'react-select'
import { Col, FormGroup, Input, Label, Modal, Row } from 'reactstrap'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'

interface IProps {
    modal : boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PrescriptionModal: FC<IProps> = ({modal , setModal}) => {
 
 const toggle = () => {
  setModal(false)
 }

 const medicationOptions = [
  { value: '1', label: 'medicationN1' },
  { value: '2', label: 'medicationN2' },
  { value: '3', label: 'medicationN3' },
  { value: '4', label: 'medicationN4' },
  { value: '5', label: 'medicationN4' },
 ]

 const posologieOptions = [
  { value: '1', label: 'Siroup' },
  { value: '2', label: 'Cachets' },
 ]

 const chaqueOptions = [
  { value: '1', label: '/jour' },
  { value: '2', label: '/heure' },
  { value: '3', label: '/semaine' },
  { value: '4', label: '/moi' },
 ]
  

 return (
  <div >
   <Modal isOpen={modal} toggle={toggle} className="prescription-modal" >
    <div className="prescription-modal-header">
     <p>Add medication</p>
     <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" />
    </div>
    <FormGroup className="prescription-modal-formgroup">
     <Label className="prescription-modal-formgroup--label">Select Medication</Label>
     <Select
      id="group"
      name="group"
      label="group"
      placeholder="Group..."
      options={medicationOptions}
     />
    </FormGroup>
    <FormGroup className="prescription-modal-formgroup">
     <Label className="prescription-modal-formgroup--label">Posologie</Label>
     <Select
      id="Posologie"
      name="Posologie"
      label="Posologie"
      placeholder="Posologie..."
      options={posologieOptions}
     />
    </FormGroup>
    <FormGroup className="prescription-modal-formgroup">
     <Label className="prescription-modal-formgroup--label">Dose</Label>
     <Row>
      <Col>
       <Input
        type='number'
        id="comprime"
        name="comprime"
        label="comprime"
        placeholder="comprime..."
        className='prescription-modal-formgroup-input'
       />
      </Col>
      <Col>
       <Select
        id="chaque"
        name="chaque"
        label="chaque"
        placeholder="chaque..."
        options={chaqueOptions}
       />
      </Col>
     </Row>
  
    </FormGroup>
    <FormGroup className="prescription-modal-formgroup">
     <Label className="prescription-modal-formgroup--label">Quantity</Label>
     <Row>
      <Col>
       <Input
        type='number'
        id="nombre"
        name="nombre"
        label="nombre"
        placeholder="nombre..."
        className='prescription-modal-formgroup-input'
       />
      </Col>
      <Col>
       <Select
        id="type"
        name="type"
        label="type"
        placeholder="type..."
        options={chaqueOptions}
       />
      </Col>
     </Row>
  
    </FormGroup>
    <AwesomeButton className="prescription__savebtn"> Add medication</AwesomeButton>
   </Modal>
  </div>
 )
}

export default PrescriptionModal
