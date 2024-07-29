import React from 'react';
import { GrTasks } from "react-icons/gr";

//Header Component
const Header = () => {
  return (
    <div className='bg-gray-300 py-3 flex items-center'>
      <GrTasks className='text-4xl text-gray-700 ml-4' />
      <h1 className='text-2xl text-gray-700 font-bold ml-4'>Task Manager</h1>
    </div>
  );
};

export default Header;
