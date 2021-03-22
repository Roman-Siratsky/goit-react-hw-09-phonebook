import { Toolbar, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
const AuthMenu = () => {
  return (
    <Toolbar>
            <NavLink className='navLink' to='/register'>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Register
            </Typography>
            </NavLink>
            <NavLink className='navLink' to='/login'>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Login
            </Typography>
            </NavLink>
    </Toolbar>
  )
}

export default AuthMenu