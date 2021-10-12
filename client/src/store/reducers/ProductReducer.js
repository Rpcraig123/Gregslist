import { GET_PRODUCTS } from "../types";

const defaultState = {
  products: []
  // productsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    // case PRODUCT_LOADING_TYPE:
    //   return { ...state, productsLoading: action.payload }
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return { ...state }
  }
}

export default productReducer;