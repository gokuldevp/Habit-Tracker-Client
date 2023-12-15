import styles from '../styles/AddHabits.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/actions/habits';

function AddHabits() {
  const dispatch = useDispatch();
  const [habitData, setHabitData] = useState({
    name: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming you have a unique way to identify habits, use that as an ID
    const newHabit = {
      id: Date.now(),  // You might want to use a more robust ID generation method
      name: habitData.name,
      time: habitData.time,
      status: 'None',  // Default status when adding a new habit
    };

    // Dispatch the addHabit action
    dispatch(addHabit(newHabit));

    // Clear the form after submitting
    setHabitData({
      name: '',
      time: '',
    });
  };

  const handleChange = (e) => {
    setHabitData({
      ...habitData,
      [e.target.name]: e.target.value,
    });
  };

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
