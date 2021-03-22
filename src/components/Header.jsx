import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography} from '@material-ui/core'
import ContactsIcon from '@material-ui/icons/Contacts';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { connect } from 'react-redux';
import UserMenu from './UserMenu'
import {getIsAuthorized, getUserName} from '../redux/authorization/authSelectors'
import AuthMenu from './AuthMenu'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
}))


const Header = (props) => {
  const classes = useStyles()
    return (
        <>
        <CssBaseline />
        <AppBar className={classes.appBar} position="relative"> 
          <Toolbar>
            <ContactsIcon />
            <NavLink className='navLink' to='/'>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              Home
            </Typography>
            </NavLink>
            {props.isLoggedIn && <NavLink className='navLink' to='/contacts'>
              <Typography
                variant="h6"
                color="inherit"
                noWrap>
              PhoneBook
            </Typography>
            </NavLink>}
          </Toolbar>
          {props.isLoggedIn ? <UserMenu userName={props.userName}/> : <AuthMenu/>}
          </AppBar>
        </>
    )
}

const mapStateToProps = (state) => ({
  isLoggedIn: getIsAuthorized(state),
  userName: getUserName(state)
})
export default connect(mapStateToProps)(Header)