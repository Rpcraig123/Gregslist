import React from 'react'
import { connect } from 'react-redux'
// import { remProduct, saveEditState } from '../store/actions/ProductActions'
// import { useHistory } from "react-router";
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
// import Button from '@mui/material/Button';

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    // delProductDet: (id) => dispatch(remProduct(id)),
    // saveProductDet: (product) => dispatch(saveEditState(product))
  }
}

const ProductDetails = (props) => {

  // const history = useHistory();

  // const deleteProduct = (e, id) => {
  //   e.preventDefault();
  //   props.delProductDet(id);
  // };
  
  // const saveProduct = (e, title, description, price, id, link) => {
  //   e.preventDefault();
  //   let productData = {
  //     id,
  //     title,
  //     description,
  //     price
  //   };
  //   history.push(`/product-details`);
  //   props.saveProductDet(productData);
  // };
  
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={props.productState.productData.title}
          subheader={"Price $" + props.productState.productData.price}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {"Description: " + props.productState.productData.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          {/* <Button size="small" color="error" variant="outlined" onClick={(e) => deleteProduct(e, props.productState.productData._id)}>Delete Item</Button>
          <Button size="small" color="warning" variant="outlined" onClick={(e) => saveProduct(e, props.productState.productData.title, props.productState.productData.description, props.productState.productData.price, props.productState.productData._id)}>Update Item</Button> */}
        </CardActions>
      </Card>
      <h2>Comments</h2>
      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)