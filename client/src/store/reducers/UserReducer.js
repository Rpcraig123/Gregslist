import { LOGIN_USER, LOGIN_AUTH, LOGOUT_USER, LOGOUT_AUTH, CHECK_USER, CHECK_AUTH, GET_CART } from "../types";

const defaultState = {
  user: null,
  authenticated: false,
  cart: []
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload  }
    case LOGIN_AUTH:
      return { ...state, authenticated: action.payload  }
    case LOGOUT_USER:
      return { ...state, user: action.payload }
    case LOGOUT_AUTH:
      return { ...state, authenticated: action.payload }
    case CHECK_USER:
      return { ...state, user: action.payload }
    case CHECK_AUTH:
      return { ...state, authenticated: action.payload }
    case GET_CART:
      return { ...state, cart: action.payload }
    default:
      return { ...state }
  }
}

export default userReducer;