import React from 'react'
import { Toolbar, Typography, Button } from '@material-ui/core'
import { logOut } from '../redux/authorization/authOperations'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

const UserMenu = (props) => {
  return (
    <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Welcome, {props.userName}
            </Typography>
            <NavLink className='navLink' to='/login'>
              <Button
                variant="contained"
                color="primary"
          noWrap
          type='button'
                onClick={props.logOut}
              >
              Logout
            </Button>
            </NavLink>
    </Toolbar>
  )
}
const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
}) 

export default connect(null, mapDispatchToProps)(UserMenu)