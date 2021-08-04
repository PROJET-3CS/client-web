import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Layout: FC = ({children}) => {
 return (
  <div className="content">
   <nav className="sidebar">
    <div className="sidebar__logo">
     <Link to="/">
      <img className="sidebar__logo-icon" src="/img/logo.svg" alt="home icon" />
     </Link>
    </div>
    <ul className="side-nav">
     <li className="side-nav__item side-nav__item--active">
      <Link to="/dashboard" className="side-nav__link">
       <img className="side-nav__icon" src="/img/home.svg" alt="home icon" />
      </Link>
     </li>

     <li className="side-nav__item">
      <Link to="/folders" className="side-nav__link">
       <img className="side-nav__icon" src="/img/folders.svg" alt="folder icon" />
      </Link>
     </li>

     <li className="side-nav__item">
      <Link to="/appointments" className="side-nav__link">
       <img className="side-nav__icon" src="/img/appointment.svg" alt="Appointment icon" />
      </Link>
     </li>

     <li className="side-nav__item">
      <Link to="/medical" className="side-nav__link">
       <img className="side-nav__icon" src="/img/medicalExam.svg" alt="Medical Exam icon" />
      </Link>
     </li>

     <li className="side-nav__item">
      <Link to="/chat" className="side-nav__link">
       <img className="side-nav__icon" src="/img/chat.svg" alt="chat icon" />
      </Link>
     </li>

     <li className="side-nav__item">
      <Link to="/setting" className="side-nav__link">
       <img className="side-nav__icon" src="/img/setting.svg" alt="Setting icon" />
      </Link>
     </li>
    </ul>

    <div className="legal">
     <Link to="/login" className="side-nav__link">
      <img className="side-nav__icon" src="/img/power.svg" alt="Power icon" />
     </Link>
    </div>
   </nav>
   <main className="main-view">
    {children}
   </main>
  </div>
 )
}

export default Layout
