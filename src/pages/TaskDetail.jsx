import React from 'react';
import { useParams, Link } from 'react-router-dom';

//Task Details page handles viewing of data entered
const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks[id];

  if (!task) {
    return <p className="text-red-500">Task not found!!!</p>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center px-5 my-4 w-3/6 h-auto bg-gray-300 rounded shadow-md">
      <h2 className="text-2xl font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <div className="mt-12">
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Back to Task List
      </Link>
      </div>
    </div>
  );
};

export default TaskDetail;
