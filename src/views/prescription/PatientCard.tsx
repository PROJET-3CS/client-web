import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { getAuth } from '../../store/selectors'



const PatientCard: FC = () => {

 const { user } = useSelector(getAuth)

 return (
  <div className="prescription-userprofile">
   <img alt="user pic" className="prescription-userprofile-img" src="/img/userRect.png" />
   <span className="prescription-userprofile-name ">{`${user.firstname} ${user.lastname}`}</span>
   <span className="folder__item-profile--email">{`${user.email}`}</span>
  </div>
 )
}

export default PatientCard
