import React from 'react'
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'
import {getIsAuthorized} from '../redux/authorization/authSelectors'

const PublicRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsAuthorized)
  return (
  <Route
    {...routeProps}
    render={props => 
      isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
          <Component {...props}/>
      )
    }
  />
)}
export default PublicRoute;