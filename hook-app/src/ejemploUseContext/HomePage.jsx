import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const HomePage = ()=>{

    const {user} = useContext(UserContext)

    return (
        <>
            <h1>HOME PAGE</h1>
            <hr/>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}
