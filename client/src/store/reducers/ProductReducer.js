import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../types";

const defaultState = {
  products: [],
  newProduct: {
    title: '',
    description: '',
    price: 0
  },
  deletedProduct: null
}

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    case ADD_PRODUCT:
      return { ...state, newProduct: action.payload }
    case DELETE_PRODUCT:
      return { ...state, productId: action.payload }
    default:
      return { ...state }
  }
}

export default productReducer;