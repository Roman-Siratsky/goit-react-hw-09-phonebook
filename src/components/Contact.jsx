import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import Modal from './Modal'
import EditContactForm from './EditContactForm'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}))

const Contact = ({ contact, index, onDeleteContact, onEditContact }) => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const toggleModal = (id) => {
    setModal(!modal)
    setCurrentId(id)
  }
  
  const getTelephoneForm = (num) => {
    const numArray = num.split('')
    return numArray.map((digit, index) => {
      if (index === 3) return `(${digit}`
      if (index === 6) return `)${digit}`
      return digit
    }).join('')
  }
  return (
          <li className='contact-item' key={contact.id}>
        <Card className={classes.card}>
          <CardMedia>
            <PhoneIcon/>
          </CardMedia>
        <CardContent>
          <Typography align='center' variant='h6'>{contact.name.toUpperCase() + " : " + getTelephoneForm(contact.number)}
          </Typography>
        </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type='button'
              onClick={() => onDeleteContact(contact.id)}
            >
            Delete
            </Button>
          <Button
              variant="contained"
              color="primary"
            type='button'
            onClick={() => toggleModal(contact.id)}
            >
            Edit
            </Button>
          {modal && <Modal toggleModal={toggleModal}>
            <EditContactForm toggleModal={toggleModal} contactId={currentId}/>
          </Modal>}
          </CardActions>
            </Card>
          </li>
  )
}
export default Contact