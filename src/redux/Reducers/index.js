import { combineReducers } from 'redux';
import habitsReducer from "./habits";
import navReducer from "./navReducer"; 
import weekReducer from './weekReducer';

const rootReducer = combineReducers({
  habits: habitsReducer,
  nav: navReducer,
  week: weekReducer
});

export default rootReducer;
