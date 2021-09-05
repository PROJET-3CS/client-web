import React, { FC } from 'react'
import '../../styles/main.scss'
import Layout from '../layouts/Layout'
import LeftContainer from './LeftConatiner'
import RightContainer from './RightContainer'

const Profile: FC = () => {
 return (
  <Layout>
   <div className="doctor-container">
    <LeftContainer />
    <RightContainer />
   </div>
  </Layout>
 )
}

export default Profile
