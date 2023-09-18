import {todoReducer} from "../../src/intro-reducer/todoReducer.js";

describe("pruebas del todo reducer", ()=>{
    test("initial state", ()=>{

        const initialState = {
            title: "todo 1",
            done: false,
            id: 1
        }

        const state = todoReducer(initialState, {})

        expect(state).toBe(initialState)
    })
})
