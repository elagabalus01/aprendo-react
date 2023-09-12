import {useForm} from "../hook/index.js";

export const TodoForm = ({onFormSubmit})=>{

    const {formState, onInputChange, onResetForm }= useForm({
        description: ""
    })

    const onFormSubmite = (event)=>{
        console.log(formState.description)
        event.preventDefault()
        if(formState.description.length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: formState.description
        }

        onFormSubmit(newTodo)

    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <input
                name="description"
                type="text"
                className = "form-control"
                value={formState.description}
                onChange={onInputChange}
            />
            <button

                onClick={onFormSubmite}
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </>
    )
}
