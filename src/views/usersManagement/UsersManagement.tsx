import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons'
import Layout from '../layouts/Layout'
import OverviewCard from '../../components/OverviewCard'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeTable from '../../components/AwesomeTable/AwesomeTable'
import AwesomeTableNew from '../../components/AwesomeTable/AwesomeTableNew'

const UsersManagement: FC = () => {
 const displayNameWithAvatar = (item: any) => {
  const { name, url } = item

  return (
   <>
    <img className="clinity__table-avatar" alt="profle pic" src="/img/profile.jpg" /> {name}
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
  { name: 'Last Connexion', path: 'lastConnexion' },
 ]

 const users = [
  {
   name: 'Mahdaoui Feddag',
   role: 'Student',
   year: '3CS',
   group: 'Groupe 7',
   status: 'activated',
   lastConnexion: '21/3/2008',
  },
  {
   name: 'Mahdaoui Feddag',
   role: 'Student',
   year: '3CS',
   group: 'Groupe 7',
   status: 'activated',
   lastConnexion: '21/3/2008',
  },
  {
   name: 'Mahdaoui Feddag',
   role: 'Student',
   year: '3CS',
   group: 'Groupe 7',
   status: 'activated',
   lastConnexion: '21/3/2008',
  },
  {
   name: 'Mahdaoui Feddag',
   role: 'Student',
   year: '3CS',
   group: 'Groupe 7',
   status: 'activated',
   lastConnexion: '21/3/2008',
  },
  {
   name: 'Mahdaoui Feddag',
   role: 'Student',
   year: '3CS',
   group: 'Groupe 7',
   status: 'activated',
   lastConnexion: '21/3/2008',
  },
 ]

 return (
  <Layout>
   <Header />
   <div className="overview">
    <h2 className="main-heading">Overview</h2>
    <div className="overview__cards-container">
     <OverviewCard
      cardTitle="Total Patients"
      cardInfo={1600}
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
     <AwesomeButton className="users-list__button">
      <FontAwesomeIcon icon={faPlus} /> Create New User
     </AwesomeButton>
    </div>
    <div className="users-list__table">
     <AwesomeTableNew tableHead={tableColumns} tableBody={users} />
     {/* <AwesomeTable /> */}
    </div>
   </div>
  </Layout>
 )
}

export default UsersManagement
