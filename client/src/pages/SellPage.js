import React from 'react'
import { connect } from 'react-redux'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addProduct } from '../store/actions/ProductActions'

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    pushProduct: () => dispatch(addProduct())
  }
}

const testButton = (e) => {
  e.preventDefault()
  console.log('test')
}

const SellPage = (props) => {
  
  return (
    <div>
      <Box onSubmit={(e) => props.pushProduct(e)} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
        {/* <form> */}
          <TextField
            id="outlined-textarea"
            label="Product Name"
            placeholder="Product Name"
            multiline
          />
          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="Description"
            multiline
          />
          <TextField
            id="outlined-textarea"
            // label="Price"
            placeholder="Price"
            multiline
            InputProps={{
              startAdornment: <InputAdornment position="start">USD</InputAdornment>,
            }}
          />
          <Button type='submit' variant="outlined" size="large">Post Product</Button>
        {/* </form> */}
      </Box>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SellPage)