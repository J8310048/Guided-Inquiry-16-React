import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "../global_components/List";
import Detail from "../global_components/Detail";
import AddToList from "../global_components/AddToList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    };
  }

  addTask = (task) => {
    this.setState(
      (prevState) => {
        const tasks = prevState.tasks.slice();
        tasks.push(task);
        return { tasks };
      },
      () => localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  deleteTask = (id) => {
    this.setState(
      (prevState) => {
        const tasks = [];
        for (let i = 0; i < prevState.tasks.length; i++) {
          if (prevState.tasks[i].id !== id) {
            tasks.push(prevState.tasks[i]);
          }
        }
        return { tasks };
      },
      () => localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  updateTask = (updatedTask) => {
    this.setState(
      (prevState) => {
        const tasks = [];
        for (let i = 0; i < prevState.tasks.length; i++) {
          if (prevState.tasks[i].id === updatedTask.id) {
            tasks.push(updatedTask);
          } else {
            tasks.push(prevState.tasks[i]);
          }
        }
        return { tasks };
      },
      () => localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    );
  };

  render() {
    return (
      <Router>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="w-full max-w-md p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <List tasks={this.state.tasks} deleteTask={this.deleteTask} />
                }
              />
              <Route
                path="/add"
                element={<AddToList addTask={this.addTask} />}
              />
              <Route
                path="/task/:id"
                element={
                  <Detail
                    tasks={this.state.tasks}
                    updateTask={this.updateTask}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
