import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.Logo}>
        Habit Tracker
      </Link>
      {location.pathname !== '/add-habit' && (
        <Link to="/add-habit" className={styles.btn}>
          Add Habit
        </Link>
      )}
    </div>
  );
}

export default NavBar;

  