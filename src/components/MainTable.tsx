import React, { useEffect, useState } from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSlidersH, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'
import { getManagement } from '../store/selectors'
import { fetchUsers, archiveUser } from '../store/slices/management'

library.add(faSort, faSlidersH, faEllipsisH)

const MainTable: React.FC = () => {
 const [roleFilter, setRoleFilter] = useState('')
 const [showFilter, setShowFilter] = useState(-1)

 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { users } = useSelector(getManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _getUsers = () => {
  dispatch(fetchUsers())
 }

 const _archiveUser = (payload: number) => {
  return (event: React.MouseEvent) => {
   dispatch(archiveUser(payload))
  }
 }

 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _getUsers()
 }, [_archiveUser])

 const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setRoleFilter(e.currentTarget.value)
 }

 //
 // this is the filtering function , waiting for the other data to ve fetched from the API to add all filters
 function filterRole(rows: any) {
  // eslint-disable-next-line arrow-body-style
  return rows.filter((row: any) => roleFilter === '' || row.role == roleFilter)
 }

 function filterson() {
  setShowFilter(showFilter * -1)
 }

 return (
  <Table borderless responsive className="maintable">
   <thead>
    <tr>
     <th className="maintable-header-title">
      Name <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />{' '}
     </th>
     <th className="maintable-header-title">
      Role <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />
     </th>
     {showFilter === 1 && (
      <select value={roleFilter} onChange={handleChange}>
       <option value="">all</option>
       <option value={0}>admin</option>
       <option value={1}>student</option>
      </select>
     )}

     <th className="maintable-header-title">
      Year <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />
     </th>
     <th className="maintable-header-title">
      N Groupe <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />
     </th>
     <th className="maintable-header-title">
      Status <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />
     </th>
     <th className="maintable-header-title">
      Last connexion <FontAwesomeIcon icon="sort" className="maintable-icon-sort" />
     </th>
     <th className="maintable-header-title">
      {' '}
      <FontAwesomeIcon icon="sliders-h" onClick={filterson} />
     </th>
    </tr>
   </thead>
   <tbody className="maintable-body">
    {users &&
     users.length > 0 &&
     filterRole(users).map((user: any) => {
      return (
       <tr className="maintable-row" key={user.id}>
        <th scope="row" className="maintable-header-item raduisadd">
         {user.firstname + user.lastname}
        </th>
        <td className="maintable-header-item">{user && user.role}</td>
        <td className="maintable-header-item">{user.year ? user.year : '//'}</td>
        <td className="maintable-header-item">{user.nGrp ? user.nGrp : '//'}</td>
        <td className="maintable-header-item">{user.status ? user.status : '//'}</td>
        <td className="maintable-header-item">{user.lastCnx ? user.lastCnx : '//'}</td>
        <td className="maintable-header-item raduisadd1">
         <FontAwesomeIcon icon="ellipsis-h" onClick={_archiveUser(user.id)} />
        </td>
       </tr>
      )
     })}
   </tbody>
  </Table>
 )
}

export default MainTable
