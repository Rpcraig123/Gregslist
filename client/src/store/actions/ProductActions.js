import { GetProducts, PostProducts, DeleteProduct, UpdateProduct } from '../../services/ProductService'
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SAVE_PRODUCT } from "../types";

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

export const remProduct = (id) => {
  return async (dispatch) => {
    try {
      const product = await DeleteProduct(id)
      dispatch({ type: DELETE_PRODUCT, payload: product })
    } catch (error) {
      throw error
    }
  }
}

export const editProduct = (product, id) => {
  return async (dispatch) => {
    try {
      const updated_product = await UpdateProduct(product, id)
      dispatch({ type: EDIT_PRODUCT, payload: updated_product })
    } catch (error) {
      throw error
    }
  }
}

export const saveEditState = (product, id) => {
  return async (dispatch) => {
    try {
      const productData = product
      dispatch({ type: SAVE_PRODUCT, payload: productData })
    } catch (error) {
      throw error
    }
  }
}