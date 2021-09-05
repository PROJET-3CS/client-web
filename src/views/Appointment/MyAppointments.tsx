import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import AwesomeTable from '../../components/AwesomeTable/AwesomeTable'
import Header from '../../components/Header'
import { getAuth } from '../../store/selectors'
import Layout from '../layouts/Layout'

const MyAppointments: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { user } = useSelector(getAuth)

 // ===========================================================================
 // Hooks
 // ===========================================================================
 if (user.role !== 1) {
  return <Redirect to="/404" />
 }

 return (
  <Layout>
   <Header />
   <h2 className="main-heading">My Appointments</h2>
   <AwesomeTable />
  </Layout>
 )
}

export default MyAppointments
