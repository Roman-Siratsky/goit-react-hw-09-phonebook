import React, { useState } from 'react'
import {TextField, Button} from '@material-ui/core'
import { connect } from 'react-redux'
import {register, login} from '../redux/authorization/authOperations' 
//ProezdPoMostu
//Proezd1010
const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        const { value } = e.currentTarget;
        setName(value)
    }
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
        props.registerUser({name, email, password})
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
      <div className='register-container'>
          <form className='register-form'>
            <div className='register-item'>
                <TextField
                    name='name'
                    label="Name"
                    variant="outlined"
                    value={name}
                    type='text'
                    onChange={handleNameChange}
                />
            </div>
            <div className='register-item'>
                <TextField
                    label="Email"
                    name='email'
                    variant="outlined"
                    type='email'
                    value={email}
                        onChange={handleEmailChange}
                        autoComplete='off'
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
                        autoComplete='off'
                />
            </div>
            <div className='register-item'>
                <Button
                    variant="contained"
                    color="primary"
                        type='submit'
                        onClick={handleSubmit}
                >
                Зарегистрироваться
                </Button>
            </div>
        </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
    registerUser: (data) => dispatch(register(data)) 
})

export default connect(null, mapDispatchToProps)(Register)