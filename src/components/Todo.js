import React from 'react'

const Todo = props => {
  const handleClick = (e) => {
  props.toggleTask(props.item.id);
};
    console.log(props)
  // }
  return (
    <div
      onClick={handleClick} className={`task${props.task.completed ? "completed" : ""}`}>
  <p>{props.task.task}</p>
    </div>
  )
};
export default Todo;
