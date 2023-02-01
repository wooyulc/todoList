//Todo.js
import React from "react";

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }


    return (
        <div style={{ display: "flex"}}>
            <input type="checkbox" onClick={handleCheckboxClick} />
            <li
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task} {/*print the content of task*/}
            </li>
            <button onClick={handleRemoveClick}>X</button>
        </div>
    ) 

}

export default Todo;