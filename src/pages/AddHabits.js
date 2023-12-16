import styles from '../styles/AddHabits.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/actions/habits';
// import { getLast7Days } from '../utils/handleDate';

function AddHabits() {
  const dispatch = useDispatch();
  const [habitData, setHabitData] = useState({
    name: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i of daysOfWeek) {
      console.log(i)
      const newHabit = {
        id: i+Date.now(),
        name: habitData.name,
        time: habitData.time,
        status: 'None',
        day: i,
      };
      dispatch(addHabit(newHabit));
    }
  
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
