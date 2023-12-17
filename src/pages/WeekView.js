// Importing necessary components and functions
import React from 'react';
import { WeekBox } from '../components';
import { getLast7Days } from '../utils/handleDate';

/**
 * WeekView component to display the weekly view.
 * @returns {JSX.Element} - Rendered component.
 */
function WeekView() {
  return (
    <div className="weekview">
      <h2>Week View</h2>
      {getLast7Days().map((day) => {
        return <WeekBox day={day} key={day[0]} />;
      })}
    </div>
  );
}

export default WeekView;
