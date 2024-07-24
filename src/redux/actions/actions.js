// Creating action types
export const ActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    ADD_PAYMENT_DETAILS: 'ADD_PAYMENT_DETAILS',
    ADD_ADDRESS_DETAILS: 'ADD_ADDRESS_DETAILS',
};


//Creating the three actions

//The first action to add to cart
export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    }
};

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