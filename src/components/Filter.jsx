import { TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { changeFilter } from '../redux/phoneBook/phoneBookActions'
import { getFilter } from '../redux/phoneBook/phoneBookSelectors'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    padding: '5px'
  }
}))

const Filter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    <TextField
      className={classes.textField}
      name='filter'
      type='text'
      placeholder='Search contacts'
      value={value}
      variant="outlined"
      autoComplete='off'
      onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
      />
    )
}
export default Filter;

