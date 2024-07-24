// Creating action types
export const ActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
    ADD_CARD: 'ADD_CARD',
    ADD_ADDRESS: 'ADD_ADDRESS',
};


//Creating the three actions

//The first action to add to cart
export const addToCart = (product, quantity) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {product, quantity}
    }
};

//Incrementing and decrementing quantity
export const incrementQuantity = (productId) => ({
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: productId
  });
  
  export const decrementQuantity = (productId) => ({
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: productId
  });
  

export const addCard = (card) => {
    return {
        type: ActionTypes.ADD_CARD,
        payload: card
    }
}

export const addAddress = (address) => {
    return {
        type: ActionTypes.ADD_ADDRESS,
        payload: address,
    }
}