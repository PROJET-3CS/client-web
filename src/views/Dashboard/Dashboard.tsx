import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Col, Row } from 'reactstrap'
import '../../styles/main.scss'
import Layout from '../layouts/Layout'
import Cover from './Cover'
import DashNav from './DashNav'
import Dashtable from './Dashtable'
import RightCont from './RightCont'
import Statsbox from './StatsBox'
  

const Dashboard: FC = () => {

 return (
  <Layout>
   <Row className='dashboard-row'>
    <Col md='8' className='dashboard-left' >
     <DashNav/>
     <Cover />
     <div className="dashboard-row2">
      <p className='dashboard-row2-1'>Weekly reports</p>
      <p className='dashboard-row2-2'>Last Week</p>
     </div>
     <div className="dashboard-stats-boxes">
      <Statsbox title='N_Patient' number={234} url='/img/stats-patient.svg'/>
      <Statsbox title='Appoinements' number={234} url='/img/stats-app.svg'/>
      <Statsbox title='Messages' number={234} url='/img/stats-msg.svg'/>
      <Statsbox title='N_Groups' number={234} url='/img/stats-grps.svg'/>
      <div className="dashboard-stats-boxe-1">
       <FontAwesomeIcon icon={faPlus} />
      </div>
     </div>
     <Dashtable />
    </Col>
    <RightCont />
   </Row>
  </Layout>
 )
}

export default Dashboard
