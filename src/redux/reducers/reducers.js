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
    // case ActionTypes.ADD_TO_CART:
    //   return {
    //     products: [...state.products, action.payload]
    //   };
    case ActionTypes.ADD_TO_CART:
      const { product, quantity } = action.payload;
      const existingItemIndex = state.products.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingItemIndex].quantity += quantity;
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        return {
          ...state,
          products: [...state.products, { ...product, quantity }],
        };
      };
        case ActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };
        case ActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload && product.quantity > 1
                        ? { ...product, quantity: product.quantity - 1 }
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

