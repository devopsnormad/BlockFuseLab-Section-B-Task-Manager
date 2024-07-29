import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = ({ tasks, setTasks }) => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTaskToEdit({ ...tasks[index], index });
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task, i) =>
      i === updatedTask.index ? updatedTask : task
    );
    setTasks(newTasks);
    setTaskToEdit(null);
  };

  return (
    <div className="container px-16 py-4">
      <TaskForm addTask={addTask} taskToEdit={taskToEdit} updateTask={updateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default Home;
