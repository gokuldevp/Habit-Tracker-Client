import styles from '../styles/AddHabits.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/actions/habits';

function AddHabits() {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // State to manage habit data
  const [habitData, setHabitData] = useState({
    name: '',
    time: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Iterate over days of the week to create habits
    for (let i of daysOfWeek) {
      // Create a new habit object
      const newHabit = {
        id: i + Date.now(),
        name: habitData.name,
        time: habitData.time,
        status: 'None',
        day: i,
      };

      // Dispatch the addHabit action
      dispatch(addHabit(newHabit));
    }

    // Clear the form after submitting
    setHabitData({
      name: '',
      time: '',
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    setHabitData({
      ...habitData,
      [e.target.name]: e.target.value,
    });
  };

  // JSX structure for the AddHabits component
  return (
    <div className={styles.addHabits}>
      <h1>Add Habits</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <div className={styles.form_item}>
            <label htmlFor="name">Habit Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={habitData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.form_item}>
            <label htmlFor="time">Time : </label>
            <input
              type="time"
              name="time"
              id="time"
              value={habitData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
}

export default AddHabits;
