import React, { useEffect} from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSlidersH, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'reactstrap'
import { getManagement } from '../store/selectors'
import { fetchUsers } from '../store/slices/management'



library.add(faSort, faSlidersH, faEllipsisH)

const MainTable: React.FC = () => {

  // ===========================================================================
  // Selectors
  // ===========================================================================

  const {users} = useSelector(getManagement)


  // ===========================================================================
  // Dispatch
  // ==========================================================================
  const dispatch = useDispatch()

  const _getUsers = () => {
    dispatch(fetchUsers())
  }

  // ===========================================================================
  // Hooks
  // ===========================================================================
  useEffect(() => {
    _getUsers()
  } , [])

  

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
            <FontAwesomeIcon icon="sliders-h" />
          </th>
        </tr>
      </thead>
      <tbody className="maintable-body">{
        (users && users.length > 0 ) && 
          users.map((user) => {
            return (
              <tr className="maintable-row" key= {user.id} >
                <th scope="row" className="maintable-header-item raduisadd">
                  {user.firstname + user.lastname}
                </th>
                <td className="maintable-header-item">{user && user.role}</td>
                <td className="maintable-header-item raduisadd1">
                  <FontAwesomeIcon icon="ellipsis-h" />
                </td>
              </tr>
            )
          })
      }
         
     
       
      </tbody>
    </Table>
  )
}

export default MainTable
