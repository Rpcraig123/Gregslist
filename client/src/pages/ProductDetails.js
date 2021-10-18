import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchComments, addComment, addToCart } from '../store/actions/ProductActions'
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
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

const mapStateToProps = ( productState, userState ) => ({
  ...productState, ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getComments: (id) => dispatch(fetchComments(id)),
    postComment: (data, id) => dispatch(addComment(data, id)),
    addCart: (user, productId) => dispatch(addToCart(user, productId))
  }
}

const ProductDetails = (props) => {

  const history = useHistory();

  const deleteProduct = (e, id) => {
    e.preventDefault();
    props.delProductDet(id);
  };
  
  const saveProduct = (e, title, description, price, id, link) => {
    e.preventDefault();
    let productData = {
      id,
      title,
      description,
      price
    };
    history.push(`/product-details`);
    props.saveProductDet(productData);
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

  const [description, setFormValues] = useState('')
  const [request, changeIt] = useState(false)

  const handleChange = (e) => {
    setFormValues({ ...description, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = props.productState.productData.id
    props.postComment(description, id)
    changeIt(true)
    setFormValues('')
  }

  useEffect(() => {
    props.getComments(props.productState.productData.id)
    changeIt(false)
  }, [request])
  
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
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {"Description: " + props.productState.productData.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon onClick={(e) => addCartProduct(e, props.productState.productData.id)}/>
          </IconButton>
        </CardActions>
      </Card>
      <Box onSubmit={handleSubmit} component="form" sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} noValidate autoComplete="off" >
        <TextField label="Leave a comment" variant="filled" name="description" color="secondary" focused onChange={handleChange}/>
        <Button size="small" type="submit" color="secondary" variant="outlined">Post Comment</Button>
      </Box>
      <h2>Comments</h2>
      {props.productState.comments ?
        props.productState.comments.map((comment, index) => (
          <Card sx={{ maxWidth: '400px' }}>
            <CardContent>
              <Typography variant="body2">
                <p key={index}>{comment}</p>
              </Typography>
            </CardContent>
          </Card>
        )) : null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)