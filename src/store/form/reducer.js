const defaultState = {
    inputText: 'any text'
}

export const inputTextReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_TEXT':
            return {
                ...state,
                inputText: action.payload
            }
        default:
            return state
    }
}