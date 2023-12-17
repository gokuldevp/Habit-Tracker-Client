import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../styles/WeekBox.module.css';

function WeekBox(props) {
  // Use the useSelector hook to access the habits from the Redux store
  const habits = useSelector((state) => state.habits.habits);
  const { day } = props;

  // Filter habits based on the selected day
  const habitsForDay = habits.filter((habit) => habit.day === day[1]);

  // Function to determine the week status
  const getWeekStatus = () => {
    // If no habits for the day, status is 'None'
    if (habitsForDay.length === 0) {
      return 'None';
    }

    // Check if all habits for the day are marked as 'Done'
    const isAllDone = habitsForDay.every((habit) => habit.status === 'Done');

    // Return status based on whether all habits are done or not
    return isAllDone ? 'Complete' : 'Not Complete';
  };

  // JSX structure for the WeekBox component
  return (
    <Link to={`/habit/daily/${day[1]}`} className={styles.weekBoxLink}>
      <div className={styles.weekBox} style={{ backgroundColor: day[2] }}>
        <div>
          <h3>{day[1]}</h3>
        </div>

        <div>
          <h3>{day[0]}</h3>
        </div>

        <div>
          <h3>
            Status: {getWeekStatus()}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default WeekBox;
