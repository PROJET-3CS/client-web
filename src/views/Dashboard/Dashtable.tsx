import React, { FC } from 'react'
import { faSlidersH, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'reactstrap'
import Dashrow from './Dashrow'

const Dashtable: FC = () => {
 return (
  <div className="clinity__table">
   <Table borderless hover>
    <thead className="clinity__table-head">
     <tr className="clinity__table-row">
      <th className="clinity__table-header">
       Name <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Type <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Date <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Time <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Status <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       <span className="clinity__table-header--setting">
        <FontAwesomeIcon icon={faSlidersH} />
       </span>
      </th>
     </tr>
    </thead>
    <tbody className="clinity__table-body">
     <Dashrow />
     <Dashrow />
     <Dashrow />
     <Dashrow />
     <Dashrow />
     <Dashrow />
    </tbody>
   </Table>
  </div>
 )
}

export default Dashtable
