import { combineReducers } from 'redux';
import { cartReducer } from './reducers';
import { paymentReducer } from './reducers';
import { addressReducer } from './reducers'

// Root Reducer is a combination of all the reducers
// We could do this in an index.js folder in reducers but this is quicker
const rootReducer = combineReducers({
    cart: cartReducer,
    payment: paymentReducer,
    address: addressReducer,
  });
  
  export default rootReducer;