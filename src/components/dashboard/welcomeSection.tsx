import React, { FC } from 'react'

const welcomeSection: FC = () => {
 return (
  <div className="dashboard__welcome">
   <div className="dashboard__welcome-content">
    <span className="dashboard__welcome-title">
     Welcome, <span className="dashboard__welcome-title--doctor">Dr. Yacine</span>
    </span>
    <span className="dashboard__welcome-text">Have a nice day at work</span>
   </div>
   <img className="dashboard__welcome-img" src="/img/welcome.svg" alt="welcome" />
  </div>
 )
}

export default welcomeSection
