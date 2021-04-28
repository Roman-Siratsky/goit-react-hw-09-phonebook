import React from 'react'
import { Toolbar, Typography, Button } from '@material-ui/core'
import { logOut } from '../redux/authorization/authOperations'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import routes from '../routes'
const UserMenu = (props) => {
  const dispatch = useDispatch()
  return (
    <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Welcome, {props.userName}
            </Typography>
            <NavLink className='navLink' to={`${routes.gh}/login`}>
              <Button
                variant="contained"
                color="primary"
                noWrap
                type='button'
                onClick={() => dispatch(logOut())}
              >
              Logout
            </Button>
            </NavLink>
    </Toolbar>
  )
}
export default UserMenu