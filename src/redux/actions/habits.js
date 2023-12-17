// src/redux/actions/habits.js
export const ADD_HABIT = 'ADD_HABIT';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const UPDATE_STATUS = 'UPDATE_STATUS';

export const updateStatus = (habitId, newStatus) => {
  return {
    type: UPDATE_STATUS,
    payload: { habitId, newStatus },
  };
};



