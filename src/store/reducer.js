import { act } from "react-dom/test-utils";

const initalState = {
    counter: 0,
    result: []
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'DEC':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'ADD_FIVE':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB_FIVE':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat(state.counter)
            }
    }

    return state
};

export default reducer;