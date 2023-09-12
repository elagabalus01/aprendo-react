import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoForm} from "./TodoForm.jsx";

export const TodoApp = ()=>{


    const initialState = [
    ]


    const init = ()=>{
        return JSON.parse(localStorage.getItem('TODOS')) ||  []
    }

    const [state, dispatch]= useReducer(todoReducer, initialState, init)


    useEffect(()=>{
        console.log(state)
        localStorage.setItem('TODOS', JSON.stringify(state))
    }, [state])

    const handleNewTodo = (newTodo)=>{
        const action = {
            type: "ADD",
            payload: newTodo
        }
        dispatch(action)
    }

    let items = [
        {
            id: 1,
            description: "todo1",
            done: false
        },
        {
            id: 2,
            description: "todo1",
            done: false
        },
        {
            id: 3,
            description: "todo1",
            done: false
        }
    ]

    return (
        <>
            <h1>
                Todo App: 10,
                <small> restantes: 1</small>
            </h1>
                <hr/>
                <div className="row">
                    <div className="col-7">
                        <TodoList items={state}></TodoList>
                    </div>

                <div className="col-5">
                    <TodoForm onFormSubmit={(item)=>{handleNewTodo(item)}}></TodoForm>
                </div>
            </div>

        </>
    )
}
