import "./TodoItem.css"
function TodoItem({todo, onChange, onDelete}){
    return(
        <div className="items">
            <label className="item">
                <input 
                    className="checkbox"
                    type="checkbox" 
                    checked={todo.isCompleted} 
                    onChange={((e)=>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                })}/>
                <span className="text">{todo.text}</span>
                <button 
                    className="x-btn"
                    onClick={()=>{
                    onDelete(todo);
                }}> X </button>
            </label>
        </div>
    )
}
export default TodoItem;