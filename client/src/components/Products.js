import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts, remProduct } from '../store/actions/ProductActions'
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

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getProducts: () => dispatch(fetchProducts()),
    delProduct: (id) => dispatch(remProduct(id))
  }
}

const Products = (props) => {
  
  useEffect(() => {
    props.getProducts()
  }, [])

  const deleteProduct = (e, id) => {
    e.preventDefault();
    props.delProduct(id);
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
              <Button size="small" color="warning" variant="outlined">Update Item</Button>
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