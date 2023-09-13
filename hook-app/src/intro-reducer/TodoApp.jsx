import {useEffect, useReducer} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList} from "./TodoList.jsx";
import {TodoForm} from "./TodoForm.jsx";
import {useTodo} from "../hook/useTodo.js";

export const TodoApp = () => {

    const {state, handleNewTodo, handleDeleteTodo, handleToggle} = useTodo([])

    return (
        <>
            <h1>
                Todo App: {state.length},
                <small> restantes: {state.filter(todo=>todo.done === false).length}</small>
            </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        items={state}
                        onDelete={handleDeleteTodo}
                        onToggleTodo={handleToggle}
                    ></TodoList>
                </div>

                <div className="col-5">
                    <TodoForm onFormSubmit={(item) => {
                        handleNewTodo(item)
                    }}></TodoForm>
                </div>
            </div>

        </>
    )
}
