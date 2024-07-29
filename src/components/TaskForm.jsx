import React, { useState, useEffect } from "react";

//Task form components

//useState hook to handle Task entry and Error 
const TaskForm = ({ addTask, taskToEdit, updateTask }) => {
  const [task, setTask] = useState({ title: "", description: "" });
  const [error, setError] = useState("");

  //useEffect hook to handle fetching fetching of task
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) {
      setError("All fields are required *");
      return;
    }
    if (taskToEdit) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: "", description: "" });
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center px-5 my-4 mx-auto w-3/6 h-96 bg-gray-300 rounded shadow-md"
    >
      <div className="mb-4 w-full">
        <h1 className="text-2xl text-gray-700 font-bold text-center">Task Form</h1>
        <label className="block text-gray-700 font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-gray-700 font-semibold">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="mt-1 block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {taskToEdit ? "Update" : "Add"} Task
      </button>
    </form>
  );
};

export default TaskForm;
