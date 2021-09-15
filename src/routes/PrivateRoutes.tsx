/* eslint-disable arrow-body-style */
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import { getAuth } from '../store/selectors'
import { verify } from '../store/slices/auth'

interface Props extends RouteProps {
 component: FC
}

const PublicRoute: FC<Props & RouteProps> = ({ component: Component, ...rest }) => {
 const { isAuthenticated } = useSelector(getAuth)
 const location = useLocation()

 // ===========================================================================
 // Dispatch
 // ==========================================================================

 const dispatch = useDispatch()

 const _verify = () => {
  dispatch(verify())
 }

 useEffect(() => {
  _verify()
 }, [])

 return (
  <Route
   {...rest}
   // eslint-disable-next-line
   render={(props) =>
    // eslint-disable-next-line no-nested-ternary
    isAuthenticated === true ? (
     <Component {...props} />
    ) : isAuthenticated === false ? (
     <Redirect to="/login" />
    ) : (
     <Redirect to={location.pathname} />
    )
   }
  />
 )
}

export default PublicRoute
