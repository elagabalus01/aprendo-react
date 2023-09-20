    import {UserContext} from "./context/UserContext.jsx";
import {useContext} from "react";

export const LoginPage = ()=>{

    const {setUser, user} = useContext(UserContext)


    return (
        <>
            <h1>Login page</h1>
            <pre aria-label="pre-label">
                {JSON.stringify(user)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={
                ()=>{
                    setUser({id:123, name: 'Angel', email: 'angelsantander609@gmail.com'})
                }
            }
            >
                Establecer usuario
            </button>
        </>
    )
}
