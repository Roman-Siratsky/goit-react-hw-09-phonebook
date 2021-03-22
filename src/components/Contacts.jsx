import ContactForm from './ContactForm'
import Filter from './Filter'
import ContactList from './ContactList'
import {Typography} from '@material-ui/core'

const Contacts = () => {
  return (
    <div className='container'>
        <div><ContactForm /></div>
          <div className='contacts'>
            <Typography align='center' variant='h6'>Contacts</Typography>
            <Filter/>
          <ul>
            <ContactList/>
         </ul>
      </div>
    </div>
  )
}

export default Contacts;