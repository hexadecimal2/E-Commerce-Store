import { combineReducers } from 'redux';
import { ADD_TO_CART, ADD_PAYMENT_DETAILS, ADD_ADDRESS_DETAILS } from '../actions/actions';

// Initial State
const initialCartState = [];
const initialPaymentState = {};
const initialAddressState = {};

// Cart Reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Payment Reducer
const paymentReducer = (state = initialPaymentState, action) => {
  switch (action.type) {
    case ADD_PAYMENT_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Address Reducer
const addressReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case ADD_ADDRESS_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Root Reducer is a combination of all the reducers
// We could do this in an index.js folder in reducers but this is quicker
const rootReducer = combineReducers({
    cart: cartReducer,
    payment: paymentReducer,
    address: addressReducer,
  });
  
  export default rootReducer;