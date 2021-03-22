import React, { Component } from 'react'
import {connect } from 'react-redux'
import { editContact, fetchContacts } from '../redux/phoneBook/phoneBookOperations'
import { getContacts } from '../redux/phoneBook/phoneBookSelectors'
import { TextField, Button, Input } from '@material-ui/core'

class EditContactForm extends Component{
    state = {
        name: '',
        number: '+38'
    }
    handleNameChange = (event) => {
        const {name, value} = event.currentTarget
        this.setState({ [name]: value })
    }
    handleNumberChange = (event) => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }
    onExistingContactAlert = (event) => {
        event.preventDefault()
        this.setState({name: '', number: '+38'})
        alert(this.state.name + ' уже есть в списке контактов')
    }

    getSomeOfName = (name) => {
        const optimizedContactName = name.toLowerCase();
        return this.props.contacts.some(({name}) => name.toLowerCase() === optimizedContactName)
      }
    
    render() {
        const {handleNameChange, handleNumberChange} = this
        const { editContact, contactId } = this.props
        const { name, number } = this.state
        const existingContact = this.getSomeOfName(name)
    return (
        <form className='edit-form'>
            <div>
                <TextField
                    name='name'
                    label="Name"
                    variant="outlined"
                    value={name}
                    type='text'
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <TextField
                    label="Number"
                    name='number'
                    variant="outlined"
                    type='tel'
                    value={number}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    type='submit'
                    disabled={(name.length && number.length === 13 && Number(number)) 
                        ? false
                        : true
                    }
                        onClick={existingContact
                            ? this.onExistingContactAlert 
                            : (e) => {
                                e.preventDefault()
                                editContact(contactId, { name, number})
                                this.setState({ name: '', number: '+38' })
                                this.props.toggleModal()
                                this.props.fetchContacts()
                    }}
                >
                Изменить
                </Button>
            </div>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    editContact: (id, credentials) => dispatch(editContact(id, credentials)),
    fetchContacts: () => dispatch(fetchContacts())
})
const mapStateToProps = (state) => ({
    contacts: getContacts(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContactForm);