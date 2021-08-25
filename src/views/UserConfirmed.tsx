import React, { FC } from 'react'
import AwesomeButton from '../components/AwesomeButton/AwesomeButton'

const UserConfirmed: FC = () => {
 return (
  <div className="user_confirmation">
   <img
    alt="404 illustration"
    src="img/user_confirmation.svg"
    className="user_confirmation-illustration2"
   />
   <div className="user_confirmation-content">
    <span className="user_confirmation-title">Congratulations!</span>
    <p className="user_confirmation-text">Your account have been successfully confirmed!</p>
    <AwesomeButton className="user_confirmation-button">Change my password</AwesomeButton>
   </div>
  </div>
 )
}

export default UserConfirmed
