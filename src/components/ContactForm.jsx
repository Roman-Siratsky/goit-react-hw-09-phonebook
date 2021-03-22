import React, { Component } from 'react'
import {connect } from 'react-redux'
import { addContact } from '../redux/phoneBook/phoneBookOperations'
import { getContacts } from '../redux/phoneBook/phoneBookSelectors'
import { TextField, Button, Input } from '@material-ui/core'

class ContactForm extends Component{
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
        const { onAddNewContact } = this.props
        const { name, number } = this.state
        const existingContact = this.getSomeOfName(name)
    return (
        <form className='main-form'>
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
                                onAddNewContact(name, number)
                                this.setState({name: '', number: '+38'})
                    }}
                >
                Создать
                </Button>
            </div>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    onAddNewContact: (name, number) => dispatch(addContact(name, number)),
})
const mapStateToProps = (state) => ({
    contacts: getContacts(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);