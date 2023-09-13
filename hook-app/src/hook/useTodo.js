import {useEffect, useReducer} from "react";
import {todoReducer} from "../intro-reducer/todoReducer.js";

export const useTodo = (initialState = [])=>{

    const init = () => {
        return JSON.parse(localStorage.getItem('TODOS')) || []
    }

    const [state, dispatch] = useReducer(todoReducer, initialState, init)


    useEffect(() => {
        console.log(state)
        localStorage.setItem('TODOS', JSON.stringify(state))
    }, [state])

    const handleNewTodo = (newTodo) => {
        const action = {
            type: "ADD",
            payload: newTodo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (deleteTodo)=>{
        const action = {
            type: "DELETE",
            payload: deleteTodo
        }

        dispatch(action)
    }

    const handleToggle = (todoItem)=>{
        console.log("TOGGLE", todoItem)
        const action = {
            type: "TOGGLE",
            payload: todoItem
        }

        dispatch(action)
    }

    return {
        state,
        handleNewTodo,
        handleDeleteTodo,
        handleToggle

    }

}
