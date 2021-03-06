import { GetProducts, PostProducts, DeleteProduct, UpdateProduct, getComments, postComment, addProductCart } from '../../services/ProductService'
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SAVE_PRODUCT, ADD_COMMENT, PRODUCT_COMMENTS } from "../types";

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

export const fetchComments = (id) => {
  return async (dispatch) => {
    try {
      const comments = await getComments(id)
      dispatch({ type: PRODUCT_COMMENTS, payload: comments })
    } catch (error) {
      throw error
    }
  }
}

export const addComment = (data, id) => {
  return async (dispatch) => {
    try {
      const comment = await postComment(data, id)
      dispatch({ type: ADD_COMMENT, payload: comment })
    } catch (error) {
      throw error
    }
  }
}

export const addToCart = (data, id) => {
  return async (dispatch) => {
    try {
      const product = await addProductCart(data, id)
    } catch (error) {
      throw error
    }
  }
}