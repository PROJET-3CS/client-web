import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom'
import { getAuth } from '../store/selectors'

interface Props extends RouteProps {
 component: FC
}

const PublicRoute: FC<Props & RouteProps> = ({ component: Component, ...rest }) => {
 const { isAuthenticated } = useSelector(getAuth)
 const location = useLocation()

 return (
  <Route
   {...rest}
   // eslint-disable-next-line
   render={(props) => {
    // eslint-disable-next-line no-nested-ternary
    return isAuthenticated === true ? (
     <Component {...props} />
    ) : isAuthenticated === false ? (
     <Redirect to="/login" />
    ) : (
     <Redirect to={location.pathname} />
    )
   }}
  />
 )
}

export default PublicRoute
