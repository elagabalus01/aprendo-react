export const TodoItem = ({todo})=>{
    console.log(todo)
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{todo.description}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}
