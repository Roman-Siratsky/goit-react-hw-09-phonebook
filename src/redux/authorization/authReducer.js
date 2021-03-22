import { combineReducers, createReducer } from '@reduxjs/toolkit'
import {
    registerRequest, registerSuccess,
    registerError, loginRequest,
    loginSuccess, loginError,
    getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError,
    logOutRequest,
    logOutSuccess, logOutError
} from './authActions'

const initialUserState = { name: null, email: null }

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logOutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, {payload}) => payload,
})

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logOutSuccess]: (_, __) => null,
})
const error = createReducer(null, {
    [registerError]: (_, action) => action.payload,
    [loginError]: (_, action) => action.payload,
    [logOutError]: (_, { payload }) => payload,
    [getCurrentUserError]: (_, {payload}) => payload
})
const isLoggedIn = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [logOutSuccess]: () => false,
})

export default combineReducers({
    user,
    token,
    isLoggedIn,
    error
})