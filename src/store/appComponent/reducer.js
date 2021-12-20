const defaultState = {
    tasks: [],
    filterTasks: []
}

export const allTasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
        filterTasks: [...state.tasks, action.payload]
      }
          
    case 'DELETE_TASK':
      const newDeleteTasks = state.filterTasks.filter(item => item.id !== action.payload) 
      return {
        tasks: [...newDeleteTasks],
        filterTasks: [...newDeleteTasks]
      }

    case 'CHANGE_TASK_TITLE': 
      const newTitleTasks = state.filterTasks.map(item => {
        if(item.id === action.payload.id) {
          item.title = action.payload.title
          return item
        } else {
          return item
        }
      })   
      return {
        filterTasks: [...newTitleTasks],
        tasks: [...newTitleTasks]
      } 

    case 'CHANGE_TYPE_FIELD_TODO': 
      const toggleFieldArr = state.filterTasks.map(item => {
        if(item.id === action.payload.id) {
          item.typeField = action.payload.typeField
          return item
        } else {
          return item
        }
      })
      return {
        filterTasks: [...toggleFieldArr],
        tasks: [...toggleFieldArr]
      }
  
    case 'CHANGE_TASK_COMPLETED':
      const newCompleted = state.filterTasks.map(task => {
        if(task.id === action.payload.id) {
          task.completed = action.payload.completed
          return task
        } else {
          return task
        }
      })
      return {
        filterTasks: [...newCompleted],
        tasks: [...newCompleted]
      }

    case 'FILTER_ALL':
      return {
        filterTasks: [...state.tasks],
        tasks: [...state.tasks]
      }
    
    case 'FILTER_COMPLETED':
      const newFilterDoneTasks = state.tasks.filter(item => item.completed === action.payload)
      return { 
        filterTasks: [...newFilterDoneTasks],
        tasks: [...state.tasks]
      }

    case 'FILTER_UNCOMPLETED':
        const newFilterUnDoneTasks = state.tasks.filter(item => item.completed === action.payload)
        return {
          filterTasks: [...newFilterUnDoneTasks],
          tasks: [...state.tasks]
        }

    default: 
      return state
  }
}