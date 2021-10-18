import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { addProduct } from '../store/actions/ProductActions'
import Container from '@mui/material/Container';

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    pushProduct: (newProduct) => {
      dispatch(addProduct(newProduct))
    }
  }
}

const SellPage = (props) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newProduct = {
      title,
      description,
      price
    };
    props.pushProduct(newProduct);
    history.push("/");
  };
  
  return (
    <div>
      <Container fixed>
        <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
          <div className="flex-container-form">
            <TextField
              id="outlined-textarea"
              label="Product Name"
              placeholder="Product Name"
              multiline
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="Description"
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id="outlined-textarea"
              placeholder="Price"
              multiline
              InputProps={{
                startAdornment: <InputAdornment position="start">USD</InputAdornment>,
              }}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <Button type='submit' variant="outlined" size="large" style={{ width: '225px' }}>Post Product</Button>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SellPage)