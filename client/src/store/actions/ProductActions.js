import { GetProducts, PostProducts } from '../../services/ProductService'
import { GET_PRODUCTS, ADD_PRODUCT } from "../types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = await GetProducts()
      dispatch({ type: GET_PRODUCTS, payload: products })
    } catch (error) {
      throw error
    }
  }
}

export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const product = await PostProducts(newProduct)
      dispatch({ type: ADD_PRODUCT, payload: product })
    } catch (error) {
      throw error
    }
  }
}