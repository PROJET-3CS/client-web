/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

import Layout from '../layouts/Layout'
import Header from '../../components/Header'

import AwesomeTableNew from '../../components/AwesomeTable/AwesomeTableNew'

import { fetchRegistrationRequests } from '../../store/slices/usersManagement'
import { getUsersManagement } from '../../store/selectors'
import { User } from '../../helpers/types'
import AcceptUserModal from './AcceptUserModal'
import RejectUserModal from './RejectUserModal'

const RegistrationRequestsManagement: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users, totalPages } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _fetchRequests = (payload: any) => {
  dispatch(fetchRegistrationRequests(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [buffer, setBuffer] = useState(null)
 const [acceptModal, setAcceptModal] = useState(false)
 const [rejectModal, setRejectModal] = useState(false)

 const routeQueriesInitialState = {
  page: 0,
  items: 8,
 }
 const [routeQueries, setRouteQueries] = useState(routeQueriesInitialState)
 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handlePageChange = (selectedPage: { selected: number }) => {
  const { selected } = selectedPage
  setRouteQueries({ ...routeQueries, page: selected })
 }

 useEffect(() => {
  _fetchRequests(routeQueries)
 }, [routeQueries])

 const toggleAccept = (user: any) => {
  setBuffer(user)
  setAcceptModal(!acceptModal)
 }

 const toggleReject = (user: any) => {
  setBuffer(user)
  setRejectModal(!rejectModal)
 }
 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _fetchRequests(routeQueries)
 }, [])
 // ===========================================================================
 // Table properties
 // ===========================================================================

 const tableRowDropdown = (item: User) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
   setDropdownOpen(!dropdownOpen)
  }

  return (
   <>
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
     <DropdownToggle tag="span" data-toggle="dropdown">
      <FontAwesomeIcon icon={faEllipsisH} />
     </DropdownToggle>
     <DropdownMenu>
      <DropdownItem
       onClick={() => {
        toggleAccept(item)
       }}
      >
       Accept
      </DropdownItem>
      <DropdownItem
       onClick={() => {
        toggleReject(item)
       }}
      >
       Refuse
      </DropdownItem>
     </DropdownMenu>
    </Dropdown>
   </>
  )
 }
 const tableHead = [
  { name: 'Firstname', path: 'firstname' },
  { name: 'Lasttname', path: 'lastname' },
  { name: 'E-mail', path: 'email' },
  { name: '', action: tableRowDropdown },
 ]

 return (
  <>
   <Layout>
    <Header />

    <div className="users-list">
     <div className="users-list__header">
      <h2 className="main-heading">Users list</h2>
     </div>
     <div className="users-list__table">
      <AwesomeTableNew
       tableHead={tableHead}
       tableBody={users}
       pageCount={totalPages}
       handlePageChange={handlePageChange}
      />
     </div>
    </div>
   </Layout>
   <AcceptUserModal
    buttonLabel="accept user"
    isOpen={acceptModal}
    toggle={toggleAccept}
    user={buffer}
   />
   <RejectUserModal
    buttonLabel="reject user"
    isOpen={rejectModal}
    toggle={toggleReject}
    user={buffer}
   />
  </>
 )
}

export default RegistrationRequestsManagement
