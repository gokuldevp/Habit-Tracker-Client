// src/redux/reducers/habits.js
import { ADD_HABIT } from '../actions/habits';

const initialState = {
  habits: [],
};

const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    // Add other cases as needed
    default:
      return state;
  }
};

export default habitsReducer;
