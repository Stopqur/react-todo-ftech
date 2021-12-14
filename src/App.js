import React, { useState } from 'react';
import './App.css';
import TasksList from './components/TasksList';
import Form from './components/Form'
import Filtration from './components/Filtration';

function App() {
  const [filterTasks, setFilterTasks] = useState([])
  const [tasks, setTasks] = useState([])
  
  let createTask = (newPost) => {
    setTasks([...tasks, newPost])
    setFilterTasks([...tasks, newPost])
  }

  let removeTask = (task) => {
    setTasks(tasks.filter(item => item.id !== task.id))
    setFilterTasks(tasks.filter(item => item.id !== task.id))
  }

  let changeTask = (id, newText) => {
    const editArr = tasks.map(item => {
      if(item.id === id) {
        item.title = newText
        return item
      } else {
        return item
      }
    })
    setFilterTasks(editArr)
    // console.log(tasks)
  }

  let checkTask = (id) => {
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

  //Filtration 
  let filterCompleted = () => {
    setFilterTasks(tasks.filter(item => item.completed === true))
  }

  let filterUncompleted = () => {
    setFilterTasks(tasks.filter(item => item.completed === false))
  }

  let filterAll = () => {
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
