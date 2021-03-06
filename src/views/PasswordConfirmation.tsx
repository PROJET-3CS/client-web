import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { getAuth } from '../store/selectors'
import { reset } from '../store/slices/resetPass'

const PasswordConfirmation: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================

 const { user } = useSelector(getAuth)

 // ===========================================================================
 // Dispatch
 // ==========================================================================
 const dispatch = useDispatch()

 // ===========================================================================
 // Handlers
 // ===========================================================================
 const _resetPassword = () => {
  dispatch(reset(user.email))
 }

 return (
  <div className="user_confirmation">
   <img
    alt="404 illustration"
    src="img/email_confirmation.svg"
    className="user_confirmation-illustration1"
   />
   <div className="user_confirmation-content">
    <span className="user_confirmation-title">Check Your Email</span>
    <p className="user_confirmation-text">
     click here to get the reset <link rel="stylesheet" href="" />
    </p>
    <Button onClick={_resetPassword} className="user_confirmation-button">
     Send Email Confirmation
    </Button>
   </div>
  </div>
 )
}

export default PasswordConfirmation
