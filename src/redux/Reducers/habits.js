// src/redux/reducers/habits.js
import { habitsActions } from "../actions";
const { ADD_HABIT } = habitsActions;

// Initial state for the habits reducer
const initialState = {
  habits: [],
};

// Habits reducer function
const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action to add a new habit
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    // Add other cases if needed
    default:
      // Return the current state if the action type doesn't match
      return state;
  }
};

export default habitsReducer;
