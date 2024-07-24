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

    const { product, quantity } = action.payload;
    const existingItemIndex = state.products.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If product already exists, update quantity
      const updatedItems = [...state.products];
      updatedItems[existingItemIndex].quantity += quantity;
      return {
        ...state,
        products: updatedItems,
      };
    } else {
      return {
        ...state,
        products: [...state.products, {...product, quantity}]
      }
    }

    case ActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: Number(product.quantity) + 1 }
            : product
        ),
      };
    case ActionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: (Number(product.quantity) - 1) }
            : product
        ),
      };
      
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

