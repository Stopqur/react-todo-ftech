import React from 'react';
import './App.css';
import TasksList from './components/TasksList';
import Form from './components/Form'
import Filtration from './components/Filtration';

import { connect } from 'react-redux'
import {setTasks, setFilterTasks, setTaskTitle, setTaskCompleted, setTaskTypeField, 
        setTaskDelete, setFiltrationAll, setFiltrationDone, setFiltrationUnDone } from './store/appComponent/actions'



const mapStateToProps = (state) => {
  return {
    tasks: state.app.tasks,
    filterTasks: state.app.filterTasks
  }
}

const mapDispatchToProps = {
  setTasks: setTasks,
  setFilterTasks: setFilterTasks,
  setTaskTitle: setTaskTitle,
  setTaskCompleted: setTaskCompleted,
  setTaskTypeField: setTaskTypeField,
  setTaskDelete,
  setFiltrationAll,
  setFiltrationDone,
  setFiltrationUnDone,
}

function App( { 
            tasks, 
            filterTasks, 
            setTasks, 
            setFilterTasks, 
            setTaskTitle, 
            setTaskCompleted, 
            setTaskTypeField ,
            setTaskDelete,
            setFiltrationAll,
            setFiltrationDone,
            setFiltrationUnDone
        }) 

  {
    let createTask = (newPost) => {
      setTasks(newPost)
      setFilterTasks(newPost)
    }

    let removeTask = (task) => {
      setTasks(tasks.filter(item => item.id !== task.id))
      setFilterTasks(tasks.filter(item => item.id !== task.id))
    }

    return (
        <div className="App">
          <h1 className='title'>todo list</h1>
          <Form createTask={createTask}/>
          <TasksList 
            removeTask={removeTask} 
            filterTasks={filterTasks}
            changeTask={setTaskTitle}
            setTaskCompleted={setTaskCompleted}
            setTaskTypeField={setTaskTypeField}
            setTaskDelete={setTaskDelete}
          />
          <Filtration 
            setFiltrationAll={setFiltrationAll}
            setFiltrationDone={setFiltrationDone}
            setFiltrationUnDone={setFiltrationUnDone}
          />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
