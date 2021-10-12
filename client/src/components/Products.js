import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/actions/ProductActions'

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
          <h1 key={product._id}>Product Name: {product.title}</h1>
        ))
      ) : (
        null
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)