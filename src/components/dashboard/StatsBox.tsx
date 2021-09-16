import React, { FC } from 'react'

const Statsbox: FC<{ title: string , url: string , number: number | string }> = ({ title,url,number }) => {
 return (
  <div className="dashboard-stats-boxe">
   <img src={url} alt="patient" />
   <p className='dashboard-stats-boxe-title'>{title}</p>
   <p className='dashboard-stats-boxe-number'>{number}</p>
  </div>
 )
}

export default Statsbox
