// src/redux/actions/habits.js
import { weekActions } from ".";

export const ADD_HABIT = 'ADD_HABIT';

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const UPDATE_STATUS = 'UPDATE_STATUS';


export const updateStatus = (habitId, newStatus) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_STATUS,
      payload: { habitId, newStatus },
    });

    const { habits } = getState().habits;

    // Check if all habits for the week are done
    const isWeekCompleted = habits.every((habit) => habit.status === 'Done');
    if (isWeekCompleted) {
      dispatch(weekActions.checkWeekCompletion());
    }
  };
};



