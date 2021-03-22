import { TextField } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import { changeFilter } from '../redux/phoneBook/phoneBookActions'
import { getFilter } from '../redux/phoneBook/phoneBookSelectors'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    padding: '5px'
  }
}))

const Filter = (props) => {
  window.props = props
  const classes = useStyles()
  return (
    <TextField
      className={classes.textField}
      name='filter'
      type='text'
      placeholder='Search contacts'
      value={props.value}
      variant="outlined"
      autoComplete='off'
      onChange={props.handleFilterChange}
      />
    )
}

const mapStateToProps = (state) => ({
  value: getFilter(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleFilterChange: (e) => dispatch(changeFilter(e.currentTarget.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);