import React from 'react';
import { connect } from 'react-redux'

import Task from './Task';
import {setTasks, 
  setFilterTasks, 
  setTaskTitle, 
  setTaskCompleted, 
  setTaskTypeField, 
  setTaskDelete
} from '../store/tasksList/actions'

const mapStateToProps = (state) => {
  console.log(state.tasksList.filterTasks)
  return {
    tasks: state.tasksList.tasks,
    filterTasks: state.tasksList.filterTasks
  }
}

const mapDispatchToProps = {
  setTasks, 
  setFilterTasks, 
  setTaskTitle, 
  setTaskCompleted, 
  setTaskTypeField ,
  setTaskDelete,
}
const TasksList = ({ 
  filterTasks, 
  tasks,
  setTasks, 
  setFilterTasks, 
  setTaskTitle, 
  setTaskCompleted, 
  setTaskTypeField ,
  setTaskDelete
}) => {
  let removeTask = (task) => {
    setTasks(tasks.filter(item => item.id !== task.id))
    setFilterTasks(tasks.filter(item => item.id !== task.id))
  }
  return (
    <ul className='tasksList'>
      {filterTasks.length === 0
      ? <h1 style={{color: 'teal'}}>No tasks</h1>
      : filterTasks.map((task, index) => {
          return (
            <Task 
              changeTask={setTaskTitle}
              task={task}
              id={index} 
              key={task.id}
              removeTask={removeTask}
              setTaskTypeField={setTaskTypeField}
              setTaskCompleted={setTaskCompleted}
              setTaskDelete={setTaskDelete}
            />
          )
        })
      }
    </ul> 
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);