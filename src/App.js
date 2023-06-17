import { useReducer,  } from 'react';
import './App.css';
import TodoForm from './TodoForm/TodoForm';
import TodoFooter from './TodoFooter/TodoFooter';
import TodoList from './TodoList/TodoList';

function reducer(state, action){
  if (action.type === "add"){
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ];
  }else if(action.type === "change"){
    return (state.map((t)=>{
      if (t.id === action.payload.todo.id){
        return action.payload.todo;
      }else{
        return t;
      }
    }));
  }else if(action.type ==="delete"){
    return (state.filter((t)=>{
      return t.id !== action.payload.id; 
    }));
  }else if(action.type === "clear"){
    return state.filter((todo)=>{
      return action.payload.isCompleted !== todo.isCompleted;
    });
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer,[
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    }
  ]);
  return ( 
    <div className="App">
        <p>todos</p>
        <TodoForm 
        onAdd={(text)=>{
          dispatch({
            type:"add",
            payload:{
              text:text
            }
          });
        }}
        />
        <TodoList 
        todos={todos}
        onChange={(newTodo)=>{
          dispatch({
            type:"change",
            payload:{
              todo:newTodo
            }
          });
        }}
        onDelete={(todo)=>{
           dispatch({
            type:"delete",
            payload:{
              id:todo.id
            }
           });
        }}
        />
        <TodoFooter todos={todos} clearCompleted={(e)=>{
          dispatch({
            type: "clear",
            payload:{
              isCompleted:true
            }
          });
        }}/>
    </div>
  );
}

export default App;
