import React, { useState } from 'react'
import { connect } from 'react-redux'
import { SignInUser } from '../services/Auth'
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { userLogin, authLogin } from '../store/actions/UserActions'

const mapStateToProps = ( userState ) => ({
  ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    setUser: (payload) => dispatch(userLogin(payload)),
    toggleAuthenticated: (payload) => dispatch(authLogin(payload))
  }
}

const SignIn = (props) => {

  const [formValues, setFormValues] = useState({ username: '', password: '' })
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '',password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    history.push('/')
  }

  return (
    <div className="signin-sect">
      <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
        <h1>SIGN IN</h1>
        <TextField
          id="outlined-textarea"
          name="username"
          label="username"
          placeholder="username"
          multiline
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          name="password"
          label="password"
          placeholder="password"
          multiline
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined" size="large" disabled={!formValues.username || !formValues.password}>Sign In</Button>
      </Box>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)