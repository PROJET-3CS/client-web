import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'
import AwesomeButtonIcon from '../components/AwesomeButton/AwesomeButtonIcon'
import Search from '../components/Search'

const SecondayHeader: FC = () => {
 return (
  <div className="secondaryHeader">
   <Search />
   <div className="secondaryNavigation">
    <span className="secondaryNavigation-link">Appointment History</span>
    <AwesomeButtonIcon text="Add Patient" icon={faPlus} />
   </div>
  </div>
 )
}

export default SecondayHeader
