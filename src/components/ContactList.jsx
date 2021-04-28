import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import shortId from 'shortid'
import {getVisibleContacts} from '../redux/phoneBook/phoneBookSelectors'
import { Typography } from '@material-ui/core';
import Contact from './Contact'



export default function ContactList() {
  const dispatch = useDispatch()
  const contacts = useSelector(getVisibleContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

      return (
          contacts.length
          ? contacts.map((contact, index) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                index={index}
              />
            )
          })
          : <li className='no_contacts' key={shortId.generate()}>
              <Typography align='center' variant='h3'>No saved contacts yet</Typography>
            </li>
    )
}


