const initialState = {cards: []};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BAG':
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        default:
            return state;
    }
};

export default cardReducer;