import * as actionTypes from './actionTypes';

export const increaseIngredient = (ingType) => {
    return {
        type: actionTypes.INCREASE_INGREDIENT,
        ingType: ingType
    }
};

export const decreaseIngredient = (ingType) => {
    return {
        type: actionTypes.DECREASE_INGREDIENT,
        ingType: ingType
    }
};

export const userComingFromWhere = (location) => {
    return {
        type: actionTypes.USER_COMING_FROM_WHERE,
        location: location
    }
};

