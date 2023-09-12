export const todoReducer  = (initialState, action) => {
    switch (action.type) {
        case 'ACTION1':
            throw new Error("Action ABC no esta implementada")

        default:
            return initialState
    }
}
