import React, { FC } from 'react'

const Cover: FC = () => {
 return (
  <div className="dashboard-cover">
   <div className="dashboard-cover-txt">
    <p>Welcome,<span className="dashboard-cover-txt-name">Dr.Yacine</span></p>
    <p className='dashboard-cover-txt-sub'>Have a nice day at work</p>
   </div>
   <img src="/img/dashboard-doc.svg" alt="userpic" className="dashboard-cover-img" />
  </div>
 )
}

export default Cover
