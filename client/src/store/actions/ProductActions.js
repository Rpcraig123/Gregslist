import { GetProducts } from '../../services/ProductService'
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS } from "../types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = await GetProducts()
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      })
    } catch (error) {
      throw error
    }
  }
}