import React from 'react';

function Task({task, removeTask, changeTask, setTaskCompleted, setTaskTypeField, setTaskDelete }) {    
    // function handleChangeTask(id, text) {
    //     setFlagDisabled(true)
    //     changeTask(id, text)
    // }
    const handleChangeTypeField = () => {
        console.log('double')
        setTaskTypeField(!task.typeField, task.id)
    }

    const handleCheckTask = () => {
        setTaskCompleted(task.id, !task.completed)
        // setTaskChecked(task.completed)
    }

    const handleDeleteTask = () => {
        setTaskDelete(task.id)
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
                onDoubleClick={handleChangeTypeField}
            >
                {task.typeField
                ? <p>{task.title}</p>
                : <input 
                    className='task__text-input'
                    autoFocus="autofocus"
                    value={task.title}
                    onChange={e => changeTask(task.id, e.target.value)}
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