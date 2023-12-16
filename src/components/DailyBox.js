import React, { useState } from 'react';
import styles from '../styles/DailyBox.module.css';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../redux/actions/habits';

function DailyBox(props) {
  const { habit } = props;
  const [selectedStatus, setSelectedStatus] = useState(habit.status);
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    dispatch(updateStatus(habit.id, newStatus));
  };

  return (
    <div className={styles.dailyBox}>
      <div>
        <h3>Habit: {habit.name}</h3>
      </div>

      <div>
        <h3>Time: {habit.time}</h3>
      </div>

      <div>
        <h3>Status:
          <select value={selectedStatus} onChange={handleStatusChange}>
            <option value="Done">Done</option>
            <option value="Not done">Not done</option>
            <option value="None">None</option>
          </select>
        </h3>
      </div>
    </div>
  );
}

export default DailyBox;
