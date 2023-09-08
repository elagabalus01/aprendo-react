import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";


export const EjemploUseEffect = () => {

    const [ formState, setFormState ]= useState({
        username: 'elagabalus',
        email: 'elagabalus@example.com'
    });

    const {username, email} = formState

    const onInputChange = ({target})=>{
        const {name, value} = target
        setFormState({
            ...formState,
            [ name ]: value
        }
        )
        console.log(username, email)
    }


    useEffect(() => {
        console.log("USE EFFECT SE LLAMO")
    }, [formState]);

    useEffect(() => {
        console.log("USE EFFECT INICIAL")
    }, []);


    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            {
                (username == "elagabalus2") && <Message/>
            }

        </>
    )
}
