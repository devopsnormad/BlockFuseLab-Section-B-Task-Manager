import React from 'react';
import { Link } from 'react-router-dom';

//TaskList component for handling addition, editing and deletion of Entry
const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      <h2 className="text-2xl py-3 text-gray-700 font-bold mt-4 text-center rounded ">Task List</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="p-4 bg-gray-300 flex flex-col justify-center items-center px-5 my-2 mx-auto w-3/6 h-auto rounded shadow-md">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="mt-10 flex space-x-2">
              <button
                onClick={() => editTask(index)}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
              <Link to={`/task/${index}`} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
