import TodoItem from "./TodoItem";
import "./TodoList.css"
function TodoList({todos, onChange, onDelete}) {
    return(
        <div className="list">
            {
                todos.map((todo)=>{
                    return (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        onChange={onChange}
                        onDelete={onDelete}
                        />
                    )
                })
            }
        </div>  
    )
}

export default TodoList;