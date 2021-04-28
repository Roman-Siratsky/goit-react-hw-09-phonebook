import React from 'react'
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'
import {getIsAuthorized} from '../redux/authorization/authSelectors'

const PrivateRoute = ({
  component: Component,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(getIsAuthorized)
  return (
  <Route
    {...routeProps}
    render={props => 
      isLoggedIn ? <Component {...props}/> : <Redirect to={redirectTo}/>
    }
  />
)
}
export default PrivateRoute