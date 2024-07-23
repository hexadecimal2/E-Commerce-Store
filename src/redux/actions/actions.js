export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_PAYMENT_DETAILS = 'ADD_PAYMENT_DETAILS';
export const ADD_ADDRESS_DETAILS = 'ADD_ADDRESS_DETAILS';

//Creating the three actions

//The first action to add to cart
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const addCard = (card) => {
    return {
        type: 'ADD_CARD',
        payload: card
    }
}

export const addAddress = (address) => {
    return {
        type: 'ADD_ADDRESS',
        payload: address,
    }
}