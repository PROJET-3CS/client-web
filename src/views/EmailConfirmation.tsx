import React, { FC } from 'react'
import AwesomeButton from '../components/AwesomeButton/AwesomeButton'

const EmailConfirmation: FC = () => {
 return (
  <div className="user_confirmation">
   <img alt="404 illustration" src="img/email_confirmation.svg" className="user_confirmation-illustration1"/>
   <div className="user_confirmation-content">
    <span className="user_confirmation-title">Check Your Email</span>
    <p className="user_confirmation-text">You need to confirm your email to confirm your account</p>
    <AwesomeButton className="user_confirmation-button">Go Home Page</AwesomeButton>
   </div>
  </div>
 )
}

export default EmailConfirmation
