import React from 'react'
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'
import {getIsAuthorized} from '../redux/authorization/authSelectors'

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => 
      isLoggedIn ? <Component {...props}/> : <Redirect to={redirectTo}/>
    }
  />
)
const mapStateToProps = state => ({
    isLoggedIn: getIsAuthorized(state)
})
export default connect(mapStateToProps)(PrivateRoute);