import { GET_PRODUCTS, ADD_PRODUCT } from "../types";

const defaultState = {
  products: [],
  newProduct: {
    title: ``,
    description: ``,
    price: null
  }
  // productsLoading: '' // Should be type enum('Loading', 'Loaded', 'Inactive')
}

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    // case PRODUCT_LOADING_TYPE:
    //   return { ...state, productsLoading: action.payload }
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    case ADD_PRODUCT:
      return { ...state, newProduct: action.payload }
    default:
      return { ...state }
  }
}

export default productReducer;