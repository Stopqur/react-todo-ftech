import React from 'react';

import './App.css';
import TasksList from './components/TasksList';
import Form from './components/Form'
import Filtration from './components/Filtration';

const App = () => {
  return (
    <div className="App">
      <h1 className='title'>todo list</h1>
      <Form />
      <TasksList />
      <Filtration />
    </div>
  )
}

export default App;
