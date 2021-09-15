/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faUsers,
 faPlus,
 faEllipsisH,
 faUserPlus,
 faUserTie,
 faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useHistory } from 'react-router'

import Layout from '../layouts/Layout'
import OverviewCard from '../../components/OverviewCard'
import Header from '../../components/Header'
import AwesomeTableNew from '../../components/AwesomeTable/AwesomeTableNew'
import CreateUserModal from './CreateUserModal'
import { archiveUser, fetchUsers } from '../../store/slices/usersManagement'
import { getUsersManagement } from '../../store/selectors'
import { User } from '../../helpers/types'
import { getRole } from '../../helpers/api'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'
import ArchiveModal from '../../components/AwesomeModal/ArchiveModal'
import Toaster from '../../components/Toast/Toaster'

const UsersManagement: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users, usersCount, totalPages, notify, error } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _fetchUsers = (payload: any) => {
  dispatch(fetchUsers(payload))
 }

 const _archiveUser = (payload: User) => {
  dispatch(archiveUser(payload))
 }

 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [createUserModal, setCreateUserModal] = useState(false)
 const [archiveModal, setArchiveModal] = useState(false)
 const [buffer, setBuffer] = useState({})
 const [open, setOpen] = useState(notify)

 const routeQueriesInitialState = {
  page: 0,
  items: 8,
 }
 const [routeQueries, setRouteQueries] = useState(routeQueriesInitialState)
 // ===========================================================================
 // Handlers
 // ===========================================================================
 const toggle = () => {
  setCreateUserModal(!createUserModal)
 }

 const toggleArchive = (user: any) => {
  setBuffer(user)
  setArchiveModal(!archiveModal)
 }

 const toggleAnnuler = () => {
  setCreateUserModal(false)
  setArchiveModal(false)
 }

 const handleArchive = () => {
  setArchiveModal(false)
  _archiveUser(buffer)
 }

 const handlePageChange = (selectedPage: { selected: number }) => {
  const { selected } = selectedPage
  setRouteQueries({ ...routeQueries, page: selected })
 }

 useEffect(() => {
  _fetchUsers(routeQueries)
 }, [routeQueries])
 // ===========================================================================
 // Hooks
 // ===========================================================================
 useEffect(() => {
  _fetchUsers(routeQueries)
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

 const displayRole = (item: User) => {
  return getRole(item.role)
 }

 const displayStatusBadge = (item: User) => {
  const { status } = item

  return (
   <span
    className={`clinity__table-badge ${status === 'actif' ? 'clinity__table-badge--actif' : ''}${
     status === 'pending' ? 'clinity__table-badge--pending' : ''
    }${status === 'archived' ? 'clinity__table-badge--archived' : ''}`}
   >
    {status}
   </span>
  )
 }

 const displayNameWithAvatar = (item: User) => {
  const { firstname, lastname } = item

  return (
   <>
    <img className="clinity__table-avatar" alt="profle pic" src="/img/profile.jpg" />{' '}
    {`${firstname} ${lastname}`}
   </>
  )
 }
 const tableRowDropdown = (item: User) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => {
   setDropdownOpen(!dropdownOpen)
  }
  const history = useHistory()

  return (
   <>
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction="left">
     <DropdownToggle tag="span" data-toggle="dropdown">
      <FontAwesomeIcon icon={faEllipsisH} />
     </DropdownToggle>
     <DropdownMenu>
      <DropdownItem
       onClick={() => {
        history.push(`/folder/${item.id}`)
       }}
      >
       Consulter
      </DropdownItem>
      { item.status !== 'archived' ? <><DropdownItem
       onClick={() => {
        history.push(`/folder/${item.id}/edit`)
       }}
      >
       Modifier dossier
      </DropdownItem>
      <DropdownItem
       onClick={() => {
        toggleArchive(item)
        toggleDropdown()
       }}
      >
       Archive dossier
      </DropdownItem>
      <DropdownItem
       onClick={() => {
        history.push(`/examination/${item.id}/interrogation`)
       }}
      >
       Céer Examination
      </DropdownItem></> : '' 
      }
     </DropdownMenu>
    </Dropdown>
   </>
  )
 }

 const tableColumns = [
  {
   name: 'Name',
   action: displayNameWithAvatar,
  },
  { name: 'Role', action: displayRole },
  { name: 'Year', path: 'promo' },
  { name: 'N°Group', path: 'groupe' },
  { name: 'Status', action: displayStatusBadge },
  //   { name: 'Last Connexion', path: 'lastConnexion' },
  { name: '', action: tableRowDropdown },
 ]

 return (
  <>
   <Layout>
    <Header />
    <div className="overview">
     <h2 className="main-heading">Overview</h2>
     <div className="overview__cards-container">
      <OverviewCard
       cardTitle="Total Patients"
       cardInfo={usersCount}
       cardGrowth={false}
       cardGrowthValue={23}
       cardIcon={faUsers}
      />
      <OverviewCard
       cardTitle="Total Employees"
       cardInfo={1100}
       cardGrowth={!false}
       cardGrowthValue={10.9}
       cardIcon={faUserTie}
      />
      <OverviewCard
       cardTitle="Total Students"
       cardInfo={1600}
       cardGrowth={!false}
       cardGrowthValue={22}
       cardIcon={faUserGraduate}
      />
      <OverviewCard
       cardTitle="Requests"
       cardInfo={232}
       cardGrowth={false}
       cardGrowthValue={34.5}
       cardIcon={faUserPlus}
      />
     </div>
    </div>
    <div className="users-list">
     <div className="users-list__header">
      <h2 className="main-heading">Users list</h2>
      <AwesomeButtonIcon
       text="Create new user"
       icon={faPlus}
       className="users-list__button"
       onClick={toggle}
      />
     </div>
     <div className="users-list__table">
      <AwesomeTableNew
       tableHead={tableColumns}
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

   <CreateUserModal buttonLabel="add" isOpen={createUserModal} toggle={toggle} />
   <ArchiveModal
    modal={archiveModal}
    toggle={toggleArchive}
    handleArchive={handleArchive}
    handleAnnuler={toggleAnnuler}
    user={buffer}
   />
  </>
 )
}

export default UsersManagement
