import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task) => ( 
        <li key={task.id} className="flex items-center justify-between px-4 py-2 bg-white shadow-md rounded-md">
          <span>{task.text}</span>
          <button
            onClick={() => handleRemove(task.id)}
            className="inline-block py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600"
          >
            Remove
          </button>
        </li>
        
      ))}
    </ul>
  );
};

export default TaskList;
