import { faBell, faCog, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Search from '../../components/Search'
import '../../styles/main.scss'
import Layout from '../layouts/Layout'
import ChattList from './ChattList'

const Chatt: FC = () => {
 return (
  <Layout>
   <div className="chatt-header">
    <FontAwesomeIcon icon={faCommentDots} className="chatt-header-icon" />
    <p className="chatt-header-title">messages</p>
    <div className="chatt-header-search">
     <Search />
    </div>
    <FontAwesomeIcon className="chatt-header-icon2" icon={faCog} />
    <FontAwesomeIcon className="chatt-header-icon2" icon={faBell} />
    <img src="/img/userRect.png" alt="userpic" className="chatt-header-pic" />
   </div>
   <ChattList />
  </Layout>
 )
}

export default Chatt
