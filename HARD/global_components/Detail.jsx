import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

class Detail extends Component {
  constructor(props) {
    super(props);
    const taskId = parseInt(this.props.params.id, 10);
    const task = this.props.tasks.find((task) => task.id === taskId);
    this.state = {
      task: task || { title: "", description: "" },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      task: {
        ...prevState.task,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTask(this.state.task);
    this.props.navigate("/");
  };

  render() {
    const { task } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="bg-white p-4 rounded shadow"
      >
        <h1 className="text-xl font-bold mb-4">Detail</h1>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={this.handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={this.handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    );
  }
}

function DetailWithParams(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <Detail {...props} params={params} navigate={navigate} />;
}

export default DetailWithParams;
