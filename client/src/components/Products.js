import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// import { useHistory } from "react-router";
import { fetchProducts, remProduct, editProduct } from '../store/actions/ProductActions'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getProducts: () => dispatch(fetchProducts()),
    delProduct: (id) => dispatch(remProduct(id)),
    // upProduct: (product, id) => dispatch(editProduct(product, id))
  }
}

const Products = (props) => {
  
  const [request, changeIt] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  // return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  // );

  // const history = useHistory();
  
  useEffect(() => {
    props.getProducts()
  }, [request])

  const deleteProduct = (e, id) => {
    e.preventDefault();
    props.delProduct(id);
    changeIt(true)
  };

  const updateProduct = (e, title, description, price, id) => {
    e.preventDefault();
    let productData = {
      title,
      description,
      price
    };
    // history.push("/sell");
    // props.upProduct(productData, id);
    // changeIt(true)
  };

  return (
    <div>
      {props.productState.products.products ? (
        props.productState.products.products.map((product) => (
          <Card sx={{ maxWidth: 350 }} key={product._id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={product.title}
              subheader={"Price $" + product.price}
            />
            {/* <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {"Description: " + product.description}
              </Typography>
              
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
              <Button size="small" color="error" variant="outlined" onClick={(e) => deleteProduct(e, product._id)}>Delete Item</Button>
              <Button size="small" color="warning" variant="outlined" onClick={(e) => updateProduct(e, product.title, product.description, product.price, product._id)}>Update Item</Button>
              <Button onClick={handleOpen}>Update Item</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <h2 id="parent-modal-title">Product Info</h2>
                  <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
                    {/* <form> */}
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
                        // label="Price"
                        placeholder="Price"
                        multiline
                        InputProps={{
                          startAdornment: <InputAdornment position="start">USD</InputAdornment>,
                        }}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                      />
                      <Button type='submit' variant="outlined" size="large">Post Product</Button>
                    {/* </form> */}
                  </Box>
                  {/* <ChildModal /> */}
                </Box>
              </Modal>
            </CardActions>
          </Card>
        ))
      ) : (
        null
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)