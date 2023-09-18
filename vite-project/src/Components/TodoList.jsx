import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './Todo.css'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
  
    <div className="container"  data-aos="zoom-in-up">
    <div>
      <h1  style={{textAlign:"center"}}>Todo App</h1>
      <input
      className="input"
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{padding: "5px",}} 
      />
      <button className="plus" onClick={addTodo} style={{borderRadius:"16px", margin:"10px" , width: "35px" , padding: "5px" ,fontSize:"20px"}} > + </button>
      <ul>
  {todos.map((todo, index) => (
    <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
  ))}
</ul>


    </div>
      </div>
  
  );
}

export default TodoList;