import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children})=>{

    const {authState}= useContext(AuthContext)

    if(!authState.logged){
        return children
    }
    return <Navigate to='/marvel'/>


}
