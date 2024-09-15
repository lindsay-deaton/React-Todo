  
import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const tasks = [
  {
    task: 'Go to store',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Fix trim',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  //Constructor with state
  constructor() {
    super();
    //initialize state object
    this.state = {
      tasks: tasks,
    }
  }
  //Class methods to update state
  handleToggleTask = taskId => {
    this.setState = ({
      //loop through all tasks, find the one on which we clicked, toggle the purchased field for that item, else leave item untouched.
      tasks: this.state.tasks.map(task=> {
      if(task.id === taskId) {
      return {
        ...task, completed: !task.completed
      };
    } return task;
  })
});
};

  clearTask = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };

  handleSubmit = task => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: task,
        id: Date.now(),
        completed: false,
        }]
      })
    }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      newTask: {
        ...this.state.newTask,
        task: e.target.value
      }
    })
  };
  
  // addTask = (taskName) => {
  //   this.setState({
  //     tasks: [...this.state.tasks, newTask]
  //   })
  // }
  //going to take addTask and pass it down as a prop to my form component and it has the item

  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
      //as we loop over that array, we're going to look at one item at a time and say "if the item that we're looping through's id matches the items id we've clicked on, then we're going to return a new object.  copying in our old item and toggle the completed field to the opposite for the task.  if it doesn't match, we'll return our task.
  

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewTask={this.handleSubmit}
            newTask={this.state.newTask}
            handleChanges={this.handleChanges}
          />
        </div>
        <TodoList toggleTask={this.handleToggleTask} tasks={this.state.tasks} clearTask={this.clearTask} />
      </div>
    );
  }
}

export default App;
