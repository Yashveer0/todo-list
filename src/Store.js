import { createStore, combineReducers } from 'redux';
import taskReducer from './component/TaskReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  tasks: taskReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
