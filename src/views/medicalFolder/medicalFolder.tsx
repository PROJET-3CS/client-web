import React, { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCog, faBell } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layouts/Layout'

const medicalFolder: FC = () => {
 return (
  <Layout>
   <div className="header">
    <form action="#" className="search">
     <input type="text" className="search__input" placeholder="Search..." />
     <button type="button" className="search__button">
      <FontAwesomeIcon icon={faSearch} />
     </button>
    </form>
    <nav className="user-nav">
     <div className="user-nav__icon-box">
      <FontAwesomeIcon className="user-nav__icon" icon={faCog} />
     </div>
     <div className="user-nav__icon-box">
      <FontAwesomeIcon className="user-nav__icon" icon={faBell} />
      <span className="user-nav__notification">{}</span>
     </div>
     <div className="user-nav__user">
      <div className="user-nav__user-info">
       <span className="user-nav__user-info--name">Yacine Kharoubi</span>
       <span className="user-nav__user-info--link">View profile</span>
      </div>
      <img src="img/user.png" alt="User pic" className="user-nav__user-photo" />
     </div>
    </nav>
   </div>
  </Layout>
 )
}

export default medicalFolder
