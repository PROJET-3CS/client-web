import React, { FC } from 'react'
import { faCircle, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Line, Doughnut} from 'react-chartjs-2'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import Search from '../../components/Search'
import CrdvRow from './CrdvRow'
import IdrvRow from './IdrvRow'
import CardStat from './Card'

const LeftContainer: FC = () => {
 const data = {
  labels: ['red','orange','green','yellow','white','6','7'],
  datasets: [{
   label: 'My First Dataset',
   data: [65, 59, 80, 81, 56, 55, 40],
   fill: false,
   borderColor: 'rgb(75, 192, 192)',
   tension: 0.1
  }]
 }

 const data2 = {
 
  datasets: [{
   label: 'My First Dataset',
   data: [50, 300],
   backgroundColor: [
    'rgba(91, 99, 246, 0.1)',
    '#5B63F6',
   ],
   hoverOffset: 4
  }]
 }

 return (
  <div className="doctor-container-left">
   <div className="doctor-container-left-searchbar">
    <Search />
    <p className="doctor-container-left-txt">
     Appointment history
     <FontAwesomeIcon className="doctor-container-left-txt-icon" icon={faSortDown} />
    </p>
    <AwesomeButton className="doctor-container-left-btn">+ add patient</AwesomeButton>
   </div>
   <h2 className="main-heading">My Profile</h2>
   <div className="doctor-container-left-firstrow">
    <div className="doctor-container-left-firstrow-1">
     <Doughnut data={data2} />
     <FontAwesomeIcon className="doctor-container-left-firstrow-1-icon"
      icon={faCircle} />
      Women:60%
     <br />
     <FontAwesomeIcon className="doctor-container-left-firstrow-1-icon2"
      icon={faCircle} />
      men:40%
    </div>
    <div className="doctor-container-left-firstrow-2">
     <CardStat type="low" />
     <CardStat type="up" />
    </div>
    <div className="doctor-container-left-firstrow-3">   
     <Line data={data}/>
    </div>
   </div>
   <div className="doctor-container-left-secondrow">
    <div className="doctor-container-left-secondrow-left">
     <div className="doctor-container-left-secondrow-header">
      <p className="doctor-container-left-secondrow-header-left">Next collectif RDV</p>
      <p className="doctor-container-left-secondrow-header-right">see all</p>
     </div>
     <CrdvRow />
     <CrdvRow />
     <CrdvRow />
    </div>
    <div className="doctor-container-left-secondrow-right">
     <div className="doctor-container-left-secondrow-header">
      <p className="doctor-container-left-secondrow-header-left">Next Individuel RDV</p>
      <p className="doctor-container-left-secondrow-header-right2">see all</p>
     </div>
     <div className="doctor-container-left-secondrow-IRDV">
      <IdrvRow />
      <IdrvRow />
      <IdrvRow />
      <IdrvRow />
      <IdrvRow />
     </div>
    </div>
   </div>
  </div>
 )
}

export default LeftContainer
