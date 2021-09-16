import React, { FC } from 'react'

const ReportItem: FC<{imgPath: string, title: string}> = ({imgPath, title}) => {
 return (
  <div className="dashboard__reports-item">
   <img className="dashboard__reports-item--img" src={`${imgPath}`} alt="cought" />
   <span className="dashboard__reports-item--title">{title}</span>
   <span className="dashboard__reports-item--value">345</span>
  </div>
 )
}

export default ReportItem
