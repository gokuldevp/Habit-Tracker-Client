import { combineReducers } from 'redux';
import habitsReducer from "./habits";
import navReducer from "./navReducer"; 

const rootReducer = combineReducers({
  habits: habitsReducer,
  nav: navReducer
});

export default rootReducer;
