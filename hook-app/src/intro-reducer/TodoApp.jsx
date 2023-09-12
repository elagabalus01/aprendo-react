import {useReducer} from "react";
import {todoReducer} from "./todoReducer.js";

export const TodoApp = ()=>{


    const initialState = [
        {
            id: new Date().getTime(),
            description: "prueba1 ",
            done: false
        }

    ]

    const [state, dispatch]= useReducer(todoReducer, initialState)

    return (
        <>
            <h1>Todo App</h1>
                <hr/>
                <div className="row">
                    <div className="col-5">
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>

                        </ul>
                    </div>

                <div className="col-9">
                    <h4>Agregar TODO</h4>
                    <input
                        type="text"
                        className = "form-control"
                    />
                    <button
                    type="submit"
                    className="btn btn-outline-primary mt-1">
                        Agregar
                    </button>
                </div>
            </div>

        </>
    )
}
