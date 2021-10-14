import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router";
import { editProduct } from '../store/actions/ProductActions'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    updateProduct: (product, id) => dispatch(editProduct(product, id))
  }
}

const UpdatePage = (props) => {

  const [title, setTitle] = useState(props.productState.productData.title);
  const [description, setDescription] = useState(props.productState.productData.description);
  const [price, setPrice] = useState(props.productState.productData.price);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let productData = {
      title,
      description,
      price
    };
    props.updateProduct(productData, props.productState.productData.id);
    history.push("/");
  };
  
  return (
    <div>
      <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
        <TextField
          id="outlined-textarea"
          label="Product Name"
          placeholder="Product Name"
          defaultValue={props.productState.productData.title}
          multiline
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          label="Description"
          defaultValue={props.productState.productData.description}
          multiline
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-textarea"
          placeholder="Price"
          defaultValue={props.productState.productData.price}
          multiline
          InputProps={{
            startAdornment: <InputAdornment position="start">USD</InputAdornment>,
          }}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <Button type='submit' variant="outlined" color="warning" size="large">Update Product</Button>
      </Box>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePage)