import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../redux/phoneBook/phoneBookOperations'
import { getContacts } from '../redux/phoneBook/phoneBookSelectors'
import { TextField, Button } from '@material-ui/core'


export default function ContactForm() {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('+38')

    const handleNameChange = e => {
        setName(e.currentTarget.value)
    }
    const handleNumberChange = e => {
        setNumber(e.currentTarget.value)
    }
    const onExistingContactAlert = e => {
        e.preventDefault()
        setName('')
        setNumber('')
        alert(name + ' уже есть в списке контактов')
    }
    const getSomeOfName = (name) => {
        const optimizedContactName = name.toLowerCase();
        return contacts.some(({name}) => name.toLowerCase() === optimizedContactName)
     }
     
     const existingContact = getSomeOfName(name)
     
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
                            ? onExistingContactAlert 
                            : (e) => {
                                e.preventDefault()
                                dispatch(addContact(name, number))
                                setName('')
                                setNumber('')
                    }}
                >
                Создать
                </Button>
            </div>
            </form>
    )
}
