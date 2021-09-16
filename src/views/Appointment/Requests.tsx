import React, { FC } from 'react'
import AwesomeTable from '../../components/AwesomeTable/AwesomeTable'
import Header from '../../components/Header'
import Layout from '../layouts/Layout'

const Requests: FC = () => {
 return (
  <Layout>
   <Header />
   <h2 className="main-heading">Appointments Requests</h2>
   <div className="examinations__container">
    <AwesomeTable />
   </div>
  </Layout>
 )
}

export default Requests