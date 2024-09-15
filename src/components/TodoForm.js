import React from "react";
//Class Component

class TodoForm extends React.Component {
  //Constructor with State
  constructor() {
    super();
    this.state = {
      newTask: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e)
    this.setState({
      newTask: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          name="task" value={this.state.newTask} onChange={this.handleChange}/>
        <button>Add Todo</button>
      </form>
    )
  }
}
export default TodoForm;