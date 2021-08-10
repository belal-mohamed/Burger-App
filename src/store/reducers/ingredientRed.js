import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        Salad:0,
        Bacon:0,
        Cheese:0,
        Meat:0
    },
    totalPrice: 0,
    apiFaild: false,
    apiLoading: true,
    apiSuccessed: false
};

const price = {
    Salad: 2,
    Bacon: 5,
    Cheese: 3,
    Meat: 7
};


const ingredientReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREASE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: ++state.ingredients[action.ingType]
                },
                totalPrice: state.totalPrice + price[action.ingType]
            }
        case actionTypes.DECREASE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: --state.ingredients[action.ingType]
                },
                totalPrice: state.totalPrice - price[action.ingType]
            }
        default:
            return state
    }
};

export default ingredientReducer;