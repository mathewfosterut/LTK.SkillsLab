import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';

const reducers = combineReducers({
    toDo: toDoReducer,
})

export default reducers;