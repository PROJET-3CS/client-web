import React, { FC } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Layout from './Layout'

const ExamLayout: FC = ({ children }) => {
 const { pathname } = useLocation()
 const { id } = useParams<{ id: string }>()

 const hash = pathname.split('/')[3]

 return (
  <Layout page="exam">
   <div className="content">
    <nav className="exambar">
     <h2 className="main-header">Examination</h2>
     <ul className="exam-nav">
      <li className={`exam-nav__item ${hash === 'overview' ? 'exam-nav__item--active' : ''}`}>
       <Link to={`/examination/${id}`} className="exam-nav__link">
        <span>Patient Overview</span>
       </Link>
      </li>
      <li
       className={`exam-nav__item ${
        hash === 'interrogation' || !hash ? 'exam-nav__item--active' : ''
       }`}
      >
       <Link to={`/examination/${id}/interrogation`} className="exam-nav__link">
        <span>Patient Interrogation</span>
       </Link>
      </li>
      <li className={`exam-nav__item ${hash === 'condition' ? 'exam-nav__item--active' : ''}`}>
       <Link to={`/examination/${id}/condition`} className="exam-nav__link">
        <span>Patient Condition</span>
       </Link>
      </li>
      <li className={`exam-nav__item ${hash === 'diagnostic' ? 'exam-nav__item--active' : ''}`}>
       <Link to={`/examination/${id}/diagnostic`} className="exam-nav__link">
        <span>Illness diagnostic</span>
       </Link>
      </li>
      <li className={`exam-nav__item ${hash === 'conclusion' ? 'exam-nav__item--active' : ''}`}>
       <Link to={`/examination/${id}/conclusion`} className="exam-nav__link">
        <span>Conclusion</span>
       </Link>
      </li>
     </ul>
    </nav>
    <main className="exam-view">{children}</main>
   </div>
  </Layout>
 )
}

export default ExamLayout
