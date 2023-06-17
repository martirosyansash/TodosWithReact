import { useState } from "react";
import "./TodoForm.css"
function TodoForm({onAdd}){
    const [text, setText] = useState("");
    return(
        <form className="form" 
        onSubmit={(e)=>{
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="inputText" type="text" value={text} placeholder="What needs to be done?" onChange={(e) =>{
                setText(e.target.value);
            }}/>
            <button className="inputBtn">Add</button>
        </form>
    );
}

export default TodoForm;