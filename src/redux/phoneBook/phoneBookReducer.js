import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import * as actions from './phoneBookActions'


const contacts = createReducer([], {
    [actions.fetchContactsSuccess]: (state, action) => action.payload,
    [actions.addContactSuccess]: (state, action) => [...state, action.payload],
    [actions.deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (state, action) => action.payload
})

const loading = createReducer(false, {
    [actions.addContactRequest]: () => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,
    [actions.deleteContactRequest]: () => true,
    [actions.deleteContactSuccess]: () => false,
    [actions.deleteContactError]: () => false,
})
export default combineReducers({
    contacts,
    filter,
    loading,
})
