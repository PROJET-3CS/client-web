import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import AwesomeTable from '../components/AwesomeTable/AwesomeTable'
import ReportItem from '../components/dashboard/ReportItem'
import WelcomeSection from '../components/dashboard/welcomeSection'
import Layout from './layouts/Layout'
import SecondayHeader from './SecondayHeader'

const Dashboard: FC = () => {

 return (
  <Layout>
   <div className="dashboard__view">
    <div className="dashboard__main">
     <SecondayHeader />
     <WelcomeSection />
     <div className="dashboard__reports">
      <div className="dashboard__reports-header">
       <span className="dashboard__reports-header--title">Weekly Reports</span>
       <span className="dashboard__reports-header--last">Last week</span>
      </div>
      <div className="dashboard__reports-list">
       <ReportItem imgPath="/img/cought.svg" title="N° Patients" />
       <ReportItem imgPath="/img/appointement.svg" title="Appointments" />
       <ReportItem imgPath="/img/conversation.svg" title="Messages" />
       <ReportItem imgPath="/img/people.svg" title="N° Groups" />
       <div className="dashboard__reports-item--add">
        <FontAwesomeIcon icon={faPlus} />
       </div>
      </div>
      <div className="dashboard__appointements">
       <span className="dashboard__appointements-header">My appointments</span>
       <AwesomeTable />
      </div>
     </div>
    </div>
   </div>
  </Layout>
 )
}

export default Dashboard
