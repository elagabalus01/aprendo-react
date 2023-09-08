import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";
import {useForm} from "../hook/useForm.jsx";


export const FormWithCusstomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm()

    const {username, email, password} = formState

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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="******"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            {
                (username == "elagabalus2") && <Message/>
            }

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}
