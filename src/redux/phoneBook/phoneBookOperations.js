import axios from 'axios'
import * as actions from './phoneBookActions'
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/'

export const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest())
    axios.get('/contacts')
        .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)))
}
export const addContact = (name, number) => dispatch => {
    const contact = { name, number }
    
    dispatch(actions.addContactRequest())
    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)))
}

export const deleteContact = id => dispatch => {
    dispatch(actions.deleteContactRequest())
     axios.delete('/contacts/' + id)
        .then(() => dispatch(actions.deleteContactSuccess(id)))
        .catch(error => dispatch(actions.deleteContactError(error)))
}
export const editContact = (id, credentials) => dispatch => {
    dispatch(actions.editContactRequest())
     axios.patch('/contacts/' + id, credentials)
        .then(() => dispatch(actions.editContactSuccess(id, credentials)))
        .catch(error => dispatch(actions.editContactError(error)))
}