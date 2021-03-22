import {
    registerRequest, registerSuccess,
    registerError, loginRequest,
    loginSuccess, loginError,
    getCurrentUserRequest, getCurrentUserSuccess,
    getCurrentUserError, logOutRequest,
    logOutSuccess, logOutError
} from './authActions'
import axios from 'axios'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/'

const token = {
    setToken(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unSetToken() {
        axios.defaults.headers.common.Authorization = ``
    }
}

export const register = credentials => async dispatch => {
    dispatch(registerRequest())
    try {
        const { data } = await axios.post('users/signup', credentials)
        token.setToken(data.token)
        dispatch(registerSuccess(data))
    } catch(error) {
        dispatch(registerError(error.message))
    }
}
export const login = credentials => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post('users/login', credentials)
        token.setToken(data.token)
        dispatch(loginSuccess(data))
    } catch(error) {
        dispatch(loginError(error.message))
    }  
}
export const logOut = () => async dispatch => {
    dispatch(logOutRequest())
    try {
        await axios.post('users/logout')
        token.unSetToken()
        dispatch(logOutSuccess())
    } catch(error) {
        dispatch(logOutError(error.message))
    }  
}
export const getCurrentUser = () => async (dispatch, getState) => {
    const {
        authorization: {token: persistedToken},
    } = getState()

    if (!persistedToken) {
        return
    }
    token.setToken(persistedToken)
    dispatch(getCurrentUserRequest())
    try {
        const { data } = await axios.get('users/current')
        dispatch(getCurrentUserSuccess(data))
    } catch(error) {
        dispatch(getCurrentUserError(error.message))
    }
}
