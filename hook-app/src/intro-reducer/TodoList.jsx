import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({items, onDelete, onToggleTodo})=>{
    return (
        <ul className="list-group">
            {items.map((item,index)=>{
                 return <TodoItem key={index} todo={item} onDeleteItem = {onDelete} onToggleTodo={onToggleTodo} />
             })}
        </ul>
    )
}
