import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    userComingFromWhere: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.LOG_OUT:
            return {
                ...state,
                token: null,
                userId: null
            }
        case actionTypes.USER_COMING_FROM_WHERE:
            return {
                ...state,
                userComingFromWhere: action.location
            }
        default:
            return state
    }
};

export default authReducer;