import { ActionTypes } from "../actions/actions";

// Initial State
const initialCartState = {
  products: []
};


const initialPaymentState = {
  cards: []
};

const initialAddressState = {
  address: []
};

// Cart Reducer
export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        products: [...state.products, action.payload]
      }
    default:
      return state;
  }
};

// Payment Reducer
export const paymentReducer = (state = initialPaymentState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PAYMENT_DETAILS:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    default:
      return state;
  }
};

// Address Reducer
export const addressReducer = (state = initialAddressState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ADDRESS_DETAILS:
      return {
        ...state,
        address: [...state.address, action.payload]
      };
    default:
      return state;
  }
};

