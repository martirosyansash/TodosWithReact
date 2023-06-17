import "./TodoFooter.css"

function TodoFooter({todos, clearCompleted}){
    const filteredSize = todos.filter((todo)=>{
        return todo.isCompleted !== false;
    }).length;
    return(
        <div className="footer">
            <span className="completed">{filteredSize}/{todos.length} Completed</span>
            <button className="footer-btn" onClick={clearCompleted}>Clear Commpleted</button>
        </div>
    );
}

export default TodoFooter;