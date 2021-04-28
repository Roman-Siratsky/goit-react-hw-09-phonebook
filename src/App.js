import React, {useEffect} from 'react'
import { Component } from 'react';
import Contacts from './components/Contacts'
import './sass/main.scss'
import Header from './components/Header'
import { Switch } from 'react-router';
import Register from './components/Register'
import Login from './components/Login'
import {getCurrentUser} from './redux/authorization/authOperations'
import { useDispatch } from 'react-redux';
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  return (
    <>
        <Header />
        <div className='whole_app'>
          <Switch>
          <PublicRoute
            exact path='/'
            component={Home}
          />
          <PrivateRoute
            path='/contacts'
            component={Contacts}
            redirectTo='/login'
          />
          <PublicRoute
            path='/register'
            component={Register}
            restricted redirectTo='/contacts'
          />
          <PublicRoute
            path='/login'
            component={Login}
            restricted
            redirectTo='contacts'
          />
        </Switch>
        </div>
      </>
  )
}
export default App;


// const mapDispatchToProps = (dispatch) => ({
//   onGetCurrentUser: () => dispatch(getCurrentUser())
// })
// export default connect(null, mapDispatchToProps)(App);
