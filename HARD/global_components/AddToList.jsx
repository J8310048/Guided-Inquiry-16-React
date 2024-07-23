import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class AddToList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.props.navigate("/");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="bg-white p-4 rounded shadow"
      >
        <h1 className="text-xl font-bold mb-4">Add</h1>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    );
  }
}

function AddToListWithNavigate(props) {
  const navigate = useNavigate();
  return <AddToList {...props} navigate={navigate} />;
}

export default AddToListWithNavigate;
