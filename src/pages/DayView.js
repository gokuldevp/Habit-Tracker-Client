import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/DayView.module.css'

const DailyView = () => {
  // Use the useSelector hook to access the habits from the Redux store
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="dailyview">
      <h2>Daily View</h2>
      {habits.map((habit) => (
        <div className='habit' key={habit.id}>
          <p>{habit.name}</p>
          <p>{habit.time}</p>
          <p>{habit.status}</p>
        </div>
      ))}
    </div>
  );
};

export default DailyView;
