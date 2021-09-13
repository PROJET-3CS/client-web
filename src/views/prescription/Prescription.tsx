import React, { FC, useState } from 'react'
import { Col, Row } from 'reactstrap'
import Layout from '../layouts/Layout'
import Medications from './medications'
import '../../styles/main.scss'
import Header from '../../components/Header'
import Medicalinfo from './Medicalinfo'
import PatientCard from './PatientCard'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import PrescriptionModal from './PrescriptionModal'

const Prescription: FC = () => {
 const [modal, setModal] = useState(false)
 const handleModale = () => {
  setModal(true)
 }

 return (
  <Layout>
   <Header />
   <div className="prescription">
    <h2 className="main-heading">Prescription</h2>
    <Row>
     <Col md="8">
      <div className="prescription__medications-container">
       <Medications />
       <div className="prescription__medications-add">
        <AwesomeButton className="prescription__medications-addbtn" onClick={handleModale}>
         {' '}
         + Add medication
        </AwesomeButton>
       </div>
      </div>
      <AwesomeButton className="prescription__savebtn"> Save prescription</AwesomeButton>
     </Col>
     <Col md="3" className="prescription-right-row">
      <h3 className="prescription__item-title">Patient Info:</h3>
      <PatientCard />
      <Medicalinfo />
     </Col>
    </Row>
   </div>
   <PrescriptionModal modal={modal} setModal={setModal} />
  </Layout>
 )
}

export default Prescription
