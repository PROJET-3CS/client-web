import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Search from '../../components/Search'

const DashNav: FC= () => {
 return (
  <div className="dashboard-nav">
   <div className="dashboard-nav-search">
    <Search />
   </div>
   <p className="dashboard-nav-txt">
   Appointment history
    <FontAwesomeIcon className="" icon={faSortDown} />
   </p>
   <button type='button' className='dashboard-nav-btn'>Add patient</button>
  </div>
 )
}

export default DashNav
