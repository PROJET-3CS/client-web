import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { getAuth } from '../store/selectors'

interface Props extends RouteProps {
 component: FC
}

const PublicRoute: FC<Props & RouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(getAuth)

<<<<<<< HEAD
  return (
    <Route
      {...rest}
      // eslint-disable-next-line
   render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
=======
 return (
  <Route
   {...rest}
   // eslint-disable-next-line
   render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
  />
 )
>>>>>>> 1a05ac864fd6def133a9848daf86e8d848d7a005
}

export default PublicRoute
