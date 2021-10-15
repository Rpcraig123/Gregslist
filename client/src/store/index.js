import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ProductReducer from './reducers/ProductReducer'
import userReducer from './reducers/UserReducer'

const store = createStore(
  combineReducers({
    productState: ProductReducer,
    userState: userReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store