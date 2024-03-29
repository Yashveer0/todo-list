import React from 'react';
import { Provider } from 'react-redux';
import store from './Store.js';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4 bg-red-400">
        <h1 className="text-3xl font-bold mb-4">Todo list</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
