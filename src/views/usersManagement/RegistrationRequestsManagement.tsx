/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useRef, useState } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

import Layout from '../layouts/Layout'
import Header from '../../components/Header'

import AwesomeTableNew from '../../components/AwesomeTable/AwesomeTableNew'

import {
 acceptUser,
 fetchRegistrationRequests,
 rejectUser,
} from '../../store/slices/usersManagement'
import { getUsersManagement } from '../../store/selectors'
import { User } from '../../helpers/types'
import RejectModal from '../../components/AwesomeModal/RejectModal'
import AcceptModal from '../../components/AwesomeModal/AcceptModal'

import 'moment/locale/fr'
import Toaster from '../../components/Toast/Toaster'

moment.locale('fr')

const RegistrationRequestsManagement: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users, totalPages, notify, error } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _fetchRequests = (payload: any) => {
  dispatch(fetchRegistrationRequests(payload))
 }

 const _acceptUser = (payload: User) => {
  dispatch(acceptUser(payload))
 }

 const _rejectUser = (payload: User) => {
  dispatch(rejectUser(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [buffer, setBuffer] = useState({})
 const [acceptModal, setAcceptModal] = useState(false)
 const [rejectModal, setRejectModal] = useState(false)
 const [open, setOpen] = useState(notify)

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

 const toggle = () => {
  setRejectModal(false)
  setAcceptModal(false)
 }

 const handleAccept = () => {
  toggle()
  _acceptUser(buffer)
 }

 const handleReject = () => {
  toggle()
  _rejectUser(buffer)
 }

 const toggleAccept = (user: User) => {
  setBuffer(user)
  setRejectModal(false)
  setAcceptModal(!acceptModal)
 }

 const toggleReject = (user: any) => {
  setBuffer(user)
  setAcceptModal(false)
  setRejectModal(!rejectModal)
 }
 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _fetchRequests(routeQueries)
 }, [])

 const initialRender = useRef(true) // SOL from stackoverflow for excuting useEffect after the first renders
 useEffect(() => {
  if (initialRender.current) {
   initialRender.current = false
  } else {
   // initially called every time after the component renders
   setOpen(true)
   setTimeout(() => {
    setOpen(false)
   }, 3000)
  }
 }, [notify])
 // ===========================================================================
 // Table properties
 // ===========================================================================

 const displayNameWithAvatar = (item: User) => {
  const { firstname } = item

  return (
   <>
    <img className="clinity__table-avatar" alt="profle pic" src="/img/person.svg" />{' '}
    {`${firstname}`}
   </>
  )
 }

 const displayDate = (item: User) => {
  const { createdAt } = item

  return moment(createdAt).format('l')
 }

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
  { name: 'Firstname', action: displayNameWithAvatar },
  { name: 'Lastname', path: 'lastname' },
  { name: 'E-mail', path: 'email' },
  { name: 'Date', action: displayDate },
  { name: '', action: tableRowDropdown },
 ]

 return (
  <>
   <Layout>
    <Header />

    <div className="users-list">
     <div className="users-list__header">
      <h2 className="main-heading">Registrations list</h2>
     </div>
     <div className="users-list__table">
      <AwesomeTableNew
       tableHead={tableHead}
       tableBody={users}
       pageCount={totalPages}
       handlePageChange={handlePageChange}
      />
      {/* Toast for diplaying error msgs */}
      <Toaster modal={open} type={error ? 'danger' : 'success'}>
       {!error ? 'Operation done succesfully 🎉' : 'Sorry Something went wrong 🤕'}
      </Toaster>
     </div>
    </div>
   </Layout>
   <AcceptModal
    modal={acceptModal}
    toggle={toggle}
    handleAccept={handleAccept}
    handleAnnuler={toggle}
    user={buffer}
   />
   <RejectModal
    modal={rejectModal}
    toggle={toggle}
    handleReject={handleReject}
    handleAnnuler={toggle}
    user={buffer}
   />
  </>
 )
}

export default RegistrationRequestsManagement
