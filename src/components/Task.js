import React from 'react';

const Task = ({
  task, 
  changeTask, 
  setTaskCompleted, 
  setTaskTypeField, 
  setTaskDelete 
}) => {    
  const handleChangeTask = (e, id) => {
    changeTask(id, e.target.value)
  }

  const handleChangeTypeField = () => {
    setTaskTypeField(!task.typeField, task.id)
  }

  const handleCheckTask = () => {
    setTaskCompleted(task.id, !task.completed)
  }

  const handleDeleteTask = () => {
    setTaskDelete(task.id)
  }
  
  return (
    <li className='task'
    >
      <input 
        type='checkbox'
        checked={task.completed}
        onChange={handleCheckTask}
      />
      <div 
        style={
          task.completed === true 
          ? {textDecoration: 'line-through'}
          : {textDecoration: 'none'}
        }
        className='task__text'
        onDoubleClick={handleChangeTypeField}
      >
        {task.typeField
        ? <p>{task.title}</p>
        : <input 
            className='task__text-input'
            autoFocus="autofocus"
            value={task.title}
            onChange={e => handleChangeTask(e, task.id)}
            onKeyPress={e => {
              if(e.key === 'Enter') {
                handleChangeTypeField()
              }
            }}     
        />}
      </div>
      <button onClick={handleDeleteTask}>удалить</button>     
    </li>
  )
}

export default Task;