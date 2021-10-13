import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/ProductActions'
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

const mapStateToProps = ( productState ) => ({
  ...productState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

const Products = (props) => {
  
  useEffect(() => {
    props.getProducts()
  }, [])

  return (
    <div>
      {props.productState.products.products ? (
        props.productState.products.products.map((product) => (
          <Card sx={{ maxWidth: 350 }}>
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
            </CardActions>
          </Card>
          // <h1 key={product._id}>Product Name: {product.title}</h1>
        ))
      ) : (
        null
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)