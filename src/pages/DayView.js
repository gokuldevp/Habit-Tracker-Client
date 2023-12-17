// Importing necessary dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DailyBox } from '../components';

// Component to display daily habits
const DailyView = () => {
  // Use the useSelector hook to access the habits from the Redux store
  const habits = useSelector((state) => state.habits.habits);
  const { day } = useParams();

  return (
    <div className="dailyview">
      <h2>{day} View</h2>
      {habits.map((habit) => (
        <div className='habit' key={habit.id}>
          {habit.day === day && <DailyBox habit={habit} />}
        </div>
      ))}
    </div>
  );
};

export default DailyView;
