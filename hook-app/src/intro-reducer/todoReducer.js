export const todoReducer  = (initialState = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload]

        case 'DELETE':
            return initialState.filter(todo => todo.id !== action.payload.id)

        case 'TOGGLE':
            console.log("TOGGLE", initialState)
            return initialState.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                else{
                    return todo
                }
            })


        default:
            return initialState
    }
}
