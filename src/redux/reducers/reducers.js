import { ActionTypes } from "../actions/actions";

// Initial State
const initialCartState = {
  products: []
};


const initialCardState = {
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
export const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CARD:
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
    case ActionTypes.ADD_ADDRESS:
      return {
        ...state,
        address: [...state.address, action.payload]
      };
    default:
      return state;
  }
};

