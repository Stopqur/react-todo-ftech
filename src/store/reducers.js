import { combineReducers } from 'redux';
import { allTasksReducer } from './tasksList/reducer'
import { inputTextReducer } from './form/reducer'

export default combineReducers({ 
  tasksList: allTasksReducer,
  form: inputTextReducer
})