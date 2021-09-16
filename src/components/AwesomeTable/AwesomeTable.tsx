import React, { FC } from 'react'
import { faSlidersH, faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'reactstrap'
import AwesomeRow from './AwesomeRow'

const AwesomeTable: FC = () => {
 return (
  <div className="clinity__table">
   <Table borderless hover>
    <thead className="clinity__table-head">
     <tr className="clinity__table-row">
      <th className="clinity__table-header">
       Name <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Role <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Year <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       N° Groupe <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Status <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       Date <FontAwesomeIcon className="clinity__table-header--icon" icon={faSort} />
      </th>
      <th className="clinity__table-header">
       <span className="clinity__table-header--setting">
        <FontAwesomeIcon icon={faSlidersH} />
       </span>
      </th>
     </tr>
    </thead>
    <tbody className="clinity__table-body">
     <AwesomeRow />
     <AwesomeRow />
     <AwesomeRow />
     <AwesomeRow />
     <AwesomeRow />
     <AwesomeRow />
    </tbody>
   </Table>
  </div>
 )
}

export default AwesomeTable
