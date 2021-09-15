/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from 'react'
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
import { fetchUsers } from '../../store/slices/usersManagement'
import { getUsersManagement } from '../../store/selectors'
import { User } from '../../helpers/types'
import ArchiveUserModal from './ArchiveUserModal'
import { getRole } from '../../helpers/api'
import AwesomeButtonIcon from '../../components/AwesomeButton/AwesomeButtonIcon'

const UsersManagement: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { users, usersCount, totalPages } = useSelector(getUsersManagement)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 const _fetchUsers = (payload: any) => {
  dispatch(fetchUsers(payload))
 }
 //  ==============================================================================
 //  State
 //  ==============================================================================
 const [createUserModal, setCreateUserModal] = useState(false)
 const [archiveModal, setArchiveModal] = useState(false)
 const [buffer, setBuffer] = useState(null)

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

 // ===========================================================================
 // Table properties
 // ===========================================================================

 const displayRole = (item: User) => {
  return getRole(item.role)
 }

 const displayStatusBadge = (item: User) => {
  const { status } = item

  return <span className={`clinity__table-badge ${status === 'actif' ? 'clinity__table-badge--actif' : '' }${status === 'pending' ? 'clinity__table-badge--pending' : '' }${status === 'archived' ? 'clinity__table-badge--archived' : '' }`}>{status}</span>
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
      <DropdownItem
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
      </DropdownItem>
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
     </div>
    </div>
   </Layout>

   <CreateUserModal buttonLabel="add" isOpen={createUserModal} toggle={toggle} />
   <ArchiveUserModal
    buttonLabel="archive user"
    isOpen={archiveModal}
    toggle={toggleArchive}
    user={buffer}
   />
  </>
 )
}

export default UsersManagement