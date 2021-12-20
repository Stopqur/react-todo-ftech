export const setTasks = (task) => ({
  type: 'ADD_TASK',
  payload: task
})

export const setFilterTasks = (filterTask) => ({
  type: 'CHANGE_FILTER_TASKS',
  payload: filterTask  
}) 

export const setTaskTitle = (taskId, taskText) => ({
  type: 'CHANGE_TASK_TITLE',
  payload: {
    id: taskId,
    title: taskText
  }
})

export const setTaskTypeField = (flag, taskId) => ({
  type: 'CHANGE_TYPE_FIELD_TODO',
  payload: {
    id: taskId,
    typeField: flag
  }
})

export const setTaskCompleted = (taskId, taskCompleted) => {
  return {
    type: 'CHANGE_TASK_COMPLETED',
    payload: {
      id: taskId,
      completed: taskCompleted
    }
  }
}

export const setTaskDelete = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId
  }
}

export const setFiltrationAll = () => {
  return {
    type: 'FILTER_ALL'       
  }
}

export const setFiltrationDone = () => ({
  type: 'FILTER_COMPLETED',
  payload: true
})

export const setFiltrationUnDone = () => {
  return {
    type: 'FILTER_UNCOMPLETED',
    payload: false
  }
}