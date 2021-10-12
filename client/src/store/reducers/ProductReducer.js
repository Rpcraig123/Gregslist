import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS } from "../types";

const defaultState = {
  products: []
}

const productReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state;
  }
}

export default productReducer;