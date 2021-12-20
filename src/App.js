import React, { useState } from 'react';
import Form from './components/Form'
import Filtration from './components/Filtration';

import './App.css';
import TasksList from './components/TasksList';

const App = () => {
  const [filterTasks, setFilterTasks] = useState([])
  const [tasks, setTasks] = useState([])
  
  const createTask = (newPost) => {
    setTasks([...tasks, newPost])
    setFilterTasks([...tasks, newPost])
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(item => item.id !== task.id))
    setFilterTasks(tasks.filter(item => item.id !== task.id))
  }

  const changeTask = (id, newText) => {
    const editArr = tasks.map(item => {
      if(item.id === id) {
        item.title = newText

        return item
      } else {
        return item
      }
    })
    setFilterTasks(editArr)
  }

  const checkTask = (id) => {
    const editArr = tasks.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
        return item
      } else {
        return item
      }
    })
    setFilterTasks(editArr) 
  }

  const changeTextTask = (text, id) => {
    const editTextArr = tasks.map(item => {
      if(item.id === id) {
        item.title = text
        return item
      } else {
        return item
      }
    })
    setFilterTasks([...editTextArr])
    setTasks([...editTextArr])
  }

  const changeFieldTask = (id) => {
    const newFieldTasks = tasks.map(item => {
      if(item.id === id) {
        item.typeField = !item.typeField
        return item
      } else {
        return item
      }
    })
    setTasks([...newFieldTasks])
    setFilterTasks([...newFieldTasks])
  }

  const filterCompleted = () => {
    setFilterTasks(tasks.filter(item => item.completed === true))
  }

  const filterUncompleted = () => {
    setFilterTasks(tasks.filter(item => item.completed === false))
  }

  const filterAll = () => {
    setFilterTasks([...tasks])
  }

  return (
    <div className="App">
      <h1 className='title'>todo list</h1>
      <Form createTask={createTask}/>
      <TasksList 
        removeTask={removeTask} 
        filterTasks={filterTasks}
        changeTask={changeTask}
        checkTask={checkTask}
        changeTextTask={changeTextTask}
        changeFieldTask={changeFieldTask}
      />
      <Filtration 
        filterCompleted={filterCompleted}
        filterUncompleted={filterUncompleted}
        filterAll={filterAll}
      />
    </div>
  )
}

export default App;
