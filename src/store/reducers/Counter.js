const initalState = {
    counter: 0
};

const countReducer = (state = initalState, action) => {
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
    }

    return state
};

export default countReducer;