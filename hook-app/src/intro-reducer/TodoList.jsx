import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({items})=>{
    return (
        <ul className="list-group">
            {items.map((item,index)=>{
                 return <TodoItem key={index} todo={item} />
             })}
        </ul>
    )
}
