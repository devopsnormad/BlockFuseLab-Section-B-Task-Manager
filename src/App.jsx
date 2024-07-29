import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className='App'>
      <Header/>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path='/task/:id' element={<TaskDetail tasks={tasks} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
