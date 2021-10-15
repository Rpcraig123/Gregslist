import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, SAVE_PRODUCT, ADD_COMMENT, PRODUCT_COMMENTS } from "../types";

const defaultState = {
  products: [],
  productData: {
    id: '',
    title: '',
    description: '',
    price: 0
  },
  deletedProduct: null,
  comments: [],
  comment: ''
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
    case ADD_COMMENT:
      return { ...state, comment: action.payload }
    case PRODUCT_COMMENTS:
      return { ...state, comments: action.payload }
    default:
      return { ...state }
  }
}

export default productReducer;