// src/redux/reducers/habits.js
import { habitsActions } from "../actions";
const { ADD_HABIT, UPDATE_STATUS} = habitsActions;

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

    case UPDATE_STATUS:
      const { habitId, newStatus } = action.payload;
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === habitId ? { ...habit, status: newStatus } : habit
        ),
      };

    default:
      return state;
  }
};

export default habitsReducer;
