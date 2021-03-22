import {createSelector} from '@reduxjs/toolkit'

export const getContacts = state => state.phoneBook.contacts

export const getFilter = state => state.phoneBook.filter

export const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(optimizedFilter));
})
// export const getVisibleContacts = state => {
//     const contacts = getContacts(state)
//     const filter = getFilter(state)
//     const optimizedFilter = filter.toLowerCase()
//     return contacts.filter(({name}) => name.toLowerCase().includes(optimizedFilter))
// }



