import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser, faUsers, faPlus } from '@fortawesome/free-solid-svg-icons'
import Layout from '../layouts/Layout'
import OverviewCard from '../../components/OverviewCard'
import Header from '../../components/Header'
import AwesomeButton from '../../components/AwesomeButton/AwesomeButton'
import AwesomeTable from '../../components/AwesomeTable/AwesomeTable'

const UsersManagement: FC = () => {



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
     <AwesomeTable />
    </div>
   </div>
  </Layout>
 )
}

export default UsersManagement
