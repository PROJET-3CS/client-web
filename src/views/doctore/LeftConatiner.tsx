import React, { FC } from 'react'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import Search from '../../components/Search'
import CrdvRow from './CrdvRow'
import IdrvRow from './IdrvRow'
import CardStat from './Card'

const LeftContainer: FC = () => {
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
    <div className="doctor-container-left-firstrow-1">hi</div>
    <div className="doctor-container-left-firstrow-2">
     <CardStat type="low" />
     <CardStat type="up" />
    </div>
    <div className="doctor-container-left-firstrow-3">hi</div>
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
