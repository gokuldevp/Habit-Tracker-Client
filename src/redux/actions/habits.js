// src/redux/actions/habits.js
export const ADD_HABIT = 'ADD_HABIT';

export const addHabit = (habit) => ({
  type: ADD_HABIT,
  payload: habit,
});
