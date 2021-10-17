import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../store/actions/UserActions'
import { saveEditState } from '../store/actions/ProductActions'
import { useHistory } from "react-router";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const mapStateToProps = ( productState, userState ) => ({
  ...productState, ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getCart: (userId) => dispatch(fetchCart(userId)),
    saveProduct: (product) => dispatch(saveEditState(product))
  }
}

const Cart = (props) => {

  useEffect(() => {
    props.getCart(props.userState.user.id)
    getCartTotal(props.userState.cart)
  }, [])

  const [total, setTotal] = useState(0)

  const history = useHistory();

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

  const getCartTotal = (cart) => {
    let cartTotal = 0
    for (let i = 0; i < cart.length; i++){
      cartTotal += cart[i].price
    }
    setTotal(cartTotal)
  }
  
  return (
    <div>
      <h1>Cart</h1>
      {props.userState.cart ? (
        props.userState.cart.map((product) => (
          <Card sx={{ maxWidth: 350 }}>
            <a className = "product-link" onClick={(e) => saveProduct(e, product.title, product.description, product.price, product._id, "product-details")}>  
            <CardHeader
              title={product.title}
              subheader={"Price $" + product.price}
            /></a>
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
          </Card>
        ))
      ) : (
        null
      )}
      <h1>Cart Total: ${total}</h1>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)