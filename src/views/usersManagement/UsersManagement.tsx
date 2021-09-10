import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers, faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { useHistory } from 'react-router'

import Layout from '../layouts/Layout'
import OverviewCard from '../../components/OverviewCard'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeTableNew from '../../components/AwesomeTable/AwesomeTableNew'
import CreateUserModal from './CreateUserModal'
import { fetchUsers } from '../../store/slices/usersManagement'
import { getUsersManagement } from '../../store/selectors'
import { User } from '../../helpers/types'
import ArchiveUserModal from './ArchiveUserModal'

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
 const [page, setPage] = useState(0)

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

 const handlePageChange = async (selectedPage: { selected: number }) => {
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
  let history = useHistory()

  return (
   <>
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
     <DropdownToggle tag="span" data-toggle="dropdown">
      <FontAwesomeIcon icon={faEllipsisH} />
     </DropdownToggle>
     <DropdownMenu>
      <DropdownItem
       onClick={() => {
        toggleArchive(item)
       }}
      >
       Archive
      </DropdownItem>
      <DropdownItem
       onClick={() => {
        history.push(`/folder/${item.id}`)
       }}
      >
       View profile
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
  { name: 'Role', path: 'role' },
  { name: 'Year', path: 'year' },
  { name: 'N°Group', path: 'group' },
  { name: 'Status', path: 'status' },
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
       cardGrowth={!false}
       cardGrowthValue={22}
       cardIcon={faUser}
      />
      <OverviewCard
       cardTitle="Total Patients"
       cardInfo={1600}
       cardGrowth={false}
       cardGrowthValue={22}
       cardIcon={faUser}
      />
      <OverviewCard
       cardTitle="Total Patients"
       cardInfo={1600}
       cardGrowth={!false}
       cardGrowthValue={22}
       cardIcon={faUsers}
      />
      <OverviewCard
       cardTitle="Total Patients"
       cardInfo={1600}
       cardGrowth={false}
       cardGrowthValue={22}
       cardIcon={faUser}
      />
     </div>
    </div>
    <div className="users-list">
     <div className="users-list__header">
      <h2 className="main-heading">Users list</h2>
      <AwesomeButton className="users-list__button" onClick={toggle}>
       <FontAwesomeIcon icon={faPlus} /> Create New User
      </AwesomeButton>
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
