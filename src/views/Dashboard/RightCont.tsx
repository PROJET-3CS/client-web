import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Line } from 'react-chartjs-2'
import { Col } from 'reactstrap'
import UserNav from '../../components/UserNav'
import CrdvRow from '../doctore/CrdvRow'
import Statsbox from './StatsBox'



const RightCont: FC = () => {
 const data = {
  labels: ['red','orange','green','yellow','white','6','7'],
  datasets: [{
   label: 'Patients',
   data: [65, 59, 80, 81, 56, 55, 40],
   fill: false,
   borderColor: 'rgb(75, 192, 192)',
   tension: 0.1
  }]
 }

 return (
  <Col className='dashboard-right'>
   <UserNav />
   <div className="dashboard-right-row1">
    <p>Schedule Calendar</p>
    <button type='button' className="dashboard-right-row1-btn"><FontAwesomeIcon icon={faCalendar} /> Calendar</button>
   </div>
   <div className="dashboard-right-row1">
    <p>Examinations</p>
   </div>
   <CrdvRow />
   <CrdvRow />
   <div className="dashboard-right-row1">
    <p>Individual</p>
   </div>
   <div className="dashboard-right-row1-2">
    <Statsbox title='ahmed rafick' number='11:00' url='/img/userRect.png'/>
    <Statsbox title='ahmed rafick' number='11:00' url='/img/userRect.png'/>
    <Statsbox title='ahmed rafick' number='11:00' url='/img/userRect.png'/>
   </div>
   <div className="dashboard-right-row1">
    <p>Patients</p>
   </div>
   <Line data={data}/>

  </Col>
 )
}

export default RightCont
