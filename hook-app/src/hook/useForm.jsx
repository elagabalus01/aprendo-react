import {useState} from "react";

export const useForm = (initialForm = {
        username: 'elagabalus',
        email: 'elagabalus@example.com',
        password: 'x'
    }) =>{

    const [ formState, setFormState ]= useState(initialForm);

    const {username, email, password} = formState

    const onInputChange = ({target})=>{
        const {name, value} = target
        setFormState({
                ...formState,
                [ name ]: value
            }
        )
        console.log(username, email)
    }

    const onResetForm = ()=>{
        setFormState(initialForm)
    }


    return {
        formState,
        onInputChange,
        onResetForm
    }
}
