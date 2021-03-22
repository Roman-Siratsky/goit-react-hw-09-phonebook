import React from 'react'
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'
import {getIsAuthorized} from '../redux/authorization/authSelectors'

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
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
)
const mapStateToProps = state => ({
    isLoggedIn: getIsAuthorized(state)
})
export default connect(mapStateToProps)(PublicRoute);