import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography} from '@material-ui/core'
import ContactsIcon from '@material-ui/icons/Contacts';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu'
import {getIsAuthorized, getUserName} from '../redux/authorization/authSelectors'
import AuthMenu from './AuthMenu'
import routes from '../routes'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}))


const Header = () => {
  const isLoggedIn = useSelector(getIsAuthorized)
  const userName = useSelector(getUserName)
  const classes = useStyles()
    return (
        <>
        <CssBaseline />
        <AppBar className={classes.appBar} position="relative"> 
          <Toolbar>
            <ContactsIcon />
            <NavLink className='navLink' to={`${routes.gh}`}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Home
            </Typography>
            </NavLink>
            {isLoggedIn && <NavLink className='navLink' to={`${routes.gh}/contacts`}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              PhoneBook
            </Typography>
            </NavLink>}
          </Toolbar>
          {isLoggedIn ? <UserMenu userName={userName}/> : <AuthMenu/>}
          </AppBar>
        </>
    )
}
export default Header
// const mapStateToProps = (state) => ({
//   isLoggedIn: getIsAuthorized(state),
//   userName: getUserName(state)
// })
// export default connect(mapStateToProps)(Header)