import React, { useState } from 'react';

function Task({task, removeTask, changeTask, checkTask }) {
    const[textTask, setTextTask] = useState(task.title)
    const [flagDisabled, setFlagDisabled] = useState(true)
    // const [taskChecked, setTaskChecked] = useState(task.completed)

    function activeInput() {
        setFlagDisabled(false)
    }

    function handleChangeTask() {
        setFlagDisabled(true)
        changeTask(task.id, textTask)
    }

    function handleCheckTask() {
        checkTask(task.id)
        // setTaskChecked(task.completed)
    }
    
    return (
        <li className='task'
        >
            <input type='checkbox'
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
                 onDoubleClick={activeInput}
            >
                {(flagDisabled)
                ? <p>{textTask}</p>
                : <input 
                    className='task__text-input'
                    value={textTask}
                    onChange={e => setTextTask(e.target.value)}
                    disabled={flagDisabled}
                    onKeyPress={e => {
                        if(e.key === 'Enter') {
                            handleChangeTask()
                        }
                    }}
                    
                    
                  />}
            </div>
            <button onClick={() => removeTask(task)}>удалить</button>
            
        </li>
    )
}

export default Task;