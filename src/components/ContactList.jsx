import React, { Component } from 'react';
import {connect} from 'react-redux'
import { deleteContact, editContact, fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import shortId from 'shortid'
import {getVisibleContacts} from '../redux/phoneBook/phoneBookSelectors'
import { Typography } from '@material-ui/core';
import Contact from './Contact'



class ContactList extends Component {

  state = {
    name: '',
    number: '+38',
  }
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
      return (
          this.props.contacts.length
          ? this.props.contacts.map((contact, index) => {
            return (
              <Contact
                contact={contact}
                index={index}
                onDeleteContact={this.props.onDeleteContact}
                // onEditContact={this.props.onEditContact}
              />
            )
          })
          : <li className='no_contacts' key={shortId.generate()}>
              <Typography align='center' variant='h3'>No saved contacts yet</Typography>
            </li>
    )
    }
}


const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state)
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
  // onEditContact: (id) => dispatch(editContact(id)),
  fetchContacts: () => dispatch(fetchContacts())
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);