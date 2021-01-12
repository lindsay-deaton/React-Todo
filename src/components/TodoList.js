// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

//Function Component

import React from "react"
import Todo from "./Todo";

const TodoList = props => {
console.log(props)
  return (
    <div className="todo-list">
      {props.tasks &&  props.tasks.map(item => (

      <Todo toggleTask={props.toggleTask}
        key={item.id} task={item}
      />
       ))} 
      <button  className="clear-btn" onClick={props.clearCompleted}>
      Clear Completed
      </button>
    </div>
  )
}

export default TodoList;