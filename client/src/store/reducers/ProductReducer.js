import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, SAVE_PRODUCT } from "../types";

const defaultState = {
  products: [],
  productData: {
    id: '',
    title: '',
    description: '',
    price: 0
  },
  deletedProduct: null,
}

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    case ADD_PRODUCT:
      return { ...state, productData: action.payload }
    case DELETE_PRODUCT:
      return { ...state, productId: action.payload }
    case SAVE_PRODUCT:
      return { ...state, productData: action.payload }
    default:
      return { ...state }
  }
}

export default productReducer;