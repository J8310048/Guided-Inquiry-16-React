import React from "react";
import { NavLink } from "react-router-dom";

function List({ tasks, deleteTask }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Task List</h1>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-200 p-2 rounded"
          >
            <NavLink to={`/task/${task.id}`}>{task.title}</NavLink>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
      <NavLink
        to="/add"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        ADD
      </NavLink>
    </div>
  );
}

export default List;
