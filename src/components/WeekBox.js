import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/WeekBox.module.css';

function WeekBox(props) {
  const { day } = props;

  return (
    <Link to={`/habit/daily/${day[0]}`} className={styles.weekBoxLink}>
      <div className={styles.weekBox} style={{ backgroundColor: day[2] }}>
        <div>
          <h3>{day[1]}</h3>
        </div>

        <div>
          <h3>{day[0]}</h3>
        </div>

        <div>
          <h3>Status: </h3>
        </div>
      </div>
    </Link>
  );
}

export default WeekBox;
