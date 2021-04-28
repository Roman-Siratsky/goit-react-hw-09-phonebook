import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import {login} from '../redux/authorization/authOperations'
import { useDispatch } from 'react-redux'

const Login = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        const { value } = e.currentTarget;
        setEmail(value)
    }
    const handlePasswordChange = (e) => {
        const { value } = e.currentTarget;
        setPassword(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
        setEmail('')
        setPassword('')
    }
    return (
      <div className='register-container'>
          <form className='register-form'>
            <div className='register-item'>
                <TextField
                    label="Email"
                    name='email'
                    variant="outlined"
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                />
          </div>
          <div className='register-item'>
                <TextField
                    label="Password"
                    name='password'
                    variant="outlined"
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div className='register-item'>
                <Button
                    variant="contained"
                    color="primary"
                        type='submit'
                        onClick={handleSubmit}
                >
                Войти
                </Button>
            </div>
        </form>
    </div>
  )
}
export default Login