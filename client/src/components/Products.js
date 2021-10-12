import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/ProductActions'

const mapStateToProps = ({ productState }) => {
  return { productState }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

const Products = (props) => {
  
  useEffect(() => {
    props.getProducts()
    console.log(props.productState.products)
  }, [])

  return (
    <div>
      {props.productState.products.products.length ? (
        props.productState.products.products.map((product) => (
          <h1 key={product._id}>Product Name: {product.title}</h1>
        ))
      ) : (
        <h3>No Products</h3>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)