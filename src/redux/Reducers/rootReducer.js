// src/redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import habitsReducer from "./habits";
import navReducer from "./navReducer"; 

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  habits: habitsReducer,
  nav: navReducer,
});

export default rootReducer;
