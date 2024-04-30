import React, { useState,useEffect } from "react";
import "../App.css";
import "../index.css";



const TodoList = () => {
  const [isComplete, setisComplete] = useState(false);
const [allTodos,setTodos] = useState([]);
const [newTitle,setNewTitle] = useState("");
const [newDescription,setNewDescription] = useState("");
const [completedTodos, setCompletedTodos] = useState([]);
const handleAddTodo = () =>{
    let newTodoItem = {
        title:newTitle,
        description:newDescription
    }
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
}
const handleDeleteTodo = (index) => {
    let reducedTodo =[...allTodos];
    reducedTodo.splice(index,1); 
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);

};
const handleComplete = (index) => {
  let now = new Date();
  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  let yyyy = now.getFullYear();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let completedOn = dd + '-' + mm + '-' + yyyy + '-' + 'at' + h + ':' + m + ':' + s;

  let filteredItem = {
    ...allTodos[index], 
    completedOn:completedOn
  }
  let updatedCompletedArr = [...completedTodos];
  updatedCompletedArr.push(filteredItem);
  setCompletedTodos(updatedCompletedArr);
handleDeleteTodo(index);
localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr))
};
const handleDeleteCompletedTodo = (index) => {
  let reducedTodo =[...completedTodos];
  reducedTodo.splice(index); 
  localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
  setCompletedTodos(reducedTodo);
};

useEffect(() =>{
let savedTodo = JSON.parse(localStorage.getItem('todolist'));
let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));

if(savedTodo){
    setTodos(savedTodo);
}
if(savedCompletedTodo){
  setCompletedTodos(savedCompletedTodo);
}
}, []);
  return (
    <div className="App">
      <h1> Min todo lista!</h1>

      <div className="Todo-wrapper">
        <div className="Todo-input">
          <div className="Todo-input-item">
            <label> Title </label>
            <input typ="text" value={newTitle} onChange = {(e) => setNewTitle(e.target.value)} placeholder="What´s the tasks title?" />
          </div>

          <div className="Todo-input-item">
            <label> Description </label>
            <input typ="text" value={newDescription} onChange = {(e) => setNewDescription(e.target.value)} placeholder="What´s the tasks description?" />
          </div>
          <div className="Todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primaryBtn">
              Add to list
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isComplete === false && "active"}`}
            onClick={() => setisComplete(false)}
          >
            ToDo
          </button>
          <button
            className={`secondaryBtn ${isComplete === true && "active"}`}
            onClick={() => setisComplete(true)}
          >
            Completed
          </button>
        </div>
        <div className="todo-list">
       {isComplete === false && allTodos.map((item,index)=>{
        return(
            <div className="todo-list-item" key={index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>

          <div className="Buttons">
         <button className="Deleteit" onClick={()=> handleDeleteTodo(index)}>Ta bort</button>
         <button className="complete" onClick = {() => handleComplete(index)} >Färdig</button>

        </div>
        </div>
        );
       })}
       {isComplete === true && completedTodos.map((item,index)=>{
        return(
            <div className="todo-list-item" key={index}>
            <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><small>Completed on: {item.completedOn}</small></p>

            </div>

          <div className="Buttons">
         <button className="Deleteit" onClick={()=> handleDeleteCompletedTodo(index)} title ="Delete?">Ta bort</button>
        </div>
        </div>
        );
       })}
                 {allTodos.length === 0 && <p>No more todos left!</p>}

        </div>
      </div>
    </div>
  );
};

export default TodoList;
