import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useHistory } from "react-router";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const iState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const history = useHistory();

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(iState)
    props.history.push('/')
    alert('Account has been created! Sign in to proceed!')
  }

  return (
    <div className="register-sect">
      <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
        <h1>CREATE AN ACCOUNT</h1>
          <TextField
            id="outlined-textarea"
            name="First Name"
            label="First Name"
            placeholder="First Name"
            multiline
            onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            name="Last Name"
            label="Last Name"
            placeholder="Last Name"
            multiline
            onChange={handleChange}
          />
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
            name="email"
            label="email"
            placeholder="email"
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
          <TextField
            id="outlined-textarea"
            name="confirm password"
            label="confirm password"
            placeholder="confirm password"
            multiline
            onChange={handleChange}
          />
          <Button type="submit" variant="outlined" size="large" disabled={!formValues.email || (!formValues.password || formValues.confirmPassword !== formValues.password)}>Post Product</Button>
      </Box>
    </div>
  )
}