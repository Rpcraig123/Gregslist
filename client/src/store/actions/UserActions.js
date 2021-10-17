import { LOGIN_USER, LOGIN_AUTH, LOGOUT_USER, LOGOUT_AUTH, CHECK_USER, CHECK_AUTH, GET_CART } from "../types";
import { getCart } from '../../services/ProductService'

export const userLogin = (data) => {
  return async (dispatch) => {
    try {
      const user = data
      dispatch({ type: LOGIN_USER, payload: user })
    } catch (error) {
      throw error
    }
  }
}

export const authLogin = (data) => {
  return async (dispatch) => {
    try {
      const authenticated = true
      dispatch({ type: LOGIN_AUTH, payload: authenticated })
    } catch (error) {
      throw error
    }
  }
}

export const userLogout = (data) => {
  return async (dispatch) => {
    try {
      const user = null
      dispatch({ type: LOGOUT_USER, payload: user })
    } catch (error) {
      throw error
    }
  }
}

export const authLogout = (data) => {
  return async (dispatch) => {
    try {
      const authenticated = false
      dispatch({ type: LOGOUT_AUTH, payload: authenticated })
    } catch (error) {
      throw error
    }
  }
}

export const userCheck = (data) => {
  return async (dispatch) => {
    try {
      const user = data
      dispatch({ type: CHECK_USER, payload: user })
    } catch (error) {
      throw error
    }
  }
}

export const authCheck = (data) => {
  return async (dispatch) => {
    try {
      const authenticated = true
      dispatch({ type: CHECK_AUTH, payload: authenticated })
    } catch (error) {
      throw error
    }
  }
}

export const fetchCart = (userId) => {
  return async (dispatch) => {
    try {
      const cart = await getCart(userId)
      dispatch({ type: GET_CART, payload: cart })
    } catch (error) {
      throw error
    }
  }
}