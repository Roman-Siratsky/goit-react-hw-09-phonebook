// import * as types from './phoneBookTypes'
import shortId from 'shortid'
import { createAction } from '@reduxjs/toolkit'
// import axios from 'axios'
export const fetchContactsRequest = createAction('phoneBook/fetchContactsRequest')
export const fetchContactsSuccess = createAction('phoneBook/fetchContactsSuccess')
export const fetchContactsError = createAction('phoneBook/fetchContactsError')

export const addContactRequest = createAction('phoneBook/addContactRequest')
export const addContactSuccess = createAction('phoneBook/addContactSuccess')
export const addContactError = createAction('phoneBook/addContactError')
  
export const deleteContactRequest = createAction('phoneBook/deleteContactRequest')
export const deleteContactSuccess = createAction('phoneBook/deleteContactSuccess')
export const deleteContactError = createAction('phoneBook/deleteContactError')
  
export const editContactRequest = createAction('phoneBook/editContactRequest')
export const editContactSuccess = createAction('phoneBook/editContactSuccess')
export const editContactError = createAction('phoneBook/editContactError')
  

export const changeFilter = createAction('phoneBook/filter')
export const makeAlert = createAction('phoneBook/alert')

