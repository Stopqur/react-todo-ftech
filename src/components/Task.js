import React from 'react';

const Task = ({
  task, 
  removeTask, 
  checkTask, 
  changeTextTask, 
  changeFieldTask 
}) => {
  const handleChangeFieldTask = (id) => {
    changeFieldTask(id)
  }
  const handleCheckTask = () => {
    checkTask(task.id)
  }
  
  const handleChangeTextTask = (text, id) => {
    changeTextTask(text, id)
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
        onDoubleClick={e => handleChangeFieldTask(task.id)}
      >
        {(task.typeField)
        ? <p>{task.title}</p>
        : <input 
            className='task__text-input'
            value={task.title}
            onChange={e => handleChangeTextTask(e.target.value, task.id)}
            disabled={task.typeField}
            onKeyPress={e => {
              if(e.key === 'Enter') {
                handleChangeFieldTask(task.id)
              }
            }} 
        />}
      </div>
      <button onClick={() => removeTask(task)}>удалить</button>
    </li>
  )
}

export default Task;