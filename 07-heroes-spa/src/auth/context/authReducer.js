import {useReducer} from "react";
import {types} from "../types/types.js";

/*
state : {
    logged: false,
    username: null
}

 */
export const authReducer = (state, action)=>{
    switch(action.type){
        case(types.logout):
            return {
                ...state,
                logged: false,
                username: null
            }
        case(types.login):
            return {
                ...state,
                logged: true,
                username: action.username
            }
        default:
            return state
    }
}
