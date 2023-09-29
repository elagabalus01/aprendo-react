import {useReducer} from "react";
import {authReducer} from "./authReducer.js";
import {AuthContext} from "./AuthContext.jsx";
import {types} from "../types/types.js";

const initialState = {
    logged: false
}

export const AuthProvider = ({children})=>{
    const init = ()=>{

        const user = localStorage.getItem('user')

        return {
            logged: !!user,
            username: user
        }
    }
    const [state, dispatch] = useReducer(authReducer, initialState, init)


    const login = (user)=>{
        const action = {
            type: types.login,
            username: user
        }

        localStorage.setItem('user', user)

        dispatch(action)
    }

    const logout = ()=>{
        const action = {
            type: types.logout
        }
        dispatch(action)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{authState: state, login, logout}}>
            {children}
        </AuthContext.Provider>)

}
