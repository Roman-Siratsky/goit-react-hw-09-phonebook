import React, {useEffect} from 'react'
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
import routes from './routes'

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
            exact path={`${routes.gh}/`}
            component={Home}
          />
          <PrivateRoute
            path={`${routes.gh}/contacts`}
            component={Contacts}
            redirectTo={`${routes.gh}/login`}
          />
          <PublicRoute
            path={`${routes.gh}/register`}
            component={Register}
            restricted
            redirectTo={`${routes.gh}/contacts`}
          />
          <PublicRoute
            path={`${routes.gh}/login`}
            component={Login}
            restricted
            redirectTo={`${routes.gh}/contacts`}
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
