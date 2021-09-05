import React, { FC, useState } from 'react'
import {Col, Row} from 'reactstrap'
import Layout from '../layouts/Layout'
import Medications from './medications'
import '../../styles/main.scss'
import Header from '../../components/Header'
import Medicalinfo from './Medicalinfo'
import PatientCard from './PatientCard'





const Prescription: FC = () => {

 const [modal , setModal] = useState(false)
 
 return (
  <Layout >
   <Header />
   <div className='prescription'>
    <h2 className="main-heading">Prescription</h2>
    <Row>
     <Col md='8'>
      <Medications />
     </Col>
     <Col md='3' className='prescription-right-row'>
      <h3 className="prescription__item-title">Patient Info:</h3>
      <PatientCard />
      <Medicalinfo />
     </Col>
    </Row>
   </div>
   
  </Layout>
 )
}

export default Prescription
