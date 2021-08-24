import React, { FC } from 'react'
import { Modal, Form, ModalHeader, ModalBody, Row, Col, ModalFooter, Button, InputProps } from 'reactstrap'
import { medicamentType, ReactSubmitEvent } from '../../helpers/types'
import PrimaryInput from '../PrimaryInput/PrimaryInput'

interface Props {
    handleSubmitMedicament: (e: ReactSubmitEvent) => void
    medicament: medicamentType
}

const AddModal : FC<Props & InputProps> = ({ modal, toggle, handleSubmitMedicament, medicament, handleChange }) => {
 return (
  <Modal isOpen={modal} toggle={toggle} className="clinity__modal">
   <Form onSubmit={handleSubmitMedicament}>
    <ModalHeader>
     <span className="clinity__modal-header">Add new medicament</span>
    </ModalHeader>
    <ModalBody className="clinity__modal-body">
     <Row>
      <Col>
       <PrimaryInput
        placeholder="name"
        id="name"
        value={medicament.name}
        onChange={handleChange}
        required
       />
      </Col>
      <Col>
       <PrimaryInput
        placeholder="dose"
        type="number"
        id="dose"
        value={medicament.dose}
        onChange={handleChange}
        required
       />
      </Col>
      <Col>
       <PrimaryInput
        placeholder="unit"
        id="unit"
        value={medicament.unit}
        onChange={handleChange}
        required
       />
      </Col>
     </Row>
    </ModalBody>
    <ModalFooter className="clinity__modal-footer">
     <Button type="submit" color="primary" className="clinity__modal-btn">
      Add
     </Button>{' '}
     <Button color="secondary" onClick={toggle} className="clinity__modal-btn">
      Cancel
     </Button>
    </ModalFooter>
   </Form>
  </Modal>
 )
}

export default AddModal
