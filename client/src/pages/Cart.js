import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../store/actions/UserActions'

const mapStateToProps = ( productState, userState ) => ({
  ...productState, ...userState
})

const mapDispatchToProps = (dispatch) => {  
  return {
    getCart: (userId) => dispatch(fetchCart(userId))
  }
}

const Cart = (props) => {

  useEffect(() => {
    props.getCart(props.userState.user.id)
  }, [])
  
  return (
    <div>
      Cart
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)