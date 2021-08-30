import React, { FC } from 'react'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AwesomeRow : FC = () => {
 return (
  <tr className="clinity__table-row">
   <td className="clinity__table-cell">
    <img className="clinity__table-avatar" alt="profle pic" src="/img/profile.jpg" /> Jane Cooper
   </td>
   <td className="clinity__table-cell">Student</td>
   <td className="clinity__table-cell">1CS</td>
   <td className="clinity__table-cell">Groupe 10</td>
   <td className="clinity__table-cell">Activated</td>
   <td className="clinity__table-cell">29.08.2021</td>
   <td className="clinity__table-cell">
    <Link to="/folder/1">
     <FontAwesomeIcon className="clinity__table-cell--more" icon={faEllipsisH} />
    </Link>
   </td>
  </tr>
 )
}

export default AwesomeRow
