import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router'
import AwesomeButton from '../components/AwesomeButton/AwesomeButton'
import { getAuth } from '../store/selectors'
import { activate } from '../store/slices/auth'

const UserConfirmed: FC = () => {
 // ===========================================================================
 // Selectors
 // ===========================================================================
 const { error } = useSelector(getAuth)
 const { token } = useParams<{ token: string }>()

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const history = useHistory()
 const dispatch = useDispatch()

 const _activate = (payload: string) => {
  dispatch(activate(payload))
 }

 // ===========================================================================
 // Handlers
 // ===========================================================================

 const handleAction = () => {
  history.push('/passwordReset')
 }

 useEffect(() => {
  if (token) _activate(token)
 }, [])

 if (error) {
  return <Redirect to="/401" />
 }

 return (
  <div className="user_confirmation">
   <img
    alt="404 illustration"
    src="/img/user_confirmation.svg"
    className="user_confirmation-illustration2"
   />
   <div className="user_confirmation-content">
    <span className="user_confirmation-title">Congratulations!</span>
    <p className="user_confirmation-text">Your account have been successfully confirmed!</p>
    <AwesomeButton onClick={handleAction} className="user_confirmation-button">
     Change my password
    </AwesomeButton>
   </div>
  </div>
 )
}

export default UserConfirmed
