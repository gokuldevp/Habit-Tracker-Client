// src/redux/store/store.js
import { createStore } from 'redux';
import rootReducer from '../Reducer/index';
import { habitsActions } from '../actions';
const {addHabit} = habitsActions;

const store = createStore(rootReducer);

// Define the days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Loop through the days of the week to add default habits
for (let i of daysOfWeek) {
  // Create a new habit for working out
  const newHabit1 = {
    id: i + Date.now()+1,
    name: "Work Out",
    time: "08:00",
    status: 'None',
    day: i,
  };
  
  // Dispatch the action to add the habit to the store
  store.dispatch(addHabit(newHabit1));

  // Create a new habit for sleeping
  const newHabit2 = {
    id: i + Date.now()+2,
    name: "Sleep",
    time: "22:00",
    status: 'None',
    day: i,
  };

  // Dispatch the action to add the habit to the store
  store.dispatch(addHabit(newHabit2));
}

// Export the store to make it available for the rest of the application
export default store;
