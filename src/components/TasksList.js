import React from 'react';
import Task from './Task';

const TasksList = ({ 
  filterTasks, 
  removeTask, 
  checkTask, 
  changeTask, 
  changeTextTask, 
  changeFieldTask 
}) => {
  return (
    <ul className='tasksList'>
      {filterTasks.length === 0
      ? <h1 style={{color: 'teal'}}>No tasks</h1>
      : filterTasks.map((task, index) => {
          return (
            <Task 
              changeTask={changeTask}
              checkTask={checkTask}
              task={task}
              id={index} 
              key={task.id}
              removeTask={removeTask}
              changeTextTask={changeTextTask}
              changeFieldTask={changeFieldTask}
            />
          )
        })
      }
    </ul> 
  )
}

export default TasksList;