import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router";
import { fetchProducts, remProduct, saveEditState, addToCart } from '../store/actions/ProductActions'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const mapStateToProps = ( productState, userState ) => ({
  ...productState, ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getProducts: () => dispatch(fetchProducts()),
    delProduct: (id) => dispatch(remProduct(id)),
    saveProduct: (product) => dispatch(saveEditState(product)),
    addCart: (user, productId) => dispatch(addToCart(user, productId))
  }
}

const Products = (props) => {
  
  const [request, changeIt] = useState(false)

  const history = useHistory();
  
  useEffect(() => {
    props.getProducts()
    changeIt(false)
  }, [request])

  const deleteProduct = (e, id) => {
    e.preventDefault();
    props.delProduct(id);
    changeIt(true)
  };

  const saveProduct = (e, title, description, price, id, link) => {
    e.preventDefault();
    let productData = {
      id,
      title,
      description,
      price
    };
    history.push(`/${link}`);
    props.saveProduct(productData);
  };

  const addCartProduct = (e, id) => {
    e.preventDefault();
    const userId = props.userState.user.id
    let userData = {
      userId
    }
    props.addCart(userData, id);
    alert('item added to cart')
  }

  return (
    <div className="product-cards">
      <Container fixed>
        <h1>Products</h1>
        <div className="flex-container">
          {props.productState.products.products ? (
            props.productState.products.products.map((product) => (
              <Card sx={{ maxWidth: 300 }} key={product._id}>
                <a className = "product-link" onClick={(e) => saveProduct(e, product.title, product.description, product.price, product._id, "product-details")}>  
                <CardHeader
                  title={product.title}
                  subheader={"Price $" + product.price}
                /></a>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {"Description: " + product.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon onClick={(e) => addCartProduct(e, product._id)}/>
                  </IconButton>
                  <Button size="small" color="error" variant="outlined" onClick={(e) => deleteProduct(e, product._id)}>Delete Item</Button>
                  <Button size="small" color="warning" variant="outlined" onClick={(e) => saveProduct(e, product.title, product.description, product.price, product._id, "update")}>Update Item</Button>
                </CardActions>
              </Card>
            ))
          ) : (
            null
          )}
        </div>
      </Container>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)