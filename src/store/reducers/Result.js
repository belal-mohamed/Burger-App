const initalState = {
    result: []
};

const resultReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'STORE_RESULT':
            return {
                ...state,
                result: state.result.concat(action.counter)
            }
    }

    return state
};

export default resultReducer;