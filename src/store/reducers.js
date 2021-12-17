import { combineReducers } from 'redux';
import { allTasksReducer } from './appComponent/reducer'
import { inputTextReducer } from './form/reducer'


export default combineReducers({ 
    app: allTasksReducer,
    form: inputTextReducer
})