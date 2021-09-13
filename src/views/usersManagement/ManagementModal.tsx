import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Select from 'react-select'
import { Col, FormGroup, Modal, Row } from 'reactstrap'
import '../../styles/main.scss'


interface IProps {
 modal: boolean
 setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ManagementModal: FC<IProps> = ({ modal, setModal }) => {
 const toggle = () => {
  setModal(false)
 }

 const genderOptions = [
  { value: '1', label: 'male' },
  { value: '2', label: 'female' },
 ]
 const yearOptions = [
  { value: '1', label: '1 CPI' },
  { value: '2', label: '2 CPI' },
  { value: '3', label: '1 Cs' },
  { value: '4', label: '2 CS' },
  { value: '5', label: '3 CS' },
 ]

 const bloodOptions = [
  { value: '1', label: 'A+' },
  { value: '2', label: 'A-' },
  { value: '3', label: 'B+' },
  { value: '4', label: 'B-' },
  { value: '5', label: 'AB+' },
  { value: '6', label: 'AB-' },
  { value: '7', label: 'O+' },
  { value: '8', label: 'O-' },
 ]
  
 

 

 return (
  <div>
   <Modal isOpen={modal} toggle={toggle} className="management-modal">
    <div className="management-modal-header">
     <p>General Filters</p>
     <FontAwesomeIcon onClick={toggle} icon={faTimes} color="primary-color" className="management-modal-header-icon"/>
    </div>
    <FormGroup >
     <Row className="management-modal-row" >
      <Col>
       <input
        id="chaque"
        name="chaque"
        placeholder="Nom et prenom"
        className='management-modal-input'
        type='text'
        value=''
       />
      </Col>
      <Col>
       <input
        id="birthday"
        name="birthday"
        placeholder="date de naissance"
        className='management-modal-input'
        type='date'
        value=''
       />
      </Col>
      <Col>
       <input
        id="city"
        name="city"
        placeholder="ville d'origine"
        className='management-modal-input'
        type='text'
        value=''
       />
      </Col>
     </Row>
     <Row className="management-modal-row">
      <Col>
       <Select
        id="Gender"
        name="Gender"
        label="Gender"
        placeholder="Gender"
        options={genderOptions}
       />
      </Col>
      <Col>
       <Select
        id="year"
        name="year"
        label="year"
        placeholder="Anne d'etude"
        options={yearOptions}
       />
      </Col>
      <Col>
       .
      </Col>
     </Row>
     <div className="management-modal-header">
      <p>Medical Filters</p>
     </div>
     <Row className="management-modal-row" >
      <Col>
       <Select
        id="blood type"
        name="blood type"
        label="blood type"
        placeholder="blood type"
        option={bloodOptions}
       />
      </Col>
      <Col>
       <input
        id="height"
        name="height"
        placeholder="height"
        className='management-modal-input'
        type='number'
       />
      </Col>
      <Col>
       <input
        id="wight"
        name="wight"
        placeholder="wight"
        className='management-modal-input'
        type='number'
       />
      </Col>
     </Row>
     <Row className="management-modal-row" >
      <Col>
       <input
        id="medication"
        name="medication"
        placeholder="medication"
        className='management-modal-input'
        type='text'
       />
      </Col>
      <Col>
       <input
        id="allergie"
        name="allergie"
        placeholder="allergie"
        className='management-modal-input'
        type='text'
       />
      </Col>
      <Col>
       <input
        id="illness"
        name="illness"
        placeholder="illness"
        className='management-modal-input'
        type='text'
       />
      </Col>
     </Row>
     <Row>
      <button type='button' className='management-modal-btn'>
        Apply filters
       <FontAwesomeIcon icon={faCheck} className='management-modal-btn-icon' />
      </button>
     </Row>
    </FormGroup>
   
   </Modal>
  </div>
 )
}

export default ManagementModal
