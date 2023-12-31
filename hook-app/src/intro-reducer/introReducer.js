console.log("Hola mundo")

const initialState = [
    {
        id: 1,
        todo: 'todo 1',
        done: false
    }
]

const todoReducer = (state = initialState, action) =>{

    if(!action){
        return state
    }

    if (action.type === 'add'){
        return [...state, action.payload]
    }
}


let todos = todoReducer()

console.log(todos)


const addTodoAction = {
    type: 'add',
    payload: [
        {
            id: 1,
            todo: 'todo 2',
            done: false
        }
    ]
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)
